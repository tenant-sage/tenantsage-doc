import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import fs from 'fs/promises';
import path from 'path';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// Map your Notion database IDs to content directories
const CONTENT_MAP = {
  platform:    process.env.NOTION_PLATFORM_DB_ID,
  governance:  process.env.NOTION_GOVERNANCE_DB_ID,
  technology:  process.env.NOTION_TECHNOLOGY_DB_ID,
  developers:  process.env.NOTION_DEVELOPERS_DB_ID,
  resources:   process.env.NOTION_RESOURCES_DB_ID,
};

async function syncSection(section: string, databaseId: string) {
  const pages = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      select: { equals: 'Published' },
    },
  });

  for (const page of pages.results) {
    if (page.object !== 'page') continue;

    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdBlocks);

    // Extract frontmatter from Notion properties
    const title = (page as any).properties?.Name?.title?.[0]?.plain_text ?? 'Untitled';
    const version = (page as any).properties?.Version?.rich_text?.[0]?.plain_text ?? 'v1.0';
    const status = (page as any).properties?.Status?.select?.name ?? 'Draft';
    const docId = (page as any).properties?.DocID?.rich_text?.[0]?.plain_text ?? '';
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    const frontmatter = `---
title: "${title}"
version: "${version}"
status: "${status}"
docId: "${docId}"
section: "${section}"
lastUpdated: "${new Date().toISOString()}"
---

`;

    const outputPath = path.join('content', section, `${slug}.mdx`);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, frontmatter + mdString.parent);

    console.log(`✓ Synced: ${section}/${slug}.mdx`);
  }
}

async function main() {
  console.log('🔄 Syncing content from Notion...');

  for (const [section, dbId] of Object.entries(CONTENT_MAP)) {
    if (!dbId) {
      console.warn(`⚠️  No database ID for section: ${section}`);
      continue;
    }
    await syncSection(section, dbId);
  }

  console.log('✅ Notion sync complete');
}

main().catch(console.error);

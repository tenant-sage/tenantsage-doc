import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

// Map your Notion page IDs to content paths
const PAGE_MAP = {
  // Platform
  'NOTION_PAGE_ID_OVERVIEW':        'content/platform/overview.mdx',
  'NOTION_PAGE_ID_CORE_ARCH':       'content/platform/core-architecture.mdx',
  'NOTION_PAGE_ID_EXEC_MODEL':      'content/platform/execution-model.mdx',
  // Governance
  'NOTION_PAGE_ID_GOV_ENGINE':      'content/governance/governance-engine.mdx',
  'NOTION_PAGE_ID_POLICY_FW':       'content/governance/policy-framework.mdx',
  'NOTION_PAGE_ID_GOV_DECISIONS':   'content/governance/governance-decisions.mdx',
  // Technology
  'NOTION_PAGE_ID_SVC_CONTRACTS':   'content/technology/service-contracts.mdx',
  'NOTION_PAGE_ID_DATA_DEFS':       'content/technology/data-definitions.mdx',
  'NOTION_PAGE_ID_MSG_DEFS':        'content/technology/messaging-definitions.mdx',
  'NOTION_PAGE_ID_API_CATALOG':     'content/technology/api-catalog.mdx',
  'NOTION_PAGE_ID_API_SPEC':        'content/technology/api-specification.mdx',
  // Developers
  'NOTION_PAGE_ID_DEV_GUIDE':       'content/developers/developer-guide.mdx',
  'NOTION_PAGE_ID_IMPL_PATTERN':    'content/developers/implementation-pattern.mdx',
  'NOTION_PAGE_ID_CLIENT_SDKS':     'content/developers/client-sdks.mdx',
  // Resources
  'NOTION_PAGE_ID_DOCS':            'content/resources/documentation.mdx',
  'NOTION_PAGE_ID_WHITEPAPERS':     'content/resources/white-papers.mdx',
  'NOTION_PAGE_ID_DOWNLOADS':       'content/resources/downloads.mdx',
};

async function getPageMeta(pageId) {
  const page = await notion.pages.retrieve({ page_id: pageId });
  return {
    title: page.properties?.title?.title?.[0]?.plain_text ?? 'Untitled',
    lastEdited: page.last_edited_time,
  };
}

async function syncPage(pageId, outputPath) {
  const meta = await getPageMeta(pageId);
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdBlocks);

  const frontmatter = `---
title: "${meta.title}"
lastSync: "${new Date().toISOString()}"
notionId: "${pageId}"
notionLastEdited: "${meta.lastEdited}"
---

`;

  const dir = outputPath.split('/').slice(0, -1).join('/');
  mkdirSync(dir, { recursive: true });
  writeFileSync(outputPath, frontmatter + mdString.parent);
  console.log(`✓ Synced: ${meta.title} → ${outputPath}`);
}

// Sync all pages
for (const [pageId, outputPath] of Object.entries(PAGE_MAP)) {
  await syncPage(pageId, outputPath);
}

console.log('✅ Notion sync complete');

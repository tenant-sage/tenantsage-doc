# TenantSage Documentation Portal

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)

Official documentation portal for **TenantSage** — Governance-First AI Infrastructure.

## Architecture

| Property | Value |
|---|---|
| Framework | Next.js 15 (App Router) |
| Rendering | Static Export |
| Hosting | Cloudflare Pages |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Content | MDX |
| Search | Pagefind |

## Project Structure

```
tenantsage-doc/
├── app/                    # Next.js App Router
├── components/             # Shared UI components
├── content/                # MDX documentation
│   ├── platform/
│   ├── governance/
│   ├── technology/
│   ├── developers/
│   └── resources/
├── public/                 # Static assets
├── .github/workflows/      # CI/CD
└── package.json
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

This produces a static export in `out/` and runs Pagefind to index the documentation.

## Milestones

- [x] **Milestone 1** — Foundation: layout, navigation, design system, dark mode, MDX support
- [ ] **Milestone 2** — Content: all documentation pages populated
- [ ] **Milestone 3** — Advanced: full search, Mermaid diagrams, version selector, Cloudflare deployment

## License

© TenantSage. All rights reserved.

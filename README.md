# tenantsage-doc

> **TenantSage Documentation Portal** — Governance-First AI Infrastructure

This repository contains the source code and content for the official TenantSage documentation portal.

## Overview

TenantSage is a governance-first AI infrastructure platform with architecture designed for multi-tenant isolation, authority hierarchies, and governed retrieval pipelines.

## Documentation Structure

```
tenantsage-doc/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── content/                # MDX documentation content
│   ├── platform/           # Platform overview, core architecture, execution model
│   ├── governance/         # Governance engine, policy framework, decisions
│   ├── technology/         # Service contracts, APIs, data definitions
│   ├── developers/         # Developer guide, SDKs, implementation patterns
│   └── resources/          # White papers, downloads, references
├── public/                 # Static assets
├── styles/                 # Global styles
├── scripts/                # Build and utility scripts
└── .github/
    └── workflows/          # CI/CD GitHub Actions
```

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Rendering | Static Export |
| Hosting | Cloudflare Pages |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | MDX |
| Search | Pagefind |

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

This portal is automatically deployed to Cloudflare Pages via GitHub Actions on every push to `main`.

## License

Copyright © TenantSage. All rights reserved.

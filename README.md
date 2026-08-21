# AquaSense

**A content-rich scientific project site for a conceptual, cell-free water biosensor.**

[Live demo](https://zhiyuanhuang02.github.io/AquaSense-demo/) · [Project design](https://zhiyuanhuang02.github.io/AquaSense-demo/project/) · [Engineering](https://zhiyuanhuang02.github.io/AquaSense-demo/engineering/) · [Results](https://zhiyuanhuang02.github.io/AquaSense-demo/results/)

AquaSense explores how synthetic biology could support preliminary heavy-metal water screening through a sealed, cell-free, colorimetric cartridge. The site is designed to make a complex technical project understandable to readers with different levels of subject knowledge.

## Highlights

- Multi-page scientific narrative with project, engineering, results, and human-practices chapters
- Reusable Astro components and strict TypeScript configuration
- Responsive layouts for content-heavy tables, diagrams, cards, and process documentation
- Accessible mobile navigation, keyboard-operable tabs, visible focus states, and skip navigation
- Interactive result explorer with an equivalent HTML data table
- Light and dark themes with saved preference and reduced-motion support
- Clear evidence labels separating documented design work, illustrative data, and proposed validation
- Automated production deployment through GitHub Actions and GitHub Pages

## Tech stack

- [Astro](https://astro.build/) for static generation
- TypeScript for client-side interactions
- Semantic HTML and modern CSS without a component-library dependency
- GitHub Actions for continuous deployment

## Project structure

```text
.
├── public/                 # favicon, social card, and static metadata
├── src/
│   ├── components/         # navigation, footer, page hero, section navigation
│   ├── layouts/            # shared document shell and metadata
│   ├── pages/              # content chapters and 404 page
│   └── styles/             # design tokens and global responsive system
└── .github/workflows/      # GitHub Pages deployment
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321/AquaSense-demo/`.

Before publishing changes:

```bash
npm run check
npm run build
```

## Accessibility approach

The interface is designed toward WCAG 2.2 AA. It includes semantic landmarks, keyboard-accessible interactions, redundant color labels, table alternatives for charts, responsive reflow, and support for `prefers-reduced-motion`. See the site's [accessibility page](https://zhiyuanhuang02.github.io/AquaSense-demo/accessibility/) for details and known limitations.

## Content status and disclaimer

AquaSense is an independent portfolio concept. It has not been built or experimentally validated. Molecular response values, specificity values, quotations, and usability outcomes are illustrative and exist only to demonstrate scientific communication and interface design. The site must not be used for water-quality, health, diagnostic, or regulatory decisions.

This project is not affiliated with UBC iGEM, the iGEM Foundation, or a testing laboratory.

## License

Code is available under the [MIT License](LICENSE). Site copy and original visual assets may be reused with attribution to Zhiyuan Huang.

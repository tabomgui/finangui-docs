# finangui docs

Source of the documentation site for [finangui](https://github.com/tabomgui/finangui), published at **https://docs-finangui.hengen.com.br**.

Built with [Fumadocs](https://fumadocs.dev) on Next.js. The site is available in English and Brazilian Portuguese.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Writing docs

Pages are MDX files in `content/docs/<locale>/`, where the locale is `en` or `pt-BR`. Both locales use the same file names and the same section structure. When you add or change a page, update both languages.

- `meta.json` in each folder sets the sidebar title and page order.
- Each page needs `title` and `description` in its frontmatter.
- Images go in `public/` and are referenced from the root, e.g. `/screenshots/transactions.png`.
- Components available in MDX without imports: `Callout`, `Cards`, `Card`, `Steps`, `Step`, `Tabs`, `Tab`.
- No emoji in the docs. finangui's UI is in Brazilian Portuguese; keep UI labels in their original form, in bold, with the English meaning in parentheses on first use (e.g. **Categorizar** (Categorize)) — same convention in both locales.
- Documentation is about product behavior (what a screen does, what a rule guarantees), never internal implementation detail (class, Action, table name).

## Deploy

The site runs as a standalone Next.js server in Docker:

```bash
docker compose up -d --build
```

It listens on port `8082` by default (`DOCS_PORT` changes it). Put a TLS-terminating proxy or tunnel in front of it.

`next build` needs more than 1 GB of RAM. On a small host, build the image on another machine and copy it over instead of building in place:

```bash
docker build --platform linux/amd64 -t finangui-docs-docs:latest .
docker save finangui-docs-docs:latest | gzip | ssh <host> 'gunzip | docker load'
ssh <host> 'cd ~/finangui-docs && git pull && docker compose up -d --no-build'
```

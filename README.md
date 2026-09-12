# Academic Archive

Notes, guides, and resources for UCC students.

A Docusaurus site collecting, for every course we cover, a course introduction, a
dump of external resources, and articles written by the Academic Council.

## Requirements

- Node.js >= 20 (developed on 24)
- pnpm (pinned via the `packageManager` field in `package.json`)

## Commands

```bash
pnpm install      # install dependencies
pnpm start        # dev server at http://localhost:3000
pnpm build        # production build into build/
pnpm serve        # serve the production build locally
pnpm typecheck    # tsc --noEmit
pnpm clear        # clear the Docusaurus cache
```

Note: unlike npm, pnpm forwards extra arguments to the underlying script
directly, so use `pnpm start --no-open` (not `pnpm start -- --no-open`).

## Structure

```
docs/
  index.md                 About this guide
  year-8/  year-9/  year-10/
    <course>/index.md      the course page
    <course>/articles/     Academic Council articles for that course
  ib/
    index.md               IB at a glance
    pathways/              the three UCC graduation pathways
    core/                  TOK, Extended Essay, CAS
    subjects/              all IB subjects, alphabetical
templates/article.md       copy this to start a new article
```

Every course page follows the same three-part structure:

1. **Introduction** — what the course is about, important considerations.
2. **Resource dump** — syllabus, textbooks, tutoring sites, video, past papers.
3. **Articles** — links out to the `articles/` folder beside the page.

IB subjects are a single page per subject; HL and SL are properties of that page
(level-tagged sections) rather than separate pages, because a course runs across
both Year 11 and Year 12.

## Adding an article

1. Copy `templates/article.md`.
2. Save it into the relevant course's `articles/` folder, e.g.
   `docs/ib/subjects/philosophy/articles/how-to-construct-a-philosophical-argument.md`.
3. Add the course's subject tag alongside `article` (`tags: [article, philosophy]`).

The article then appears in the sidebar under that course's **Articles** category.
A course with no articles yet renders as a plain sidebar link and automatically
becomes an expandable category once its first article is added.

## Tags

Tag keys and their display labels are defined in `docs/tags.yml`. Pages reference
them by key from front matter. Tags power the cross-cutting views — including
IB subject groups, which is how a subject that spans two groups (Environmental
Systems & Societies is tagged `group-3`, `group-4`, and `interdisciplinary`)
stays a single page while remaining reachable from both groups.

`pnpm build` warns about inline tags that are not declared in `docs/tags.yml`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages at
<https://academic-council.github.io/academic-archive/>.

The Pages project site needs `url` and `baseUrl` in `docusaurus.config.ts` to stay
in sync with the repository name — if the site ever moves to a custom domain,
update both.

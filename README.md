# Academic Archive

Notes, guides, and resources for UCC students.

A Docusaurus site collecting, for every subject we cover, an introduction, a
dump of external resources, and articles written by the Academic Council.

## Requirements

- Node.js >= 20 (developed on 24)
- pnpm (pinned via the `packageManager` field in `package.json`)

## Commands

```bash
pnpm install      # install dependencies
pnpm start        # dev server at http://localhost:3000/academic-archive/
pnpm build        # production build into build/
pnpm serve        # serve the production build locally
pnpm typecheck    # tsc --noEmit
pnpm clear        # clear the Docusaurus cache
```

Note: unlike npm, pnpm forwards extra arguments to the underlying script
directly, so use `pnpm start --no-open` (not `pnpm start -- --no-open`).

## Structure

Every subject is a folder holding its three sections:

```
docs/<stage>/<subject>/
  _category_.json      makes the subject itself clickable
  introduction.md      what the course is about, important considerations
  resource-dump.md     syllabus, textbooks, tutoring, video, past papers
  articles/            Academic Council articles for that subject
```

The wider tree:

```
docs/
  index.md                 About
  year-8/  year-9/  year-10/
  ib/
    index.md               IB at a Glance
    pathways/              the three UCC graduation pathways
    core/                  Theory of Knowledge, Extended Essay, CAS
    subjects/              IB subjects, alphabetical
    systems-transformations/
templates/article.md       copy this to start a new article
```

IB subjects are one subject per folder. HL and SL are properties of that
subject — level-tagged sections and `hl` / `sl` tags — rather than separate
subjects, because a course runs across both Year 11 and Year 12.

Environmental Systems & Societies is a single subject tagged `group-3`,
`group-4`, and `interdisciplinary`, so it is reachable from both groups without
duplicating content.

## Adding an article

1. Copy `templates/article.md`.
2. Save it into the relevant subject's `articles/` folder, e.g.
   `docs/ib/subjects/philosophy/articles/how-to-construct-a-philosophical-argument.md`.
3. Add the subject's tag alongside `article` (`tags: [article, philosophy]`).

The article then appears in the sidebar under that subject's Articles section.

## Markdown

`.md` and `.mdx` files are both parsed as MDX, so anything MDX supports works in
either.

## Tags

Tag keys and their display labels are defined in `docs/tags.yml`. Pages reference
them by key from front matter. Tags power the cross-cutting views, including the
IB subject groups. `pnpm build` warns about inline tags that are not declared in
`docs/tags.yml`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages at
<https://academic-council.github.io/academic-archive/>.

The Pages project site needs `url` and `baseUrl` in `docusaurus.config.ts` to stay
in sync with the repository name. If the site ever moves to a custom domain,
update both.

# Academic Archive

Notes, guides, and resources for UCC students.

## What this is

For every course we cover, the Academic Archive holds three things:

| Section | What goes in it |
| --- | --- |
| **Introduction** | What the course is about, and what to consider before taking it. |
| **Resource dump** | External resources: syllabus documents, textbooks, tutoring and prep sites, videos, past papers. |
| **Articles** | Pieces written by the Academic Council. |

## How it is organised

Everything lives in `docs/`, one folder per course:

```
docs/
  index.md                  About
  year-8/  year-9/  year-10/
    <course>/
      introduction.md
      resource-dump.md
      articles/
  ib-programme/
    index.md                IB at a Glance
    pathways/               the graduation pathways
    core/                   Theory of Knowledge, Extended Essay, CAS
    courses/                IB courses, alphabetical
```

A course and its `articles/` folder always sit together, so an article about
Psychology belongs in `docs/ib-programme/courses/psychology/articles/`.

HL and SL are not separate courses. A course runs across both years of the
diploma, so it gets one page, with the level differences written into it.

## Writing

Every file is **MDX**: Markdown that can also take JSX if you ever need it. You
can write ordinary Markdown and ignore that part entirely.

The guide to keep open while writing is
**[Markdown features](https://docusaurus.io/docs/markdown-features)**. It covers
headings, links, lists, images, tables, code blocks, callout boxes
(admonitions), and collapsible sections. For the deeper end of MDX itself, see
[mdxjs.com](https://mdxjs.com/docs/).

Two things worth knowing:

- Every file opens with a **front matter** block between `---` lines. The
  `title` and `description` there are what show up in the browser tab, in
  search results, and in link previews.
- Start body headings at `##`. The page title is already the `#` heading, so
  the first `#` you write would be a second one.

## Adding an article

1. Create the file in the right `articles/` folder, named after the article:

   `docs/ib-programme/courses/philosophy/articles/how-to-construct-a-philosophical-argument.md`

2. Open it with front matter:

   ```md
   ---
   title: "How to Construct a Philosophical Argument"
   sidebar_label: "How to Construct a Philosophical Argument"
   description: "A practical method for building and defending a philosophical argument."
   tags: [article, philosophy]
   ---
   ```

3. Write the article underneath, starting headings at `##`.

It then appears in the sidebar under that course's Articles on its own — there
is no navigation to update. `templates/article.md` is the same starting point if
you would rather copy a file.

## Adding a resource

Open the course's `resource-dump.md` and add a bullet under the matching
heading:

```md
## Textbooks

- *Campbell Biology* — the standard reference; chapters 1–12 line up with the
  first unit.
- *Oxford IB Study Guide* — condensed, and the best thing to revise from.
```

Name the resource in italics, add an em dash, then say in a sentence why it is
worth someone's time. A bare list of links is far less useful than a line of
context.

## Submitting your work

Nothing goes straight to the live site. Changes are proposed in a **pull
request** (PR): someone on the Academic Council reviews it, and merging is what
publishes it. New to pull requests? GitHub's own guide is here:
[Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

If you are editing through the CMS, it opens the PR for you — write, submit for
review, done.

If you are working with the files directly:

1. Make a branch, named after what you are adding:

   ```bash
   git switch -c psychology-argument-article
   ```

2. Add your files and commit them:

   ```bash
   git add docs/ib-programme/courses/psychology/articles/
   git commit -m "Add psychology article on constructing arguments"
   ```

3. Push the branch:

   ```bash
   git push -u origin psychology-argument-article
   ```

4. Open a pull request against `main`, and say in a sentence or two what you
   added and anything a reviewer should look at.

Once it is merged, the site rebuilds and publishes itself.

## Tags

Tags drive the cross-cutting views, such as every course in one IB group. Use the
keys listed in `docs/tags.yml`, and give an article its course's tag alongside
`article` so the two are grouped together.

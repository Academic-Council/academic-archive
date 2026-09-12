import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Academic Archive',
  tagline: 'Notes, guides, and resources for UCC students.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL and base path for the GitHub Pages project site:
  // https://academic-council.github.io/academic-archive/
  url: 'https://academic-council.github.io',
  baseUrl: '/academic-archive/',

  // GitHub Pages deployment config.
  organizationName: 'Academic-Council',
  projectName: 'academic-archive',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        // There is no blog in this site; without this the plugin looks for a
        // blog/ directory and warns that it is missing.
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Academic-Council/academic-archive/tree/main/',
        },
        // The Academic Council's articles live inside subjects, so the
        // generic blog is disabled.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Academic Archive',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'resourceSidebar',
          position: 'left',
          label: 'Resource',
        },
        {to: '/docs/tags/', label: 'Browse by tag', position: 'left'},
        {
          href: 'https://github.com/Academic-Council/academic-archive',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resource',
          items: [
            {label: 'About This Resource', to: '/docs/'},
            {label: 'Years 8–10', to: '/docs/year-8/'},
            {label: 'IB (Years 11–12)', to: '/docs/ib/'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Browse by tag', to: '/docs/tags/'},
            {
              label: 'GitHub',
              href: 'https://github.com/Academic-Council/academic-archive',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UCC Academic Council. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import { defineConfig } from 'vitepress';
import { demoBlockPlugin } from 'vitepress-theme-demoblock';
import nav from './configs/nav';
import sidebar from './configs/sidebar';

export default defineConfig({
  lang: 'en-US',
  title: 'Starter',
  description: 'Vue 3, Typescript, Vie 4 and Pinia template',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  base: process.env.BASE || '/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  markdown: {
    headers: {
      level: [0, 0],
    },

    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less',
      });
    },
  },

  themeConfig: {
    outlineTitle: 'link:',
    lastUpdatedText: 'Last updated:',
    logo: '/logo.svg',

    algolia: {
      appId: 'X51HWTCQJJ',
      apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
      indexName: 'vitepress-demo',
    },

    // nav
    nav,

    // sidebar
    sidebar,

    editLink: {
      pattern: 'https://github.com/gwinnem/admin-dashboard/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gwinnem/admin-dashboard' },
      { icon: 'twitter', link: 'https://twitter.com/gwinnem' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/gwinnem/' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Geirr Winnem',
    },
  },
});

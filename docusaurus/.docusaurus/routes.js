import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/analytics',
    component: ComponentCreator('/analytics', 'b19'),
    routes: [
      {
        path: '/analytics',
        component: ComponentCreator('/analytics', 'cef'),
        routes: [
          {
            path: '/analytics',
            component: ComponentCreator('/analytics', 'ebd'),
            routes: [
              {
                path: '/analytics/mgis-widgets',
                component: ComponentCreator('/analytics/mgis-widgets', '1dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4fd'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '19a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6d0'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', 'fc3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '44d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', 'eb0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '384'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '4d7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'a4a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'd8b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '209'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'b22'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'ae9'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/mapping',
    component: ComponentCreator('/mapping', 'e1a'),
    routes: [
      {
        path: '/mapping',
        component: ComponentCreator('/mapping', '001'),
        routes: [
          {
            path: '/mapping',
            component: ComponentCreator('/mapping', 'd2f'),
            routes: [
              {
                path: '/mapping/info-windows',
                component: ComponentCreator('/mapping/info-windows', '684'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/mapping/web/',
                component: ComponentCreator('/mapping/web/', 'f04'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

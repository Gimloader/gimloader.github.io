// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://gimloader.github.io',
    integrations: [starlight({
        head: [
            {
                tag: "meta",
                attrs: {
                    name: "google-site-verification",
                    content: "GBX_OqgXVVQhd3z1AjX5jnNND1-k9xX6NAhhTqh8hko"
                }
            }
        ],
        plugins: [starlightSidebarTopics([
            {
                label: 'Usage',
                link: '/usage/installation',
                id: 'usage',
                items: [
                    {
                        label: "Using Gimloader",
                        items: [
                            'usage/installation',
                            'usage/plugins'
                        ]
                    },
                    {
                        label: "Official Plugins",
                        autogenerate: { directory: "plugins" }
                    }
                ]
            },
            {
                label: 'Development',
                link: '/development/overview',
                id: 'development',
                items: [
                    {
                        label: 'Development',
                        items: [
                            'development/overview',
                            'development/internals',
                            'development/structure',
                            'development/api',
                            'development/bundling',
                            'development/nextsteps'
                        ]
                    },
                    {
                        label: "Docs",
                        items: [
                            {
                                label: 'Scoped Api',
                                items: [
                                    'api/scopedapi',
                                    'api/scopedhotkeys',
                                    'api/scopednet',
                                    'api/scopedui',
                                    'api/scopedstorage',
                                    'api/scopedpatcher',
                                    'api/libs',
                                    'api/plugins',
                                    'api/rewriter'
                                ]
                            },
                            {
                                label: 'Unscoped Api',
                                items: [
                                    'api/api',
                                    'api/hotkeys',
                                    'api/net',
                                    'api/ui',
                                    'api/storage',
                                    'api/patcher',
                                    'api/libs',
                                    'api/plugins',
                                    'api/scopedrewriter'
                                ]
                            }
                        ]
                    }
                ]
            }
        ])],
        title: 'Gimloader',
        social: {
            github: 'https://github.com/Gimloader/Gimloader',
        },
        favicon: '/icon.svg',
        logo: {
            src: './public/icon.svg'
        },
        components: {
            ThemeProvider: './src/components/ThemeProvider.astro',
            ThemeSelect: './src/components/ThemeSelect.astro'
        },
        customCss: ['./src/lib/starlight.css']
    }), svelte(), tailwind(), sitemap()]
});
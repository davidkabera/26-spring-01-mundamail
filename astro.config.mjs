// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
    site: "https://davidkabera.github.io",
    base: '/26-spring-01-mundamail',
    integrations: [starlight({
        components: {
            Header: './src/components/Header.astro',
        },
        title: 'Munda Mail',
        social: [{ icon: 'github', 
                   label: 'GitHub', 
                   href: 'https://github.com/unideb-advanced-software-engineering/26-spring-01-mundamail',
        }],
        sidebar: [
            { label: 'Requirements',
                items: [
                    { label: 'Case Study', slug: 'requirements/case-study' },
                    { label: 'asr', slug: 'requirements/asr' },
                    { label: 'ac', slug: 'requirements/ac' },
                    { label: 'SRS', slug: 'requirements/srs' },
                ]
            },
            {
                label: 'architecture',
                items: [
                    { label: 'as', slug: 'architecture/as' },
                ],
            },
            {
                label: 'adrs',
                items: [
                    { label: 'adr-001', slug: 'adrs/adr-001' },
                    { label: 'adr-002', slug: 'adrs/adr-002' },
                    { label: 'adr-003', slug: 'adrs/adr-003' },
                    { label: 'adr-004', slug: 'adrs/adr-004' },
                ],
            },
        ],
    }), react()],
});
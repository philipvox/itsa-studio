import { defineCollection, z } from 'astro:content';

const site = defineCollection({
  type: 'data',
  schema: z.object({
    nav: z.object({
      links: z.array(z.object({
        label: z.string(),
        url: z.string(),
      })),
    }),
    footer: z.object({
      tagline: z.string(),
      social: z.array(z.object({
        label: z.string(),
        url: z.string(),
      })).optional(),
      location: z.string().optional(),
    }),
  }),
});

const pages = defineCollection({
  type: 'data',
  schema: z.object({}).passthrough(),
});

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

export const collections = { site, pages, journal };

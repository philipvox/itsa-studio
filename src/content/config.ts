import { defineCollection, z } from 'astro:content';

const site = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      leftText: z.string(),
      rightText: z.string(),
    }),
    tagline: z.string(),
    manifesto: z.string(),
    values: z.array(
      z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
      })
    ),
    nav: z.object({
      links: z.array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      ),
    }),
    footer: z.object({
      tagline: z.string(),
    }),
  }),
});

export const collections = { site };

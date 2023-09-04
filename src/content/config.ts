import { z, defineCollection } from 'astro:content';

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
  }),
});

export const collections = {
  'docs': docsCollection,
  'blog': blogCollection,
};

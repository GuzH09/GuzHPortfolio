import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    downloadButton1: z.string(),
    downloadButton2: z.string(),
  }),
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    button: z.string(),
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      projects: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          link: z.string().optional(), // Optional because not all projects may have a link
          image: image(),
          image2: image(),
          image3: image(),
          slug: z.string(),
        }),
      ),
      title2: z.string(),
      projects2: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: image(),
        }),
      ),
      title3: z.string(),
    }),
});

export const collections = {
  home: homeCollection,
  about: aboutCollection,
  portfolio: portfolioCollection,
};

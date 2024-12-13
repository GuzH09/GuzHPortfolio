import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const homeCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    downloadButton1: z.string(),
    downloadButton2: z.string(),
  }),
});

const aboutCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    button: z.string(),
  }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      projects: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          link: z.string().optional(), // Optional because not all projects may have a link
          images: z.array(image()),
          details: z
            .object({
              summary: z.string(),
              characteristics: z.array(z.string()),
              performance: z.array(z.string()),
              technologies: z.array(z.string()),
              release: z.string(),
              latestupdate: z.string(),
              github: z.string().optional(),
            })
            .optional(),
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

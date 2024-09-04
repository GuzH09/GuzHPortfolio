import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    downloadButton1: z.string(),
    downloadButton2: z.string()
  })
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    text1: z.string(),
    text2: z.string(),
    text3: z.string(),
    text4: z.string(),
    text5: z.string(),
    text6: z.string(),
    text7: z.string(),
    text8: z.string(),
    text9: z.string(),
    text10: z.string(),
    text11: z.string(),
    text12: z.string(),
    text13: z.string(),
    text14: z.string(),
    text15: z.string(),
    text16: z.string(),
    text17: z.string(),
    text18: z.string(),
    text19: z.string(),
    text20: z.string()
  })
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    projects: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        link: z.string().optional(),  // Optional because not all projects may have a link
        image: z.string()
      })
    ),
    title2: z.string(), 
    projects2: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string()
      })
    ),
    title3: z.string() 
  })
});

export const collections = {
  'home': homeCollection,
  'about': aboutCollection,
  'portfolio': portfolioCollection
};
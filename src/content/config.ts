import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    category: z.string(),
    status: z.string(),
    date: z.date(),
    summary: z.string(),
    goal: z.string(),
    tools: z.array(z.string()).default([]),
    highlights: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    thumbnail: z.string().optional(),
    thumbnailAlt: z.string().optional(),
    links: z
      .object({
        github: z.string().url().optional(),
        paper: z.string().url().optional(),
        demo: z.string().url().optional(),
        article: z.string().url().optional()
      })
      .optional()
  })
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.date(),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    readingTime: z.string().optional()
  })
});

export const collections = {
  projects,
  insights
};

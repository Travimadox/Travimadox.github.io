import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(), slug: z.string(), dates: z.string().optional(), summary: z.string(),
    stack: z.array(z.string()), tags: z.array(z.enum(['Robotics', 'ML/CV', 'Embedded', 'Research'])),
    featured: z.number().optional(), order: z.number(),
    visual: z.enum(['robot', 'scanner', 'board', 'map']).default('board'),
    cover: image().optional(), coverAlt: z.string().optional(),
    links: z.object({ github: z.url().optional(), demo: z.url().optional(), paper: z.url().optional() }).default({}),
  }).refine(data => !data.cover || !!data.coverAlt, 'A cover image requires descriptive coverAlt text.'),
});
export const collections = { projects };

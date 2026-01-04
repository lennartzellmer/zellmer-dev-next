import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        thumbnail: z.url(),
        seo_title: z.string(),
        seo_description: z.string(),
        slug: z.string(),
      }),
    }),
    pages: defineCollection({
      type: 'page',
      source: 'pages/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.url(),
        readable_url: z.string(),
      }),
    }),
    root: defineCollection({
      type: 'page',
      // Load every file inside the root level of the `content` directory
      source: 'bio.md',
      schema: z.object({
        image: z.string(),
      }),
    }),
  },
})

import type { MarkdownParsedContent } from '@nuxt/content'

export interface Post extends MarkdownParsedContent {
  title: string
  description: string
  thumbnail: string
  slug: string
  seo_description: string
  seo_title: string
}

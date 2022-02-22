import { PrismicDocument, LinkField } from '@prismicio/types'

export default function (doc: PrismicDocument) {
    if (doc.type === 'blog-post') {
      return '/posts/' + doc.uid
    }
    if (doc.type === 'default_page') {
      return '/' + doc.uid
    }
    return '/'
  }
  
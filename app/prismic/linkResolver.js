export default function (doc) {
  if (doc.type === 'blog-post') {
    return '/posts/' + doc.uid
  }
  if (doc.type === 'default_page') {
    return '/' + doc.uid
  }
  return '/'
}

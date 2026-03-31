export interface Post {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  categories: number[]
}

let _posts: Post[] | null = null

export function getAllPosts(): Post[] {
  if (_posts) return _posts
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  _posts = require('../posts-data/posts-clean.json') as Post[]
  return _posts
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find(p => p.slug === slug)
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const all = getAllPosts()
  return all
    .filter(p => p.slug !== post.slug && p.categories.some(c => post.categories.includes(c)))
    .slice(0, limit)
}

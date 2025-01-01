'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Post = {
  title: string
  link: string
  pubDate: string
  categories: string[]
  snippet: string
}

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

const BlogSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
      <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </div>
    <div className="space-y-3">
      <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      <div className="space-y-2">
        <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="w-5/6 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
      <div className="flex gap-2">
        <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
      </div>
    </div>
  </div>
)

export default function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts')
        if (!response.ok) throw new Error('Failed to fetch posts')
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError('Error loading blog posts.')
        console.error('Error fetching posts:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return <BlogSkeleton />
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.link} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
          <article>
            <div className="flex items-center gap-2 mb-4">
              <MediumIcon />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Published on Medium</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {post.snippet}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.categories?.map((category) => (
                <span 
                  key={category}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            <time className="block mt-3 text-xs text-gray-500 dark:text-gray-400">
              {new Date(post.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </article>
        </div>
      ))}
    </div>
  )
} 
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { personalInfo } from '@/config/personal'
import BlogPosts from './BlogPosts'
import { useState } from 'react'
import { Icon } from '@iconify/react'

const TechIcon = ({ name, iconName }: { name: string, iconName: string }) => (
  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700/50 text-xs font-medium text-gray-700 dark:text-gray-300">
    <Icon icon={iconName} className="w-3.5 h-3.5" />
    {name}
  </div>
)

const TechStackSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Tech Stack
        </div>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`space-y-4 mt-4 ${isOpen ? 'block' : 'hidden'}`}>
        <div>
          <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Frontend</h4>
          <div className="flex flex-wrap gap-2">
            <TechIcon name="Nuxt.js" iconName="logos:nuxt-icon" />
            <TechIcon name="Tailwind CSS" iconName="logos:tailwindcss-icon" />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Backend</h4>
          <div className="flex flex-wrap gap-2">
            <TechIcon name="Node.js" iconName="logos:nodejs-icon" />
            <TechIcon name="Fastify" iconName="simple-icons:fastify" />
            <TechIcon name="gRPC" iconName="logos:grpc" />
            <TechIcon name="RESTful" iconName="eos-icons:api" />
            <TechIcon name="WebSocket" iconName="logos:websocket" />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Database / Cache</h4>
          <div className="flex flex-wrap gap-2">
            <TechIcon name="MongoDB" iconName="logos:mongodb-icon" />
            <TechIcon name="MongoDB ReplicaSet" iconName="logos:mongodb-icon" />
            <TechIcon name="Redis" iconName="logos:redis" />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Container & Orchestration</h4>
          <div className="flex flex-wrap gap-2">
            <TechIcon name="Docker" iconName="logos:docker-icon" />
            <TechIcon name="Docker Swarm" iconName="logos:docker-icon" />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Monitoring & Management</h4>
          <div className="flex flex-wrap gap-2">
            <TechIcon name="Grafana" iconName="logos:grafana" />
            <TechIcon name="Portainer" iconName="simple-icons:portainer" />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Version Control & CI/CD</h4>
          <div className="flex flex-wrap gap-2">
            <TechIcon name="GitLab" iconName="logos:gitlab" />
            <TechIcon name="Forge" iconName="simple-icons:forge" />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Testing</h4>
          <div className="flex flex-wrap gap-2">
            <TechIcon name="Jest" iconName="logos:jest" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContentSection() {
  return (
    <div className="p-4">
      {/* About Me Section */}
      <section className="prose dark:prose-invert max-w-none mb-8">
        <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {personalInfo.about}
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
        <div className="grid gap-4">
          {personalInfo.projects.map((project) => (
            <div key={project.name} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 relative">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {project.name}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <TechStackSection />
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blog Posts</h2>
        <BlogPosts />
      </section>

      {/* Recommendations Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Articles */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
              </svg>
              <h3 className="font-semibold text-gray-900 dark:text-white">Articles</h3>
            </div>
            <div className="space-y-4">
              {personalInfo.recommendations.articles.map((article) => (
                <div key={article.url} className="group">
                  <Link 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {article.title}
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2 pl-6">
                    {article.description}...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Books */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="font-semibold text-gray-900 dark:text-white">Books</h3>
            </div>
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              {personalInfo.recommendations.books.map((book) => (
                <div key={book.title} className="w-36 group">
                  {book.coverImage && (
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                      <Image
                        src={book.coverImage}
                        alt={`${book.title} cover`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  )}
                  <div className="mt-3 text-center">
                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {book.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {book.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
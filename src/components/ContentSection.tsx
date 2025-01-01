'use client'

import Link from 'next/link'
import Image from 'next/image'
import { personalInfo } from '@/config/personal'
import BlogPosts from './BlogPosts'

const TechIcon = ({ name, className = "" }: { name: string, className?: string }) => (
  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700/50 text-xs font-medium text-gray-700 dark:text-gray-300">
    <span className={`w-3.5 h-3.5 ${className}`} />
    {name}
  </div>
)

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
              <div className="flex items-center space-x-6 mb-6">
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

              {/* Technology Stack */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Frontend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <TechIcon name="Nuxt.js" className="i-logos-nuxt-icon" />
                    <TechIcon name="Tailwind CSS" className="i-logos-tailwindcss-icon" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    Backend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <TechIcon name="Node.js" className="i-logos-nodejs-icon" />
                    <TechIcon name="Fastify" className="i-logos-fastify-icon" />
                    <TechIcon name="gRPC" className="i-logos-grpc" />
                    <TechIcon name="RESTful" className="i-logos-rest" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    Database / Cache
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <TechIcon name="MongoDB" className="i-logos-mongodb-icon" />
                    <TechIcon name="Redis" className="i-logos-redis" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Container & Orchestration
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <TechIcon name="Docker" className="i-logos-docker-icon" />
                    <TechIcon name="Docker Swarm" className="i-logos-docker-icon" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Monitoring & Management
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <TechIcon name="Grafana" className="i-logos-grafana" />
                    <TechIcon name="Portainer" className="i-logos-portainer" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Version Control & CI/CD
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <TechIcon name="GitLab" className="i-logos-gitlab" />
                    <TechIcon name="Forge" className="i-logos-forge" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Testing Framework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <TechIcon name="Jest" className="i-logos-jest" />
                  </div>
                </div>
              </div>
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
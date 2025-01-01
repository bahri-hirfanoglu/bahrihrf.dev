'use client'

import Image from 'next/image'
import Link from 'next/link'
import { personalInfo } from '@/config/personal'
import GitHubCalendar from 'react-github-calendar'

export default function ProfileSection() {
  const githubUsername = personalInfo.social.github.split('/').pop() || 'bahri-hirfanoglu'

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/profile.jpg"
            alt={personalInfo.name}
            fill
            className="rounded-full object-cover ring-4 ring-gray-100 dark:ring-gray-700"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {personalInfo.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {personalInfo.title}
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mb-6">
          <Link
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link
            href={personalInfo.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </Link>
        </div>

        {/* Email */}
        <Link
          href={`mailto:${personalInfo.email}`}
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
        >
          {personalInfo.email}
        </Link>

        {/* GitHub Contributions */}
        <div className="w-full">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">GitHub Contributions</h3>
          <div className="overflow-hidden">
            <GitHubCalendar 
              username={githubUsername}
              colorScheme="dark"
              blockSize={8}
              blockMargin={2}
              fontSize={12}
              hideColorLegend
              hideMonthLabels
              hideTotalCount
            />
          </div>
        </div>
      </div>
    </div>
  )
} 
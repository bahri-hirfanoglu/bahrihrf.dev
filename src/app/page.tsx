import ProfileSection from '../components/ProfileSection'
import ContentSection from '../components/ContentSection'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeToggle />
      
      <div className="container py-6 sm:py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Panel - Profile Section */}
          <aside className="w-full lg:w-72 xl:w-80">
            <div className="lg:sticky lg:top-6">
              <ProfileSection />
            </div>
          </aside>
          
          {/* Right Panel - Content Section */}
          <div className="flex-1 min-w-0">
            <ContentSection />
          </div>
        </div>
      </div>
    </main>
  )
} 
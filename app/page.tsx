import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}

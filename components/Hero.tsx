'use client'

import { useEffect, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-primary-600 dark:text-primary-400">
              Karthikeya Rayavarapu
            </span>{" "}
            <br />
            <span className="text-primary-800 dark:text-primary-400">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Building modern web and mobile applications with React, Next.js, and Node.js
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#resume"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-gray-600 dark:text-gray-400">
            <FaArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

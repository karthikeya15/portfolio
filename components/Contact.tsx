'use client'

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be
          part of your vision.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://linkedin.com/in/karthikeya-rayavarapu-21449a38a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>
          <a
            href="https://github.com/karthikeya15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <FaGithub size={24} />
            GitHub
          </a>
          <a
            href="mailto:karthikeyarayavarapu1504@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <FaEnvelope size={24} />
            Email
          </a>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            💡 Remember to update the LinkedIn and GitHub URLs with your actual profiles
          </p>
        </div>
      </div>
    </section>
  )
}

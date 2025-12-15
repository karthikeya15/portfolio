'use client'

import { useEffect, useState } from 'react'
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'

export default function Resume() {
  const [pdfLoaded, setPdfLoaded] = useState(false)
  const [pdfError, setPdfError] = useState(false)
  
  // Path to your PDF resume - place it in the public folder
  const resumePdfPath = '/Rayavarapu_Karthikeya_resume(mern).pdf'

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/c54ae659-341a-4170-a509-51cdb81f478c', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'run1',
        hypothesisId: 'H5',
        location: 'components/Resume.tsx:useEffect',
        message: 'Resume component mounted',
        data: { pdfPath: resumePdfPath },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion

    // Check if PDF exists
    fetch(resumePdfPath, { method: 'HEAD' })
      .then((response) => {
        if (response.ok) {
          setPdfLoaded(true)
          // #region agent log
          fetch('http://127.0.0.1:7242/ingest/c54ae659-341a-4170-a509-51cdb81f478c', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sessionId: 'debug-session',
              runId: 'run1',
              hypothesisId: 'H5',
              location: 'components/Resume.tsx:PDF check',
              message: 'PDF file found',
              data: { pdfPath: resumePdfPath, status: response.status },
              timestamp: Date.now(),
            }),
          }).catch(() => {})
          // #endregion
        } else {
          setPdfError(true)
          // #region agent log
          fetch('http://127.0.0.1:7242/ingest/c54ae659-341a-4170-a509-51cdb81f478c', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sessionId: 'debug-session',
              runId: 'run1',
              hypothesisId: 'H5',
              location: 'components/Resume.tsx:PDF check',
              message: 'PDF file not found',
              data: { pdfPath: resumePdfPath, status: response.status },
              timestamp: Date.now(),
            }),
          }).catch(() => {})
          // #endregion
        }
      })
      .catch(() => {
        setPdfError(true)
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/c54ae659-341a-4170-a509-51cdb81f478c', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId: 'debug-session',
            runId: 'run1',
            hypothesisId: 'H5',
            location: 'components/Resume.tsx:PDF check',
            message: 'PDF check failed',
            data: { pdfPath: resumePdfPath },
            timestamp: Date.now(),
          }),
        }).catch(() => {})
        // #endregion
      })
  }, [resumePdfPath])

  const handleDownload = () => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/c54ae659-341a-4170-a509-51cdb81f478c', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'run1',
        hypothesisId: 'H5',
        location: 'components/Resume.tsx:handleDownload',
        message: 'Download button clicked',
        data: { pdfPath: resumePdfPath },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion

    const a = document.createElement('a')
    a.href = resumePdfPath
    a.download = 'resume.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Resume
        </h2>
        
        {pdfLoaded ? (
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 sm:p-8 shadow-lg">
            {/* PDF Viewer */}
            <div className="mb-6 flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                My Resume
              </h3>
              <div className="flex gap-3">
                <a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  title="Open in new tab"
                >
                  <FaExternalLinkAlt />
                  Open
                </a>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <FaDownload />
                  Download
                </button>
              </div>
            </div>
            
            {/* Embedded PDF Viewer */}
            <div className="w-full h-[800px] border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
              <iframe
                src={`${resumePdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-full"
                title="Resume PDF"
                onLoad={() => {
                  // #region agent log
                  fetch('http://127.0.0.1:7242/ingest/c54ae659-341a-4170-a509-51cdb81f478c', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      sessionId: 'debug-session',
                      runId: 'run1',
                      hypothesisId: 'H5',
                      location: 'components/Resume.tsx:iframe onLoad',
                      message: 'PDF iframe loaded',
                      data: { pdfPath: resumePdfPath },
                      timestamp: Date.now(),
                    }),
                  }).catch(() => {})
                  // #endregion
                }}
                onError={() => {
                  setPdfError(true)
                  // #region agent log
                  fetch('http://127.0.0.1:7242/ingest/c54ae659-341a-4170-a509-51cdb81f478c', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      sessionId: 'debug-session',
                      runId: 'run1',
                      hypothesisId: 'H5',
                      location: 'components/Resume.tsx:iframe onError',
                      message: 'PDF iframe error',
                      data: { pdfPath: resumePdfPath },
                      timestamp: Date.now(),
                    }),
                  }).catch(() => {})
                  // #endregion
                }}
              />
            </div>
            
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
              💡 If the PDF doesn't display, click "Open" to view it in a new tab
            </p>
          </div>
        ) : pdfError ? (
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <FaFilePdf className="text-6xl text-gray-400 dark:text-gray-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Resume PDF Not Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
                Please place your resume PDF file named <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">resume.pdf</code> in the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public</code> folder.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-center space-y-2">
                <p>Expected path: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public/resume.pdf</code></p>
                <p>Or update the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">resumePdfPath</code> variable in Resume.tsx</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400">Loading resume...</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

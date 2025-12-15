'use client'

import { useEffect } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";


const skills = [
  { name: 'React', icon: SiReact, color: 'text-blue-500' },
  { name: 'React Native', icon: "", color: 'text-cyan-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'SQL', icon: SiPostgresql, color: 'text-blue-600' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
  { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-500' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
]

export default function Skills() {
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/c54ae659-341a-4170-a509-51cdb81f478c', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'run1',
        hypothesisId: 'H2',
        location: 'components/Skills.tsx:Skills',
        message: 'Rendering skills section',
        data: { skillsCount: skills.length, skillNames: skills.map((s) => s.name) },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion
  }, [])

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Technologies I work with to build amazing applications
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center group"
              >
                <Icon
                  className={`${skill.color} text-4xl mb-3 group-hover:scale-110 transition-transform duration-300`}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

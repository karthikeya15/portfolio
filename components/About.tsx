export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Hello! I’m Rayavarapu Karthikeya, a passionate Software Developer specializing in React, Next.js, React Native, and the MERN stack. With 3 years of hands-on experience, I build scalable, high-performance web and mobile applications that focus on clean architecture, reusability, and great user experience.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            With experience in both frontend and backend development, I create end-to-end
            solutions that deliver exceptional user experiences. I'm proficient in working
            with databases like MongoDB and SQL, and I have hands-on experience with cloud
            platforms like AWS, containerization with Docker, and orchestration with
            Kubernetes.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          My journey in software development has allowed me to work across frontend, backend, and mobile technologies, delivering real-world products used by customers and enterprises. I enjoy transforming complex requirements into intuitive interfaces and reliable systems.
          </p>
        </div>
      </div>
    </section>
  )
}

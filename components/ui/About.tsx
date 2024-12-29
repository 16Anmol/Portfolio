"use client"

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="bg-background py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="prose dark:prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Hello! I am a passionate web developer with expertise in modern web technologies. 
            I love creating responsive and user-friendly websites that provide great user experiences.
          </p>
          <p>
            My skills include:
          </p>
          <ul>
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js and Next.js</li>
            <li>Node.js and Express.js</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git)</li>
          </ul>
          <p>
            When I am not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying a good book on web development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About


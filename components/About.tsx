'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Coffee, Users, Award } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '20+', label: 'Happy Clients' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Award, value: '3+', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Hello! I'm a passionate developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating 
              modern, responsive, and user-friendly applications. I'm passionate about 
              clean code, innovative solutions, and continuous learning.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey started with a curiosity about how websites work, and it has 
              evolved into a career where I get to solve complex problems and build 
              amazing digital experiences every day.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-primary-600 font-semibold">Name:</span>
                <span className="text-gray-700 dark:text-gray-300">Your Name</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-primary-600 font-semibold">Location:</span>
                <span className="text-gray-700 dark:text-gray-300">Your City, Country</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-primary-600 font-semibold">Email:</span>
                <span className="text-gray-700 dark:text-gray-300">your.email@example.com</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
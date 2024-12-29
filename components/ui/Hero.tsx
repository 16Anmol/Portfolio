"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="md:flex md:items-center md:justify-between">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-primary">Henry</span>
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
  A passionate web developer creating amazing digital experiences.
</p>


<div className="mt-5 sm:mt-8">
  <Button>View My Work</Button>
</div>
          </motion.div>
          <motion.div 
            className="mt-8 md:mt-0 md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mt-5 sm:mt-0 sm:ml-8"></div>
           <Image
      src="/AI-Dating-after.png"
      alt="Your Name"
      width={400}
      height={400}
      className="rounded-full mx-auto"
    />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


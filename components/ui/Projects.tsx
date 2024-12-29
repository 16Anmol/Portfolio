"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1',
    image: '/placeholder.svg?height=200&width=300',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/placeholder.svg?height=200&width=300',
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'A brief description of Project 3',
    image: '/placeholder.svg?height=200&width=300',
    link: '#'
  },
  {
    title: 'Project 4',
    description: 'A brief description of Project 4',
    image: '/placeholder.svg?height=200&width=300',
    link: '#'
  },
  {
    title: 'Project 5',
    description: 'A brief description of Project 5',
    image: '/placeholder.svg?height=200&width=300',
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="bg-muted py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-t-lg" />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default Projects


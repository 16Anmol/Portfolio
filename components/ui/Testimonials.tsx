"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: 'Steve Doe',
    role: 'CEO, ABC',
    content: 'Henry is an exceptional developer. Their work on our project exceeded our expectations.',
  },
  {
    name: 'Eoin Smith',
    role: 'CTO, DEF',
    content: 'Working with Henry was a pleasure. They delivered high-quality code on time and within budget.',
  },
  {
    name: 'Mitchell Johnson',
    role: 'Product Manager, GHI',
    content: 'Henry\'s attention to detail and problem-solving skills are outstanding. Highly recommended!',
  },
  {
    name: 'Kane Williams',
    role: 'Lead Designer, JKL',
    content: 'Henry has a great eye for design and user experience. They translated our vision into a beautiful, functional website.',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-muted py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Clients Say
        </motion.h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-lg mb-4">{testimonial.content}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </CardContent>
                </Card>
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

export default Testimonials


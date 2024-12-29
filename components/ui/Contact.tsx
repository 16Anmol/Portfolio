"use client"

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
 const { toast } = useToast()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
  }

  return (
    <section id="contact" className="bg-muted py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.form 
          className="max-w-lg mx-auto space-y-4"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <Input 
              type="text" 
              placeholder="Name" 
              {...register('name')} 
            />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="Email" 
              {...register('email')} 
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Textarea 
              placeholder="Message" 
              {...register('message')} 
            />
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
          </div>
          <Button type="submit">Send Message</Button>
        </motion.form>
      </div>
    </section>
  )
}


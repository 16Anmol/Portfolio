
import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero'
import Projects from '@/components/ui/Projects'
import Skills from '@/components/ui/Skills'
import Testimonials from '@/components/ui/Testimonials'
import About from '@/components/ui/About'
import Contact from '@/components/ui/Contact'
import Footer from '@/components/ui/Footer'
import {ThemeProvider}  from "@/components/ui/theme-provider"
export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
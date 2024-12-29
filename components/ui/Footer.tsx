import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2024 YourName. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


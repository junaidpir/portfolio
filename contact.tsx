"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Textarea } from "@/components/textarea"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className={`space-y-6 opacity-0 ${isVisible ? "animate-slide-in-left delay-200" : ""}`}>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  visions. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-200">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Bengaluru, Karnataka</p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/junaid-altaf-5a2446293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-200"
                >
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Linkedin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground">Junaid Altaf</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-200"
                >
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Github className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-foreground">View Profile</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`opacity-0 ${isVisible ? "animate-fade-in-up delay-300" : ""}`}>
              <div className="bg-card border border-border rounded-xl p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name
                    </label>
                    <Input id="name" type="text" placeholder="Your name" className="bg-background border-border" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      className="bg-background border-border"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">© 2025 Junaid Altaf. Built with passion and Next.js</p>
          </div>
        </div>
      </div>
    </section>
  )
}

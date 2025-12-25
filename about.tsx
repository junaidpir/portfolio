"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`opacity-0 ${isVisible ? "animate-slide-in-left delay-100" : ""}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-card border border-border rounded-2xl p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Passionate Full Stack Developer with expertise in modern web technologies and a strong foundation in
                    computer applications.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Currently contributing to innovative e-learning solutions at Dhee Coding Lab, where I design and
                    develop scalable applications that enhance the learning experience.
                  </p>
                </div>
              </div>
            </div>

            <div className={`space-y-6 opacity-0 ${isVisible ? "animate-fade-in-up delay-300" : ""}`}>
              <div className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
                <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
              </div>

              <div className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Experience</h3>
                <p className="text-muted-foreground">3+ Months Professional Development</p>
              </div>

              <div className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Focus</h3>
                <p className="text-muted-foreground">Full Stack Development & E-Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

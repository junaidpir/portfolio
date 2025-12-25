"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            Experience
          </h2>

          <div className={`relative opacity-0 ${isVisible ? "animate-fade-in-up delay-200" : ""}`}>
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            {/* Experience Card */}
            <div className="relative pl-0 md:pl-20 mb-8">
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-wrap items-start justify-between mb-4 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Full Stack Developer</h3>
                      <p className="text-accent font-medium">Dhee Coding Lab</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} />
                    <span>Aug 2025 - Present</span>
                  </div>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Currently working in the Engineering and Technical department at a specialist level, contributing to
                    innovative e-learning solutions.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Developing and maintaining full-stack web applications</li>
                    <li>Collaborating with cross-functional teams to deliver quality solutions</li>
                    <li>Implementing best practices in code quality and performance</li>
                    <li>Contributing to e-learning platform development and enhancement</li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Full Stack Development
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">E-Learning</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    Web Applications
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

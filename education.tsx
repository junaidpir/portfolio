"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, MapPin, Globe } from "lucide-react"

export default function Education() {
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

  const languages = [
    { name: "English", level: "Professional working proficiency" },
    { name: "Hindi", level: "Full professional proficiency" },
    { name: "Kashmiri", level: "Native or bilingual proficiency" },
    { name: "Urdu", level: "Full professional proficiency" },
  ]

  return (
    <section id="education" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            Education & Languages
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className={`opacity-0 ${isVisible ? "animate-fade-in-up delay-200" : ""}`}>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Bachelor of Computer Applications</h4>
                    <p className="text-accent font-medium mb-2">University of Kashmir</p>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} />
                    <span>2022 - 2025</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} />
                    <span>Kashmir, India</span>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    Completed a comprehensive three-year program covering fundamental and advanced concepts in computer
                    applications, software development, and information technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className={`opacity-0 ${isVisible ? "animate-fade-in-up delay-300" : ""}`}>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Globe className="text-accent" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Languages</h3>
                </div>

                <div className="space-y-4">
                  {languages.map((language) => (
                    <div key={language.name} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-foreground">{language.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{language.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

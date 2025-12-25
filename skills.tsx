"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Smartphone, Globe, Cpu, Layers } from "lucide-react"

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "primary",
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Authentication"],
      color: "accent",
    },
    {
      title: "Database",
      icon: <Layers size={24} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma"],
      color: "primary",
    },
    {
      title: "Tools & Technologies",
      icon: <Cpu size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "npm"],
      color: "accent",
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      skills: ["React Native", "Responsive Design", "PWA", "Cross-platform"],
      color: "primary",
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skills: ["Responsive Design", "SEO", "Web Performance", "Accessibility"],
      color: "accent",
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-card border border-border rounded-xl p-6 hover:border-${category.color} transition-all duration-300 hover:shadow-lg hover:shadow-${category.color}/10 opacity-0 ${
                  isVisible ? `animate-fade-in-up delay-${(index + 1) * 100}` : ""
                }`}
              >
                <div className={`bg-${category.color}/10 p-3 rounded-lg inline-block mb-4`}>
                  <div className={`text-${category.color}`}>{category.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/70 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

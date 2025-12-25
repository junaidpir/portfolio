"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/button"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 animate-fade-in">
        <p className="text-lg text-gray-600">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold">
          Junaid Altaf
        </h1>

        <h2 className="text-3xl text-blue-600">
          Full Stack Developer
        </h2>

        <div className="flex justify-center gap-4 pt-4">
          <Button>Get In Touch</Button>
          <Button>View Experience</Button>
        </div>

        <div className="flex justify-center gap-6 pt-4 text-gray-600">
          <Linkedin />
          <Github />
          <Mail />
        </div>
      </div>
    </section>
  )
}

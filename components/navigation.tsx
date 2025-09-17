"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const handleResumeDownload = () => {
    const resumeContent = `MUKAMASABO HAPPY
Phone: +250 787 925 483
Email: mukamasaboh@gmail.com
Location: Nyarugenge–Gitega, Kigali, Rwanda

PROFESSIONAL SUMMARY
Motivated and detail-oriented undergraduate student pursuing a Bachelor's degree in Electronic and Telecommunication Engineering. Possess a strong foundation in programming (C++, Python, React, Node.js) and proficient in Microsoft Office tools.

KEY SKILLS
• Programming Languages: C++, Python, React, Node.js
• Web Technologies: HTML, CSS, JavaScript
• Software Tools: Microsoft Word, PowerPoint
• Languages: Fluent in Kinyarwanda and English

EDUCATION
Bachelor of Science in Electronic and Telecommunication Engineering
University of Rwanda – College of Science and Technology
Expected Graduation: 2027

EXPERIENCE
Full Stack Developer Trainee
K-Lab, Kigali, Rwanda
December 18, 2024 – March 28, 2025`

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Mukamasabo_Happy_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mukamasabo Happy
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "Project", "skills", "education", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === section ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleResumeDownload}
              variant="outline"
              size="sm"
              className="bg-white/80 text-slate-700 border-slate-300 hover:bg-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg shadow-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              {["home", "about", "Project", "skills", "education", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-left text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {section}
                </button>
              ))}
              <Button
                onClick={handleResumeDownload}
                variant="outline"
                size="sm"
                className="bg-white text-slate-700 border-slate-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

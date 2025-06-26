"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleResumeDownload = () => {
    const resumeContent = `MUKAMASABO HAPPY
Phone: +250 787 925 483
Email: mukamasaboh@gmail.com
Location: Nyarugenge–Gitega, Kigali, Rwanda

PROFESSIONAL SUMMARY
Motivated and detail-oriented undergraduate student pursuing a Bachelor's degree in Electronic and Telecommunication Engineering. Possess a strong foundation in programming (C++, Python, React, Node.js) and proficient in Microsoft Office tools. Passionate about using technology to solve real-world problems and eager to gain hands-on experience through internships, training programs, or part-time opportunities in the tech and engineering fields.

KEY SKILLS
• Programming Languages: C++, Python, React, Node.js
• Web Technologies: HTML, CSS, JavaScript
• Software Tools: Microsoft Word, PowerPoint
• Languages: Fluent in Kinyarwanda and English
• Soft Skills: Teamwork, Communication, Time Management

EDUCATION
Bachelor of Science in Electronic and Telecommunication Engineering
University of Rwanda – College of Science and Technology, Nyarugenge
Expected Graduation: 2027
• Participated in the Female Python Programmers program at N@tcom ICT Center

Advanced Level Certificate (MPC)
Inyange Girls School of Science – Rulindo, Rwanda
2019 – 2022
• Focused on Mathematics, Physics, and Computer Science

EXPERIENCE
Full Stack Developer Trainee
K-Lab, Kigali, Rwanda
December 18, 2024 – March 28, 2025
• Developed dynamic and responsive web applications using React
• Applied JavaScript to enhance code functionality and readability
• Used external CSS to ensure clean and consistent UI styling
• Built and deployed personal projects, including a portfolio platform for various clients

ADDITIONAL INFORMATION
• Driving License: Category B
• Open to internships, volunteering, and tech-related opportunities`

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const skills = [
    { name: "C++", level: 85, category: "Programming" },
    { name: "Python", level: 90, category: "Programming" },
    { name: "React", level: 88, category: "Frontend" },
    { name: "Node.js", level: 82, category: "Backend" },
    { name: "JavaScript", level: 90, category: "Programming" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
  ]

  const achievements = [
    {
      title: "Female Python Programmers",
      organization: "N@tcom ICT Center",
      year: "2024",
      description: "Completed intensive Python programming bootcamp",
    },
    {
      title: "Full Stack Development",
      organization: "K-Lab Training",
      year: "2024-2025",
      description: "Currently mastering modern web development technologies",
    },
    {
      title: "Academic Excellence",
      organization: "University of Rwanda",
      year: "2023-Present",
      description: "Maintaining high academic standards in Engineering",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

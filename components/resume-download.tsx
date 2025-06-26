"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { CardTitle } from "@/components/ui/card"

export function ResumeDownload() {
  const handleDownload = () => {
    // Create resume content
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

    // Create and download file
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <CardTitle className="text-3xl lg:text-4xl font-bold text-white mb-4">Download My Resume</CardTitle>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a comprehensive overview of my qualifications, experience, and achievements in a professionally
            formatted document.
          </p>
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <p className="text-sm text-white/70 mt-6">
            Available in text format • Last updated: January 2025 • Professional format
          </p>
        </div>
      </div>
    </section>
  )
}

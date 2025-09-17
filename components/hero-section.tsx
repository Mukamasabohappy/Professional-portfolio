"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Download,
  ExternalLink,
  Zap,
  Code,
  Star,
  ChevronDown,
} from "lucide-react";

export function HeroSection() {
  const [profileImage, setProfileImage] = useState<string>("/images/happy.png");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    const resumeContent = `MUKAMASABO HAPPY
Phone: +250 787 925 483
Email: mukamasaboh@gmail.com
Location: Nyarugenge–Gitega, Kigali, Rwanda

PROFESSIONAL SUMMARY
Motivated and detail-oriented undergraduate student pursuing a Bachelor's degree in Electronic and Telecommunication Engineering.

KEY SKILLS
• Programming Languages: C++, Python, React, Node.js
• Web Technologies: HTML, CSS, JavaScript
• Software Tools: Microsoft Word, PowerPoint

EDUCATION
Bachelor of Science in Electronic and Telecommunication Engineering
University of Rwanda – Expected Graduation: 2027

EXPERIENCE
Full Stack Developer Trainee - K-Lab, Kigali, Rwanda
December 18, 2024 – March 28, 2025`;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mukamasabo_Happy_Resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Available for Opportunities
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Hello, I'm Mukamasabo Happy
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed">
                Passionate{" "}
                <span className="font-semibold text-blue-600">
                  Electronic & Telecommunication Engineering
                </span>{" "}
                student and{" "}
                <span className="font-semibold text-purple-600">
                  Full Stack Developer
                </span>{" "}
                and embedded system developer
              </p>

              <div className="flex items-center space-x-4 text-slate-600">
        
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </Button>
              <Button
                onClick={handleResumeDownload}
                variant="outline"
                size="lg"
                className="bg-white/80 text-slate-700 border-slate-300 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                onClick={() => scrollToSection("Project")}
                variant="ghost"
                size="lg"
                className="text-slate-600 hover:text-slate-900"
              >
                View My Work
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2027</div>
                <div className="text-sm text-slate-600">Expected Graduation</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-bold text-purple-600">6+</div>
                <div className="text-sm text-slate-600">Programming Languages</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-slate-600">Commitment</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src={profileImage}
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-6 shadow-xl animate-bounce z-20">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-full p-4 shadow-xl z-20">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

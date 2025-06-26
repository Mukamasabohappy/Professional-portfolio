import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, FileText } from "lucide-react"

export function SkillsSection() {
  const skills = [
    { name: "C++", level: 85, category: "Programming" },
    { name: "Python", level: 90, category: "Programming" },
    { name: "React", level: 88, category: "Frontend" },
    { name: "Node.js", level: 82, category: "Backend" },
    { name: "JavaScript", level: 90, category: "Programming" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4 mr-2" />
            Technical Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">My Skills</h2>
          <p className="text-xl text-slate-600">Technologies and tools I work with</p>
        </div>

        {/* Skills with Progress Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-900">{skill.name}</span>
                  <span className="text-sm text-slate-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-slate-500">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600" />
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["C++", "Python", "JavaScript", "TypeScript"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="w-6 h-6 mr-2 text-purple-600" />
                Web Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "HTML", "CSS", "Tailwind"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-green-600" />
                Tools & Software
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Git", "VS Code", "Microsoft Office", "Figma"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem Solving",
              "Team Collaboration",
              "Time Management",
              "Communication",
              "Leadership",
              "Adaptability",
              "Critical Thinking",
              "Project Management",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-lg py-3 px-6 border-slate-300 hover:bg-slate-50 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

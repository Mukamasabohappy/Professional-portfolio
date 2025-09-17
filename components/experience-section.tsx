import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, Award, Code } from "lucide-react"

export function ExperienceSection() {
  const projects = [
    {
      title: "Smart Door System",
      description: "Designed and implemented an embedded system for automated door control with security features.",
      technologies: ["Gsm", "Arduino", "Sensors", "magnet","Servo motor"],
    },
    {
      title: "Smart Water Pump",
      description: "Built an embedded system project for automatic water pump control.",
      technologies: ["Embedded C", "Arduino", "IoT", "Relay Modules"],
    },
    {
      title: "Task Management App",
      description: "Developed a task planning web application with features for creating, editing, and filtering tasks.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js","next.js"],
    },
    {
      title: " Vetertech",
      description: "Built an e-commerce platform for connecting farmer and veternary",
      technologies: [ "Express.js", "PostgreSQL", "Node.js","next.js"],
    },
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
      description: "Completed full stack development training with hands-on projects",
    },
    {
      title: "Academic Excellence",
      organization: "University of Rwanda",
      year: "2023-Present",
      description: "Maintaining high academic standards in Engineering",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4 mr-2" />
            Professional Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Project</h2>
          <p className="text-xl text-slate-600">Project i worked on</p>
        </div>

        {/* Experience Card */}
        <div className="relative mb-16">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ml-16">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="absolute -left-20 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-slate-900 mb-6">Projects Worked On:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
                    <div className="flex items-center mb-2">
                      <Code className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-slate-900">{project.title}</span>
                    </div>
                    <p className="text-slate-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader>
                  <Award className="w-10 h-10 text-yellow-600 mb-2" />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <p className="text-blue-600 font-medium">
                    {achievement.organization} • {achievement.year}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, Award } from "lucide-react"

export function ExperienceSection() {
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4 mr-2" />
            Professional Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Experience</h2>
          <p className="text-xl text-slate-600">My professional journey and achievements</p>
        </div>

        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ml-16">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="absolute -left-20 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-900 mb-2">Full Stack Developer Trainee</CardTitle>
                    <p className="text-xl font-semibold text-blue-600 mb-2">K-Lab</p>
                    <div className="flex flex-wrap items-center gap-4 text-slate-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>December 18, 2024 – March 28, 2025</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Kigali, Rwanda</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">Current Position</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">
                        Developed dynamic and responsive web applications using React
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">
                        Applied JavaScript to enhance code functionality and readability
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">
                        Used external CSS to ensure clean and consistent UI styling
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">
                        Built and deployed personal projects, including portfolio platforms
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "CSS", "HTML", "Node.js", "Git"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
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

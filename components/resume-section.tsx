import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function ResumeSection() {
  const experiences = [
    {
      title: "Full Stack Developer Trainee",
      company: "K-Lab",
      location: "Kigali, Rwanda",
      period: "December 18, 2024 – March 28, 2025",
      description: [
        "Developed dynamic and responsive web applications using React",
        "Applied JavaScript to enhance code functionality and readability",
        "Used external CSS to ensure clean and consistent UI styling",
        "Built and deployed personal projects, including a portfolio platform for various clients",
      ],
      current: true,
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

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-900 mb-2">{exp.title}</CardTitle>
                      <p className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-slate-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {exp.current && (
                    <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">Current Position</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

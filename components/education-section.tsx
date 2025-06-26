import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Academic Excellence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Education</h2>
          <p className="text-xl text-slate-600">My academic background and achievements</p>
        </div>

        <div className="space-y-8">
          {/* Current Education */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      Bachelor of Science in Electronic and Telecommunication Engineering
                    </CardTitle>
                    <p className="text-xl font-semibold text-blue-600 mb-2">
                      University of Rwanda – College of Science and Technology
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Expected Graduation: 2027</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Nyarugenge, Rwanda</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1">In Progress</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-700">Electronic Circuit Design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-700">Telecommunication Systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-700">Signal Processing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-700">Network Engineering</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Special Programs:</h4>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-purple-800">Female Python Programmers</span>
                    </div>
                    <p className="text-sm text-purple-700">N@tcom ICT Center - Advanced Python Programming Bootcamp</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Previous Education */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Advanced Level Certificate (MPC)</CardTitle>
                    <p className="text-xl font-semibold text-purple-600 mb-2">Inyange Girls School of Science</p>
                    <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>2019 – 2022</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Rulindo, Rwanda</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">Completed</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Mathematics</div>
                  <p className="text-sm text-blue-700">Advanced Mathematical Concepts</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">Physics</div>
                  <p className="text-sm text-purple-700">Applied Physics Principles</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">Computer Science</div>
                  <p className="text-sm text-green-700">Programming Fundamentals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

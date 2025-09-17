import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Target, Zap, Award, Star, MapPin, Briefcase } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <User className="w-4 h-4 mr-2" />
            Get to know me
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate about creating innovative solutions through technology and engineering excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">My Journey</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
             I am a motivated undergraduate student pursuing Electronic and Telecommunication Engineering at the University of Rwanda. My passion lies in bridging the gap between theoretical knowledge and practical applications, especially in embedded systems, software development, and emerging technologies.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I previously enhanced my skills as a Full Stack Developer Trainee at K-Lab, where I gained hands-on experience building dynamic web applications and contributing to innovative projects. I believe in continuous learning and remain eager to take on new challenges that help me grow both technically and professionally.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-100 text-blue-800 px-3 py-1">Problem Solver</Badge>
              <Badge className="bg-purple-100 text-purple-800 px-3 py-1">Team Player</Badge>
              <Badge className="bg-green-100 text-green-800 px-3 py-1">Quick Learner</Badge>
              <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1">Innovation Focused</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">Creating technology solutions that make a positive impact</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">Becoming a leading innovator in tech and engineering</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">Excellence, integrity, and continuous learning</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <Star className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Goal</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">Contributing to Rwanda's digital transformation</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Details */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <User className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle>Personal Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span className="text-slate-600">Mukamasabo Happy</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span className="text-slate-600">mukamasaboh@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone:</span>
                <span className="text-slate-600">+250 787 925 483</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Languages:</span>
                <span className="text-slate-600">Kinyarwanda, English</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <MapPin className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Location & Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Location:</span>
                <span className="text-slate-600">Kigali, Rwanda</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">District:</span>
                <span className="text-slate-600">Nyarugenge–Gitega</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">License:</span>
                <span className="text-slate-600">Category B</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <span className="text-green-600 font-medium">Available</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <Briefcase className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle>Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Internships</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Volunteering</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Tech Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Part-time Roles</span>
               
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
               <span>job</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function ScheduleSection() {
  const events = [
    {
      title: "Analyzing Institutional Business Data In Capital Market",
      date: "June 25, 2025",
      time: "9:00 AM - 12:00 PM",
      speaker: "Dr. Sarah Johnson",
      attendees: "200+",
      location: "Main Hall A",
      image: "/futuristic-data-science-presentation.jpg",
    },
    {
      title: "Impact of Language AI and Chat GPT on Social Media",
      date: "June 26, 2025",
      time: "2:00 PM - 5:00 PM",
      speaker: "Prof. Michael Chen",
      attendees: "350+",
      location: "Innovation Theater",
      image: "/ai-neural-network-hologram-display.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/3 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Information Of Event <span className="text-cyan-300">Schedules</span>
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Explore our carefully curated sessions featuring world-class speakers and cutting-edge topics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in-95 duration-500 shadow-xl rounded-lg border border-gray-200"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-primary border-2 border-white" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">{event.attendees} attending</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
            <Link href="/schedule">View Full Schedule</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0,50L48,53.3C96,57,192,63,288,61.7C384,60,480,50,576,50C672,50,768,60,864,63.3C960,67,1056,63,1152,56.7C1248,50,1344,40,1392,35L1440,30L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

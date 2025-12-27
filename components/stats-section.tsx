"use client"

import { Button } from "@/components/ui/button"

export function StatsSection() {
  const stats = [
    { value: "25+", label: "Countries" },
    { value: "897+", label: "Attendees" },
    { value: "69+", label: "Companies" },
  ]

  const features = ["Networking", "AI Innovation", "Coaching/Pitch", "Great Speakers", "Live Music", "Meet Sui"]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50/20 to-yellow-50/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
              Meet World's Leading Companies @ <span className="text-cyan-500">Technology</span> Conference
            </h2>

            <div className="flex gap-8 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="animate-in fade-in zoom-in-50 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold text-cyan-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-base animate-in fade-in slide-in-from-left-4 duration-500"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  <span className="font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg px-8">
              Register Now
            </Button>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <img
              src="/professional-speaker-presenting-at-tech-conference.jpg"
              alt="Conference Speaker"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

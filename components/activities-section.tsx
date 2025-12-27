"use client"

import { Check } from "lucide-react"

export function ActivitiesSection() {
  const activities = [
    "Plenary Lectures",
    "Keynote Addresses",
    "Paper Presentations",
    "Poster Presentations",
    "Industry/Start-Up Exhibition",
  ]

  return (
    <section className="py-[60px] bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">Activities of the Conference</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-800 font-medium">{activity}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

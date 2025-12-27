"use client"

import { Calendar } from "lucide-react"

export function ImportantDatesSection() {
  const importantDates = [
    { label: "Last date for Abstract Submission", date: "January 31, 2026" },
    { label: "Notification of Acceptance", date: "February 05, 2026" },
    { label: "Last date for Early-bird Registration", date: "January 15, 2026" },
    { label: "Last date for Late Registration", date: "February 15, 2026" },
    { label: "Conference date", date: "February 18-20, 2026" },
  ]

  return (
    <section className="py-[60px] bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Important Dates</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-2">{item.label}</div>
                  <div className="text-lg font-bold text-blue-600">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

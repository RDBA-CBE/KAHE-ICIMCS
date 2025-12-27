"use client"

import { Check } from "lucide-react"

export function ResearchAreasSection() {
  const researchAreas = [
    "Sustainable Materials and Technologies",
    "Synthetic Organic Chemistry",
    "Fluorescent Organic Materials",
    "Catalysis",
    "Fuel Cells",
    "Electrochemical Corrosion and Surface Protection",
    "Energy Conversions and Batteries",
    "Nano Composites for Biological Applications",
    "Supramolecular Chemistry",
    "Electrochemical Sensors",
    "Green and Environmental Chemistry",
    "Polymer and Industrial Chemistry",
    "Quantum Chemistry and Technologies",
    "Bioinorganic Chemistry",
    "Computational Chemistry",
  ]

  return (
    <section className="py-[60px] bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl">
          {/* Heading at Top */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Research Areas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full"></div>
          </div>

          {/* Research Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-gray-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { IndianRupee, DollarSign } from "lucide-react"

export function RegistrationFeesSection() {
  const feeCategories = [
    { category: "Research Scholars", indiaEarly: "₹2,500", indiaLate: "₹3,000", abroadEarly: "$80", abroadLate: "$100" },
    { category: "Faculties/Scientists", indiaEarly: "₹3,500", indiaLate: "₹4,000", abroadEarly: "$80", abroadLate: "$100" },
    { category: "Industrialists", indiaEarly: "₹4,500", indiaLate: "₹5,000", abroadEarly: "$80", abroadLate: "$100" },
    { category: "Students", indiaEarly: "₹1,000", indiaLate: "₹1,500", abroadEarly: "$80", abroadLate: "$100" },
  ]

  return (
    <section className="py-[60px] bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Registration Fee Details</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white">
                  <th className="p-4 text-left font-bold border border-white/20">Category</th>
                  <th colSpan={2} className="p-4 text-center font-bold border border-white/20">
                    <div className="flex items-center justify-center gap-2">
                      <IndianRupee className="h-4 w-4" />
                      <span>India</span>
                    </div>
                  </th>
                  <th colSpan={2} className="p-4 text-center font-bold border border-white/20">
                    <div className="flex items-center justify-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      <span>Abroad</span>
                    </div>
                  </th>
                </tr>
                <tr className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white">
                  <th className="p-2 border border-white/20"></th>
                  <th className="p-2 text-center font-semibold border border-white/20">Early-bird</th>
                  <th className="p-2 text-center font-semibold border border-white/20">Late</th>
                  <th className="p-2 text-center font-semibold border border-white/20">Early-bird</th>
                  <th className="p-2 text-center font-semibold border border-white/20">Late</th>
                </tr>
              </thead>
              <tbody>
                {feeCategories.map((fee, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors`}
                  >
                    <td className="p-4 font-semibold text-gray-900 border border-gray-300">{fee.category}</td>
                    <td className="p-4 text-center text-gray-700 border border-gray-300">{fee.indiaEarly}</td>
                    <td className="p-4 text-center text-gray-700 border border-gray-300">{fee.indiaLate}</td>
                    <td className="p-4 text-center text-gray-700 border border-gray-300">{fee.abroadEarly}</td>
                    <td className="p-4 text-center text-gray-700 border border-gray-300">{fee.abroadLate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

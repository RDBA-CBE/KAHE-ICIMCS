"use client"

import { Users, User, UserCheck, Award } from "lucide-react"

export function CommitteeMembersSection() {
  return (
    <section className="py-[60px] bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Committee Members</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Chief Patron - Pyramid Top */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="pt-12 mt-8 text-center">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100 rounded-full mb-6 border border-blue-200">
                <span className="text-sm font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent uppercase tracking-wider">Chief Patron</span>
              </div>
              <div className="max-w-sm mx-auto">
                <div className="relative p-8 bg-white rounded-3xl shadow-xl border-t-4 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rotate-45 border-t border-l border-blue-300"></div>
                  <p className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-3">Prof. Dr. S. Ravi</p>
                  <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-3"></div>
                  <p className="text-gray-600 font-semibold">Vice Chancellor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Patrons and Convenors - Side by Side */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Patrons */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-300">
                  <div className="p-3 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Patron</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Prof. Dr. B. V. Pradeep", role: "Registrar" },
                    { name: "Prof. Dr. V. Parthasarathy", role: "Dean, Research & Development and Industrial Relations" },
                    { name: "Prof. Dr. V. Ragavi", role: "Dean, Faculty of Arts, Science, Commerce and Management" },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="group relative p-5 bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          <span className="text-lg font-bold text-gray-600">{index + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 mb-1 truncate">{member.name}</p>
                          <p className="text-sm text-gray-600 line-clamp-2">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Convenors */}
<div className="relative">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-300">
                  <div className="p-3 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl">
                    <UserCheck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Convenors</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Dr. A. Thangamani", role: "Head, Department of Chemistry" },
                    { name: "Dr. K. Saravana Mani", role: "Head, Centre for Material Chemistry" },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="group relative p-5 bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          <span className="text-lg font-bold text-gray-600">{index + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 mb-1 truncate">{member.name}</p>
                          <p className="text-sm text-gray-600 line-clamp-2">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

 {/* Convenors */}
            <div className="relative">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-300">
                  <div className="p-3 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl">
                    <UserCheck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Co-Convenors</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Dr. A. Manikandan", role: "Professor, Department of Chemistry" },
                    { name: "Dr. D. Manoj", role: "Associate Professor, Department of Chemistry" },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="group relative p-5 bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          <span className="text-lg font-bold text-gray-600">{index + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 mb-1 truncate">{member.name}</p>
                          <p className="text-sm text-gray-600 line-clamp-2">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            
          </div>

          {/* Organizing Committee - Grid with Numbers */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100 rounded-full border border-blue-200">
                <div className="p-2 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Organizing Secretaries</h3>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: "Dr. R. Suresh", role: "Associate Professor" },
                { name: "Dr. R. Kumar", role: "Assistant Professor" },
                { name: "Dr. G. Kalaiarasi", role: "Assistant Professor" },
                { name: "Dr. K. Sundaram", role: "Assistant Professor" },
                { name: "Dr. N. Kannapiran", role: "Assistant Professor" },
                { name: "Dr. K. Radhakrishnan", role: "Assistant Professor" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-3xl flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-400">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-cyan-600 transition-all duration-300">
                      <User className="h-7 w-7 text-white" />
                    </div>
                    <p className="font-bold text-gray-900 mb-2 text-lg leading-tight">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

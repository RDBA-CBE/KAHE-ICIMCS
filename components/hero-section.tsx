"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Building2 } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#0a1f3d] via-[#1e3a8a] via-[#7c3aed] to-[#06b6d4]">
      <Header />

      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

        {/* Floating particles */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-60" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-40 w-2 h-2 bg-purple-300 rounded-full animate-float opacity-80" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-pink-400 rounded-full animate-float opacity-70" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-20 w-3 h-3 bg-cyan-300 rounded-full animate-float opacity-60" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mt-15 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center pt-20">
        <div className="w-full max-w-6xl mx-auto">
          {/* Conference Title Section - World Class Design */}
          <div className="text-center mb-12 space-y-8">
            {/* Subtitle */}
            <div className="inline-block">
              <span className="text-yellow-400 text-lg md:text-xl font-light italic tracking-wider">
                First International Conference on
              </span>
            </div>

            {/* Main Title with enhanced typography */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
                <div className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                  INNOVATIONS IN
                </div>
                <div className="bg-gradient-to-r from-cyan-200 via-white to-pink-200 bg-clip-text text-transparent drop-shadow-2xl mt-2 md:mt-4">
                  MATERIAL CHEMISTRY
                </div>
                <div className="bg-gradient-to-r from-purple-100 via-white to-cyan-100 bg-clip-text text-transparent drop-shadow-2xl mt-2 md:mt-4">
                  FOR SUSTAINABILITY
                </div>
              </h1>

              {/* Conference Code */}
              <div className="mt-8 md:mt-12">
                <div className="inline-block">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-black text-yellow-400 tracking-[0.2em] px-8 py-4 border-2 border-yellow-400/50 bg-white/5 backdrop-blur-sm rounded-lg">
                    ICIMCS-2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Date and Organization Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Date Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-400/20 rounded-xl backdrop-blur-sm">
                  <Calendar className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Conference Dates</h3>
              </div>
              <p className="text-3xl md:text-4xl font-black text-yellow-400 tracking-wide">
                February 18 - 20, 2026
              </p>
            </div>

            {/* Organization Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-400/20 rounded-xl backdrop-blur-sm">
                  <Building2 className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Organized by</h3>
              </div>
              <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                DEPARTMENT OF CHEMISTRY &<br />
                CENTRE FOR MATERIAL CHEMISTRY
              </p>
            </div>
          </div>

          {/* Location */}
          

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 text-base px-10 py-7 font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <Link href="/tickets">Register Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-base px-10 py-7 font-bold shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Link href="/schedule">View Schedule</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-yellow-400/20 backdrop-blur-md border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/30 hover:border-yellow-400 text-base px-10 py-7 font-bold shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Link href="/speakers">Speakers</Link>
            </Button>
          </div> */}
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
              <stop offset="25%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
              <stop offset="75%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

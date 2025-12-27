"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { useState, useEffect, useRef } from "react"

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            let startTime: number | null = null

            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime
              const progress = Math.min((currentTime - startTime) / duration, 1)
              
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              setCount(Math.floor(easeOutQuart * end))

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(end)
              }
            }

            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [end, duration, hasAnimated])

  return (
    <div ref={counterRef} className="text-3xl font-black text-gray-900 mb-2">
      {count}{suffix}
    </div>
  )
}

export function AboutSection() {
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
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              About ICIMCS-2026
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full mb-6"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The <strong>International Conference on Innovations in Material Chemistry for Sustainability (ICIMCS-2026)</strong> aims to provide a common platform for knowledge sharing among Researchers, Academicians, Practitioners, and Industrialists in areas related to Chemistry and Sustainable Technologies.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Organized by the <strong>Department of Chemistry & Centre for Material Chemistry</strong> at Karpagam Academy of Higher Education, this conference will feature keynote addresses, oral and poster presentations, and networking opportunities.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 text-white border-0 text-base px-8 py-6 font-bold shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/about" className="flex items-center gap-2">
                Know More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <Counter end={3} suffix=" Days" />
              <div className="text-sm font-semibold text-gray-600">Conference Duration</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <Counter end={16} suffix="+" />
              <div className="text-sm font-semibold text-gray-600">Renowned Speakers</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <Counter end={15} suffix="+" />
              <div className="text-sm font-semibold text-gray-600">Research Areas</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <Counter end={2026} />
              <div className="text-sm font-semibold text-gray-600">Conference Year</div>
            </div>
          </div>
        </div>

        {/* Important Dates Section */}
        <div className="mt-12">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Important Dates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 p-2 bg-gray-200 rounded-lg">
                  <Calendar className="h-6 w-6 text-gray-700" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-2">{item.label}</div>
                  <div className="text-lg font-bold text-gray-700">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


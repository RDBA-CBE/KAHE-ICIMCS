"use client"

import { Button } from "@/components/ui/button"
import { Clock, CheckCircle2 } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-400 to-green-400" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Limited Time Only</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hurry Up!</h2>
              <p className="text-lg mb-6 leading-relaxed opacity-95">
                Reserve Your Seat Now: Conference Ends Soon. Don't miss your chance to be part of this revolutionary
                event!
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Early Bird Pricing</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Exclusive Access</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                  Book Ticket
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/colorful-event-tickets.png?height=300&width=400&query=colorful event tickets illustration"
                  alt="Event Tickets"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="absolute -right-20 top-0 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl" />
          <div className="absolute -left-20 bottom-0 w-64 h-64 bg-cyan-300/30 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}

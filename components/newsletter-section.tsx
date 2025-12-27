"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 via-purple-600 to-purple-700" />

      {/* Diagonal Stripes Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
                 45deg,
                 transparent,
                 transparent 20px,
                 rgba(255, 255, 255, 0.1) 20px,
                 rgba(255, 255, 255, 0.1) 40px
               )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Text and Form */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                Sign Up Today To Get The Latest
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Inspiration & Insights</h2>

              <form onSubmit={handleSubmit} className="flex gap-0 max-w-2xl">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 bg-white text-gray-900 text-base rounded-r-none border-0 placeholder:text-gray-400"
                  required
                />
                <Button
                  type="submit"
                  className="h-14 px-8 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold rounded-l-none text-base"
                >
                  Subscribe Now
                </Button>
              </form>
            </div>

            {/* Right: Microphone Image */}
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 flex-shrink-0">
              <img
                src="/professional-stage-microphone-on-purple-gradient-b.jpg"
                alt="Microphone"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

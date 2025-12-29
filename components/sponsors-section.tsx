"use client"

import { Award } from "lucide-react"
import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

export function SponsorsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const acsJournals = [
    { name: "ACS Applied Nano Materials", image: "/sponsors/1.png" },
    { name: "ACS Applied Energy Materials", image: "/sponsors/2.png" },
    { name: "ACS Materials", image: "/sponsors/3.jpg" },
    { name: "ACS Sustainable Chemistry & Engineering", image: "/sponsors/4.png" },
    { name: "ACS Omega", image: "/sponsors/5.png" },
    { name: "Sponsor", image: "/sponsors/6.png" },
  ]

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000) // Auto-scroll every 3 seconds

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="py-[60px] bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Sponsors</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full mx-auto"></div>
        </div>

        {/* American Chemical Society Section */}
        <div className="mb-12 max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {acsJournals.map((journal, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-full min-h-[150px]">
                    <img
                      src={journal.image}
                      alt={journal.name}
                      className="max-w-full h-auto object-contain"
                      style={{ maxHeight: "120px" }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Awards & Recognition Section */}
        <div className="max-w-4xl mx-auto">
          

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Best 5 presentations certificates from the American Chemical Society (ACS) - ACS Applied Nano Materials, ACS Omega, ACS Sustainable Resource Management, ACS Materials Au, ACS Applied Energy Materials.
                  </p>
                  <p className="text-lg font-bold text-gray-900 text-center">
                Best presenters will receive the ACS certificates and the cash prize of <span className="text-gray-700 bg-yellow-100 px-2 py-1 rounded">INR 3000</span> each.
              </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

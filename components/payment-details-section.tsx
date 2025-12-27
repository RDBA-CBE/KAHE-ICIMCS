"use client"

import { QrCode } from "lucide-react"

export function PaymentDetailsSection() {
  return (
    <section className="py-[60px] bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Payment Details</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full"></div>
            </div>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Registration form along with payment proof should be submitted here
            </p>
            <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
              <div className="text-center">
                <div className="inline-block p-4 bg-white rounded-lg mb-4">
                  <QrCode className="h-24 w-24 text-gray-400" />
                </div>
                <p className="text-xl font-bold text-gray-900 mb-2">SCAN ME</p>
                <p className="text-sm text-gray-600">Scan QR code to submit payment</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-gradient-to-br from-[#0a1f3d] via-[#1e3a8a] to-[#7c3aed] shadow-2xl border-0 rounded-3xl text-white">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-black text-white">For Details Contact</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-yellow-400 font-semibold mb-2">Contact Person</p>
                <p className="text-white text-lg font-bold">Dr. K. Saravana Mani</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-yellow-400 font-semibold mb-2">Phone</p>
                <a href="tel:+919488060834" className="text-white text-lg font-bold hover:text-yellow-400 transition-colors">
                  +91 94880 60834
                </a>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-yellow-400 font-semibold mb-2">Email</p>
                <a href="mailto:icimcs@kahedu.edu.in" className="text-white text-lg font-bold hover:text-yellow-400 transition-colors break-all">
                  icimcs@kahedu.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

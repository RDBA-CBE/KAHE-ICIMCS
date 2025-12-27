"use client"

import Link from "next/link"
import { Globe, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link 
              href="https://instagram.com/wekaheians?igshid=NGExMmI2YTkyZg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link 
              href="https://twitter.com/wekaheians" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <span className="mx-2 text-gray-500">|</span>
            <Link 
              href="https://www.kahedu.edu.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm md:text-base">www.kahedu.edu.in</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

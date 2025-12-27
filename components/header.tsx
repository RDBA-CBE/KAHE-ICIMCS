"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NavLink } from "./nav-link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="absolute top-0 w-full z-50 bg-gradient-to-b from-[#0a1f3d]/80 to-transparent backdrop-blur-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <NavLink href="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="/logo/logo.png"
              alt="Karpagam Academy of Higher Education"
              className="h-auto w-auto object-contain mt-10 max-w-[200px] md:max-w-[350px]"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              href="/"
              className="text-m font-semibold transition-colors duration-300 text-white/90 hover:text-cyan-300"
              activeClassName="text-m font-semibold transition-colors duration-300 text-cyan-300"
            >
              Home
            </NavLink>
            <NavLink
              href="/about"
              className="text-m font-semibold transition-colors duration-300 text-white/90 hover:text-cyan-300"
              activeClassName="text-m font-semibold transition-colors duration-300 text-cyan-300"
            >
              About
            </NavLink>
            <NavLink
              href="/advisory"
              className="text-m font-semibold transition-colors duration-300 text-white/90 hover:text-cyan-300"
              activeClassName="text-m font-semibold transition-colors duration-300 text-cyan-300"
            >
              Advisory
            </NavLink>
            <NavLink
              href="/#contact-section"
              className="text-m font-semibold transition-colors duration-300 text-white/90 hover:text-cyan-300"
              activeClassName="text-m font-semibold transition-colors duration-300 text-cyan-300"
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-20 left-0 right-0 bg-gradient-to-br from-[#0a1f3d] via-[#1e3a8a] to-[#7c3aed] backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <nav className="container mx-auto px-4 py-6 space-y-4">
            <NavLink
              href="/"
              onClick={closeMenu}
              className="block text-base font-semibold transition-colors duration-300 py-2 border-b border-white/10 text-white/90 hover:text-cyan-300"
              activeClassName="block text-base font-semibold transition-colors duration-300 py-2 border-b border-white/10 text-cyan-300"
            >
              Home
            </NavLink>
            <NavLink
              href="/about"
              onClick={closeMenu}
              className="block text-base font-semibold transition-colors duration-300 py-2 border-b border-white/10 text-white/90 hover:text-cyan-300"
              activeClassName="block text-base font-semibold transition-colors duration-300 py-2 border-b border-white/10 text-cyan-300"
            >
              About
            </NavLink>
            <NavLink
              href="/advisory"
              onClick={closeMenu}
              className="block text-base font-semibold transition-colors duration-300 py-2 border-b border-white/10 text-white/90 hover:text-cyan-300"
              activeClassName="block text-base font-semibold transition-colors duration-300 py-2 border-b border-white/10 text-cyan-300"
            >
              Advisory
            </NavLink>
            <NavLink
              href="/#contact-section"
              onClick={closeMenu}
              className="block text-base font-semibold transition-colors duration-300 py-2 text-white/90 hover:text-cyan-300"
              activeClassName="block text-base font-semibold transition-colors duration-300 py-2 text-cyan-300"
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

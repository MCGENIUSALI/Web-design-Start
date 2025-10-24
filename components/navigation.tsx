"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Mylogo from "@/public/icons/logo start.svg"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-5 left-5 right-5 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={Mylogo} alt="Mon logo" width={100} height={100} className="w-36 max-w-40" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              À propos
            </a>
            <a href="#pages" className="text-foreground hover:text-primary transition-colors font-medium">
              Pages
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full">
              Avoir un Devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-foreground hover:text-primary transition-colors font-medium">
                Accueil
              </a>
              <a href="#services" className="block text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="block text-foreground hover:text-primary transition-colors font-medium">
                À propos
              </a>
              <a href="#pages" className="block text-foreground hover:text-primary transition-colors font-medium">
                Pages
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-4">
                Avoir un Devis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

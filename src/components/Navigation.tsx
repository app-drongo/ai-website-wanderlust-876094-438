// Navigation Component
// Generated: 2025-08-25T22:44:35.945Z
// Template: navigation-c001
// Context: layout
// Position: layout.header.0

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Compass, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Safari Tours", href: "/safari-tours" },
    { name: "Exotic Destinations", href: "/exotic-destinations" },
    { name: "Travel Blog", href: "/blog" },
    { name: "Reviews", href: "/reviews" },
    { name: "Travel Insurance", href: "/insurance" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Compass className="size-6 text-background" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">Wanderlust</span>
                <span className="text-sm text-primary font-medium -mt-1">Adventures</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigation.slice(0, 6).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-primary/10 rounded-lg relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2"></span>
                </Link>
              ))}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-primary/10 rounded-lg flex items-center gap-1"
                >
                  More
                  <ChevronDown className={cn("size-4 transition-transform", dropdownOpen && "rotate-180")} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-primary/20 rounded-lg shadow-xl py-2 z-50">
                    {navigation.slice(6).map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              Destinations
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-background font-medium px-6 shadow-lg">
              Book Trip
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          )}
        >
          <div className="px-2 pt-4 pb-3 space-y-2 border-t border-primary/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-primary/10 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3 border-t border-primary/20 mt-4">
              <Button variant="ghost" className="justify-start text-muted-foreground hover:text-primary">
                Destinations
              </Button>
              <Button className="justify-start bg-primary hover:bg-primary/90 text-background">
                Book Trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
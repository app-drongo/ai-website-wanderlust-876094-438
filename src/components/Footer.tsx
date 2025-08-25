// Footer Component
// Generated: 2025-08-25T22:44:35.946Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Compass,
  Award,
  Shield,
  Globe
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Destinations",
      links: [
        { name: "African Safaris", href: "/destinations/africa" },
        { name: "Asian Adventures", href: "/destinations/asia" },
        { name: "South American Expeditions", href: "/destinations/south-america" },
        { name: "European Escapes", href: "/destinations/europe" },
        { name: "Island Getaways", href: "/destinations/islands" },
        { name: "Arctic Expeditions", href: "/destinations/arctic" }
      ]
    },
    {
      title: "Travel Services",
      links: [
        { name: "Safari Tours", href: "/safari-tours" },
        { name: "Luxury Packages", href: "/luxury-packages" },
        { name: "Group Tours", href: "/group-tours" },
        { name: "Private Expeditions", href: "/private-tours" },
        { name: "Travel Insurance", href: "/insurance" },
        { name: "Visa Assistance", href: "/visa-assistance" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Travel Blog", href: "/blog" },
        { name: "Travel Guides", href: "/guides" },
        { name: "Customer Reviews", href: "/reviews" },
        { name: "Photo Gallery", href: "/gallery" },
        { name: "Travel Tips", href: "/travel-tips" },
        { name: "Packing Lists", href: "/packing-lists" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Booking Help", href: "/booking-help" },
        { name: "Travel Policies", href: "/policies" },
        { name: "Cancellation Policy", href: "/cancellation" },
        { name: "Emergency Support", href: "/emergency" },
        { name: "FAQ", href: "/faq" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/wanderlustadventures" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/wanderlustadventures" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/wanderlustadv" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/wanderlustadventures" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/wanderlust-adventures" }
  ]

  const certifications = [
    { name: "ATTA Certified", icon: Award },
    { name: "Secure Booking", icon: Shield },
    { name: "Global Coverage", icon: Globe }
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Compass className="size-7 text-background" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-primary">Wanderlust</span>
                  <span className="text-accent font-medium -mt-1">Adventures</span>
                </div>
              </Link>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
                Discover the world's most extraordinary destinations with our luxury safari tours and exotic adventures. 
                Creating unforgettable memories since 1995 with personalized service and expert local guides.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">adventures@wanderlust.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">+1 (800) WANDER-1</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">Safari House, 456 Adventure Blvd, Explorer City</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Adventure Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email for travel inspiration"
                  className="flex-1 px-4 py-3 text-sm border border-primary/30 rounded-lg bg-secondary-foreground/5 text-secondary-foreground placeholder:text-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
                <Button size="sm" className="px-4 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-secondary-foreground/70">
                Get exclusive travel deals, destination guides, and adventure stories. Unsubscribe anytime.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-primary">Trusted & Certified</h4>
              <div className="flex gap-4">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon
                  return (
                    <div key={index} className="flex items-center gap-2 text-xs text-secondary-foreground/70">
                      <Icon className="size-4 text-accent" />
                      <span>{cert.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-primary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary-foreground/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
              <span>© 2024 Wanderlust Adventures. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> for adventurers
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-secondary-foreground/70 mr-2">Follow our journeys:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-200 group hover:scale-105"
                  >
                    <Icon className="size-4 text-secondary-foreground/70 group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/sitemap" className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
              Accessibility
            </Link>
            <Link href="/privacy" className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/booking-terms" className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
              Booking Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
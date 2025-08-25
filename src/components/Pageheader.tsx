// Pageheader Component
// Generated: 2025-08-25T22:44:35.948Z
// Template: page-header-c001
// Context: Destinations
// Position: pages.1.sections.0

import { Badge } from "@/components/ui/badge"

export default function Pageheader() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 size-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-48 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 sm:py-20 lg:py-24 max-w-4xl">
          {/* Optional Badge */}
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Exotic Destinations
          </Badge>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Discover the World's Most
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Breathtaking Destinations
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            From the vast savannas of Africa to the mystical temples of Asia, explore our carefully curated collection 
            of exotic destinations. Each location offers unique wildlife encounters, cultural experiences, and luxury accommodations 
            that create unforgettable memories for the discerning traveler.
          </p>
        </div>
      </div>
    </section>
  )
}
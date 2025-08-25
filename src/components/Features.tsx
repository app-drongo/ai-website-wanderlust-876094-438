// Features Component
// Generated: 2025-08-25T22:44:35.947Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Shield, 
  Camera, 
  Compass, 
  Star, 
  Users,
  Plane,
  Heart,
  Award
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: "Exotic Destinations",
      description: "Explore breathtaking locations across Africa, Asia, and South America with our carefully selected destinations.",
      badge: "Destinations"
    },
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description: "Travel with confidence knowing you're protected by our premium travel insurance coverage.",
      badge: "Protection"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning wildlife moments with professional photography guidance and equipment.",
      badge: "Photography"
    },
    {
      icon: Compass,
      title: "Expert Guides",
      description: "Learn from local wildlife experts and experienced guides who know the terrain intimately.",
      badge: "Expertise"
    },
    {
      icon: Star,
      title: "Luxury Accommodations",
      description: "Stay in premium lodges and camps that offer comfort without compromising the adventure.",
      badge: "Luxury"
    },
    {
      icon: Users,
      title: "Small Group Tours",
      description: "Enjoy intimate experiences with small group sizes for personalized attention and flexibility.",
      badge: "Exclusive"
    },
    {
      icon: Plane,
      title: "Private Transfers",
      description: "Seamless transportation with private charter flights and luxury ground transfers.",
      badge: "Transport"
    },
    {
      icon: Heart,
      title: "Conservation Focus",
      description: "Support wildlife conservation efforts through responsible tourism and eco-friendly practices.",
      badge: "Conservation"
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized by leading travel publications for exceptional service and unforgettable experiences.",
      badge: "Excellence"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Extraordinary Adventures
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From luxury accommodations to expert guides, we provide everything needed 
            for an unforgettable safari experience in the world's most exotic destinations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to embark on your luxury adventure?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Your Safari
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View All Destinations
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
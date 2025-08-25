// Features1 Component
// Generated: 2025-08-25T22:44:35.948Z
// Template: features-c001
// Context: Destinations
// Position: pages.1.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mountain, 
  Waves, 
  TreePine, 
  Sun, 
  Snowflake, 
  Compass,
  Camera,
  Binoculars,
  Map
} from "lucide-react"

export default function Features1() {
  const features = [
    {
      icon: Mountain,
      title: "African Safaris",
      description: "Experience the Big Five in Kenya, Tanzania, and South Africa with luxury lodge accommodations.",
      badge: "Wildlife"
    },
    {
      icon: Waves,
      title: "Island Paradises",
      description: "Discover pristine beaches and coral reefs in the Maldives, Seychelles, and Madagascar.",
      badge: "Tropical"
    },
    {
      icon: TreePine,
      title: "Amazon Rainforest",
      description: "Explore the world's largest rainforest with expert naturalist guides and eco-lodges.",
      badge: "Adventure"
    },
    {
      icon: Sun,
      title: "Desert Expeditions",
      description: "Journey through the Sahara and Namib deserts with luxury camping under starlit skies.",
      badge: "Desert"
    },
    {
      icon: Snowflake,
      title: "Arctic Adventures",
      description: "Witness polar bears and northern lights in Svalbard and the Canadian Arctic.",
      badge: "Arctic"
    },
    {
      icon: Compass,
      title: "Cultural Immersion",
      description: "Connect with local communities and experience authentic traditions in remote locations.",
      badge: "Culture"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning landscapes and wildlife with professional photography workshops.",
      badge: "Photography"
    },
    {
      icon: Binoculars,
      title: "Wildlife Tracking",
      description: "Follow endangered species with conservation experts and contribute to research efforts.",
      badge: "Conservation"
    },
    {
      icon: Map,
      title: "Custom Itineraries",
      description: "Personalized travel plans tailored to your interests, schedule, and adventure level.",
      badge: "Bespoke"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Destination Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Explore Diverse Landscapes and
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Unique Experiences
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each destination in our portfolio offers distinct adventures, from wildlife encounters 
            to cultural immersion, all designed for the luxury traveler seeking authentic experiences.
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
            Ready to explore these incredible destinations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse All Destinations
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Request Travel Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
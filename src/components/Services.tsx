// Services Component
// Generated: 2025-08-25T22:44:35.950Z
// Template: services-c002
// Context: Safari Tours
// Position: pages.2.sections.1

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Binoculars,
  Camera,
  MapPin,
  Shield,
  Users,
  Calendar,
  Award
} from "lucide-react"

export default function Services() {
  const safariPackages = [
    {
      id: "luxury-kenya-safari",
      title: "Luxury Kenya Safari Experience",
      description: "Witness the Great Migration in ultimate comfort and style",
      longDescription: "Experience the breathtaking spectacle of the Great Migration across the Masai Mara with our premium safari package. Stay in luxury tented camps and enjoy exclusive game drives with expert guides who know every corner of this magnificent ecosystem.",
      icon: Binoculars,
      benefits: [
        "Private luxury tented accommodation",
        "Expert Maasai guide throughout journey",
        "Exclusive hot air balloon safari",
        "All meals and premium beverages included"
      ],
      pricing: "Starting at $8,500 per person",
      timeline: "7-10 days adventure",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "tanzania-serengeti-expedition",
      title: "Tanzania Serengeti Expedition",
      description: "Explore the endless plains where wildlife roams free",
      longDescription: "Journey through Tanzania's crown jewel, the Serengeti, where millions of wildebeest, zebras, and gazelles create one of nature's most spectacular shows. Our expert guides will take you to the best viewing spots for unforgettable wildlife encounters.",
      icon: Camera,
      benefits: [
        "Professional wildlife photography guidance",
        "Mobile luxury camping experience",
        "Ngorongoro Crater exploration",
        "Cultural visit to Maasai villages"
      ],
      pricing: "Starting at $6,800 per person",
      timeline: "8-12 days expedition"
    },
    {
      id: "botswana-delta-safari",
      title: "Botswana Okavango Delta Safari",
      description: "Navigate pristine waterways in Africa's last Eden",
      longDescription: "Discover the pristine wilderness of the Okavango Delta, where crystal-clear channels wind through papyrus-lined waterways. Experience both water and land-based game viewing in one of Africa's most exclusive safari destinations.",
      icon: MapPin,
      benefits: [
        "Traditional mokoro canoe excursions",
        "Exclusive concession areas",
        "Big Five wildlife encounters",
        "Luxury eco-lodge accommodation"
      ],
      pricing: "Starting at $9,200 per person",
      timeline: "6-8 days adventure"
    },
    {
      id: "south-africa-luxury-safari",
      title: "South Africa Luxury Safari & Wine",
      description: "Combine world-class safari with premium wine experiences",
      longDescription: "Experience the best of South Africa with our exclusive safari and wine tour. From the Big Five in Kruger National Park to world-renowned vineyards in Stellenbosch, this journey combines wildlife adventure with culinary excellence.",
      icon: Award,
      benefits: [
        "Private game reserve access",
        "Wine tasting at premier estates",
        "Luxury lodge accommodations",
        "Professional sommelier experiences"
      ],
      pricing: "Starting at $7,500 per person",
      timeline: "10-14 days journey",
      badge: "Premium"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Safari Adventures
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Luxury Safari Experiences
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Across Wild Africa
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Embark on extraordinary safari adventures crafted for discerning travelers seeking authentic wildlife encounters in Africa's most pristine wilderness areas.
          </p>
        </div>

        {/* Safari Packages List */}
        <div className="space-y-8">
          {safariPackages.map((safari, index) => {
            const Icon = safari.icon
            
            return (
              <div key={safari.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${safari.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Safari Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${safari.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {safari.title}
                        </h3>
                        {safari.badge && (
                          <Badge variant={safari.featured ? "default" : "secondary"}>
                            {safari.badge}
                          </Badge>
                        )}
                        {safari.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {safari.description}
                      </p>
                      
                      {safari.longDescription && (
                        <p className="text-muted-foreground">
                          {safari.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {safari.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {safari.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {safari.pricing}
                            </span>
                          </div>
                        )}
                        {safari.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Duration:</span>
                            <span className="text-sm font-semibold">
                              {safari.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={safari.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Reserve Your Safari
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < safariPackages.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Planning a Custom Safari Adventure?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our safari specialists will craft a bespoke itinerary tailored to your preferences, ensuring an unforgettable African adventure.
          </p>
          <Button size="lg">
            Speak with Safari Expert
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
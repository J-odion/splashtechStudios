import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: "fintech-dashboard",
      title: "Fintech Dashboard",
      category: "Web Application",
      image: "/placeholder.svg?height=600&width=800",
      summary: "A comprehensive financial dashboard for tracking investments and managing portfolios.",
    },
    {
      id: "ecommerce-app",
      title: "E-commerce Mobile App",
      category: "Mobile Development",
      image: "/placeholder.svg?height=600&width=800",
      summary: "A cross-platform mobile app for a leading fashion retailer with AR try-on features.",
    },
    {
      id: "saas-marketing-platform",
      title: "SaaS Marketing Platform",
      category: "SaaS Development",
      image: "/placeholder.svg?height=600&width=800",
      summary: "An all-in-one marketing automation platform for small and medium businesses.",
    },
    {
      id: "healthcare-portal",
      title: "Healthcare Patient Portal",
      category: "Web Application",
      image: "/placeholder.svg?height=600&width=800",
      summary: "A secure patient portal for scheduling appointments and accessing medical records.",
    },
    {
      id: "real-estate-platform",
      title: "Real Estate Platform",
      category: "Web Application",
      image: "/placeholder.svg?height=600&width=800",
      summary: "A property listing and management platform with virtual tours and analytics.",
    },
    {
      id: "fitness-tracking-app",
      title: "Fitness Tracking App",
      category: "Mobile Development",
      image: "/placeholder.svg?height=600&width=800",
      summary: "A mobile app for tracking workouts, nutrition, and health metrics with social features.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-slate-300">
              Explore our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className="group">
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{project.summary}</p>
                    <div className="inline-flex items-center text-primary font-medium group-hover:underline">
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your business goals with our digital expertise.
            </p>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all inline-flex items-center"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


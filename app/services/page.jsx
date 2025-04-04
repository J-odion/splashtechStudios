import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Smartphone, BarChart3, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "We build custom websites and web applications that are fast, secure, and scalable.",
      features: [
        "Custom web application development",
        "E-commerce websites",
        "Progressive Web Apps (PWAs)",
        "Content Management Systems",
        "API development and integration",
        "Web performance optimization",
      ],
      image: "/placeholder.svg?height=600&width=800",
      cta: "Start your web project",
    },
    {
      id: "saas-development",
      title: "SaaS Development",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      description: "We help you build, launch, and scale your Software-as-a-Service product.",
      features: [
        "SaaS product development",
        "Multi-tenant architecture",
        "Subscription and billing systems",
        "User authentication and authorization",
        "Analytics and reporting dashboards",
        "Third-party integrations",
      ],
      image: "/placeholder.svg?height=600&width=800",
      cta: "Build your SaaS product",
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      description: "We create native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS and Android development",
        "Cross-platform development (React Native)",
        "Mobile app UI/UX design",
        "App Store and Google Play submission",
        "Push notifications and offline functionality",
        "Mobile app analytics and performance monitoring",
      ],
      image: "/placeholder.svg?height=600&width=800",
      cta: "Create your mobile app",
    },
    {
      id: "project-management",
      title: "Project Management",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      description: "We provide expert project management to ensure your digital projects are delivered successfully.",
      features: [
        "Agile project management",
        "Sprint planning and execution",
        "Resource allocation and management",
        "Risk assessment and mitigation",
        "Progress tracking and reporting",
        "Stakeholder communication",
      ],
      image: "/placeholder.svg?height=600&width=800",
      cta: "Manage your project",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">
              We offer end-to-end digital solutions to help your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 ${index !== services.length - 1 ? "border-b border-slate-200 dark:border-slate-800" : ""}`}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all inline-flex items-center"
                  >
                    {service.cta} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your business goals with our digital expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact#book-call"
                className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


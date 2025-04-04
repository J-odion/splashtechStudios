import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

// This would typically come from a CMS or API
const projects = {
  "fintech-dashboard": {
    title: "Fintech Dashboard",
    category: "Web Application",
    client: "InvestTech Inc.",
    year: "2023",
    duration: "4 months",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Chart.js", "TailwindCSS"],
    heroImage: "/placeholder.svg?height=800&width=1600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    overview:
      "InvestTech needed a comprehensive financial dashboard to help their customers track investments, manage portfolios, and make data-driven decisions. We built a responsive web application with real-time data visualization, portfolio management tools, and personalized insights.",
    challenge:
      "The main challenge was creating a system that could handle real-time financial data from multiple sources while maintaining performance and security. We also needed to present complex financial information in an intuitive and accessible way for users with varying levels of financial expertise.",
    solution:
      "We developed a scalable architecture using Next.js for the frontend and Node.js for the backend. We implemented WebSocket connections for real-time data updates and used Chart.js for interactive data visualizations. The application features role-based access control, two-factor authentication, and end-to-end encryption for sensitive financial data.",
    results: [
      "Increased user engagement by 45%",
      "Reduced portfolio management time by 60%",
      "Improved customer retention by 25%",
      "98% positive user feedback on the new interface",
    ],
    testimonial: {
      quote:
        "The team delivered a sophisticated financial dashboard that exceeded our expectations. Our users love the intuitive interface and powerful features.",
      author: "Sarah Johnson",
      role: "CTO, InvestTech Inc.",
    },
    nextProject: "ecommerce-app",
  },
  "ecommerce-app": {
    title: "E-commerce Mobile App",
    category: "Mobile Development",
    client: "FashionForward",
    year: "2023",
    duration: "6 months",
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Stripe", "Firebase"],
    heroImage: "/placeholder.svg?height=800&width=1600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    overview:
      "FashionForward wanted to expand their online presence with a mobile app that would provide a seamless shopping experience for their customers. We developed a cross-platform mobile application with AR try-on features, personalized recommendations, and a streamlined checkout process.",
    challenge:
      "The client needed a mobile app that would stand out in a crowded market while maintaining brand consistency with their existing web platform. They also required advanced features like AR try-on and personalized recommendations without compromising on performance.",
    solution:
      "We built a cross-platform app using React Native to ensure consistent experience across iOS and Android. We integrated AR technology for virtual try-on features and implemented a recommendation engine using machine learning. The app includes offline functionality, push notifications, and a seamless checkout process with multiple payment options.",
    results: [
      "Increased mobile sales by 75% in the first quarter",
      "35% higher average order value compared to the website",
      "200,000+ downloads in the first three months",
      "4.8/5 average rating on app stores",
    ],
    testimonial: {
      quote:
        "The mobile app has transformed our business. The AR try-on feature has significantly reduced return rates and increased customer satisfaction.",
      author: "Michael Chen",
      role: "Digital Director, FashionForward",
    },
    nextProject: "saas-marketing-platform",
  },
  "saas-marketing-platform": {
    title: "SaaS Marketing Platform",
    category: "SaaS Development",
    client: "MarketBoost",
    year: "2022",
    duration: "8 months",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe"],
    heroImage: "/placeholder.svg?height=800&width=1600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    overview:
      "MarketBoost needed an all-in-one marketing platform to help small and medium businesses manage their marketing efforts. We developed a SaaS solution with email marketing, social media management, content scheduling, and analytics features.",
    challenge:
      "The main challenge was building a scalable multi-tenant architecture that could handle thousands of businesses with varying needs and usage patterns. We also needed to integrate with multiple third-party services while maintaining performance and data security.",
    solution:
      "We developed a cloud-based SaaS platform with a microservices architecture hosted on AWS. We implemented a flexible subscription model with Stripe and built a comprehensive dashboard for monitoring marketing campaigns across channels. The platform features automated workflows, A/B testing capabilities, and detailed analytics.",
    results: [
      "Acquired 500+ paying customers within the first year",
      "95% customer retention rate",
      "Average 30% improvement in marketing ROI for customers",
      "Successfully raised Series A funding based on platform performance",
    ],
    testimonial: {
      quote:
        "This platform has revolutionized how we approach marketing. The intuitive interface and powerful automation features have saved us countless hours and significantly improved our results.",
      author: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
    },
    nextProject: "healthcare-portal",
  },
  "healthcare-portal": {
    title: "Healthcare Patient Portal",
    category: "Web Application",
    client: "MediCare Health Network",
    year: "2022",
    duration: "5 months",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS"],
    heroImage: "/placeholder.svg?height=800&width=1600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    overview:
      "MediCare Health Network needed a secure patient portal to improve patient engagement and streamline administrative processes. We developed a HIPAA-compliant web application for scheduling appointments, accessing medical records, and communicating with healthcare providers.",
    challenge:
      "The primary challenge was ensuring the highest level of security and compliance with healthcare regulations while creating an intuitive user experience. We also needed to integrate with existing electronic health record (EHR) systems and implement real-time communication features.",
    solution:
      "We built a secure web application with end-to-end encryption and strict access controls. We implemented seamless integration with the client's EHR system and developed a real-time messaging system for patient-provider communication. The portal includes features for appointment scheduling, prescription refills, bill payment, and access to medical records.",
    results: [
      "Reduced administrative workload by 40%",
      "Decreased no-show appointments by 35%",
      "Improved patient satisfaction scores by 28%",
      "Streamlined compliance reporting and auditing",
    ],
    testimonial: {
      quote:
        "The patient portal has transformed how we interact with our patients. It's secure, user-friendly, and has significantly improved our operational efficiency.",
      author: "Dr. James Wilson",
      role: "CIO, MediCare Health Network",
    },
    nextProject: "real-estate-platform",
  },
  "real-estate-platform": {
    title: "Real Estate Platform",
    category: "Web Application",
    client: "PropertyPro",
    year: "2021",
    duration: "7 months",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "ElasticSearch", "Google Maps API"],
    heroImage: "/placeholder.svg?height=800&width=1600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    overview:
      "PropertyPro wanted to revolutionize the real estate market with a comprehensive platform for property listing, searching, and management. We developed a web application with advanced search capabilities, virtual tours, and analytics for property owners and agents.",
    challenge:
      "The challenge was creating a platform that could handle thousands of property listings with complex search requirements and rich media content. We also needed to implement virtual tour functionality and integrate with multiple third-party services for mapping, mortgage calculations, and market data.",
    solution:
      "We built a scalable platform using Next.js for the frontend and Node.js for the backend. We implemented ElasticSearch for fast and accurate property searches and integrated with Google Maps for location-based features. The platform includes 360° virtual tours, automated valuation models, and a comprehensive dashboard for property owners and agents.",
    results: [
      "Increased property inquiries by 65%",
      "Reduced time-to-sale by an average of 3 weeks",
      "Grew to 10,000+ active listings within the first year",
      "Expanded to 5 major metropolitan areas",
    ],
    testimonial: {
      quote:
        "This platform has completely transformed our business. The virtual tours and advanced search features have given us a significant competitive advantage in the market.",
      author: "Robert Thompson",
      role: "CEO, PropertyPro",
    },
    nextProject: "fitness-tracking-app",
  },
  "fitness-tracking-app": {
    title: "Fitness Tracking App",
    category: "Mobile Development",
    client: "FitLife",
    year: "2021",
    duration: "5 months",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Apple HealthKit", "Google Fit"],
    heroImage: "/placeholder.svg?height=800&width=1600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    overview:
      "FitLife wanted to create a comprehensive fitness tracking app to help users monitor their workouts, nutrition, and health metrics. We developed a cross-platform mobile application with social features, personalized workout plans, and integration with wearable devices.",
    challenge:
      "The main challenge was creating a seamless user experience across different devices and platforms while handling complex data synchronization. We also needed to implement accurate tracking algorithms and integrate with various health and fitness APIs.",
    solution:
      "We built a cross-platform app using React Native with offline functionality and background syncing. We integrated with Apple HealthKit and Google Fit for comprehensive health data tracking and implemented machine learning algorithms for personalized workout recommendations. The app includes social features, challenges, and gamification elements to increase user engagement.",
    results: [
      "Reached 1 million downloads within the first year",
      "75% daily active user retention after 30 days",
      "Average 4.7/5 rating across app stores",
      'Featured in Apple\'s "Apps We Love" collection',
    ],
    testimonial: {
      quote:
        "The team delivered an exceptional fitness app that our users love. The attention to detail and focus on user experience has been key to our success.",
      author: "Lisa Martinez",
      role: "Founder, FitLife",
    },
    nextProject: "fintech-dashboard",
  },
}

export default function ProjectPage({ params }) {
  const { id } = params
  const project = projects[id]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
        <Image
          src={project.heroImage || "/placeholder.svg"}
          alt={project.title}
          width={1600}
          height={800}
          className="w-full h-[60vh] object-cover"
        />
        <div className="container mx-auto px-4 absolute inset-0 z-20 flex items-center">
          <div className="max-w-3xl text-white">
            <div className="text-primary font-medium mb-4">{project.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-white/80 mb-8">{project.overview.substring(0, 150)}...</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-10">{project.overview}</p>

              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground mb-10">{project.challenge}</p>

              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-muted-foreground mb-10">{project.solution}</p>

              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <ul className="space-y-3 mb-10">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start text-lg">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>

              {/* Project Gallery */}
              <h2 className="text-3xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {project.gallery.map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-xl mb-10">
                <blockquote className="text-xl italic mb-6">"{project.testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold">{project.testimonial.author}</div>
                    <div className="text-muted-foreground">{project.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-card p-6 rounded-xl border border-border sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-sm text-muted-foreground">Client</div>
                    <div className="font-medium">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Year</div>
                    <div className="font-medium">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium">{project.duration}</div>
                  </div>
                </div>

                <h4 className="font-bold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all w-full flex items-center justify-center"
                >
                  Start a Similar Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="text-muted-foreground mb-2">Next Project</div>
              <h3 className="text-2xl font-bold">{projects[project.nextProject].title}</h3>
            </div>
            <Link
              href={`/portfolio/${project.nextProject}`}
              className="mt-4 md:mt-0 inline-flex items-center font-medium text-primary hover:underline"
            >
              View Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Portfolio */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link href="/portfolio" className="inline-flex items-center font-medium hover:text-primary">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}


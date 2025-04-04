import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Smartphone, BarChart3 } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ProjectCard from "@/components/project-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We build{" "}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                digital products
              </span>{" "}
              that help businesses grow
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300">
              From concept to launch, we create custom web applications, mobile apps, and SaaS products that drive
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center"
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Clients Section */}
      <section className="py-12 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["company1", "company2", "company3", "company4", "company5"].map((company) => (
              <div key={company} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image
                  src={`/placeholder.svg?height=40&width=120`}
                  alt={`${company} logo`}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              We offer end-to-end digital solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card hover:shadow-lg transition-all p-8 rounded-xl border border-border">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-6">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-muted-foreground mb-6">
                Custom websites and web applications built with modern technologies and best practices.
              </p>
              <Link
                href="/services/web-development"
                className="text-primary hover:underline font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card hover:shadow-lg transition-all p-8 rounded-xl border border-border">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-6">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">SaaS Development</h3>
              <p className="text-muted-foreground mb-6">
                End-to-end SaaS product development from ideation to launch and scaling.
              </p>
              <Link
                href="/services/saas-development"
                className="text-primary hover:underline font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card hover:shadow-lg transition-all p-8 rounded-xl border border-border">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-6">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile App Development</h3>
              <p className="text-muted-foreground mb-6">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
              <Link
                href="/services/mobile-development"
                className="text-primary hover:underline font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card hover:shadow-lg transition-all p-8 rounded-xl border border-border">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-6">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Project Management</h3>
              <p className="text-muted-foreground mb-6">
                Expert project management to ensure your digital projects are delivered on time and budget.
              </p>
              <Link
                href="/services/project-management"
                className="text-primary hover:underline font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Take a look at some of our recent work that showcases our expertise and capabilities.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="mt-6 md:mt-0 text-primary hover:text-primary/80 font-medium inline-flex items-center"
            >
              View all projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Fintech Dashboard"
              category="Web Application"
              image="/placeholder.svg?height=400&width=600"
              href="/portfolio/fintech-dashboard"
            />
            <ProjectCard
              title="E-commerce Mobile App"
              category="Mobile Development"
              image="/placeholder.svg?height=400&width=600"
              href="/portfolio/ecommerce-app"
            />
            <ProjectCard
              title="SaaS Marketing Platform"
              category="SaaS Development"
              image="/placeholder.svg?height=400&width=600"
              href="/portfolio/saas-marketing-platform"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              We follow a proven methodology to ensure your project is delivered successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business goals, target audience, and project requirements.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We create a detailed roadmap and technical strategy to achieve your business objectives.",
              },
              {
                step: "03",
                title: "Development",
                description: "Our team builds your solution using agile methodologies and modern technologies.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We deploy your solution and provide ongoing support and maintenance.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with this agency was a game-changer for our business. They delivered our SaaS platform on time and on budget."
              author="Sarah Johnson"
              role="CEO, TechStart"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="The team's expertise in mobile app development helped us create an app that our users love. Highly recommended!"
              author="Michael Chen"
              role="Product Manager, AppWorks"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Their project management skills are exceptional. They kept our complex web development project on track from start to finish."
              author="Emily Rodriguez"
              role="Marketing Director, GrowthCo"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl text-slate-300 mb-8">
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
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center"
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


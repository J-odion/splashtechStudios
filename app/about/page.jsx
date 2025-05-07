import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Award, Clock, Zap } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Alex has over 15 years of experience in software development and has led digital transformation projects for Fortune 500 companies.",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sarah is an expert in cloud architecture and has built scalable systems for startups and enterprise clients alike.",
    },
    {
      name: "Michael Rodriguez",
      role: "Design Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Michael brings 10+ years of UX/UI design experience, creating intuitive and beautiful digital experiences.",
    },
    {
      name: "Emily Patel",
      role: "Project Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Emily is a certified PMP with a track record of delivering complex projects on time and within budget.",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "David is a full-stack developer with expertise in React, Node.js, and cloud infrastructure.",
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Specialist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Lisa helps our clients grow their digital presence through data-driven marketing strategies.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SplashTechStudio</h1>
            <p className="text-xl text-slate-300">
              We're a team of passionate digital experts dedicated to helping businesses succeed in the digital
              landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2023, SplashTechStudio began with a simple mission: to help businesses leverage technology to
                achieve their goals. What started as a small team of three passionate developers has grown into a
                full-service digital agency with expertise across web development, mobile apps, SaaS products, and
                project management.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we've had the privilege of working with startups, mid-sized businesses, and enterprise
                clients across various industries. Our approach has always been to understand our clients' unique
                challenges and create custom solutions that drive real results.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to be a trusted digital partner for businesses around the world, helping them
                navigate the ever-changing digital landscape and stay ahead of the competition.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
              <Image
                src="/6.jpg"
                alt="Our team"
                width={800}
                height={600}
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              These core principles guide everything we do and help us deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Client Partnership",
                description: "We view our clients as partners and are committed to their long-term success.",
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code quality to client communication.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Innovation",
                description: "We embrace new technologies and approaches to solve complex problems.",
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Reliability",
                description: "We deliver on our promises and are accountable for our work and commitments.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Our talented team of digital experts is passionate about creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/7.jpg"
                alt="Why choose us"
                width={800}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose SplashTechStudio?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise, creative thinking, and business acumen to deliver digital solutions that
                drive real results.
              </p>
              <ul className="space-y-4">
                {[
                  "Experienced team of digital experts",
                  "Custom solutions tailored to your business goals",
                  "Transparent communication throughout the project",
                  "Agile methodology for faster delivery and flexibility",
                  "Ongoing support and maintenance",
                  "Focus on ROI and measurable results",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your business goals with our digital expertise.
            </p>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all inline-flex items-center"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


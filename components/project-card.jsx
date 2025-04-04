import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectCard({ title, category, image, href }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-muted-foreground mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <Link href={href} className="inline-flex items-center text-primary font-medium hover:underline">
          View Project <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}


import Image from "next/image"
import { Quote } from "lucide-react"

export default function TestimonialCard({ quote, author, role, image }) {
  return (
    <div className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all">
      <Quote className="h-8 w-8 text-primary/20 mb-4" />
      <p className="mb-6 text-muted-foreground">{quote}</p>
      <div className="flex items-center">
        <div className="mr-4 rounded-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={author}
            width={50}
            height={50}
            className="h-12 w-12 object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}


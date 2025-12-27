"use client"

import { Calendar, User } from "lucide-react"

export function BlogSection() {
  const posts = [
    {
      title: "Accelerate Availability With Latest Business Trends: How AI Can Be Leverage",
      date: "March 15, 2025",
      author: "Admin",
      image: "/modern-business-conference.jpg?height=300&width=500&query=business conference event photo",
      category: "Technology",
    },
    {
      title: "Accelerate Availability With Latest Business Trends: How AI Can Be Leverage",
      date: "March 12, 2025",
      author: "Admin",
      image: "/futuristic-tech-event.jpg?height=300&width=500&query=futuristic technology event photo",
      category: "Innovation",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Latest <span className="text-cyan-500">News & Blog</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <div
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700 bg-white rounded-lg border border-gray-200"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  const posts = [
    {
      title: "Accelerate Availability With Latest Business Trends",
      excerpt:
        "Discover how AI is transforming business operations and creating new opportunities for growth and innovation in the digital age.",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "/modern-business-technology-meeting.jpg",
      category: "Technology",
      author: "Sarah Johnson",
    },
    {
      title: "Revolutionary AI Applications That Will Change Everything",
      excerpt:
        "Explore groundbreaking AI applications reshaping industries worldwide, from healthcare to finance and beyond.",
      date: "March 12, 2025",
      readTime: "7 min read",
      image: "/futuristic-ai-visualization.png",
      category: "Innovation",
      author: "Michael Chen",
    },
    {
      title: "The Future of Machine Learning in Healthcare",
      excerpt:
        "How ML algorithms are revolutionizing medical diagnostics and personalized treatment plans for better patient outcomes.",
      date: "March 10, 2025",
      readTime: "6 min read",
      image: "/medical-ai.png",
      category: "Healthcare",
      author: "Emily Rodriguez",
    },
    {
      title: "Building Scalable AI Systems: Best Practices",
      excerpt:
        "Learn the essential strategies for designing and deploying AI systems that can handle enterprise-level demands.",
      date: "March 8, 2025",
      readTime: "8 min read",
      image: "/cloud-infrastructure-technology.jpg",
      category: "Engineering",
      author: "James Anderson",
    },
    {
      title: "Ethics in AI: Navigating the Challenges",
      excerpt:
        "Understanding the ethical implications of AI development and how to build responsible technology solutions.",
      date: "March 5, 2025",
      readTime: "10 min read",
      image: "/ai-ethics-technology-concept.jpg",
      category: "Ethics",
      author: "Lisa Park",
    },
    {
      title: "Natural Language Processing: State of the Art",
      excerpt:
        "Dive deep into the latest advances in NLP and how language models are changing human-computer interaction.",
      date: "March 3, 2025",
      readTime: "9 min read",
      image: "/nlp-language-processing-visualization.jpg",
      category: "Research",
      author: "David Kumar",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        <section className="gradient-hero py-20 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">News & Insights</h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8">
                Stay updated with the latest trends, insights, and stories from the world of AI and technology
              </p>

              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-12 h-14 bg-white text-foreground text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-95 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 pb-4 border-b">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">By {post.author}</span>
                      <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

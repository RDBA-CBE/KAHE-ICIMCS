import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function SchedulePage() {
  const days = [
    {
      date: "June 25, 2025",
      sessions: [
        {
          time: "9:00 AM - 10:30 AM",
          title: "Opening Keynote: The Future of AI",
          speaker: "Dr. Sarah Johnson",
          location: "Main Hall A",
          attendees: "500+",
          description: "Join us for an inspiring keynote on the transformative power of artificial intelligence.",
        },
        {
          time: "11:00 AM - 12:30 PM",
          title: "Machine Learning Fundamentals Workshop",
          speaker: "Prof. Michael Chen",
          location: "Workshop Room 1",
          attendees: "150",
          description: "Hands-on workshop covering essential ML concepts and practical applications.",
        },
        {
          time: "2:00 PM - 3:30 PM",
          title: "Panel: Ethics in AI Development",
          speaker: "Multiple Speakers",
          location: "Conference Hall B",
          attendees: "300",
          description: "Industry leaders discuss the ethical implications of AI technology.",
        },
      ],
    },
    {
      date: "June 26, 2025",
      sessions: [
        {
          time: "9:00 AM - 10:30 AM",
          title: "Deep Learning and Neural Networks",
          speaker: "Dr. Emily Rodriguez",
          location: "Tech Theater",
          attendees: "350",
          description: "Advanced techniques in deep learning and modern neural network architectures.",
        },
        {
          time: "11:00 AM - 12:30 PM",
          title: "Natural Language Processing Masterclass",
          speaker: "Prof. David Kumar",
          location: "Innovation Lab",
          attendees: "200",
          description: "Explore the latest advances in NLP and language models.",
        },
        {
          time: "2:00 PM - 5:00 PM",
          title: "AI in Healthcare: Case Studies",
          speaker: "Dr. Lisa Park",
          location: "Main Hall A",
          attendees: "450",
          description: "Real-world applications of AI in medical diagnostics and treatment.",
        },
      ],
    },
    {
      date: "June 27, 2025",
      sessions: [
        {
          time: "9:00 AM - 11:00 AM",
          title: "Robotics and Automation Summit",
          speaker: "James Anderson",
          location: "Robotics Hall",
          attendees: "280",
          description: "Latest developments in robotics, automation, and autonomous systems.",
        },
        {
          time: "11:30 AM - 1:00 PM",
          title: "AI for Business Leaders",
          speaker: "Multiple Speakers",
          location: "Executive Lounge",
          attendees: "120",
          description: "Strategic insights on implementing AI in enterprise environments.",
        },
        {
          time: "2:00 PM - 4:00 PM",
          title: "Closing Ceremony & Awards",
          speaker: "Conference Organizers",
          location: "Main Hall A",
          attendees: "600+",
          description: "Celebrate innovation and recognize outstanding contributions to AI.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        <section className="gradient-hero py-20 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Event Schedule</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Three days packed with inspiring talks, workshops, and networking opportunities
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {days.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${dayIndex * 200}ms` }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <Calendar className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl font-bold">{day.date}</h2>
                  </div>

                  <div className="space-y-6">
                    {day.sessions.map((session, sessionIndex) => (
                      <Card key={sessionIndex} className="p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-48 flex-shrink-0">
                            <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                              <Clock className="h-5 w-5" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <MapPin className="h-4 w-4" />
                              <span>{session.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                              <Users className="h-4 w-4" />
                              <span>{session.attendees} attending</span>
                            </div>
                          </div>

                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">{session.title}</h3>
                            <p className="text-primary font-medium mb-3">{session.speaker}</p>
                            <p className="text-muted-foreground leading-relaxed mb-4">{session.description}</p>
                            <Button>Add to Calendar</Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

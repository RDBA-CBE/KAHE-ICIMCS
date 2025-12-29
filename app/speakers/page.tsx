import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Globe } from "lucide-react"

export default function SpeakersPage() {
  // Get speaker image path
  const getSpeakerImage = (index: number) => {
    const imageNumber = index + 1
    if (imageNumber === 15) {
      return `/speakers/${imageNumber}.png`
    }
    return `/speakers/${imageNumber}.jpg`
  }

  const speakers = [
    {
      name: "Prof. Muthupandian Ashok kumar",
      role: "Professor",
      company: "University of Melbourne, Australia",
      bio: "Renowned researcher in material chemistry with extensive contributions to sustainable materials and nanotechnology.",
      expertise: ["Material Chemistry", "Nanotechnology", "Sustainability"],
    },
    {
      name: "Prof. Nikhil Koratkar",
      role: "Professor",
      company: "Rensselaer Polytechnic Institute, USA",
      bio: "Leading expert in advanced materials and nanotechnology with significant contributions to energy storage and sustainable technologies.",
      expertise: ["Advanced Materials", "Nanotechnology", "Energy Storage"],
    },
    {
      name: "Prof. Ramesh Kasi",
      role: "Professor",
      company: "University of Malaya, Malaysia",
      bio: "Distinguished researcher in material chemistry focusing on sustainable materials and green chemistry applications.",
      expertise: ["Material Chemistry", "Green Chemistry", "Sustainability"],
    },
    {
      name: "Prof. Shanmugavel Chinnathambi",
      role: "Professor",
      company: "Kyoto University, Japan",
      bio: "Expert in material science and chemistry with research interests in advanced materials and sustainable technologies.",
      expertise: ["Material Science", "Advanced Materials", "Research"],
    },
    {
      name: "Prof. Ramaswamy Murugavel",
      role: "Professor",
      company: "IIT, Bombay",
      bio: "Leading researcher in material chemistry with expertise in coordination chemistry and material design.",
      expertise: ["Coordination Chemistry", "Material Design", "Research"],
    },
    {
      name: "Prof. Venkata Krishnan",
      role: "Professor",
      company: "IIT, Mandi",
      bio: "Expert in material chemistry and catalysis with focus on sustainable energy and environmental applications.",
      expertise: ["Catalysis", "Sustainable Energy", "Environmental"],
    },
    {
      name: "Prof. Kothandaraman Ramanujam",
      role: "Professor",
      company: "IIT, Madras",
      bio: "Distinguished professor specializing in electrochemical materials and energy storage systems.",
      expertise: ["Electrochemical Materials", "Energy Storage", "Research"],
    },
    {
      name: "Prof. Vijayamohanan Pillai",
      role: "Professor",
      company: "IISER, Tirupati",
      bio: "Renowned researcher in material chemistry with expertise in nanomaterials and sustainable technologies.",
      expertise: ["Nanomaterials", "Material Chemistry", "Sustainability"],
    },
    {
      name: "Prof. BIJI P",
      role: "Professor",
      company: "PSGIAS, Coimbatore",
      bio: "Expert in material chemistry and research with contributions to sustainable material development.",
      expertise: ["Material Chemistry", "Research", "Sustainability"],
    },
    {
      name: "Prof. Rajadurai Chandrasekar",
      role: "Professor",
      company: "University of Hyderabad, Telangana",
      bio: "Leading researcher in organic materials and fluorescent chemistry with applications in sensing and display technologies.",
      expertise: ["Organic Materials", "Fluorescent Chemistry", "Sensors"],
    },
    {
      name: "Dr. Raman Vedarajan",
      role: "Scientist",
      company: "ARCI, Hyderabad",
      bio: "Distinguished scientist in material chemistry with expertise in energy materials and electrochemical systems.",
      expertise: ["Energy Materials", "Electrochemistry", "Research"],
    },
    {
      name: "Prof. S.Shanmugaraju",
      role: "Professor",
      company: "IIT, Palakkad",
      bio: "Expert in material chemistry and supramolecular chemistry with focus on sustainable material design.",
      expertise: ["Supramolecular Chemistry", "Material Design", "Sustainability"],
    },
    {
      name: "Prof. Narendra Kurra",
      role: "Professor",
      company: "IIT, Hyderabad",
      bio: "Leading researcher in material chemistry with expertise in electrochemical systems and energy storage.",
      expertise: ["Electrochemistry", "Energy Storage", "Material Chemistry"],
    },
    {
      name: "Prof. Sayan Bhattacharyya",
      role: "Professor",
      company: "IISER, Kolkata",
      bio: "Distinguished professor in material chemistry with research interests in nanomaterials and sustainable technologies.",
      expertise: ["Nanomaterials", "Material Chemistry", "Sustainability"],
    },
    {
      name: "Prof. Mathiyarasu Jayaraman",
      role: "Professor",
      company: "CECRI, Karaikudi",
      bio: "Expert in electrochemical materials and energy systems with significant contributions to sustainable energy technologies.",
      expertise: ["Electrochemical Materials", "Energy Systems", "Sustainability"],
    },
    {
      name: "Prof. A. Muthukrishnan",
      role: "Professor",
      company: "IISER, Thiruvananthapuram",
      bio: "Renowned researcher in material chemistry with expertise in advanced materials and sustainable chemistry.",
      expertise: ["Advanced Materials", "Material Chemistry", "Sustainability"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0a1f3d] via-[#1e3a8a] via-[#7c3aed] to-[#06b6d4] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              Meet Our Speakers
            </h1>
          </div>
        </div>
      </section>

        <section className="py-20 bg-gradient-to-b from-white to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakers.map((speaker, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-95 duration-700 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-54 h-54 rounded-full bg-gradient-to-br from-primary via-purple-500 to-cyan-500 p-1">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                          <img
                            src={getSpeakerImage(index)}
                            alt={speaker.name}
                            className="w-full h-full object-cover object-top"
                            style={{ objectPosition: "center top" }}
                            // onError={(e) => {
                            //   const target = e.target as HTMLImageElement
                            //   target.src = `/speakers/${index + 1}.jpg`
                            // }}
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-center">{speaker.name}</h3>
                    <p className="text-muted-foreground text-sm text-center mb-4">{speaker.company}</p>

                    

                    
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      
    </div>
  )
}

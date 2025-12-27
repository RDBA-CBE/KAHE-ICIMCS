import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function TicketsPage() {
  const packages = [
    {
      name: "Gold Package",
      price: "$299",
      features: ["Conference entry pass", "Free lunch & coffee", "Certificate", "Easy to access"],
      recommended: false,
    },
    {
      name: "Diamond Package",
      price: "$499",
      features: ["Conference entry pass", "Free lunch & coffee", "Certificate", "Easy to access", "Keynote access"],
      recommended: true,
    },
    {
      name: "Premium Package",
      price: "$799",
      features: [
        "Conference entry pass",
        "Free lunch & coffee",
        "Certificate",
        "Easy to access",
        "Keynote access",
        "Meet & greet",
      ],
      recommended: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        <section className="gradient-hero py-20 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Buy A Ticket Be The First One</h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8">
                Choose the perfect package for your conference experience. Early bird discount available!
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-semibold">
                🎉 Save up to 40% with Early Bird Pricing
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Buy A Ticket Be The <span className="text-cyan-500">First One</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative p-8 hover:shadow-2xl transition-all duration-300 animate-in fade-in zoom-in-95 duration-700 ${
                    pkg.recommended ? "border-2 border-cyan-500 scale-105 shadow-xl" : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-6">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold">{pkg.price}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-cyan-500/10 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-cyan-500" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      pkg.recommended
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                    size="lg"
                  >
                    Purchase Ticket
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

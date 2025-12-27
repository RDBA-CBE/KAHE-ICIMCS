import { Header } from "@/components/header"
import { ChevronRight } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AdvisoryPage() {
  const internationalAdvisory = [
    { name: "Prof. Sang Ouk Kim", affiliation: "Korea Advanced Institute of Science & Technology, South Korea" },
    { name: "Prof. Inkyu Park", affiliation: "Korea Advanced Institute of Science & Technology, South Korea" },
    { name: "Prof. Yun Suk Huh", affiliation: "Inha University, Incheon, South Korea" },
    { name: "Prof. Mohamed Henini", affiliation: "University of Nottingham, UK" },
    { name: "Prof. Abdulhadi Baykal", affiliation: "Istanbul Aydın University, Turkey" },
    { name: "Prof. John V Kennedy", affiliation: "GNS Science, New Zealand" },
    { name: "Prof. Yassine Slimani", affiliation: "Imam Abdulrahman Bin Faisal University, Saudi Arabia" },
    { name: "Prof. Andreas Rosenkranz", affiliation: "Universidad de Chile, Chile" },
    { name: "Prof. Shiao-Wei Kuo", affiliation: "National Sun Yat Sen University, Taiwan" },
    { name: "Prof. Nurit Ashkenashy", affiliation: "Ben Gurion University of the Negev, Israel" },
    { name: "Prof. Xiao Fei", affiliation: "Huazhong University of Science and Technology, China" },
    { name: "Prof. Mohamed Gamal Mohamed", affiliation: "Assiut University, Egypt" },
    { name: "Prof. Mohammad Khalid", affiliation: "University of Glassgow, UK" },
    { name: "Prof. Dr. Jorge Yanez", affiliation: "University of Concepcion, Chile" },
    { name: "Prof. Dr. R. V. Mangalaraja", affiliation: "Universidad Arturo Prat, Chile" },
    { name: "Prof. Dr. Sook-Keng Chang", affiliation: "INTI International University, Malaysia" },
    { name: "Prof. Dr. Sakkarapalayam Mahalingam", affiliation: "Purdue University, USA" },
    { name: "Prof. Dr. Thanigaimalai Pillaiyar", affiliation: "University of Tübingen, Germany" },
    { name: "Prof. Dr. Shu Pao Wu", affiliation: "National Yang Ming Chiao Tung University, Taiwan" },
    { name: "Prof. Dr. Hon Man Lee", affiliation: "National Changhua University of Education, Taiwan" },
    { name: "Dr. Balamurugan Jayaraman", affiliation: "Korea Advanced Institute of Science & Technology, South Korea" },
    { name: "Dr. Ramar Rajamanikandan", affiliation: "Gachon University, South Korea" },
    { name: "Dr. Madhappan Santhamoorthy", affiliation: "Yeungnam University, South Korea" },
    { name: "Dr. Kugalur Shanmugam Ranjith", affiliation: "Dongguk University, South Korea" },
    { name: "Dr. Ezhumalai Yamuna", affiliation: "National Central University, Taiwan" },
  ]

  const nationalAdvisory = [
    { name: "Dr. Ramesh Laxminarayan Gardas", affiliation: "IIT Madras" },
    { name: "Dr. P. Anbarasan", affiliation: "IIT Madras" },
    { name: "Dr. Mani Karthik", affiliation: "DRDO, Hyderabad" },
    { name: "Dr. Pannuru Venkatesu", affiliation: "University of Delhi, Delhi" },
    { name: "Dr. Kalyanrao Garadkar", affiliation: "Shivaji University, Kolhapur, Maharashtra" },
    { name: "Dr. M. Annadhasan", affiliation: "IIT Hyderabad" },
    { name: "Dr. Anantharaj Sengeni", affiliation: "IIT Kanpur" },
    { name: "Dr. Muniappan Sankar", affiliation: "IIT Roorkee" },
    { name: "Dr. Sankarasekaran Shanmugaraju", affiliation: "IIT Palakkad" },
    { name: "Dr. Banu Marimuthu", affiliation: "National Chemical Laboratory, Pune" },
    { name: "Dr. Subhasish Roy", affiliation: "BITS-Pilani, Goa" },
    { name: "Dr. Jayantha Nandha", affiliation: "University of North Bengal" },
    { name: "Dr. R Geetha Balakrishna", affiliation: "Jain university" },
    { name: "Dr. Nimita Jebaranjitham", affiliation: "Women's Christian College, Chennai" },
    { name: "Dr. K. Shanmuga Bharathi", affiliation: "Periyar University, Salem" },
    { name: "Dr. M. Ilanchelian", affiliation: "Bharathiar University, Coimbatore" },
    { name: "Dr. B. Murugesapandian", affiliation: "Bharathiar University, Coimbatore" },
    { name: "Dr. T. Selvaraju", affiliation: "Bharathiar University, Coimbatore" },
    { name: "Dr. Raju Nandhakumar", affiliation: "Karunya Institute of Technology and Sciences, Coimbatore" },
    { name: "Dr. V. Madhu", affiliation: "Karunya Institute of Technology and Sciences, Coimbatore" },
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
              Advisory Committee
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Distinguished experts and researchers guiding ICIMCS-2026
            </p>
          </div>
        </div>
      </section>

      {/* International Advisory Committee */}
      <section className="py-[60px] bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl mb-16">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                International Advisory Committee
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full mb-4"></div>
              <p className="text-gray-600 text-lg">
                {internationalAdvisory.length} distinguished members from leading institutions worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalAdvisory.map((member, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                >
                  <div className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 text-lg">{member.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{member.affiliation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* National Advisory Committee */}
          <div className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                National Advisory Committee
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full mb-4"></div>
              <p className="text-gray-600 text-lg">
                {nationalAdvisory.length} esteemed members from premier Indian institutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nationalAdvisory.map((member, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                >
                  <div className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 text-lg">{member.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{member.affiliation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

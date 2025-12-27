import { Header } from "@/components/header"
import { FlaskConical, Users, Award, BookOpen, Microscope, ChevronRight, Beaker, Activity, Radio, BarChart3 } from "lucide-react"
import { ActivitiesSection } from "@/components/activities-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
              About ICIMCS-2026
            </h1>
          </div>
        </div>
      </section>

      {/* About the Institution */}
      <section className="py-[60px] bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl mb-16">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                About the Institution
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong className="text-gray-900">Karpagam Academy of Higher Education (KAHE)</strong>, a premier Deemed-to-be University, is committed to holistic learning and research excellence. The institution encompasses five faculties: <strong>Arts, Science, Commerce & Management; Engineering; Architecture, Design & Planning; Pharmacy; and Performing Arts</strong>.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                It also hosts <strong>13 specialized research centers</strong> that drive innovation, interdisciplinary collaboration, and pioneering research. KAHE has consistently been recognized for its academic and research achievements, securing a position in the <strong>101-150 rank band in the NIRF University Rankings</strong>.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                On the global front, it is ranked in the <strong>Times Higher Education 2025 Interdisciplinary Subject Rankings (401-500)</strong> and the <strong>Impact Rankings (401-600)</strong>. With a strong research profile of over <strong>7,500 publications</strong>, <strong>70,000 citations</strong>, an <strong>institutional h-index of 96</strong>, and <strong>147 granted patents</strong>, KAHE continues to expand knowledge, strengthen international collaborations, and affirm its position as a leading institution in higher education.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2">
                  7,500+
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                  70K+
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Citations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-pink-600 to-cyan-600 bg-clip-text mb-2">
                  96
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">H-Index</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text mb-2">
                  147
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Patents</div>
              </div>
            </div>
          </div>

          {/* About the Department */}
          <div className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl mb-16">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                About the Department
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Department is running <strong>Postgraduate (PG)</strong> and <strong>Ph.D. programs</strong>. The Department is equipped with sophisticated instruments like <strong>HPLC, UV-Visible Spectrometer, FT-IR Spectrometer, Gas Chromatographic analyzer</strong>, etc.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The main objective of the Department is to impart knowledge among the students in basic areas of Chemistry. Apart from the core courses, knowledge about the latest trends in Chemistry, including <strong>Green Chemistry, Medicinal Chemistry and Nanochemistry</strong>, is also included in the regular curriculum.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Department of Chemistry established two <strong>Centres of Excellences</strong>, namely, the <strong>Advanced Battery Research Centre (ABRC)</strong> and the <strong>Centre for Material Chemistry (CMC)</strong>. ABRC is equipped with computer-controlled battery testers and offers test facilities as per International Standards such as <strong>IIS, EN, SAE and ICE</strong>.
              </p>
            </div>

            {/* Instruments Grid */}
            <div className="grid md:grid-cols-2 gap-4 pt-12 border-t border-gray-200">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <Beaker className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900">HPLC</div>
                  <div className="text-sm text-gray-600">High Performance Liquid Chromatography</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <Activity className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900">UV-Visible Spectrometer</div>
                  <div className="text-sm text-gray-600">Spectroscopic Analysis</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <Radio className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900">FT-IR Spectrometer</div>
                  <div className="text-sm text-gray-600">Fourier Transform Infrared</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <BarChart3 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900">Gas Chromatographic Analyzer</div>
                  <div className="text-sm text-gray-600">GC Analysis Equipment</div>
                </div>
              </div>
            </div>
          </div>

          {/* About the Centre for Material Chemistry */}
          <div className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl mb-16">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                About the Centre for Material Chemistry (CMC)
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full"></div>
            </div>
            
            <div className="flex items-start gap-6 mb-6">
              
              <div className="prose prose-lg max-w-none flex-1">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <strong>Centre for Material Chemistry (CMC)</strong> is well-established and one of the premium centre at KAHE. CMC is equipped with sophisticated equipment's like <strong>Fluorescence Spectrophotometer, TG-DA Thermal analyzer, DSC Thermal analyzer, UVDRS Spectrophotometer, FT-IR Spectrometer (ATR), and Electrochemical workstation</strong>.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Currently, the faculties at the centre are working in <strong>Electrochemical sensors, Photocatalysis, Supercapacitors, Fluorescent Organic Materials and Pigments</strong>.
                </p>
              </div>
            </div>

            {/* Research Areas Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12 border-t border-gray-200">
              {[
                "Electrochemical sensors",
                "Photocatalysis",
                "Supercapacitors",
                "Fluorescent Organic Materials",
                "Pigments",
                "Material Chemistry"
              ].map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div className="font-bold text-gray-900">{area}</div>
                </div>
              ))}
            </div>
          </div>

          {/* About ICIMCS-2026 */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#0a1f3d] via-[#1e3a8a] to-[#7c3aed] shadow-2xl border-0 rounded-3xl text-white">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                About ICIMCS - 2026
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
            </div>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                The <strong className="text-yellow-400">International Conference on Innovations in Material Chemistry for Sustainability (ICIMCS-2026)</strong> aims to provide a common platform for knowledge sharing among <strong>Researchers, Academicians, Practitioners, and Industrialists</strong> in areas related to Chemistry and Sustainable Technologies.
              </p>
              
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                It provides a forum for discussing the most recent innovations, trends, experiences and concerns. It will also stimulate efforts to integrate the latest approaches to strengthen and help in shaping its future by fostering communication among participants. The conference will also include <strong className="text-yellow-400">keynote addresses by renowned Academicians, Scientists, and Industrialists from Leading organizations</strong>, oral and poster presentations.
              </p>
              
              <p className="text-white/90 text-lg leading-relaxed">
                The Conference will provide the authors and listeners with opportunities for <strong className="text-yellow-400">National and International collaboration and networking</strong> among Institutions from India and abroad for promoting research and developing Sustainable Technologies.
              </p>
            </div>

            {/* Conference Highlights */}
            <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-white/20">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <BookOpen className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <div className="font-bold text-white text-lg mb-2">Knowledge Sharing</div>
                <div className="text-white/80 text-sm">Platform for researchers and practitioners</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Award className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <div className="font-bold text-white text-lg mb-2">Renowned Speakers</div>
                <div className="text-white/80 text-sm">Keynote addresses by leading experts</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Users className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <div className="font-bold text-white text-lg mb-2">Networking</div>
                <div className="text-white/80 text-sm">National & international collaboration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <ActivitiesSection />
      <Footer />
    </div>
  )
}

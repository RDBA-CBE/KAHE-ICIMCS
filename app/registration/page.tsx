import { Header } from '@/components/header';
import {
  FlaskConical,
  Users,
  Award,
  BookOpen,
  Microscope,
  ChevronRight,
  Beaker,
  Activity,
  Radio,
  BarChart3,
} from 'lucide-react';
import { ActivitiesSection } from '@/components/activities-section';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-32 pb-20 bg-gradient-to-br from-[#0a1f3d] via-[#1e3a8a] via-[#7c3aed] to-[#06b6d4] overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl' />
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-7xl font-black text-white mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent'>
              Registration
            </h1>
          </div>
        </div>
      </section>

      {/* About the Institution */}
      <section className='py-[60px] bg-gradient-to-b from-white to-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl'>
            {/* Heading */}
            <div className='mb-6'>
              <h2 className='text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'>
                Payment & Registration Details
              </h2>
              <div className='w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full'></div>
            </div>

            <p className='text-gray-700 text-lg mb-8 leading-relaxed'>
              The registration form along with the payment proof should be
              submitted using the links below.
            </p>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Registration Card */}
              <a
                href='https://forms.gle/2EV4chV18NymnvJe6'
                target='_blank'
                rel='noopener noreferrer'
                className='md:col-span-2 group rounded-2xl border border-purple-200 bg-purple-50 p-6 transition hover:shadow-lg'
              >
                <h3 className='text-xl font-bold text-purple-700 mb-2'>
                  Registration Form
                </h3>

                <span className='mt-3 inline-block text-purple-600 font-semibold group-hover:underline'>
                  Open Registration Form →
                </span>
              </a>

              {/* Payment Card */}
              <a
                href='https://admissions.kifees.com/events/kahe/ICIMCS'
                target='_blank'
                rel='noopener noreferrer'
                className='md:col-span-2 group rounded-2xl border border-blue-200 bg-blue-50 p-6 transition hover:shadow-lg'
              >
                <h3 className='text-xl font-bold text-blue-700 mb-2'>
                  Payment Portal
                </h3>

                <span className='mt-3 inline-block text-blue-600 font-semibold group-hover:underline'>
                  Proceed to Payment →
                </span>
              </a>

              {/* Poster Template */}
              <a
                href='/document/ICIMCS_2026_Poster_90x118cm_Portrait.pptx'
                target='_blank'
                rel='noopener noreferrer'
                className='group rounded-2xl border border-cyan-200 bg-cyan-50 p-6 transition hover:shadow-lg'
              >
                <h3 className='text-lg font-bold text-cyan-700 mb-2'>
                  Poster Presentation Template
                </h3>
                <span className='mt-3 inline-block text-cyan-600 font-semibold group-hover:underline'>
                  Download PPT →
                </span>
              </a>

              {/* Oral Template */}
              <a
                href='/document/Abstract-template-ICIMCS-2026.docx'
                target='_blank'
                rel='noopener noreferrer'
                className='group rounded-2xl border border-emerald-200 bg-emerald-50 p-6 transition hover:shadow-lg'
              >
                <h3 className='text-lg font-bold text-emerald-700 mb-2'>
                  Oral Presentation Template
                </h3>

                <span className='mt-3 inline-block text-emerald-600 font-semibold group-hover:underline'>
                  Download DOCX →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}

      <Footer />
    </div>
  );
}

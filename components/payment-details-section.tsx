'use client';

import { QrCode } from 'lucide-react';

export function PaymentDetailsSection() {
  return (
    <section
      id='contact-section'
      className='py-[60px] bg-gradient-to-b from-gray-50 to-white'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='p-8 md:p-12 bg-white shadow-2xl border-0 rounded-3xl'>
            {/* Heading */}
            <div className='mb-6'>
              <h2 className='text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'>
                Payment & Registration Details
              </h2>
              <div className='w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full'></div>
            </div>

            <p className='text-gray-700 text-lg mb-6 leading-relaxed'>
              Registration form along with payment proof Should be submitted here
            </p>

            {/* Content */}
            <div className='p-6 bg-gray-50 rounded-xl border-2 border-gray-200 space-y-6'>
              

              {/* Buttons Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Payment - Full Width */}
                <a
                  href='https://admissions.kifees.com/events/kahe/ICIMCS'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='md:col-span-2 flex items-center justify-center rounded-xl border-2 border-blue-600 px-4 py-4 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all'
                >
                  Proceed to Payment
                </a>

                {/* Registration - Full Width */}
                <a
                  href='https://forms.gle/2EV4chV18NymnvJe6'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='md:col-span-2 flex items-center justify-center rounded-xl border-2 border-purple-600 px-4 py-4 font-semibold text-purple-600 hover:bg-purple-600 hover:text-white transition-all'
                >
                  Open Registration Form
                </a>

                {/* PPT - Half Width */}
                <a
                  href='/document/ICIMCS_ 2026_ Poster_90x118 cm_Portrait.pptx'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center rounded-xl border-2 border-cyan-600 px-4 py-4 font-semibold text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all'
                >
                  Poster presentation template
                </a>

                {/* DOCX - Half Width */}
                <a
                  href='/document/Abstract-template-ICIMCS-2026.docx'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center rounded-xl border-2 border-emerald-600 px-4 py-4 font-semibold text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all'
                >
                  Oral presentation template
                </a>
              </div>
            </div>
          </div>

          <div className='p-8 md:p-12 bg-gradient-to-br from-[#0a1f3d] via-[#1e3a8a] to-[#7c3aed] shadow-2xl border-0 rounded-3xl text-white'>
            <div className='mb-6'>
              <h2 className='text-3xl md:text-4xl font-black text-white'>
                For Details Contact
              </h2>
            </div>
            <div className='space-y-4'>
              <div className='p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20'>
                <p className='text-yellow-400 font-semibold mb-2'>
                  Contact Person
                </p>
                <p className='text-white text-lg font-bold'>
                  Dr. K. Saravana Mani
                </p>
              </div>
              <div className='p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20'>
                <p className='text-yellow-400 font-semibold mb-2'>Phone</p>
                <a
                  href='tel:+919488060834'
                  className='text-white text-lg font-bold hover:text-yellow-400 transition-colors'
                >
                  +91 94880 60834
                </a>
              </div>
              <div className='p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20'>
                <p className='text-yellow-400 font-semibold mb-2'>Email</p>
                <a
                  href='mailto:icimcs@kahedu.edu.in'
                  className='text-white text-lg font-bold hover:text-yellow-400 transition-colors break-all'
                >
                  icimcs@kahedu.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

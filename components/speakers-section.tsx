'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SpeakersSection() {
  // Get all speaker images (1-16)
  const getSpeakerImage = (index: number) => {
    const imageNumber = index + 1;
    // Check if it's a png or jpg based on the actual files
    if (imageNumber === 15) {
      return `/speakers/${imageNumber}.png`;
    }
    return `/speakers/${imageNumber}.jpg`;
  };

  const speakers = [
    {
      name: 'Prof. Muthupandian Ashok kumar',
      role: 'Professor',
      company: 'University of Melbourne, Australia',
    },
    {
      name: 'Prof. Nikhil Koratkar',
      role: 'Professor',
      company: 'Rensselaer Polytechnic Institute, USA',
    },
    {
      name: 'Prof. Ramesh Kasi',
      role: 'Professor',
      company: 'University of Malaya, Malaysia',
    },
    {
      name: 'Prof. Shanmugavel Chinnathambi',
      role: 'Professor',
      company: 'Kyoto University, Japan',
    },
    {
      name: 'Prof. Ramaswamy Murugavel',
      role: 'Professor',
      company: 'IIT, Bombay',
    },
    {
      name: 'Prof. Venkata Krishnan',
      role: 'Professor',
      company: 'IIT, Mandi',
    },
    {
      name: 'Prof. Kothandaraman Ramanujam',
      role: 'Professor',
      company: 'IIT, Madras',
    },
    {
      name: 'Prof. Vijayamohanan Pillai',
      role: 'Professor',
      company: 'IISER, Tirupati',
    },
    { name: 'Prof. BIJI P', role: 'Professor', company: 'PSGIAS, Coimbatore' },
    {
      name: 'Prof. Rajadurai Chandrasekar',
      role: 'Professor',
      company: 'University of Hyderabad, Telangana',
    },
    {
      name: 'Dr. Raman Vedarajan',
      role: 'Scientist',
      company: 'ARCI, Hyderabad',
    },
    { name: 'Prof. S.Sampath', role: 'Scientist', company: 'IISc, Bangalore.' },
    {
      name: 'Prof. S.Shanmugaraju',
      role: 'Professor',
      company: 'IIT, Palakkad',
    },
    {
      name: 'Prof. Narendra Kurra',
      role: 'Professor',
      company: 'IIT, Hyderabad',
    },
    {
      name: 'Prof. Sayan Bhattacharyya',
      role: 'Professor',
      company: 'IISER, Kolkata',
    },
    {
      name: 'Prof. Mathiyarasu Jayaraman',
      role: 'Professor',
      company: 'CECRI, Karaikudi',
    },
    {
      name: 'Prof. A. Muthukrishnan',
      role: 'Professor',
      company: 'IISER, Thiruvananthapuram',
    },
    // If you have a 17th speaker/image, you can add it here
    // { name: "Prof. New Speaker", role: "Professor", company: "Institute" },
  ];

  return (
    <section className='py-[60px] bg-gradient-to-b from-white via-green-50/20 to-cyan-50/30 relative'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            International and National{' '}
            <span className='text-primary'>Speaker</span>
          </h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-12'>
          {speakers.map((speaker, index) => {
            // Special banner-style layout for Prof. A. Muthukrishnan (match by name)
            if (speaker.name && speaker.name.includes('A. Muthukrishnan')) {
              return (
                <div
                  key={index}
                  className='col-span-2 md:col-span-4 w-full'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className='flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-white/80 to-white/60 dark:from-white/6 dark:to-white/4 rounded-lg overflow-hidden border-t-4 border-b-0 border-r-0 border-l-0 border-white/30 shadow-md'>
                    <div className='flex-1 px-6 py-8 md:py-6'>
                      <span className='inline-block bg-black text-white rounded-full px-4 py-2 text-sm font-bold mb-4'>
                        CALL FOR PAPERS
                      </span>
                      <p className='text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed'>
                        All the accepted papers will be peer reviewed and the
                        selected papers will be published in Scopus Indexed
                        Journals.
                      </p>
                    </div>

                    <div className='w-full md:w-56 lg:w-64 flex flex-col items-center text-center'>
                      {/* Image with gradient ring */}
                      <div className='relative'>
                        {/* Outer gradient ring */}
                        <div className='w-32 h-32 rounded-full bg-gradient-to-br from-primary via-purple-500 to-cyan-500 p-1'>
                          <div className='w-full h-full rounded-full overflow-hidden border-4 border-background'>
                            <img
                              src={getSpeakerImage(index)}
                              alt={speaker.name}
                              className='w-full h-full object-cover object-top'
                              style={{ objectPosition: 'center top' }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `/speakers/${index + 1}.jpg`;
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Text */}
                      <div className='mt-4'>
                        <h3 className='font-semibold text-base text-gray-900'>
                          {speaker.name}
                        </h3>
                        <p className='text-sm text-blue-600 font-medium'>
                          {speaker.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className='flex flex-col items-center animate-in fade-in zoom-in-95 duration-500 group'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className='relative mb-4'>
                  <div className='w-32 h-32 rounded-full bg-gradient-to-br from-primary via-purple-500 to-cyan-500 p-1'>
                    <div className='w-full h-full rounded-full overflow-hidden border-4 border-background'>
                      <img
                        src={getSpeakerImage(index)}
                        alt={speaker.name}
                        className='w-full h-full object-cover object-top'
                        style={{ objectPosition: 'center top' }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `/speakers/${index + 1}.jpg`;
                        }}
                      />
                    </div>
                  </div>
                </div>
                <h3 className='font-semibold text-center text-sm mb-1'>
                  {speaker.name}
                </h3>
                <p className='text-xs text-primary text-center font-medium'>
                  {speaker.company}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 w-full overflow-hidden'>
        <svg
          viewBox='0 0 1440 120'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-auto'
        >
          <path
            d='M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z'
            fill='url(#waveGradient)'
          />
          <defs>
            <linearGradient id='waveGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#EC4899' />
              <stop offset='50%' stopColor='#8B5CF6' />
              <stop offset='100%' stopColor='#06B6D4' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

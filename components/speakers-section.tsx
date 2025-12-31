'use client';

import Link from 'next/link';

export function SpeakersSection() {
  const getSpeakerImage = (index: number) => {
    const imageNumber = index + 1;
    return imageNumber === 15
      ? `/speakers/${imageNumber}.png`
      : `/speakers/${imageNumber}.jpg`;
  };

  const speakers = [
    {
      name: 'Prof. Muthupandian Ashok kumar',
      company: 'University of Melbourne, Australia',
    },
    {
      name: 'Prof. Nikhil Koratkar',
      company: 'Rensselaer Polytechnic Institute, USA',
    },
    { name: 'Prof. Ramesh Kasi', company: 'University of Malaya, Malaysia' },
    {
      name: 'Prof. Shanmugavel Chinnathambi',
      company: 'Kyoto University, Japan',
    },
    { name: 'Prof. Ramaswamy Murugavel', company: 'IIT, Bombay' },
    { name: 'Prof. Venkata Krishnan', company: 'IIT, Mandi' },
    { name: 'Prof. Kothandaraman Ramanujam', company: 'IIT, Madras' },
    { name: 'Prof. Vijayamohanan Pillai', company: 'IISER, Tirupati' },
    { name: 'Prof. BIJI P', company: 'PSGIAS, Coimbatore' },
    {
      name: 'Prof. Rajadurai Chandrasekar',
      company: 'University of Hyderabad, Telangana',
    },
    { name: 'Dr. Raman Vedarajan', company: 'ARCI, Hyderabad' },
    { name: 'Prof. S. Sampath', company: 'IISc, Bangalore' },
    { name: 'Prof. S. Shanmugaraju', company: 'IIT, Palakkad' },
    { name: 'Prof. Narendra Kurra', company: 'IIT, Hyderabad' },
    { name: 'Prof. Sayan Bhattacharyya', company: 'IISER, Kolkata' },
    { name: 'Prof. Mathiyarasu Jayaraman', company: 'CECRI, Karaikudi' },
  ];

  return (
    <section className='py-16 bg-white relative'>
      <div className='container mx-auto px-4'>
        {/* Title */}
        <div className='text-center mb-14'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            International and National{' '}
            <span className='text-primary'>Speaker</span>
          </h2>
        </div>

        {/* SPEAKERS GRID */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16'>
          {speakers.map((speaker, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <div className='w-32 h-32 rounded-full bg-gradient-to-br from-primary via-purple-500 to-cyan-500 p-1 mb-4'>
                <div className='w-full h-full rounded-full overflow-hidden border-4 border-white'>
                  <img
                    src={getSpeakerImage(index)}
                    alt={speaker.name}
                    className='w-full h-full object-cover object-top'
                  />
                </div>
              </div>

              <h3 className='text-sm font-semibold'>{speaker.name}</h3>
              <p className='text-xs text-blue-600 font-medium'>
                {speaker.company}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 items-center'>
          {/* SPECIAL SPEAKER – GOES UP ON MOBILE */}
          <div className='flex flex-col items-center text-center order-1 md:order-2'>
            <div className='w-32 h-32 rounded-full bg-gradient-to-br from-primary via-purple-500 to-cyan-500 p-1 mb-4'>
              <div className='w-full h-full rounded-full overflow-hidden border-4 border-white'>
                <img
                  src='/speakers/17.jpg'
                  alt='Prof. A. Muthukrishnan'
                  className='w-full h-full object-cover object-top'
                />
              </div>
            </div>

            <h3 className='text-sm font-semibold'>Prof. A. Muthukrishnan</h3>
            <p className='text-xs text-blue-600 font-medium'>
              IISER, Thiruvananthapuram
            </p>
          </div>

          {/* CALL FOR PAPERS – GOES DOWN ON MOBILE */}
          <div className='md:col-span-3 bg-white rounded-xl shadow-lg p-8 order-2 md:order-1'>
            <span className='inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-bold mb-4'>
              CALL FOR PAPERS
            </span>

            <p className='text-lg text-gray-800 leading-relaxed'>
              All the accepted papers will be peer reviewed and the selected
              papers will be published in{' '}
              <strong>Scopus Indexed Journals</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

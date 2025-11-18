'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Video, Heart, Award } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timelineItems: TimelineItem[] = [
  {
    year: '2013',
    title: 'The Beginning',
    description: 'Started our journey in wedding photography, capturing our first wedding with passion and dedication.',
    icon: <Camera className="w-6 h-6" />,
  },
  {
    year: '2016',
    title: 'Expanding to Videography',
    description: 'Added wedding videography services to tell complete love stories through moving images.',
    icon: <Video className="w-6 h-6" />,
  },
  {
    year: '2019',
    title: '200+ Weddings',
    description: 'Milestone of capturing over 200 weddings, each one unique and special in its own way.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Received multiple awards for excellence in wedding photography and videography.',
    icon: <Award className="w-6 h-6" />,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-primary-400 to-gold-500 transform md:-translate-x-1/2" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`relative flex items-center gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Icon */}
            <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg">
              {item.icon}
            </div>

            {/* Content Card */}
            <motion.div
              className={`flex-1 bg-white p-6 rounded-xl shadow-lg ${
                index % 2 === 0 ? 'md:mr-auto md:max-w-md' : 'md:ml-auto md:max-w-md md:text-right'
              }`}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`flex items-center gap-4 mb-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                <span className="text-2xl font-bold text-primary-500">{item.year}</span>
                <h3 className="text-xl font-serif font-bold text-navy-900">{item.title}</h3>
              </div>
              <p className={`text-navy-600 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


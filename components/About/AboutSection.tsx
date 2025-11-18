'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Timeline from './Timeline';
import StatsCounter from './StatsCounter';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto">
        {/* Split Screen Layout */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80"
                alt="Weddings by Yua - Photographer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>

            {/* Decorative Frame */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary-300 rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-navy-900">
              About Yua
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full" />

            <p className="text-xl text-navy-700 leading-relaxed">
              With over a decade of experience in wedding photography and videography,
              we specialize in capturing authentic moments that tell your unique love story.
            </p>

            <p className="text-lg text-navy-600 leading-relaxed">
              Our approach combines artistic vision with genuine emotion, creating timeless
              memories that you'll treasure forever. Every wedding is unique, and we strive
              to capture the essence of your special day with elegance and creativity.
            </p>

            <p className="text-lg text-navy-600 leading-relaxed">
              From intimate ceremonies to grand celebrations, we bring passion and
              professionalism to every shoot, ensuring your day is documented beautifully
              while allowing you to fully enjoy the moment.
            </p>

            {/* Stats */}
            <StatsCounter />

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
            >
              Let's Create Something Beautiful
            </motion.a>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <Timeline />
        </div>
      </div>
    </section>
  );
}


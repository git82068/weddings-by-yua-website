'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import ParticlesBackground from './ParticlesBackground';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Main Title with Letter Animation */}
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6">
            {['W', 'e', 'd', 'd', 'i', 'n', 'g', 's'].map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
            <br />
            <motion.span
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8, duration: 0.8 }}
              className="block mt-2"
            >
              <span className="gradient-text bg-gradient-to-r from-primary-300 via-gold-300 to-primary-300 bg-clip-text text-transparent">
                by Yua
              </span>
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-cream-100 font-light max-w-3xl mx-auto"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
          >
            Capturing Forever Moments, One Frame at a Time
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg sm:text-xl text-cream-200 max-w-2xl mx-auto font-light"
          >
            Elegant wedding photography and videography that tells your unique love story
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Book Your Wedding
              <motion.span
                className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-sm font-light">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};


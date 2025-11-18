'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from './TestimonialCarousel';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto h-full flex flex-col"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Quote Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-primary-300 mb-4"
      >
        <Quote className="w-12 h-12" />
      </motion.div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
          </motion.div>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-navy-700 mb-6 flex-grow text-lg leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-navy-100">
        <motion.div
          className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary-100"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </motion.div>
        <div>
          <h4 className="font-semibold text-navy-900 text-lg">
            {testimonial.name}
          </h4>
          <p className="text-navy-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}


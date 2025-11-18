'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah & John',
    role: 'Couple',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&q=80',
    rating: 5,
    text: 'Yua captured our special day perfectly! Every moment was beautifully documented, and we couldn\'t be happier with the results. The attention to detail and artistic vision is truly remarkable.',
  },
  {
    id: 2,
    name: 'Emma & Michael',
    role: 'Couple',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'Professional, creative, and incredibly talented. Our wedding photos and video exceeded all expectations. Yua made us feel so comfortable and natural throughout the entire process.',
  },
  {
    id: 3,
    name: 'Olivia & David',
    role: 'Couple',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: 'We are absolutely in love with our wedding film! Yua has an amazing ability to tell our story through visuals. The quality and creativity are outstanding. Highly recommend!',
  },
  {
    id: 4,
    name: 'Sophia & James',
    role: 'Couple',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    text: 'From the first consultation to the final delivery, Yua was professional, responsive, and passionate about our vision. The photos are absolutely stunning and will be treasured forever.',
  },
  {
    id: 5,
    name: 'Isabella & William',
    role: 'Couple',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    rating: 5,
    text: 'Yua\'s work is pure artistry. Every single photo tells a story, and the wedding video brought tears to our eyes. We couldn\'t have asked for a better photographer and videographer.',
  },
];

export default function TestimonialCarousel() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-navy-900 mb-4">
            What Our Couples Say
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            Real stories from real couples who trusted us with their special day
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="pb-16">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={false}
            allowTouchMove={false}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 100,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              waitForTransition: false,
              reverseDirection: false,
            }}
            speed={3000}
            loop={true}
            loopAdditionalSlides={2}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="!w-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}


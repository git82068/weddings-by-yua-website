'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Camera, Video, Film, Sparkles, MessageCircle, Calendar, Heart, Package } from 'lucide-react';

interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: '$2,500',
    description: 'Perfect for intimate weddings',
    icon: <Camera className="w-8 h-8" />,
    features: [
      '6 hours of coverage',
      '200+ edited photos',
      'Online gallery',
      'USB with high-res images',
      '1 photographer',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$4,500',
    description: 'Our most popular package',
    icon: <Video className="w-8 h-8" />,
    popular: true,
    features: [
      '8 hours of coverage',
      '400+ edited photos',
      '3-5 minute highlight video',
      'Online gallery',
      'USB with high-res images',
      '2 photographers',
      '1 videographer',
    ],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    price: '$7,500',
    description: 'Complete coverage and artistry',
    icon: <Film className="w-8 h-8" />,
    features: [
      'Full day coverage (10+ hours)',
      '600+ edited photos',
      'Full wedding film (15-20 min)',
      '3-5 minute highlight video',
      'Online gallery',
      'USB with high-res images',
      '2 photographers',
      '2 videographers',
      'Drone footage',
      'Same-day highlight edit',
    ],
  },
];

export default function PackageCards() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cream-50">
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
            Our Packages
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            Choose the perfect package for your special day
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative perspective-1000"
              onMouseEnter={() => setFlippedCard(pkg.id)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Card Container */}
              <motion.div
                className="relative w-full h-full min-h-[600px] preserve-3d"
                animate={{
                  rotateY: flippedCard === pkg.id ? 180 : 0,
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of Card */}
                <div
                  className={`absolute inset-0 backface-hidden rounded-2xl p-8 ${
                    pkg.popular
                      ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-2xl'
                      : 'bg-white text-navy-900 shadow-lg'
                  }`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className={`mb-6 ${
                        pkg.popular ? 'text-white' : 'text-primary-500'
                      }`}
                    >
                      {pkg.icon}
                    </div>

                    {/* Package Name */}
                    <h3 className="text-3xl font-serif font-bold mb-2">{pkg.name}</h3>
                    <p className="text-lg opacity-90 mb-6">{pkg.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <span className="text-5xl font-bold">{pkg.price}</span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 flex-grow">
                      {pkg.features.slice(0, 5).map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 5 && (
                        <li className="text-sm opacity-75">
                          + {pkg.features.length - 5} more features
                        </li>
                      )}
                    </ul>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-8 w-full py-4 rounded-full font-semibold transition-all ${
                        pkg.popular
                          ? 'bg-white text-primary-600 hover:bg-cream-50'
                          : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg'
                      }`}
                    >
                      Choose Package
                    </motion.button>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 backface-hidden rounded-2xl p-8 bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="flex flex-col h-full justify-center items-center text-center">
                    <Sparkles className="w-16 h-16 mb-6" />
                    <h3 className="text-3xl font-serif font-bold mb-4">
                      Complete Details
                    </h3>
                    <ul className="space-y-2 text-left mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-white text-gold-600 rounded-full font-semibold hover:bg-cream-50 transition-all"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <ProcessSteps />
      </div>
    </section>
  );
}

function ProcessSteps() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your vision, timeline, and preferences to create the perfect plan.',
      icon: MessageCircle,
      details: 'Initial meeting to understand your style, venue details, and special moments you want captured.',
      color: 'from-primary-400 to-primary-600',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We coordinate with your venue and vendors to ensure seamless coverage.',
      icon: Calendar,
      details: 'Detailed timeline creation, vendor coordination, and finalizing all photography details.',
      color: 'from-gold-400 to-gold-600',
    },
    {
      number: '03',
      title: 'Your Big Day',
      description: 'We capture every precious moment with artistry and attention to detail.',
      icon: Heart,
      details: 'Professional coverage from getting ready to the last dance, capturing all emotions and moments.',
      color: 'from-primary-500 to-gold-500',
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'Receive your beautifully edited photos and videos within 6-8 weeks.',
      icon: Package,
      details: 'Carefully curated and edited gallery delivered via online platform and USB drive.',
      color: 'from-gold-500 to-primary-500',
    },
  ];

  return (
    <div className="mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-serif font-bold text-center text-navy-900 mb-12"
      >
        Our Process
      </motion.h3>

      <div className="relative">
        {/* Animated Progress Line */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-navy-100 -z-10">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-400 via-gold-400 to-primary-400"
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isHovered = hoveredStep === index;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(isActive ? null : index)}
              >
                {/* Card Container */}
                <motion.div
                  className={`relative bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden ${
                    isActive ? 'ring-2 ring-primary-500' : ''
                  }`}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0`}
                    animate={{
                      opacity: isHovered || isActive ? 0.1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Step Number with Icon */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                        isActive || isHovered
                          ? `bg-gradient-to-br ${step.color}`
                          : 'bg-gradient-to-br from-primary-100 to-gold-100'
                      }`}
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon
                        className={`w-10 h-10 ${
                          isActive || isHovered ? 'text-white' : 'text-primary-600'
                        }`}
                      />
                      
                      {/* Step Number Badge */}
                      <motion.div
                        className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          isActive || isHovered
                            ? 'bg-white text-primary-600'
                            : 'bg-primary-600 text-white'
                        }`}
                        animate={{
                          scale: isHovered ? 1.2 : 1,
                        }}
                      >
                        {step.number}
                      </motion.div>
                    </motion.div>

                    {/* Step Title */}
                    <h4 className="text-xl font-serif font-bold text-navy-900 mb-2">
                      {step.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-navy-600 text-sm mb-3">{step.description}</p>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full overflow-hidden"
                        >
                          <div className="pt-3 border-t border-navy-100">
                            <p className="text-navy-700 text-sm leading-relaxed">
                              {step.details}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Hover Indicator */}
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-xs text-primary-600 font-medium"
                      >
                        Click for details
                      </motion.div>
                    )}
                  </div>

                  {/* Decorative Sparkles */}
                  {isHovered && (
                    <>
                      <motion.div
                        className="absolute top-4 right-4 w-2 h-2 bg-gold-400 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 w-2 h-2 bg-primary-400 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                      />
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


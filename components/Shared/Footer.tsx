'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Instagram, Facebook, Youtube, Mail, Send, ChevronUp } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log('Newsletter subscription:', email);
    setEmail('');
    setIsSubmitting(false);
    setIsExpanded(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-rose opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-serif font-bold">Weddings by Yua</span>
            </div>
            <p className="text-cream-200 mb-6 leading-relaxed">
              Capturing your special moments with elegance, artistry, and genuine emotion.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary-500 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-1"
          >
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href.replace('#', ''));
                    }}
                    className="text-cream-200 hover:text-primary-300 transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-1"
          >
            <h3 className="text-xl font-serif font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-cream-200">
              <li>Wedding Photography</li>
              <li>Wedding Videography</li>
              <li>Engagement Sessions</li>
              <li>Pre-Wedding Shoots</li>
              <li>Event Coverage</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-1"
          >
            <h3 className="text-xl font-serif font-bold mb-4">Newsletter</h3>
            <p className="text-cream-200 mb-4">
              Subscribe to receive updates and special offers
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <motion.div
                className="relative"
                initial={false}
                animate={{ scale: isExpanded ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsExpanded(true)}
                  onBlur={() => !email && setIsExpanded(false)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 pr-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-cream-300 focus:outline-none focus:border-primary-400 focus:bg-white/20 transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-cream-300 text-sm">
            © {new Date().getFullYear()} Weddings by Yua. All rights reserved.
          </p>
          
          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary-500 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}


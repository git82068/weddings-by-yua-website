'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from './GalleryGrid';

interface LightboxProps {
  image: GalleryImage;
  images: GalleryImage[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  image,
  images,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-navy-900/95 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors z-10"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Navigation Buttons */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors z-10"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors z-10"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Image Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-6xl max-h-[90vh] w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />

          {/* Image Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 to-transparent p-8 text-white"
          >
            <h3 className="text-3xl font-serif font-bold mb-2">{image.title}</h3>
            {image.venue && (
              <p className="text-cream-200 mb-1">📍 {image.venue}</p>
            )}
            {image.couple && (
              <p className="text-cream-300">{image.couple}</p>
            )}
          </motion.div>
        </motion.div>

        {/* Image Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-4 right-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm"
        >
          {images.findIndex((img) => img.id === image.id) + 1} / {images.length}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


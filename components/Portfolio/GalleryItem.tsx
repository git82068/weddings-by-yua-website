'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ZoomIn, Heart } from 'lucide-react';
import type { GalleryImage } from './GalleryGrid';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

export default function GalleryItem({ image, onClick }: GalleryItemProps) {
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
      onClick={onClick}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Blur Effect on Non-Hovered Items */}
        <motion.div
          className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0 }}
        />
      </div>

      {/* Content Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ y: 20 }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-2xl font-serif font-bold mb-2">{image.title}</h3>
          {image.venue && (
            <p className="text-cream-200 mb-1 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              {image.venue}
            </p>
          )}
          {image.couple && (
            <p className="text-cream-300 text-sm">{image.couple}</p>
          )}
        </motion.div>
      </motion.div>

      {/* Zoom Icon */}
      <motion.div
        className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.1, rotate: 90 }}
        transition={{ duration: 0.2 }}
      >
        <ZoomIn className="w-5 h-5 text-white" />
      </motion.div>

      {/* Hover Shadow */}
      <motion.div
        className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      />
    </motion.div>
  );
}


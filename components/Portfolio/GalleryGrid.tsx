'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryItem from './GalleryItem';
import FilterTags from './FilterTags';
import Lightbox from './Lightbox';

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  venue?: string;
  couple?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    alt: 'Wedding ceremony',
    category: 'ceremony',
    title: 'Garden Wedding',
    venue: 'Rose Garden Estate',
    couple: 'Sarah & John',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    alt: 'Wedding reception',
    category: 'reception',
    title: 'Elegant Reception',
    venue: 'Grand Ballroom',
    couple: 'Emma & Michael',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    alt: 'Wedding portraits',
    category: 'portraits',
    title: 'Romantic Portraits',
    venue: 'Sunset Beach',
    couple: 'Olivia & David',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    alt: 'Wedding details',
    category: 'details',
    title: 'Bridal Details',
    venue: 'Luxury Hotel',
    couple: 'Sophia & James',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
    alt: 'Wedding ceremony',
    category: 'ceremony',
    title: 'Traditional Ceremony',
    venue: 'Historic Church',
    couple: 'Isabella & William',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    alt: 'Wedding reception',
    category: 'reception',
    title: 'Celebration',
    venue: 'Waterfront Venue',
    couple: 'Ava & Daniel',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    alt: 'Wedding portraits',
    category: 'portraits',
    title: 'Love Story',
    venue: 'Mountain View',
    couple: 'Mia & Matthew',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    alt: 'Wedding details',
    category: 'details',
    title: 'Elegant Details',
    venue: 'Countryside Manor',
    couple: 'Charlotte & Alexander',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    alt: 'Wedding ceremony',
    category: 'ceremony',
    title: 'Intimate Wedding',
    venue: 'Garden Villa',
    couple: 'Amelia & Henry',
  },
];

const categories = ['all', 'ceremony', 'reception', 'portraits', 'details'];

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-navy-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            Moments captured with love, care, and artistic vision
          </p>
        </motion.div>

        {/* Filter Tags */}
        <FilterTags
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  layout: { duration: 0.3 },
                }}
              >
                <GalleryItem
                  image={image}
                  onClick={() => setSelectedImage(image)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          images={galleryImages}
          onClose={() => setSelectedImage(null)}
          onNext={() => {
            const currentIndex = galleryImages.findIndex(
              (img) => img.id === selectedImage.id
            );
            const nextIndex =
              currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
            setSelectedImage(galleryImages[nextIndex]);
          }}
          onPrev={() => {
            const currentIndex = galleryImages.findIndex(
              (img) => img.id === selectedImage.id
            );
            const prevIndex =
              currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
            setSelectedImage(galleryImages[prevIndex]);
          }}
        />
      )}
    </section>
  );
}


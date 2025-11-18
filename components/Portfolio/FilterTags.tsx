'use client';

import { motion } from 'framer-motion';

interface FilterTagsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function FilterTags({
  categories,
  selectedCategory,
  onSelectCategory,
}: FilterTagsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
              : 'bg-white text-navy-700 hover:bg-primary-50 border border-navy-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {selectedCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10 capitalize">{category}</span>
        </motion.button>
      ))}
    </div>
  );
}


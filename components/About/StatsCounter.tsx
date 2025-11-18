'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

const stats: Stat[] = [
  { label: 'Years of Experience', value: 11 },
  { label: 'Weddings Captured', value: 250, suffix: '+' },
  { label: 'Happy Couples', value: 500, suffix: '+' },
  { label: 'Awards Won', value: 15, suffix: '+' },
];

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
          className="text-center p-6 bg-gradient-to-br from-primary-50 to-cream-100 rounded-xl"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
            <Counter value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-sm md:text-base text-navy-600 font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}


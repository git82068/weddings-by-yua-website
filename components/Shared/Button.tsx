'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  magnetic = false,
  className = '',
  onAnimationStart,
  onAnimationEnd,
  onAnimationIteration,
  ...props
}: ButtonProps) {
  const baseClasses = 'relative font-semibold rounded-full transition-all duration-300 overflow-hidden group';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // If magnetic, wrap in a button with motion.div inside
  if (magnetic) {
    return (
      <motion.button
        {...props}
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.2}
          whileHover={{ scale: 1.05 }}
          className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        >
          {/* Ripple Effect Background */}
          <motion.div
            className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.5 }}
          />
          
          {/* Content */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            {children}
          </span>

          {/* Gradient Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          />
        </motion.div>
      </motion.button>
    );
  }

  // Regular button (non-magnetic)
  return (
    <motion.button
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ripple Effect Background */}
      <motion.div
        className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.5 }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Gradient Overlay on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />
    </motion.button>
  );
}
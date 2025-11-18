'use client';

import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FieldError } from 'react-hook-form';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string;
  error?: FieldError;
  component?: 'input' | 'textarea' | 'select';
  rows?: number;
}

const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FormFieldProps
>(({ label, error, component = 'input', rows, className, ...props }, ref) => {
  const baseClasses = 'w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 bg-cream-50';
  const errorClasses = error
    ? 'border-primary-500 focus:border-primary-500 focus:ring-primary-200'
    : 'border-navy-200 focus:border-primary-500 focus:ring-primary-200';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <label className="block text-sm font-medium text-navy-700 mb-2">
        {label}
      </label>

      {component === 'textarea' ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          rows={rows || 4}
          className={`${baseClasses} ${errorClasses} ${className || ''}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : component === 'select' ? (
        <select
          ref={ref as React.Ref<HTMLSelectElement>}
          className={`${baseClasses} ${errorClasses} ${className || ''}`}
          {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
        >
          {props.children}
        </select>
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={`${baseClasses} ${errorClasses} ${className || ''}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 text-sm text-primary-600"
          >
            {error.message}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

FormField.displayName = 'FormField';

export default FormField;


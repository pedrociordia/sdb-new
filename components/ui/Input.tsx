'use client';

import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, leftIcon, rightIcon, type = 'text', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <motion.label
            className="block text-sm font-medium text-gray-300 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {label}
          </motion.label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          <motion.input
            ref={ref}
            type={type}
            className={cn(
              'w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent backdrop-blur-xl',
              leftIcon && 'pl-12',
              rightIcon && 'pr-12',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            whileFocus={{ scale: 1.01 }}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}

          {/* Animated border effect */}
          {isFocused && (
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-ocean-500 pointer-events-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>
        {error && (
          <motion.p
            className="mt-2 text-sm text-red-400"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

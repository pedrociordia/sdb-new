'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { motion, type MotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

    const variants = {
      primary:
        'bg-gradient-to-r from-ocean-500 to-ocean-600 text-white hover:from-ocean-600 hover:to-ocean-700 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
      secondary:
        'bg-gradient-to-r from-sand-500 to-sand-600 text-gray-900 hover:from-sand-600 hover:to-sand-700 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
      ghost:
        'bg-transparent text-gray-300 hover:bg-white/10 hover:text-white border border-white/20',
      danger:
        'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
      glass:
        'glass text-white hover:bg-white/10 border border-white/20 backdrop-blur-xl hover:scale-[1.02] active:scale-[0.98]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {isLoading && (
          <motion.div
            className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        )}
        {!isLoading && leftIcon && <span>{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span>{rightIcon}</span>}

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{
            x: '100%',
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
        />
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { motion, type MotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof MotionProps> {
  variant?: 'glass' | 'neomorph' | 'solid';
  hover?: boolean;
  glow?: boolean;
  children?: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', hover = true, glow = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-3xl p-6 transition-all duration-300';

    const variants = {
      glass:
        'glass backdrop-blur-xl border border-white/10 shadow-glass',
      neomorph:
        'neomorph border border-white/5',
      solid:
        'bg-gray-800/50 border border-gray-700/50 shadow-xl',
    };

    const hoverStyles = hover
      ? 'hover:scale-[1.02] hover:shadow-glass-lg cursor-pointer'
      : '';

    const glowStyles = glow
      ? 'relative before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-ocean-500/20 before:to-purple-500/20 before:blur-xl before:-z-10'
      : '';

    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, glowStyles, className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={hover ? { y: -5 } : {}}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;

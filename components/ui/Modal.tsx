'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';
import { cn } from '@/utils/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              className={cn(
                'glass-strong w-full rounded-3xl shadow-2xl border border-white/20 overflow-hidden',
                sizes[size]
              )}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              {(title || showCloseButton) && (
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  {title && (
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                  )}
                  {showCloseButton && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onClose}
                      className="rounded-full p-2"
                      aria-label="Cerrar modal"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="px-6 py-6">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

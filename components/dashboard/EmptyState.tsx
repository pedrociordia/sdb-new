'use client';

import { motion } from 'framer-motion';
import { FileText, Plus } from 'lucide-react';
import Button from '@/components/ui/Button';

interface EmptyStateProps {
  onAddNew: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onAddNew }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon */}
      <motion.div
        className="w-32 h-32 rounded-full glass-strong flex items-center justify-center mb-6 relative"
        animate={{
          boxShadow: [
            '0 0 20px rgba(64, 169, 255, 0.2)',
            '0 0 40px rgba(64, 169, 255, 0.4)',
            '0 0 20px rgba(64, 169, 255, 0.2)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <FileText className="h-16 w-16 text-ocean-400" />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-ocean-500/20 to-purple-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Text */}
      <h3 className="text-2xl font-bold text-white mb-2">
        No hay contenido aún
      </h3>
      <p className="text-gray-400 text-center max-w-md mb-8">
        Comienza agregando tu primera sección de contenido para esta categoría.
        Podrás editarla y administrarla fácilmente.
      </p>

      {/* CTA */}
      <Button
        variant="primary"
        size="lg"
        onClick={onAddNew}
        leftIcon={<Plus className="h-5 w-5" />}
      >
        Agregar Primera Sección
      </Button>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-ocean-500/10 to-purple-500/10 blur-3xl"
            style={{
              width: 300,
              height: 300,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default EmptyState;

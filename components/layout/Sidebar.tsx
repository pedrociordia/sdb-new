'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Info,
  BedDouble,
  UtensilsCrossed,
  Dice5,
  Waves,
  CalendarDays,
  Heart,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';
import { Category } from '@/types';
import { cn } from '@/utils/cn';

interface SidebarProps {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
  onLogout: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Info,
  BedDouble,
  UtensilsCrossed,
  Dice5,
  Waves,
  CalendarDays,
  Heart,
};

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  onLogout,
  isOpen,
  onToggle,
}) => {
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 glass-strong p-3 rounded-2xl hover:scale-105 transition-transform"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={cn(
          'fixed lg:sticky top-0 left-0 h-screen glass-strong backdrop-blur-2xl border-r border-white/10 z-40 flex flex-col',
          'transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
        style={{ width: 280 }}
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ocean-500 to-ocean-700 flex items-center justify-center shadow-lg">
              <Waves className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">SDB</h2>
              <p className="text-xs text-gray-400">Management</p>
            </div>
          </motion.div>
        </div>

        {/* Categories */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Info;
            const isSelected = selectedCategoryId === category.id;

            return (
              <motion.button
                key={category.id}
                onClick={() => {
                  onSelectCategory(category.id);
                  if (window.innerWidth < 1024) onToggle();
                }}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden',
                  isSelected
                    ? 'bg-gradient-to-r from-ocean-500 to-ocean-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                )}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background shimmer effect */}
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                )}

                <Icon className="h-5 w-5 flex-shrink-0 relative z-10" />
                <span className="flex-1 text-left text-sm font-medium relative z-10">
                  {category.name}
                </span>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <ChevronRight className="h-4 w-4 relative z-10" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Logout button */}
        <div className="p-4 border-t border-white/10">
          <motion.button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 group"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="h-5 w-5" />
            <span className="text-sm font-medium">Cerrar Sesión</span>
          </motion.button>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;

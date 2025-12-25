'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, User, Settings, Sun, Moon } from 'lucide-react';
import Button from '@/components/ui/Button';

interface HeaderProps {
  title: string;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ title, userName = 'Admin' }) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <motion.header
      className="glass-strong backdrop-blur-xl border-b border-white/10 px-6 py-4 sticky top-0 z-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Title */}
        <div className="flex-1">
          <motion.h1
            className="text-2xl font-bold text-white mb-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Gestiona el contenido de tu categoría
          </motion.p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <motion.div
            className="hidden md:flex items-center gap-2 glass px-4 py-2 rounded-2xl border border-white/10 max-w-xs"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent border-none outline-none text-sm text-white placeholder:text-gray-500 w-full"
            />
          </motion.div>

          {/* Theme toggle */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            className="glass p-3 rounded-2xl hover:bg-white/10 transition-colors border border-white/10 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              animate={{ rotate: isDark ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <Moon className="h-5 w-5 text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-400" />
              )}
            </motion.div>
          </motion.button>

          {/* Notifications */}
          <motion.button
            className="glass p-3 rounded-2xl hover:bg-white/10 transition-colors border border-white/10 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Bell className="h-5 w-5 text-gray-300" />
            <motion.span
              className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>

          {/* Settings */}
          <motion.button
            className="glass p-3 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"
            whileHover={{ scale: 1.05, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Settings className="h-5 w-5 text-gray-300" />
          </motion.button>

          {/* User profile */}
          <motion.div
            className="hidden sm:flex items-center gap-3 glass px-4 py-2 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ocean-500 to-ocean-700 flex items-center justify-center shadow-lg">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-white">{userName}</span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

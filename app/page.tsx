'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Waves, Loader2 } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login after a short delay
    const timer = setTimeout(() => {
      router.push('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-ocean-500/20 to-purple-500/20 blur-3xl"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          className="inline-flex items-center justify-center w-32 h-32 rounded-full glass-strong mb-8 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        >
          <Waves className="h-16 w-16 text-ocean-400" />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-ocean-500/50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Santo Domingo Bay
        </motion.h1>

        <motion.p
          className="text-xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Management Portal
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2 text-ocean-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Loader2 className="h-5 w-5 animate-spin" />
          <span className="text-sm">Redirigiendo...</span>
        </motion.div>
      </div>
    </div>
  );
}

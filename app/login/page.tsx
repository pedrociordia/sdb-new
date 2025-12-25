'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Waves, Sparkles } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de autenticación (conectar con Supabase después)
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  const floatingElements = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-ocean-500/20 to-purple-500/20 blur-3xl"
            style={{
              width: Math.random() * 300 + 200,
              height: Math.random() * 300 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo and title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl glass-strong mb-6 relative"
            animate={{
              boxShadow: [
                '0 0 20px rgba(64, 169, 255, 0.3)',
                '0 0 60px rgba(64, 169, 255, 0.5)',
                '0 0 20px rgba(64, 169, 255, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Waves className="h-10 w-10 text-ocean-400" />
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-ocean-500/20 to-purple-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Santo Domingo Bay
          </h1>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4" />
            Management Portal
          </p>
        </motion.div>

        {/* Login/Register Card */}
        <Card variant="glass" hover={false} className="backdrop-blur-2xl">
          <div className="flex gap-2 mb-6">
            <Button
              variant={isLogin ? 'primary' : 'ghost'}
              size="md"
              onClick={() => setIsLogin(true)}
              className="flex-1"
            >
              Iniciar Sesión
            </Button>
            <Button
              variant={!isLogin ? 'primary' : 'ghost'}
              size="md"
              onClick={() => setIsLogin(false)}
              className="flex-1"
            >
              Registrarse
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <Input
                label="Nombre completo"
                type="text"
                placeholder="Pedro Administrador"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            )}

            <Input
              label="Email"
              type="email"
              placeholder="admin@santodomingobay.com"
              leftIcon={<Mail className="h-5 w-5" />}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <Input
              label="Contraseña"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              leftIcon={<Lock className="h-5 w-5" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              }
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />

            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-ocean-400 hover:text-ocean-300 transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-6"
              isLoading={isLoading}
            >
              {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </Button>
          </form>

          {/* Demo credentials */}
          <motion.div
            className="mt-6 pt-6 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xs text-gray-400 text-center">
              <span className="block mb-1">Credenciales demo:</span>
              <span className="text-ocean-400">admin@santodomingobay.com</span> / demo123
            </p>
          </motion.div>
        </Card>

        {/* Footer */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © 2025 Santo Domingo Bay. Todos los derechos reservados.
        </motion.p>
      </motion.div>
    </div>
  );
}

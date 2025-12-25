'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, RefreshCw, Filter, Download, Upload } from 'lucide-react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import ContentCard from '@/components/dashboard/ContentCard';
import EmptyState from '@/components/dashboard/EmptyState';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import { ToastContainer } from '@/components/ui/Toast';
import { mockCategories, mockContentSections } from '@/lib/mock-data';
import { Category, ContentSection } from '@/types';

export default function DashboardPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewModal, setViewModal] = useState<{ isOpen: boolean; section: ContentSection | null }>({
    isOpen: false,
    section: null,
  });
  const [toasts, setToasts] = useState<Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
  }>>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      loadSections(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  const loadCategories = async () => {
    setIsLoading(true);
    // Simulación de carga desde Supabase
    setTimeout(() => {
      setCategories(mockCategories);
      if (mockCategories.length > 0) {
        setSelectedCategoryId(mockCategories[0].id);
      }
      setIsLoading(false);
    }, 500);
  };

  const loadSections = async (categoryId: string) => {
    setIsLoading(true);
    // Simulación de carga desde Supabase
    setTimeout(() => {
      setSections(mockContentSections[categoryId] || []);
      setIsLoading(false);
    }, 300);
  };

  const handleRefresh = () => {
    if (selectedCategoryId) {
      loadSections(selectedCategoryId);
      addToast('info', 'Contenido actualizado');
    }
  };

  const handleView = (section: ContentSection) => {
    setViewModal({ isOpen: true, section });
  };

  const handleEdit = (section: ContentSection) => {
    addToast('info', 'Función de edición en desarrollo');
  };

  const handleDelete = (sectionId: string) => {
    setSections(sections.filter(s => s.id !== sectionId));
    addToast('success', 'Sección eliminada correctamente');
  };

  const handleAddNew = () => {
    addToast('info', 'Función de agregar en desarrollo');
  };

  const handleLogout = () => {
    router.push('/login');
  };

  const addToast = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const selectedCategory = categories.find(c => c.id === selectedCategoryId);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header title={selectedCategory?.name || 'Dashboard'} userName="Admin" />

        {/* Content area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Actions bar */}
          <motion.div
            className="flex flex-wrap items-center justify-between gap-4 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <Button
                variant="primary"
                size="md"
                onClick={handleAddNew}
                leftIcon={<Plus className="h-5 w-5" />}
              >
                Agregar Sección
              </Button>
              <Button
                variant="glass"
                size="md"
                onClick={handleRefresh}
                leftIcon={<RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />}
              >
                Actualizar
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="md"
                leftIcon={<Filter className="h-5 w-5" />}
              >
                Filtrar
              </Button>
              <Button
                variant="ghost"
                size="md"
                leftIcon={<Download className="h-5 w-5" />}
              >
                Exportar
              </Button>
              <Button
                variant="ghost"
                size="md"
                leftIcon={<Upload className="h-5 w-5" />}
              >
                Importar
              </Button>
            </div>
          </motion.div>

          {/* Content grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-3xl p-6 h-64 animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
          ) : sections.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <ContentCard
                  key={section.id}
                  section={section}
                  index={index}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <EmptyState onAddNew={handleAddNew} />
          )}
        </main>
      </div>

      {/* View Modal */}
      <Modal
        isOpen={viewModal.isOpen}
        onClose={() => setViewModal({ isOpen: false, section: null })}
        title={viewModal.section?.title}
        size="lg"
      >
        {viewModal.section && (
          <div className="space-y-4">
            <div className="glass rounded-2xl p-4 border border-white/10">
              <h4 className="text-sm font-semibold text-ocean-400 mb-3">Información</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">ID:</span>
                  <span className="text-white font-mono">{viewModal.section.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Slug:</span>
                  <span className="text-white">{viewModal.section.slug}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Orden:</span>
                  <span className="text-white">{viewModal.section.order_index}</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-4 border border-white/10">
              <h4 className="text-sm font-semibold text-ocean-400 mb-3">Contenido (JSON)</h4>
              <pre className="text-xs text-gray-300 bg-black/30 rounded-xl p-4 overflow-x-auto">
                {JSON.stringify(viewModal.section.content, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </Modal>

      {/* Toast notifications */}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, X, Plus, Sparkles, FileText } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import FieldEditor from './FieldEditor';
import { ContentSection, ContentField, FieldTemplate } from '@/types';
import { getTemplatesForCategory } from '@/lib/templates';

interface ContentFormAdvancedProps {
  section?: ContentSection | null;
  categoryId: string;
  categorySlug: string;
  onSave: (data: Partial<ContentSection>) => Promise<void>;
  onCancel: () => void;
}

const ContentFormAdvanced: React.FC<ContentFormAdvancedProps> = ({
  section,
  categoryId,
  categorySlug,
  onSave,
  onCancel,
}) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [fields, setFields] = useState<ContentField[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showTemplates, setShowTemplates] = useState(false);

  const templates = getTemplatesForCategory(categorySlug);

  useEffect(() => {
    if (section) {
      setTitle(section.title);
      setSlug(section.slug);
      
      // Convert existing content to fields
      const existingFields: ContentField[] = Object.entries(section.content).map(([key, value], index) => ({
        id: `field-${index}`,
        key,
        label: key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        value,
        type: inferFieldType(value),
        required: false,
      }));
      
      setFields(existingFields.length > 0 ? existingFields : [createEmptyField()]);
    } else {
      setFields([createEmptyField()]);
    }
  }, [section]);

  const inferFieldType = (value: unknown): ContentField['type'] => {
    if (typeof value === 'boolean') return 'checkbox';
    if (typeof value === 'number') return 'number';
    if (Array.isArray(value)) return 'multiselect';
    if (typeof value === 'object') return 'json';
    if (typeof value === 'string') {
      if (value.includes('@')) return 'email';
      if (value.match(/^https?:\/\//)) return 'url';
      if (value.match(/^\+?[\d\s()-]+$/)) return 'phone';
      if (value.length > 100) return 'textarea';
    }
    return 'text';
  };

  const createEmptyField = (): ContentField => ({
    id: `field-${Date.now()}-${Math.random()}`,
    key: '',
    label: '',
    value: '',
    type: 'text',
    required: false,
  });

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!section) {
      const generatedSlug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setSlug(generatedSlug);
    }
  };

  const addField = () => {
    setFields([...fields, createEmptyField()]);
  };

  const updateField = (id: string, updates: Partial<ContentField>) => {
    setFields(fields.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const removeField = (id: string) => {
    if (fields.length > 1) {
      setFields(fields.filter(f => f.id !== id));
    }
  };

  const moveFieldUp = (index: number) => {
    if (index > 0) {
      const newFields = [...fields];
      [newFields[index - 1], newFields[index]] = [newFields[index], newFields[index - 1]];
      setFields(newFields);
    }
  };

  const moveFieldDown = (index: number) => {
    if (index < fields.length - 1) {
      const newFields = [...fields];
      [newFields[index], newFields[index + 1]] = [newFields[index + 1], newFields[index]];
      setFields(newFields);
    }
  };

  const applyTemplate = (template: FieldTemplate) => {
    const templateFields: ContentField[] = template.fields.map((field, index) => ({
      id: `field-${Date.now()}-${index}`,
      ...field,
      value: field.type === 'checkbox' ? false : field.type === 'multiselect' ? [] : '',
    }));
    
    setFields(templateFields);
    setShowTemplates(false);
    
    if (!title) {
      setTitle(template.name);
      handleTitleChange(template.name);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = 'El título es requerido';
    }

    if (!slug.trim()) {
      newErrors.slug = 'El slug es requerido';
    }

    // Validate fields
    fields.forEach((field, index) => {
      if (!field.key.trim()) {
        newErrors[`field-${index}-key`] = 'La clave es requerida';
      }
      
      if (field.required && !field.value && field.value !== 0 && field.value !== false) {
        newErrors[`field-${index}-value`] = 'Este campo es requerido';
      }

      // Check for duplicate keys
      const duplicates = fields.filter(f => f.key === field.key);
      if (duplicates.length > 1) {
        newErrors[`field-${index}-key`] = 'Esta clave ya existe';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Convert fields to content object
      const content: Record<string, unknown> = {};
      fields.forEach((field) => {
        if (field.key.trim()) {
          content[field.key.trim()] = field.value;
        }
      });

      const data: Partial<ContentSection> = {
        title: title.trim(),
        slug: slug.trim(),
        content,
        category_id: categoryId,
      };

      if (section) {
        data.id = section.id;
      }

      await onSave(data);
    } catch (error) {
      console.error('Error saving content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
      {/* Basic Info */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Información Básica</h3>
          {templates.length > 0 && !section && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowTemplates(!showTemplates)}
              leftIcon={<Sparkles className="h-4 w-4" />}
            >
              {showTemplates ? 'Ocultar' : 'Usar'} Plantillas
            </Button>
          )}
        </div>

        {/* Templates */}
        <AnimatePresence>
          {showTemplates && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {templates.map((template, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => applyTemplate(template)}
                  className="glass rounded-xl p-4 text-left hover:bg-white/10 transition-colors border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-ocean-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{template.name}</h4>
                      <p className="text-xs text-gray-400">{template.description}</p>
                      <p className="text-xs text-ocean-400 mt-2">{template.fields.length} campos</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <Input
          label="Título *"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Ej: Restaurante La Famiglia"
          error={errors.title}
          required
        />

        <Input
          label="Slug *"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="restaurante-la-famiglia"
          error={errors.slug}
          required
        />
      </div>

      {/* Fields */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">
            Campos ({fields.length})
          </h3>
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={addField}
            leftIcon={<Plus className="h-4 w-4" />}
          >
            Agregar Campo
          </Button>
        </div>

        <div className="space-y-3">
          <AnimatePresence>
            {fields.map((field, index) => (
              <FieldEditor
                key={field.id}
                field={field}
                index={index}
                onUpdate={(updatedField) => updateField(field.id, updatedField)}
                onRemove={() => removeField(field.id)}
                onMoveUp={() => moveFieldUp(index)}
                onMoveDown={() => moveFieldDown(index)}
                canMoveUp={index > 0}
                canMoveDown={index < fields.length - 1}
              />
            ))}
          </AnimatePresence>
        </div>

        {fields.length === 0 && (
          <div className="text-center py-12 glass rounded-2xl border border-white/10">
            <p className="text-gray-400 mb-4">No hay campos agregados</p>
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={addField}
              leftIcon={<Plus className="h-4 w-4" />}
            >
              Agregar Primer Campo
            </Button>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-end pt-4 border-t border-white/10 sticky bottom-0 bg-[#0a0e27] pb-4">
        <Button
          type="button"
          variant="ghost"
          onClick={onCancel}
          leftIcon={<X className="h-4 w-4" />}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          leftIcon={<Save className="h-4 w-4" />}
        >
          {section ? 'Actualizar' : 'Crear'} Sección
        </Button>
      </div>
    </form>
  );
};

export default ContentFormAdvanced;

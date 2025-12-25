'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, X, Plus, Trash2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { ContentSection } from '@/types';

interface ContentFormProps {
  section?: ContentSection | null;
  categoryId: string;
  onSave: (data: Partial<ContentSection>) => Promise<void>;
  onCancel: () => void;
}

const ContentForm: React.FC<ContentFormProps> = ({
  section,
  categoryId,
  onSave,
  onCancel,
}) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [contentFields, setContentFields] = useState<Array<{ key: string; value: string }>>([
    { key: '', value: '' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (section) {
      setTitle(section.title);
      setSlug(section.slug);
      
      // Convert content object to array of key-value pairs
      const fields = Object.entries(section.content).map(([key, value]) => ({
        key,
        value: typeof value === 'object' ? JSON.stringify(value) : String(value),
      }));
      setContentFields(fields.length > 0 ? fields : [{ key: '', value: '' }]);
    }
  }, [section]);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    // Auto-generate slug from title
    if (!section) {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setSlug(generatedSlug);
    }
  };

  const addContentField = () => {
    setContentFields([...contentFields, { key: '', value: '' }]);
  };

  const removeContentField = (index: number) => {
    if (contentFields.length > 1) {
      setContentFields(contentFields.filter((_, i) => i !== index));
    }
  };

  const updateContentField = (index: number, field: 'key' | 'value', value: string) => {
    const updated = [...contentFields];
    updated[index][field] = value;
    setContentFields(updated);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = 'El título es requerido';
    }

    if (!slug.trim()) {
      newErrors.slug = 'El slug es requerido';
    }

    // Validate content fields
    const hasEmptyKeys = contentFields.some((field, index) => {
      if (field.key.trim() && !field.value.trim()) {
        newErrors[`value-${index}`] = 'El valor es requerido';
        return true;
      }
      return false;
    });

    const hasDuplicateKeys = contentFields.some((field, index) => {
      if (field.key.trim()) {
        const duplicates = contentFields.filter((f, i) => 
          i !== index && f.key.trim() === field.key.trim()
        );
        if (duplicates.length > 0) {
          newErrors[`key-${index}`] = 'Esta clave ya existe';
          return true;
        }
      }
      return false;
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
      // Convert content fields array to object
      const content: Record<string, any> = {};
      contentFields.forEach((field) => {
        if (field.key.trim() && field.value.trim()) {
          // Try to parse as JSON, otherwise use as string
          try {
            content[field.key.trim()] = JSON.parse(field.value);
          } catch {
            content[field.key.trim()] = field.value.trim();
          }
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Información Básica</h3>
        
        <Input
          label="Título *"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Ej: Información del Hotel"
          error={errors.title}
          required
        />

        <Input
          label="Slug *"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="ej-informacion-hotel"
          error={errors.slug}
          required
        />
      </div>

      {/* Content Fields */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Campos de Contenido</h3>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={addContentField}
            leftIcon={<Plus className="h-4 w-4" />}
          >
            Agregar Campo
          </Button>
        </div>

        <div className="space-y-3">
          {contentFields.map((field, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-4 border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex gap-3 items-start">
                <div className="flex-1 space-y-3">
                  <Input
                    placeholder="Clave (ej: hotel_name)"
                    value={field.key}
                    onChange={(e) => updateContentField(index, 'key', e.target.value)}
                    error={errors[`key-${index}`]}
                  />
                  <Input
                    placeholder='Valor (ej: "Santo Domingo Bay" o {"tipo": "resort"})'
                    value={field.value}
                    onChange={(e) => updateContentField(index, 'value', e.target.value)}
                    error={errors[`value-${index}`]}
                  />
                </div>
                {contentFields.length > 1 && (
                  <Button
                    type="button"
                    variant="danger"
                    size="sm"
                    onClick={() => removeContentField(index)}
                    className="mt-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-xs text-gray-400 glass rounded-xl p-3">
          <strong>Tip:</strong> Puedes usar formato JSON en los valores. 
          Ejemplo: <code className="text-ocean-400">{"["Opción 1", "Opción 2"]"}</code> para arrays
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-end pt-4 border-t border-white/10">
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

export default ContentForm;

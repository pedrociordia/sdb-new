'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, GripVertical, ChevronDown, ChevronUp } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { ContentField, FieldType } from '@/types';

interface FieldEditorProps {
  field: ContentField;
  index: number;
  onUpdate: (field: ContentField) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}

const fieldTypes: Array<{ value: FieldType; label: string; icon: string }> = [
  { value: 'text', label: 'Texto', icon: '📝' },
  { value: 'textarea', label: 'Texto Largo', icon: '📄' },
  { value: 'email', label: 'Email', icon: '📧' },
  { value: 'phone', label: 'Teléfono', icon: '📱' },
  { value: 'url', label: 'URL', icon: '🔗' },
  { value: 'number', label: 'Número', icon: '🔢' },
  { value: 'date', label: 'Fecha', icon: '📅' },
  { value: 'time', label: 'Hora', icon: '🕐' },
  { value: 'datetime', label: 'Fecha y Hora', icon: '📆' },
  { value: 'checkbox', label: 'Checkbox', icon: '☑️' },
  { value: 'select', label: 'Selector', icon: '📋' },
  { value: 'multiselect', label: 'Selector Múltiple', icon: '📑' },
  { value: 'color', label: 'Color', icon: '🎨' },
  { value: 'json', label: 'JSON', icon: '{}' },
];

const FieldEditor: React.FC<FieldEditorProps> = ({
  field,
  index,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
  canMoveUp,
  canMoveDown,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (updates: Partial<ContentField>) => {
    onUpdate({ ...field, ...updates });
  };

  const renderValueInput = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            value={field.value || ''}
            onChange={(e) => handleChange({ value: e.target.value })}
            placeholder={field.placeholder || 'Ingresa el contenido...'}
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent backdrop-blur-xl min-h-[120px]"
            required={field.required}
          />
        );

      case 'email':
        return (
          <Input
            type="email"
            value={field.value || ''}
            onChange={(e) => handleChange({ value: e.target.value })}
            placeholder={field.placeholder || 'ejemplo@email.com'}
            required={field.required}
          />
        );

      case 'phone':
        return (
          <Input
            type="tel"
            value={field.value || ''}
            onChange={(e) => handleChange({ value: e.target.value })}
            placeholder={field.placeholder || '+1 809 123 4567'}
            required={field.required}
          />
        );

      case 'url':
        return (
          <Input
            type="url"
            value={field.value || ''}
            onChange={(e) => handleChange({ value: e.target.value })}
            placeholder={field.placeholder || 'https://ejemplo.com'}
            required={field.required}
          />
        );

      case 'number':
        return (
          <Input
            type="number"
            value={field.value || ''}
            onChange={(e) => handleChange({ value: e.target.value })}
            placeholder={field.placeholder || '0'}
            required={field.required}
          />
        );

      case 'date':
        return (
          <Input
            type="date"
            value={field.value || ''}
            onChange={(e) => handleChange({ value: e.target.value })}
            required={field.required}
          />
        );

      case 'time':
        return (
          <Input
            type="time"
            value={field.value || ''}
            onChange={(e) => handleChange({ value: e.target.value })}
            required={field.required}
          />
        );

      case 'datetime':
        return (
          <Input
            type="datetime-local"
            value={field.value || ''}
            onChange={(e) => handleChange({ value: e.target.value })}
            required={field.required}
          />
        );

      case 'checkbox':
        return (
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={field.value || false}
              onChange={(e) => handleChange({ value: e.target.checked })}
              className="w-5 h-5 rounded border-white/20 bg-white/5 text-ocean-500 focus:ring-ocean-500"
            />
            <span className="text-sm text-gray-300">
              {field.value ? 'Activado' : 'Desactivado'}
            </span>
          </div>
        );

      case 'select':
        return (
          <select
            value={field.value || ''}
            onChange={(e) => handleChange({ value: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent backdrop-blur-xl"
            required={field.required}
          >
            <option value="">Selecciona una opción...</option>
            {field.options?.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'multiselect':
        return (
          <select
            multiple
            value={Array.isArray(field.value) ? field.value : []}
            onChange={(e) => {
              const selected = Array.from(e.target.selectedOptions, option => option.value);
              handleChange({ value: selected });
            }}
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent backdrop-blur-xl min-h-[120px]"
            required={field.required}
          >
            {field.options?.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'color':
        return (
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={field.value || '#1890ff'}
              onChange={(e) => handleChange({ value: e.target.value })}
              className="w-16 h-12 rounded-xl border-2 border-white/20 cursor-pointer"
            />
            <Input
              type="text"
              value={field.value || '#1890ff'}
              onChange={(e) => handleChange({ value: e.target.value })}
              placeholder="#1890ff"
              className="flex-1"
            />
          </div>
        );

      case 'json':
        return (
          <textarea
            value={typeof field.value === 'string' ? field.value : JSON.stringify(field.value, null, 2)}
            onChange={(e) => {
              try {
                const parsed = JSON.parse(e.target.value);
                handleChange({ value: parsed });
              } catch {
                handleChange({ value: e.target.value });
              }
            }}
            placeholder='{"clave": "valor"}'
            className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent backdrop-blur-xl min-h-[120px] font-mono text-xs"
            required={field.required}
          />
        );

      default:
        return (
          <Input
            type="text"
            value={field.value || ''}
            onChange={(e) => handleChange({ value: e.target.value })}
            placeholder={field.placeholder || 'Ingresa el valor...'}
            required={field.required}
          />
        );
    }
  };

  return (
    <motion.div
      layout
      className="glass rounded-2xl border border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="cursor-grab active:cursor-grabbing p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <GripVertical className="h-5 w-5 text-gray-400" />
          </button>
          
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={onMoveUp}
              disabled={!canMoveUp}
              className="p-1 hover:bg-white/10 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronUp className="h-4 w-4 text-gray-400" />
            </button>
            <button
              type="button"
              onClick={onMoveDown}
              disabled={!canMoveDown}
              className="p-1 hover:bg-white/10 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-400">#{index + 1}</span>
            <span className="text-sm font-semibold text-white">
              {field.label || field.key || 'Campo sin nombre'}
            </span>
            {field.required && (
              <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-lg">
                Requerido
              </span>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <ChevronDown
            className={`h-5 w-5 text-gray-400 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        <Button
          type="button"
          variant="danger"
          size="sm"
          onClick={onRemove}
          className="p-2"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="p-4 space-y-4"
        >
          {/* Field Configuration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Clave (Key) *"
              value={field.key}
              onChange={(e) => handleChange({ key: e.target.value.toLowerCase().replace(/\s+/g, '_') })}
              placeholder="nombre_campo"
              required
            />

            <Input
              label="Etiqueta *"
              value={field.label}
              onChange={(e) => handleChange({ label: e.target.value })}
              placeholder="Nombre del Campo"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tipo de Campo *
              </label>
              <select
                value={field.type}
                onChange={(e) => handleChange({ type: e.target.value as FieldType })}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent backdrop-blur-xl"
              >
                {fieldTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.icon} {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={field.required}
                  onChange={(e) => handleChange({ required: e.target.checked })}
                  className="w-5 h-5 rounded border-white/20 bg-white/5 text-ocean-500 focus:ring-ocean-500"
                />
                <span className="text-sm font-medium text-gray-300">Campo requerido</span>
              </label>
            </div>
          </div>

          {/* Options for select/multiselect */}
          {(field.type === 'select' || field.type === 'multiselect') && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Opciones (una por línea)
              </label>
              <textarea
                value={field.options?.join('\n') || ''}
                onChange={(e) => handleChange({ options: e.target.value.split('\n').filter(o => o.trim()) })}
                placeholder="Opción 1&#10;Opción 2&#10;Opción 3"
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent backdrop-blur-xl min-h-[100px]"
              />
            </div>
          )}

          {/* Placeholder */}
          <Input
            label="Placeholder"
            value={field.placeholder || ''}
            onChange={(e) => handleChange({ placeholder: e.target.value })}
            placeholder="Texto de ayuda..."
          />

          {/* Value Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Valor {field.required && '*'}
            </label>
            {renderValueInput()}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FieldEditor;

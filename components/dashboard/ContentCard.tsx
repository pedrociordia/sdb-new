'use client';

import { motion } from 'framer-motion';
import { Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ContentSection } from '@/types';

interface ContentCardProps {
  section: ContentSection;
  index: number;
  onView: (section: ContentSection) => void;
  onEdit: (section: ContentSection) => void;
  onDelete: (sectionId: string) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({
  section,
  index,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card variant="glass" hover glow className="group">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-ocean-400 transition-colors">
              {section.title}
            </h3>
            <p className="text-sm text-gray-400">{section.slug}</p>
          </div>
          <Button variant="ghost" size="sm" className="rounded-full p-2">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>

        {/* Content preview */}
        <div className="glass rounded-2xl p-4 mb-4 border border-white/5">
          <div className="space-y-2">
            {Object.entries(section.content).slice(0, 3).map(([key, value]) => (
              <div key={key} className="flex items-start gap-2">
                <span className="text-xs font-medium text-ocean-400 min-w-[100px] capitalize">
                  {key.replace(/_/g, ' ')}:
                </span>
                <span className="text-xs text-gray-300 line-clamp-1">
                  {typeof value === 'object'
                    ? JSON.stringify(value)
                    : String(value)}
                </span>
              </div>
            ))}
            {Object.keys(section.content).length > 3 && (
              <p className="text-xs text-gray-500 italic">
                +{Object.keys(section.content).length - 3} campos más...
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="glass"
            size="sm"
            onClick={() => onView(section)}
            leftIcon={<Eye className="h-4 w-4" />}
            className="flex-1"
          >
            Ver
          </Button>
          <Button
            variant="glass"
            size="sm"
            onClick={() => onEdit(section)}
            leftIcon={<Edit className="h-4 w-4" />}
            className="flex-1"
          >
            Editar
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(section.id)}
            className="p-3"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Metadata */}
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
          <span>Orden: {section.order_index}</span>
          <span>
            {new Date(section.updated_at).toLocaleDateString('es-ES')}
          </span>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-ocean-500/0 via-ocean-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10 blur-xl"
          initial={false}
        />
      </Card>
    </motion.div>
  );
};

export default ContentCard;

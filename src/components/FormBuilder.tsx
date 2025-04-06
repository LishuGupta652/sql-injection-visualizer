import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { FormField } from '../types';

interface FormBuilderProps {
  fields: FormField[];
  onUpdateFields: (fields: FormField[]) => void;
}

export function FormBuilder({ fields, onUpdateFields }: FormBuilderProps) {
  const addField = () => {
    const newField: FormField = {
      id: Date.now().toString(),
      name: `field${fields.length + 1}`,
      type: 'text',
      placeholder: `Enter value ${fields.length + 1}`,
      value: ''
    };
    onUpdateFields([...fields, newField]);
  };

  const removeField = (id: string) => {
    onUpdateFields(fields.filter(field => field.id !== id));
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    onUpdateFields(
      fields.map(field => 
        field.id === id ? { ...field, ...updates } : field
      )
    );
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Form Builder</h2>
        <button
          onClick={addField}
          className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} />
          Add Field
        </button>
      </div>
      <div className="space-y-4">
        {fields.map(field => (
          <div key={field.id} className="flex gap-4 items-start">
            <div className="flex-1 space-y-2">
              <input
                type="text"
                value={field.name}
                onChange={(e) => updateField(field.id, { name: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Field name"
              />
              <select
                value={field.type}
                onChange={(e) => updateField(field.id, { type: e.target.value as FormField['type'] })}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
              </select>
              <input
                type={field.type}
                value={field.value}
                onChange={(e) => updateField(field.id, { value: e.target.value })}
                placeholder={field.placeholder}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <button
              onClick={() => removeField(field.id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { FormField, SQLTemplate } from '../types';

interface SQLPreviewProps {
  template: SQLTemplate;
  fields: FormField[];
  useParameterized: boolean;
  onToggleParameterized: (value: boolean) => void;
}

export function SQLPreview({ template, fields, useParameterized, onToggleParameterized }: SQLPreviewProps) {
  const generateSQL = () => {
    let sql = useParameterized ? template.parameterized : template.raw;
    
    fields.forEach(field => {
      const placeholder = `$${field.name}`;
      if (useParameterized) {
        sql = sql.replace(placeholder, '?');
      } else {
        sql = sql.replace(placeholder, field.value);
      }
    });

    return sql;
  };

  const sql = generateSQL();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">SQL Preview</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={useParameterized}
            onChange={(e) => onToggleParameterized(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          Use Parameterized Query
        </label>
      </div>
      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
        <pre className="whitespace-pre-wrap text-white">{sql}</pre>
      </div>
    </div>
  );
}
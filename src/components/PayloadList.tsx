import React from 'react';
import { Search } from 'lucide-react';
import { SQLPayload } from '../types';

interface PayloadListProps {
  payloads: SQLPayload[];
  onSelectPayload: (payload: SQLPayload) => void;
  selectedPayloadId: string | null;
}

export function PayloadList({ payloads, onSelectPayload, selectedPayloadId }: PayloadListProps) {
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState<SQLPayload['category'] | 'all'>('all');

  const filteredPayloads = payloads.filter(payload => {
    const matchesSearch = payload.name.toLowerCase().includes(search.toLowerCase()) ||
                         payload.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || payload.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search payloads..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <select
          className="mt-3 w-full p-2 rounded-lg border"
          value={filter}
          onChange={(e) => setFilter(e.target.value as SQLPayload['category'] | 'all')}
        >
          <option value="all">All Categories</option>
          <option value="tautology">Tautology</option>
          <option value="union">Union-Based</option>
          <option value="stacked">Stacked Queries</option>
          <option value="error">Error-Based</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredPayloads.map(payload => (
          <div
            key={payload.id}
            className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedPayloadId === payload.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
            }`}
            onClick={() => onSelectPayload(payload)}
          >
            <h3 className="font-medium text-gray-900">{payload.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{payload.description}</p>
            <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700">
              {payload.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
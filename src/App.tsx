import React from 'react';
import { PayloadList } from './components/PayloadList';
import { FormBuilder } from './components/FormBuilder';
import { SQLPreview } from './components/SQLPreview';
import { defaultPayloads } from './data/payloads';
import { FormField, SQLPayload, SQLTemplate } from './types';

const defaultTemplate: SQLTemplate = {
  raw: "SELECT * FROM users WHERE username = '$username' AND password = '$password'",
  parameterized: "SELECT * FROM users WHERE username = ? AND password = ?"
};

const defaultFields: FormField[] = [
  {
    id: '1',
    name: 'username',
    type: 'text',
    placeholder: 'Enter username',
    value: ''
  },
  {
    id: '2',
    name: 'password',
    type: 'text',
    placeholder: 'Enter password',
    value: ''
  }
];

function App() {
  const [selectedPayload, setSelectedPayload] = React.useState<SQLPayload | null>(null);
  const [fields, setFields] = React.useState<FormField[]>(defaultFields);
  const [useParameterized, setUseParameterized] = React.useState(false);

  const handlePayloadSelect = (payload: SQLPayload) => {
    setSelectedPayload(payload);
    // Update the username field with the payload value
    setFields(fields.map(field => 
      field.name === 'username' ? { ...field, value: payload.value } : field
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">SQL Injection Visualizer</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Panel - Payload List */}
          <div className="col-span-4 bg-white rounded-lg shadow-sm overflow-hidden h-[calc(100vh-12rem)]">
            <PayloadList
              payloads={defaultPayloads}
              onSelectPayload={handlePayloadSelect}
              selectedPayloadId={selectedPayload?.id || null}
            />
          </div>
          
          {/* Right Panel */}
          <div className="col-span-8 space-y-6">
            {/* Form Builder */}
            <div className="bg-white rounded-lg shadow-sm">
              <FormBuilder
                fields={fields}
                onUpdateFields={setFields}
              />
            </div>
            
            {/* SQL Preview */}
            <div className="bg-white rounded-lg shadow-sm">
              <SQLPreview
                template={defaultTemplate}
                fields={fields}
                useParameterized={useParameterized}
                onToggleParameterized={setUseParameterized}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
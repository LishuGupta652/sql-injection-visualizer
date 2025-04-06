export interface SQLPayload {
  id: string;
  name: string;
  description: string;
  category: 'tautology' | 'union' | 'stacked' | 'error' | 'custom' | 'generic' | 'time-based' | 'auth-based';
  value: string;
}

export interface FormField {
  id: string;
  name: string;
  type: 'text' | 'number' | 'email';
  placeholder: string;
  value: string;
}

export interface SQLTemplate {
  raw: string;
  parameterized: string;
}
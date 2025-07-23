export interface Column {
  id: 'id' | 'fecha' | 'paciente' | 'tipo' | 'estado' | 'acciones';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

export const columns: readonly Column[] = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'fecha', label: 'Fecha', minWidth: 100 },
  { id: 'paciente', label: 'Paciente', minWidth: 170, align: 'left' },
  { id: 'tipo', label: 'Tipo', minWidth: 170, align: 'left' },
  { id: 'estado', label: 'Estado', minWidth: 170, align: 'left' },
  { id: 'acciones', label: 'Acciones', minWidth: 170, align: 'left' },
];
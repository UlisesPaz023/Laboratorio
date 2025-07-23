import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import palette from '../../../theme/palettes';
import type { ReactNode } from 'react';

export interface Column<T> {
  id: keyof T;
  label: string;
  minWidth?: number;
  align?: 'left' | 'right' | 'center';
  format?: (value: unknown, row: T) => ReactNode;
  renderCell?: (row: T) => ReactNode;
}

interface GenericTableProps<T> {
  columns: Column<T>[];
  rows: T[];
}

function GenericTable<T extends { [key: string]: unknown; id?: string | number }>({columns, rows}: GenericTableProps<T>) {
  return (
    <Paper sx={{ boxShadow: 'none',padding:2 ,margin:0, width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ border:`.1rem solid ${palette.lightGray.main}`, borderRadius:'.5rem' ,maxHeight: 440, }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {
                columns.map((column) => (
                  <TableCell
                    sx={{
                      backgroundColor: palette.ultraLightGray.main,
                      color: palette.gray.main,
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',        
                      maxWidth: column.minWidth,
                    }}
                    key={String(column.id)}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row, idx) => (  
                <TableRow hover role="checkbox" tabIndex={-1} key={String(row.id ?? idx)}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                     <TableCell
                        key={String(column.id)}
                        align={column.align}
                      >
                        {column.renderCell
                          ? column.renderCell(row) // <-- Usa renderCell si existe
                          : column.format
                            ? column.format(value, row)
                            : (value as ReactNode)}
                      </TableCell>
                      );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default GenericTable;
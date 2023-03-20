import type React from 'react';
import { Table, TableContainer, Tbody, Th, Thead, Tr, Td } from '@chakra-ui/react';
import { getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import Pagination from './table-pagination';

interface ReactTableProps<T extends object> {
  data: T[];
  columns: Array<ColumnDef<T>>;
  pageChangeHandler: (pageNumber: number) => void;
  currentPage: number;
  totalPage: number;
}

const TableWidget = <T extends object>({
  data,
  columns,
  pageChangeHandler,
  currentPage,
  totalPage,
}: ReactTableProps<T>): React.ReactElement => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer>
      <Table className="simple">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id} className="px-6 py-4 text-sm font-medium text-gray-900">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id} className='border-b" bg-white'>
              {row.getVisibleCells().map((cell) => (
                <Td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Pagination pageChangeHandler={pageChangeHandler} currentPage={currentPage} totalPage={totalPage} />
    </TableContainer>
  );
};

export { TableWidget };

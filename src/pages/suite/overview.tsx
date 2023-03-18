import type React from 'react';
import { TableWidget } from 'src/ui/widget';
import { useMemo } from 'react';
import { type ColumnDef } from '@tanstack/react-table';
import { useGet } from 'src/api';

export interface IJsonResposne {
  data: ISuiteData[];
  page: number;
  per_page: number;
  total: number;
}

export interface ISuiteData {
  id: number;
  project: string;
  branch: string;
  tests: number;
  last_execution: string;
  status: string;
}

const SuiteTable = (props: IJsonResposne): React.ReactElement => {
  const columns = useMemo<Array<ColumnDef<ISuiteData>>>(
    () => [
      {
        header: 'Status',
        cell: (row) => row.renderValue(),
        accessorKey: 'status',
      },
      {
        header: 'Project',
        cell: (row) => row.renderValue(),
        accessorKey: 'project',
      },
      {
        header: 'Branch',
        cell: (row) => row.renderValue(),
        accessorKey: 'branch',
      },
      {
        header: 'Number of Tests',
        cell: (row) => row.renderValue(),
        accessorKey: 'tests',
      },
      {
        header: 'Last Executed on',
        cell: (row) => row.renderValue(),
        accessorKey: 'last_execution',
      },
    ],
    [],
  );

  return <TableWidget data={props.data} columns={columns} currentPage={props.page} totalPage={props.total} />;
};

const SuiteOverview: React.FC = () => {
  const [loading, suites, error] = useGet<IJsonResposne>({ method: 'GET', url: 'http://localhost:3030/overview' });

  if (loading) return <p>Loading ....</p>;
  if (error !== '') return <p>{error}</p>;
  if (suites == null) return <p>Data was null</p>;

  return <SuiteTable {...suites} />;
};

export default SuiteOverview;

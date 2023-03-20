import type React from 'react';
import { TableWidget } from 'src/ui/widget';
import { useMemo, useState } from 'react';
import { type ColumnDef } from '@tanstack/react-table';
import { useGet } from 'src/api';

interface IJsonResponse {
  data: ISuiteData[];
  page: number;
  per_page: number;
  total: number;
}

interface ISuiteData {
  id: number;
  project: string;
  branch: string;
  tests: number;
  last_execution: string;
  status: string;
}

interface TableBuilderProps {
  url: string;
  pageChangeHandler: (currentPage: number) => void;
}

interface SuiteTableProps {
  page: number;
  data: ISuiteData[];
  total: number;
  pageChangeHandler: (currentPage: number) => void;
}

const SuiteTable = (props: SuiteTableProps): React.ReactElement => {
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

  return (
    <TableWidget
      data={props.data}
      columns={columns}
      currentPage={props.page}
      totalPage={props.total}
      pageChangeHandler={props.pageChangeHandler}
    />
  );
};

const TableBuilder = (props: TableBuilderProps): React.ReactElement => {
  const [loading, data, error] = useGet<IJsonResponse>({ method: 'GET', url: props.url });

  if (loading) return <p>Loading ....</p>;
  if (error !== '') return <p>{error}</p>;
  if (data == null) return <p>Data was null</p>;

  return <SuiteTable pageChangeHandler={props.pageChangeHandler} {...data} />;
};

const SuiteOverview: React.FC = () => {
  const [url, setUrl] = useState('http://localhost:3030/overview/1');

  const updatePage = (page: number): void => {
    setUrl(`http://localhost:3030/overview/${page}`);
  };

  return <TableBuilder url={url} pageChangeHandler={updatePage} />;
};

export default SuiteOverview;

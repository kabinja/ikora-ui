import type * as React from 'react';
import { Outlet } from 'react-router-dom';
import { PageFooter } from './page-footer';
import { PageHeader } from './page-header';

const MainLayout: React.FC = (): React.ReactElement => {
  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  );
};

export { MainLayout };

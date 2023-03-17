import type * as React from 'react';
import { Outlet } from 'react-router-dom';
import { PageFooter } from './page-footer';
import { PageHeader } from './page-header';

const MainLayout: React.FC = (): React.ReactElement => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <PageHeader />
        <div className="body flex-grow-1 px-3">
          <Outlet />
        </div>
        <PageFooter />
      </div>
    </div>
  );
};

export { MainLayout };

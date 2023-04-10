import type * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'src/ui/component/sidebar';
import { MainPanel } from './main-panel';
import { PanelContent } from './panel-content';
import { PanelContainer } from './panel-container';
import { PageFooter } from './page-footer';
import { routes } from 'src/routing';

const MainLayout: React.FC = (): React.ReactElement => {
  return (
    <>
      <Sidebar routes={routes} logoText={'IKORA'} />
      <MainPanel
        w={{
          base: '100%',
          xl: 'calc(100% - 275px)',
        }}
      >
        <PanelContent>
          <PanelContainer>
            <Outlet />
          </PanelContainer>
        </PanelContent>
        <PageFooter />
      </MainPanel>
    </>
  );
};

export { MainLayout };

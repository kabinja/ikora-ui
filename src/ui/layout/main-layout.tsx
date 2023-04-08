import type * as React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = (): React.ReactElement => {
  return (
    <>
      <Sidebar
        routes={routes}
        logoText={'PURITY UI DASHBOARD'}
        display="none"
        sidebarVariant={sidebarVariant}
        {...rest}
      />
      <MainPanel
        w={{
          base: '100%',
          xl: 'calc(100% - 275px)',
        }}
      >
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            logoText={'PURITY UI DASHBOARD'}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            {...rest}
          />
        </Portal>
        <PanelContent>
          <PanelContainer>
            <Outlet />
          </PanelContainer>
        </PanelContent>
        <Footer />
      </MainPanel>
    </>
  );
};

export { MainLayout };

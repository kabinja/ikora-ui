import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { PageFooter } from "./PageFooter";
import { PageHeader } from "./PageHeader";

interface PageContent{
    children?: ReactNode;

}

const MainLayout = (props: PageContent) => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <PageHeader />
        <div className="body flex-grow-1 px-3">
          { props.children || <Outlet /> }
        </div>
        <PageFooter />
      </div>
    </div>
  );
};

export { MainLayout }

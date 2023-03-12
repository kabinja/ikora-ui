import { ReactNode } from "react";
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
          { props.children }
        </div>
        <PageFooter />
      </div>
    </div>
  );
};

export { MainLayout }

import { Spinner } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import { MainLayout } from "src/ui/layout/MainLayout";

const Loading = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(() => import("./auth/login")));
const Register = Loadable(lazy(() => import("./auth/register")));

//  * HOME PAGE
const SuiteOverview = Loadable(lazy(() => import("./pages/suite/overview"))); 
const SuiteHistory = Loadable(lazy(() => import("./pages/suite/history")));
const ExecutionTree = Loadable(lazy(() => import("./pages/execution/tree")));

// ERROR PAGES
const Error404 = Loadable(lazy(() => import("./pages/page404/page404")));

const routes: RouteObject[] = [
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "suite",
        children: [
          {
            path: "overview",
            element: <SuiteOverview />
          },
          {
            path: "history/:id",
            element: <SuiteHistory />
          }
        ]
      },
      {
        path: "execution",
        children: [
          {
            path: "tree",
            element: <ExecutionTree />
          }
        ]
      }

    ],
  },
  {
    path: "*",
    element: <Error404 />
  }
];

export { routes };

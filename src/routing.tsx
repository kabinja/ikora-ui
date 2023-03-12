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
const Login = Loadable(lazy(() => import("./pages/login/login")));
const Register = Loadable(lazy(() => import("./pages/register/register")));

//  * HOME PAGE
const TestHistory = Loadable(lazy(() => import("./pages/test-history/test-history")));

// ERROR PAGES
const Error404 = Loadable(lazy(() => import("./pages/page404/page404")));

const routes: RouteObject[] = [
  {
    path: "authentication",
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
        path: "test-history",
        element: <TestHistory />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />
  }
];

export { routes };

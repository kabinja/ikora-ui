import type * as React from 'react';
import { Spinner } from '@chakra-ui/react';
import { Suspense, lazy } from 'react';
import { MainLayout } from 'src/ui/layout/main-layout';
import { FaBook, FaHistory, FaHome, FaRegistered, FaTree, FaUser } from 'react-icons/fa';

interface RouteDefinition {
  children?: RouteDefinition[];
  name: string;
  icon?: JSX.Element;
  element?: JSX.Element;
  path?: string;
  navbar?: true;
}

const Loading = (): React.ReactElement => {
  return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />;
};

// eslint-disable-next-line react/display-name
const Loadable = (Component: React.ComponentType) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(async () => await import('./pages/auth/login')));
const Register = Loadable(lazy(async () => await import('./pages/auth/register')));

//  * HOME PAGE
const Home = Loadable(lazy(async () => await import('./pages/home')));

//  * FEATURE PAGES
const SuiteOverview = Loadable(lazy(async () => await import('./pages/suite/overview')));
const SuiteHistory = Loadable(lazy(async () => await import('./pages/suite/history')));
const ExecutionTree = Loadable(lazy(async () => await import('./pages/execution/tree')));

// ERROR PAGES
const Error404 = Loadable(lazy(async () => await import('./pages/error/not-found')));

const routes: RouteDefinition[] = [
  {
    name: 'Authentication',
    path: 'auth',
    children: [
      {
        name: 'Login',
        path: 'login',
        icon: <FaUser />,
        element: <Login />,
      },
      {
        name: 'Register',
        path: 'register',
        icon: <FaRegistered />,
        element: <Register />,
      },
    ],
  },
  {
    navbar: true,
    name: 'Main',
    path: '/',
    element: <MainLayout />,
    children: [
      {
        navbar: true,
        name: 'Home',
        element: <Home />,
        icon: <FaHome />,
      },
      {
        navbar: true,
        name: 'Suite',
        path: 'suite',
        children: [
          {
            navbar: true,
            name: 'Overview',
            path: 'overview',
            icon: <FaBook />,
            element: <SuiteOverview />,
          },
        ],
      },
      {
        navbar: true,
        name: 'Execution',
        path: 'execution',
        children: [
          {
            navbar: true,
            name: 'Hisotry',
            path: 'history/:id',
            icon: <FaHistory />,
            element: <SuiteHistory />,
          },
          {
            navbar: true,
            name: 'Tree',
            path: 'tree',
            icon: <FaTree />,
            element: <ExecutionTree />,
          },
        ],
      },
    ],
  },
  {
    name: 'Page not found',
    path: '*',
    element: <Error404 />,
  },
];

export { routes, type RouteDefinition };

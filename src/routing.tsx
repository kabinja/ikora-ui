import type * as React from 'react';
import { Spinner } from '@chakra-ui/react';
import { Suspense, lazy } from 'react';
import { MainLayout } from 'src/ui/layout/main-layout';
import { type IconType } from 'react-icons/lib';

interface RouteDefinition {
  children?: RouteDefinition[];
  name: string;
  icon?: IconType;
  element?: JSX.Element;
  path?: string;
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
        element: <Login />,
      },
      {
        name: 'Register',
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    name: 'Main',
    path: '/',
    element: <MainLayout />,
    children: [
      {
        name: 'Home',
        element: <Home />,
      },
      {
        name: 'Suite',
        path: 'suite',
        children: [
          {
            name: 'Overview',
            path: 'overview',
            element: <SuiteOverview />,
          },
          {
            name: 'Hisotry',
            path: 'history/:id',
            element: <SuiteHistory />,
          },
        ],
      },
      {
        name: 'Execution',
        path: 'execution',
        children: [
          {
            name: 'Tree',
            path: 'tree',
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

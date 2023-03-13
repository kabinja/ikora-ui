import * as React from 'react'
import { Spinner } from '@chakra-ui/react'
import { Suspense, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'
import { MainLayout } from 'src/ui/layout/MainLayout'

const Loading = (): React.ReactElement => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  )
}

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  )
}

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(async () => await import('./pages/auth/login')))
const Register = Loadable(lazy(async () => await import('./pages/auth/register')))

//  * HOME PAGE
const Home = Loadable(lazy(async () => await import('./pages/home')))

//  * FEATURE PAGES
const SuiteOverview = Loadable(lazy(async () => await import('./pages/suite/overview')))
const SuiteHistory = Loadable(lazy(async () => await import('./pages/suite/history')))
const ExecutionTree = Loadable(lazy(async () => await import('./pages/execution/tree')))

// ERROR PAGES
const Error404 = Loadable(lazy(async () => await import('./pages/error/not-found')))

const routes: RouteObject[] = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'suite',
        children: [
          {
            path: 'overview',
            element: <SuiteOverview />
          },
          {
            path: 'history/:id',
            element: <SuiteHistory />
          }
        ]
      },
      {
        path: 'execution',
        children: [
          {
            path: 'tree',
            element: <ExecutionTree />
          }
        ]
      }

    ]
  },
  {
    path: '*',
    element: <Error404 />
  }
]

export { routes }

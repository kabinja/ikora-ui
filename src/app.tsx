import type * as React from 'react';
import { routes } from './routing';
import { useRoutes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'src/theme/index';

export const App: React.FC = () => {
  const content = useRoutes(routes);

  return <ChakraProvider theme={theme}>{content}</ChakraProvider>;
};

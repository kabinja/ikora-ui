import * as React from 'react'
import { routes } from './routing'
import { useRoutes } from 'react-router-dom'
import { ChakraProvider, theme } from '@chakra-ui/react'

export const App = () => {
  const content = useRoutes(routes)

  return (
    <ChakraProvider theme={theme}>
      { content }
    </ChakraProvider>
  )
}

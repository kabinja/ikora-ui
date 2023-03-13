import * as React from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { ChakraProvider, theme } from '@chakra-ui/react'

const AllProviders: React.FC = ({ children }: { children?: React.ReactNode }): React.ReactElement => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions): React.ReactElement => {
  return render(ui, { wrapper: AllProviders, ...options })
}

export { customRender as render }

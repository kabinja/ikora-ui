import { type StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
  colors: {
    gray: {
      700: '#1f2733',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('gray.50', 'gray.800')(props),
        fontFamily: "'Roboto', sans-serif",
      },
      html: {
        fontFamily: "'Roboto', sans-serif",
      },
    }),
  },
};

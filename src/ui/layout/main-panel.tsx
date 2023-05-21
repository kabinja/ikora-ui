import type React from 'react';
import { Box, type ThemingProps, useStyleConfig, type ChakraProps } from '@chakra-ui/react';
import { type Dict } from '@chakra-ui/utils';

interface MainPanelProps extends ChakraProps {
  variant?: ThemingProps<string> & Dict;
  children: React.ReactElement;
}

const MainPanel = ({ variant, children, ...rest }: MainPanelProps): React.ReactElement => {
  const styles = useStyleConfig('MainPanel', { variant });
  return (
    <Box
      __css={styles}
      {...rest}
    >
      {children}
    </Box>
  );
};

export { MainPanel };

import type React from 'react';
import { Box, type ThemingProps, useStyleConfig } from '@chakra-ui/react';
import { type Dict } from '@chakra-ui/utils';

interface MainPanelProps {
  variant: ThemingProps<string> & Dict;
  children: React.ReactElement;
}

const MainPanel = (props: MainPanelProps): React.ReactElement => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig('MainPanel', { variant });
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export { MainPanel };

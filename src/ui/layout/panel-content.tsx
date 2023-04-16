import type React from 'react';
import { Box, type ThemingProps, useStyleConfig } from '@chakra-ui/react';
import { type Dict } from '@chakra-ui/utils';

interface PanelContentProps {
  variant?: ThemingProps<string> & Dict;
  children?: React.ReactElement;
}

const PanelContent = (props: PanelContentProps): React.ReactElement => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig('PanelContent', { variant });
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export { PanelContent };

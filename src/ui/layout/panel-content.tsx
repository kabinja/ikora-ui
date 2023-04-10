import type React from 'react';
import { Box, useStyleConfig } from '@chakra-ui/react';

const PanelContent = (props): React.ReactElement => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig('PanelContent', { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export { PanelContent };

import { Box, type ThemingProps, useStyleConfig } from '@chakra-ui/react';
import { type Dict } from '@chakra-ui/utils';

interface PanelContainerProps {
  variant?: ThemingProps<string> & Dict;
  children?: React.ReactElement;
}

const PanelContainer = (props: PanelContainerProps): React.ReactElement => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig('PanelContainer', { variant });
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export { PanelContainer };

import type React from 'react';
import { Flex, type ThemingProps } from '@chakra-ui/react';
import { type Dict } from '@chakra-ui/utils';

interface SeparatorProps {
  variant?: ThemingProps<string> & Dict;
  children?: React.ReactElement;
}

const Separator = (props: SeparatorProps): React.ReactElement => {
  const { variant, children, ...rest } = props;
  return (
    <Flex
      h="1px"
      w="100%"
      bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
      {...rest}
    >
      {children}
    </Flex>
  );
};

export { Separator };

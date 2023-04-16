import type React from 'react';
import { Flex, type ThemingProps } from '@chakra-ui/react';
import { type Dict } from '@chakra-ui/utils';

interface IconBoxProps {
  variant?: ThemingProps<string> & Dict;
  children?: React.ReactElement;
}

const IconBox = (props: IconBoxProps): React.ReactElement => {
  const { children, ...rest } = props;

  return (
    <Flex alignItems={'center'} justifyContent={'center'} borderRadius={'12px'} {...rest}>
      {children}
    </Flex>
  );
};

export { IconBox };

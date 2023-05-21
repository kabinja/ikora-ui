import type React from 'react';
import { type ChakraProps, Flex } from '@chakra-ui/react';

interface IconBoxProps extends ChakraProps {
  children?: React.ReactElement;
}

const IconBox = ({ children, ...rest }: IconBoxProps): React.ReactElement => {
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={'12px'}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export { IconBox };

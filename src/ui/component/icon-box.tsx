import type React from 'react';
import { Flex } from '@chakra-ui/react';

const IconBox = (props): React.ReactElement => {
  const { children, ...rest } = props;

  return (
    <Flex alignItems={'center'} justifyContent={'center'} borderRadius={'12px'} {...rest}>
      {children}
    </Flex>
  );
};

export { IconBox };

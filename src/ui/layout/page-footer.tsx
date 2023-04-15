import type * as React from 'react';
import { Container, Flex, Stack, Text } from '@chakra-ui/react';
import { Logo } from 'src/ui/assets/logo';

const PageFooter: React.FC = () => {
  return (
    <Flex
      flexDirection={{
        base: 'column',
        xl: 'row',
      }}
      alignItems={{
        base: 'center',
        xl: 'start',
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Logo size={32} />
        <Text>© 2022 Ikora. All rights reserved</Text>
      </Container>
    </Flex>
  );
};

export { PageFooter };

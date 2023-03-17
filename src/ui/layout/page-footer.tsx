import type * as React from 'react';
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Logo } from 'src/ui/assets/logo';

const PageFooter: React.FC = (): React.ReactElement => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
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
    </Box>
  );
};

export { PageFooter };

import { Box, useColorModeValue } from '@chakra-ui/react';
import type React from 'react';

import { SidebarContent } from './sidebar-content';
import { type RouteDefinition } from 'src/routing';

interface SidebarProps {
  logoText: string;
  routes: RouteDefinition[];
}

const Sidebar = ({ logoText, routes }: SidebarProps): React.ReactElement => {
  const variantChange = '0.2s linear';
  const sidebarBg = useColorModeValue('white', 'gray.700');
  const sidebarRadius = '16px';
  const sidebarMargins = '16px 0px 16px 16px';

  return (
    <Box>
      <Box display={{ sm: 'none', xl: 'block' }} position="fixed">
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w="260px"
          maxW="260px"
          ms={{
            sm: '16px',
          }}
          my={{
            sm: '16px',
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
          m={sidebarMargins}
          borderRadius={sidebarRadius}
        >
          <SidebarContent routes={routes} logoText={logoText} />
        </Box>
      </Box>
    </Box>
  );
};

export { Sidebar };

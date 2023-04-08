import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { SidebarContent } from './sidebar-content';

const Sidebar = (): React.ReactElement => {
  const mainPanel = React.useRef();
  const variantChange = '0.2s linear';
  const sidebarBg = useColorModeValue('white', 'gray.700');
  const sidebarRadius = '16px';
  const sidebarMargins = '16px 0px 16px 16px';

  return (
    <Box ref={mainPanel}>
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
          <SidebarContent
            routes={routes}
            logoText={'PURITY UI DASHBOARD'}
            display="none"
            sidebarVariant={sidebarVariant}
          />
        </Box>
      </Box>
    </Box>
  );
};

export { Sidebar };

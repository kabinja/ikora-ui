import { Box, Button, Flex, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { IconBox } from 'src/ui/component/icon-box';
import type React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { type RouteDefinition } from 'src/routing';

interface SidebarContentProps {
  logoText: string;
  routes: RouteDefinition[];
}

const SidebarContent = (props: SidebarContentProps): React.ReactElement => {
  const location = useLocation();
  const activeBg = useColorModeValue('white', 'gray.700');
  const inactiveBg = useColorModeValue('white', 'gray.700');
  const activeColor = useColorModeValue('gray.700', 'white');
  const inactiveColor = useColorModeValue('gray.400', 'gray.400');

  const activeRoute = (routeName: string): string => {
    return location.pathname === routeName ? 'active' : '';
  };

  const isCategory = (route: RouteDefinition): boolean => {
    if (route.children === undefined) {
      return false;
    }
    return route.children.length > 0;
  };

  const createLinks = (routes: RouteDefinition[]): React.ReactElement[] => {
    return routes.map((route) => {
      if (isCategory(route)) {
        return (
          <div key={route.name}>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{
                xl: '12px',
              }}
              mx="auto"
              ps={{
                sm: '10px',
                xl: '16px',
              }}
              py="12px"
            >
              {route.name}
            </Text>
            {createLinks(route.children as RouteDefinition[])}
          </div>
        );
      }

      return (
        <NavLink to={route.path as string} key={route.name}>
          {activeRoute(route.path as string) === 'active' ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={activeBg}
              mb={{
                xl: '12px',
              }}
              mx={{
                xl: 'auto',
              }}
              ps={{
                sm: '10px',
                xl: '16px',
              }}
              py="12px"
              borderRadius="15px"
              w="100%"
              _active={{
                bg: 'inherit',
                transform: 'none',
                borderColor: 'transparent',
              }}
              _focus={{
                boxShadow: 'none',
              }}
            >
              <Flex>
                {typeof route.icon === 'string' ? (
                  <Icon>{route.icon}</Icon>
                ) : (
                  <IconBox bg="teal.300" color="white" h="30px" w="30px" me="12px">
                    {route.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {route.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: '12px',
              }}
              mx={{
                xl: 'auto',
              }}
              py="12px"
              ps={{
                sm: '10px',
                xl: '16px',
              }}
              borderRadius="15px"
              w="100%"
              _active={{
                bg: 'inherit',
                transform: 'none',
                borderColor: 'transparent',
              }}
              _focus={{
                boxShadow: 'none',
              }}
            >
              <Flex>
                {typeof route.icon === 'string' ? (
                  <Icon>{route.icon}</Icon>
                ) : (
                  <IconBox bg={inactiveBg} color="teal.300" h="30px" w="30px" me="12px">
                    {route.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {route.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

  const links = <>{createLinks(props.routes)}</>;

  return (
    <>
      <Stack direction="column" mb="40px">
        <Box>{links}</Box>
      </Stack>
    </>
  );
};

export { SidebarContent };

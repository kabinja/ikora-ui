import { Flex, Icon, LinkBox, StackDivider, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { IconBox } from 'ui/component/icon-box';
import type React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { joinPath, type RouteDefinition } from 'routing';

interface SidebarContentProps {
  logoText: string;
  routes: RouteDefinition[];
}

const SidebarContent = (props: SidebarContentProps): React.ReactElement => {
  const location = useLocation();
  const activeColor = useColorModeValue('gray.700', 'white');
  const inactiveColor = useColorModeValue('gray.400', 'gray.400');

  const isActive = (routeName: string): boolean => {
    const currentPath = location.pathname.trimStart().replace(/^[\/]/g, '');
    return currentPath === routeName;
  };

  const isCategory = (route: RouteDefinition): boolean => {
    if (route.children === undefined) {
      return false;
    }
    return route.children.length > 0;
  };

  const createLinks = (routes: RouteDefinition[], path: string = ""): React.ReactElement[] => {
    return routes
      .filter((route) => route.navbar)
      .map((route) => {
        path = joinPath(path, route.path === undefined ? "" : route.path);

        if (isCategory(route)) {
          return <>{createLinks(route.children as RouteDefinition[], path)}</>;
        }

        return (
          <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
            <NavLink to={path} key={route.name}>
              <Flex>
                {typeof route.icon === 'string' ? (
                  <Icon>{route.icon}</Icon>
                ) : (
                  <IconBox bg="teal.300" color="white" h="30px" w="30px" me="12px">
                    {route.icon}
                  </IconBox>
                )}
                <Text
                  color={isActive(path) ? activeColor : inactiveColor}
                  my="auto"
                  fontSize="sm"
                  decoration="none"
                >
                  {route.name}
                </Text>
              </Flex>
            </NavLink>
          </LinkBox>
        );
      });
  };

  return (
    <>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        align='stretch'
      >
        {createLinks(props.routes)}
      </VStack>
    </>
  );
};

export { SidebarContent };

import type * as React from 'react';
import { Image } from '@chakra-ui/react'

interface LogoProps {
  size: number;
}

const Logo = (props: LogoProps): React.ReactElement => {
  return (
    <Image width={props.size} src='/logo192.png' fallbackSrc='https://via.placeholder.com/150' />
  );
};

export { Logo };

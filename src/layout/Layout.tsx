import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Navigation } from './libs';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Navigation />
      <Box p={{ base: '20px', lg: '100px' }}>{children}</Box>
    </>
  );
}

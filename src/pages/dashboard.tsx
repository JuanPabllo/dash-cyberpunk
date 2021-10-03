import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';

export default function Dashboard() {
  return (
    <Flex direction="column" w="100vw">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />
      </Flex>
    </Flex>
  );
}

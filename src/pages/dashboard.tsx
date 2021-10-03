import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';

export default function Dashboard() {
  return (
    <Flex direction="column" w="100vw">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

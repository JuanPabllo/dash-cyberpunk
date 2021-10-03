import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';

const Charts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export default function Dashboard() {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        '2021-06-23T00:00:00.000Z',
        '2021-06-24T00:00:00.000Z',
        '2021-06-25T00:00:00.000Z',
        '2021-06-26T00:00:00.000Z',
        '2021-06-27T00:00:00.000Z',
        '2021-06-28T00:00:00.000Z',
        '2021-06-29T00:00:00.000Z',
      ],
    },

    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
      },
    },
  };

  const series = [
    {
      name: 'series1',
      data: [21, 65, 142, 65, 43, 131, 87],
    },
  ];

  return (
    <Flex direction="column" w="100vw">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Charts
              options={options}
              series={series}
              type="area"
              height={160}
            />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Charts
              options={options}
              series={series}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

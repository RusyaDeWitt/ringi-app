import {
  Box,
  Flex,
  VStack,
  Text,
  Grid,
  HStack,
  CircularProgressLabel,
  CircularProgress,
  Center,
} from '@chakra-ui/react';
import { StatsCard } from './libs/StatsCard';
import { vacancies } from 'store/vacancies';
import { VacancyCard } from 'components/VacancyCard';

export default function Dashboard() {
  return (
    <Box>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap="20px">
        <StatsCard maxCount={8780} title="Applicants" />
        <StatsCard maxCount={2453} title="Views" />
        <Center h="200px" w="350px">
          <Box textAlign="center">
            <CircularProgress value={40} color="green.400" size="150px">
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
            <Text fontSize="30px" mt="15px" fontWeight="500">
              Q3 Progress
            </Text>
          </Box>
        </Center>
      </Grid>
      <VStack align="left">
        <Text fontSize="20px" mt="40px">
          Your vacancies
        </Text>
        <VStack>
          {vacancies.slice(0, 3).map((vacancy, index) => {
            return <VacancyCard vacancy={vacancy} key={index} isEdit={true} />;
          })}
        </VStack>
      </VStack>
    </Box>
  );
}

import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import { vacancies } from '../../store/vacancies';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { ApplyForm } from './libs/ApplyForm';

export default function ApplyPage() {
  const { id } = useParams();
  const vacancy = vacancies.find((v) => v.id === Number(id));
  const navigate = useNavigate();

  return (
    <Box>
      <Button bgColor="white" onClick={() => navigate('/jobs')}>
        <ArrowBackIcon />
        Back
      </Button>
      <VStack align="left" gap={{ base: '10px', lg: '15px' }} mt="20px">
        <Flex gap="20px">
          <Text fontSize={{ base: '20px', lg: '35px' }}>{vacancy?.title}</Text>
          <Text fontSize={{ base: '20px', lg: '35px' }}>{vacancy?.salary}</Text>
        </Flex>
        <Text fontSize={{ base: '15px', lg: '20px' }}>{vacancy?.description}</Text>
        <Box bgColor="gray.200" w="fit-content" p="5px 15px 5px 15px" borderRadius="16px">
          <Text fontSize={{ base: '10px', lg: '15px' }}>{vacancy?.location}</Text>
        </Box>
        <ApplyForm />
      </VStack>
    </Box>
  );
}

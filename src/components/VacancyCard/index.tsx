import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Vacancy } from 'store/vacancies/types';
import { useState } from 'react';
import { ArrowRightIcon, EditIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

type Props = {
  vacancy: Vacancy;
  isEdit?: boolean;
};
export function VacancyCard({ vacancy, isEdit }: Props) {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <Box p="20px" border="1px black solid" borderRadius="24px" w="100%" mt="20px">
      <Box>
        <Flex justifyContent="space-between">
          <Text fontSize="25px">{vacancy.title}</Text>
          {isEdit ? (
            <Button gap="10px" color="gray" bgColor="white">
              Edit <EditIcon />
            </Button>
          ) : (
            <Button
              gap="10px"
              color="green"
              bgColor="white"
              onClick={() => navigate(`/apply/${vacancy.id}`)}
            >
              Apply <ArrowRightIcon />
            </Button>
          )}
        </Flex>
        <Text fontSize="20px">{vacancy.salary}</Text>
        <Text fontSize="10px" mt="10px">
          {vacancy.location}
        </Text>
        {isToggle ? (
          <>
            <Text fontSize="15px" mt="10px">
              {vacancy.description}
              <Text
                fontSize="13px"
                textDecoration="underline"
                cursor="pointer"
                onClick={() => setIsToggle(false)}
              >
                Hide
              </Text>
            </Text>
          </>
        ) : (
          <Text
            fontSize="13px"
            textDecoration="underline"
            cursor="pointer"
            onClick={() => setIsToggle(true)}
          >
            Description
          </Text>
        )}
      </Box>
    </Box>
  );
}

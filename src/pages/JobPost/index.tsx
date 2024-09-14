import {
  Box,
  Button,
  Center,
  Checkbox,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';

const cities = [
  'Seattle, WA',
  'Boston, MA',
  'Philadelphia, PA',
  'Miami, FL',
  'Las Vegas, NV',
  'Austin, TX',
  'Dallas, TX',
  'Denver, CO',
  'San Diego, CA',
  'Nashville, TN',
  'Remote',
  'Phoenix, AZ',
  'Orlando, FL',
  'Cleveland, OH',
  'Charlotte, NC',
];

const categories = [
  'IT',
  'Restaurant',
  'Medicine',
  'Accounting',
  'Construction',
  'Marketing',
  'Finance',
];
export default function JobPost() {
  return (
    <Center>
      <Box w="600px">
        <Text fontSize={{ base: '25px', lg: '30px' }}>Create Vacancy</Text>
        <VStack align="left" mt="30px">
          <Text fontSize={{ base: '20px', lg: '15px' }}>Job title</Text>
          <Input placeholder="Job Title" />
          <Text fontSize={{ base: '20px', lg: '15px' }}>Description</Text>
          <Textarea placeholder="Job Description" />
          <Text fontSize={{ base: '20px', lg: '15px' }}>Required Skills</Text>
          <Textarea placeholder="Required Skills" />
          <Box mt="15px">
            <Text fontSize="15px">Category 🧑‍💻</Text>
            <VStack align="left" mt="10px" maxH="150px" overflowY="scroll">
              {categories.map((category, index) => {
                return (
                  <Checkbox colorScheme="red" key={index}>
                    {category}
                  </Checkbox>
                );
              })}
            </VStack>
          </Box>
          <Box mt="15px">
            <Text fontSize="15px">Location 🌎</Text>
            <VStack align="left" mt="10px" maxH="150px" overflowY="scroll">
              {cities.map((city, index) => {
                return (
                  <Checkbox colorScheme="red" key={index}>
                    {city}
                  </Checkbox>
                );
              })}
            </VStack>
          </Box>
          <Box mt="15px">
            <Text fontSize="15px">Salary 💵</Text>
            <HStack mt="10px">
              <Input placeholder="Min" />
              <Text>-</Text>
              <Input placeholder="Max" />
            </HStack>
          </Box>
          <Button colorScheme="green" mt="20px">
            Create
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

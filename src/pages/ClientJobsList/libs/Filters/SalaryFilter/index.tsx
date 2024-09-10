import { Box, Checkbox, HStack, Input, Text, VStack } from '@chakra-ui/react';

export function SalaryFilter() {
  return (
    <Box mt="15px">
      <Text fontSize="15px">Salary 💵</Text>
      <HStack mt="10px">
        <Input placeholder="Min" />
        <Text>-</Text>
        <Input placeholder="Max" />
      </HStack>
    </Box>
  );
}

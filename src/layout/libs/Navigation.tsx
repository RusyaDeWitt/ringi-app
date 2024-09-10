import { Box, Flex, Text } from '@chakra-ui/react';

export function Navigation() {
  return (
    <Flex
      w="100%"
      bgColor="#982B1C"
      p={{ base: '10px 20px 10px 20px', lg: '10px 100px 10px 100px' }}
      justifyContent="space-between"
    >
      <Text
        fontSize={{ base: '25px', lg: '36px' }}
        color="white"
        fontWeight="500"
        cursor="pointer"
        w="fit-content"
        letterSpacing="10px"
      >
        Ringi
      </Text>
      <Box mt="10px">
        <Text
          fontSize={{ base: '15px', lg: '15px' }}
          color="white"
          cursor="pointer"
          w="fit-content"
          p="5px 10px 5px 10px"
        >
          Log in
        </Text>
      </Box>
    </Flex>
  );
}

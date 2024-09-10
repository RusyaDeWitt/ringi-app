import { Box, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  img: string;
};
export function Card({ title, img }: Props) {
  const navigate = useNavigate();

  return (
    <Box
      maxW="340px"
      h="200px"
      position="relative"
      cursor="pointer"
      onClick={() => navigate('/jobs')}
    >
      <Image src={img} borderRadius="16px" w="100%" h="100%" objectFit="cover" />
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        fontWeight="bold"
        fontSize="xl"
        textAlign="center"
      >
        {title}
      </Text>
    </Box>
  );
}

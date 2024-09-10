import { Box, Flex, Grid, HStack, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Categories } from './libs/Categories';
import { StatsCard } from './libs';

export default function WelcomePage() {
  return (
    <Box>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap={{ base: '0px', lg: '30px' }}
      >
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'linear',
            duration: '1s',
          }}
        >
          <Image
            src="https://i.pinimg.com/originals/1f/f3/3e/1ff33ede4825194fdbcf0f9b5e27dc93.gif"
            objectFit="cover"
            borderRadius="16px"
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: '1',
          }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Text
            mt={{ base: '5%', lg: '25%' }}
            fontSize={{ base: '35px', lg: '55px', xl: '65px' }}
            fontWeight="500"
            color="#982B1C"
            maxW="100%"
          >
            Ringi, start building your dream with us!
          </Text>
        </Box>
      </Grid>
      <Grid
        mt="10%"
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={{ base: '20px', lg: '30px' }}
      >
        <StatsCard title="Vacancies" maxCount={9023} />
        <StatsCard title="Applications" maxCount={23405} />
        <StatsCard title="Companies" maxCount={11234} />
      </Grid>
      <Box mt="10%">
        <Text
          p="10px"
          fontSize={{ base: '20px', lg: '30px' }}
          fontWeight="500"
          color="#982B1C"
          maxW="100%"
        >
          Job Categories
        </Text>
        <Categories />
      </Box>
    </Box>
  );
}

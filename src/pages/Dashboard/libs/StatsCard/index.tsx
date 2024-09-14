import { useEffect, useState } from 'react';
import { Box, Center, Stat, StatArrow, StatHelpText, Text, VStack } from '@chakra-ui/react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

type Props = {
  title: string;
  maxCount: number;
  isDashboard?: boolean;
};
export function StatsCard({ title, maxCount }: Props) {
  const [currentStat, setCurrentStat] = useState<number>(0);
  const count = useMotionValue(currentStat);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (maxCount) {
      setCurrentStat(maxCount);
    }
  }, [maxCount]);

  useEffect(() => {
    const controls = animate(count, currentStat, { duration: 2.5 });

    return () => controls.stop();
  }, [count, currentStat]);

  return (
    <Box
      textAlign="center"
      w="350px"
      border="1px #982B1C solid"
      h="200px"
      borderRadius="16px"
      pt="20px"
    >
      <Box as={motion.div} fontSize="50px">
        {rounded}
      </Box>
      <Text fontSize="30px" mt="15px" fontWeight="500">
        {title}
      </Text>
      <Stat>
        <StatHelpText>
          <StatArrow type="increase" />
          9.05%
        </StatHelpText>
      </Stat>
    </Box>
  );
}

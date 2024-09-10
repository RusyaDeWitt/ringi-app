import { useEffect, useState } from 'react';
import { Box, Center, Text, VStack } from '@chakra-ui/react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

type Props = {
  title: string;
  maxCount: number;
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
    <Box textAlign="center" w="auto">
      <Text fontSize="30px" mt="5px" fontWeight="500">
        {title}
      </Text>
      <Box as={motion.div} fontSize="50px" color="#982B1C">
        {rounded}
      </Box>
    </Box>
  );
}

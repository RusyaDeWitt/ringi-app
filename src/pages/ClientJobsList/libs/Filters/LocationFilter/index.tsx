import { Box, Checkbox, VStack, Text } from '@chakra-ui/react';

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

type Props = {
  selectedLocations: string[];
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>;
};
export function LocationFilter({ selectedLocations, setSelectedLocations }: Props) {
  const handleLocationChange = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((item) => item !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  return (
    <Box mt="15px">
      <Text fontSize="15px">Location 🌎</Text>
      <VStack align="left" mt="10px" maxH="150px" overflowY="scroll">
        {cities.map((city, index) => {
          return (
            <Checkbox
              colorScheme="red"
              key={index}
              onChange={() => handleLocationChange(city)}
              isChecked={selectedLocations.includes(city)}
            >
              {city}
            </Checkbox>
          );
        })}
      </VStack>
    </Box>
  );
}

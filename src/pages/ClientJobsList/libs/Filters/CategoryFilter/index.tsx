import { Box, Checkbox, VStack, Text } from '@chakra-ui/react';

const categories = [
  'IT',
  'Restaurant',
  'Medicine',
  'Accounting',
  'Construction',
  'Marketing',
  'Finance',
];

type Props = {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

export function CategoryFilter({ selectedCategories, setSelectedCategories }: Props) {
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <Box mt="15px">
      <Text fontSize="15px">Category 🧑‍💻</Text>
      <VStack align="left" mt="10px" maxH="150px" overflowY="scroll">
        {categories.map((category, index) => {
          return (
            <Checkbox
              colorScheme="red"
              key={index}
              onChange={() => handleCategoryChange(category)}
              isChecked={selectedCategories.includes(category)}
            >
              {category}
            </Checkbox>
          );
        })}
      </VStack>
    </Box>
  );
}

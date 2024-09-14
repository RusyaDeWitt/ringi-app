import { useState } from 'react';
import { Box, Grid, GridItem, VStack, Text, Button, HStack } from '@chakra-ui/react';
import { SearchInput } from './libs';
import { vacancies } from 'store/vacancies';
import { VacancyCard } from 'components/VacancyCard';
import { LocationFilter, SalaryFilter, CategoryFilter } from './libs/Filters/';

export default function ClientJobsList() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredVacancies = vacancies.filter((vacancy) => {
    const matchesCategory =
      selectedCategories.length > 0 ? selectedCategories.includes(vacancy.category) : true;
    const matchedLocation =
      selectedLocations.length > 0 ? selectedLocations.includes(vacancy.location) : true;
    const matchesSearch = searchText
      ? vacancy.title.toLowerCase().includes(searchText.toLowerCase())
      : true;

    return matchesCategory && matchedLocation && matchesSearch;
  });

  const totalPages = Math.ceil(filteredVacancies.length / 5);

  // Get items for the current page
  const currentItems = filteredVacancies.slice((currentPage - 1) * 5, currentPage * 5);

  return (
    <Box p={{ base: '0', lg: '0 15% 0 15%' }}>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: '25% 1fr' }}
        gap={{ base: '0px', lg: '100px' }}
      >
        <GridItem>
          <VStack align="left" gap="20px">
            <Text fontSize="25px">Filters</Text>
            <LocationFilter
              selectedLocations={selectedLocations}
              setSelectedLocations={setSelectedLocations}
            />
            <CategoryFilter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
            <SalaryFilter />
          </VStack>
        </GridItem>
        <GridItem mt={{ base: '30px', lg: '0px' }}>
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
          <VStack mt="15px">
            {currentItems.map((vacancy, index) => {
              return <VacancyCard vacancy={vacancy} key={index} />;
            })}
          </VStack>
          <HStack mt="20px" spacing="10px" justify="center">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Text>
              Page {currentPage} of {totalPages}
            </Text>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

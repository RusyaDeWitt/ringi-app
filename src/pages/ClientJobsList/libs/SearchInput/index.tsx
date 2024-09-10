import { ChangeEvent } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

type Props = {
  searchText: string;
  setSearchText: (value: string) => void;
};

export function SearchInput({ searchText, setSearchText }: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <InputGroup borderRadius="50px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        value={searchText}
        onChange={handleChange}
        textStyle="text-medium"
        fontWeight="normal"
        type="text"
        borderRadius="50px"
        placeholder="Search"
      />
    </InputGroup>
  );
}

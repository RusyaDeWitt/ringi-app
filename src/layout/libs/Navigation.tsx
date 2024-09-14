import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export function Navigation() {
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });

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
        onClick={() => navigate('/welcome')}
      >
        Ringi
      </Text>
      {isMobile ? (
        <Menu>
          <MenuButton fontSize="30px" color="white">
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Text
                fontSize={{ base: '15px', lg: '15px' }}
                cursor="pointer"
                w="fit-content"
                p="5px 10px 5px 10px"
                onClick={() => navigate('/jobs')}
              >
                Vacancies
              </Text>
            </MenuItem>
            <MenuItem>
              <Text
                fontSize={{ base: '15px', lg: '15px' }}
                cursor="pointer"
                w="fit-content"
                p="5px 10px 5px 10px"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Text>
            </MenuItem>
            <MenuItem>
              <Text
                fontSize={{ base: '15px', lg: '15px' }}
                cursor="pointer"
                w="fit-content"
                p="5px 10px 5px 10px"
                onClick={() => navigate('/post-job')}
              >
                Post job
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Flex mt="10px" gap="20px">
          <Text
            fontSize={{ base: '15px', lg: '15px' }}
            color="white"
            cursor="pointer"
            w="fit-content"
            p="5px 10px 5px 10px"
            onClick={() => navigate('/jobs')}
          >
            Vacancies
          </Text>
          <Text
            fontSize={{ base: '15px', lg: '15px' }}
            color="white"
            cursor="pointer"
            w="fit-content"
            p="5px 10px 5px 10px"
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </Text>
          <Text
            fontSize={{ base: '15px', lg: '15px' }}
            color="white"
            cursor="pointer"
            w="fit-content"
            p="5px 10px 5px 10px"
            onClick={() => navigate('/post-job')}
          >
            Post job
          </Text>
        </Flex>
      )}
    </Flex>
  );
}

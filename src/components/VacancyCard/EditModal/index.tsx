import { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  VStack,
  Text,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { Vacancy } from 'store/vacancies/types';

type Props = {
  vacancy: Vacancy;
};
export function EditModal({ vacancy }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button gap="10px" color="gray" bgColor="white" onClick={() => setIsOpen(true)}>
        Edit <EditIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <VStack align="left" gap="20px">
              <Box>
                <Text fontSize="20px">Job title</Text>
                <Input value={vacancy.title} mt="10px" />
              </Box>
              <Box>
                <Text fontSize="20px">Description</Text>
                <Textarea value={vacancy.description} mt="10px" h="200px" />
              </Box>
              <Box>
                <Text fontSize="20px">Location</Text>
                <Input value={vacancy.location} mt="10px" />
              </Box>
              <Box>
                <Text fontSize="20px">Salary</Text>
                <Input value={vacancy.salary} mt="10px" />
              </Box>
              <Button colorScheme="orange">Save</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

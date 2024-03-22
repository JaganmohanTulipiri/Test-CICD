import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
  AbsoluteCenter,
} from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';

const SaveManageSuccess = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} bg='green' color={'white'}>
        Done
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontWeight='bold'
              pt='4rem'
              textAlign={'center'}
              fontSize='2xl'
              color={'green'}
            >
              Add Class Successfully
            </Text>

            <Box position='relative' h='100px'>
              <AbsoluteCenter axis='both'>
                <Button onClick={onClose}>
                  <CheckIcon color={'#4CBB17'} fontSize={'2xl'} />
                </Button>
              </AbsoluteCenter>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SaveManageSuccess;

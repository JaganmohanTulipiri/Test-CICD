import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  Text,
} from '@chakra-ui/react';
import { FaClipboardList } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

import { useDisclosure } from '@chakra-ui/react';

function DeleteModalManage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <RiDeleteBinLine
        size={25}
        fill='#0180C8'
        cursor={'pointer'}
        onClick={onOpen}
        bg='green'
        color={'white'}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginTop='300' w='50'>
          <Center margin='5'>
            <RiDeleteBinLine fill='red' />
          </Center>

          <div className='px-7'>
            <p className='text-sm text-center font-poppins-regular'>
              Are You Sure delete the Class?
            </p>
          </div>

          <ModalCloseButton />
          <ModalBody padding='15'>
            <Center>
              <Button mr={3} onClick={onClose} size='sm'>
                No
              </Button>
              <Button colorScheme='blue' mr={3} onClick={onClose} size='sm'>
                Yes
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteModalManage;

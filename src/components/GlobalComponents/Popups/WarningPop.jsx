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
import { AiFillExclamationCircle } from 'react-icons/ai';

import { useDisclosure } from '@chakra-ui/react';
import ADMINISTERTEST from '../../../../src/assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ADMINISTERTEST.svg';

function WarningPop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        background='green'
        color='white'
        px='2rem'
        size='xs'
        height='5vh'
        colorScheme='green'
        display='hidden'
      >
        Save
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginTop='300'>
          <Center margin='5'>
            <AiFillExclamationCircle fill='#b30000' />
          </Center>

          <div className='px-7'>
            <p className='text-sm  font-poppins-bold'>
              you have entered Start and End Dates beyond{' '}
              <span className='text-red'>60 Days</span>
            </p>
            <p className='text-sm text-center font-poppins-regular'>
              End dates determines the age of students
            </p>

            <p className='text-sm text-center font-poppins-regular'>
              keep a small accurate window if possible
            </p>
          </div>

          <ModalCloseButton />
          <ModalBody padding='15'>
            <Center>
              <Button colorScheme='blue' mr={3} onClick={onClose} size='sm'>
                Continue
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default WarningPop;

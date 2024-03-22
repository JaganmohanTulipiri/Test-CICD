import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

import { useDisclosure } from '@chakra-ui/react';

export const ManageClassPop = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} textDecoration='underline' px={-1}>
        Add Classes
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size='xs'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <p className='text-[0.8rem] text-primary'>Add a class</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Class Name</FormLabel>
              {/* <Input ref={initialRef} placeholder='First name' /> */}
              <input
                placeholder=''
                className='w-[17rem] bg-[#f2f2f2] rounded-lg mb-4'
              />
              <FormLabel>Start Date</FormLabel>
              <input
                placeholder=''
                className='w-[17rem] bg-[#f2f2f2] rounded-lg mb-4'
              />
              <FormLabel>End Date</FormLabel>
              <input
                placeholder=''
                className='w-[17rem] bg-[#f2f2f2] rounded-lg mb-4'
              />
              <FormLabel>Select School</FormLabel>
              <Select placeholder='Select option' size='xs' mb='5' variant='filled'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <FormLabel>Local Identifier</FormLabel>
              <input
                placeholder=''
                className='w-[17rem] bg-[#f2f2f2] rounded-lg mb-4'
              />
            </FormControl>
          </ModalBody>

          <ModalFooter alignItems='center'>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

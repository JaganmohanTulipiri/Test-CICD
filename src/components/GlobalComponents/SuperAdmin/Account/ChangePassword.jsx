import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  Heading,
  CardFooter,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Box>
        <Link background='none' border='none' onClick={onOpen}>
          <Text
            fontSize={{ base: '14px', md: '13px', lg: '16px' }}
            fontFamily={'body'}
            mt='5'
            mb='3'
            textDecoration={'underline'}
          >
            Change Password
          </Text>
        </Link>
      </Box>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent p='5'>
          <ModalCloseButton />
          <ModalBody marginTop='3'>
            <Stack spacing='3'>
              <Center>
                <Heading size='md' color='#0081c8'>
                  Change Password
                </Heading>
              </Center>
              <Box p='1'>
                <Input
                  type='password'
                  placeholder='Enter Old Password'
                  borderColor='gray'
                  h='3rem'
                ></Input>
              </Box>
              <Box p='1'>
                <Input
                  type='password'
                  borderColor='gray'
                  h='3rem'
                  placeholder='Enter New Password'
                ></Input>
              </Box>
              <Text fontSize='xs' p='1'>
                14-characters minimum, Must contain a capital letter, must
                contain a small letter, Must contain a number, Must contain a
                special Character(Ex:@,$,#)
              </Text>
              <Box p='1'>
                <Input
                  type='password'
                  borderColor='gray'
                  h='3rem'
                  placeholder='Confirm New Password'
                ></Input>
              </Box>
            </Stack>

            <Center>
              <ButtonGroup gap='4' marginTop='5'>
                <Button
                  width='7rem'
                  color='black'
                  borderRadius='3xl'
                  backgroundColor='#EEEEEE'
                  onClick={onClose}
                >
                  Cancel
                </Button>

                <Button
                  backgroundColor='#0081C8'
                  width='7rem'
                  color='white'
                  borderRadius='3xl'
                  onClick={onClose}
                >
                  Save
                </Button>
              </ButtonGroup>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangePassword;

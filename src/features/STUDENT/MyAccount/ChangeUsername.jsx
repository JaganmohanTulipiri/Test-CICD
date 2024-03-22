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

const ChangeUsername = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const { isPopUpShow, setIsPopUpShow } = props;

  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isPopUpShow}
        onClose={() => {
          setIsPopUpShow(false);
          onClose;
        }}
        onClick={onOpen}
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
                  Change UserName
                </Heading>
              </Center>
              <Box p='1'>
                <Input
                  type='text'
                  placeholder='Enter Old Username'
                  borderColor='gray'
                  h={{ base: '2rem', md: '3rem', lg: '3rem' }}
                ></Input>
              </Box>
              <Box p='1'>
                <Input
                  type='text'
                  borderColor='gray'
                  h={{ base: '2rem', md: '3rem', lg: '3rem' }}
                  placeholder='Enter New Username'
                ></Input>
              </Box>

              <Box p='1'>
                <Input
                  type='text'
                  borderColor='gray'
                  h={{ base: '2rem', md: '3rem', lg: '3rem' }}
                  placeholder='Confirm New Username'
                ></Input>
              </Box>
            </Stack>

            <Center>
              <ButtonGroup gap='4' marginTop='5'>
                <Button
                  width={{ base: '5rem', md: '5rem', lg: '7rem' }}
                  color='black'
                  borderRadius='3xl'
                  backgroundColor='#EEEEEE'
                  onClick={onClose}
                  fontFamily={'body'}
                  fontSize={{ base: '13px', md: '13px', lg: '15px' }}
                >
                  Cancel
                </Button>

                <Button
                  backgroundColor='#0081C8'
                  width={{ base: '5rem', md: '5rem', lg: '7rem' }}
                  color='white'
                  onClick={onClose}
                  rounded='3xl'
                  fontFamily={'body'}
                  fontSize={{ base: '13px', md: '13px', lg: '15px' }}
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

export default ChangeUsername;

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

const ChangeUsername = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Box>
        <Link
          background='none'
          border='none'
          onClick={onOpen}
          fontSize='sm'
          textDecoration='underline'
        >
          <Text
            whiteSpace='nowrap'
            mt='5'
            fontSize={{ base: '14px', md: '13px', lg: '16px' }}
            fontFamily={'body'}
            mb='3'
            textDecoration={'underline'}
          >
            Change Username
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
                  Change Username
                </Heading>
              </Center>
              <Box p='1'>
                <Input
                  type='text'
                  placeholder='Enter Old Username'
                  borderColor='gray'
                  h='3rem'
                ></Input>
              </Box>
              <Box p='1'>
                <Input
                  type='text'
                  borderColor='gray'
                  h='3rem'
                  placeholder='Enter New Username'
                ></Input>
              </Box>

              <Box p='1'>
                <Input
                  type='text'
                  borderColor='gray'
                  h='3rem'
                  placeholder='Confirm New Username'
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

export default ChangeUsername;

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
  ModalHeader,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChangePassword = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(true);
  const finalRef = React.useRef(null);
  const { isPopUpShowPwd, setIsPopUpShowPwd } = props;

  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isPopUpShowPwd}
        onClose={() => {
          setIsPopUpShowPwd(false);
          onClose;
        }}
        onClick={onOpen}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent p='5'>
          <ModalCloseButton />

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
                  h={{ base: '2rem', md: '3rem', lg: '3rem' }}
                ></Input>
              </Box>
              <Box p='1'>
                <Input
                  type='password'
                  borderColor='gray'
                  h={{ base: '2rem', md: '3rem', lg: '3rem' }}
                  placeholder='Enter New Password'
                ></Input>
              </Box>
              {!show ? (
                <>
                  {' '}
                  <Text fontSize='xs' p='1'>
                    14-characters minimum, Must contain a capital letter, must
                    contain a small letter, Must contain a number, Must contain
                    a special Character(Ex:@,$,#)
                  </Text>
                </>
              ) : null}
              <Box p='1'>
                <Input
                  type='password'
                  borderColor='gray'
                  h={{ base: '2rem', md: '3rem', lg: '3rem' }}
                  placeholder='Confirm New Password'
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

export default ChangePassword;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  Stack,
  Center,
  Heading,
  ButtonGroup,
  Input,
} from '@chakra-ui/react';

import React from 'react';

function ForgetDistrict(props) {
  const { isPopUpShowCode, setIsPopUpShowCode } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isPopUpShowCode}
        onClose={() => {
          setIsPopUpShowCode(false);
          onClose;
        }}
        onClick={onOpen}
        borderRadius={4}
        isCentered
        mt='10'
      >
        <ModalOverlay />
        <ModalContent p='5'>
          <ModalCloseButton />
          <ModalBody marginTop='3'>
            <Stack spacing='3'>
              <Center>
                <Heading size='md' color='#0081c8'>
                  Forget District Code?
                </Heading>
              </Center>

              <Box p='1'>
                <Input
                  type='password'
                  borderColor='gray'
                  h={{ base: '2rem', md: '3rem', lg: '3rem' }}
                  placeholder='Zip Code'
                ></Input>
                <Input
                  mt='4'
                  type='password'
                  borderColor='gray'
                  h={{ base: '2rem', md: '3rem', lg: '3rem' }}
                  placeholder='District/School'
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
                  onClick={() => {
                    setIsPopUpShowCode(false);
                  }}
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
}

export default ForgetDistrict;

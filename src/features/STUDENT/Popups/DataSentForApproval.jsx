import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Input,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  Text,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsEditClicked } from '../../../store/slices/studentSlice/studentSlice';
import clipBoardIcon from '../Icons/writing-pad-clipboard-icon.svg';

const DataSentForApproval = () => {
  const dispatch = useDispatch();

  const isEditClicked = useSelector((state) => state?.student?.isEditClicked);

  const enterTestResultsResponse = useSelector(
    (state) => state?.student?.enterTestResultsResponse?.response
  );

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      {isEditClicked && isEditClicked ? (
        <Button
          fontSize='sm'
          fontFamily='poppins'
          color='white'
          bgColor='primary'
          borderRadius='full'
          borderRightWidth='1px'
          borderColor='gray'
          w={{ base: '80%', md: '10%', lg: '20%' }}
          px='10'
          type='button'
          onClick={() => {
            dispatch(setIsEditClicked(false));
            // navigate('/role/Student/EnterTestResults')
          }}
        >
          Edit
        </Button>
      ) : (
        <Button
          fontSize='sm'
          fontFamily='poppins'
          color='white'
          bgColor='primary'
          borderRadius='full'
          borderRightWidth='1px'
          borderColor='gray'
          px='10'
          w={{ base: '80%', md: '10%', lg: '20%' }}
          type='submit'
          onClick={onOpen}
        >
          Send for Approval
        </Button>
      )}

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p='9'>
            <Stack spacing='2' marginTop='3'>
              <Center>
                <Image src={clipBoardIcon} width='10' />
              </Center>
              <Center>
                <Text marginTop='3'>Data Sent for Approval</Text>
              </Center>

              <Center>
                <Button
                  backgroundColor='#1890ff'
                  color='white'
                  marginTop='4'
                  width='40'
                  borderRadius='2xl'
                  onClick={() => {
                    navigate(`/role/Student/EnterTestResults`);

                    dispatch(
                      setIsEditClicked(enterTestResultsResponse?.results)
                    );

                    onClose;
                  }}
                >
                  Ok
                </Button>
              </Center>
              <Spacer />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DataSentForApproval;

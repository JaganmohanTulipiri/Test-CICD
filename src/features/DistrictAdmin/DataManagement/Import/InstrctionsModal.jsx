import React from 'react';
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
  Box,
  Stack,
  Text,
  Flex,
  Input,
  RadioGroup,
  Radio,
  HStack,
} from '@chakra-ui/react';
import { instructions } from '../../config/config';
import InstrctionsIcon from '../../../../assets/customIcons/InstructionsIcon.svg';

import Column from 'antd/es/table/Column';
import NegativeButton from '../../../../components/NegativeButton';
import PositiveButton from '../../../../components/PositiveButton';

const InstructionsModal = (props) => {
  const { title, instructionsList } = instructions;

  const { instructionsModal, setInstructionsModal } = props;
  const { onClose } = useDisclosure();

  return (
    <Modal
      size='2xl'
      onClose={onClose}
      isOpen={instructionsModal}
      isCentered
      useInert={true}
      borderColor='transparent'
    >
      <ModalOverlay />
      <ModalContent
        p='4'
        h={{ base: '60vh', md: 'auto', lg: 'auto' }}
        overflow={'scroll'}
        className='example'
      >
        <HStack>
          <Text
             textStyle={'textHead'}
            as='span'
            textDecoration='underline'
          >
            {title}
          </Text>
          <Box width='6' height='6'>
            <img w='full' h='full' src={InstrctionsIcon} />
          </Box>
        </HStack>
        <ModalCloseButton onClick={() => setInstructionsModal(false)} />
        <ModalBody>
          <Stack spacing={4} color='black-2' textStyle='p'>
            {instructionsList.map((instruction, index) => {
              return (
                <Text
                   textStyle={'textHead'}
                  key={index}
                >
                  {instruction}
                </Text>
              );
            })}
          </Stack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default InstructionsModal;

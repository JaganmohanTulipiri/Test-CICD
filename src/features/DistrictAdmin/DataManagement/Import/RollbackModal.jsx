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
} from '@chakra-ui/react';
import NegativeButton from '../../../../components/NegativeButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  getGetImportHistory,
  getRollBackImportData,
} from '../../../authentication/components/schoolAdmin/schoolAdminSlice';

const RollBackModal = (props) => {
  const { roleBackModal, setRoleBackModal, importId } = props;
  const { onClose } = useDisclosure();

  const dispatch = useDispatch();

  const token = useSelector((state) => state?.profile?.token);

  const clickToSave = () => {
    dispatch(getRollBackImportData({ importId, token }));
    setRoleBackModal(false);
    setTimeout(() => {
      dispatch(getGetImportHistory({ token }));
    }, '2000');
  };

  return (
    <Modal
      size='4xl'
      onClose={onClose}
      isOpen={roleBackModal}
      isCentered
      useInert={true}
      borderColor='transparent'
    >
      <ModalOverlay />
      <ModalContent p='4'>
        <ModalHeader
         textStyle={'textHead'}
        >
          CONFIRM IMPORT ROLLBACK
        </ModalHeader>
        <ModalCloseButton onClick={() => setRoleBackModal(false)} />
        <ModalBody>
          <Flex direction='column' gap='6'>
            <Stack spacing={4}>
              <Text
                textStyle={'textHead'}
              >
                This option allows you to delete all students, teachers,
                classes, and assignments that were created during this report
                <Text as='b'> EXCEPT FOR </Text>any records that have associated
                test event data. This will <Text as='b'> NOT </Text>undo only
                updates the import made to existing records, with the exception
                of reactivating records that were marked for deletion. <br />
                <br />
                Only your most recent import may be rolled back.
              </Text>
              <Flex justify='center'>
                <Text
                  color='red'
                  as='b'
                  textStyle={'textHead'}
                >
                  Are you sure want to continue?
                </Text>
              </Flex>
            </Stack>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex justify='center' gap={8} width={'full'}>
            <Box onClick={() => setRoleBackModal(false)}>
              <NegativeButton text={'Canel'} />
            </Box>
            <Box onClick={clickToSave}>
              <Button
                color='white'
                borderRadius='2xl'
                backgroundColor='primary'
                width='10rem'
                textStyle={'textHead'}
              >
                Rollback Import
              </Button>
            </Box>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RollBackModal;

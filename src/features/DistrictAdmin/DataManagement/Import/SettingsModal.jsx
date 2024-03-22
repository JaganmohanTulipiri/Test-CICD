import React, { useEffect, useState } from 'react';
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
} from '@chakra-ui/react';
import { settingsData } from '../../config/config';
import Column from 'antd/es/table/Column';
import NegativeButton from '../../../../components/NegativeButton';
import PositiveButton from '../../../../components/PositiveButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAddUpdateImportSettings,
  getGetImportSettings,
} from '../../../authentication/components/schoolAdmin/schoolAdminSlice';
import ImportSettingsSuccessModal from './ImportSettingsSuccessModal';

const SettingsModal = (props) => {
  const { title, heading, update, typeOfImport } = settingsData;

  const dispatch = useDispatch();

  const token = useSelector((state) => state?.profile?.token);
  const importsSettingsData = useSelector(
    (state) => state?.schoolAdmin?.getImportSettings?.data?.response
  );

  const { settingsModal, setSettingsModal } = props;
  const { onClose } = useDisclosure();

  const [importSettings, setImportSettings] = useState({
    updateStatus: '0',
    typeOfImports: '0',
  });
  const getImportSetings = useSelector(
    (state) => state?.schoolAdmin?.getImportSettings
  );

  console.log(getImportSetings, 'getImportSetingsgetImportSetings');

  const clickToSave = () => {
    const finalBody = {
      update_details_status:
        importSettings?.updateStatus === '1' ? true : false,
      Type_of_import_status:
        importSettings?.typeOfImports === '1' ? true : false,
    };

    dispatch(getAddUpdateImportSettings({ finalBody, token }));
    setSettingsModal(false);
  };

  useEffect(() => {
    setImportSettings({
      updateStatus: importsSettingsData?.update_details_status ? '1' : '0',
      typeOfImports: importsSettingsData?.Type_of_import_status ? '1' : '0',
    });
  }, [importsSettingsData]);

  useEffect(() => {
    dispatch(getGetImportSettings({ token }));
  }, [settingsModal, dispatch]);

  console.log(importSettings, 'details=>');

  return (
    <>
      <Modal
        size='xl'
        onClose={onClose}
        isOpen={settingsModal}
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
          <ModalHeader textStyle={'textHead'}>{title}</ModalHeader>
          <ModalCloseButton onClick={() => setSettingsModal(false)} />
          <ModalBody>
            <Flex direction='column' gap='6'>
              <Text textStyle={'textHead'} color='primary'>
                {heading}
              </Text>
              <Stack spacing={4}>
                <Text
                  textStyle={'textHead'}
                  whiteSpace='nowrap'
                  fontWeight={'bold'}
                >
                  {update.name}
                </Text>
                <RadioGroup
                  pl={4}
                  textStyle={'textHead'}
                  onChange={(e) =>
                    setImportSettings((prevState) => ({
                      ...prevState,
                      updateStatus: e,
                    }))
                  }
                  value={importSettings.updateStatus}
                >
                  <Stack pl={4}>
                    <Radio
                      alignItems={'flex-start'}
                      name='update_details_status'
                      value='1'
                    >
                      <Box mt='-4px'>
                        <Text textStyle={'textHead'} p='0' fontWeight={'bold'}>
                          {update.type1.boolean}
                        </Text>
                        <Text textStyle={'textHead'} color='black-2'>
                          {update.type1.text}
                        </Text>
                      </Box>
                    </Radio>

                    <Radio
                      alignItems={'flex-start'}
                      mt={4}
                      name='update_details_status'
                      value='0'
                    >
                      <Box mt='-4px'>
                        <Text textStyle={'textHead'} fontWeight={'bold'}>
                          {update.type2.boolean}
                        </Text>
                        <Text textStyle={'textHead'} color='black-2'>
                          {update.type2.text}
                        </Text>
                      </Box>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
              <Stack spacing={4}>
                <Text textStyle={'textHead'} fontWeight={'bold'}>
                  {typeOfImport.name}
                </Text>
                <RadioGroup
                  pl={4}
                  onChange={(e) =>
                    setImportSettings((prevState) => ({
                      ...prevState,
                      typeOfImports: e,
                    }))
                  }
                  value={importSettings.typeOfImports}
                >
                  <Stack pl={4}>
                    <Radio
                      alignItems={'flex-start'}
                      name='Type_of_import_status'
                      value='0'
                    >
                      <Box mt='-4px'>
                        <Text textStyle={'textHead'} fontWeight={'bold'}>
                          {typeOfImport.type1.boolean}
                        </Text>
                        <Text textStyle={'textHead'} color='black-2'>
                          {typeOfImport.type1.text}
                        </Text>
                      </Box>
                    </Radio>

                    <Radio
                      alignItems={'flex-start'}
                      mt={4}
                      name='Type_of_import_status'
                      value='1'
                    >
                      <Box mt='-4px'>
                        <Text textStyle={'textHead'} fontWeight={'bold'}>
                          {typeOfImport.type2.boolean}
                        </Text>
                        <Text textStyle={'textHead'} color='black-2'>
                          {typeOfImport.type2.text}
                        </Text>
                      </Box>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex justify='center' gap={8} width={'full'}>
              <Box onClick={() => setSettingsModal(false)}>
                <NegativeButton text={'Cancel'} />
              </Box>
              <Box onClick={clickToSave}>
                <PositiveButton text={'Save'} />
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SettingsModal;

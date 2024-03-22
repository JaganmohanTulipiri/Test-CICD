import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Input,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import InstrctionsIcon from '../../../../assets/customIcons/InstructionsIcon.svg';
import SettingsIcon from '../../../../assets/customIcons/SettingsIcon.svg';
import ErrorsPage from './ErrorsPage';
import ImportSuccessModal from './ImportSuccessModal';
import InstructionsModal from './InstrctionsModal';
import SettingsModal from './SettingsModal';
import ImportSettingsSuccessModal from './ImportSettingsSuccessModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPreviewCsv,
  getUploadCsvToDB,
} from '../../../authentication/components/schoolAdmin/schoolAdminSlice';
import ImportFileToDBSuccessModal from './ImportFileToDBSuccessModal';

const Import1 = () => {
  const dispatch = useDispatch();

  const [settingsModal, setSettingsModal] = useState(false);
  const [instructionsModal, setInstructionsModal] = useState(false);
  const [importSuccessModal, setImportSuccessModal] = useState(false);
  const [checkErrorPage, setCheckErrorPage] = useState(false);
  const [fileData, setFileData] = useState('');
  const [disable, setDisable] = useState(false);
  const [file, setFile] = useState(null);

  const importSettingsDataResponse = useSelector(
    (state) => state?.schoolAdmin?.addUpdateImportSettings
  );

  const uploadCsvToDBRes = useSelector(
    (state) => state?.schoolAdmin?.uploadCsvToDB
  );

  const token = useSelector((state) => state?.profile?.token);

  const getMappingObj = useSelector(
    (state) => state?.schoolAdmin?.getMappingObj
  );

  console.log('getMappingObj', getMappingObj);

  const mappingId = getMappingObj?.mappingId;

  const dataSet = getMappingObj?.dataSet;

  const previewData = useSelector(
    (state) => state?.schoolAdmin?.previewCsv?.data?.response
  );

  const formData = new FormData();

  const handleChange = (e) => {
    setFileData(e.target.files[0]);
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
      const fineName = e.target.files[0];
      formData.append('file', fineName);
      dispatch(getPreviewCsv({ finalBody: formData, token }));
      setDisable(true);
    } else {
      setFile(null);
    }
  };

  const clickToImport = () => {
    if (previewData?.errorCount !== 0) {
      setCheckErrorPage(true);
    } else {
      formData.append('file', fileData);
      dispatch(getUploadCsvToDB({ finalBody: formData, token }));
    }
  };

  return (
    <>
      <HStack
        display={'flex'}
        mt='10'
        gap={{ lg: '30rem', md: '5rem', base: '1px' }}
      >
        <>
          <Text
            textStyle={'textHead'}
            fontWeight={'bold'}
            mt={{ base: '1', md: '0', lg: '0' }}
            color='black'
            whiteSpace={'nowrap'}
          >
            {checkErrorPage ? 'IMPORT PREVIEW' : 'IMPORT A FILE'}
          </Text>
          <Box display={'flex'} gap='4'>
            <Text
              textDecoration='underline'
              onClick={() => setSettingsModal(true)}
              cursor='pointer'
              display={{ base: 'none', md: 'block', lg: 'block' }}
            >
              Settings
            </Text>

            <Img
              w={{ base: '1rem', lg: 'full', md: 'full' }}
              h='full'
              src={SettingsIcon}
              cursor='pointer'
            />
            <Text
              textDecoration='underline'
              cursor='pointer'
              onClick={() => {
                setInstructionsModal(true);
                console.log('hi');
              }}
              display={{ base: 'none', md: 'block', lg: 'block' }}
            >
              Notifications
            </Text>
            <Img
              w={{ base: '1rem', lg: 'full', md: 'full' }}
              h='full'
              src={InstrctionsIcon}
              cursor='pointer'
              onClick={() => {
                setInstructionsModal(true);
                console.log('hi');
              }}
            />
          </Box>
          {/* <HStack cursor='pointer' onClick={() => setSettingsModal(true)}>
            <Text
              fontFamily={'body'}
              fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}
              as='span'
              textDecoration='underline'
            >
              Settings
            </Text>

            <Box width='6' height='6'>
              <Img
                w={{ base: '1rem', lg: 'full', md: 'full' }}
                h='full'
                src={SettingsIcon}
              />
            </Box>
          </HStack>
          <HStack
            cursor='pointer'
            onClick={() => {
              setInstructionsModal(true);
              console.log('hi');
            }}
          >
            <Text
              fontFamily={'body'}
              fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}
              as='span'
              textDecoration='underline'
            >
              Instructions
            </Text>
            <Box width='6' height='6'>
              <Img
                w={{ base: '1rem', lg: 'full', md: 'full' }}
                h='full'
                src={InstrctionsIcon}
              />
            </Box>
          </HStack> */}
        </>
      </HStack>
      {checkErrorPage ? (
        <ErrorsPage
          setCheckErrorPage={setCheckErrorPage}
          setDisable={setDisable}
        />
      ) : (
        <Flex
          direction='column'
          color='black-2'
          gap='4'
          mt='4'
          pl='2'
          textStyle='p'
        >
          <Text
           textStyle={'textHead'}
            mt={{ base: '1', md: '0', lg: '0' }}
          >
            You can preview this file before it's imported
          </Text>

          <Stack inlineSize='xs' width='200px'>
            <Input
              accept='.csv'
              bg='white !important'
              type='file'
              p='1'
              borderWidth={0}
              cursor='pointer'
              onChange={handleChange}
              textStyle={'textHead'}
            />
            {!file && (
              <Text
                color='red'
                textStyle={'textHead'}
              >
                Please choose csv file only
              </Text>
            )}
          </Stack>
          {/* {
            previewData && previewData?.errorCount !== 0 ? 
            <Text  color='red'>{previewData?.errorCount} errors</Text> :
            <Text  color='green'>{previewData?.errorCount} errors</Text>
          } */}

          <Box>
            <Button
              bg='primary'
              borderRadius='full'
              color='white'
              isDisabled={!disable}
              onClick={() => {
                clickToImport();
              }}
            >
              <Text
                 textStyle={'textHead'}
              >
                Import
              </Text>
            </Button>
          </Box>
        </Flex>
      )}
      <Flex direction='column' mt='auto'>
        <Stack color='black-2' spacing='2' pl='2'>
          <Text
           textStyle={'textHead'}
            color='black-2'
          >
            Optional for IT Professionals:
          </Text>
          <Text
            as='a'
            textStyle={'textHead'}
            href='#'
          >
            View FTP credentials for automated imports
          </Text>
          <Box>
            <Text
            textStyle={'textHead'}
            >
              When importing data using FTP, FitnessGram leverages the SFTP
              protocol with 256 bit AES encryption.
            </Text>
            <Text
             textStyle={'textHead'}
            >
              Data is encrypted in transit and at rest throughout the import
              process.
            </Text>
          </Box>
        </Stack>
        <Text
          color='gray-2'
         
          mt='4'
          textStyle={'textHead'}
        >
          Visit{' '}
          <Text as='a' href='https://help.fitnessgram.net/' target='_blank'>
            https://help.fitnessgram.net/{' '}
          </Text>
          for more information on importing.
        </Text>
      </Flex>
      {settingsModal && (
        <SettingsModal
          settingsModal={settingsModal}
          setSettingsModal={setSettingsModal}
        />
      )}
      <InstructionsModal
        instructionsModal={instructionsModal}
        setInstructionsModal={setInstructionsModal}
      />
      <ImportSuccessModal
        importSuccessModal={importSuccessModal}
        setImportSuccessModal={setImportSuccessModal}
      />
      {/* {importSettingsDataResponse?.data?.code === 200 && (
        <ImportSettingsSuccessModal />
      )} */}

      {/* {uploadCsvToDBRes?.data?.code === 200 && <ImportFileToDBSuccessModal />} */}
    </>
  );
};

export default Import1;

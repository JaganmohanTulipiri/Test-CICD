import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { getAllSSOConfig } from '../../../store/slices/superAdminSlice/superAdminSlice';
import SSOConfigTable from './SSOConfigTable';

const SSOConfigurationMain = () => {
  const dispatch = useDispatch();

  const [protocol, setProtocol] = useState('');
  const [selectedProtocol, setSelectedProtocol] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selecteDistrict, setSelectedDistrict] = useState('');

  const getAllSSOConfigResults = useSelector(
    (state) => state.superAdmin?.getSSOConfigData?.data?.response
  );

  const handleSelect = (option) => {
    setSelectedDistrict(option);
  };

  var lastNameOptions = [];

  for (let i in getAllSSOConfigResults) {
    console.log('let i in getAllSSOConfigResults', getAllSSOConfigResults[i]);
    lastNameOptions.push({
      value: getAllSSOConfigResults[i]['districts'],
      label: getAllSSOConfigResults[i]['districts'],
    });
  }

  const authenticationProtocol = [
    { value: 'ws-fed', label: 'WS-Federation' },
    { value: 'oauth2', label: 'OAuth2' },
    { value: 'openid', label: 'OpenId' },
  ];

  console.log('========lastNameoptions', lastNameOptions);
  console.log('========authentication protocol', authenticationProtocol);

  useEffect(() => {
    dispatch(getAllSSOConfig());
  }, []);

  const handleProtocolChange = (option) => {
    setSelectedProtocol(option);
  };

  const handleApply = () => {
    setSelectedOption(selecteDistrict);
    setProtocol(selectedProtocol);
    console.log(protocol);
  };

  const handleClear = () => {
    dispatch(getAllSSOConfig());
    setSelectedOption('');
    setSelectedDistrict('');
    setProtocol('');
  };
  return (
    <>
      <Flex display={{ base: 'flex flex-col', md: 'flex', lg: 'flex' }}>
        <Box>
          <Text textStyle='text'>SSO CONFIGURATIONS</Text>
        </Box>
        <Spacer />
        <Box>
          <Link to='/role/SuperAdmin/SSOConfig/CreateNewSSOConfig'>
            Create New SSO Configuration
            <AddIcon
              marginLeft='0.4rem'
              backgroundColor='#0081c8'
              color='white'
              marginBottom='0.1rem'
              borderRadius='2rem'
              fontSize='1.1rem'
              p='0.3rem'
            />
          </Link>
        </Box>
      </Flex>
      <Divider marginTop='2' borderColor='gray' />

      <Flex display={{ base: 'flex flex-col', md: 'flex', lg: 'flex' }}>
        <Box marginTop='4'>
          <Text textStyle={'text'}>
            <>Filter</>
          </Text>
        </Box>
      </Flex>
      <Flex p='4' display={{ base: 'flex flex-col', md: 'flex', lg: 'flex' }}>
        <Box flex='1'>
          <Text className='color-black mr-20' textStyle={'textHead'}>
            District Name:
          </Text>

          <Box
            width={{ base: '16rem', lg: '20rem', md: '16rem' }}
            mt={{ base: '2', md: '0', lg: '0' }}
            mb={{ base: '2', md: '0', lg: '0' }}
          >
            <Select options={lastNameOptions} onChange={handleSelect}></Select>
          </Box>
        </Box>

        <Box flex='1' width='20rem'>
          <Text textStyle={'textHead'}>Authentication Protocol</Text>

          <Box
            width={{ base: '16rem', lg: '20rem', md: '16rem' }}
            mt={{ base: '2', md: '0', lg: '0' }}
          >
            <Select
              options={authenticationProtocol}
              onChange={handleProtocolChange}
            ></Select>
          </Box>
        </Box>
      </Flex>

      <Center>
        <Flex
          minWidth='max-content'
          alignItems='center'
          className='mr-10'
          marginTop='3rem'
          marginBottom='2rem'
        >
          <ButtonGroup gap='4'>
            <Button width='7rem'>
              <Button
                color='black'
                borderRadius='3xl'
                backgroundColor='#EEEEEE'
                width='7rem'
                onClick={handleClear}
              >
                <Text textStyle={'textHead'}>Clear</Text>
              </Button>
            </Button>
            <Button
              backgroundColor='#65a30d'
              width='7rem'
              color='white'
              borderRadius='3xl'
              onClick={handleApply}
            >
              <Text textStyle={'textHead'}>Apply</Text>
            </Button>
          </ButtonGroup>
        </Flex>
      </Center>
      <Divider borderColor='gray' />

      <SSOConfigTable
        filterByDistrictData={selectedOption.value}
        filterByOAuth2={protocol.value}
      />
    </>
  );
};

export default SSOConfigurationMain;

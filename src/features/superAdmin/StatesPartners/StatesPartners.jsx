import React, { useState } from 'react';
import {
  Flex,
  Box,
  Divider,
  Input,
  Center,
  ButtonGroup,
  Button,
  Text,
  Spacer,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';
import StatesPartnerTable from './StatePartnerTable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Select from 'react-select';
import {
  getAllStates,
  getFilteredStatesByLicense,
  getFilteredStatesByName,
  getFilteredStatesByType,
} from '../../../store/slices/superAdminSlice/superAdminSlice';

const StatesPartners = () => {
  const [stateName, setStateName] = useState('');
  const [type, setType] = useState('');
  const [license, setLicense] = useState('');
  const token = useSelector((state) => state?.profile?.token);

  const dispatch = useDispatch();

  const [stateData, setStatesData] = useState([]);

  const getAddedStateResponse = useSelector(
    (state) => state?.superAdmin?.addedState
  );

  const getAllStatesData = useSelector(
    (state) => state?.superAdmin?.getAllStatesInfo?.data?.response
  );
  const getStatesResponseByFilterName = useSelector(
    (state) => state?.superAdmin?.filterStatesByName
  );
  const getStatesResponseByFilterType = useSelector(
    (state) => state?.superAdmin?.filteredStatesByType
  );
  const getStatesResponseByFilterLicense = useSelector(
    (state) => state?.superAdmin?.filterStatesByLicense
  );

  const UpdateStatesAPIResponse = useSelector(
    (state) => state?.superAdmin?.updatedState
  );

  console.log('getStatesResponseByFilterType', getStatesResponseByFilterType);
  useEffect(() => {
    dispatch(getAllStates({ token: token }));
  }, []);

  useEffect(() => {
    dispatch(getAllStates({ token: token }));
  }, [UpdateStatesAPIResponse]);

  useEffect(() => {
    setStatesData(getAllStatesData);
  }, [getAllStatesData]);

  var stateNames = [];

  const statesTypes = [
    { value: 'district', label: 'Districts' },
    { value: 'school', label: 'School' },
    { value: 'state', label: 'State' },
    { value: 'partner', label: 'Partner' },
  ];

  const licenseStatus = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'InActive' },
  ];

  console.log('stateNames========', stateNames);

  const [filteredList, setFilteredList] = useState(
    getAllStatesData?.map((item, key) => item.state_name)
  );

  const handleStateNameChange = (option) => {
    setStateName(option);
    // filterBySearch(e);
    // setStatesData([]);
  };

  const handleTypeChange = (option) => {
    setType(option);
  };
  const handleLicenseChange = (option) => {
    setLicense(option);
  };

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...filteredList];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  const handleApply = () => {
    console.log('stateName', stateName);

    for (let i in getAllStatesData) {
      console.log('let i in getAllStatesData', getAllStatesData[i]);
      stateNames.push({
        value: getAllStatesData[i]['state_name'],
        label: getAllStatesData[i]['state_name'],
      });
    }

    if (stateName !== '') {
      dispatch(
        getFilteredStatesByName({ token: token, name: stateName.value })
      );
    } else if (type !== '') {
      console.log('In else if condition:', type);
      dispatch(getFilteredStatesByType({ token: token, type: type.value }));
    } else if (license !== '') {
      console.log('In license else if condition:', license);
      dispatch(
        getFilteredStatesByLicense({ token: token, license: license.value })
      );
    }
  };

  useEffect(() => {
    setStatesData(getStatesResponseByFilterName?.data?.response);
  }, [getStatesResponseByFilterName]);

  useEffect(() => {
    setStatesData(getStatesResponseByFilterType?.data?.response);
  }, [getStatesResponseByFilterType]);

  useEffect(() => {
    setStatesData(getStatesResponseByFilterLicense?.data?.response);
  }, [getStatesResponseByFilterLicense]);

  console.log(
    'filterType',
    type,
    'getStatesResponseByFilterType============',
    getStatesResponseByFilterType
  );

  console.log('stateData===========', stateData);
  const handleClear = () => {
    setStateName('');
    setType('');
    setLicense('');
    dispatch(getAllStates({ token: token }));
  };
  return (
    <>
      <Flex display={{ base: 'flex flex-col', lg: 'flex', md: 'flex' }}>
        <Box>
          <Text textStyle='text'>STATES & PARTNERS</Text>
        </Box>
        <Spacer />
        <Box ml={{ base: '-1rem', lg: '0', md: '0' }}>
          <Link to='CreateStatePartner'>
            <Button color='black'>Create New State/Partner</Button>
            <AddIcon
              marginLeft='-0.4rem'
              backgroundColor='#0081c8'
              color='white'
              borderRadius='2rem'
              fontSize='1.3rem'
              p={'0.3rem'}
            />
          </Link>
        </Box>
      </Flex>
      <Divider marginTop='2' borderColor='gray' />

      <Flex>
        <Box marginTop='4'>
          <>Filter</>
        </Box>
      </Flex>
      <Flex p='4' display={{ base: 'flex flex-col', md: 'flex', lg: 'flex' }}>
        <Box flex='1'>
          <Text className='color-black mr-20' textStyle={'textHead'} mb='2'>
            State Name:
          </Text>
          <Box width={{ base: '16rem', lg: '16rem', md: '16rem' }}>
            <Select
              options={stateNames}
              onChange={handleStateNameChange}
              textStyle='textHead'
            ></Select>
          </Box>
        </Box>
        <Box flex='1'>
          <Text
            className='color-black mr-20'
            textStyle={'textHead'}
            mb='2'
            mt='2'
          >
            State Types:
          </Text>
          <Box width={{ base: '16rem', lg: '16rem', md: '16rem' }}>
            <Select options={statesTypes} onChange={handleTypeChange}></Select>
          </Box>
        </Box>
        <Box flex='1'>
          <Text
            className='color-black mr-20'
            textStyle={'textHead'}
            mb='2'
            mt='2'
          >
            Licenses Status:
          </Text>
          <Box width={{ base: '16rem', lg: '16rem', md: '16rem' }}>
            <Select
              options={licenseStatus}
              onChange={handleLicenseChange}
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
      <StatesPartnerTable tableData={stateData} />
    </>
  );
};

export default StatesPartners;

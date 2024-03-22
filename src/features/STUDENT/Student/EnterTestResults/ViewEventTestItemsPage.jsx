import React, { useEffect, useState } from 'react';

import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  Box,
  Img,
  Button,
  Tab,
  Tabs,
  TabList,
  FormControl,
  FormLabel,
  Container,
  Card,
  CardBody,
  CloseButton,
} from '@chakra-ui/react';

import { Select } from 'chakra-react-select';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStudentFitnessGramList,
  getTestResultsData,
  setIsEditClicked,
  setStudentSelectedEventCard,
} from '../../../../store/slices/studentSlice/studentSlice';
import OthersList from './OthersList';

import pendingImage from '../../../../assets/images/clock-rotate-right-icon.svg';

import tickImage from '../../../../assets/images/tick-icon.svg';
import { GiConsoleController } from 'react-icons/gi';

const ViewEventTestItemsPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginResponse = useSelector((state) => state?.profile?.user);

  const token = useSelector((state) => state?.profile?.token);

  const userRole = useSelector((state) => state.profile.selectedRole);

  const studentEventsList = useSelector(
    (state) => state?.student?.studentFitnessGramEventsList
  );

  const studentSelectedEventCard = useSelector(
    (state) => state?.student?.studentSelectedEventCard
  );

  const updateStudentResponse = useSelector(
    (state) => state?.student?.updateStudentResponse
  );

  const [searchedListItems, setSearchedListItems] = useState([]);

  const [filteredEventsListItems, setFilteredEventsListItems] = useState([]);

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleInputChange = (searchText) => {
    console.log(searchText, 'searchTextsearchTextsearchText');
  };

  const onhandleChange = (selectedItem) => {
    if (selectedItem?.length === 0) {
      setFilteredEventsListItems(studentEventsList);
    } else {
      const filteredArray = studentEventsList.filter((obj1) =>
        selectedItem.some((obj2) => obj2.label === obj1.event_name)
      );

      setFilteredEventsListItems(filteredArray);
    }
  };

  const studentResultSelectedItem = (item) => {
    console.log(item, 'iam item');

    dispatch(setIsEditClicked(item?.results));

    dispatch(setStudentSelectedEventCard(item));

    navigate('/role/Student/EnterStudentDataTable', {
      state: { studentData: { text: item.event_name, result: item.result } },
    });
  };

  useEffect(() => {
    const userDetails = {
      accesser_uuid: loginResponse?.response?.uuid,
      accesser_role: userRole,
    };

    dispatch(getStudentFitnessGramList({ body: userDetails, token }));
  }, []);

  useEffect(() => {
    if (studentEventsList?.length > 0) {
      let arr = [];
      studentEventsList.forEach((eventItem) => {
        let obj = { label: eventItem.event_name, value: eventItem.uuid };
        arr.push(obj);
      });
      setSearchedListItems([...arr]);
    } else {
      setSearchedListItems([]);
    }

    setFilteredEventsListItems(studentEventsList);
  }, [studentEventsList]);

  useEffect(() => {
    const userDetails = {
      user_uuid: loginResponse && loginResponse?.response?.uuid,
      event_uuid: studentSelectedEventCard && studentSelectedEventCard?.uuid,
    };

    console.log(userDetails, 'userDetails');

    if (updateStudentResponse?.code === 200) {
      dispatch(getTestResultsData({ body: userDetails, token }));
    }
  }, [updateStudentResponse]);

  return (
    <>
      <Box h='auto'>
        <Text fontFamily={'body'} fontWeight='bold'>
          ENTER TEST RESULTS
        </Text>

        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mt='5'
          mb='5'
        >
          <Box>
            <Tabs variant='unstyled'>
              <TabList>
                <Tab
                  // className={`${
                  //   isButtonClicked === false
                  //     ? 'bg-primary text-white '
                  //     : 'bg-gray-1 text-black'
                  // } md:px-3 md:py-2 lg:px-4 lg:py-2 text-[0.8rem] font-poppins-small `}
                  _selected={{
                    color: 'white',
                    bg: 'blue.500',
                    roundedLeft: 'lg',
                  }}
                  onClick={() => {
                    setIsButtonClicked(false);
                  }}
                  px='1.5rem'
                >
                  FITNESSGRAM
                </Tab>
                <Tab
                  _selected={{
                    color: 'white',
                    bg: 'blue.500',
                    roundedRight: 'lg',
                  }}
                  px='3rem'
                  onClick={() => {
                    setIsButtonClicked(true);
                  }}
                >
                  Other
                </Tab>
              </TabList>
            </Tabs>
          </Box>
          <Box
            h='auto'
            zIndex='100'
            mr='3rem'
            w='30%'
            display={{ base: 'none', md: 'block', lg: 'inline-block' }}
          >
            {!isButtonClicked ? (
              <Select
                isMulti
                useBasicStyles
                name='eventNames'
                options={searchedListItems}
                placeholder='Search...'
                closeMenuOnSelect={true}
                onChange={onhandleChange}
              />
            ) : null}
          </Box>
        </Box>
        <Box
          h='auto'
          zIndex='100'
          mr='3rem'
          w='90%'
          display={{ base: 'flex flex-col', md: 'none', lg: 'none' }}
        >
          {!isButtonClicked ? (
            <Select
              isMulti
              useBasicStyles
              name='eventNames'
              options={searchedListItems}
              placeholder='Search...'
              closeMenuOnSelect={true}
              onChange={onhandleChange}
            />
          ) : null}
        </Box>

        {isButtonClicked ? (
          <OthersList />
        ) : filteredEventsListItems?.length > 0 ? (
          filteredEventsListItems?.map((each) => (
            <Card
              bg='#f5f5f5'
              boxShadow='sm'
              h='14'
              border='1'
              borderColor='yellow.600'
              mt='3'
              cursor="pointer"
            >
              <CardBody
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                onClick={() => studentResultSelectedItem(each)}
              >
                <Text>{each.event_name}</Text>
                <Box display={'flex'} gap={'1'}>
                  <Img
                    src={each.results ? tickImage : pendingImage}
                    alt='image'
                  />

                  <Text textStyle='h6' color={each.results ? 'fit' : 'red'}>
                    {each.results ? 'Validated' : 'Pending'}
                  </Text>
                </Box>
              </CardBody>
            </Card>
          ))
        ) : null}
      </Box>
    </>
  );
};

export default ViewEventTestItemsPage;

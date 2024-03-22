import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Radio,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  StackDivider,
  Text,
  textDecoration,
} from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';

import React, { useEffect, useState } from 'react';
import edit from '../../../assets/customIcons/Icon feather-edit@2x.png';
import absent from '../../../assets/customIcons/absent@2x.png';
import present from '../../../assets/customIcons/absent.png';
import { useDispatch, useSelector } from 'react-redux';
import calendarImg from '../../../assets//images/Icon awesome-calendar-alt@2x.png';
import activityGramTestEventsImage from '../../../assets/images/OthersSectionImages/Activity Gram.svg';
import {
  BsPlusCircleFill,
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
} from 'react-icons/bs';

import fitnessLoginExcerciseImage from '../../../assets/images/Physical education-pana.png';
import { getActivityGramEventsList, setAgEventDataById } from '../teacherSlice';
import ActivityGramModal from './ActivityGramModal';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import ManageSkeleton from '../../../components/GlobalComponents/ManageSkeleton';
import { setPreviousPath } from '../../../store/slices/profileSlice';
import { AiOutlineCalendar } from 'react-icons/ai';
import { SearchIcon } from '@chakra-ui/icons';
import { BiSortAlt2 } from 'react-icons/bi';
import moment from 'moment';

const ActivityGramEvent = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const role = useSelector((state) => state.profile.selectedRole);

  const deleteResponse = useSelector((state) => state?.teacher?.responseCode);
  const loading = useSelector((state) => state?.teacher?.loading);

  const userId = useSelector((state) => state?.profile?.userId);

  const token = useSelector((state) => state?.profile?.token);

  const totalPages = useSelector((state) => state?.teacher?.totalPages);

  console.log(role, userId, 'iam role');

  const [viewAllEventsButtonsClicked, setViewAllEventsButtonsClicked] =
    useState(false);

  const [isViewDataClicked, setIsViewDataClicked] = useState(false);

  const [selectedCardData, setSelectedCardData] = useState(false);

  const listItems = useSelector(
    (state) => state?.teacher?.activityGramEventsList
  );

  const [testEventsList, setTestEventsList] = useState();
  const [data, setData] = useState({
    pageNumber: 1,
    sortCondition: '',
    searchTerm: '',
  });

  console.log(testEventsList, 'FROMMMMMMMMMMMMMMMMMMMMMMM');

  const handlePageNumber = (event) => {
    setData((prevState) => ({ ...prevState, pageNumber: event.selected + 1 }));
  };
  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const viewDataButtonClicked = (selectedItem) => {
    setSelectedCardData(selectedItem);

    setIsViewDataClicked(true);
  };

  const smartCoachButtonClicked = (value) => {
    console.log(value, 'iam value');
    setIsViewDataClicked(value);
  };

  function debounce(cb, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  const searchEvents = debounce((text) => {
    setData((prevState) => ({ ...prevState, searchTerm: text, pageNumber: 1 }));
    dispatch(
      getActivityGramEventsList({
        token,
        data: { ...data, searchTerm: text, pageNumber: 1 },
      })
    );
  }, 1500);

  useEffect(() => {
    setTestEventsList(listItems);
  }, [listItems]);

  useEffect(() => {
    dispatch(getActivityGramEventsList({ token, data: data }));
  }, [data.sortCondition, data.pageNumber]);

  console.log(data, 'data in activitygram');

  console.log(selectedCardData, 'test events listr');

  return (
    <>
      <HStack>
        <Box display={{ base: 'none', lg: 'block', md: 'block' }}>
          <Text textStyle={'text'}>
            <b>ACTIVITY</b>GRAM
          </Text>
        </Box>
        <Spacer />

        <InputGroup
          size='sm'
          inlineSize='48'
          display={{ base: 'none', md: 'flex', lg: 'flex ' }}
        >
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray-3' />}
          />
          <Input
            display={{ base: 'none', lg: 'block', md: 'block' }}
            inlineSize='48'
            placeholder='Search'
            name='searchTerm'
            borderRadius='full'
            // value={data?.searchTerm}
            onChange={(e) => {
              searchEvents(e.target.value);
            }}
          />
        </InputGroup>

        <Popover trigger='hover' placement='bottom-start' isLazy>
          <PopoverTrigger>
            <Flex
              gap='2'
              border={'1px solid gray'}
              px='3'
              py='0.2rem'
              rounded='3xl'
              display={{ base: 'none', md: 'flex', lg: 'flex ' }}
            >
              <Text>Sort By</Text>
              <Icon
                position='relative'
                as={BiSortAlt2}
                boxSize='6'
                backgroundColor='head'
                color='project.100'
              />
            </Flex>
          </PopoverTrigger>
          <Portal>
            <PopoverContent
              position='absolute'
              borderWidth='0'
              boxShadow='lg'
              w='auto'
              zIndex={401} // So it can go above the map.
              right={{ base: '-3rem', md: '-9rem', lg: '-6.9rem' }}
            >
              {/* <PopoverArrow /> */}
              <PopoverBody userSelect='none' whiteSpace='nowrap'>
                <Stack>
                  <HStack>
                    <Icon as={AiOutlineCalendar} boxSize='4' />
                    <Text>Event Start Date</Text>
                    <Spacer />
                    <Radio
                      onChange={handleChange}
                      name='sortCondition'
                      value=''
                      isChecked={data.sortCondition === ''}
                    ></Radio>
                  </HStack>

                  <HStack>
                    <Icon as={BsSortAlphaDown} boxSize='4' />
                    <Text> A to Z</Text>
                    <Spacer />
                    <Radio
                      onChange={handleChange}
                      name='sortCondition'
                      value='alphabetic_ASC'
                      isChecked={data.sortCondition === 'alphabetic_ASC'}
                    ></Radio>
                  </HStack>

                  <HStack>
                    <Icon as={BsSortAlphaUpAlt} boxSize='4' />
                    <Text>Z to A</Text>
                    <Spacer />

                    <Radio
                      onChange={handleChange}
                      name='sortCondition'
                      value='alphabetic_DESC'
                      isChecked={data.sortCondition === 'alphabetic_DESC'}
                    ></Radio>
                  </HStack>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        {/* <Button
            display={{ base: 'none', lg: 'block', md: 'block' }}
            rightIcon={<BsPlusCircleFill fill='white' />}
            backgroundColor='green'
            borderRightRadius='full'
            borderLeftRadius='full'
            color='white'
            onClick={() => {
              navigate(`/role/${role}/ag-create-event`);
            }}
          >
            Create Event{' '}
          </Button> */}

        {role && role !== 'student' ? (
          <Box
            cursor={'pointer'}
            //display={'flex'}
            gap='2'
            rounded='3xl'
            bg='green'
            px='5'
            py='1'
            onClick={() => {
              console.log(location.pathname, '33');
              dispatch(setPreviousPath(location.pathname));
              navigate(`/role/${role}/ag-create-event`);
            }}
            display={{ base: 'none', md: 'flex', lg: 'flex ' }}
          >
            <Text color='white'>Create Event</Text>
            <BsPlusCircleFill fill='white' className='mt-1' />
          </Box>
        ) : null}
      </HStack>

      <HStack display={{ base: 'block', md: 'none', lg: 'none' }}>
        <Box display={{ base: 'flex' }} gap='2' mt='2' mb='2' px='1'>
          <Text textStyle={'text'} mt='2'>
            <b>ACTIVITY</b>GRAM
          </Text>
          {role && role !== 'student' ? (
            <Box
              cursor={'pointer'}
              display={'flex'}
              gap='2'
              rounded='3xl'
              bg='green'
              px='5'
              py='1'
              onClick={() => {
                console.log(location.pathname, '33');
                dispatch(setPreviousPath(location.pathname));
                navigate(`/role/${role}/ag-create-event`);
              }}
            >
              <Text color='white'>Create Event</Text>
              <BsPlusCircleFill fill='white' className='mt-1' />
            </Box>
          ) : null}
        </Box>
        <Spacer />
        {/* <Box display={{ base: 'flex flex-col' }} mt='2'>
          <Input
            mt='2'
            mb='2'
            inlineSize='58'
            placeholder='Search'
            name='searchTerm'
            onChange={(e) => {
              searchEvents(e.target.value);
            }}
          />

          <Select
            border='none'
            inlineSize='auto'
            name='sortCondition'
            value={data?.sortCondition}
            onChange={handleChange}
            textStyle={'textHead'}
          >
            <option value=''>Event Date</option>
            <option value='alphabetic_ASC'>A to Z</option>
            <option value='alphabetic_DESC'>Z to A</option>
          </Select>
        </Box> */}
        <Box
          display='flex'
          justifyContent={{ base: 'space-between' }}
          alignItems='center'
        >
          <InputGroup
            size='sm'
            inlineSize='44'
            display={{ base: 'flex', md: 'none', lg: 'none ' }}
          >
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray-3' />}
            />
            <Input
              display={{ base: 'flex', md: 'none', lg: 'none ' }}
              inlineSize='44'
              placeholder='Search'
              name='searchTerm'
              borderRadius='full'
              // value={data?.searchTerm}
              onChange={(e) => {
                searchEvents(e.target.value);
              }}
            />
          </InputGroup>

          <Popover trigger='hover' placement='bottom-start' isLazy>
            <PopoverTrigger>
              <Flex
                gap='2'
                border={{ base: '1px solid gray' }}
                px={{ base: '2', md: '6' }}
                py='0.2rem'
                rounded='3xl'
                display={{ base: 'flex', md: 'none', lg: 'none ' }}
              >
                <Text textStyle={'text'} display={{ base: 'flex' }}>
                  Sort By
                </Text>
                <Icon
                  as={BiSortAlt2}
                  position='relative'
                  boxSize='6'
                  backgroundColor='head'
                  color='project.100'
                  rounded='lg'
                  //p='1'
                />
              </Flex>
            </PopoverTrigger>
            <Portal>
              <PopoverContent
                position='absolute'
                borderWidth='0'
                boxShadow='lg'
                w='auto'
                zIndex={401} // So it can go above the map.
                right={{ base: '-6rem', md: '-9rem', lg: '-6.9rem' }}
              >
                {/* <PopoverArrow /> */}
                <PopoverBody userSelect='none' whiteSpace='nowrap'>
                  <Stack>
                    <HStack>
                      <Icon as={AiOutlineCalendar} boxSize='4' />
                      <Text>Event Start Date</Text>
                      <Spacer />
                      <Radio
                        onChange={handleChange}
                        name='sortCondition'
                        value=''
                        isChecked={data.sortCondition === ''}
                      ></Radio>
                    </HStack>

                    <HStack>
                      <Icon as={BsSortAlphaDown} boxSize='4' />
                      <Text> A to Z</Text>
                      <Spacer />
                      <Radio
                        onChange={handleChange}
                        name='sortCondition'
                        value='alphabetic_ASC'
                        isChecked={data.sortCondition === 'alphabetic_ASC'}
                      ></Radio>
                    </HStack>

                    <HStack>
                      <Icon as={BsSortAlphaUpAlt} boxSize='4' />
                      <Text>Z to A</Text>
                      <Spacer />

                      <Radio
                        onChange={handleChange}
                        name='sortCondition'
                        value='alphabetic_DESC'
                        isChecked={data.sortCondition === 'alphabetic_DESC'}
                      ></Radio>
                    </HStack>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </Box>
      </HStack>
      {loading ? (
        <Grid templateColumns='repeat(3, 1fr)' gap='6'>
          <ManageSkeleton />
          <ManageSkeleton />
          <ManageSkeleton />

          <ManageSkeleton />
          <ManageSkeleton />
          <ManageSkeleton />

          <ManageSkeleton />
          <ManageSkeleton />
          <ManageSkeleton />
        </Grid>
      ) : (
        <Stack mt='0' py='4'>
          {!testEventsList?.length ? (
            <Text textAlign='center' textStyle={'textHead'}>
              NO EVENTS FOUND FOR THE USER
            </Text>
          ) : (
            <SimpleGrid columns={{ md: 2, lg: 3 }} rowGap={5} columnGap={6}>
              {testEventsList?.length &&
                testEventsList?.map((item) => (
                  <Box
                    width={[
                      '100%', // 0-30em

                      '100%', // 62em+
                    ]}
                    shadow='lg'
                    rounded={'lg'}
                    mb='3'
                    key={item.id}
                    ml={{ base: '-1px', md: '0', lg: '0px' }}
                  >
                    <>
                      <>
                        <Flex
                          justify={'space-between'}
                          p='3'
                          bg='head'
                          roundedTop={'xl'}
                        >
                          <Text
                            textStyle={'textHead'}
                            css={{
                              '&:first-letter': {
                                textTransform: 'uppercase',
                              },
                            }}
                          >
                            <b>{item.event_name}</b>
                          </Text>

                          {role && role !== 'student' ? (
                            <Flex
                              gap='1'
                              cursor='pointer'
                              onClick={() => {
                                dispatch(setPreviousPath(location.pathname));

                                navigate(
                                  `/role/${role}/ag-edit-event/${
                                    // useEffect(() => {
                                    //   dispatch(setDeleteResponse());
                                    // }, []);
                                    item?.uuid
                                  }`
                                );
                              }}
                            >
                              <Text textStyle={'textHead'}>Edit</Text>

                              <Image
                                src={edit}
                                w={{ base: '3', md: '5', lg: '5' }}
                                h={{ base: '3', md: '5', lg: '5' }}
                              />
                            </Flex>
                          ) : null}
                        </Flex>
                        <Flex
                          justifyContent='space-between'
                          m='2'
                          mb='4'
                          pl='2'
                          pr='2'
                        >
                          <Box mt='4'>
                            <Text
                              textStyle={'textHead1'}
                              css={{
                                '&:first-letter': {
                                  textTransform: 'uppercase',
                                },
                              }}
                            >
                              Type: Activity Track
                              {/* {item.text} */}
                            </Text>
                            <Flex mt='6' gap='2'>
                              <Image
                                src={calendarImg}
                                w={{ base: '5', md: '5', lg: '5' }}
                                h={{ base: '5', md: '5', lg: '5' }}
                              />

                              <Text
                                textStyle={'textHead'}
                                css={{
                                  '&:first-letter': {
                                    textTransform: 'uppercase',
                                  },
                                }}
                              >
                                Start Date:{' '}
                                {moment(item.start_date).format(
                                  navigator.language === 'en-GB'
                                    ? 'DD-MM-YYYY'
                                    : 'MM-DD-YYYY'
                                )}
                              </Text>
                            </Flex>
                          </Box>

                          <HStack maxW='6rem'>
                            <Image
                              src={activityGramTestEventsImage}
                              // objectFit='cover'
                              // alt='calendar'
                              minW={'80%'}
                            />
                          </HStack>
                        </Flex>
                      </>

                      {role && role !== 'student' ? (
                        <Flex gap={'3'} mt='3' px='3'>
                          <Flex gap={'2'}>
                            <Image
                              src={absent}
                              w={{ base: '5', md: '5', lg: '5' }}
                              h={{ base: '5', md: '5', lg: '5' }}
                            />

                            <Text
                              textStyle={'textHead'}
                              css={{
                                '&:first-letter': {
                                  textTransform: 'uppercase',
                                },
                              }}
                            >
                              {item.participants} participants
                            </Text>
                          </Flex>

                          <Flex gap={'2'}>
                            <Image
                              src={present}
                              w={{ base: '5', md: '5', lg: '5' }}
                              h={{ base: '5', md: '5', lg: '5' }}
                            />

                            <Text
                              textStyle={'textHead'}
                              css={{
                                '&:first-letter': {
                                  textTransform: 'uppercase',
                                },
                              }}
                            >
                              {item.missing_data} missing data
                            </Text>
                          </Flex>
                        </Flex>
                      ) : null}

                      <Flex justifyContent='center' alignItems='center'>
                        <Text
                          pt='5'
                          pb='5'
                          textStyle={'textHead'}
                          as='a'
                          cursor='pointer'
                          textDecoration='underline'
                          // _hover={"underline"}
                          onClick={() => viewDataButtonClicked(item)}
                        >
                          View Data{' '}
                        </Text>
                      </Flex>
                    </>
                  </Box>
                ))}
            </SimpleGrid>
          )}
        </Stack>
      )}

      {!testEventsList?.length ? null : (
        <>
          <Box display='flex' justifyContent='space-between'>
            <Image
              src={fitnessLoginExcerciseImage}
              w='10rem'
              h='6rem'
              display={{ base: 'none', md: 'flex' }}
            />
          </Box>
          <Box>
            {totalPages === 1 ? null : (
              <Flex justify='flex-end'>
                <ReactPaginate
                  breakLabel='...'
                  nextLabel='Next >'
                  onPageChange={handlePageNumber}
                  pageRangeDisplayed={5}
                  pageCount={totalPages}
                  previousLabel='<Previous'
                  renderOnZeroPageCount={null}
                  containerClassName='pagination'
                  pageLinkClassName='page-num'
                  previousLinkClassName='page-num'
                  nextLinkClassName='page-num'
                  activeLinkClassName='active'
                />
              </Flex>
            )}
          </Box>
        </>
      )}

      {isViewDataClicked ? (
        <ActivityGramModal
          isViewDataClicked={isViewDataClicked}
          setIsViewDataClicked={setIsViewDataClicked}
          selectedCardData={selectedCardData}
          smartCoachButtonClicked={smartCoachButtonClicked}
        />
      ) : null}
    </>
  );
};

export default ActivityGramEvent;

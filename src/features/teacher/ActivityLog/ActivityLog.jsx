import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  StackDivider,
  Text,
  ButtonGroup,
  Center,
  Select,
  Input,
  Skeleton,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverTrigger,
  Icon,
  Portal,
  PopoverContent,
  PopoverBody,
  Radio,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import {
  BsPlusCircleFill,
  BsSortAlphaDown,
  BsSortAlphaDownAlt,
  BsSortAlphaUpAlt,
} from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import calendarImg from '../../../assets//images/Icon awesome-calendar-alt@2x.png';
import ActivityLogImage from '../../../assets/images/OthersSectionImages/Activity GraMM LOG.svg';
import activityGramTestEventsImage from '../../../assets/images/OthersSectionImages/Activity Gram.svg';

import fitnessLoginExcerciseImage from '../../../assets/images/Physical education-pana.png';
import {
  getActivityLogEventList,
  setAlEventDataById,
} from '../../../features/teacher/teacherSlice';
import ActivityLogModal from './ActivityLogModal';

import absent from '../../../assets/customIcons/absent@2x.png';
import present from '../../../assets/customIcons/absent.png';
import { useNavigate } from 'react-router-dom';
import edit from '../../../assets/customIcons/Icon feather-edit@2x.png';
import ReactPaginate from 'react-paginate';
import ManageSkeleton from '../../../components/GlobalComponents/ManageSkeleton';
import { setPreviousPath } from '../../../store/slices/profileSlice';
import { current } from '@reduxjs/toolkit';
import moment from 'moment';
import { SearchIcon } from '@chakra-ui/icons';
import { BiSortAlt2 } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';

const ActivityLog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = useSelector((state) => state.profile.selectedRole);

  const userId = useSelector((state) => state?.profile?.userId);

  const token = useSelector((state) => state?.profile?.token);
  const totalPages = useSelector((state) => state?.teacher?.totalPages);

  console.log(role, userId, 'iam role');

  const loading = useSelector((state) => state?.teacher?.loading);

  const activityLogEvents = useSelector(
    (state) => state?.teacher?.activityLogEventList
  );

  console.log(activityLogEvents, 'activity ');

  const [viewAllEventsButtonsClicked, setViewAllEventsButtonsClicked] =
    useState(false);

  const [isViewDataClicked, setIsViewDataClicked] = useState(false);

  const [selectedCardData, setSelectedCardData] = useState(false);

  const [testEventsList, setTestEventsList] = useState();

  const [data, setData] = useState({
    pageNumber: 1,
    sortCondition: '',
    searchTerm: '',
  });

  // const start_date = Date.now();

  // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(start_date));

  const viewDataButtonClicked = (selectedItem) => {
    setSelectedCardData(selectedItem);

    setIsViewDataClicked(true);
  };

  const smartCoachButtonClicked = (value) => {
    console.log(value, 'iam value');
    setIsViewDataClicked(value);
  };

  const handlePageNumber = (event) => {
    setData((prevState) => ({ ...prevState, pageNumber: event.selected + 1 }));
  };
  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
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
      getActivityLogEventList({
        token,
        data: { ...data, searchTerm: text, pageNumber: 1 },
      })
    );
  }, 1500);

  useEffect(() => {
    setTestEventsList(activityLogEvents);
  }, [activityLogEvents]);

  useEffect(() => {
    dispatch(getActivityLogEventList({ token, data: data }));
  }, [data.sortCondition, data.pageNumber]);

  // useEffect(() => {
  //   moment.locale('en'); // Example locale, replace 'en' with the desired locale code
  // }, []);

  // const date = moment('2023-05-17').format('L');
  return (
    <>
      <HStack>
        <Box display={{ base: 'none', lg: 'block', md: 'block' }}>
          <Text textStyle='text'>
            <b>ACTIVITYLOG CHALLENGES</b>
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
                    <Icon as={BsSortAlphaDownAlt} boxSize='4' />
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

        {role && role !== 'student' ? (
          <Box
            cursor={'pointer'}
            display={{ base: 'none', md: 'flex', lg: 'flex ' }}
            gap='2'
            rounded='3xl'
            bg='green'
            px='5'
            py='1'
            onClick={() => {
              dispatch(setPreviousPath(location.pathname))
              navigate(`/role/${role}/al-create-event`);
            }}
          >
            <Text color='white'>Create Event</Text>
            <BsPlusCircleFill fill='white' className='mt-1' />
          </Box>
        ) : null}
      </HStack>
      <HStack display={{ base: 'block', md: 'none', lg: 'none' }}>
        <Box display={{ base: 'flex flex-col' }} gap='2' mt='2' mb='2' px='1'>
          <Text textStyle={'textHead'} textAlign={{ base: 'center' }} mb='2'>
            <b>ACTIVITYGRAM LOG TEST EVENTS</b>
          </Text>

          <Spacer />

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
                dispatch(setPreviousPath(location.pathname))

                navigate(`/role/${role}/ag-create-event`);
              }}
            >
              <Text color='white' textAlign={'center'} ml='60px'>
                Create Event
              </Text>
              <BsPlusCircleFill fill='white' className='mt-1' />
            </Box>
          ) : null}
        </Box>
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
          {testEventsList === undefined || testEventsList?.length === 0 ? (
            <Text textAlign='center' mt='5'>
              {' '}
              NO EVENTS FOUND{' '}
            </Text>
          ) : (
            <SimpleGrid columns={{ md: 2, lg: 3 }} rowGap={5} columnGap={6}>
              {testEventsList?.length &&
                testEventsList?.map((item) => (
                  <Box
                    width={['100%', '100%']}
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
                            fontWeight='bold'
                            css={{
                              '&:first-letter': {
                                textTransform: 'uppercase',
                              },
                            }}
                          >
                            {item.challenge_name}
                          </Text>

                          {role && role !== 'student' ? (
                            <Flex
                              gap='1'
                              cursor='pointer'
                              onClick={() => {
                                dispatch(setPreviousPath(location.pathname));

                                navigate(
                                  `/role/${role}/al-edit-event/${item?.uuid}`
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
                          <Box mt='2'>
                            <Text textStyle={'textHead'} mb='2'>
                              Type: {item.challenge_type}
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }}>
                              Goal: {item.daily_goal}
                            </Text>
                            <Flex mt='6' gap='2'>
                              <Image
                                src={calendarImg}
                                w={{ base: '5', md: '5', lg: '5' }}
                                h={{ base: '5', md: '5', lg: '5' }}
                              />

                              <Text
                                textStyle={'textHead'}
                                minWidth='max-content'
                                css={{
                                  '&:first-letter': {
                                    textTransform: 'uppercase',
                                  },
                                }}
                              >
                                Start Date: 
                                {/* {item.start_date.split('T')[0]} */}
                                   {moment(item.start_date).format(
                                  navigator.language === 'en-GB'
                                    ? 'DD-MM-YYYY'
                                    : 'MM-DD-YYYY'
                                )}
                              </Text>
                            </Flex>
                          </Box>

                          <Box minW='6rem'>
                            <Image src={ActivityLogImage} minW={'60%'} />
                          </Box>
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

                            <Text textStyle={'textHead'}>
                              {item.participants} Participants
                            </Text>
                          </Flex>

                          <Flex gap={'2'}>
                            <Image
                              src={present}
                              w={{ base: '5', md: '5', lg: '5' }}
                              h={{ base: '5', md: '5', lg: '5' }}
                            />

                            <Text textStyle={'textHead'}>
                              {item.missing_data} Missing data
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
          {testEventsList?.length ? (
            <Flex
              justifyContent='space-between'
              alignItems='center'
              m={{ md: 0, lg: 0, xl: 5 }}
              w='full'
              pt='5'
            >
              <Box w={{ md: 40, lg: 60, xl: 60 }} px='5'>
                <Image
                  display={{ base: 'none', md: 'flex', lg: 'flex' }}
                  src={fitnessLoginExcerciseImage}
                  alt='excercise'
                  className='w-[10rem] h-[6rem] '
                />
              </Box>
            </Flex>
          ) : null}
        </Stack>
      )}
      {!testEventsList?.length || totalPages === 1 ? null : (
        <Flex justify={{ lg: 'flex-end', md: 'flex-end', base: 'center' }}>
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
      {isViewDataClicked ? (
        <ActivityLogModal
          isViewDataClicked={isViewDataClicked}
          setIsViewDataClicked={setIsViewDataClicked}
          selectedCardData={selectedCardData}
          smartCoachButtonClicked={smartCoachButtonClicked}
        />
      ) : null}
    </>
  );
};

export default ActivityLog;

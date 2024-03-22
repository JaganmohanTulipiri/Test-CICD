import React, { useState, useEffect } from 'react';
import create from '../../../assets/images/Group 2977@2x.png';
import { EditTwoTone, CalendarOutlined } from '@ant-design/icons';
import ReactPaginate from 'react-paginate';
import moment from 'moment';

import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  Stack,
  Spacer,
  ButtonGroup,
  Img,
  PopoverBody,
  PopoverTrigger,
  RadioGroup,
  Radio,
  InputGroup,
  InputLeftElement,
  HStack,
  Input,
  Popover,
  Icon,
  Portal,
  PopoverContent,
} from '@chakra-ui/react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  SimpleGrid,
  Flex,
  Box,
  Image,
  Center,
  extendTheme,
  Grid,
} from '@chakra-ui/react';
import { BsPlusCircleFill } from 'react-icons/bs';

import { useDisclosure } from '@chakra-ui/react';
import TestRegularModal from './TestRegularModal';
import absent from '../../../assets/customIcons/absent@2x.png';
import present from '../../../assets/customIcons/absent.png';
import edit from '../../../assets/customIcons/Icon feather-edit@2x.png';
import calender from '../../../assets/customIcons/Icon awesome-calendar-alt@2x.png';
import run from '../../../assets/customIcons/undraw_fitness_stats_sht6 (1)@2x.png';
import view from '../../../assets/customIcons/Group 2983@2x.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEventsList,
  setEventDataById,
  setEventStudentList,
} from '../teacherSlice';
import girlImg from '../../../assets/images/Group 3776@2x.png';

import excerciseImg from '../../../assets/images/exerciseIcon.svg';
import calendarImg from '../../../assets/images/Icon awesome-calendar-alt@2x.png';

import boyRunningImg from '../../../assets/images/undraw_fitness_stats_sht6 (1)@2x.png';
import pendingImage from '../../../assets/images/clock-rotate-right-icon.svg';
import tickImage from '../../../assets/images/tick-icon.svg';
import ManageSkeleton from '../../../components/GlobalComponents/ManageSkeleton';
import InternalMenu from 'antd/es/menu/menu';
import { BiSortAlt2 } from 'react-icons/bi';
import {
  BsSortAlphaUpAlt,
  BsFillCalendarCheckFill,
  BsSortAlphaDown,
} from 'react-icons/bs';
import { SearchIcon } from '@chakra-ui/icons';
import { AiOutlineCalendar } from 'react-icons/ai';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const Teacher = () => {
  const theme = extendTheme({ breakpoints });

  const [show, setShow] = React.useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const [isViewDataClicked, setIsViewDataClicked] = useState(false);

  const [selectedEventCardData, setSelectedEventCardData] = useState({});

  const handleToggle = () => setShow(!show);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loading = useSelector((state) => state?.teacher?.loading);

  const token = useSelector((state) => state.profile.token);
  const userId = useSelector((state) => state?.profile?.userId);
  const role = useSelector((state) => state.profile.selectedRole);
  const totalPages = useSelector((state) => state?.teacher?.totalPages);

  const [viewAllEventsButtonsClicked, setViewAllEventsButtonsClicked] =
    useState(false);
  const eventsList = useSelector((state) => state?.teacher?.eventsList);

  console.log(eventsList, 'from eventslist');

  console.log(eventsList.slice(0, 6), 'slice operator');

  console.log(userId, 'asdfgvhbjkbnmk');

  const [events, setEvents] = useState();

  const [data, setData] = useState({
    pageNumber: 1,
    sortCondition: '',
    searchTerm: '',
  });

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const editButtonClicked = (item) => {
    console.log('iam eidt', item);
    navigate('CreateEvent');
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
      getEventsList({
        token,
        data: { ...data, searchTerm: text, pageNumber: 1 },
      })
    );
  }, 1500);

  useEffect(() => {
    setEvents(eventsList);
  }, [eventsList]);

  useEffect(() => {
    dispatch(getEventsList({ token, data: data }));
  }, [data.sortCondition, data.pageNumber]);

  console.log('h');

  return (
    <>
      <HStack>
        <Box display={{ base: 'none', lg: 'block', md: 'block' }}>
          <Text textStyle={'text'} display='flex'>
            FITNESS
            <Text fontWeight={'thin'}> GRAM</Text>
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
              <Text textStyle={'textHead'}>Sort By</Text>
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
					display={{ base: "none", lg: "block", md: "block" }}
					rightIcon={<BsPlusCircleFill fill="white" />}
					backgroundColor="green"
					borderRightRadius="full"
					borderLeftRadius="full"
					color="white"
					onClick={editButtonClicked}
				>
					Create Event{" "}
				</Button> */}
        <Box
          cursor={'pointer'}
          display={{ base: 'none', md: 'flex', lg: 'flex ' }}
          gap='2'
          rounded='3xl'
          bg='green'
          px='5'
          py='1'
          onClick={editButtonClicked}
        >
          <Text color='white' textStyle={'textHead'}>
            Create Event
          </Text>
          <BsPlusCircleFill fill='white' className='mt-1' />
        </Box>
      </HStack>

      <HStack display={{ base: 'block', md: 'none', lg: 'none' }}>
        <Box
          display={{ base: 'flex' }}
          justifyContent={{ base: 'space-between' }}
          alignItems='center'
          gap='2'
          mt='2'
          mb='4'
          px='1'
        >
          <Text textStyle={'textHead'}>
            <b>FITNESS</b>GRAM
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
              onClick={editButtonClicked}
            >
              <Text color='white'>Create Event</Text>
              <BsPlusCircleFill fill='white' className='mt-1' />
            </Box>
          ) : null}
        </Box>
        {/* <Spacer /> */}

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
        {/* <Box display={{ base: 'flex flex-col' }} mt='2'>
          <Input
            inlineSize='58'
            placeholder='Search'
            name='searchTerm'
            mt='2'
            mb='2'
            // value={data?.searchTerm}
            onChange={(e) => {
              searchEvents(e.target.value);
            }}
          />

          <Select
            inlineSize='auto'
            name='sortCondition'
            value={data?.sortCondition}
            onChange={handleChange}
            placeholder='Sort-By'
            textStyle={'textHead'}
          >
            <option value=' '>Event Start Date</option>
            <option value='alphabetic_ASC'>A to Z</option>
            <option value='alphabetic_DESC'>Z to A</option>
          </Select>
        </Box> */}
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
      ) : !events?.length ? (
        <Text textAlign='center' mt='5' textStyle={'textHead'}>
          NO EVENTS FOUND FOR THE USER
        </Text>
      ) : (
        <>
          <Stack mt='0' py='4'>
            <SimpleGrid columns={{ md: 2, lg: 3 }} rowGap={5} columnGap={6}>
              {events?.length &&
                events.map((item, index) => (
                  <Box
                    shadow='lg'
                    rounded={'lg'}
                    mb='3'
                    ml={{ base: '-1px', md: '0', lg: '0px' }}
                  >
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
                      <Flex
                        gap='1'
                        cursor='pointer'
                        onClick={() => {
                          navigate(`/role/${role}/edit-event/${item.uuid}`);
                          // dispatch(setEventDataById({}));
                        }}
                      >
                        <Text textStyle={'textHead'}>Edit</Text>

                        <Image
                          src={edit}
                          w={{ base: '3', md: '5', lg: '5' }}
                          h={{ base: '3', md: '5', lg: '5' }}
                        />
                      </Flex>
                    </Flex>

                    <Flex justify={'space-between'} m='2' mb='4' pl='2' pr='2'>
                      <Box>
                        <Text
                          textStyle={'textHead'}
                          css={{
                            '&:first-letter': {
                              textTransform: 'uppercase',
                            },
                          }}
                        >
                          Type: Fitness Tests
                        </Text>

                        <Flex mt='5' gap='2'>
                          <Image
                            src={calendarImg}
                            w={{ base: '5', md: '5', lg: '5' }}
                            h={{ base: '5', md: '5', lg: '5' }}
                          />

                          <Text
                            fontFamily={'body'}
                            fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }}
                            minWidth='max-content'
                            css={{
                              '&:first-letter': {
                                textTransform: 'uppercase',
                              },
                            }}
                            // whiteSpace='nowrap'
                          >
                            Start Date :
                            {moment(item.start_date).format(
                              navigator.language === 'en-GB'
                                ? 'DD-MM-YYYY'
                                : 'MM-DD-YYYY'
                            )}
                            {/* Start Date: {item.start_date?.split("T")[0]} */}
                          </Text>
                        </Flex>
                      </Box>
                      {/* <Box minW='1rem'>
                        <Image src={girlImg} minW={'10%'} />
                      </Box> */}
                      <Image src={girlImg} w='20%' />
                    </Flex>
                    <Flex gap={'3'} mt='3' px='3'>
                      <Flex
                        gap={'2'}
                        display={{ base: 'flex ', md: 'flex', lg: 'flex' }}
                      >
                        <Image
                          src={absent}
                          w={{ base: '5', md: '5', lg: '5' }}
                          h={{ base: '5', md: '5', lg: '5' }}
                        />

                        <Text
                          textStyle={'textHead'}
                          whiteSpace='nowrap'
                          css={{
                            '&:first-letter': {
                              textTransform: 'uppercase',
                            },
                          }}
                        >
                          {item.participants || 0} Participants
                        </Text>
                      </Flex>

                      <Flex
                        gap={'3'}
                        display={{ base: 'flex ', md: 'flex', lg: 'flex' }}
                        ml={{ base: '10px', md: '0px', lg: '0px' }}
                      >
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
                          {item.missing_data || 0} Missing data
                        </Text>
                      </Flex>
                    </Flex>

                    <Box>
                      <Text
                        whiteSpace='nowrap'
                        textAlign={'center'}
                        fontFamily={'body'}
                        fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }}
                        textDecoration='underline'
                        color={'primary'}
                        cursor='pointer'
                        mt='5'
                        mb='2.5'
                        onClick={() => {
                          setSelectedEventCardData(item);
                          setIsViewDataClicked(true);
                        }}
                      >
                        View Data
                      </Text>
                    </Box>
                  </Box>
                ))}
            </SimpleGrid>

            {isViewDataClicked ? (
              <TestRegularModal
                isViewDataClicked={isViewDataClicked}
                setIsViewDataClicked={setIsViewDataClicked}
                event={selectedEventCardData}
              />
            ) : null}
          </Stack>
        </>
      )}

      {!events?.length || totalPages === 1 ? null : (
        <>
          <Flex
            justifyContent={{ base: 'center', md: 'space-between' }}
            alignItems='center'
            m={{ md: 0, lg: 0, xl: 5 }}
            w='full'
            pt='5'
          >
            <Box
              w={{ md: 40, lg: 60, xl: 60 }}
              px='5'
              display={{ base: 'none', md: 'block' }}
            >
              <Image
                src={run}
                className='w-[10rem] h-[6rem] '
                // display={{ base: 'none', md: 'flex' }}
              />
            </Box>

            <Flex justifyContent={{ base: 'center' }} marginRight='20px'>
              <ReactPaginate
                breakLabel='...'
                nextLabel='Next>'
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
          </Flex>
        </>
      )}
    </>
  );
};

export default Teacher;

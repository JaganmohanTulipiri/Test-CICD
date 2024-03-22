import React, { useEffect, useState } from "react";
import editImg from "../../../assets/images/Icon feather-edit@2x.png";
import presentImg from "../../../assets/images/absent@2x.png";
import absentImg from "../../../assets/images/absent.png";
import calendarImg from "../../../assets/images/Icon awesome-calendar-alt@2x.png";
import createEventImg from "../../../assets/images/Group 2977@2x.png";
import clockImg from "../../../assets/images/clock-rotate-icon.svg";
import girlImg from "../../../assets/images/Group 3776@2x.png";

import excerciseImg from "../../../assets/images/exerciseIcon.svg";
import run from "../../../assets/images/undraw_fitness_stats_sht6 (1)@2x.png";
import pendingImage from "../../../assets/images/clock-rotate-right-icon.svg";
import tickImage from "../../../assets/images/tick-icon.svg";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStudentViewDataId } from "../../../pages/AuthWorkFlow/authSlice";

import StudentData from "./StudentData";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Img,
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
  Text,
} from "@chakra-ui/react";
import {
  getStudentFitnessGramList,
  getTestResultsData,
  setStudentSelectedEventCard,
  setUpdateStudentResponse,
} from "../../../store/slices/studentSlice/studentSlice";
import { getEventsList } from "../../teacher/teacherSlice";
import ReactPaginate from "react-paginate";
import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsSortAlphaDown, BsSortAlphaUpAlt } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import moment from "moment";

const studentsList = [
  {
    id: 1,
    heading: "Test Regular 10000",
    date: 10 / 22 / 2022,
    text: "24 Test Events",
    image: pendingImage,
    result: "Pending",
  },
  {
    id: 2,
    heading: "Test Regular 10000",
    date: 10 / 22 / 2022,
    text: "24 Test Events",
    image: pendingImage,
    result: "Pending",
  },
  {
    id: 3,
    heading: "Test Regular 10000",
    date: 10 / 22 / 2022,
    text: "24 Test Events",
    image: pendingImage,
    result: "Pending",
  },
  {
    id: 4,
    heading: "Test Regular 10000",
    date: 10 / 22 / 2022,
    text: "24 Test Events",
    image: tickImage,
    result: "Validated",
  },
  {
    id: 5,
    heading: "Test Regular 10000",
    date: 10 / 22 / 2022,
    text: "24 Test Events",
    image: tickImage,
    result: "Validated",
  },
  {
    id: 6,
    heading: "Test Regular 10000",
    date: 10 / 22 / 2022,
    text: "24 Test Events",
    image: tickImage,
    result: "Validated",
  },
];

const StudentViewData = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginResponse = useSelector((state) => state?.profile?.user);

  const token = useSelector((state) => state?.profile?.token);

  const userRole = useSelector((state) => state.profile.selectedRole);
  const totalPages = useSelector((state) => state?.teacher?.totalPages);

  const updateStudentResponse = useSelector(
    (state) => state?.student?.updateStudentResponse
  );

  const studentSelectedEventCard = useSelector(
    (state) => state?.student?.studentSelectedEventCard
  );

  const [isClciked, setIsClicked] = useState(false);

  const [studentItemCard, setStudentItemCard] = useState("");
  const [events, setEvents] = useState();

  const [isViewDataClicked, setIsViewDataClicked] = useState(false);

  const [selectedEventCardData, setSelectedEventCardData] = useState({});

  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState({
    pageNumber: 1,
    sortCondition: "",
    searchTerm: "",
  });

  //   const studentEventsList = useSelector(
  //     (state) => state?.student?.studentFitnessGramEventsList
  //   );

  const studentEventsList = useSelector((state) => state?.teacher?.eventsList);

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
    setEvents(studentEventsList);
  }, [studentEventsList]);

  useEffect(() => {
    dispatch(getEventsList({ token, data: data }));
  }, [data.sortCondition, data.pageNumber]);

  console.log(studentEventsList, "studentEventsList");

  return (
    <Stack>
      <>
        <Box display={{ base: "block", lg: "none", md: "none" }} ml="1">
          <Text>
            <b>FITNESS</b>GRAM
          </Text>
        </Box>

        <HStack
          display={{ base: "flex", md: "none" }}
          justifyContent={{ base: "space-between", md: "space-between" }}
        >
          {/* <Box display={{ base: "none", lg: "flex", md: "flex" }}>
            <Text>
              <b>FITNESS</b>GRAM
            </Text>
          </Box> */}
          {/* <Spacer display={{base:"none", md:"block"}} /> */}

          <Box
            display="flex"
            justifyContent={{ base: "space-between", md: "flex-end" }}
            w="full"
            alignItems="center"
            gap="2"
          >
            <InputGroup
              size="sm"
              inlineSize="48"
              display={{ base: "block", md: "block" }}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray-3" />}
              />
              <Input
                display={{ base: "block", lg: "block", md: "block" }}
                inlineSize="48"
                placeholder="Search"
                name="searchTerm"
                borderRadius="full"
                // value={data?.searchTerm}
                onChange={(e) => {
                  searchEvents(e.target.value);
                }}
              />
            </InputGroup>

            <Popover trigger="hover" placement="bottom-start" isLazy>
              <PopoverTrigger>
                <Flex
                  gap="2"
                  border={{ base: "", md: "1px solid gray" }}
                  rounded="3xl"
                  px={{ base: "0", md: "6" }}
                  py="0.2rem"
                >
                  <Text display={{ base: "none", md: "block" }}>Sort By</Text>
                  <Text>
                    <Icon
                      position="relative"
                      as={BiSortAlt2}
                      boxSize={{ base: "9", md: "6" }}
                      backgroundColor="head"
                      color="project.100"
                      rounded={{ base: "lg", md: "sm" }}
                      px={{ base: "1", md: "0" }}
                    />
                  </Text>
                </Flex>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  position="absolute"
                  borderWidth="0"
                  boxShadow="lg"
                  w="auto"
                  right={{ base: "-3rem", md: "-9rem" }}
                  zIndex={401} // So it can go above the map.
                >
                  <PopoverBody userSelect="none" whiteSpace="nowrap">
                    <Stack>
                      <HStack>
                        <Icon as={AiOutlineCalendar} boxSize="4" />
                        <Text>Event Start Date</Text>
                        <Spacer />
                        <Radio
                          onChange={handleChange}
                          name="sortCondition"
                          value=""
                          isChecked={data.sortCondition === ""}
                        ></Radio>
                      </HStack>

                      <HStack>
                        <Icon as={BsSortAlphaDown} boxSize="4" />
                        <Text> A to Z</Text>
                        <Spacer />
                        <Radio
                          onChange={handleChange}
                          name="sortCondition"
                          value="alphabetic_ASC"
                          isChecked={data.sortCondition === "alphabetic_ASC"}
                        ></Radio>
                      </HStack>

                      <HStack>
                        <Icon as={BsSortAlphaUpAlt} boxSize="4" />
                        <Text>Z to A</Text>
                        <Spacer />

                        <Radio
                          onChange={handleChange}
                          name="sortCondition"
                          value="alphabetic_DESC"
                          isChecked={data.sortCondition === "alphabetic_DESC"}
                        ></Radio>
                      </HStack>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Box>
        </HStack>

        <HStack
          display={{ base: "none", md: "flex" }}
          justifyContent={{ base: "space-between", md: "space-between" }}
        >
          <Box display={{ base: "none", lg: "flex", md: "flex" }} ml="1">
            <Text>
              <b>FITNESS</b>GRAM
            </Text>
          </Box>
          {/* <Spacer display={{base:"none", md:"block"}} /> */}

          <Box
            display="flex"
            justifyContent={{ base: "space-between", md: "flex-end" }}
            w="full"
            alignItems="center"
            gap="2"
          >
            <InputGroup
              size="sm"
              inlineSize="48"
              display={{ base: "block", md: "block" }}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray-3" />}
              />
              <Input
                display={{ base: "block", lg: "block", md: "block" }}
                inlineSize="48"
                placeholder="Search"
                name="searchTerm"
                borderRadius="full"
                // value={data?.searchTerm}
                onChange={(e) => {
                  searchEvents(e.target.value);
                }}
              />
            </InputGroup>

            <Popover trigger="hover" placement="bottom-start" isLazy>
              <PopoverTrigger>
                <Flex
                  gap="2"
                  border={{ base: "", md: "1px solid gray" }}
                  rounded="3xl"
                  px={{ base: "0", md: "6" }}
                  py="0.2rem"
                >
                  <Text display={{ base: "none", md: "block" }}>Sort By</Text>
                  <Text>
                    <Icon
                      position="relative"
                      as={BiSortAlt2}
                      boxSize={{ base: "9", md: "6" }}
                      backgroundColor="head"
                      color="project.100"
                      rounded={{ base: "lg", md: "sm" }}
                      px={{ base: "1", md: "0" }}
                    />
                  </Text>
                </Flex>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  position="absolute"
                  borderWidth="0"
                  boxShadow="lg"
                  w="auto"
                  right={{ base: "-3rem", md: "-9rem" }}
                  zIndex={401} // So it can go above the map.
                >
                  <PopoverBody userSelect="none" whiteSpace="nowrap">
                    <Stack>
                      <HStack>
                        <Icon as={AiOutlineCalendar} boxSize="4" />
                        <Text>Event Start Date</Text>
                        <Spacer />
                        <Radio
                          onChange={handleChange}
                          name="sortCondition"
                          value=""
                          isChecked={data.sortCondition === ""}
                        ></Radio>
                      </HStack>

                      <HStack>
                        <Icon as={BsSortAlphaDown} boxSize="4" />
                        <Text> A to Z</Text>
                        <Spacer />
                        <Radio
                          onChange={handleChange}
                          name="sortCondition"
                          value="alphabetic_ASC"
                          isChecked={data.sortCondition === "alphabetic_ASC"}
                        ></Radio>
                      </HStack>

                      <HStack>
                        <Icon as={BsSortAlphaUpAlt} boxSize="4" />
                        <Text>Z to A</Text>
                        <Spacer />

                        <Radio
                          onChange={handleChange}
                          name="sortCondition"
                          value="alphabetic_DESC"
                          isChecked={data.sortCondition === "alphabetic_DESC"}
                        ></Radio>
                      </HStack>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Box>
        </HStack>

        {/* <HStack>
				<Box display={{ base: "none", lg: "block", md: "block" }}>
					<Text textStyle={"text"}>
						<b>FITNESS</b>GRAM
					</Text>
				</Box>
				<Spacer />

				<InputGroup size="sm" inlineSize="48">
					<InputLeftElement
						pointerEvents="none"
						children={<SearchIcon color="gray-3" />}
					/>
					<Input
						display={{ base: "none", lg: "block", md: "block" }}
						inlineSize="48"
						placeholder="Search"
						name="searchTerm"
						borderRadius="full"
						// value={data?.searchTerm}
						onChange={(e) => {
							searchEvents(e.target.value);
						}}
					/>
				</InputGroup>

				<Popover trigger="hover" placement="bottom-start" isLazy>
					<PopoverTrigger>
						<Flex gap="2">
							<Text>Sort By</Text>
							<Icon
								position="relative"
								as={BiSortAlt2}
								boxSize="6"
								backgroundColor="head"
								color="project.100"
							/>
						</Flex>
					</PopoverTrigger>
					<Portal>
						<PopoverContent
							position="absolute"
							borderWidth="0"
							boxShadow="lg"
							w="auto"
							zIndex={401} // So it can go above the map.
						>
						
							<PopoverBody userSelect="none" whiteSpace="nowrap">
								<Stack>
									<HStack>
										<Icon as={AiOutlineCalendar} boxSize="4" />
										<Text>Event Start Date</Text>
										<Spacer />
										<Radio
											onChange={handleChange}
											name="sortCondition"
											value=""
											isChecked={data.sortCondition === ""}
										></Radio>
									</HStack>

									<HStack>
										<Icon as={BsSortAlphaDown} boxSize="4" />
										<Text> A to Z</Text>
										<Spacer />
										<Radio
											onChange={handleChange}
											name="sortCondition"
											value="alphabetic_ASC"
											isChecked={data.sortCondition === "alphabetic_ASC"}
										></Radio>
									</HStack>

									<HStack>
										<Icon as={BsSortAlphaUpAlt} boxSize="4" />
										<Text>Z to A</Text>
										<Spacer />

										<Radio
											onChange={handleChange}
											name="sortCondition"
											value="alphabetic_DESC"
											isChecked={data.sortCondition === "alphabetic_DESC"}
										></Radio>
									</HStack>
								</Stack>
							</PopoverBody>
						</PopoverContent>
					</Portal>
				</Popover>

				<Button
					display={{ base: "none", lg: "block", md: "block" }}
					rightIcon={<BsPlusCircleFill fill="white" />}
					backgroundColor="green"
					borderRightRadius="full"
					borderLeftRadius="full"
					color="white"
					onClick={editButtonClicked}
				>
					Create Event{" "}
				</Button>
			</HStack> */}

        <SimpleGrid
          columns={{ md: 2, lg: 3, "4xl": 4 }}
          rowGap={5}
          columnGap={6}
        >
          {events?.length > 0 &&
            events?.map((each) => (
              <Box
                // width={[
                //   '100%', // 0-30em

                //   '100%', // 62em+
                // ]}
                shadow="lg"
                rounded={"lg"}
                mb="3"
                ml={{ base: "-1px", md: "0", lg: "0px" }}
                key={each.uuid}
              >
                <Flex
                  justify={"space-between"}
                  p="3"
                  bg="head"
                  roundedTop={"xl"}

                  //className='flex justify-between items-center p-3 bg-[#E7F1FF] rounded-t-lg'
                >
                  <Text
                    css={{
                      '&:first-letter': {
                        textTransform: 'uppercase',
                      },
                    }}
                    textStyle="textHead"
                  >
                    <b>{each.event_name}</b>
                  </Text>
                  <Flex gap="1" cursor="pointer">
                    <Img
                      src={each.results ? tickImage : pendingImage}
                      alt="image"
                    />

                    <Text
                      // fontSize={{
                      //   base: '14px',
                      //   md: '13px',
                      //   lg: '15px',
                      // }}
                      textStyle={'textHead'}
                      color={each.results ? "fit" : "red"}
                    >
                      {each.results ? "Validated" : "Pending"}
                    </Text>
                  </Flex>
                </Flex>
                <Flex justifyContent="space-between" m="2" mb="4" pl="2" pr="2">
                  <Box>
                    <Text
                     textStyle={'textHead'}
                      minWidth="max-content"
                    >
                      Type: {each.event_type}
                    </Text>
                    <Flex mt="6" gap="2">
                      <Image
                        src={calendarImg}
                        w={{ base: "5", md: "5", lg: "5" }}
                        h={{ base: "5", md: "5", lg: "5" }}
                      />

                      <Text
                        textStyle={'textHead'}
                        minWidth="max-content"
                      >
                        Start Date:{" "}
                        {moment(each.start_date).format(
                          navigator.language === "en-GB"
                            ? "DD-MM-YYYY"
                            : "MM-DD-YYYY"
                        )}
                      </Text>
                    </Flex>
                    <Box display={"flex"} gap={"3"} mt="5">
                      <Img src={excerciseImg} alt="excercise-image" />
                      <Text
                        textStyle={'textHead'}
                        minWidth="max-content"
                      >
                        {each.total_test_items} Test Events
                      </Text>
                    </Box>
                  </Box>
                  {/* <>
                    <>
                      <Text
                        fontSize={{ base: '14px', md: '13px', lg: '15px' }}
                        fontFamily={'body'}
                      >
                        Type: {each.event_type}
                      </Text>
                    </>
                    <Flex mt='6' gap='2'>
                      <Img
                        src={calendarImg}
                        w={{ base: '5', md: '5', lg: '5' }}
                        h={{ base: '5', md: '5', lg: '5' }}
                      />
                      <Text
                        fontSize={{
                          base: '14px',
                          md: '13px',
                          lg: '15px',
                        }}
                        fontFamily={'body'}
                      >
                        Start Date: {each.start_date?.slice(0, 10)}
                      </Text>
                    </Flex>

                    <div className='flex items-center gap-2 mt-4'>
                      <Img src={excerciseImg} alt='excercise-image' />
                      <h1 className='font-poppins-medium text-[0.8rem]'>
                        {each.total_test_items} Test Events
                      </h1>
                    </div>
                  </> */}
                  <Box w="6rem">
                    <Image
                      src={girlImg}
                      // objectFit='cover'
                      // alt='calendar'
                      w={"80%"}
                    />
                  </Box>
                </Flex>

                {/* <div className='text-center mt-5'>
                  <StudentData
                    selectedItem={each}
                    selectedCard={{
                      uuid: each.uuid,
                      end_date: each.end_date,
                      event_type: each.event_type,
                      total_test_items: each.total_test_items,
                      results: each.results,
                      event_name: each.event_name,
                      date: each.start_date?.slice(0, 10),
                      test_items: each.test_items,
                    }}
                  />
                </div> */}

                <Box>
                  <Text
                    whiteSpace="nowrap"
                    textAlign={"center"}
                    textStyle={'textHead'}
                    textDecoration="underline"
                    color={"primary"}
                    cursor="pointer"
                    mt="5"
                    mb="2.5"
                    onClick={() => {
                      setSelectedEventCardData(each);
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
          <StudentData
            isViewDataClicked={isViewDataClicked}
            setIsViewDataClicked={setIsViewDataClicked}
            selectedCard={selectedEventCardData}
          />
        ) : null}

        <Flex
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
          m={{ md: 0, lg: 0, xl: 5 }}
          w="full"
          pt="5"
        >
          <Box
            w={{ md: 40, lg: 60, xl: 60 }}
            px="5"
            display={{ base: "none", md: "block" }}
          >
            <Image
              src={run}
              className="w-[10rem] h-[6rem] "
              // display={{ base: 'none', md: 'flex' }}
            />
          </Box>

          <Flex justifyContent={{ base: "center" }}>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next >"
              onPageChange={handlePageNumber}
              pageRangeDisplayed={5}
              pageCount={totalPages}
              previousLabel="<Previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
          </Flex>

          {/* <Box
          display={{ base: "flex", md: "flex", lg: "flex" }}
          justifyContent="flex-end"
          alignItems="center"
          mt="5"
          marginLeft={{ base: "0rem", md: "15rem", lg: "25rem" }}
        >
          
          {viewAllEventsButtonsClicked ? (
            <Button
              bgColor="fit"
              textColor="white"
              borderRadius="20"
              px="5"
              mr="5"
              onClick={showLessEventsButtonClicked}
            >
              Show Less Events
            </Button>
          ) : (
            <Button
              bgColor="fit"
              textColor="white"
              borderRadius="20"
              px="5"
              mr="5"
              onClick={showAllEventsButtonClicked}
            >
              View All Events
            </Button>
          )}
        </Box> */}
          {/* </Flex> */}
        </Flex>
      </>
    </Stack>
  );
};

export default StudentViewData;

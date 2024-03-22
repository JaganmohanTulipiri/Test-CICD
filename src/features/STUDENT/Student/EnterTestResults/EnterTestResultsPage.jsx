import React, { useEffect } from "react";

import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";

import { Select } from "chakra-react-select";

import { Card, CardHeader, CardBody, CardFooter, Icon } from "@chakra-ui/react";
import { VscFilePdf } from "react-icons/vsc";
import { IoMdStarOutline } from "react-icons/io";

import pendingImage from "../../../../assets/images/clock-rotate-right-icon.svg";

import tickImage from "../../../../assets/images/tick-icon.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OthersList from "./OthersList";
import {
  getStudentFitnessGramList,
  getTestResultsData,
  setIsEditClicked,
  setStudentSelectedEventCard,
} from "../../../../store/slices/studentSlice/studentSlice";

const EnterTestResultsPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const loginResponse = useSelector((state) => state?.profile?.user);

  const token = useSelector((state) => state?.profile?.token);

  const userRole = useSelector((state) => state.profile.selectedRole);

  const updateStudentResponse = useSelector(
    (state) => state?.student?.updateStudentResponse
  );

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "orange", label: "Orange" },
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "orange", label: "Orange" },
  ];

  const [searchValue, setSearchValue] = useState("");

  const studentEventsList = useSelector(
    (state) => state?.student?.studentFitnessGramEventsList
  );

  console.log(studentEventsList, "student event list");

  const studentSelectedEventCard = useSelector(
    (state) => state?.student?.studentSelectedEventCard
  );

  const [searchedListItems, setSearchedListItems] = useState([]);

  const [filteredEventsListItems, setFilteredEventsListItems] = useState([]);

  const recommendedList = [
    {
      id: 1,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "Test Regular January 2025",
      result: false,
    },

    {
      id: 2,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "Test Regular March 2023",
      result: true,
    },
    {
      id: 3,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "Test Regular May 2023",
      result: true,
    },
    {
      id: 4,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "Test Regular July 2023",
      result: true,
    },
    {
      id: 5,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "Test Regular August 2023",
      result: false,
    },
    {
      id: 6,
      starIcon: IoMdStarOutline,
      pdfIcon: VscFilePdf,
      text: "Test Regular October 2023",
      result: true,
    },
  ];

  const handleInputChange = (searchText) => {
    console.log(searchText, "searchTextsearchTextsearchText");
    // searchText.length >= 3 &&
    //   dispatch(
    //     getTeachersBySchool({
    //       token,
    //       schoolId: schoolID,
    //       body: { search_text: searchText },
    //     })
    //   );
  };

  const onhandleChange = (selectedItem) => {
    console.log(
      selectedItem,
      "newListnewListnewListnewList selectedItemselectedItem"
    );

    // setFormData((prevState) => ({ ...prevState, user_uuid: teacher.value }));

    console.log(
      filteredEventsListItems,
      "newListnewListnewListnewList filteredEventsListItems"
    );

    const newList = filteredEventsListItems?.filter((each) =>
      each?.event_name?.includes(selectedItem?.label)
    );

    setFilteredEventsListItems(newList);
  };

  const handleFocus = (event) => {
    console.log("hii");
    console.log(event);

    setIsDropdownOpened(true);
  };

  const handleChange = (event) => {
    console.log(event, "iam onChange");
    setSearchValue(event.target.value);
  };

  const filteredOptions =
    studentEventsList !== undefined &&
    studentEventsList?.length > 0 &&
    studentEventsList?.filter((option) =>
      option.event_name.toLowerCase().includes(searchValue.toLowerCase())
    );

  console.log(isButtonClicked, "isbutton clicked");

  const studentResultSelectedItem = (item) => {
    console.log(item, "iam item");

    dispatch(setIsEditClicked(item?.results));

    dispatch(setStudentSelectedEventCard(item));

    navigate("/role/Student/EnterStudentDataTable", {
      state: { studentData: { text: item.event_name, result: item.result } },
    });
  };

  const outsideClicked = (event) => {
    if (event.target.className !== "chakra-input css-qtvzvp") {
      setIsDropdownOpened(false);
    }
  };

  useEffect(() => {
    const userDetails = {
      accesser_uuid: loginResponse?.response?.uuid,
      accesser_role: userRole,
    };

    dispatch(getStudentFitnessGramList({ body: userDetails, token }));
  }, []);

  useEffect(() => {
    if (studentEventsList?.length) {
      let arr = [];
      studentEventsList.forEach((eventItem) => {
        console.log(eventItem, "eventItemeventItem");

        let obj = { label: eventItem.event_name, value: eventItem.uuid };
        arr.push(obj);
      });
      setSearchedListItems([...arr]);
    }
    
    
    // else {
    //   setSearchedListItems([]);
    // }

    setFilteredEventsListItems(studentEventsList);
  }, [studentEventsList]);

  console.log(
    filteredEventsListItems,
    "searchedListItemssearchedListItemssearchedListItems"
  );

  useEffect(() => {
    const userDetails = {
      user_uuid: loginResponse && loginResponse?.response?.uuid,
      event_uuid: studentSelectedEventCard && studentSelectedEventCard?.uuid,
    };

    console.log(userDetails, "userDetails");

    if (updateStudentResponse?.code === 200) {
      dispatch(getTestResultsData({ body: userDetails, token }));
    }
  }, [updateStudentResponse]);

  return (
    <>
      <div
        className="md:p-0 md:mt-10 md:w-[100%]  lg:w-auto"
        onClick={outsideClicked}
      >
        <Text
          fontFamily={"body"}
          fontWeight="bold"

          //className='font-poppins-medium text-md mt-5 md:px-5 lg:px-10 font-semibold	'
        >
          ENTER TEST RESULTS
        </Text>
        <Box
          display={{ base: "flex flex-col", md: "flex", lg: "flex" }}
          justifyContent="space-between"
          mt={"5"}
          ml="1"
          //className='flex justify-between  items-center mt-5 md:px-5 lg:px-10'
        >
          <Tabs variant="unstyled">
            <TabList>
              <Tab
                // className={`${
                //   isButtonClicked === false
                //     ? 'bg-primary text-white '
                //     : 'bg-gray-1 text-black'
                // } md:px-3 md:py-2 lg:px-4 lg:py-2 text-[0.8rem] font-poppins-small `}
                _selected={{
                  color: "white",
                  bg: "blue.500",
                  roundedLeft: "lg",
                }}
                onClick={() => {
                  setIsButtonClicked(false);
                }}
              >
                FITNESSGRAM
              </Tab>
              <Tab
                _selected={{
                  color: "white",
                  bg: "blue.500",
                  roundedRight: "lg",
                }}
                onClick={() => {
                  setIsButtonClicked(true);
                  setIsDropdownOpened(false);
                }}
              >
                Other
              </Tab>
            </TabList>
          </Tabs>


          <Box h="50vh">


          <Select
              mb="8px"
              useBasicStyles
              onInputChange={handleInputChange}
              name="user_uuid"
              onChange={onhandleChange}
              options={searchedListItems}
            ></Select>
          </Box>
          <Box
            mt={{ base: "5", lg: "0", md: "0" }}
            // position='relative'
            w={{ base: "100%", lg: "50%", md: "50%" }}
           
          >
            {/* <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon color='gray.300' />}
              />
              {isDropdownOpened ? (
                <Input
                  type='type'
                  placeholder='Search'
                  onChange={handleChange}
                  value={searchValue}
                />
              ) : (
                <Input
                  type='type'
                  placeholder='Search'
                  onFocus={handleFocus}
                  value={searchValue}
                />
              )}
            </InputGroup> */}

            {/* {isDropdownOpened ? (
              <div className='border border-white bg-white rounded-md absolute top-11 z-30 w-full shadow-lg h-[12rem] overflow-scroll'>
                {filteredOptions &&
                  filteredOptions?.map((each) => (
                    <p
                      className='bg-gray-1 p-2 m-2 border border-gray-1 rounded-md hover:bg-primary hover:text-white'
                      onClick={(event) => {
                        setSearchValue(event.target.textContent);
                        setIsDropdownOpened(false);
                      }}
                    >
                      {each.event_name}
                    </p>
                  ))}
              </div>
            ) : null} */}

       
          </Box>
        </Box>

        {isButtonClicked ? (
          <OthersList />
        ) : (
          <div className="">
            {filteredEventsListItems?.length > 0
              ? filteredEventsListItems?.map((each) => (
                  <Card
                    bg="#f5f5f5"
                    boxShadow="sm"
                    h="14"
                    border="1"
                    borderColor="yellow.600"
                    mt="2"
                  >
                    <CardBody
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      onClick={() => studentResultSelectedItem(each)}
                    >
                      <Text>{each.event_name}</Text>
                      <Box display={"flex"} gap={"1"}>
                        <Img
                          src={each.results ? tickImage : pendingImage}
                          alt="image"
                        />

                        <Text
                          textStyle="h6"
                          color={each.results ? "fit" : "red"}
                        >
                          {each.results ? "Validated" : "Pending"}
                        </Text>
                      </Box>
                    </CardBody>
                  </Card>
                ))
              : null}

            {/* {isDropdownOpened
              ? studentEventsList?.length &&
                studentEventsList?.map((each) => (
                  <>
                    <div className=' mt-5 md:px-5 lg:px-10'>
                      <Card
                        bg='#f5f5f5'
                        boxShadow='sm'
                        h='14'
                        border='1'
                        borderColor='yellow.600'
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

                            <Text
                              textStyle='h6'
                              color={each.results ? 'fit' : 'red'}
                            >
                              {each.results ? 'Validated' : 'Pending'}
                            </Text>
                          </Box>
                        </CardBody>
                      </Card>
                    </div>
                  </>
                ))
              : filteredOptions?.length &&
                filteredOptions?.map((each) => (
                  <>
                    <div className=' mt-5 md:px-5 lg:px-10'>
                      <Card bg='#f5f5f5' boxShadow='sm' border='1'>
                        <CardBody
                          display='flex'
                          alignItems='center'
                          justifyContent='space-between'
                          cursor={'pointer'}
                          onClick={() => studentResultSelectedItem(each)}
                        >
                          <Text
                            className='px-5'
                            fontSize='xs'
                            fontWeight='semibold'
                          >
                            {each.event_name}
                          </Text>
                          <div className='flex gap-1'>
                            <img
                              src={each.results ? tickImage : pendingImage}
                              alt='image'
                            />

                            <Text
                              textStyle='h6'
                              color={each.results ? 'fit' : 'red'}
                            >
                              {each.results ? 'Validated' : 'Pending'}
                            </Text>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </>
                ))} */}
          </div>
        )}
      </div>
    </>
  );
};

export default EnterTestResultsPage;

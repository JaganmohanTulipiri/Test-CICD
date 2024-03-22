import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  HStack,
  Image,
  Stack,
  Img,
  Center,
} from "@chakra-ui/react";

import { FiChevronDown } from "react-icons/fi";
import { RiArrowUpSLine } from "react-icons/ri";

import { useDisclosure } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";

import excerciseImg from "../../../assets/images/exerciseIcon.svg";

import absent from "../../../assets/customIcons/absent@2x.png";
import present from "../../../assets/customIcons/absent.png";
import calender from "../../../assets/images/Icon awesome-calendar-alt@2x.png";
import vesselImg from "../../../assets/images/vessel.svg";
import girlImg from "../../../assets/images/Group 3776@2x.png";

import pendingImage from "../../../assets/images/clock-rotate-right-icon.svg";
import tickImage from "../../../assets/images/tick-icon.svg";

import { useNavigate } from "react-router-dom";
import {
  setActivatingID,
  setTestSelectionButtonClicked,
} from "../../../store/slices/profileSlice";
import {
  getTestResultsData,
  setStudentSelectedEventCard,
} from "../../../store/slices/studentSlice/studentSlice";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

const StudentData = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginResponse = useSelector((state) => state?.profile?.user);

  const token = useSelector((state) => state?.profile?.token);

 

  const updateStudentResponse = useSelector(
    (state) => state?.student?.updateStudentResponse
  );

  const {
    isViewDataClicked,
    setIsViewDataClicked,
    studentItemCard,
    selectedCard,
    handleClick,
    selectedItem,
  } = props;

  console.log(selectedCard, "studentItemCardstudentItemCard");

  const {
    start_date,
    event_name,
    end_date,
    event_type,
    results,
    total_test_items,
    uuid,
    test_items,
  } = selectedCard;

  console.log(selectedCard, "selectedCardselectedCardselectedCard");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const fitApp = [
    {
      id: "1",
      name: "Test Regular 10000",
      text: "Edit",
      present: present,
      absent: absent,
      calender: calender,
      attend: "participants",
      miss: "Missing data",
      smart: "SmartCoach Resources",
      enterData: "Enter Data",
      viewData: "View Data ",
      test: " 20M Pacer, Aerobic Activity, Muscle-Strengthening Activity, Bone Strengthening- Activity, Tricep Skin Fold, Calf Skin Fold, Abdominal Skin Fold, Percent Body Fat, Curl-Up, Trunk Lift, Sit and Reach Left, Sit and Reach Right, Weight, Height.",
    },
  ];

  const smartCoachButtonClicked = () => {
    dispatch(setTestSelectionButtonClicked(true));

    navigate(`/role/Student/fitnessGram/SmartCoach/${uuid}`);

    dispatch(setActivatingID(3));
  };

  const viewEnterDataButtonClicked = (selectedItem) => {
    const userDetails = {
      user_uuid: loginResponse && loginResponse?.response?.uuid,
      event_uuid: selectedItem && selectedItem?.uuid,
    };

    console.log(userDetails, "userDetails");

    //  dispatch(getTestResultsData({ body: userDetails, token }));

    

    dispatch(setStudentSelectedEventCard(selectedItem));

    dispatch(setActivatingID(2));

    navigate(`/role/Student/EnterStudentDataTable`);
  };

  useEffect(() => {
    moment.locale("en"); // Example locale, replace 'en' with the desired locale code
  }, []);

  // useEffect(() => {
  //   const userDetails = {
  //     user_uuid: loginResponse && loginResponse?.response?.uuid,
  //     event_uuid: selectedItem && selectedItem?.uuid,
  //   };

  // 	console.log(userDetails, "userDetails")

  // 	if(updateStudentResponse?.code === 200){

  // 	  dispatch(getTestResultsData({ body: userDetails, token }));

  // 	}

  //   }, [updateStudentResponse])

  return (
    <>
      <Box w="sm">
        <Modal
          isOpen={isViewDataClicked}
          onClose={() => {
            setIsViewDataClicked(false);
            onClose;
          }}
          size="3xl"
          isCentered
        >
          <ModalOverlay />
          <ModalContent m="3">
            <ModalBody p="0" key={uuid && uuid}>
              <>
                <Box
                  display={"flex"}
                  bg="head"
                  p="2"
                  roundedTopRight={"lg"}
                  roundedTopLeft={"lg"}
                  justifyContent="space-between"
                  //className='flex justify-between items-center p-2  bg-head rounded-tr-lg rounded-tl-lg'
                >
                  <Box>
                    <Text
                      // className='font-poppins-medium text-[0.8rem] mt-3 ml-3 '
                      css={{
                        '&:first-letter': {
                          textTransform: 'uppercase',
                        },
                      }}
                      textStyle="textHead"

                    >
                      <b>{event_name && event_name}</b>
                    </Text>
                  </Box>

                  <Box display={"flex"} gap="2" mx="3">
                    <Img
                      src={results ? tickImage : pendingImage}
                      className="h-4 w-4"
                    />{" "}
                    <Text
                      fontSize={"sm"}
                      color={results ? "green" : "red"}
                      fontFamily={"body"}
                      //   className='font-poppins-medium text-[0.8rem] text-red'
                    >
                      {results ? "validated" : "Pending"}
                    </Text>
                  </Box>
                </Box>

                <Box
                  // display={"flex"}
                  // flexDirection="flex-col"
                  // justifyContent={"space-between"}
                  // mt="1"
                  // w="full"

                  mt="3"
                >
                  <>
                    <Box display="flex" justifyContent="space-between">
                      <Box w="full">
                        <Box
                          w="full"
                          display="flex"
                          flexDirection={{ base: "column", md: "row" }}
                        >
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            w="100%"
                          >
                            <Box
                              display="flex"
                              w="50%"
                              gap="3"
                              alignItems="center"
                            >
                              <Img src={calender} w="5" h="5" ml="4" />
                              <Text textStyle="textHead">Start Date</Text>
                            </Box>

                            <Box
                              display="flex"
                              w="60%"
                              gap="2"
                              justifyContent={{
                                base: "flex-start",
                                md: "flex-start",
                              }}
                              alignItems="center"
                            >
                              <Text>&#58;</Text>
                              <Text textStyle="textHead">
                                {moment(start_date).format(
                                  navigator.language === "en-GB"
                                    ? "DD-MM-YYYY"
                                    : "MM-DD-YYYY"
                                )}
                              </Text>
                            </Box>
                          </Box>

                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            w="100%"
                            mt={{ base: "2", md: "0" }}
                          >
                            <Box
                              display="flex"
                              w="50%"
                              gap="3"
                              alignItems="center"
                            >
                              <Img src={calender} w="5" h="5" ml="4" />
                              <Text
                                fontFamily={"body"}
                                fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                              >
                                End Date
                              </Text>
                            </Box>

                            <Box
                              display="flex"
                              w="60%"
                              gap="2"
                              justifyContent={{
                                base: "flex-start",
                                md: "flex-start",
                              }}
                              alignItems="center"
                            >
                              <Text>&#58;</Text>

                              <Text textStyle="textHead">
                                {moment(end_date).format(
                                  navigator.language === "en-GB"
                                    ? "DD-MM-YYYY"
                                    : "MM-DD-YYYY"
                                )}
                              </Text>
                            </Box>
                          </Box>
                        </Box>

                        <Box display="flex" gap="3" alignItems="center" mt="2">
                          <Img src={excerciseImg} w="5" h="10" ml="4" />
                          <Text textStyle="textHead">
                            {total_test_items && total_test_items} Test Events
                          </Text>
                        </Box>
                      </Box>

                      <Img
                        src={girlImg}
                        alt="girl-image"
                        display={{ base: "none", lg: "flex", md: "flex" }}
                        w={{ base: "none", md: "8rem", lg: "10rem" }}
                        h={{ base: "none", md: "5rem", lg: "5rem" }}
                        mt="2"
                        mr="2"
                      />
                    </Box>
                    <Box w="full">
                      {/* <Box display='flex' gap='3' alignItems='center' mt='2'>
                        <Img src={excerciseImg} w='5' h='10' ml='4' />
                        <Text textStyle='textHead'>
                          Test Items
                        </Text>
                      </Box> */}

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        w="100%"
                      >
                        <Box
                          display="flex"
                          w={{ base: "50%", md: "25%" }}
                          gap="3"
                          alignItems="flex-start"
                        >
                          <Img src={excerciseImg} w="5" h="10" ml="4" />
                          <Text textStyle="textHead" pt={{ base: "3" }}>
                            {" "}
                            Test Items
                          </Text>
                        </Box>

                        <Box
                          display="flex"
                          w={{ base: "60%", md: "75%" }}
                          gap="2"
                          justifyContent={{
                            base: "flex-start",
                            md: "flex-start",
                          }}
                          alignItems="flex-start"
                          pt={{ base: "2", md: "3" }}
                        >
                          <Text>&#58;</Text>
                          <Text
                            textStyle="textHead"
                            // w='full'
                            whiteSpace="wrap"
                            pr={{ lg: "2" }}
                            pt={{ base: "1", md: "0" }}
                          >
                            {test_items?.join(", ")}
                          </Text>
                        </Box>
                      </Box>
                    </Box>

                    {/* <Box className='my-2 '>
                      <Box
                        display={{
                          base: 'flex flex-col',
                          md: 'flex',
                          lg: 'flex',
                        }}

                        justifyContent={{base: "center", md:""}}

                        alignItems={"center"}
                        gap='2'

                        w={{base:"100%", md: "100%"}}

                        border='1px solid red'



                      >
                        <Box
                          display='flex'
                          justifyContent='space-between'
                          alignItems='center'
                          w='100%'

                        >
                          <Box
                            display='flex'
                            w='50%'
                            gap='3'
                            alignItems='center'
                          >
                            <Img src={calender} w='5' h='5' ml='4' />
                            <Text textStyle='textHead'>Start Date</Text>
                          </Box>

                          <Box
                            display='flex'
                            w='60%'
                            gap='2'
                            justifyContent={{ md: 'center' }}
                            alignItems='center'
                          >
                            <Text>&#58;</Text>
                            <Text textStyle='textHead'>
                              {moment(start_date).format(
                                navigator.language === 'en-GB'
                                  ? 'DD-MM-YYYY'
                                  : 'MM-DD-YYYY'
                              )}
                            </Text>
                          </Box>
                        </Box>

                        <Box
                          display='flex'
                          justifyContent='space-between'
                          alignItems='center'
                          w='100%'
                          mt={{ base: '2', md: '0' }}
                        >
                          <Box
                            display='flex'
                            w='50%'
                            gap='3'
                            alignItems='center'
                          >
                            <Img src={calender} w='5' h='5' ml='4' />
                            <Text
                              textStyle={'textHead'}
                            >
                              End Date
                            </Text>
                          </Box>

                          <Box
                            display='flex'
                            w='60%'
                            gap='2'
                            justifyContent={{ md: 'center' }}
                            alignItems='center'
                          >
                            <Text>&#58;</Text>

                            <Text textStyle='textHead'>
                              {moment(end_date).format(
                                navigator.language === 'en-GB'
                                  ? 'DD-MM-YYYY'
                                  : 'MM-DD-YYYY'
                              )}
                            </Text>
                          </Box>
                        </Box>
                      </Box>

                      <Box display='flex' gap='3' alignItems='center' mt='2'>
                        <Img src={excerciseImg} w='5' h='10' ml='4' />
                        <Text textStyle='textHead'>
                          {total_test_items && total_test_items} Test Events
                        </Text>
                      </Box>

                      <Box
                        display='flex'
                        justifyContent='space-between'
                        alignItems='flex-start'
                       w={{base:"100%", md: "120%"}}
  
                      >
    <Box
                          display='flex'
                          justifyContent='space-between'
                          alignItems='center'
                          w='100%'
                          mt={{ base: '2', md: '0' }}
                        >

                 

                        
                          <Box
                            display='flex'
                            w={{base:'50%', md:"30%"}}
                            gap='3'
                            alignItems='center'
      
                          >
                               <Img src={excerciseImg} w='5' h='10' ml='4' />
                            <Text
                              fontFamily={'body'}
                              fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }}
                            >
                              Test Items
                            </Text>
                          </Box>



          
                          <Box
                            display='flex'
                            w={{base:'60%', md:"65%", lg:"70%"}}
                            // gap='2'
                            justifyContent={{ md: 'flex-start' }}
                            alignItems='center'
                           
                          >
                            <Text pr={{base:"2", lg:"5"}}>&#58;</Text>

                            <Text
                            textStyle='textHead'
                            // w='full'
                            whiteSpace='wrap'
                            pr={{lg:"2"}}
                            
                
                          >
                            {test_items?.join(', ')}
                          </Text>
                          </Box>
                        </Box>

                      </Box>
                    </Box> */}
                  </>

                  {/* <Img
                    src={girlImg}
                    alt="girl-image"
                    display={{ base: "none", lg: "flex", md: "flex" }}
                    w={{ base: "none", md: "8rem", lg: "10rem" }}
                    h={{ base: "none", md: "5rem", lg: "5rem" }}
                    mt="2"
                    mr="2"
                  /> */}
                </Box>

                <Box className=" mx-2  my-3 ">
                  <Center>
                    <Box display="flex"
                      bg="primary"
                      mt="3"
                      px={{base: "2.5rem", md:"2.7rem", lg:"3rem", xl:"3.1rem"}}
                      py="2"
                      rounded="lg"
                      color="white"
                      // w="14rem"
                      onClick={smartCoachButtonClicked}
                      cursor="pointer"
                    >
                      <Img className="w-5 h-5 mt-0 mr-3" src={vesselImg} />
                      <Text
                    
                        textStyle="text"
                        mt="0.01rem"
                      >
                        SmartCoach
                      </Text>
                    </Box>
                  </Center>

                  <Center mb="2rem">
                    
                    <Text
                      color={"white"}
                      textStyle="text"
                 
                      onClick={() => viewEnterDataButtonClicked(selectedCard)}
                      bg="primary"
                      mt="3"
                      px="1.8rem"
                      py="2"
                      rounded="lg"
                      cursor="pointer"
                    >
                      View/Enter/Edit Data
                    </Text>
                  </Center>
                </Box>
              </>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default StudentData;

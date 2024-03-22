import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { FcClearFilters } from "react-icons/fc";
import { BsPrinter, BsThreeDots } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
import { FaFileCsv, FaUser } from "react-icons/fa";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import emailImg from "../../../../assets/images/StudentReportTableImages/email.png";
import StudentReportCard from "./StudentReportCard";
import FitnessGramStaticReport from "../../Others/FitnessReport/FitnessGramStaticReport";
import ReportFilter from "../../../../features/STUDENT/ReportFilter/ReportFilter";
import { useDispatch, useSelector } from "react-redux";
import { getStudentReportApiCall } from "../../../../store/slices/profileSlice";
import { useLocation, useNavigate } from "react-router-dom";
import StudentEventReportCard from "./StudentEventReportCard";
import { setSelectedStudentUUIDForReport } from "../../../../DistrictAdminApis/districtAdminSlice";
import { BiDotsHorizontal } from "react-icons/bi";

const ReportsOfStudents = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.pathname, "location pathname");

  const loggedInUserDetails = useSelector(
    (state) => state?.profile?.loggedInUserDetails
  );

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const loggedInUserReportDetails = useSelector(
    (state) => state?.profile?.loggedInUserReportDetails
  );

  const studentsListForReports = useSelector(
    (state) => state?.districtAdmin?.studentsListForReports
  );
  const selectedStudentUUIDForReport = useSelector(
    (state) => state?.districtAdmin?.selectedStudentUUIDForReport
  );

  console.log(loggedInUserDetails, "loggedInUserDetailsloggedInUserDetails");

  const data1 = [
    {
      id: "1",
      name: "Full Name",
      val: `${loggedInUserDetails?.last_name} ${loggedInUserDetails?.first_name}`,
    },
    {
      id: "2",
      name: "Age",
      val: 25,
    },
    {
      id: "3",
      name: "Grade",
      val: "25",
    },
    {
      id: "4",
      name: "DOB",
      val: loggedInUserDetails?.date_of_birth,
    },
    {
      id: "5",
      name: "Teacher",
      val: loggedInUserDetails?.date_of_birth,
    },
    {
      id: "6",
      name: "School",
      val: "25",
    },
    {
      id: "7",
      name: "Is",
      val: "25",
    },
  ];

  const handleClick = (item) => {
    console.log(`Accordion itemclicked hello`, item);

    dispatch(setSelectedStudentUUIDForReport(item.uuid));

    navigate(
      `/role/${selectedRole}/reports/fitness/StudentReportsTableData/student/${item.uuid}`
    );
  };

  return (
    <>
      {selectedRole === "student" ? (
        <Box>
          <SimpleGrid
            columns={{ base: "flex flex-row", md: 6, lg: 6 }}
            textColor="white"
            border="4px"
            borderColor={"primary"}
            bgColor={"primary"}
            borderRadius="1.5rem 1.5rem 0 0"
            cursor="pointer"
            py="2"
          >
            {Object.keys(loggedInUserDetails)?.length > 0 && (
              <>
                {data1.map((item, index) => {
                  return (
                    <Box
                      display={{
                        base: "inline-block",
                        md: "flex",
                        lg: "flex",
                      }}
                    >
                      <Grid templateColumns="repeat(5, 1fr)">
                        <GridItem colSpan="2">
                          <HStack>
                            <Text>{item.name}</Text>
                            <Spacer />
                            <Text>&#58;</Text>
                          </HStack>
                        </GridItem>
                        <GridItem colSpan="3">
                          <Text pl="4">{item.val}</Text>
                        </GridItem>
                      </Grid>
                    </Box>
                  );
                })}
              </>
            )}
          </SimpleGrid>

          <Box h="full" mt="2" className="example" overflowY={"scroll"}>
            <StudentEventReportCard />
          </Box>
        </Box>
      ) : (
        <>
          {studentsListForReports?.length > 0 ? (
            studentsListForReports?.map((each) => (
              <Box onClick={() => handleClick(each)} key={each?.uuid}>
                <Accordion allowToggle mt="3"     >
                  <AccordionItem border="none" display={{base: "block", md:"block"}}>
                    <AccordionButton
                      border="0px"
                      bgColor={"#F5F9FF"}
                      color="black"
                      mt={2}
                      _hover={{ bg: "#F5F9FF", color: "black" }}
                      roundedTop={"2xl"}
                      _focus={{
                        boxShadow: "none",
                        bg: "primary",
                        color: "white",
                      }}
                      _active={{ bg: "primary", color: "white" }}
                      py={4}
                    >
                      {/* <SimpleGrid 
                      
                      
                      // columns={8} 
                      
                      // rowGap={{base: 1, md:6, lg:10}} columnGap={{base: 1, md:10, lg:5}}
                      
                      templateColumns='repeat(12, 1fr)'

                      gap="3"
                      
                      
             >


                        <GridItem colStart={1} colEnd={3}>

                        
                        <Box display={"flex"}       >
                          <Text display={{base:"none", md:"inline-block"}}>
                            <FaUser className="mr-2" size={20} />
                          </Text>

                          <Text
                            whiteSpace={{base: "nowrap", md: "nowrap"}}
                          >{`${each?.last_name} ${each?.first_name}`}</Text>
                        </Box>



                        </GridItem>

                        <GridItem >

                        <Text whiteSpace={"nowrap"}  >Age: 11</Text>

                        </GridItem>


                        <GridItem >



                        <Text whiteSpace={"nowrap"}  >Grade: 11</Text>


                        </GridItem>



                        <GridItem >

                        <Text whiteSpace={"nowrap"}  >DOB: {each?.date_of_birth}</Text>

                        </GridItem>



                        <GridItem colStart={6} colEnd={8}>

                        <Text whiteSpace={"nowrap"}  >Teacher: {each?.teachers?.split(' ')?.[0]}</Text>


                        </GridItem>



                        <GridItem colStart={8} colEnd={10}>

                        <Text whiteSpace={"nowrap"}  >
                          School: {each?.school_name}
                        </Text>

                        </GridItem>


                        <GridItem colStart={10} colEnd={12}>

                        <Text whiteSpace={"nowrap"}  >IS: Green light ISD</Text>


                        </GridItem>






                        
               
                       
                        <GridItem colSpan={1}  >
                          <AccordionIcon />
                        </GridItem>
                      </SimpleGrid> */}

                      <Grid
                        templateColumns={{base: "repeat(1, 1fr)",
                          md: "repeat(4, 1fr)",
                          xl: "repeat(8, 1fr)",
                        }}
                        gap="2"
                        w="100%"
                        textAlign="start"

                      
                      >




{/* 
                        <GridItem colSpan="2">
                          <HStack>
                            <Text>Student Name</Text>
                            <Spacer />
                            <Text>&#58;</Text>
                          </HStack>
                        </GridItem>
                        <GridItem colSpan="3">
                          <Text pl="4">Kishore</Text>
                        </GridItem> */}
            








                        <GridItem colStart={{md:"1"}} colEnd={{md:"3"}}>
                          <Box display={"flex"}>
                            <Text
                              display={{ base: "none", md: "inline-block" }}
                            >
                              <FaUser className="mr-2" size={20} />
                            </Text>

                            <Text
                              whiteSpace={{ base: "nowrap", md: "nowrap" }}
                            >{`${each?.last_name} ${each?.first_name}`}</Text>
                          </Box>
                        </GridItem>

                        <GridItem >
                          <Text whiteSpace={"nowrap"}>Age: 11</Text>
                        </GridItem>

                        <GridItem>
                          <Text whiteSpace={"nowrap"}>Grade: 11</Text>
                        </GridItem>

                        <GridItem>
                          <Text whiteSpace={"nowrap"}>
                            DOB: {each?.date_of_birth}
                          </Text>
                        </GridItem>

                        <GridItem>
                          <Text whiteSpace={"nowrap"}>
                            Teacher: {each?.teachers?.split(" ")?.[0]}
                          </Text>
                        </GridItem>

                        <GridItem>
                          <Text whiteSpace={"nowrap"}>
                            School: {each?.school_name}
                          </Text>
                        </GridItem>

                        <GridItem>
                          <Box
                            display="flex"
                            gap={{ lg: "3", xl: "3" }}
                            alignItems="center"
                          >
                            <Text whiteSpace={"nowrap"}>
                              IS: Green light ISD
                            </Text>

                            <AccordionIcon />
                          </Box>
                        </GridItem>

                        {/* <GridItem colSpan={1}  >
  <AccordionIcon />
</GridItem>  */}
                      </Grid>




                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      {selectedStudentUUIDForReport &&
                        selectedStudentUUIDForReport === each?.uuid && (
                          <StudentEventReportCard />
                        )}
                    </AccordionPanel>
                  </AccordionItem>




                  









{/* 
                  <SimpleGrid
            columns={{ base: "flex flex-row", md: "none", lg: "none" }}
            textColor="white"
            border="4px"
            borderColor={"primary"}
            bgColor={"primary"}
            borderRadius="1.5rem 1.5rem 0 0"
            cursor="pointer"
            py="2"
            display={{base: "block", md:"none"}}

          >
            {Object.keys(loggedInUserDetails)?.length > 0 && (
              <>
                {data1.map((item, index) => {
                  return (
                    <Box
                      display={{
                        base: "block",
                        md: "none",
                        lg: "none",
                      }}
                    >
                      <Grid templateColumns="repeat(5, 1fr)">
                        <GridItem colSpan="2">
                          <HStack>
                            <Text>{item.name}</Text>
                            <Spacer />
                            <Text>&#58;</Text>
                          </HStack>
                        </GridItem>
                        <GridItem colSpan="3">
                          <Text pl="4">{item.val}</Text>
                        </GridItem>
                      </Grid>
                    </Box>
                  );
                })}
              </>
            )}
          </SimpleGrid>  */}





                </Accordion>
              </Box>
            ))
          ) : (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg"
                alt="no-data"
              />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default ReportsOfStudents;

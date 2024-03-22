import {
  BellIcon,
  QuestionIcon,
  Search2Icon,
  SearchIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
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
  Menu,
  MenuButton,
  VStack,
  MenuDivider,
  MenuList,
  MenuItem,
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
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import StudentEventReportCard from "./StudentEventReportCard";
import { setSelectedStudentUUIDForReport } from "../../../../DistrictAdminApis/districtAdminSlice";
import { BiDotsHorizontal } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import MobileReportOptions from "./MobileReportOptions";

// const StudentReportsTableDataList = [
//   {
//     id: 1,
//     userIcon: <FaUser className='mr-2' size={20} />,
//     studentName: 'AStudent1, John',
//     age: 'Age: 11',
//     grade: 'Grade: VI',
//     dob: 'DOB: 01/15/2011',
//     teacherName: 'Teacher: Barb Benton',
//     schoolName: 'School: Greenlight High School',
//     isName: 'IS: Greenlight ISD',
//     dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
//     dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
//   },

//   {
//     id: 2,
//     userIcon: <FaUser className='mr-2' size={20} />,
//     studentName: 'B.kishore',
//     age: 'Age: 11',
//     grade: 'Grade: VI',
//     dob: 'DOB: 01/15/2011',
//     teacherName: 'Teacher: Barb Benton',
//     schoolName: 'School: Greenlight High School',
//     isName: 'IS: Greenlight ISD',
//     dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
//     dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
//   },

//   {
//     id: 3,
//     userIcon: <FaUser className='mr-2' size={20} />,
//     studentName: 'k.JP',
//     age: 'Age: 11',
//     grade: 'Grade: VI',
//     dob: 'DOB: 01/15/2011',
//     teacherName: 'Teacher: Barb Benton',
//     schoolName: 'School: Greenlight High School',
//     isName: 'IS: Greenlight ISD',
//     dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
//     dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
//   },

//   {
//     id: 4,
//     userIcon: <FaUser className='mr-2' size={20} />,
//     studentName: 'N.Mounika',
//     age: 'Age: 11',
//     grade: 'Grade: VI',
//     dob: 'DOB: 01/15/2011',
//     teacherName: 'Teacher: Barb Benton',
//     schoolName: 'School: Greenlight High School',
//     isName: 'IS: Greenlight ISD',
//     dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
//     dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
//   },

//   {
//     id: 5,
//     userIcon: <FaUser className='mr-2' size={20} />,
//     studentName: 'Vijay',
//     age: 'Age: 11',
//     grade: 'Grade: VI',
//     dob: 'DOB: 01/15/2011',
//     teacherName: 'Teacher: Barb Benton',
//     schoolName: 'School: Greenlight High School',
//     isName: 'IS: Greenlight ISD',
//     dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
//     dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
//   },

//   {
//     id: 6,
//     userIcon: <FaUser className='mr-2' size={20} />,
//     studentName: 'M.Thrushitha',
//     age: 'Age: 11',
//     grade: 'Grade: VI',
//     dob: 'DOB: 01/15/2011',
//     teacherName: 'Teacher: Barb Benton',
//     schoolName: 'School: Greenlight High School',
//     isName: 'IS: Greenlight ISD',
//     dropDownIconUp: <BsChevronUp className='mr-2' size={20} />,
//     dropDownIcon: <BsChevronDown className='mr-2' size={20} />,
//   },
// ];

const StudentReportsTableData = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.pathname, "location pathname");

  const loggedInUserDetails = useSelector(
    (state) => state?.profile?.loggedInUserDetails
  );

  const loggedInUserReportDetails = useSelector(
    (state) => state?.profile?.loggedInUserReportDetails
  );

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const studentsListForReports = useSelector(
    (state) => state?.districtAdmin?.studentsListForReports
  );
  const selectedStudentUUIDForReport = useSelector(
    (state) => state?.districtAdmin?.selectedStudentUUIDForReport
  );

  const [isReportFilterClicked, setIsReportFilterClicked] = useState(false);

  const [runReportClicked, setRunReportClicked] = useState(false);


  const [isThreeDotsClicked, setIsThreeDotsClicked] = useState(false)

  // const [isSelectedStudentitem, setIsSelectedStudentitem] = useState(null);
  // const [isSelectedStudentID, setIsSelectedStudentID] = useState(null);

  // const studentDataItemClicked = (selectedItem) => {
  //   setIsSelectedStudentitem(!isSelectedStudentitem);

  //   console.log(selectedItem);

  //   setIsSelectedStudentID(selectedItem);
  // };

  // runReportButtonClicked

 const data = [
    {
      id: "1",
      name: "",
      icon: <Input className="w-[10vw] " />,
    },
    {
      id: "2",
      name: "Print",
      icon: <BsPrinter />,
    },
    {
      id: "3",
      name: "Email",
      icon: <Img src={emailImg} className="mr-2  w-5 h-5" />,
    },
    {
      id: "4",
      name: "PDF Download",
      icon: <VscFilePdf />,
    },
    {
      id: "5",
      name: "CSV Download",
      icon: <Search2Icon />,
    },
    {
      id: "6",
      name: "XPS Download",
      icon: <FaFileCsv />,
    },
  ];








  const data1 = [
    {
      id: "1",
      name: "Age",
      val: 25,
    },
    {
      id: "2",
      name: "Grade",
      val: "25",
    },
    {
      id: "3",
      name: "DOB",
      val: loggedInUserDetails?.date_of_birth,
    },
    {
      id: "4",
      name: "Teacher",
      val: loggedInUserDetails?.date_of_birth,
    },
    {
      id: "5",
      name: "School",
      val: "25",
    },
    {
      id: "6",
      name: "Is",
      val: "25",
    },
  ];

  const handleClick = (item) => {
    console.log(`Accordion itemclicked hello`, item);

    dispatch(setSelectedStudentUUIDForReport(item.uuid));

    // navigate(`/role/${selectedRole}/reports/fitness/StudentReportsTableData/${item.uuid}`)
  };

  console.log(
    studentsListForReports,
    "studentsListForReportsstudentsListForReports"
  );
  console.log(
    studentsListForReports,
    "studentsListForReportsstudentsListForReports"
  );

  return (
    <Box h="full">
      <Box
        display={{ base: "flex", lg: "flex", md: "flex" }}
        justifyContent={{
          base: "space-between",
          lg: "space-between",
          md: "space-between",
        }}
      >
        <Text
          fontFamily={"body"}
          fontWeight="bold"
          mt="2"
          fontSize={{ base: "sm", lg: "lg", md: "md" }}
        >
          FitnessGram Student Report
        </Text>
        <HStack
          bg="fit"
          p="2"
          rounded={"lg"}
          display={{ base: "none", lg: "flex", md: "flex" }}
          cursor={"pointer"}
          onClick={() => {
            setIsReportFilterClicked(true);
          }}
        >
          <Text fontFamily={"body"} color="white">
            Report filters
          </Text>
          <FcClearFilters color="white" size={20} />
        </HStack>

        <Box display={{ base: "block", lg: "none", md: "none" }}>
          <HStack onClick={() => setIsThreeDotsClicked(true)}>
            <BsThreeDots className="mt-1 bg-[gray-1]" size={25} />
          </HStack>
        </Box>

        
      </Box>


       <MobileReportOptions  isReportFilterClicked={isReportFilterClicked}
          setIsReportFilterClicked={setIsReportFilterClicked}
          runReportClicked={runReportClicked}
          setRunReportClicked={setRunReportClicked}  isThreeDotsClicked={isThreeDotsClicked} setIsThreeDotsClicked = {setIsThreeDotsClicked}/> 





      <Box>
        <ReportFilter
          isReportFilterClicked={isReportFilterClicked}
          setIsReportFilterClicked={setIsReportFilterClicked}
          runReportClicked={runReportClicked}
          setRunReportClicked={setRunReportClicked}
        />
      </Box>

      <SimpleGrid columns={{ base: "flex flex-row", md: 3, lg: 6 }} m="3">
        {data.map((item, index) => {
          return item.id === "1" ? (
            <Box gap={4} display={{ base: "none", md: "flex", lg: "flex" }}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Search Student" />
              </InputGroup>
            </Box>
          ) : (
            <Box
              display={{ base: "none", md: "flex", lg: "flex" }}
              justifyContent={{ base: "flex-start", md: "center" }}
              alignItems={"center"}
              gap={"4"}
              mt="2"
            >
              <Text>{item.icon}</Text>
              <Text> {item.name}</Text>
            </Box>
          );
        })}
      </SimpleGrid>

      <Box h="full" mt="2" className="example" overflowY={"scroll"}>
        <Outlet />
      </Box>
    </Box>
  );
};



export default StudentReportsTableData;

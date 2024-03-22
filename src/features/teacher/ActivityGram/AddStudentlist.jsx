import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Skeleton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { FiEdit, FiArrowDownRight } from "react-icons/fi";
import { SiAddthis } from "react-icons/si";

import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import NonSchoolDay from "./NonSchoolDay";
import SchoolDay1 from "./SchoolDay1";
import SchoolDay2 from "./SchoolDay2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAgStudentResultById } from "../teacherSlice";
import { useParams } from "react-router-dom";
import SuccessModal from "../../../components/SuccessModal";
import AddAgActivityModal from "../../STUDENT/Student/Others/ActivityGram/AgEnterDataModal";
import AgEnterDataModal from "../../STUDENT/Student/Others/ActivityGram/AgEnterDataModal";
import TableSkeleton from "../../../components/GlobalComponents/TableSkeleton";

// import SettingsModal from "./SettingsModal";
// import InstructionsModal from "./InstrctionsModal";

const AddStudentList = () => {
  const tabObj = { 1: <SchoolDay1 />, 2: <SchoolDay2 />, 3: <NonSchoolDay /> };
  let schoolDayObj = {
    0: "school_day_1",
    1: "school_day_2",
    2: "non_school_day",
  };

  const loading = useSelector((state) => state?.teacher?.loading);
  const [activeTab, setActiveTab] = useState(0);
  const userId = useSelector((state) => state.profile.userId);
  const token = useSelector((state) => state.profile.token);
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const studentDataById = useSelector(
    (state) => state.teacher.agStudentResultById
  );

  const role = useSelector((state) => state.profile.selectedRole);

  const responseCode = useSelector((state) => state?.teacher?.responseCode);

  console.log(studentDataById, "in ag school day page ========>");

  const params = useParams();

  const [agEnterDataModal, setAgEnterDataModal] = useState(false);
  const [selectedTimeObj, setSelectedTimeObj] = useState({});
  const [schoolDayData, setSchoolDayData] = useState({
    school_day_1: [],
    school_day_2: [],
    non_school_day: [],
  });
  // const [schoolDay, setSchoolDay] = useState(schoolDayObj[0]);
  // console.log(schoolDay, "school Day");
  const [time, setTime] = useState({ start_time: "", end_time: "" });
  // console.log(schoolDay, "school day");

  const dispatch = useDispatch();
  const timerList = [
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",

    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",

    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",

    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",

    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
  ];

  const handleRow = (index) => {
    let obj = schoolDayData[schoolDayObj[activeTab]].find(
      (item) => item.start_time == timerList[index]
    );
    if (obj) {
      return (
        <Tr>
          <Td
            onClick={() => {
              setAgEnterDataModal(true);
              setTime({
                start_time: timerList[index],
                end_time: timerList[index + 1],
              });
              setSelectedTimeObj(obj);
            }}
            cursor="pointer"
          >
            <Icon as={FiEdit} color="primary" />
          </Td>
          <Td>{timerList[index]}</Td>
          <Td>{timerList[index + 1]}</Td>
          <Td>{obj["type_of_activity"]}</Td>
          <Td>{obj["activity"]}</Td>
          <Td>{obj["level"]}</Td>
        </Tr>
      );
    }
    return (
      <Tr>
        <Td
          onClick={() => {
            setAgEnterDataModal(true);
            setTime({
              start_time: timerList[index],
              end_time: timerList[index + 1],
            });
            setSelectedTimeObj({});
          }}
          cursor="pointer"
        >
          <Icon as={SiAddthis} color="primary" />
        </Td>
        <Td>{timerList[index]}</Td>
        <Td>{timerList[index + 1]}</Td>
        <Td>Please add activity to your day</Td>
        <Td>&#8208;</Td>
        <Td>&#8208;</Td>
      </Tr>
    );
  };

  useEffect(() => {
    let body = {
      user_uuid: params.studentId,
      event_uuid: params.eventId,
    };
    dispatch(getAgStudentResultById({ token, body }));
  }, []);
  useEffect(() => {
    let result =
      studentDataById !== undefined &&
      studentDataById?.results !== undefined &&
      studentDataById?.results[0];
    result &&
      setSchoolDayData({
        school_day_1: result?.school_day_1,
        school_day_2: result?.school_day_2,
        non_school_day: result?.non_school_day,
      });
  }, [studentDataById]);
  useEffect(() => {
    if (!agEnterDataModal) {
      let body = {
        user_uuid: params.studentId,
        event_uuid: params.eventId,
      };
      dispatch(getAgStudentResultById({ token, body }));
    }
  }, [agEnterDataModal]);

  console.log(schoolDayData, "schoolDay data");
  console.log(schoolDayData[schoolDayObj[activeTab]], "type of activity");

  // console.log(studentData, "studentData in ag list=>");

  return (
    <>
      {loading ? (
        <>
		 <Grid templateColumns="repeat(4, 1fr)" gap="8" mt='5'>
          {[...Array(2)].map((num, index) => (
            <GridItem key={index}>
              <Skeleton height="2rem" startColor="gray-3" />
            </GridItem>
          ))}
        </Grid>
          <TableSkeleton />
        </>
      ) : (
        <Flex direction="column">
          <Stack spacing="4">
            <Flex justifyContent="space-between">
              {role && role === "student" ? (
                <Text textStyle="h2">
                  {studentDataById?.first_name} {studentDataById?.last_name}
                </Text>
              ) : (
                <>
                  <Text textStyle="h2">
                    {studentDataById?.first_name} {studentDataById?.last_name}
                  </Text>
                  {/* <Button
                rightIcon={<BsPlusCircleFill fill="white" />}
                backgroundColor="green"
                variant="outline"
                roundedLeft="10rem"
                roundedRight="10rem"
                color="white"
              >
                Add Activity{" "}
              </Button> */}
                </>
              )}
            </Flex>

            <Flex>
              <Button
                fontSize="sm"
                fontFamily="poppins"
                color={activeTab == 0 ? "white" : "black-2"}
                bgColor={activeTab == 0 ? "primary" : "gray-1"}
                onClick={() => setActiveTab(0)}
                borderLeftRadius="full"
                borderRightWidth="1px"
                borderColor="gray"
                px="10"
              >
                School Day 1
              </Button>
              <Button
                fontSize="sm"
                fontFamily="poppins"
                color={activeTab == 1 ? "white" : "black-2"}
                bgColor={activeTab == 1 ? "primary" : "gray-1"}
                onClick={() => setActiveTab(1)}
                borderRadius={0}
                borderRightWidth="1px"
                borderColor="gray"
                px="10"
              >
                School Day 2
              </Button>

              <Button
                fontSize="sm"
                fontFamily="poppins"
                color={activeTab == 2 ? "white" : "black-2"}
                bgColor={activeTab == 2 ? "primary" : "gray-1"}
                onClick={() => setActiveTab(2)}
                borderLeftRadius={0}
                borderRightRadius="full"
                px="10"
              >
                {" "}
                Non-School Day
              </Button>
            </Flex>
          </Stack>

          {/* {tabObj[activeTab]} */}
          {/* <CreateNewMapping /> */}
          <TableContainer>
            <Table variant="striped" colorScheme="bg" marginTop="2rem">
              <Thead>
                <Tr>
                  <Th> </Th>
                  <Th>Start</Th>
                  <Th>End</Th>
                  <Th>Type </Th>
                  <Th>Detail </Th>
                  <Th>Level </Th>
                </Tr>
              </Thead>
              <Tbody>
                {[...Array(32)].map((item, index) => {
                  return handleRow(index);
                })}
              </Tbody>
            </Table>
          </TableContainer>
          {agEnterDataModal && (
            <AgEnterDataModal
              schoolDay={schoolDayObj[activeTab]}
              selectedTimeObj={selectedTimeObj}
              agEnterDataModal={agEnterDataModal}
              setAgEnterDataModal={setAgEnterDataModal}
              time={time}
            />
          )}

          <SuccessModal
            code={responseCode}
            params={params}
            message="Data Updated"
          />
        </Flex>
      )}
    </>
  );
};

export default AddStudentList;

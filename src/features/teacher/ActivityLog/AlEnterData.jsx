import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Divider,
  Heading,
  Table,
  TableContainer,
  Box,
  Flex,
  Input,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Text,
  Spacer,
  Stack,
  Grid,
  GridItem,
  Skeleton,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { FaMonument } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import PositiveButton from "../../../components/PositiveButton";
import SuccessModal from "../../../components/SuccessModal";
import { alStoreStudentData, getAlStudentResultById } from "../teacherSlice";
import TableSkeleton from "../../../components/GlobalComponents/TableSkeleton";

const AlEnterData = () => {
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const studentDataById = useSelector(
    (state) => state.teacher.alStudentResultById
  );
  const userId = useSelector((state) => state.profile.userId);
  const token = useSelector((state) => state.profile.token);
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const loading = useSelector((state) => state?.teacher?.loading);
  const eventStartDate = useSelector(
    (state) => state.teacher.selectedAlEvent.start_date
  );
  const eventEndDate = useSelector(
    (state) => state.teacher.selectedAlEvent.end_date
  );

  const [currentTab, setCurrentTab] = useState(0);
  const [totalTabs, setTotalTabs] = useState();
  const [totalDays, setTotalDays] = useState(null);

  const [weekNames, setWeekNames] = useState([]);
  const [weeksData, setWeeksData] = useState([]);

  console.log(studentDataById, "student result by id");

  console.log(totalTabs, "no of tabs");
  console.log(eventStartDate, "event start date in al");

  console.log(eventEndDate, "event end date in al");

  const handleNextCurrentTab = () => {
    currentTab < totalTabs - 1 && setCurrentTab((prev) => prev + 1);
  };

  const handlePrevCurrentTab = () => {
    currentTab > 0 && setCurrentTab((prev) => prev - 1);
  };

  const handleOnChange = (e, index) => {
    let weeksDataCopy = weeksData.slice();

    let targetWeek = weeksDataCopy[currentTab];
    let targetWeekData = weeksDataCopy[currentTab]["weekData"].slice();
    let targetDay = weeksDataCopy[currentTab]["weekData"][index];
    targetWeekData.splice(index, 1, {
      ...targetDay,
      [e.target.name]: e.target.value,
    });

    let modifiedWeek = {
      ...targetWeek,
      weekData: targetWeekData,
    };

    weeksDataCopy.splice(currentTab, 1, modifiedWeek);

    setWeeksData(weeksDataCopy);
  };

  const handleSubmit = () => {
    let body = {
      student_uuid: params.studentId,
      challenge_uuid: params.challengeId,
      challenge_result: weeksData,
      submitted_by: userId,
      updated_by: selectedRole,
      days: totalDays,
      averageSteps: "12",
      averageMinutes: "12",
      status: "Incomplete",
    };
    dispatch(alStoreStudentData({ body, token }));
  };

  useEffect(() => {
    let body = {
      student_uuid: params.studentId,
      challenge_uuid: params.challengeId,
    };
    dispatch(getAlStudentResultById({ body, token }));
  }, []);

  useEffect(() => {
    studentDataById?.activityList?.challenge_result?.length &&
      setWeeksData([...studentDataById?.activityList?.challenge_result]);
    console.log(studentDataById, "in useEffect====>");
  }, [studentDataById]);

  useEffect(() => {
    const time = Math.abs(new Date(eventEndDate) - new Date(eventStartDate));
    const eventDays = Math.ceil(time / (1000 * 60 * 60 * 24)) + 1;

    setTotalDays(eventDays);

    let totalTabs = Math.ceil(eventDays / 7);
    setTotalTabs(totalTabs);
    setCurrentTab(0);
    let weekNameArr = [];
    let weekDataArr = [];
    for (let i = 0; i < totalTabs; i++) {
      let obj = {
        start_date: moment(eventStartDate)
          .add(i == 0 ? i * 6 : i * 7, "days")
          .format("ll"),
        end_date: moment(eventStartDate)
          // .add(i * 6 + 6 <= eventDays ? i * 6 + 6 : eventDays - 1, "days")
          .add(
            i == 0 ? 6 : i * 7 + 6 <= eventDays ? i * 7 + 6 : eventDays - 1,
            "days"
          )

          .format("ll"),
      };
      weekNameArr.push(obj);

      let weekObj = {
        monthDate: `${moment(obj.start_date)
          .format()
          .split("T")[0]
          .replace(/-/g, "/")} - ${moment(obj.end_date)
          .format()
          .split("T")[0]
          .replace(/-/g, "/")}`,
        weekData: [],
        dailyAverageSteps: "",
        dailyAverageMinutes: "",
      };

      if (i + 1 < totalTabs) {
        for (let j = 0; j < 7; j++) {
          let dayObj = {
            Date: `${moment(eventStartDate)
              .add(i * 7 + j, "days")
              .format()
              .split("T")[0]
              .replace(/-/g, "/")}`,
            Day: `${moment(eventStartDate)
              .add(i * 7 + j, "days")
              .format("dddd")}`,
            steps: "",
            minutes: "",
            enteredValues: true,
          };
          weekObj.weekData.push(dayObj);
        }
      } else {
        for (let j = 0; j < eventDays % 7; j++) {
          let dayObj = {
            Date: `${moment(eventStartDate)
              .add(i * 7 + j, "days")
              .format()
              .split("T")[0]
              .replace(/-/g, "/")}`,
            Day: `${moment(eventStartDate)
              .add(i * 7 + j, "days")
              .format("dddd")}`,
            steps: "",
            minutes: "",
            enteredValues: true,
          };
          weekObj.weekData.push(dayObj);
        }
      }

      weekDataArr.push(weekObj);
    }

    setWeekNames(weekNameArr);
    setWeeksData(weekDataArr);
  }, []);
  console.log(weekNames, "weeks arr");
  console.log(weeksData, "weeksData arr");
  console.log(studentDataById?.challenge_result, "challenge result");

  return (
    <>
      {loading ? (
        <>
          <Grid templateColumns="repeat(4, 1fr)" gap="8" mt="5">
            {[...Array(2)].map((num, index) => (
              <GridItem key={index}>
                <Skeleton height="2rem" startColor="gray-3" />
              </GridItem>
            ))}
          </Grid>
          <TableSkeleton />
        </>
      ) : (
        <>
          <Box>
            <Text textStyle="h4">
              {studentDataById?.challenge_name?.toUpperCase()}
            </Text>
          </Box>

          <Stack spacing="4">
            <Flex gap="6" align="start">
              <Flex direction="column" justify="flex-end">
                <Text textStyle="h4" inlineSize="7em">
                  Daily Goal
                </Text>
              </Flex>

              <Flex direction="column" inlineSize="4em" justify="flex-start">
                <Text textStyle="h4">Steps</Text>
                <Box bg="bg.100">
                  {studentDataById?.challenge_type === "steps"
                    ? studentDataById?.daily_goal
                    : "0"}
                </Box>
              </Flex>
              <Flex direction="column" inlineSize="4em" justify="flex-start">
                <Text textStyle="h4">Minutes</Text>
                <Box bg="bg.100">
                  {" "}
                  {studentDataById?.challenge_type === "Minutes"
                    ? studentDataById?.daily_goal
                    : "0"}
                </Box>
              </Flex>
            </Flex>
            <Flex gap="6">
              <Text textStyle="h4" inlineSize="7em">
                {" "}
                Daily Average
              </Text>
              <Box inlineSize="4em">
                <Box bg="bg.100">-</Box>
              </Box>
              <Box inlineSize="4em">
                <Box bg="bg.100">-</Box>
              </Box>
            </Flex>
          </Stack>

          <Divider borderColor="gray" />

          <Box
            marginTop="3"
            width="50rem"
            height="3rem"
            backgroundColor="#F5F9FF"
            p="4"
            borderRadius="3xl"
          >
            <Flex>
              <ArrowLeftIcon
                marginLeft="5"
                onClick={handlePrevCurrentTab}
                cursor="pointer"
              />
              <Spacer />
              <Text marginLeft="5">
                {weekNames[currentTab] &&
                  `${weekNames[currentTab]["start_date"]} - ${weekNames[currentTab]["end_date"]}`}
              </Text>
              <Spacer />
              <ArrowRightIcon
                marginLeft="5"
                onClick={handleNextCurrentTab}
                cursor="pointer"
              />
            </Flex>
          </Box>

          <TableContainer className="SuperAdminTables" marginTop="4">
            <Table variant="stripped">
              <Thead>
                <Tr>
                  <Th>
                    <Text textStyle="h4">Day of the Week</Text>
                  </Th>
                  <Th>
                    <Text textStyle="h4">Steps</Text>
                  </Th>
                  <Th>
                    <Text textStyle="h4">Minutes</Text>
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                {weeksData[currentTab] &&
                  weeksData[currentTab]["weekData"] &&
                  weeksData[currentTab]["weekData"].map((day, index) => {
                    return (
                      <Tr key={index + day}>
                        <Td>{day["Day"]}</Td>
                        <Td>
                          <Input
                            type="text"
                            // value={day["steps"]}
                            value={
                              weeksData[currentTab]["weekData"][index]["steps"]
                            }
                            width="50"
                            name="steps"
                            onChange={(e) => handleOnChange(e, index)}
                          ></Input>
                        </Td>
                        <Td>
                          <Input
                            type="text"
                            name="minutes"
                            value={
                              weeksData[currentTab]["weekData"][index][
                                "minutes"
                              ]
                            }
                            width="50"
                            onChange={(e) => handleOnChange(e, index)}
                          ></Input>
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex justify="center">
            <Box onClick={handleSubmit}>
              <PositiveButton text={"Submit"} />
            </Box>

            <SuccessModal message="Data Updated" params={params} />
          </Flex>
        </>
      )}
    </>
  );
};

export default AlEnterData;

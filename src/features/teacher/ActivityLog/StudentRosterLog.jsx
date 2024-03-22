import React, { useEffect, useState } from "react";
import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import MultiSelect from "multiselect-react-dropdown";
import { Spinner } from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Stack,
  Button,
} from "@chakra-ui/react";

import { AiOutlinePrinter } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";

import {
  getActivityLogClassList,
  getActivityLogStudentsList,
  getActivityLogFilterByStudent,
  setActivityLogFilterByStudent,
  setActivityLogStudentsList,
} from "../teacherSlice";
import TableSkeleton from "../../../components/GlobalComponents/TableSkeleton";

const StudentRosterLog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoading = useSelector((state) => state?.teacher?.loading);

  const [selectedClasses, setSelectedClasses] = useState([]);

  const classesList = useSelector((state) => state.teacher.classes);

  const [classes, setClasses] = useState([]);

  const [displayStudentData, setDisplayStudentData] = useState([]);

  const classList = useSelector(
    (state) => state?.teacher?.activityLogClassList?.ActivityClass
  );

  console.log(classes, "classesclassesclasses");

  const token = useSelector((state) => state?.profile?.token);

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const loading =useSelector(state=>state?.teacher?.loading)

  const [list, setList] = useState([]);
  const userId = useSelector((state) => state?.profile?.userId);
  console.log(userId);

  const studentList = useSelector(
    (state) => state?.teacher?.activityLogStudentsList
  );

  const filteredList = useSelector(
    (state) => state?.teacher?.activityLogStudentsList
  );

  console.log(studentList);

  const handleSelectClasses = (e) => {
    setSelectedClasses((prevState) => [...prevState, e[0].uuid]);
  };

  const handleRemoveClasses = (item) => {
    let modifiedClassList = selectedClasses.filter((clas) => clas != item.uuid);
    setSelectedClasses(modifiedClassList);
  };

  console.log(selectedClasses, "iam selectedd classes");

  useEffect(() => {
    dispatch(
      getActivityLogClassList({ challengeId: params.challengeId, token })
    );
    dispatch(
      getActivityLogStudentsList({ token, challengeId: params.challengeId })
    );
    console.log(studentList?.length, "iammm length");
  }, []);

  useEffect(() => {
    let body = {
      classes: selectedClasses,
      user_uuid: userId,
      challenge_uuid: params.challengeId,
    };

    dispatch(getActivityLogFilterByStudent({ token, body }));
  }, [selectedClasses]);

  useEffect(() => {
    classesList?.length && setClasses(classesList);
  }, [classesList]);

  useEffect(() => {
    setList(studentList);
  }, [studentList]);

  useEffect(() => {
    dispatch(
      getActivityLogStudentsList({ token, challengeId: params.challengeId })
    );
  }, [!filteredList?.length]);

  console.log(studentList, "from log");
  return (
    <Box>
      <Flex
        direction="row"
        justifyContent="space-between"
        marginTop="1rem"
        alignItems="center"
      >
        <Box>
          <Text> ACTIVITY Log StudenRegisterRoster</Text>
        </Box>

        <Flex direction="column">
          {/* <Box>
            <Button
              rightIcon={<BsPlusCircleFill fill="white" />}
              backgroundColor="green"
              variant="outline"
              roundedLeft="10rem"
              roundedRight="10rem"
              color="white"
              onClick={() => {
                navigate("/role/teacher/activityLog-createEvent");
              }}
            >
              Create Event{" "}
            </Button>
          </Box> */}
        </Flex>
      </Flex>

      <Box maxW="50%">
        {/* <Text mb="2">Classes</Text> */}
        <MultiSelect
          onRemove={(selectedList, item) => {
            handleRemoveClasses(item);
          }}
          onSelect={(event) => {
            handleSelectClasses(event);
          }}
          options={classList}
          displayValue="class_name"
        />
      </Box>
      {loading ? (
        <TableSkeleton />
      ) : !studentList?.length ? (
        <Text textAlign="center" mt="5">
          NO STUDENTS FOUND FOR THE CHALLENGE
        </Text>
      ) : (
        <Stack marginTop="4rem">
          <TableContainer>
            <Table variant="striped" colorScheme="bg">
              <Thead>
                <Tr>
                  <Th>Student Name</Th>
                  <Th>Days</Th>
                  <Th>Steps </Th>
                  <Th>Minutes </Th>
                  {/* <Th>Average Heart Rate </Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {list && list?.length > 0 ? (
                  list.map((item, index) => {
                    return (
                      <>
                        <Tr>
                          <Td
                            onClick={() => {
                              navigate(
                                `${location.pathname}/student/${item.uuid}`,
                                {
                                  state: {
                                    studentDetails: item,
                                  },
                                }
                              );
                              console.log("student in log clicked ========>");
                            }}
                          >
                            <Text as="a">{item.first_name}</Text>
                          </Td>
                          <Td>{item.days}</Td>
                          <Td>{item.steps}</Td>
                          <Td>{item.minutes}</Td>
                          {/* <Td>{item.days}</Td> */}
                        </Tr>
                      </>
                    );
                  })
                ) : (
                  <>
                    {isLoading ? (
                      <>
                        <Box>
                          <Spinner />
                        </Box>
                      </>
                    ) : null}
                  </>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      )}
    </Box>
  );
};

export default StudentRosterLog;

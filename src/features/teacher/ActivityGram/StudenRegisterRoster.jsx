import React, { useEffect } from "react";
import { CheckIcon, Search2Icon } from "@chakra-ui/icons";

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
} from "@chakra-ui/react";

import { AiOutlinePrinter } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getActivityGramEventStudentList } from "../teacherSlice";
import SuccessModal from "../../../components/SuccessModal";
import TableSkeleton from "../../../components/GlobalComponents/TableSkeleton";
import { useState } from "react";

const StudenRegisterRoster = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const params = useParams();
  const eventId = params.eventId;

  const navigate = useNavigate();

  console.log(params.eventId, "event id in test  ");

  const token = useSelector((state) => state?.profile?.token);
  const loading = useSelector((state) => state?.teacher?.loading);

  const studentList = useSelector(
    (state) => state?.teacher?.activityGramEventStudentList
  );

  // const [searchTerm,setSearchTerm]=useState('')
  const [displayList, setDisplayList] = useState(studentList);

  console.log(location.pathname, "path");

  const handleSearch = (e) => {
    let filterBySearch = [];
    if (e.target.value) {
      filterBySearch = studentList?.filter((item) =>
        item.first_name.toLowerCase().includes(e.target.value.toLowerCase())
      );

      // console.log(filterBySearch, studentList, "from 64");
      setDisplayList(filterBySearch);
    } else {
      setDisplayList(studentList);
    }
  };

  console.log(studentList, displayList, "from 66");

  useEffect(() => {
    dispatch(getActivityGramEventStudentList({ eventId, token }));
  }, []);
  return (
    <Box>
      <Flex
        direction="row"
        justifyContent="space-between"
        marginTop="1rem"
        alignItems="center"
      >
        <Box>
          <Text> ACTIVITYGRAM STUDENT ROSTER</Text>
        </Box>

        <Flex direction="column">
          <Box display="flex" fontFamily="poppins" alignItems="center">
            <AiOutlinePrinter />
            <Text color="primary">Print SpreadSheet</Text>
          </Box>
          <Box display="flex">
            <input type="checkbox" />
            <Text>Show only student missing data</Text>
          </Box>
        </Flex>
      </Flex>

      <InputGroup onChange={(e) => handleSearch(e)}>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="#C9C8C8" />}
        />
        <Input type="type" placeholder="Search" w="30rem" />
      </InputGroup>

      {loading ? (
        <TableSkeleton />
      ) : !studentList?.length ? (
        <Text textAlign="center" mt="5">
          NO STUDENTS FOUND FOR THE EVENT
        </Text>
      ) : (
        <Stack marginTop="4rem">
          <TableContainer>
            <Table variant="striped" colorScheme="bg">
              <Thead>
                <Tr>
                  <Th>Student Name</Th>
                  <Th>Day 1</Th>
                  <Th>Day 2 </Th>
                  <Th>Day 3 </Th>
                </Tr>
              </Thead>
              <Tbody>
                {displayList?.length &&
                  displayList.map((item, index) => {
                    return (
                      <>
                        <Tr>
                          <Td
                            onClick={() => {
                              navigate(
                                `${location.pathname}/student/${item.uuid}`
                              );
                            }}
                            color="#0081C8"
                            cursor="pointer"
                          >
                            {item?.first_name || "N/A"}{" "}
                          </Td>
                          <Td>InComplete</Td>

                          <Td>InComplete</Td>

                          <Td>InComplete</Td>
                        </Tr>
                      </>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      )}
    </Box>
  );
};

export default StudenRegisterRoster;

import {
  Box, Flex, Table,
  TableContainer,
  Tbody,
  Td, Text, Th,
  Thead,
  Tr
} from "@chakra-ui/react";

import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../../store/slices/superAdminSlice/superAdminSlice";

const TeacherList = (props) => {
  const dispatch = useDispatch();

  console.log(
    "props in teacherlist component props==============",
    props.schoolId
  );

  const token = useSelector((state) => state?.profile?.token);
  const loginResponse = useSelector((state) => state?.profile?.user);
  // const schoolId = props.schoolId;

  console.log("==========loginResponse==============", loginResponse);
  const teachersData = useSelector(
    (state) => state?.superAdmin?.getTeachersResponse?.data?.response
  );

  const [data, setData] = useState([]);

  const getSchoolDataBySchoolID = useSelector(
    (state) => state?.superAdmin?.schoolBySchoolId
  );

  const schoolId = getSchoolDataBySchoolID?.uuid;

  useEffect(() => {
    console.log("TeachersList useEffect=====", schoolId, token);
    dispatch(getAllTeachers({ schoolId: schoolId, token: token }));
    setData(teachersData);
  }, [schoolId]);

  console.log("teachersData===============", teachersData);
  const assignSelectOptions = [
    "Action",
    "Assign",
    "UnAssign",
    "Active Login",
    "Deactivate Login",
  ];
  return (
    <div>
      <Flex>
        <Box p="2" marginTop="4">
          <Text textStyle="h4">TEACHERS</Text>
        </Box>
      </Flex>
      <Flex></Flex>

      <TableContainer marginTop="2rem" className="SuperAdminTables">
        <Table variant="stripped" size="sm">
          <Thead>
            <Tr>
              <Th>
                <Flex>
                  <Text marginTop="2" marginRight="1rem" textStyle="h4">
                    Teacher Name
                  </Text>
                </Flex>
              </Th>

              <Th fontSize="1rem">ID</Th>
              <Th fontSize="1rem">Login Status</Th>
              <Th fontSize="1rem">Assigned to Class</Th>
            </Tr>
          </Thead>

          <Tbody>
            {teachersData?.length > 0 ? (
              teachersData?.map &&
              teachersData?.map((item, key) => (
                <Tr height="4rem">
                  <Td color="#1890ff">
                    {item.first_name} {item.last_name}
                  </Td>

                  <Td>{item.teacher_id}</Td>
                  <Td>{item.is_active === true ? "Active" : "InActive"}</Td>
                  <Td color="#1890ff">
                    {item.AdminClass.length > 0 ? "Assigned" : "UnAssigned"}
                  </Td>
                </Tr>
              ))
            ) : (
              <>
                <Text p="10">No Teachers Added</Text>
              </>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TeacherList;

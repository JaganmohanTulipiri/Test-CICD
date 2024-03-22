import {
  Box,
  Divider,
  Flex,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setPreviousPath } from "../../../store/slices/profileSlice";
import {
  getAllSchools,
  getSchoolsByDistrictId,
  setSchoolBySchoolId,
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import AddSchoolToDistrict from "./Popups/AddSchoolToDistrict";

const ParticipatingSchools = (districtId) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  console.log("Participating schools called", districtId);

  const token = useSelector((state) => state?.profile?.token);
  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const loginResponse = useSelector((state) => state?.profile?.user);
  const distrcitIDForDistrict = useSelector(
    (state) => state?.superAdmin?.distrcitIDForDistrict?.uuid
  );

  const addedSchoolResponse = useSelector(
    (state) => state?.superAdmin?.addSchool
  );

  console.log("==========loginResponse==============", loginResponse);
  const schoolsResponse = useSelector(
    (state) => state?.superAdmin?.districtsSchools
  );

  const [data, setData] = useState([]);

  const RedirectToSchool = (schoolData) => {
    console.log("SchoolData=============", schoolData);
    dispatch(setSchoolBySchoolId(schoolData));
    navigate(`/role/${selectedRole}/Districts/SchoolDetails`, {
      state: {
        data: schoolData,
      },
    });
    dispatch(setPreviousPath(location.pathname));
  };

  useEffect(() => {
    dispatch(
      getSchoolsByDistrictId({
        districtId: distrcitIDForDistrict,
        token: token,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      getSchoolsByDistrictId({
        districtId: distrcitIDForDistrict,
        token: token,
      })
    );
  }, [addedSchoolResponse]);

  useEffect(() => {
    console.log("DistrictSchoolsResponse=======", schoolsResponse);
    setData(schoolsResponse);
  }, [schoolsResponse]);

  const tableHeaders = ["SchoolName", "Local Identifier", "License(s)"];
  return (
    <div>
      <Flex p="2">
        <Box p="2">
          <Text textStyle="h4">Participating Schools</Text>
        </Box>
        <Spacer />

        {selectedRole !== "stateAdmin" && (
          <Box p="2">
            <AddSchoolToDistrict DistrictId={districtId} />
          </Box>
        )}
      </Flex>

      <Divider borderColor="gray" />
      <TableContainer className="SuperAdminTables" marginTop="4">
        <Table variant="stripped">
          <Thead>
            {tableHeaders.map((item) => (
              <Th>
                <Text textStyle="h4">{item}</Text>
              </Th>
            ))}
          </Thead>

          <Tbody>
            {data?.length > 0 &&
              data?.map((item, key) => (
                <Tr>
                  <Td color="#1890ff">
                    <Button
                      onClick={() => {
                        RedirectToSchool(item);
                      }}
                    >
                      {item.school_name}
                    </Button>
                  </Td>
                  <Td>{item.local_identifier}</Td>
                  <Td
                    onClick={() => {
                      RedirectToSchool(item);
                    }}
                  >
                    {item.licenses}
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ParticipatingSchools;

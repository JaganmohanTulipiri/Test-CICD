import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setPreviousPath } from "../../../store/slices/profileSlice";
import { setDistrcitIDForDistrict } from "../../../store/slices/superAdminSlice/superAdminSlice";

const DistrictsTable = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const tableHeaders = [
    "District Name",
    "City",
    "State",
    "Zip Code",
    "License(s)",
    "4-Digit Code",
  ];

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const RedirectToDistrict = (districtData) => {
    console.log(districtData);

    dispatch(setDistrcitIDForDistrict(districtData));

    navigate(`/role/${selectedRole}/Districts/DistrictDetails`, {
      state: {
        data: districtData,
      },
    });
    dispatch(setPreviousPath(location.pathname));
  };

  return (
    <div>
      <Flex>
        <Box>
          <Text textStyle="h4">Districts</Text>
        </Box>
      </Flex>
      <TableContainer className="SuperAdminTables" marginTop="4">
        <Table variant="stripped">
          <Thead>
            <Tr>
              {tableHeaders.map((item) => (
                <Th>
                  <Text textStyle="h4">{item}</Text>
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {props.tableData?.map((item, key) => (
              <Tr>
                {selectedRole === "superAdmin" ||
                selectedRole === "stateAdmin" ? (
                  <Td color="#1890ff">
                    <Button
                      onClick={() => {
                        RedirectToDistrict(item);
                      }}
                    >
                      {item.district_name}
                    </Button>
                  </Td>
                ) : (
                  <Td color="#1890ff">{item.district_name}</Td>
                )}

                <Td>{item.city}</Td>
                <Td>{item.state}</Td>
                <Td>{item.zipcode}</Td>
                {selectedRole === "superAdmin" ||
                selectedRole === "stateAdmin" ? (
                  <Box onClick={() => RedirectToDistrict(item)}>
                    <Td color="red.700" cursor={"pointer"}>
                      {item.licenses && item.licenses === ""
                        ? "empty"
                        : item.licenses}
                    </Td>
                  </Box>
                ) : (
                  <Td color="red.700">{item.licenses}</Td>
                )}

                <Td>{item.digitcode}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DistrictsTable;

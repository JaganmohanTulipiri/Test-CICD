import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setManageUser } from "../../../store/slices/profileSlice";

const WAAdmin = () => {
  const navigate = useNavigate();
  const [adminButtonColor, setAdminButtonColor] = useState("#537FE7");
  const [adminTextColor, setAdminTextColor] = useState("#FFFFFF");
  const [licenseTextColor, setLicenseTextColor] = useState("#000000");
  const [licenseButtonColor, setLicenseButtonColor] = useState("#EEEEEE");


  const getStateUUID = useSelector((state) => state?.superAdmin?.stateId);

  console.log("getStateUUID getStateUUID in WAAdmin", getStateUUID);

  const dispatch = useDispatch();

  const handleLicenseButtonClick = () => {
    navigate("/role/SuperAdmin/StatesPartners/WALicense");
  };
  const data = [
    {
      FirstName: "Raj",
      LastName: "Basu",
      Email: "rajbasu@xelpmoc.in",
      Phone: "9876543210",
      Status: "Active",
    },
  ];

  const tableHeaders = ["First Name", "Last Name", "Email", "Phone", "Status"];

  const handleStateAdminAddition = () => {
    dispatch(
      setManageUser({
        userType: "stateAdmin",
        formTitle: `Add State Administrator`,
        previousPath: location.pathname,
      })
    );
    navigate("/role/SuperAdmin/AddUser", { state: { role: "stateAdmin", stateUUID: getStateUUID} });
  };
  return (
    <>
      {/* <WA /> */}
      <Flex>
        <Box marginTop="4">
          <ButtonGroup>
            <Button
              backgroundColor="primary"
              borderRadius="none"
              marginRight="-0.5rem"
              color="white"
              borderLeftRadius="1rem"
              w="12rem"
            >
              ADMINISTRATORS
            </Button>
            <Button
              onClick={handleLicenseButtonClick}
              backgroundColor={licenseButtonColor}
              color={licenseTextColor}
              borderRadius="none"
              borderRightRadius="1rem"
              w="12rem"
            >
              LICENSES
            </Button>
          </ButtonGroup>
        </Box>
        <Spacer />
        <Box marginTop="3rem">
          <Button color="black" onClick={handleStateAdminAddition}>
            Add Administrator
          </Button>
          <AddIcon
            marginLeft="-0.4rem"
            backgroundColor="#0081c8"
            color="white"
            marginBottom="0.1rem"
            borderRadius="2rem"
            fontSize="1.3rem"
            p={"0.3rem"}
            marginRight="1rem"
          />
        </Box>
      </Flex>
      <TableContainer marginTop="0.5rem">
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
            {data.map((item, key) => (
              <Tr>
                <Link to="/role/SuperAdmin/StatesPartners/EditStateAdmin">
                  <Td color="#1890ff">{item.FirstName}</Td>
                </Link>
                <Td>{item.LastName}</Td>
                <Td>{item.Email}</Td>
                <Td>{item.Phone}</Td>
                <Td>{item.Status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default WAAdmin;

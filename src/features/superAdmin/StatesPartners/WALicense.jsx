import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Flex,
  Tr,
  Box,
  ButtonGroup,
  Button,
  Spacer,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import WA from "./WA";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const WALicense = () => {
  const navigate = useNavigate();
  const [adminButtonColor, setAdminButtonColor] = useState("#EEEEEE");
  const [adminTextColor, setAdminTextColor] = useState("#000000");
  const [licenseTextColor, setLicenseTextColor] = useState("#FFFFFF");
  const [licenseButtonColor, setLicenseButtonColor] = useState("#537FE7");

  const handleAdminButtonClick = () => {
    navigate("/role/SuperAdmin/StatesPartners/WAAdmin");
  };

  const data = [
    {
      LicenseName: "",
      Status: "",
      TotalLicensed: "",
      StartDate: "",
      EndDate: "",
    },
  ];

  const tableHeaders = [
    "License Name",
    "Status",
    "School Licensed/Total",
    "Start Date",
    "End Date"
  ]
  return (
    <>
      <WA />
      <Flex>
        <Box marginTop="4">
          <ButtonGroup>
            <Button
              onClick={handleAdminButtonClick}
              backgroundColor="#EEEEEE"
              color="black"
              marginRight="-0.5rem"
              borderRadius="none"
              borderLeftRadius="1rem"
              w="12rem"
            >
              ADMINISTRATORS
            </Button>
            <Button
              backgroundColor="primary"
              color="white"
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
          <Link to="">
            <Button color="black">Add Administrator</Button>
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
          </Link>
        </Box>
      </Flex>
      <Flex>
        <Spacer />
      </Flex>
      <TableContainer marginTop={"0.5rem"} p="4">
        <Table variant="stripped" color="">
          <Thead>
            <Tr>
              {tableHeaders.map((item) => (
                <Th><Text textStyle="h4">{item}</Text></Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {data.map((item, key) => (
              <Tr>
                <Td color="#1890ff">{item.LicenseName}</Td>
                <Td>{item.Status}</Td>
                <Td>{item.TotalLicensed}</Td>
                <Td>{item.StartDate}</Td>
                <Td>{item.EndDate}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default WALicense;

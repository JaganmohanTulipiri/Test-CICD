import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Button,
  ButtonGroup,
  Spacer,
  Box,
  Text
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const GAEmailHistoryTable = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/role/SuperAdmin/Notifications/Manage");
  };
  const RedirectToGASchool = () => {
    navigate("/role/SuperAdmin/Licenses/GASchool");
  };
  const RedirectToContactsHistory = () => {
    navigate("/role/SuperAdmin/Licenses/GAContactsHistory");
  };
  const RedirectToLicenseHistory = () => {
    navigate("/role/SuperAdmin/Licenses/GALicenseHistory");
  };
  const data = [
    {
      DateSent: "10/17/2022 08:56:00 AM",
      SentTo: "myemail@fitness.com",
      CC: "",
      Template: "Fitness Software Training",
      District: "Sugar Hill Christian Academy",
    },
    {
      DateSent: "10/17/2022 08:56:00 AM",
      SentTo: "myemail@fitness.com",
      CC: "",
      Template: "Fitness Software Training",
      District: "Sugar Hill Christian Academy",
    },
    {
      DateSent: "10/17/2022 08:56:00 AM",
      SentTo: "myemail@fitness.com",
      CC: "",
      Template: "Fitness Software Training",
      District: "Sugar Hill Christian Academy",
    },
    {
      DateSent: "10/17/2022 08:56:00 AM",
      SentTo: "myemail@fitness.com",
      CC: "",
      Template: "Fitness Software Training",
      District: "Sugar Hill Christian Academy",
    },
    {
      DateSent: "10/17/2022 08:56:00 AM",
      SentTo: "myemail@fitness.com",
      CC: "",
      Template: "Fitness Software Training",
      District: "Sugar Hill Christian Academy",
    },
    {
      DateSent: "10/17/2022 08:56:00 AM",
      SentTo: "myemail@fitness.com",
      CC: "",
      Template: "Fitness Software Training",
      District: "Sugar Hill Christian Academy",
    },
  ];

  const tableHeaders = [
    "Date Sent",
    "Sent to",
    "CC",
    "Template",
    "District",
    "Delete",
  ];
  return (
    <>
      <Flex marginTop="1rem" p="2">
        <Box>
          <ButtonGroup>
            <Button
              onClick={RedirectToGASchool}
              backgroundColor="#EEEEEE"
              color="black"
              marginRight="-0.5rem"
              borderRadius="none"
              borderLeftRadius="1rem"
              width="10rem"
            >
              SCHOOLS
            </Button>
            <Button
              onClick={RedirectToLicenseHistory}
              backgroundColor="#EEEEEE"
              color="black"
              borderRadius="none"
              width="10rem"
              marginRight="-0.5rem"
            >
              LICENSE HISTORY
            </Button>
            <Button
              onClick={RedirectToContactsHistory}
              backgroundColor="#EEEEEE"
              color="black"
              borderRadius="none"
              width="10rem"
              marginRight="-0.5rem"
            >
              CONTACTS
            </Button>
            <Button
              backgroundColor="primary"
              color="#ffffff"
              borderRadius="none"
              borderRightRadius="1rem"
              width="10rem"
            >
              EMAIL HISTORY
            </Button>
          </ButtonGroup>
        </Box>
        <Spacer />
       
      </Flex>

      <TableContainer marginTop="2rem" className="SuperAdminTables">
        <Table variant="stripped">
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
                <Td>{item.DateSent}</Td>
                <Td>{item.SentTo}</Td>
                <Td>{item.CC}</Td>
                <Td>{item.Template}</Td>
                <Td>{item.District}</Td>
                <Td color="red">
                  <DeleteIcon/>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default GAEmailHistoryTable;

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
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const AmherstSchoolTable = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/role/SuperAdmin/Notifications/Manage");
  };
  const data = [
    {
      School: "Abbot School",
      District: "ANN ARBOR PUB SCHOOL DISTRICT",
      State: "MI",
      Status: "Active",
      StartDate: "11/01/2025",
      EndDate: "11/01/2023",
    },
    {
      School: "Angell School",
      District: "ANN ARBOR PUB SCHOOL DISTRICT",
      State: "MI",
      Status: "Active",
      StartDate: "11/01/2025",
      EndDate: "11/01/2023",
    },
    {
      School: "Ann Arbor Open at Mach School",
      District: "ANN ARBOR PUB SCHOOL DISTRICT",
      State: "MI",
      Status: "Inactive",
      StartDate: "11/01/2025",
      EndDate: "11/01/2023",
    },
    {
      School: "Bach Elementary School",
      District: "ANN ARBOR PUB SCHOOL DISTRICT",
      State: "MI",
      Status: "Inactive",
      StartDate: "11/01/2025",
      EndDate: "11/01/2023",
    },
    {
      School: "Buns Park Elementary School",
      District: "ANN ARBOR PUB SCHOOL DISTRICT",
      State: "MI",
      Status: "Active",
      StartDate: "11/01/2025",
      EndDate: "11/01/2023",
    },
    {
      School: "Abbot School",
      District: "ANN ARBOR PUB SCHOOL DISTRICT",
      State: "MI",
      Status: "Active",
      StartDate: "11/01/2025",
      EndDate: "11/01/2023",
    },
  ];

  return (
    <>
      <Flex marginTop="1rem" p="2">
        <Box>
          <ButtonGroup>
            <Button
              backgroundColor="primary"
              color="#ffffff"
              marginRight="-0.5rem"
              borderRadius="none"
              borderLeftRadius="1rem"
              width="10rem"
            >
              SCHOOLS
            </Button>
            <Button
              onClick={handleButtonClick}
              backgroundColor="#EEEEEE"
              color="black"
              borderRadius="none"
              width="10rem"
              marginRight="-0.5rem"
            >
              LICENSE HISTORY
            </Button>
            <Button
              onClick={handleButtonClick}
              backgroundColor="#EEEEEE"
              color="black"
              borderRadius="none"
              width="10rem"
              marginRight="-0.5rem"
            >
              CONTACTS
            </Button>
            <Button
              onClick={handleButtonClick}
              backgroundColor="#EEEEEE"
              color="black"
              borderRadius="none"
              borderRightRadius="1rem"
              width="10rem"
            >
              EMAIL HISTORY
            </Button>
          </ButtonGroup>
        </Box>
        <Spacer />
        <Box marginTop="3rem">
          <Link to="">
            Add School to License
            <AddIcon
              marginLeft="0.4rem"
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

      <TableContainer marginTop="2rem" className="SuperAdminTables">
        <Table variant="stripped" >
          <Thead>
            <Tr>
              <Th>School</Th>
              <Th>District</Th>
              <Th>State</Th>
              <Th>Status</Th>
              <Th>Start Dtae</Th>
              <Th>End Date</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>

          <Tbody>
            {data.map((item, key) => (
              <Tr>
                <Td color="#1890ff">{item.School}</Td>
                <Td>{item.District}</Td>
                <Td>{item.State}</Td>
                <Td>{item.Status}</Td>
                <Td>{item.StartDate}</Td>
                <Td>{item.EndDate}</Td>
                <Td color="red">
                  <DeleteIcon />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AmherstSchoolTable;

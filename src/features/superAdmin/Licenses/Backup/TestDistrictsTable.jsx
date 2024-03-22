import { DeleteIcon } from "@chakra-ui/icons";
import {
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
import { Link } from "react-router-dom";
import AddingSchoolDatetime from "../../Popups/AddingSchoolDatetime";

const TestDistrictTable = () => {
  const columnNames = [
    "School",
    "District",
    "State",
    "Status",
    "Start Date",
    "End Date",
    "Delete",
  ];

  const data = [
    {
      school: "Angeli School",
      district: "ANN ARBOR PUB SCHOOL DISTRICT",
      state: "MI",
      status: "Active",
      startdate: "09/28/2015",
      enddate: "09/28/2025",
    },
  ];
  return (
    <>
      <TableContainer marginTop="0.5rem" className="SuperAdminTables">
        <Table variant="stripped">
          <Thead>
            <Tr>
              {columnNames.map((item) => (
                <Th>
                  <Text textStyle="h4">{item}</Text>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, key) => (
              <Tr>
                <Td><AddingSchoolDatetime SchoolName={item.school}/></Td>
                <Td>{item.district}</Td>
                <Td>{item.state}</Td>
                <Td>{item.status}</Td>
                <Td>{item.startdate}</Td>
                <Td>{item.enddate}</Td>
                <Td>
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

export default TestDistrictTable;

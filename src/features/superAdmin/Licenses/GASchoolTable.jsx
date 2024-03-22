import { ChevronDownIcon, ChevronUpIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSchoolLicenseById } from "../../../store/slices/superAdminSlice/superAdminSlice";

const GASchoolTable = () => {
  const licensedSchoolData = useSelector(
    (state) => state?.superAdmin?.licensedSchools
  );
  const token = useSelector((state) => state?.profile?.token);

  const dispatch = useDispatch();
  console.log("licensed schools data", licensedSchoolData?.data?.response);

  const tableHeaders = [
    "School",
    "District",
    "State",
    "Status",
    "Start Date",
    "End Date",
    "Delete",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(licensedSchoolData?.data?.response);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  console.log("data", data);

  const handleSchoolLicenseDeletion = (id) => {
    dispatch(deleteSchoolLicenseById({ uuid: id, token: token }));
  };

  return (
    <Box>
      <IconButton
        icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        variant="ghost"
        onClick={handleToggle}
        aria-label={isOpen ? "Hide data" : "Show data"}
      />

      <Collapse in={isOpen}>
        <Table variant="striped" size="sm">
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
            {data?.length > 0 &&
              data?.map((item, index) =>
                item?.schools?.map((school, index) => (
                  <Tr key={index}>
                    <Td>{school?.school_name}</Td>
                    <Td>{item?.district_name}</Td>
                    <Td>NA</Td>
                    <Td>{school?.status}</Td>
                    <Td>{school?.license_start_date?.split("T")[0]}</Td>
                    <Td>{school?.license_end_date.split("T")[0]}</Td>
                    <Td>
                      <DeleteIcon
                        color="red"
                        cursor="pointer"
                        onClick={handleSchoolLicenseDeletion(school?.uuid)}
                      />
                    </Td>
                  </Tr>
                ))
              )}
          </Tbody>
        </Table>
      </Collapse>
    </Box>
  );
};

export default GASchoolTable;

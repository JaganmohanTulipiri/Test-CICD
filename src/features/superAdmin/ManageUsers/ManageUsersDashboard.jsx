import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider, Flex, Input,
  Select, Spacer, Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import HelpDeskTable from "./HelpDeskTable";
import ManageUserAdminTable from "./ManageUserAdminTable";

const ManageUsersDashboard = () => {

  const [selectedOption, setSelectedOption] = useState("admin");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }
  return (
    <>
      <Flex>
        <Box>
          <Text textStyle="h4">MANAGE USERS</Text>
        </Box>
        <Spacer />
      </Flex>

      <Flex p="4">
        <Box flex="1">
          <Text>User Type</Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="20rem"
            border="none"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="helpdesk">Help Desk</option>
            <option value="admin">Admin</option>
          </Select>

         
        </Box>

        <Box flex="1">
          <Text>Login Status</Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="20rem"
            border="none"
          >
            <option value="active">Active</option>
            <option value="inactive">InActive</option>
          </Select>
        </Box>

        <Box>
          <Text>Birth Date</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            placeholder="05/12/2022"
            border="none"
            width="20rem"
          />
          <CalendarIcon />
        </Box>
      </Flex>

      <Divider borderColor="gray" />

      {selectedOption === "helpdesk" && <HelpDeskTable/>}
      {selectedOption === "admin" && <ManageUserAdminTable/>}
    </>
  );
};

export default ManageUsersDashboard;

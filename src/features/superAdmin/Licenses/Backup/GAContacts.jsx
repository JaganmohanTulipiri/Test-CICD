import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Select,
  Text,
  Input,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaFileExport } from "react-icons/fa";

import React from "react";
import GASchoolTable from "./GASchoolTable";
import AddNewLicenseContacts from "./AddNewLicenseContacts";

const GAContacts = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/role/SuperAdmin/Licenses/GALicenseHistory");
  };
  const RedirectToGAEmailHistory = () => {
    navigate("/role/SuperAdmin/Licenses/GAEmailHistory");
  };
  const RedirectToGASchool = () => {
    navigate("/role/SuperAdmin/Licenses/GASchool");
  };
  const RedirectToGALicenseHistory = () => {
    navigate("/role/SuperAdmin/Licenses/GAEmailHistory");
  };
  return (
    <>
      <Flex marginTop="5">
        <Box>
          <ButtonGroup>
            <Button
              backgroundColor="#EEEEEE"
              color="black"
              marginRight="-0.5rem"
              borderRadius="none"
              borderLeftRadius="1rem"
              width="10rem"
              onClick={RedirectToGASchool}
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
              backgroundColor="primary"
              color="#ffffff"
              borderRadius="none"
              width="10rem"
              marginRight="-0.5rem"
            >
              CONTACTS
            </Button>
            <Button
              onClick={RedirectToGAEmailHistory}
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
        <Flex marginRight="-1rem">
          <Box>
            <Link to="">
              <Button color="black" marginRight="-0.5rem">
                Export License Contacts
              </Button>
            </Link>
          </Box>
          <Box marginTop="2">
            <FaFileExport
              marginLeft="-1.4rem"
              backgroundColor="#0081c8"
              borderRadius="2rem"
              fontSize="1.3rem"
              p="0.3rem"
              color="#1890ff"
            />
          </Box>
        </Flex>
      </Flex>

      <Box marginTop="10">
        <Text textStyle="h4">Select an Email Template Below</Text>
        <Select
          placeholder="Welcome to FitnessGram"
          backgroundColor="#F5F9FF"
          w="20rem"
          border="none"
          marginTop="3"
        >
          <option value="option1">FitnessGram Add-on Schools(s)</option>
          <option value="option1">Tx - Welcome to FitnessGram</option>
          <option value="option1">Welcome to NFL Play 60 FitnessGram</option>
        </Select>
        <Flex marginTop="4" marginLeft="3">
          <Box>
            <Text className="color-black mr-20">CC:</Text>
            <Input
              type="text"
              autoFocus
              backgroundColor="#F5F9FF"
              className="rounded-lg h-8 mb-5"
              w="30rem"
              border="none"
            />
          </Box>
          <Box marginLeft="10">
            <Text>BCC:</Text>
            <Input
              type="text"
              autoFocus
              backgroundColor="#F5F9FF"
              className="rounded-lg h-8 mb-5"
              w="30rem"
              border="none"
              value="GA"
            />
          </Box>
          <Button
            marginLeft="6"
            marginTop="6"
            color="black"
            borderRadius="3xl"
            backgroundColor="#EEEEEE"
            width="10rem"
          >
            Send Email
          </Button>
        </Flex>

        <Flex marginTop="4" marginBottom="4">
          <Box>
            <Link to="">
              <Button color="black">Show Filters</Button>
              <AddIcon
                marginLeft="-0.8rem"
                backgroundColor="#0081c8"
                color="white"
                marginBottom="0.1rem"
                borderRadius="2rem"
                fontSize="1.1rem"
                p={"0.3rem"}
              />
            </Link>
          </Box>
          <Spacer />
          <Box>
            <AddNewLicenseContacts />
          </Box>
        </Flex>
      </Box>
      <br></br>
      <GASchoolTable />
      <GASchoolTable />
      <GASchoolTable />
      <GASchoolTable />
    </>
  );
};

export default GAContacts;

import { Box, Button, ButtonGroup, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LicenseHistoryData } from "../json_files/LicensesHistoryData.json";
import CommonTemplate from "./CommonTemplate";

const GALicenseHistory = () => {
  
  const navigate = useNavigate();
  
  const RedirectToEmailHistory = () => {
    navigate("/role/SuperAdmin/Licenses/GAEmailHistory");
  };
  const RedirectToGASchool = () => {
    navigate("/role/SuperAdmin/Licenses/GASchool");
  };
  const RedirectToContactsHistory = () => {
    navigate("/role/SuperAdmin/Licenses/GAContactsHistory");
  };
  return (
    <>
      <CommonTemplate />
      <Box marginTop="4">
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
           
            backgroundColor="primary"
            color="#ffffff"
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
            onClick={RedirectToEmailHistory}
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
      <Text marginTop="4" textStyle="h4">LICENSE HISTORY</Text>
      <br></br>
      <Flex >
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          width="45rem"
          p="3"
        >
          <Flex>
            <Box w="20rem">
              {LicenseHistoryData.map((item, key) => (
                <Text marginBottom="3">{item.data}</Text>
              ))}
            </Box>
            <Spacer />
            <Box>
              {LicenseHistoryData.map((item, key) => (
                <Text marginBottom="9">{item.date}</Text>
              ))}
            </Box>
          </Flex>
        </Box>
        <Box
          marginLeft="4"
          // borderWidth="1px"
          // borderRadius="lg"
          overflow="hidden"
          width="45rem"
          p="3"
        >
          <Flex>
            <Box w="20rem">
              <Text>
                Breanna Natale changed End Date from 02/28/2023 to 03/31/2023
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text>Thu, Jan 26 2023 9:36 AM</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default GALicenseHistory;

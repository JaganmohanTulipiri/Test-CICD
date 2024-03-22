import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ReportsMain = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/role/Partner/Reports/AdministerTest");
  };
  const RedirectToStudentReport = () => {
    navigate("/role/Partner/Reports/StudentReport");
  };
  return (
    <>
      <Flex>
        <Box>
          <Text textStyle="h1">Reports</Text>
          <br></br>
        </Box>
      </Flex>
      <Flex className="mb-5">
        <ButtonGroup>
          <Button
            backgroundColor="primary"
            color="#ffffff"
            marginRight="-0.5rem"
            borderRadius="none"
            borderLeftRadius="1rem"
            width="10rem"
          >
            Reports
          </Button>
          <Button
            onClick={handleButtonClick}
            backgroundColor="#EEEEEE"
            color="black"
            borderRadius="none"
            borderRightRadius="1rem"
            width="10rem"
          >
            Report Activity
          </Button>
        </ButtonGroup>
      </Flex>
      <Text>Select the test event below</Text>

      <Box
      marginTop="3"
        backgroundColor="#F5F5F5"
        onClick={RedirectToStudentReport}
        w="full"
        h="3rem"
        textAlign="start"
        p="1"
      >
        <Button>FitnessGram Completion Report</Button>
      </Box>
      <Box
        backgroundColor="#F5F5F5"
        onClick={RedirectToStudentReport}
        w="full"
        h="3rem"
        textAlign="start"
        marginTop="4"
      >
        <Button>FitnessGram Overview Report</Button>
      </Box>
    </>
  );
};

export default ReportsMain;

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddStateUserAssignments = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/role/SuperAdmin/StatesPartners/AddStateAdmin");
  };

  const RedirectToWA = () => {
    navigate("/role/SuperAdmin/StatesPartners/WAAdmin");
  };

  return (
    <div className="w-full max-w-full h-full max-h-full overflow-y-auto">
      <Flex>
        <Box>
          <Text fontSize="1rem">
            <Text textStyle="h4">Add State Administrator</Text>
          </Text>
          <br></br>
        </Box>
        <Spacer />
      </Flex>
      <Flex marginTop="1">
        <ButtonGroup>
          <Button
            onClick={handleButtonClick}
            backgroundColor="#EEEEEE"
            color="black"
            marginRight="-0.5rem"
            borderRadius="none"
            borderLeftRadius="1rem"
          >
            BASIC USER INFORMATION
          </Button>
          <Button
            backgroundColor="primary"
            color="#ffffff"
            borderRadius="none"
            borderRightRadius="1rem"
          >
            MANAGE USER'S ASSIGNMENTS
          </Button>
        </ButtonGroup>
      </Flex>

      <Flex className="mt-10 ml-3 gap">
        This user is a State Administrator and has access to all schools and
        classes
      </Flex>

      <Center marginTop="20rem">
        <Flex
          minWidth="max-content"
          alignItems="center"
          className="mt-3 ml-3 gap"
        >
          <ButtonGroup gap="4">
            <Button
              color="black"
              borderRadius="3xl"
              backgroundColor="#EEEEEE"
              width="7rem"
            >
              Cancel
            </Button>
            <Button
              color="white"
              borderRadius="3xl"
              backgroundColor="#65a30d"
              width="7rem"
              onClick={RedirectToWA}
            >
              Save
            </Button>
          </ButtonGroup>
        </Flex>
      </Center>
    </div>
  );
};

export default AddStateUserAssignments;

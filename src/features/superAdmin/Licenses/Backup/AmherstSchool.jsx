import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Input,
  Spacer,
  Text,
  Divider,
  InputGroup,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { CalendarIcon, RepeatIcon, DeleteIcon } from "@chakra-ui/icons";
import AmherstSchoolTable from "./AmherstSchoolTable";
import { Link } from "react-router-dom";

const AmherstSchool = () => {
  return (
    <div>
      <Flex>
        <Box>
          <Text textStyle="h1">AMHERST CO PUBLIC SCHOOLS</Text>
        </Box>
        <Spacer />
        <Box >
          {/* <Link to="" p="2">
            Renew
          </Link>
          <RepeatIcon marginBottom={1} marginLeft="2" marginRight="5"/> */}
          <Link to="" p="2" marginLeft={10}>
            Delete
          </Link>
          <DeleteIcon marginLeft="2" marginBottom="1" color="red" />
        </Box>
      </Flex>
      <Divider borderColor="gray" />

      <Flex marginTop="3">
        <Box flex="1">
          <Text className="color-black mr-20">ID:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            rounded="lg"
            placeholder="74"
            border="none"
          />
          <Text className="color-black mr-20" marginTop="4">
            Funder Name:
          </Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            rounded="lg"
            placeholder="Enter District Name"
            border="none"
          />
        </Box>
        <Spacer />
        <Box flex="1">
          <Text className="color-black mr-20">Start Date* (mm/dd/yyyy):</Text>
          <InputGroup>
            <Input
              type=""
              autoFocus
              backgroundColor="#F5F9FF"
              rounded="lg"
              placeholder="02"
              border="none"
              width="4rem"
              marginRight="0.5rem"
            />
            <Input
              type=""
              autoFocus
              backgroundColor="#F5F9FF"
              className="rounded-lg h-8 mb-5"
              placeholder="03"
              border="none"
              width="4rem"
              marginRight="0.5rem"
            />
            <Input
              type=""
              autoFocus
              backgroundColor="#F5F9FF"
              className="rounded-lg h-8 mb-5"
              placeholder="02"
              border="none"
              width="9rem"
              marginRight={"0.5rem"}
            />
            <CalendarIcon fontSize={"1.5rem"} marginTop="0.4rem" />
          </InputGroup>
          <Text className="color-black mr-20">End Date* (mm/dd/yyyy):</Text>
          <InputGroup>
            <Input
              type=""
              autoFocus
              backgroundColor="#F5F9FF"
              className="rounded-lg h-8 mb-5"
              placeholder="02"
              border="none"
              width="4rem"
              marginRight="0.5rem"
            />
            <Input
              type=""
              autoFocus
              backgroundColor="#F5F9FF"
              className="rounded-lg h-8 mb-5"
              placeholder="03"
              border="none"
              width="4rem"
              marginRight="0.5rem"
            />
            <Input
              type=""
              autoFocus
              backgroundColor="#F5F9FF"
              className="rounded-lg h-8 mb-5"
              placeholder="02"
              border="none"
              width="9rem"
              marginRight="0.5rem"
            />
            <CalendarIcon fontSize="1.5rem" marginTop="0.4rem" />
          </InputGroup>
        </Box>
        <Spacer />
        <Box flex="1">
          <Text className="color-black mr-20">School limit:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            placeholder="0"
            border="none"
          />
          <Text>Settings:</Text>
          <Checkbox>Apply read-only access only</Checkbox>
        </Box>
      </Flex>
      <Box>
        <Textarea backgroundColor="#F5F9FF" h="10rem" border="none"></Textarea>
      </Box>
      <Center>
        <Flex
          minWidth="max-content"
          alignItems="center"
          className="mr-10"
          marginTop="3rem"
        >
          <ButtonGroup gap="4">
            <Button backgroundColor="#54B435" color="white" marginBottom={7} borderRadius="3xl">
              Save License
            </Button>
          </ButtonGroup>
        </Flex>
      </Center>

      <Divider borderColor="gray"/>
      <AmherstSchoolTable/>
    </div>
  );
};

export default AmherstSchool;

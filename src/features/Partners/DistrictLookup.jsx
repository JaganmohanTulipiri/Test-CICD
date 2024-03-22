import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import GridProvider from "../../components/GridProvider";
import DistrictsTable from "../superAdmin/District/DistrictsTable";

const DistrictLookup = () => {
  const DistrictLookup = {
    title: "DISTRICT LOOKUP",
    subtitle: "Add New District",
    LookupFields: [
      {
        lable: "District Name",
        inputType: "text",
        placeholder: "Enter District Name",
        isrequired: "true",
      },

      {
        lable: "4-Digit Code",
        inputType: "number",
        placeholder: "Enter District Code",
        isrequired: "false",
      },
      {
        lable: "Zip Code",
        inputType: "number",
        placeholder: "Enter Zip Code",
        isrequired: "false",
      },
      {
        lable: "School Name",
        inputType: "text",
        placeholder: "Enter School Name",
        isrequired: "true",
      },
      {
        lable: "District Identifier",
        inputType: "text",
        placeholder: "Enter District Identifier",
        isrequired: "true",
      },
    ],
  };
  const { title, subtitle, LookupFields } = DistrictLookup;

  return (
    <div className="w-full max-w-full h-full max-h-full overflow-y-auto">
      <Flex>
        <Box>
          <Text textStyle="h1">{title}</Text>
        </Box>
        <Spacer />
      </Flex>
      <Divider className="mt-1" />

      <Text textStyle="h4">Filter</Text>

      <Flex marginRight="2rem" marginTop="5">
        <Box flex="1">
          <Text className="color-black mr-20">District Name:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            placeholder="Enter District Name"
            border="none"
          />
          <Text className="color-black mr-20">School Name:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8"
            placeholder="Enter School Name"
            border="none"
          />
        </Box>
        <Spacer />
        <Box flex="1">
          <Text className="color-black mr-20">4-Digit Code:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            placeholder="Enter District Code"
            border="none"
          />
          <Text className="color-black mr-20">District Identifier</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            placeholder="Enter District Identifier"
            border="none"
          />
        </Box>
        <Spacer />
        <Box flex="1">
          <Text className="color-black mr-20">Zip Code:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            placeholder="Enter Zip Code"
            border="none"
          />
        </Box>
      </Flex>

      {/* <Grid templateColumns="repeat(3, 1fr)" gap="8" marginTop="8">
        <GridProvider data={LookupFields} />
      </Grid> */}

      <Center>
        <Flex
          minWidth="max-content"
          alignItems="center"
          className="mr-10"
          marginTop="3rem"
        >
          <ButtonGroup gap="4">
            <Button
              color="black"
              borderRadius="3xl"
              backgroundColor="#EEEEEE"
              width="7rem"
            >
              Clear
            </Button>
            <Button
              backgroundColor="#54B435"
              color="white"
              borderRadius="3xl"
              w="8rem"
            >
              Apply
            </Button>
          </ButtonGroup>
        </Flex>
      </Center>

      <Divider />
      <DistrictsTable role="SuperAdmin" />
    </div>
  );
};

export default DistrictLookup;

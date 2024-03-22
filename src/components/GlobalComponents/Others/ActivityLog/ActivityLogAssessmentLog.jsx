import { Grid, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";
import GridProvider from "../../../GridProvider";

const ActivityLogAssessmentLog = () => {

  const AssessmentLog = {
    title: "ActivityLog",
    subtitle: "Create Assessment",

    assignClasses: [
      {
        lable: "Schools",
        inputType: "select",
        options: [
          "All Schools",
          "Greenlight Elementary",
          "Greenlight HighSchool",
        ],
      },
      {
        lable: "Teachers",
        inputType: "select",
        options: [
          "All Schools",
          "Greenlight Elementary",
          "Greenlight HighSchool",
        ],
      },
      {
        lable: "Classes",
        inputType: "select",
        options: [
          "All Schools",
          "Greenlight Elementary",
          "Greenlight HighSchool",
        ],
      },
    ],

    createChallenge: [
      {
        lable: "Challenge Name",
        inputType: "text",
        placeholder:"Enter Test Name"
      },
      {
        lable: "Start Date",
        inputType: "datetime-local",
      },
      {
        lable: "End Date",
        inputType: "datetime-local",
      },
      {
        lable: "Type",
        inputType: "select",
        options: ["Steps", "Minutes", "Heart Rate"],
      },
      {
        lable: "Daily Goal",
        inputType: "text",
        placeholder:"Daily Goal"
      },
      {
        lable: "Description",
        inputType: "text",
        placeholder:"Description"
      },
    ],
  };
  const { title, subtitle, assignClasses, createChallenge } = AssessmentLog;

  return (
    <div>
      <Flex>
        <Text fontSize="lg" marginRight="1">
          {title}
        </Text>
        <Text fontSize="md" marginTop="0.2">
          {subtitle}
        </Text>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap="8" marginTop="8">
        <GridProvider data={assignClasses} />
      </Grid>

      <Text marginTop="24" textStyle="h4">
        CREATE CHALLENGE
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap="8" marginTop="8">
        <GridProvider data={createChallenge} />
      </Grid>

      <div className="flex justify-center gap-2 mt-20">
        <Button>Cancel</Button>
        <Button className="bg-green text-white" borderRadius="3xl" width="7rem">Save</Button>
      </div>


      {/* <Text fontSize="sm" className="mt-4">
        ASSIGN TO THESE CLASSES:
      </Text>
      <div className="grid grid-cols-3 gap-4 mb-3 mt-4">
        <Text fontSize="sm">Schools</Text>
        <Text fontSize="sm">Teachers</Text>

        <Text fontSize="sm">Classes</Text>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Select
          placeholder="Select option"
          size="sm"
          w="10rem"
          borderRadius="5"
          borderColor="gray"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          placeholder="Select option"
          size="sm"
          w="10rem"
          borderRadius="5"
          borderColor="gray"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          placeholder="Select option"
          size="sm"
          w="10rem"
          borderRadius="5"
          borderColor="gray"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <Text fontSize="sm" className="mt-4">
        ASSIGN TO THESE CLASSES:
      </Text>
      <div className="grid grid-cols-3 gap-4 mb-3 mt-4">
        <Text fontSize="sm">Challenge Name</Text>
        <Text fontSize="sm">Start Date</Text>

        <Text fontSize="sm">End Date</Text>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <Select
          placeholder="Select option"
          size="sm"
          w="10rem"
          borderRadius="5"
          borderColor="gray"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          placeholder="Select option"
          size="sm"
          w="10rem"
          borderRadius="5"
          borderColor="gray"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          placeholder="Select option"
          size="sm"
          w="10rem"
          borderRadius="5"
          borderColor="gray"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-3 mt-4">
        <Text fontSize="sm"> Type</Text>
        <Text fontSize="sm">Daily Goal</Text>

        <Text fontSize="sm">Description </Text>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <Select
          placeholder="Select option"
          size="sm"
          w="10rem"
          borderRadius="5"
          borderColor="gray"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          placeholder="Select option"
          size="sm"
          w="10rem"
          borderRadius="5"
          borderColor="gray"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          placeholder="Select option"
          size="sm"
          w="10rem"
          borderRadius="5"
          borderColor="gray"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <Button>Cancel</Button>
        <Button className="bg-green text-white">Create</Button>
      </div> */}
    </div>
  );
};

export default ActivityLogAssessmentLog;

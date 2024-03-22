import {
  Button, Flex,
  Grid, Text
} from "@chakra-ui/react";
import React from "react";
import GridProvider from "../../../GridProvider";

const ActivityLog = () => {
  const onOpen = () => {
    console.log("hi");
  };

  const ActivityLog = {
    title: "ACTIVITYGRAM LITE",
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

    setUpAssessment: [
      {
        lable: "Title",
        inputType: "text",
        placeholder: "Enter Test Name",
      },
      {
        lable: "Start Date",
        inputType: "datetime-local",
      },
      {
        lable: "End Date",
        inputType: "datetime-local",
      },
    ],

    selectType: [
      {
        lable: "School Level",
        inputType: "select",
        options: ["Elementary", "Middle", "High School"],
      },
      {
        lable: "Number of recesses/breaks/study halls:",
        inputType: "text",
        defaultValue: "0",
      },
    ],
  };
  const { title, subtitle, assignClasses, setUpAssessment, selectType } = ActivityLog;

  return (
    <div>
      <>
        <Flex>
          <Text textStyle="h4" marginRight="1">
            {title}
          </Text>
          <Text fontSize="md" marginTop="0.2">
            {subtitle}
          </Text>
        </Flex>

        <Text marginTop="10" textStyle="h4">
          ASSIGN TO THESE CLASSES:
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap="8" marginTop="8">
          <GridProvider data={assignClasses} />
        </Grid>

        <Text marginTop="14" textStyle="h4">
          SETUP AN ASSESMENT:
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap="8" marginTop="8">
          <GridProvider data={setUpAssessment} />
        </Grid>

        <Text marginTop="14" textStyle="h4">
          SELECT TYPE:
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap="8" marginTop="8">
          <GridProvider data={selectType} />
        </Grid>

        <div className="flex justify-center gap-2 mt-20">
          <Button>Cancel</Button>
          <Button
            className="bg-green text-white"
            borderRadius="3xl"
            width="7rem"
          >
            Create
          </Button>
        </div>
        {/* <div className='flex justify-between mt-5'>
          <p>School</p>
          <p>Teachers</p>
          <p>Classes</p>
        </div> */}
        {/* <HStack>
          <Stack>
            <Text textStyle='p' color='black'>
              School
            </Text>
            <Box inlineSize='xs'>
              <Select size='sm'>
                <option value='Greenlight Elementary'>
                  Greenlight Elementary
                </option>
              </Select>
            </Box>
          </Stack>
          <Spacer></Spacer>
          <Stack>
            <Text textStyle='p' color='black'>
              Teacher
            </Text>
            <Box inlineSize='xs'>
              <Select size='sm'>
                <option value='Select class(es) '>Select class(es) </option>
              </Select>
            </Box>
          </Stack>
          <Spacer></Spacer>
          <Stack>
            <Text textStyle='p' color='black'>
              Status
            </Text>
            <Box inlineSize='xs'>
              <Select size='sm'>
                <option value='Status'>Status</option>
              </Select>
            </Box>
          </Stack>
        </HStack>
      </>

      <>
        <p className='mt-3 mb-3'> SET UP AN ASSESSMENT </p>
        <HStack>
          <Stack>
            <Text textStyle='p' color='black'>
              Challenge Name
            </Text>
            <Box inlineSize='xs'>
              <Select size='sm'>
                <option value='Greenlight Elementary'>Greenlig</option>
              </Select>
            </Box>
          </Stack>
          <Spacer></Spacer>
          <Stack>
            <Text textStyle='p' color='black'>
              StartDate
            </Text>
            <Box inlineSize='xs'>
              <Select size='sm'>
                <option value='Select class(es) '>Select class(es) </option>
              </Select>
            </Box>
          </Stack>
          <Spacer></Spacer>
          <Stack>
            <Text textStyle='p' color='black'>
              EndDate
            </Text>
            <Box inlineSize='xs'>
              <Select size='sm'>
                <option value='Status'>Status</option>
              </Select>
            </Box>
          </Stack>
        </HStack> */}
      </>
      {/* <>
        <p className='mt-5 mb-4'>ASSIGN TO THESE CLASSES</p>
        <HStack>
          <Stack>
            <Text textStyle='p' color='black'>
              Type
            </Text>
            <Box inlineSize='xs'>
              <Select size='sm'>
                <option value='Greenlight Elementary'>Greenlig</option>
              </Select>
            </Box>
          </Stack>
          <Spacer></Spacer>
          <Stack>
            <Text textStyle='p' color='black'>
              Daily Goal
            </Text>
            <Box inlineSize='xs'>
              <Select size='sm'>
                <option value='Select class(es) '>Select class(es) </option>
              </Select>
            </Box>
          </Stack>
          <Spacer></Spacer>
          <Stack>
            <Text textStyle='p' color='black'>
              Description
            </Text>
            <Box inlineSize='xs'>
              <Input type='text-area    ' />
            </Box>
          </Stack>
        </HStack>
      </> */}

      {/* <>
        <div className='flex justify-center mt-5 gap-3'>
          <Button
            onClick={onOpen}
            color='black'
            px='1rem'
            size='xs'
            colorScheme='green'
          >
            Cancel
          </Button>
          <Button
            onClick={onOpen}
            background='green'
            color='white'
            px='1rem'
            size='xs'
            colorScheme='green'
          >
            Create
          </Button>
        </div>
      </> */}
    </div>
  );
};

export default ActivityLog;

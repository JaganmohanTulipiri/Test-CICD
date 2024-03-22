import React from 'react';
import {
  Select,
  Input,
  Button,
  HStack,
  Stack,
  Box,
  Spacer,
  Text,
} from '@chakra-ui/react';

const ActivityLiteEvent = () => {
  const onOpen = () => {
    console.log('hi');
  };
  return (
    <div>
      <h4 className='mt-5'>ActivityGram LITE Create Assessment</h4>
      <>
        <p className='mt-5'>ASSIGN TO THESE CLASSES</p>
        {/* <div className='flex justify-between mt-5'>
          <p>School</p>
          <p>Teachers</p>
          <p>Classes</p>
        </div> */}
        <HStack>
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
        <div className='flex  mt-5'>
          <Select variant='filled' placeholder='Filled'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Select variant='filled' placeholder='Filled'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Select variant='filled' placeholder='Filled'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </div>
      </>

      <>
        <p className='mt-3'> SET UP AN ASSESSMENT </p>
        <div className='flex justify-between mt-5'>
          <p>School</p>
          <p>Teachers</p>
          <p>Classes</p>
        </div>
        <div className='flex gap-4 mt-5'>
          <Select variant='filled' placeholder='Filled'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Select variant='filled' placeholder='Filled'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Select variant='filled' placeholder='Filled'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </div>
      </>

      <div className='flex mt-5 flex-row border-2 border-red col-span-6'>
        <div className='flex flex-col mt-5'>
          <p>School level</p>
          <Select variant='filled' placeholder='Filled'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </div>
        <div className='flex flex-col mt-5'>
          <p>Number of recesses/break/study halls:</p>

          <Input variant='filled' placeholder='Filled' />
        </div>
      </div>
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
    </div>
  );
};

export default ActivityLiteEvent;

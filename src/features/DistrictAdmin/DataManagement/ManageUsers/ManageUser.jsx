import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Stack,
  Text,
  Divider,
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';
import addIcon from '../../../../assets/customIcons/addIcon.svg';
import React from 'react';

const ManageUser = () => {
  return (
    <Flex direction='column' gap='4 '>
      <Text textStyle='h1' color='black-1'>
        Manage Users
      </Text>
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
            User Type
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
            School
          </Text>
          <Box inlineSize='xs'>
            <Select size='sm'>
              <option value='Status'> Login Status</option>
            </Select>
          </Box>
        </Stack>
      </HStack>
      <HStack>
        <Stack>
          <Text textStyle='p' color='black'>
            Birth Date
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
            Assignment Status
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
            Grades
          </Text>
          <Box inlineSize='xs'>
            <Select size='sm'>
              <option value='Status'> Login Status</option>
            </Select>
          </Box>
        </Stack>
      </HStack>
      <Divider />
      <Flex justify='space-between' w='full'>
        <HStack spacing='12'>
          <Flex gap='2'>
            <Checkbox />
            <Text textStyle='h6'>Select all</Text>
          </Flex>
          <Select
            w='fit-content'
            size='sm'
            bg='primary'
            borderColor='primary'
            placeholder='Action'
            color='white'
          >
            <option value='delete'>delete</option>
          </Select>
          <Box inlineSize='15em'>
            <InputGroup size='sm' bg='bg.100' borderColor='bg.100'>
              <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray-2' />}
              />
              <Input type='text' placeholder='Search' />
            </InputGroup>
          </Box>
        </HStack>
        <HStack spacing='12'>
          <Flex gap='2'>
            <Text textStyle='h3' textDecoration='underline'>
              Export Classes
            </Text>
            <Box width='6' height='6'>
              <img w='full' h='full' src={addIcon} />
            </Box>
            {/* <AddIcon /> */}
          </Flex>
          <Flex gap='2'>
            {/* <Text textStyle='h3' textDecoration='underline'>
              Add New Class
            </Text> */}
            {/* <ManageClassPop /> */}
            <Box width='6' height='6' mt={2} cursor='pointer'>
              <img w='full' h='full' src={addIcon} />
            </Box>
            {/* <AddIcon /> */}
          </Flex>
        </HStack>
      </Flex>
      {/* <Flex gap='8' wrap='wrap'>
        <ManageClassCard />
        <ManageClassCard />

        <ManageClassCard />
        <ManageClassCard />
        <ManageClassCard />
        <ManageClassCard />
      </Flex> */}
    </Flex>
  );
};

export default ManageUser;

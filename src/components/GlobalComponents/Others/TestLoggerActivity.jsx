import React from 'react';
import { Grid, GridItem, Input } from '@chakra-ui/react';
import { Flex, Spacer, Box, HStack, Text, Divider } from '@chakra-ui/react';
import { TiMediaPlay, TiMediaPlayReverse } from 'react-icons/ti';

const TestLoggerActivity = () => {
  const data = [
    {
      id: '1',
      day: 'Monday',
      steps: '60',
      min: '60',
    },
    {
      id: '2',
      day: 'Tuesday',
      steps: '60',
      min: '60',
    },
    {
      id: '3',
      day: 'Wednesday',
      steps: '60',
      min: '60',
    },
    {
      id: '4',
      day: 'Thursday',
      steps: '60',
      min: '60',
    },
    {
      id: '5',
      day: 'Friday',
      steps: '60',
      min: '60',
    },
    {
      id: '6',
      day: 'Saturday',
      steps: '60',
      min: '60',
    },
    {
      id: '7',
      day: 'Sunday',
      steps: '60',
      min: '60',
    },
  ];
  return (
    <>
      <p className='h1 mt-5 mb-5 font-poppins-bold text-2xl'>
        Test Regular 10000
      </p>
      <Flex gap='5'>
        <HStack spacing='24px'>
          <Box w='150px' h='10'>
            <Text display='none'>Steps</Text>
          </Box>
          <Box w='300px' h='10'>
            <Text textStyle={'textHead'}>Steps </Text>
          </Box>
          <Box w='250px' h='10'>
            <Text textStyle={'textHead'}>Minutes </Text>
          </Box>
        </HStack>
      </Flex>
      <Box bg='#f2f2f2' w='50rem'>
        <HStack spacing='30px'>
          <Text px='1' w='12rem' textStyle={'textHead'}>
            {' '}
            Daily Goal
          </Text>
          <Input w='25rem' value='1000' />
          <Input w='25rem' value='1000' />
        </HStack>
      </Box>
      <div className='mt-5'>
        <Box bg='#f2f2f2' w='50rem'>
          <HStack spacing='30px'>
            <Text px='1' w='12rem' textStyle={'textHead'}>
              {' '}
              Daily Average
            </Text>
            <Input w='25rem' value='0' border='none' />
            <Input w='25rem' value='0' border='none' />
          </HStack>
        </Box>
      </div>
      <Divider mt='5' />
      <Flex className='justify-between'>
        <Box bg='#f2f2f2' w='50rem' mt='10' borderRadius='20'>
          <HStack spacing='30px' className='flex justify-between'>
            <TiMediaPlayReverse />
            <Text px='1' w='12rem' p='2' textAlign='center' textStyle={'textHead'}>
              {' '}
              Daily Goal
            </Text>
            <TiMediaPlay />
          </HStack>
        </Box>
      </Flex>
      <div className='flex justify-between mt-5 w-[80%]'>
        <p>Day of the week</p>
        <p>Steps</p>
        <p>Minutes</p>
      </div>
      <div className='flex justify-between mt-5 w-[80%]'>
        {data.map((item, index) => {
          return (
            <>
              <p>{item.day}</p>
              <input
                value='60'
                className='border-2 border-black translate-x-[80%] w-[10rem] p-2 '
              />
              <input
                value='60'
                className='border-2 border-black  translate-x-[50%] w-[10rem] p-2 '
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default TestLoggerActivity;

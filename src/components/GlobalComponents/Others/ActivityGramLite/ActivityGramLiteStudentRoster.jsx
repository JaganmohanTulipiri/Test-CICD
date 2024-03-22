import React from 'react';
import {
  Text,
  Box,
  Flex,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { TfiPrinter } from 'react-icons/tfi';

const ActivityGramLiteStudentRoster = () => {
  const data = [
    {
      id: '1',
      student: 'Astudent,jhon',
      status: 'complete',
    },
    {
      id: '2',
      student: 'Astudent,Steve',
      status: 'complete',
    },
    {
      id: '3',
      student: 'Astudent,Myth',
      status: 'Incomplete',
    },
    {
      id: '4',
      student: 'Ander , jhon',
      status: 'complete',
    },
    {
      id: '5',
      student: 'Guzman,rios',
      status: 'complete',
    },
    {
      id: '6',
      student: 'Omar,khan',
      status: 'Incomplete',
    },
    {
      id: '7',
      student: 'Samuel,guxa',
      status: 'complete',
    },
    {
      id: '8',
      student: 'Patric,notan',
      status: 'Incomplete',
    },
    {
      id: '9',
      student: 'Polo,jessi',
      status: 'complete',
    },
    {
      id: '10',
      student: 'jhon,wick',
      status: 'Incomplete',
    },
    {
      id: '1',
      student: 'mardy',
      status: 'complete',
    },
    {
      id: '11',
      student: 'Rebika',
      status: 'Incomplete',
    },
    {
      id: '12',
      student: 'Michel',
      status: 'complete',
    },
    {
      id: '13',
      student: 'Sameer',
      status: 'Incomplete',
    },
  ];
  return (
    <div>
      <Flex className='justify-between'>
        <Text>Activity Lite Student Roster</Text>
        <div className='flex gap-2'>
          <TfiPrinter size={25} />
          <Text>Print Spread</Text>
        </div>
      </Flex>
      <Flex className='justify-between mt-5'>
        <>
          <Select placeholder='Select option' w='25rem'>
            <option value='option1'>All Schools</option>
            <option value='option2'>Green Light Elementary </option>
            <option value='option3'>Green Light High School 3</option>
          </Select>
        </>
        <Flex className='gap-2'>
          <input type='checkbox' className='mt-[0.4rem]' />
          <p>show only student missing data</p>
        </Flex>
      </Flex>
      <div className='mt-5'>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Student Name</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <>
                  <Tr>
                    <Td className='text-primary'>{item.student}</Td>
                    <Td className=''>{item.status}</Td>
                  </Tr>
                </>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ActivityGramLiteStudentRoster;

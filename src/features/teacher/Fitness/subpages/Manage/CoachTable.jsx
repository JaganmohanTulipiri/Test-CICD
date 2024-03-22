import React from 'react';
import {
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
import { Coach_board } from './data';

const CoachTable = () => {
  return (
    <div>
      <TableContainer>
        <Table size='sm' variant='unstyled'>
          <Thead>
            <Tr>
              <Th>Student Name</Th>
              <Th>Student ID</Th>
              <Th>Birth Date</Th>
              <Th>Grade</Th>
              <Th>Sex Assigned at Birth</Th>
              <Th>Login Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Coach_board.map((item, index) => {
              return (
                <Tr className='text-center'>
                  <Td>{item.name}</Td>
                  <Td>{item.stid}</Td>
                  <Td>{item.date}</Td>
                  <Td>{item.grade}</Td>

                  <Td>{item.sex}</Td>
                  <Td>{item.status}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CoachTable;

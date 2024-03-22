import React from 'react'
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
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import {FiEdit} from 'react-icons/fi'

const SchoolDay2 = () => {
  return (

    <Stack marginTop="4rem">
    <TableContainer>
      <Table variant="striped" colorScheme="bg">
        <Thead>
          <Tr>
            <Th> </Th>
            <Th>Start</Th>
            <Th>End</Th>
            <Th>Type </Th>
            <Th>Detail </Th>
            <Th>Level </Th>

          </Tr>
        </Thead>
        <Tbody>
         <Td>{<FiEdit color='blue'/>}</Td>
             
             
        </Tbody>
      </Table>
    </TableContainer>
  </Stack>
    )
}

export default SchoolDay2
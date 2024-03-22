import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Divider,
  Heading,
  Table,
  TableContainer,
  Box,
  Flex,
  Input,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Text,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const TestRegular = () => {
  const title = "Test Regular 10000";
  return (
    <>
      <Box>
        <Text textStyle="h4">{title}</Text>
      </Box>

      <Flex p="3">
        <Box
          width="12rem"
          marginTop="4"
          backgroundColor="#F5F9FF"
          borderRadius="xl"
        >
          <Text textStyle="h4" p="4">
            Daily Goal
          </Text>
        </Box>

        <Box>
          <Text textStyle="h4">Step</Text>
          <Input
            type="text"
            name="steps"
            value="1000"
            width="40"
            marginRight="2"
          ></Input>
        </Box>
        <Box>
          <Text textStyle="h4">Minute</Text>
          <Input
            type="text"
            name="steps"
            value="60"
            width="40"
            marginRight="2"
          ></Input>
        </Box>
      </Flex>

      <Flex p="3">
        <Box width="13rem" marginTop="4" backgroundColor="#F5F9FF">
          <Text textStyle="h4" p="4">
            Daily Average
          </Text>
        </Box>

        <Box>
          <Text textStyle="h4">Step</Text>
          <Input
            type="text"
            name="steps"
            value="0"
            width="40"
            marginRight="2"
            backgroundColor="#F5F9FF"
            border="none"
          ></Input>
        </Box>
        <Box>
          <Text textStyle="h4">Minute</Text>
          <Input
            type="text"
            name="steps"
            value="0"
            width="40"
            marginRight="2"
            backgroundColor="#F5F9FF"
            border="none"
          ></Input>
        </Box>
      </Flex>

      <Divider borderColor="gray" />

      <Box
      marginTop="3"
        width="50rem"
        height="3rem"
        backgroundColor="#F5F9FF"
        p="4"
        borderRadius="3xl"
      >
        <Flex>
          <ArrowLeftIcon marginLeft="5" />
          <Spacer/>
          <Text marginLeft="5" >January 22-28, 2023</Text>
          <Spacer/> 
          <ArrowRightIcon marginLeft="5" />
        </Flex>
      </Box>

      <TableContainer className="SuperAdminTables" marginTop="4">
        <Table variant="stripped">
          <Thead>
            <Tr>
              <Th>
                <Text textStyle="h4">Day of the Week</Text>
              </Th>
              <Th>
                <Text textStyle="h4">Steps</Text>
              </Th>
              <Th>
                <Text textStyle="h4">Minutes</Text>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>Monday</Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
            </Tr>
            <Tr>
              <Td>Tuesday</Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
            </Tr>
            <Tr>
              <Td>Wednesday</Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
            </Tr>
            <Tr>
              <Td>Thursday</Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
            </Tr>
            <Tr>
              <Td>Friday</Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
            </Tr>
            <Tr>
              <Td>Saturday</Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
              <Td>
                <Input type="text" value="60" width="50"></Input>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TestRegular;

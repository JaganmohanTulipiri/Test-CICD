import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";


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
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { CheckIcon } from "@chakra-ui/icons";
import ActivityGramTestRegularModal from "./ActivityGramTestRegularModal";
import { getActivityTestRegularDataCall } from "../../../../store/slices/studentSlice/studentSlice";

const ActivityGramTestRegular = () => {
  const [activeTab, setActiveTab] = useState(1);

  const columnNames = [
    {
      id: 1,
      text: "",
    },

    {
      id: 2,
      text: "Start",
    },

    {
      id: 3,
      text: "End",
    },
    {
      id: 4,
      text: "Type",
    },
    {
      id: 5,
      text: "Detail",
    },

    {
      id: 6,
      text: "Level",
    },
  ];

  const tableBody = [
    {
      id: 1,
      icon: <FaRegEdit fill="#0081C8" size={20} />,
      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 2,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 3,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 4,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 5,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 6,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 7,
      icon: <AiFillPlusSquare fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 8,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 9,
      icon: <AiFillPlusSquare fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 10,
      icon: <AiFillPlusSquare fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 11,
      icon: <AiFillPlusSquare fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 12,
      icon: <AiFillPlusSquare fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },

    {
      id: 13,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 14,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 15,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 16,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
    {
      id: 17,
      icon: <FaRegEdit fill="#0081C8" size={20} />,

      startText: "7:00 AM",
      endText: "7:30 AM",
      type: "Musclar Activity",
      detail: "Track and field sports",
      level: "Rest All",
    },
  ];

  const [isRowItemClicked, setIsRowItemClicked] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const editButtonClicked = (selectedRow) => {
    setIsRowItemClicked(true);

    console.log(selectedRow);
  };



  const changingBooleanRowItemFunction = (value) => {

    setIsRowItemClicked(false)


  }






  useEffect(() => {

    // dispatchEvent(getActivityTestRegularDataCall())


  }, [])






  return (
    <>
      <div className="m-5">
        <div className="mt-6 pl-3 pr-3">
          <Stack spacing="4">
            <Text textStyle="h1">TEST REGULAR 1910212</Text>
            <Flex>
              <Button
                fontSize="sm"
                fontFamily="poppins"
                color={activeTab == 1 ? "white" : "black-2"}
                bgColor={activeTab == 1 ? "primary" : "gray-1"}
                onClick={() => setActiveTab(1)}
                borderLeftRadius="full"
                borderRightWidth="1px"
                borderColor="gray"
                px="10"
              >
                School Day 1
              </Button>
              <Button
                fontSize="sm"
                fontFamily="poppins"
                color={activeTab == 2 ? "white" : "black-2"}
                bgColor={activeTab == 2 ? "primary" : "gray-1"}
                onClick={() => setActiveTab(2)}
                borderRadius={0}
                borderRightWidth="1px"
                borderColor="gray"
                px="10"
              >
                School Day 2
              </Button>

              <Button
                fontSize="sm"
                fontFamily="poppins"
                color={activeTab == 3 ? "white" : "black-2"}
                bgColor={activeTab == 3 ? "primary" : "gray-1"}
                onClick={() => setActiveTab(3)}
                borderLeftRadius={0}
                borderRightRadius="full"
                px="10"
              >
                Non-School Day
              </Button>
            </Flex>
          </Stack>
        </div>
        <>
          <TableContainer mt={"2rem"}>
            <Table colorScheme="bg">
              <Thead>
                <Tr>
                  {columnNames?.map((item) => {
                    return (
                      <Th textStyle="h6" color="primary" key={item.id}>
                        {item.text}
                      </Th>
                    );
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {tableBody?.map((each) => (
                  <Tr>
                    <Td onClick={() => editButtonClicked(each)} cursor="pointer">{each.icon}</Td>
                    <Td>{each.startText}</Td>
                    <Td>{each.endText}</Td>
                    <Td>{each.type}</Td>
                    <Td>{each.detail}</Td>
                    <Td>{each.level}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>

        <>
          {isRowItemClicked && isRowItemClicked ? (
            <>
              <ActivityGramTestRegularModal isRowItemClicked = {isRowItemClicked} changingBooleanRowItemFunction = {changingBooleanRowItemFunction}/>
            </>
          ) : null}
        </>
      </div>
    </>
  );
};

export default ActivityGramTestRegular;

import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  Stack,
  Center,
  Heading,
  ButtonGroup,
  Input,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Text,
  Img,
  GridItem,
  HStack,
} from "@chakra-ui/react";

import React from "react";
import { BsPrinter } from "react-icons/bs";
import { FaFileCsv } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";

import emailImg from "../../../../assets/images/StudentReportTableImages/email.png";
import { FcClearFilters } from "react-icons/fc";

const MobileReportOptions = (props) => {
  const {
    isThreeDotsClicked,
    setIsThreeDotsClicked,
    isReportFilterClicked,
    setIsReportFilterClicked,
  } = props;


  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = [
    {
      id: "1",
      name: "",
      icon: <Input className="w-[10vw] " />,
    },
    {
      id: "2",
      name: "Print",
      icon: <BsPrinter />,
    },
    {
      id: "3",
      name: "Email",
      icon: <Img src={emailImg} className="w-4 h-5" />,
    },
    {
      id: "4",
      name: "PDF Download",
      icon: <VscFilePdf />,
    },
    {
      id: "5",
      name: "CSV Download",
      icon: <Search2Icon />,
    },
    {
      id: "6",
      name: "XPS Download",
      icon: <FaFileCsv />,
    },
  ];

  return (
    <>
      <Modal
        isOpen={isThreeDotsClicked}
        onClose={() => {
          setIsThreeDotsClicked(false);
          onClose;
        }}
        borderRadius={4}

        display={{ base: "block", md: "none", lg: "none" }}

      >
        <ModalOverlay />
        <ModalContent marginTop={["10rem"]}
        
         marginLeft={["2rem"]}      
        
     >
          <ModalBody textAlign={"end"}>
            <SimpleGrid columns={{ base: 1, md: 3, lg: 6 }}>
              {data.map((item, index) =>
                item.id === "1" ? (
                  <Box
                    gap={4}
                    display={{ base: "flex", md: "none", lg: "none" }}
                  >
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.300" />}
                      />
                      <Input type="tel" placeholder="Search Student" />
                    </InputGroup>
                  </Box>
                ) : (
                  <Box
                    display={{ base: "flex", md: "none", lg: "none" }}
                    justifyContent={{ base: "flex-start", md: "center" }}
                    alignItems={"center"}
                    gap={"4"}
                    mt="2"
                  >
                    <Text>{item.icon}</Text>
                    <Text> {item.name}</Text>
                  </Box>
                )
              )}

              <HStack
                bg="fit"
                p="2"
                mt="2"
                rounded={"lg"}
                display={{ base: "flex", lg: "none", md: "none" }}
                cursor={"pointer"}
                onClick={() => {
                  setIsThreeDotsClicked(false);
                  setIsReportFilterClicked(true);
                }}
              >
                <Text fontFamily={"body"} color="white">
                  Report filters
                </Text>
                <FcClearFilters color="white" size={20} />
              </HStack>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileReportOptions;

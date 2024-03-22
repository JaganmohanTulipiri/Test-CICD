import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  useDisclosure,
  Card,
  CardBody,
  Stack,
  Text,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react";

import vesselImg from "../../../../../assets/images/vessel.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import calendarImg from "../../../../../assets/images/Icon awesome-calendar-alt@2x.png";
import activityGramTestEventsImage from "../../../../../assets/images/OthersSectionImages/Activity Gram.svg";

const ActivityGramEventModalPage = (props) => {
  const navigate = useNavigate();

  const { selectedCardData } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const smartCoachButtonClicked = () => {
    navigate("/role/student/SmartCoach");
  };

  const viewEnterDataButtonClicked = () => {
    navigate("/role/student/ActivityGramTestRegular");
  };

  return (
    <>
      <Text
        onClick={onOpen}
        textDecoration="underline"
        color={"blue.500"}
        size={"md"}
        textAlign={"center"}
        margin="2"
        cursor={"pointer"}
      >
        View Data
      </Text>

      <Box w="sm">
        <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
          <ModalOverlay />

          <ModalContent>
            <ModalBody p="0" h="35rem">
              {selectedCardData && (
                <Box
                  w={["100%"]}
                  border="1px"
                  borderColor="white"
                  borderRadius="15"
                  p="0"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  key={selectedCardData.id}
                >
                  <Stack spacing="2">
                    <Box
                      bgColor="#E7F1FF"
                      border="1px"
                      borderColor="#E7F1FF"
                      borderRadius="3"
                      w="100%"
                      px="2"
                      py="1.5"
                    >
                      <Text color="black-2" textStyle="h4">
                        {selectedCardData?.event_name}
                      </Text>
                    </Box>
                    <Flex justifyContent="center" alignItems="center" px="3">
                      <Flex direction="column" spacing="3">
                        <Text fontSize="sm" pb="2">
                          Type : {selectedCardData.event_name}
                        </Text>
                        <HStack spacing="2">
                          <Box width="6" height="6">
                            <Image
                              src={calendarImg}
                              alt="calendar"
                              w="full"
                              h="full"
                            />
                          </Box>

                          <Text pt="2" fontSize="sm">
                            {selectedCardData.start_date}
                          </Text>
                        </HStack>
                      </Flex>

                      <Box width="10rem" height="10rem">
                        <Image
                          src={activityGramTestEventsImage}
                          objectFit="contain"
                          alt="calendar"
                        />
                      </Box>
                    </Flex>
                  </Stack>
                  <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt="1rem"
                  >
                    <Box
                      bgColor="primary"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      cursor="pointer"
                      textColor="white"
                      px="3rem"
                      py="0.5rem"
                      borderRadius={14}
                      onClick={smartCoachButtonClicked}
                    >
                      <Image src={vesselImg} alt="vessel" w={8} h={6} pr="2" />
                      <Text fontSize="md" fontFamily="poppins">
                        Smart Coach Resources
                      </Text>
                    </Box>

                    <Button
                      mb="2rem"
                      mt="1rem"
                      fontSize="sm"
                      fontWeight="normal"
                      fontFamily="poppins"
                      textColor="white"
                      bgColor="primary"
                      px="6.5rem"
                      borderRadius={14}
                      onClick={viewEnterDataButtonClicked}
                    >
                      View/Enter Data
                    </Button>
                  </Flex>
                </Box>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default ActivityGramEventModalPage;

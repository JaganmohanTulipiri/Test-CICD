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

import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import absent from "../../../assets/customIcons/absent@2x.png";
import present from "../../../assets/customIcons/absent.png";

import calendarImg from "../../../assets//images/Icon awesome-calendar-alt@2x.png";
import activityGramTestEventsImage from "../../../assets/images/OthersSectionImages/Activity Gram.svg";

import vesselImg from "../../../assets/images/vessel.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { agDeleteEventData, setAgEventDataById } from "../teacherSlice";
import {
  setActivatingID,
  setPreviousPath,
} from "../../../store/slices/profileSlice";
import { current } from "@reduxjs/toolkit";
import moment from "moment";

const ActivityGramModal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const role = useSelector((state) => state.profile.selectedRole);

  const loginResponse = useSelector((state) => state?.profile?.user);

  const {
    isViewDataClicked,
    selectedCardData,
    setIsViewDataClicked,
    smartCoachButtonClicked,
  } = props;

  const eventId = selectedCardData.uuid;

  const token = useSelector((state) => state.profile.token);

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const userId = useSelector((state) => state?.profile?.userId);

  console.log(selectedRole, "selectedRole from activiyty list");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const smartCoachButton = (value) => {
    smartCoachButtonClicked(value);
    navigate(`/role/${selectedRole}/activityGram/SmartCoach`);
    dispatch(setActivatingID(3));
    onClose();
  };

  const handleStudentRoster = () => {
    navigate(`/role/${role}/studentroster/${selectedCardData.uuid}`);
  };

  const handleViewEnterData = () => {
    navigate(
      `/role/${role}/ActivityGramEvent/${selectedCardData.uuid}/student/${loginResponse?.response?.uuid}`
    );
  };

  const handleDeleteEvent = () => {
    console.log("in handleDelete event ====>");
    let body = {
      updater_role: selectedRole,
      updated_by: userId,
    };
    dispatch(agDeleteEventData({ token, eventId, body }));

    onClose();
  };

  console.log(selectedCardData, "from 95");
  return (
    <>
      <Modal
        isOpen={isViewDataClicked}
        onClose={() => setIsViewDataClicked(false)}
        size="sm"
        isCentered
      >
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
                    display="flex"
                    justifyContent="space-between"
                    bgColor="#E7F1FF"
                    border="1px"
                    borderColor="#E7F1FF"
                    borderRadius="3"
                    w="100%"
                    px="2"
                    py="1.5"
                  >
                    <Text
                      mt="2"
                      color="black-2"
                      textStyle={"textHead"}
                      fontWeight="bold"
                    >
                      {selectedCardData.event_name}
                    </Text>
                    {role && role !== "student" ? (
                      <Box display="flex" gap="1">
                        <Box display="flex" gap="2" onClick={handleDeleteEvent}>
                          <Text
                            textDecoration="underline"
                            textStyle={"textHead"}
                            cursor="pointer"
                            mt="1"
                          >
                            Delete
                          </Text>
                          <RiDeleteBin6Line
                            size={19}
                            fill="red"
                            className="mt-1"
                          />
                        </Box>
                        <Box
                          display="flex"
                          gap="2"
                          onClick={() => {
                            console.log(current.pathname, "from 162");
                            dispatch(
                              setPreviousPath(
                                `/role/${selectedRole}/ActivityGramEvent`
                              )
                            );
                            navigate(
                              `/role/${role}/ag-edit-event/${selectedCardData?.uuid}`
                            );
                            // dispatch(setAgEventDataById({}));
                          }}
                        >
                          <Text
                            textDecoration="underline"
                            textStyle={"textHead"}
                            mt="1"
                            cursor="pointer"
                          >
                            Edit
                          </Text>
                          <FiEdit size={19} color="blue" className="mt-1" />
                        </Box>
                      </Box>
                    ) : null}
                  </Box>

                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    px="3"
                  >
                    <Flex direction="column" spacing="3">
                      <Text pb="2">Type:Activity Track </Text>
                      <HStack spacing="2">
                        <Box width="6" height="6">
                          <Image
                            src={calendarImg}
                            alt="calendar"
                            w="full"
                            h="full"
                            mt="2"
                          />
                        </Box>

                        <Text pt="6" textStyle={"textHead"}>
                          Start Date :{" "}
                          {moment(selectedCardData.start_date).format(
                            navigator.language === "en-GB"
                              ? "DD-MM-YYYY"
                              : "MM-DD-YYYY"
                          )}{" "}
                        </Text>
                      </HStack>
                    </Flex>

                    <Box>
                      <Image
                        src={activityGramTestEventsImage}
                        objectFit="contain"
                        alt="calendar"
                        w={{ base: "5rem", lg: "7rem", md: "10rem" }}
                      />
                    </Box>
                  </Flex>
                  {role && role !== "student" ? (
                    <Flex justifyContent="space-around" p="2">
                      <Box display="flex" alignItems="center">
                        <Image src={absent} h="25px" marginRight="1rem" />
                        <Text textStyle={"textHead"}>
                          {selectedCardData?.participants} Participants
                        </Text>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Image src={present} h="25px" marginRight="1rem" />
                        <Text textStyle={"textHead"}>
                          {selectedCardData?.missing_data} Missing Data
                        </Text>
                      </Box>{" "}
                    </Flex>
                  ) : null}
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
                    px="3.8rem"
                    py={{ base: "0.3rem", md: "0.6rem", lg: "0.6rem" }}
                    m="2"
                    borderRadius={14}
                    onClick={() => smartCoachButton(false)}
                  >
                    <Image
                      src={vesselImg}
                      alt="vessel"
                      pr="2"
                      w={{ base: "8", lg: "8", md: "8" }}
                      h={{ base: "8", lg: "6", md: "6" }}
                    />
                    <Text textStyle={"textHead"} fontWeight="thin">
                      Smart Coach Resources
                    </Text>
                  </Box>

                  {selectedRole?.length && selectedRole != "student" ? (
                    <Button
                      mb="2rem"
                      mt="1rem"
                      textStyle={"textHead"}
                      fontWeight="thin"
                      textColor="white"
                      bgColor="primary"
                      px="6rem"
                      borderRadius={14}
                      w={{ base: "19rem", lg: "20rem", md: "full" }}
                      onClick={() => handleStudentRoster()}
                    >
                      {" "}
                      View Student Roster
                    </Button>
                  ) : (
                    <Box>
                      <Button
                        mb="2rem"
                        mt="1rem"
                        textStyle={"textHead"}
                        fontWeight="thin"
                        textColor="white"
                        w={{ base: "19rem", lg: "full", md: "full" }}
                        bgColor="primary"
                        px="6.5rem"
                        borderRadius={14}
                        onClick={() => handleViewEnterData()}
                      >
                        {" "}
                        View/Enter Data
                      </Button>
                    </Box>
                  )}
                </Flex>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ActivityGramModal;

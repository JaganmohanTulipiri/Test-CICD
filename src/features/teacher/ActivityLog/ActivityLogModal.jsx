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
import ActivityLogImage from "../../../assets/images/OthersSectionImages/Activity GraMM LOG.svg";

import calendarImg from "../../../assets//images/Icon awesome-calendar-alt@2x.png";
import activityGramTestEventsImage from "../../../assets/images/OthersSectionImages/Activity Gram.svg";

import vesselImg from "../../../assets/images/vessel.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  alDeleteEventData,
  setAlEventDataById,
  setSelectedAlEvent,
} from "../teacherSlice";
import {
  setActivatingID,
  setPreviousPath,
} from "../../../store/slices/profileSlice";
import moment from "moment";

const ActivityLogModal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const role = useSelector((state) => state.profile.selectedRole);

  const loginResponse = useSelector((state) => state?.profile?.user);

  const {
    isViewDataClicked,
    selectedCardData,
    smartCoachButtonClicked,
    setIsViewDataClicked,
  } = props;

  const eventId = selectedCardData?.uuid;

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const token = useSelector((state) => state.profile.token);

  console.log(selectedRole, "selectedRole from activiyty list");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const smartCoachButton = (value) => {
    smartCoachButtonClicked(value);
    navigate(`/role/${selectedRole}/activityGramLog/SmartCoach`);
    dispatch(setActivatingID(3));
  };

  const handleStudentRoster = () => {
    dispatch(setSelectedAlEvent(selectedCardData));

    navigate(
      `/role/${selectedRole}/activity-log-store-data/${selectedCardData.uuid}`
    );
  };

  const handleViewEnterDataButton = () => {
    console.log(selectedCardData, "from 87");
    dispatch(setSelectedAlEvent(selectedCardData));
    navigate(
      `/role/${role}/ActivityLog/${selectedCardData.uuid}/student/${loginResponse?.response?.uuid}`
    );
  };

  const handleDelete = () => {
    let body = {
      uuid: eventId,
      updater_role: selectedRole,
    };
    dispatch(alDeleteEventData({ token, body }));

    onClose();
    setIsViewDataClicked(false);
  };

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
                w="full"
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
                    <Text color="black-2" textStyle="h4">
                      {selectedCardData.challenge_name}
                    </Text>
                    {role !== "student" ? (
                      <Box display="flex">
                        <Box display="flex" px="10px" onClick={handleDelete}>
                          <Text textDecoration="underline" cursor="pointer">
                            Delete
                          </Text>
                          <RiDeleteBin6Line size={20} fill="red" />
                        </Box>
                        <Box
                          display="flex"
                          onClick={() => {
                            dispatch(
                              setPreviousPath(
                                `/role/${selectedRole}/ActivityLog`
                              )
                            );
                            navigate(
                              `/role/${selectedRole}/al-edit-event/${selectedCardData?.uuid}`
                            );
                          }}
                        >
                          <Text textDecoration="underline" cursor="pointer">
                            Edit
                          </Text>
                          <FiEdit size={20} color="blue" />
                        </Box>
                      </Box>
                    ) : null}
                  </Box>

                  <Flex
                    direction="row"
                    alignItems="center"
                    pl="3"
                    justifyContent="space-between"
                  >
                    <Flex direction="column" spacing="3">
                      <Text fontSize="sm" pb="2" marginRight="1rem">
                        Type: <span>{selectedCardData.challenge_type} </span>
                      </Text>
                      <Text fontSize="sm" pb="2" marginRight="1rem">
                        Goal: <span>{selectedCardData.daily_goal}</span>
                      </Text>
                      <HStack spacing="2" mt="2">
                        <Box width="5" height="5">
                          <Image
                            src={calendarImg}
                            alt="calendar"
                            w="full"
                            h="full"
                          />
                        </Box>

                        <Text
                          fontSize="sm"
                          display="flex"
                          alignContent="center"
                        >
                          <Text>Start Date : </Text>
                          {moment(selectedCardData.start_date).format(
                            navigator.language === "en-GB"
                              ? "DD-MM-YYYY"
                              : "MM-DD-YYYY"
                          )}{" "}
                        </Text>
                      </HStack>
                      <HStack spacing="2" mt="2">
                        <Box width="5" height="5">
                          <Image
                            src={calendarImg}
                            alt="calendar"
                            w="full"
                            h="full"
                          />
                        </Box>

                        <Text
                          fontSize="sm"
                          display="flex"
                          alignContent="center"
                        >
                          <Text>End Date : </Text>
                          {moment(selectedCardData.end_date).format(
                            navigator.language === "en-GB"
                              ? "DD-MM-YYYY"
                              : "MM-DD-YYYY"
                          )}{" "}
                        </Text>
                      </HStack>
                    </Flex>
                    <Flex>
                      <Box
                        w={{ base: "none", md: "5rem", lg: "5rem" }}
                        h={{ base: "none", md: "6rem", lg: "6rem" }}
                      >
                        <Image
                          src={ActivityLogImage}
                          objectFit="contain"
                          alt="calendar"
                          display={{ base: "none", md: "flex", lg: "flex" }}
                        />
                      </Box>
                    </Flex>
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
                    borderRadius={14}
                    px={{ lg: "3rem", base: "1rem", md: "3rem" }}
                    py={{ base: "0.5rem", md: "0.5rem", lg: "0.5rem" }}
                    onClick={() => smartCoachButton(false)}
                  >
                    <Image src={vesselImg} alt="vessel" w={8} h={6} pr="2" />
                    <Text
                      fontSize="sm"
                      fontFamily="poppins"
                      whiteSpace={"nowrap"}
                    >
                      Smart Coach Resources
                    </Text>
                  </Box>

                  {role === "student" ? (
                    <Button
                      mb={{
                        base: "1rem",
                        md: "2rem",
                        lg: "2rem",
                      }}
                      px={{ lg: "6rem", base: "3rem" }}
                      mt="1rem"
                      fontSize="sm"
                      fontWeight="normal"
                      fontFamily="poppins"
                      textColor="white"
                      bgColor="primary"
                      borderRadius={14}
                      onClick={() => handleViewEnterDataButton()}
                    >
                      View/Enter Data
                    </Button>
                  ) : (
                    <Box
                      mt="1rem"
                      mb="2rem"
                      bgColor="primary"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      cursor="pointer"
                      textColor="white"
                      borderRadius={14}
                      px={{ lg: "4.8rem", base: "3rem", md: "4.8rem" }}
                      py={{ base: "0.5rem", md: "0.5rem", lg: "0.5rem" }}
                      onClick={() => handleStudentRoster(false)}
                    >
                      <Text
                        fontSize="sm"
                        fontFamily="poppins"
                        whiteSpace={"nowrap"}
                      >
                        View Student Roster
                      </Text>
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

export default ActivityLogModal;

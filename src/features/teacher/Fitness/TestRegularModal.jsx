import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Center,
  Box,
  HStack,
  Stack,
  Img,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import absent from "../../../assets/customIcons/absent@2x.png";
import present from "../../../assets/customIcons/absent.png";
import edit from "../../../assets/customIcons/Icon feather-edit@2x.png";
import calender from "../../../assets/customIcons/Icon awesome-calendar-alt@2x.png";
import run from "../../../assets/customIcons/undraw_fitness_stats_sht6 (1)@2x.png";
import view from "../../../assets/customIcons/Group 2983@2x.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEventData,
  getEventsList,
  setEventDataById,
  setEventStudentList,
  setSelectedEvent,
} from "../teacherSlice";
import vesselImg from "../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/whistle-1@2x.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import girlImg from "../../../assets/images/Group 3776@2x.png";
import excerciseImg from "../../../assets/images/exerciseIcon.svg";

// import fitnessGramIcon from '../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/FitnessGram.svg';
import DeleteModal from "../../../components/DeleteModal";
import { setActivatingID } from "../../../store/slices/profileSlice";
import { FiEdit } from "react-icons/fi";
import moment from "moment";

function TestRegularModal(props) {
  const { event, isViewDataClicked, setIsViewDataClicked } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [deleteModal, setDeleteModal] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.profile.token);
  const userId = useSelector((state) => state.profile.userId);
  const ResponseCode = useSelector((state) => state?.teacher?.responseCode);

  const selectedRole = useSelector((state) => state.profile.selectedRole);

  const {
    isClciked,
    studentItemCard,
    isClosed,
    type,
    startDate,
    endDate,
    attend,
    missing,
  } = props;

  //   useEffect(() => {
  //     dispatch(getEventsList({ userId, token, role }));
  //   }, []);

  const smartCoach = () => {
    console.log("iam eidt");
    navigate(`/role/${selectedRole}/fitnessGram/SmartCoach/${event.uuid}`);
    dispatch(setActivatingID(3));
    if (selectedRole == "districtAdmin") {
      dispatch(setActivatingID(4));
    }
  };
  const enterData = () => {
    console.log("iam eidt", event.uuid);
    dispatch(setEventStudentList([]));
    navigate(`/role/${selectedRole}/adminTest/${event.uuid}`);
    dispatch(setSelectedEvent(event));
    dispatch(setActivatingID(2));
    if (selectedRole == "districtAdmin") {
      dispatch(setActivatingID(8));
    }
  };
  const handleValidateData = () => {
    navigate(`/role/${selectedRole}/testRegular/${event.uuid}`);
    dispatch(setSelectedEvent(event));
  };

  const handleDeleteEvent = () => {
    dispatch(
      deleteEventData({
        eventId: event.uuid,
        token,
        body: { updated_by: userId, updater_role: selectedRole },
      })
    );
    setIsViewDataClicked(false);

    onClose();
  };

  return (
    <>
      <Box w="sm">
        <Modal
          isCentered
          isOpen={isViewDataClicked}
          onClose={() => {
            setIsViewDataClicked(false);
            onClose;
          }}
          size="3xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody p="0">
              <>
                <Stack spacing={"2"}>
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
                    <Text textStyle={"textHead"} my="1">
                      {" "}
                      {event.event_name}
                    </Text>
                    <Box display="flex" my="1">
                      <Box display="flex" px="10px" onClick={handleDeleteEvent}>
                        <Text
                          textDecoration="underline"
                          cursor="pointer"
                          textStyle={"textHead"}
                        >
                          Delete
                        </Text>
                        <RiDeleteBin6Line size={20} fill="red" />
                      </Box>
                      <Box
                        display="flex"
                        onClick={() => {
                          navigate(
                            `/role/${selectedRole}/edit-event/${event.uuid}`
                          );
                        }}
                      >
                        <Text
                          textDecoration="underline"
                          cursor="pointer"
                          textStyle={"textHead"}
                        >
                          Edit
                        </Text>
                        <FiEdit size={20} color="blue" />
                      </Box>
                    </Box>
                  </Box>
                  <Box px="4">
                    <Box display={"flex"} gap="2" mt="2">
                      <HStack>
                        <Img src={calender} className="h-4 w-4 mx-2" />
                        <Text textStyle={"textHead"}>
                          Start Date :{" "}
                          <span>
                            {" "}
                            {moment(event.start_date).format(
                              navigator.language === "en-GB"
                                ? "DD-MM-YYYY"
                                : "MM-DD-YYYY"
                            )}
                          </span>
                        </Text>
                      </HStack>
                      <HStack>
                        <Img src={calender} className="h-4 w-4 mx-2" />
                        <Text textStyle={"textHead"}>
                          End Date :{" "}
                          <span>
                            {" "}
                            {moment(event.end_date).format(
                              navigator.language === "en-GB"
                                ? "DD-MM-YYYY"
                                : "MM-DD-YYYY"
                            )}
                          </span>
                        </Text>
                      </HStack>
                    </Box>
                    <Box display={"flex"} gap="10" mt="4 ">
                      <HStack>
                        <Img src={absent} className="h-4 w-4 mx-2 " />
                        <Text textStyle={"textHead"}>
                          Participants : <span>{event.participants}</span>
                        </Text>
                      </HStack>
                      <HStack>
                        <Img src={present} className="h-4 w-4 mx-2" />
                        <Text textStyle={"textHead"}>
                          Missing Data : <span>{event.participants || 0}</span>
                        </Text>
                      </HStack>
                    </Box>
                    <HStack mt="5">
                      <Img src={excerciseImg} h="5" ml="2" />
                      <Text textStyle={"textHead"} whiteSpace="nowrap">
                        Test Items:
                      </Text>
                      <Text textStyle={"textHead"}>
                        {" "}
                        {event?.test_items.join(", ") || (
                          <Text className="text-red">Data Not Found</Text>
                        )}
                      </Text>
                    </HStack>
                    <Center>
                      <Button
                        bg="primary"
                        color="white"
                        w="15rem"
                        onClick={smartCoach}
                        my="3"
                      >
                        <Img className="w-5 h-5 mt-0 mx-2" src={vesselImg} />
                        <Text textStyle={"textHead"}>SmartCoach</Text>
                      </Button>
                    </Center>
                    <Center>
                      <Box display={"flex"} gap="2">
                        <Button
                          bg="primary"
                          color="white"
                          onClick={() => {
                            enterData();
                          }}
                        >
                          <Text textStyle={"textHead"}>Enter Data</Text>
                        </Button>
                        <Button
                          bg="primary"
                          color="white"
                          onClick={() => {
                            handleValidateData();
                          }}
                        >
                          <Text
                            fontFamily={"body"}
                            fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                          >
                            Validate Data
                          </Text>
                        </Button>
                      </Box>
                    </Center>
                  </Box>
                </Stack>
              </>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}

export default TestRegularModal;

import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  Checkbox,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  TabList,
  Icon,
  Flex,
  Spacer,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

import { VscFilePdf } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import clock from "../../../assets/images/svgImages/clock-rotate-icon.svg";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApprovedStudentList,
  getPendingList,
  getValidatedList,
} from "../teacherSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SuccessModal from "../../../components/SuccessModal";
import {
  setActivatingID,
  setPreviousPath,
} from "../../../store/slices/profileSlice";
import { current } from "@reduxjs/toolkit";

const TestRegular = () => {
  const [tab, setTab] = useState(0);

  //   const[selectedPendingStudent,setSelectedPendingStudent] =useState([])

  const selectedPendingStudent = [];

  const location = useLocation();
  const params = useParams();

  const eventId = params?.eventId;

  console.log(eventId, "event id in test regular ");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userId = useSelector((state) => state?.profile?.userId);

  const token = useSelector((state) => state?.profile?.token);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const validateData = useSelector(
    (state) => state?.teacher?.validatedList?.validatedList
  );
  const validatedEventName = useSelector(
    (state) => state?.teacher?.selectedEvent?.event_name
  );

  const message = useSelector((state) => state?.profile?.message);

  console.log(validatedEventName, "");
  const pendingData = useSelector((state) => state?.teacher?.pendingList);

  const role = useSelector((state) => state.profile.selectedRole);

  const code = useSelector((state) => state?.profile?.code);

  const [userIds, setUserIds] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [validatedList, setValidatedList] = useState(false);
  const [pendingList, setPendingList] = useState(false);

  const handleUserIds = (e, userId) => {
    if (e.target.checked) {
      setUserIds((prevState) => {
        pendingData?.length === [...prevState, userId].length
          ? setIsAllChecked(true)
          : setIsAllChecked(false);
        return [...prevState, userId];
      });
    } else {
      let dummyUserIds = userIds.slice();
      let userIdIndex = dummyUserIds.findIndex((id) => id === userId);
      dummyUserIds.splice(userIdIndex, 1);
      setUserIds([...dummyUserIds]);
      pendingData.length === dummyUserIds.length
        ? setIsAllChecked(true)
        : setIsAllChecked(false);
    }
  };
  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setIsAllChecked(true);
      let arr = pendingData.map((user) => user.uuid);
      setUserIds(arr);
    } else {
      setIsAllChecked(false);
      setUserIds([]);
    }
  };

  useEffect(() => {
    dispatch(getValidatedList({ eventId, token }));
    dispatch(getPendingList({ eventId, token }));
  }, []);

  useEffect(() => {
    setValidatedList(validateData);
  }, [validateData]);

  useEffect(() => {
    setPendingList(pendingData);
  }, [pendingData]);

  const approveStudents = () => {
    console.log("hi", "frommmmmmmmmmm");

    let body = {
      approver_id: userId,
      approver_role: role,
      user_ids: userIds,
      event_id: eventId,
    };
    console.log(body, "body for approving student list");
    dispatch(getApprovedStudentList({ token, body }));
  };

  // useEffect(() => {
  //   if (code === 200) {

  //     setTab("Validated");
  //   }
  // }, [code]);

  useEffect(() => {
    if (message) {
      dispatch(setPreviousPath(current.pathname));

      setTab(0);

      dispatch(getPendingList({ eventId, token }));

      dispatch(getValidatedList({ eventId, token }));
    }
  }, [message]);

  console.log("before", tab);

  const SkeltonTestUser = () => {
    return (
      <>
        {tab != 0 && pendingData?.length ? (
          <div className="flex items-center">
            {" "}
            <Checkbox isChecked={isAllChecked} onChange={handleCheckAll} />{" "}
            <p className="ml-2"> Select All</p>{" "}
          </div>
        ) : null}

        {tab === 0 ? (
          <>
            {" "}
            {validatedList?.length ? (
              validatedList?.map((item, index) => {
                return (
                  <>
                    <TabPanel bg="#F2F8FFC7" mt="5" borderRadius="2">
                      <Flex justifyContent="space-between" px="10">
                        <Flex gap={3} alignItems="center">
                          <FaUser size="25" fill="#19A617" />

                          <Box
                            onClick={() => {
                              console.log("itemmm");
                              navigate(
                                `/role/${selectedRole}/adminTest/${params?.eventId}`
                              );
                              dispatch(setActivatingID("2"));
                            }}
                          >
                            <Text>{item.first_name}</Text>
                          </Box>
                        </Flex>
                        <Flex gap={3} alignItems="center" px="180">
                          <GiCheckMark size="25" fill="#19A617" />

                          <Text color="fit">Validated</Text>
                        </Flex>
                      </Flex>
                    </TabPanel>
                  </>
                );
              })
            ) : message?.length ? (
              " "
            ) : (
              <Text textAlign="center" fontWeight="bold">
                NO DATA FOUND
              </Text>
            )}
          </>
        ) : (
          <>
            {pendingList?.length ? (
              pendingList.map((item, index) => {
                return (
                  <>
                    <TabPanel bg="#F2F8FFC7" mt="5" borderRadius="2">
                      <Flex justifyContent="space-between" px="10">
                        <Flex gap={3} alignItems="center">
                          <>
                            <Checkbox
                              isChecked={userIds?.includes(item?.uuid)}
                              onChange={(e) => [handleUserIds(e, item.uuid)]}
                            />
                            <FaUser size="25" fill="red" />
                          </>
                          <Text>{item.first_name}</Text>
                        </Flex>
                        <Flex gap={3} alignItems="center" px="180">
                          <img src={clock} className="w-6 h-6" />

                          <Text color="red">Pending</Text>
                        </Flex>
                      </Flex>
                    </TabPanel>
                  </>
                );
              })
            ) : (
              <Text textAlign="center" fontWeight="bold">
                NO DATA FOUND
              </Text>
            )}
          </>
        )}

        {tab != 0 && pendingData?.length ? (
          <div className=" flex flex-row mt-5  justify-center  ">
            <Button
              colorScheme="#00029"
              color="black-4"
              marginRight="10"
              padding="6"
              borderRadius="20"
              shadow="lg"
            >
              Back
            </Button>
            <Button colorScheme="blue" padding="4" onClick={approveStudents}>
              Approve
            </Button>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <>
      <div>
        <Text textStyle="h1">{validatedEventName}</Text>
        <Tabs
          variant="unstyled"
          padding="5"
          index={tab}
          onChange={(index) => {
            console.log("hellooo"), setTab(index);
          }}
        >
          <TabList>
            <Tab
              _selected={{
                color: "white",
                bg: "blue.500",
                borderLeftRadius: "15",
              }}
              backgroundColor="#F5F5F5"
              w="50rem"
              fontSize="sm"
            >
              Validated
            </Tab>
            <Tab
              _selected={{
                color: "white",
                bg: "blue.500",
                borderRightRadius: "15",
              }}
              backgroundColor="#F5F5F5"
              w="50rem"
              fontSize="sm"
            >
              Pending
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SkeltonTestUser />
            </TabPanel>
            <TabPanel>
              <SkeltonTestUser />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <SuccessModal message="Data approved" />
      </div>
    </>
  );
};

export default TestRegular;

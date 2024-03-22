import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GridProvider from "../../../components/GridProvider";
import { Select as MultiSelect } from "chakra-react-select";
import PositiveButton from "../../../components/PositiveButton";
import NegativeButton from "../../../components/NegativeButton";

import { createEventData } from "./fitnessgramdata";
import { useDispatch, useSelector } from "react-redux";
import {
  getClassesList,
  getEventDataById,
  getEventTestList,
  getManageClassesList,
  getMandateEventTestList,
  getRecentEventTestList,
  getrecommondedEventTestList,
  getSchoolsList,
  postEventData,
  setEventDataById,
  setMandateEventTestList,
  setRecentEventTestList,
  setRecommondedEventTestList,
  setResponse,
} from "../teacherSlice";
// import { Button } from "antd";
import { Button } from "@chakra-ui/react";
import SuccessModal from "../../../components/SuccessModal";
import { useLocation, useNavigate } from "react-router-dom";
import EventCard from "./EventCard";
import CreateEventModal from "./CreateEventModal";
import AdminPopUp from "../../../components/GlobalComponents/Popups/AdminPopUp";
import { validateFormData } from "../../../Utilities/FormValidation";
import ManageMandates from "../../DistrictAdmin/System Administrator/ManageMandates/ManageMandates";

const CreateEvent = () => {
  const { title, createEventDetails } = createEventData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const loading = useSelector((state) => state?.teacher?.loading);
  const userId = useSelector((state) => state.profile.userId);
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const token = useSelector((state) => state.profile.token);
  const schoolsList = useSelector((state) => state.teacher.schools);
  const classesList = useSelector((state) => state.teacher.classes);
  const eventTestList = useSelector((state) => state.teacher.eventTestList);
  const isLoading = useSelector((state) => state.teacher.loading);
  const responseCode = useSelector((state) => state.teacher.responseCode);
  const {required, exclude} = useSelector(
    (state) => state?.teacher?.mandateEventTestList
  );


  console.log(required, exclude ,"mandates list========>")

  const initialEventTests = [
    {
      name: "Aerobic Capacity",
      test_items: [],
    },
    {
      name: "Body Composition",
      test_items: [],
    },
    {
      name: "Muscle Strength and Endurance",
      test_items: [],
    },
    {
      name: "Flexibility",
      test_items: [],
    },
    {
      name: "Activity Days",
      test_items: [],
    },
  ];

  const autoSelectArr = ["ONE-MILE RUN", "ONE-MILE WALK", "HEART"];

  const autoSelectObj = {
    "ONE-MILE RUN": (modifiedEvents, testName) => {
      let autoIndex = modifiedEvents.findIndex((event) =>
        event.name.includes("Body Composition")
      );

      let autoIndex2 = modifiedEvents.findIndex((event) =>
        event.name.includes("Aerobic Capacity")
      );
      if (autoIndex == -1) {
        modifiedEvents.push({
          name: "Body Composition",
          test_items: ["HEIGHT", "WEIGHT"],
        });
        setSelectedTestItems((prevState) => [...prevState, "HEIGHT", "WEIGHT"]);
      } else {
        if (
          modifiedEvents[autoIndex2]?.test_items.includes("ONE-MILE RUN") &&
          !modifiedEvents[autoIndex].test_items.includes("WEIGHT")
        ) {
          modifiedEvents[autoIndex].test_items.push("WEIGHT");
          setSelectedTestItems((prevState) => [...prevState, "WEIGHT"]);
        }

        if (
          modifiedEvents[autoIndex2]?.test_items.includes("ONE-MILE RUN") &&
          !modifiedEvents[autoIndex].test_items.includes("HEIGHT")
        ) {
          modifiedEvents[autoIndex].test_items.push("HEIGHT");
          setSelectedTestItems((prevState) => [...prevState, "HEIGHT"]);
        }
      }
    },
    "ONE-MILE WALK": (modifiedEvents, testName, testIndex) => {
      let autoIndex2 = modifiedEvents.findIndex((event) =>
        event.name.includes("Aerobic Capacity")
      );

      if (!modifiedEvents[autoIndex2]?.test_items.includes("HEART")) {
        modifiedEvents[autoIndex2]?.test_items.push("HEART");

        !selectedTestItems.includes("HEART") &&
          setSelectedTestItems((prevState) => [...prevState, "HEART"]);
      }

      let autoIndex = modifiedEvents.findIndex((event) =>
        event.name.includes("Body Composition")
      );
      if (autoIndex == -1) {
        modifiedEvents.push({
          name: "Body Composition",
          test_items: ["WEIGHT"],
        });
        setSelectedTestItems((prevState) => [...prevState, "WEIGHT"]);
      } else {
        if (
          !modifiedEvents[autoIndex].test_items.includes("WEIGHT") &&
          modifiedEvents[autoIndex2]?.test_items.includes("ONE-MILE WALK")
        ) {
          modifiedEvents.splice(autoIndex, 1, {
            ...modifiedEvents[autoIndex],
            test_items: [...modifiedEvents[autoIndex]["test_items"], "WEIGHT"],
          });

          setSelectedTestItems((prevState) => [...prevState, "WEIGHT"]);
        }
      }
    },
    HEART: (modifiedEvents, testName, testIndex, modifiedItems) => {
      if (modifiedItems.includes("ONE-MILE WALK")) {
        let testItemIndex =
          modifiedEvents[testIndex].test_items.indexOf("ONE-MILE WALK");
        if (testItemIndex != -1) {
          modifiedEvents[testIndex].test_items.splice(testItemIndex, 1);
          let testItemIndex2 = modifiedItems.indexOf("ONE-MILE WALK");
          modifiedItems.splice(testItemIndex2, 1);
          setSelectedTestItems([...modifiedItems]);
        }
      }
    },
  };

  const [schools, setSchools] = useState();
  const [classes, setClasses] = useState();
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedEventTests, setSelectedEventTests] =
    useState(initialEventTests);

  const [selectedTestItems, setSelectedTestItems] = useState([]);

  const [selectedEvents, setSelectedEvents] = useState([]);
  const [inputs, setInputs] = useState({
    event_name: "",
    event_type: "",
    start_date: "",
    end_date: "",
    schools: [],
    classes: [],
  });

  const [errors, setErrors] = useState({});

  const handleSchools = (schoolsList) => {
    let all_value = null;
    if (schoolsList?.length) {
      for (let school of schoolsList) {
        if (school.label == "All") {
          all_value = school;
          break;
        }
      }
    }

    if (all_value) {
      console.log("in all case");
      setSelectedSchools(all_value);
      console.log(all_value.value, "paylpoadd");

      setInputs((prevState) => ({
        ...prevState,
        schools: all_value.value,
      }));
    } else {
      console.log("Not in all case");

      setSelectedSchools(schoolsList);

      setInputs((prevState) => ({
        ...prevState,
        schools: schoolsList?.map((item) => item?.value),
      }));
    }
  };

  const handleClasses = (classesList) => {
    let all_value = null;
    if (classesList?.length) {
      for (let clas of classesList) {
        if (clas.label == "All") {
          all_value = clas;
          break;
        }
      }
    }

    if (all_value) {
      console.log("in all case");
      setSelectedClasses([all_value]);

      setInputs((prevState) => ({
        ...prevState,
        classes: all_value.value,
      }));
    } else {
      console.log("Not in all case");

      setSelectedClasses(classesList);

      setInputs((prevState) => ({
        ...prevState,
        classes: classesList?.map((item) => item?.value),
      }));
    }
  };

  const handleEventsTestList = (i, testName, testItem) => {
    console.log(testItem, "test item in handle function");
    console.log(testName, "testName");

    let modifiedEvents = [...selectedEvents];
    let modifiedItems = [...selectedTestItems];

    if (testName === "Activity Days") {
      let testIndex = modifiedEvents.findIndex((event) =>
        event.name.includes(testName)
      );
      if (testIndex == -1) {
        modifiedEvents.push({
          name: testName,
          test_items: [
            "AEROBIC ACTIVITY",
            "MUSCLE-STRENGTHENING ACTIVITY",
            "BONE-STRENGTHENING ACTIVITY",
          ],
        });
        setSelectedTestItems((prevState) => [
          ...prevState,

          "AEROBIC ACTIVITY",
          "MUSCLE-STRENGTHENING ACTIVITY",
          "BONE-STRENGTHENING ACTIVITY",
        ]);
      } else {
        modifiedEvents.splice(testIndex, 1);
        [
          "AEROBIC ACTIVITY",
          "MUSCLE-STRENGTHENING ACTIVITY",
          "BONE-STRENGTHENING ACTIVITY",
        ].forEach((item) => {
          let testItemIndex2 = modifiedItems.indexOf(item);
          modifiedItems.splice(testItemIndex2, 1);
          setSelectedTestItems([...modifiedItems]);
        });
      }
    } else if (
      ["ABDOMINAL SKIN FOLD", "CALF SKIN FOLD", "TRICEP SKIN FOLD"].includes(
        testItem
      )
    ) {
      let testIndex = modifiedEvents.findIndex((event) =>
        event.name.includes(testName)
      );
      if (testIndex === -1) {
        modifiedEvents.push({
          name: testName,
          test_items: [
            "ABDOMINAL SKIN FOLD",
            "CALK SKIN FOLD",
            "TRICEP SKIN FOLD",
          ],
        });

        setSelectedTestItems((prevState) => [
          ...prevState,
          "ABDOMINAL SKIN FOLD",
          "CALF SKIN FOLD",
          "TRICEP SKIN FOLD",
        ]);
      } else {
        if (
          !modifiedEvents[testIndex].test_items.includes("ABDOMINAL SKIN FOLD")
        ) {
          modifiedEvents[testIndex].test_items.push(
            "ABDOMINAL SKIN FOLD",
            "CALF SKIN FOLD",
            "TRICEP SKIN FOLD"
          );
          setSelectedTestItems((prevState) => [
            ...prevState,
            "ABDOMINAL SKIN FOLD",
            "CALF SKIN FOLD",
            "TRICEP SKIN FOLD",
          ]);
        } else {
          let remainingItems = modifiedEvents[testIndex].test_items.filter(
            (item) =>
              ![
                "ABDOMINAL SKIN FOLD",
                "CALF SKIN FOLD",
                "TRICEP SKIN FOLD",
              ].includes(item)
          );

          modifiedEvents.splice(testIndex, 1, {
            ...modifiedEvents[testIndex],
            test_items: remainingItems,
          });

          ["ABDOMINAL SKIN FOLD", "CALF SKIN FOLD", "TRICEP SKIN FOLD"].forEach(
            (item) => {
              let testItemIndex2 = modifiedItems.indexOf(item);
              modifiedItems.splice(testItemIndex2, 1);
              setSelectedTestItems([...modifiedItems]);
            }
          );
        }
      }
    } else if (
      ["SIT AND REACH LEFT", "SIT AND REACH RIGHT"].includes(testItem)
    ) {
      let testIndex = modifiedEvents.findIndex((event) =>
        event.name.includes(testName)
      );
      if (testIndex === -1) {
        modifiedEvents.push({
          name: testName,
          test_items: ["SIT AND REACH LEFT", "SIT AND REACH RIGHT"],
        });

        setSelectedTestItems((prevState) => [
          ...prevState,
          "SIT AND REACH LEFT",
          "SIT AND REACH RIGHT",
        ]);
      } else {
        if (
          !modifiedEvents[testIndex].test_items.includes("SIT AND REACH LEFT")
        ) {
          modifiedEvents[testIndex].test_items.push(
            "SIT AND REACH LEFT",
            "SIT AND REACH RIGHT"
          );
          setSelectedTestItems((prevState) => [
            ...prevState,
            "SIT AND REACH LEFT",
            "SIT AND REACH RIGHT",
          ]);
        } else {
          let remainingItems = modifiedEvents[testIndex].test_items.filter(
            (item) =>
              !["SIT AND REACH LEFT", "SIT AND REACH RIGHT"].includes(item)
          );

          modifiedEvents.splice(testIndex, 1, {
            ...modifiedEvents[testIndex],
            test_items: remainingItems,
          });

          ["SIT AND REACH LEFT", "SIT AND REACH RIGHT"].forEach((item) => {
            let testItemIndex2 = modifiedItems.indexOf(item);
            modifiedItems.splice(testItemIndex2, 1);
            setSelectedTestItems([...modifiedItems]);
          });
        }
      }
    } else if (
      ["SHOULDER STRETCH LEFT", "SHOULDER STRETCH RIGHT"].includes(testItem)
    ) {
      let testIndex = modifiedEvents.findIndex((event) =>
        event.name.includes(testName)
      );
      if (testIndex === -1) {
        modifiedEvents.push({
          name: testName,
          test_items: ["SHOULDER STRETCH LEFT", "SHOULDER STRETCH RIGHT"],
        });

        setSelectedTestItems((prevState) => [
          ...prevState,
          "SHOULDER STRETCH LEFT",
          "SHOULDER STRETCH RIGHT",
        ]);
      } else {
        if (
          !modifiedEvents[testIndex].test_items.includes(
            "SHOULDER STRETCH LEFT"
          )
        ) {
          modifiedEvents[testIndex].test_items.push(
            "SHOULDER STRETCH LEFT",
            "SHOULDER STRETCH RIGHT"
          );
          setSelectedTestItems((prevState) => [
            ...prevState,
            "SHOULDER STRETCH LEFT",
            "SHOULDER STRETCH RIGHT",
          ]);
        } else {
          let remainingItems = modifiedEvents[testIndex].test_items.filter(
            (item) =>
              !["SHOULDER STRETCH LEFT", "SHOULDER STRETCH RIGHT"].includes(
                item
              )
          );

          modifiedEvents.splice(testIndex, 1, {
            ...modifiedEvents[testIndex],
            test_items: remainingItems,
          });

          let remainingItems2 = modifiedItems.filter(
            (item) =>
              !["SHOULDER STRETCH LEFT", "SHOULDER STRETCH RIGHT"].includes(
                item
              )
          );

          setSelectedTestItems([...remainingItems2]);
        }
      }
    } else {
      let testIndex = modifiedEvents.findIndex((event) =>
        event.name.includes(testName)
      );
      if (testIndex === -1) {
        modifiedEvents.push({ name: testName, test_items: [testItem] });
        setSelectedTestItems((prevState) => [...prevState, testItem]);
        console.log("1st condition");
        autoSelectArr.includes(testItem) &&
          autoSelectObj[testItem](
            modifiedEvents,
            testName,
            testIndex,
            modifiedItems
          );
      } else {
        if (!modifiedEvents[testIndex].test_items.includes(testItem)) {
          modifiedEvents.splice(testIndex, 1, {
            ...modifiedEvents[testIndex],
            test_items: [...modifiedEvents[testIndex].test_items, testItem],
          });
          setSelectedTestItems((prevState) => [...prevState, testItem]);
          console.log("2st condition");

          autoSelectArr.includes(testItem) &&
            autoSelectObj[testItem](
              modifiedEvents,
              testName,
              testIndex,
              modifiedItems
            );
        } else {
          let testItemIndex =
            modifiedEvents[testIndex].test_items.indexOf(testItem);

          let remaining = modifiedEvents[testIndex].test_items.filter(
            (item, index) => index !== testItemIndex
          );

          console.log(remaining, "remaining items");

          modifiedEvents.splice(testIndex, 1, {
            ...modifiedEvents[testIndex],
            test_items: [...remaining],
          });
          let testItemIndex2 = modifiedItems.indexOf(testItem);
          console.log(testItemIndex2, "index2++++++++++++++++++++++++>>>");
          modifiedItems.splice(testItemIndex2, 1);
          console.log(modifiedItems, "modified items=====>");

          setSelectedTestItems([...modifiedItems]);

          console.log("3st condition");

          autoSelectArr.includes(testItem) &&
            autoSelectObj[testItem](
              modifiedEvents,
              testName,
              testIndex,
              modifiedItems
            );
        }
      }
    }

    console.log(modifiedEvents);
    setSelectedEvents([...modifiedEvents]);

    console.log(i, testItem, "in create event page");
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(getSchoolsList({ userId, token }));
    // dispatch(setClasses([]))
    dispatch(getEventTestList(token));
    dispatch(setResponse(""));
  }, []);

  useEffect(() => {
    if (inputs?.schools?.length) {
      dispatch(getClassesList({ body: { schools: inputs?.schools }, token }));
      setSelectedClasses([]);
      dispatch(
        getMandateEventTestList({
          token,
          schools: { schools: inputs?.schools },
        })
      );
    }
  }, [inputs?.schools]);

  useEffect(() => {
    if (schoolsList?.length) {
      let schoolOptions = [];

      const schoolUuidArray = schoolsList.map((each) => {
        schoolOptions.push({ label: each.school_name, value: each.uuid });
        return each.uuid;
      });

      schoolOptions.unshift({ label: "All", value: schoolUuidArray });
      setSelectedSchools([{ label: "All", value: schoolUuidArray }]);
      setInputs((prevState) => ({
        ...prevState,
        schools: schoolUuidArray,
      }));
      setSchools(schoolOptions);
    } else {
      setSelectedSchools([]);
      setInputs((prevState) => ({
        ...prevState,
        schools: [],
      }));
      setSchools([]);
    }
  }, [schoolsList]);

  useEffect(() => {
    if (classesList?.length) {
      let classOptions = [];
      const classUuidArr = classesList.map((each) => {
        classOptions.push({ label: each.class_name, value: each.uuid });
        return each.uuid;
      });
      classOptions.unshift({ label: "All", value: classUuidArr });
      setSelectedClasses([{ label: "All", value: classUuidArr }]);
      setInputs((prevState) => ({
        ...prevState,
        classes: classUuidArr,
      }));
      setClasses(classOptions);
    } else {
      setSelectedClasses([]);
      setInputs((prevState) => ({
        ...prevState,
        classes: [],
      }));
      setClasses([]);
    }
  }, [classesList]);

  useEffect(() => {
    if (inputs?.classes?.length) {
      dispatch(
        getRecentEventTestList({
          token,
          classes: { classes: inputs?.classes },
        })
      );
      dispatch(
        getrecommondedEventTestList({
          token,
          classes: { classes: inputs?.classes },
        })
      );
    } else {
      dispatch(setRecentEventTestList({}));
      dispatch(setMandateEventTestList({}));
      dispatch(setRecommondedEventTestList({}));
    }
  }, [inputs?.classes]);

 

  const handleRequiredMandates= ()=>{
    const events = [...eventTestList]?.map(item=>{
      let requiredItems = item.test_items.filter(testItem=>required.includes(testItem))
      return {name:item.name,test_items:requiredItems}
        })
      
     
      setSelectedEvents([...events])
  }
  

  useEffect(()=>{
    if(required?.length){ 
     handleRequiredMandates()
     setSelectedTestItems([...required])
    }
   
  },[required])

  console.log(eventTestList,"eventTestList++++++>")

  const handleSubmit = () => {
    let body = {
      ...inputs,
      //   schools: selectedSchools,
      //   classes: selectedClasses,
      event_struct: selectedEvents,
    };
    let errorObj = validateFormData(body);

    console.log(errorObj, "validation errors==========>");
    setErrors(errorObj);

    if (Object.keys(errorObj)?.length === 0) {
      let payload = {
        ...body,
        creater_role: selectedRole,
        created_by: userId,
        type_of_gram: false,
      };

      dispatch(postEventData({ payload, token }));
    }
  };

  console.log(selectedEvents, "selected events========>");
  console.log(selectedTestItems, "selected test items=======>");

  console.log(selectedClasses, selectedSchools, "removinggggggggggggg");
  return (
    <>
      {loading ? (
        <Center h="80vh">
          <Spinner color="gray-3" />
        </Center>
      ) : (
        <>
          <Flex position="relative" gap="4" direction={"column"} height="100%">
            <Text fontWeight="bold" textStyle={"textHead"}>
              {title}
            </Text>
            <Grid
              templateColumns={{
                base: "'repeat(1,1fr)'",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
              }}
              gap={{ base: "4", md: 8, lg: 4 }}
            >
              <GridItem>
                <Box maxW="100%">
                  <Text
                    mb={{ base: "0", md: "2", lg: "2" }}
                    textStyle={"textHead"}
                  >
                    Schools
                  </Text>
                  <MultiSelect
                    useBasicStyles
                    name="schools"
                    colorScheme="bg"
                    isMulti
                    value={selectedSchools}
                    closeMenuOnSelect
                    onChange={handleSchools}
                    textStyle={"textHead"}
                    options={
                      selectedSchools?.[0]?.label != "All" ? schools : []
                    }
                  />
                </Box>
                {errors?.schools && (
                  <Text color="red" textStyle={"textHead"}>
                    {errors.schools}
                  </Text>
                )}
              </GridItem>
              <GridItem>
                <Box maxW="100%">
                  <Text
                    mb={{ base: "0", md: "2", lg: "2" }}
                    textStyle={"textHead"}
                  >
                    Classes
                  </Text>
                  <MultiSelect
                    useBasicStyles
                    name="classes"
                    colorScheme="bg"
                    isMulti
                    value={selectedClasses}
                    closeMenuOnSelect
                    onChange={handleClasses}
                    options={
                      selectedSchools?.length &&
                      selectedClasses?.[0]?.label != "All"
                        ? classes
                        : []
                    }
                  />
                </Box>
                {errors?.classes && (
                  <Text color="red" textStyle={"textHead"}>
                    {errors.classes}
                  </Text>
                )}
              </GridItem>

              {/* <GridProvider data={createEventDetails} handleChange={handleChange} /> */}
              {createEventDetails.map((item, index) => {
                return (
                  <GridItem>
                    {item.inputType == "select" && (
                      <Box maxW="100%">
                        <Text
                          mb={{ base: "0", md: "2", lg: "2" }}
                          textStyle={"textHead"}
                        >
                          {item.lable}
                        </Text>
                        <Select
                          bg="bg.100"
                          borderColor="bg.100"
                          name={item.name}
                          value={inputs?.item?.name}
                          placeholder="Select..."
                          onChange={(e) => handleChange(e)}
                          textStyle={"textHead"}
                        >
                          {item.options.map((value, i) => {
                            return (
                              <option
                                key={i}
                                value={value}
                                textStyle={"textHead"}
                              >
                                {value}
                              </option>
                            );
                          })}
                        </Select>
                        {errors?.[item?.name] && (
                          <Text color="red">{errors?.[item?.name]}</Text>
                        )}
                      </Box>
                    )}

                    {item.inputType !== "multi-select" &&
                      item.inputType !== "select" && (
                        <Box maxW="100%">
                          <Text
                            mb={{ base: "0", md: "2", lg: "2" }}
                            textStyle={"textHead"}
                          >
                            {item.lable}
                          </Text>
                          <Input
                            type={item.inputType}
                            name={item.name}
                            value={inputs?.item?.name}
                            onChange={(e) => handleChange(e)}
                            border="0px"
                            bg="bg.100"
                            textStyle={"textHead"}
                          />
                          {errors?.[item?.name] && (
                            <Text color="red" textStyle={"textHead"}>
                              {errors?.[item?.name]}
                            </Text>
                          )}
                        </Box>
                      )}
                  </GridItem>
                );
              })}
            </Grid>

            <Tabs defaultIndex={1}>
              <TabList borderBottomColor="white">
                <Tab textStyle={"textHead"}>New</Tab>
                <Tab textStyle={"textHead"} whiteSpace="nowrap">
                  Recommended for You
                </Tab>
                <Tab textStyle={"textHead"}>Recents</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {eventTestList?.length &&
                    eventTestList.map((test, i) => {
                      return (
                        <Flex
                          direction="column"
                          key={test.name}
                          gap={{ base: "2", md: 1, lg: 1 }}
                        >
                          <Text
                            textStyle={"textHead"}
                            fontWeight={{
                              base: "thin",
                              md: "thin",
                              lg: "thin",
                            }}
                          >
                            {test.name}
                          </Text>
                          <HStack
                            spacing={{ base: "none", lg: 4, md: 4 }}
                            display={{ base: "none", md: "flex", lg: "flex" }}
                            mt="2"
                            mb="2"
                          >
                            {test.test_items.map((testItem, j) => {
                              return (
                                <Button
                                  shadow={"lg"}
                                  p="5"
                                  size="sm"
                                  key={testItem}
                                  onClick={() => {
                                    if(![...exclude,...required].includes(testItem)){
                                      handleEventsTestList(
                                        i,
                                        test.name,
                                        testItem
                                      );
                                    }
                                  }}
                                  rounded="lg"
                                  bg={
                                    selectedTestItems.includes(testItem)
                                      ? "primary "
                                      : "bg.100 "
                                  }
                                  color={
                                    selectedTestItems.includes(testItem)
                                      ? "white "
                                      : "black"
                                  }
                                >
                                  <Text
                                    textStyle="h6"
                                    fontWeight={"0rem"}
                                    fontFamily="body"
                                  >
                                    {testItem}
                                  </Text>
                                </Button>
                              );
                            })}
                          </HStack>
                          <Flex
                            gap={{ base: "2" }}
                            alignItems="center"
                            flexWrap="wrap"
                            flex={1}
                            flexGrow={1}
                          >
                            {test.test_items.map((testItem, j) => {
                              return (
                                <Box
                                  key={j.id}
                                  display={{
                                    base: "block",
                                    md: "none",
                                    lg: "none",
                                  }}
                                  border="1px solid gray"
                                  rounded={"md"}
                                  px="2"
                                  py="2"
                                  w="auto"
                                >
                                  <Box
                                    key={testItem}
                                    w="auto"
                                    onClick={() => {
                                      handleEventsTestList(
                                        i,
                                        test.name,
                                        testItem
                                      );
                                      console.log(i, j, "indexes=====>");
                                    }}
                                    bg={
                                      selectedTestItems.includes(testItem)
                                        ? "primary"
                                        : "bg.100"
                                    }
                                    color={
                                      selectedTestItems.includes(testItem)
                                        ? "white"
                                        : "black"
                                    }
                                  >
                                    <Text
                                      fontSize={{
                                        base: "11px",
                                        md: "md",
                                        lg: "md",
                                      }}
                                      fontWeight={"thin"}
                                    >
                                      {testItem}
                                    </Text>
                                  </Box>
                                </Box>
                              );
                            })}
                          </Flex>
                          <Divider
                            mt="5"
                            mb="3"
                            display={{ base: "block", md: "none", lg: "none" }}
                          />
                        </Flex>
                      );
                    })}
                  {errors?.event_struct && (
                    <Text color="red" textStyle={"textHead"}>
                      {errors?.event_struct}
                    </Text>
                  )}
                  <Flex justify="center" gap="8" pb="8" w="100%">
                    <Box onClick={() => navigate(`/role/${selectedRole}`)}>
                      <NegativeButton text={"Cancel"} />
                    </Box>

                    <Box onClick={handleSubmit}>
                      <PositiveButton text={"Create"} isLoading={isLoading} />
                    </Box>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <EventCard title={"Recommended List"} list="Some text" />
                </TabPanel>
                <TabPanel>
                  <EventCard title={"Recents Test List"} list="Some text" />

                  {/* <p>Recent Event list</p> */}
                </TabPanel>
              </TabPanels>
            </Tabs>

            <AdminPopUp />
          </Flex>
        </>
      )}
    </>
  );
};

export default CreateEvent;

import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Select as SearchWithDropdown } from "chakra-react-select";

import { CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import { IoMdStarOutline } from "react-icons/io";
import { BsFileEarmark, BsFilePdf } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecentResourcesByTest,
  getTestSelection,
  setRecentResourcesByTest,
} from "../../../store/slices/profileSlice";
import { useParams } from "react-router-dom";
import {
  getEventsList,
  getFgEventsList,
} from "../../../features/teacher/teacherSlice";

const TestFieldSmart = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const refArray = ["districtAdmin", "stateAdmin"];

  const userId = useSelector((state) => state?.profile?.userId);
  const role = useSelector((state) => state.profile.selectedRole);
  const eventsList = useSelector((state) => state?.teacher?.fgEventsList);
  const loading = useSelector((state) => state?.profile?.loading);

  const token = useSelector((state) => state?.profile?.token);

  const [selectedShowListItems, setSelectedShowListItems] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const [options, setOptions] = useState([]);

  const requiredOptions = [
    { value: "all", option: "All" },
    { value: "common", option: "Common" },
    { value: "fitnessGram", option: "Fitness Gram" },
    { value: "activityGram", option: "Activity Gram" },
    { value: "activityGramLog", option: "Activity Log" },
  ];

  const [eventType, setEventType] = useState("");
  const [eventId, setEventId] = useState("");

  const recentRecommendedList = useSelector(
    (state) => state?.profile?.recentResourcesByTest
  );

  const [selectedOption, setSelectedOption] = useState(null);

  const [recentRecommendedListItems, setRecentRecommendedListItems] = useState(
    recentRecommendedList
  );

  const handleChange = (option) => {
    console.log(option, "iam option");

    setSelectedOption(option);
  };

  const filterOptions = (inputValue) => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleInputChange = (searchText) => {
    console.log(searchText, "searchTextsearchTextsearchText");
  };

  console.log(
    recentRecommendedList,
    "recentRecommendedListrecentRecommendedList"
  );

  const onChange = (selectedItem) => {
    console.log(
      selectedItem,
      "newListnewListnewListnewList selectedItemselectedItem"
    );

    if (
      selectedItem !== undefined &&
      selectedItem !== null &&
      Object.keys(selectedItem)?.length > 0
    ) {
      const newList = recentRecommendedList?.filter((each) =>
        each?.title?.includes(selectedItem?.label)
      );

      console.log(newList, "newListnewListnewListnewList");

      setSelectedOption(newList?.title);

      setSelectedShowListItems(newList);
      setFilteredList(newList);
    } else {
      setRecentRecommendedListItems(recentRecommendedList);
      setFilteredList([]);
      setSelectedShowListItems([]);
      setSelectedOption(null);
    }

    // setFormData((prevState) => ({ ...prevState, user_uuid: teacher.value }));
  };

  const handleClear = () => {
    onChange(null);
  };

  useEffect(() => {
    {
      params?.eventType?.length && setEventType(params.eventType);
      params?.eventId?.length && setEventId(params.eventId);
    }
  }, [params]);

  useEffect(() => {
    if (eventType === "fitnessGram") {
      let body = {
        event_uuid: eventId?.length ? eventId : "",
        assessment_name: eventType?.length ? eventType : "all",
      };
      // dispatch(getTestSelection(token));
      eventId?.length && dispatch(getRecentResourcesByTest({ token, body }));
    } else {
      let body = {
        // event_uuid: eventId?.length ? eventId : "",
        assessment_name: eventType?.length ? eventType : "all",
      };
      // dispatch(getTestSelection(token));
      dispatch(getRecentResourcesByTest({ token, body }));
    }
  }, [eventType, eventId]);

  useEffect(() => {
    refArray.includes(role) &&
      dispatch(getFgEventsList({ userId, token, role }));
  }, []);

  useEffect(() => {
    if (recentRecommendedList?.length) {
      let arr = [];
      recentRecommendedList?.forEach((each) => {
        let obj = { label: each?.title, value: each?.title };
        arr.push(obj);
      });
      console.log(arr, "for teacher options");
      setFilteredList([...arr]);
    }

    // else {
    //   setFilteredList([]);
    // }

    const modifiedList = recentRecommendedList?.map((each) => {
      if (each?.title) {
        return {
          label: each?.title,
          value: each?.title,
        };
      }
    });

    console.log(modifiedList, "modifiedList");

    if (selectedOption === null) {
      setRecentRecommendedListItems(recentRecommendedList);
    }

    // setOptions(modifiedList);
  }, [recentRecommendedList, selectedOption]);

  console.log(
    recentRecommendedListItems,
    "recentRecommendedListItemsrecentRecommendedListItems"
  );

  useEffect(() => {
    let body = {
      assessment_name: "all",
    };
    // dispatch(getTestSelection(token));
    dispatch(getRecentResourcesByTest({ token, body }));
  }, []);

  useEffect(() => {
    dispatch(getFgEventsList({ token }));
  }, []);
  useEffect(() => {
    dispatch(setRecentResourcesByTest([]));
  }, []);

  console.log(filteredList, "filteredListfilteredList");

  return (
    <Flex h="full" direction="column">
      <Box
        display={{ md: "flex", lg: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt="10"
      >
        <Stack spacing={3} width={["20vw"]}>
          <Text
            className="text-[#808080] text-sm mb-2"
            fontSize={{ base: "sm", md: "md", lg: "md" }}
            whiteSpace={{ base: "nowrap", md: "flex", lg: "flex" }}
          >
            Select the Assessment
          </Text>

          <Select
            // placeholder="Select option"
            onClick={(e) => {
              setEventType(e.target.value);
            }}
            width={[
              "16rem", // 0-30em
              "60%", // 30em-48em
              "65%", // 48em-62em
              "100%", // 62em+
            ]}
          >
            {requiredOptions.length &&
              requiredOptions.map((item, i) => {
                return (
                  <option
                    key={i}
                    value={item.value}
                    selected={item?.value == params?.eventType}
                  >
                    {item.option}
                  </option>
                );
              })}
          </Select>
        </Stack>
        {eventType.length && eventType == "fitnessGram" ? (
          <>
            <Box spacing={3}>
              <Text
                className="text-[#808080] text-sm mb-2"
                fontSize={{ base: "sm", md: "md", lg: "md" }}
                whiteSpace={{ base: "nowrap", md: "flex", lg: "flex" }}
              >
                Select the Event Name
              </Text>

              <Select
                width={[
                  "16rem", // 0-30em
                  "60%", // 30em-48em
                  "65%", // 48em-62em
                  "100%", // 62em+
                ]}
                mt="4"
                placeholder="Select option"
                onClick={(e) => {
                  console.log(e.target.value);
                  setEventId(e.target.value);
                }}
              >
                {eventsList.length &&
                  eventsList.map((item, i) => {
                    return (
                      <option
                        key={i}
                        value={item.uuid}
                        selected={item?.uuid == params?.eventId}
                      >
                        {item.event_name}
                      </option>
                    );
                  })}
              </Select>
            </Box>

            <Stack
              spacing={4}
              className=""
              width={["30vw", "30vw", "30vw", "30vw"]}
            >
              <InputGroup
                className="border-[#C9C8C8] rounded-lg focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none"
                mt="10"
                width={[
                  "16rem", // 0-30em
                  "60%", // 30em-48em
                  "65%", // 48em-62em
                  "100%", // 62em+
                ]}
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon color="#C9C8C8" />}
                />
                <Input type="type" placeholder="Search" />
              </InputGroup>
            </Stack>
          </>
        ) : (
          <Stack
            spacing={4}
            className=""
            width={["30vw", "30vw", "30vw", "30vw"]}
        
          >
            <Box display="flex" width="100%" alignItems="center">
              <Box flex="1" minWidth={0}>
                <SearchWithDropdown
                  value={selectedOption}
                  options={filteredList}
                  onChange={onChange}
                  isClearable={true}
                  mb="8px"
                  useBasicStyles
                  // No need to pass styles prop here
                />
              </Box>
              {selectedOption && (
                <IconButton
                  icon={<CloseIcon />}
                  variant="ghost"
                  onClick={handleClear}
                />
              )}
            </Box>
          </Stack>
        )}
      </Box>
      {loading ? (
        <Center h="80vh">
          <Spinner color="gray-3" />
        </Center>
      ) : (
        <Box mt="8">
          {selectedShowListItems?.length > 0 ? (
            selectedShowListItems?.map((each) => (
              <Card
                bg="#f5f5f5"
                boxShadow="sm"
                h="14"
                border="1"
                mt="4"
                mb="5"
                borderColor="yellow.600"
              >
                <CardBody
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  m="0"
                  p="0"
                  cursor={"pointer"}
                  onClick={() => {
                    console.log(each, "iam ecahh");

                    window.open(
                      `https://d2d0wpgkzkt4y0.cloudfront.net/${each?.file_url}`,
                      "_blank"
                    );
                  }}
                >
                  <Icon as={IoMdStarOutline} w={8} h={6} color="#FECE50" />
                  <Icon as={BsFileEarmark} w={6} h={6} color="#EE373E" />
                  <Text className="px-5">{each?.title}</Text>
                </CardBody>
              </Card>
            ))
          ) : recentRecommendedListItems !== undefined &&
            recentRecommendedListItems?.length > 0 ? (
            recentRecommendedListItems?.map((each) => (
              <Card
                bg="#f5f5f5"
                boxShadow="sm"
                h="14"
                border="1"
                mt="4"
                mb="5"
                borderColor="yellow.600"
              >
                <CardBody
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  m="0"
                  p="0"
                  cursor={"pointer"}
                  onClick={() => {
                    console.log(each, "iam ecahh");

                    window.open(
                      `https://d2d0wpgkzkt4y0.cloudfront.net/${each?.file_url}`,
                      "_blank"
                    );
                  }}
                >
                  <Icon as={IoMdStarOutline} w={8} h={6} color="#FECE50" />
                  <Icon as={BsFileEarmark} w={6} h={6} color="#EE373E" />
                  <Text className="px-5">{each?.title}</Text>
                </CardBody>
              </Card>
            ))
          ) : (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              fontWeight={"bold"}
            >
              <Text>Resources are not found </Text>
              {/* <Image
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg"
              alt="no-data"
            /> */}
            </Box>
          )}
        </Box>
      )}
    </Flex>
  );
};

export default TestFieldSmart;

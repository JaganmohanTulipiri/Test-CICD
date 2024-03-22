import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReportFilterMain from "./ReportFilterMain";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getSchoolsList } from "../../teacher/teacherSlice";
import { getClassbasedonSchool } from "../../authentication/components/schoolAdmin/schoolAdminSlice";
import {
  getOverviewReportSummaryByClassApiCall,
  getStudentsListForReportsApiCall,
  setReportFilterDataObject,
  setRunReportButtonClicked,
} from "../../../DistrictAdminApis/districtAdminSlice";

const ReportFilter = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [viewMore, setViewMore] = useState(false);

  const {
    isReportFilterClicked,
    setIsReportFilterClicked,
    runReportClicked,
    setRunReportClicked,
  } = props;

  const dispatch = useDispatch();

  const location = useLocation();

  const schoolsList = useSelector((state) => state.teacher.schools);

  const classesList = useSelector(
    (state) => state?.schoolAdmin?.ClassbasedonSchool?.data?.response
  );

  const userId = useSelector((state) => state.profile.userId);

  const token = useSelector((state) => state.profile.token);

  const reportFilterDataObject = useSelector(
    (state) => state?.districtAdmin?.reportFilterDataObject
  );

  const runReportButtonClicked = useSelector(
    (state) => state?.districtAdmin?.runReportButtonClicked
  );

  const [isViewMoreButtonClicked, setIsViewMoreButtonClicked] = useState(false);

  const [initialRendering, setInitialRendering] = useState(true);

  const [classInitialRendering, setClassInitialRendering] = useState(true);

  const [removedSchoolsList, setRemovedSchoolsList] = useState(null);

  const [removedClassesList, setRemovedClassesList] = useState(null);

  const [schools, setSchools] = useState([]);

  const [classes, setClasses] = useState([]);

  const [formData, setFormData] = useState(null);

  const [initialCall, setInitialCall] = useState(true);

  const [finalReportsObj, setFinalReportsObj] = useState({
    school_uuids: [],
    class_name: [],
    grade: "",
    gender: "",
    start_date: "",
    end_date: "",
    search: "",
  });

  const date = new Date();

  const year = date.getFullYear();

  console.log(year, "iam dateee");

  const [data, setData] = useState({
    schoolYear: `${year - 1} - ${year}`,
    printComposition: true,
  });

  const [assessments, setAssessments] = useState({
    last30Days: false,
    last3Months: false,
    last6Months: false,
    thisYear: true,
  });

  const handlechange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleAssesments = (selectedItem) => {
    setAssessments({
      [selectedItem]: true,
    });
  };

  const handleSelectedRemoveSchools = (selectedItems) => {
    setInitialRendering(false);

    if (selectedItems?.length === 0) {
      setRemovedSchoolsList(selectedItems);
    }

    const filteredList = selectedItems
      ?.filter((item) => item.uuid !== "all")
      .map((item) => item.uuid);

    setFormData((prevState) => ({
      ...prevState,
      schools: filteredList,
    }));

    setFinalReportsObj((prevState) => ({
      ...prevState,
      school_uuids: filteredList,
    }));
  };

  const handleSelectedSchools = (selectedItems) => {
    setInitialRendering(false);

    let filteredList = selectedItems?.map((item) => item?.uuid);

    if (filteredList.includes("all")) {
      filteredList = schoolsList?.map((school) => school?.uuid);
      setSchools([{ uuid: "all", school_name: "Select All", disable: false }]);
    } else {
      setSchools(schoolsList);
    }

    setFormData((prevState) => ({
      ...prevState,
      schools: filteredList,
    }));

    setFinalReportsObj((prevState) => ({
      ...prevState,
      school_uuids: filteredList,
    }));
  };

  const handleSelectedRemoveClasses = (selectedItems) => {
    setClassInitialRendering(false);

    if (selectedItems?.length === 0) {
      setRemovedClassesList(selectedItems);
    }

    let filteredList = selectedItems?.map((item) => item?.uuid);

    if (filteredList.includes("all")) {
      filteredList = classesList?.map((classes) => classes?.uuid);

      setClasses([{ uuid: "all", class_name: "Select All", disable: false }]);
    } else {
      setClasses(classesList);
    }

    setFinalReportsObj((prevState) => ({
      ...prevState,
      class_name: filteredList,
    }));
  };

  const handleSelectedClasses = (selectedItems) => {
    setClassInitialRendering(false);

    let filteredList = selectedItems?.map((item) => item?.uuid);

    if (filteredList.includes("all")) {
      filteredList = classesList?.map((classes) => classes?.uuid);
      setClasses([{ uuid: "all", class_name: "Select All", disable: false }]);
    } else {
      setClasses(classesList);
    }

    setFinalReportsObj((prevState) => ({
      ...prevState,
      class_name: filteredList,
    }));
  };

  console.log(assessments, data, "assessmentsss");

  const handleView = () => {
    setIsViewMoreButtonClicked(!isViewMoreButtonClicked);
  };

  console.log(isViewMoreButtonClicked, "isview more button clicked");

  useEffect(() => {
    dispatch(getSchoolsList({ userId, token }));

    // setInitialCall(true)

    if (initialRendering) {
      setSchools([
        {
          uuid: "all",
          school_name: "Select All",
        },
      ]);
    }

    if (classInitialRendering) {
      setClasses([
        {
          uuid: "all",
          class_name: "Select All",
        },
      ]);
    }
  }, [isReportFilterClicked]);

  useEffect(() => {
    if (removedSchoolsList && removedSchoolsList?.length === 0) {
      setSchools([
        { uuid: "all", school_name: "Select All", disable: true },
        ...schoolsList,
      ]);

      setRemovedSchoolsList(null);
    }

    if (removedClassesList && removedClassesList?.length === 0) {
      setClasses([
        { uuid: "all", class_name: "Select All", disable: true },
        ...classesList,
      ]);

      setRemovedClassesList(null);
    }
  }, [removedSchoolsList, removedClassesList]);

  useEffect(() => {
    const schoolItemsList = schoolsList?.length
      ? schoolsList?.map((each) => each.uuid)
      : [];

    const body = {
      schools: schoolItemsList,
    };

    schoolsList?.length && dispatch(getClassbasedonSchool({ token, body }));

    setFinalReportsObj((prevState) => ({
      ...prevState,
      school_uuids: schoolItemsList,
    }));
  }, [schoolsList]);

  useEffect(() => {
    const classItemsList = classesList?.length
      ? classesList?.map((each) => each.uuid)
      : [];

    setFinalReportsObj((prevState) => ({
      ...prevState,
      class_name: classItemsList,
    }));
  }, [classesList]);

  useEffect(() => {
    dispatch(setReportFilterDataObject(finalReportsObj));

    if (
      (runReportButtonClicked &&
        finalReportsObj?.school_uuids?.length > 0 &&
        finalReportsObj?.class_name?.length > 0) ||
      (initialCall &&
        finalReportsObj?.school_uuids?.length > 0 &&
        finalReportsObj?.class_name?.length > 0)
    ) {
      if (location?.pathname?.includes("StudentReportsTableData")) {
        console.log(
          "hellooooooooooooooooooooooooooo StudentReportsTableData",
          runReportButtonClicked,
          initialCall
        );

        const finalObj = {
          schools: finalReportsObj?.school_uuids,
          classes: finalReportsObj?.class_name,
          search: finalReportsObj?.search,
          gender: finalReportsObj?.gender,
        };

        dispatch(getStudentsListForReportsApiCall({ finalObj, token }));
      } else if (location?.pathname?.includes("FitnessGramOverviewReport")) {
        const finalObj = {
          school_uuids: finalReportsObj?.school_uuids,
          class_uuid: finalReportsObj?.class_name,
          grade: finalReportsObj?.grade,
          gender: finalReportsObj?.gender,
          start_date: finalReportsObj?.start_date,
          end_date: finalReportsObj?.end_date,
        };

        console.log(
          "hellooooooooooooooooooooooooooo FitnessGramOverviewReport",
          runReportButtonClicked,
          initialCall
        );

        dispatch(getOverviewReportSummaryByClassApiCall({ finalObj, token }));
      }

      setInitialCall(false);

      dispatch(setRunReportButtonClicked(false));
    }
  }, [finalReportsObj, runReportButtonClicked, initialCall]);

  // useEffect(() => {

  //   const finalObj = {

  //     schools: finalReportsObj?.school_uuids,
  //     classes: finalReportsObj?.class_name,
  //     search: finalReportsObj?.search,
  //     gender: finalReportsObj?.gender

  //   }

  //   console.log(finalObj, "finalObjfinalObjfinalObj")

  //   dispatch(getStudentsListForReportsApiCall({finalObj, token}))

  // }, [runReportClicked])

  return (
    <>
      <Modal
        // finalFocusRef={finalRef}
        isOpen={isReportFilterClicked}
        onClose={() => {
          setIsReportFilterClicked(false);
          setRunReportClicked(false);

          dispatch(setRunReportButtonClicked(false));
          onClose;
        }}
        borderRadius={4}
        size="lg" 
      >
        <ModalOverlay />
        <ModalContent position="absolute" right={0} top={5} h={{base:"30rem", md:"auto"}} overflowY={"scroll"}>
          <ModalCloseButton mt={3} />
          <ModalBody p="5">
            <Text
              fontFamily={"body"}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight={"bold"}
              color="#1890ff"
            >
              Report Filters
            </Text>

            <Flex>
              <Spacer />
            </Flex>
            <Stack spacing="2" marginTop="2rem">
              <Box marginBottom="1rem">
                <Text>SCHOOL YEAR</Text>
                <Select
                  placeholder="Select Below"
                  backgroundColor="#F5F9FF"
                  borderColor="gray"
                  name="schoolYear"
                  onChange={handlechange}
                  value={data?.schoolYear}
                >
                  <option value={`${year - 2} - ${year - 1}`}>
                    {year - 2} - {year - 1}
                  </option>
                  <option value={`${year - 1} - ${year}`}>
                    {year - 1} - {year}
                  </option>
                  <option value={`${year} - ${year + 1}`}>
                    {year} - {year + 1}
                  </option>
                </Select>
              </Box>

              {isViewMoreButtonClicked && (
                <>
                  <Box marginBottom="1rem">
                    <Text>SCHOOL </Text>

                    <Multiselect
                      onRemove={handleSelectedRemoveSchools}
                      onSelect={handleSelectedSchools}
                      options={schools}
                      displayValue="school_name"
                      labelledBy="Select"
                      selectedValues={
                        initialRendering ? schools?.slice(0, 1) : null
                      }
                    />
                  </Box>

                  <Box marginBottom="1rem">
                    <Text>CLASS </Text>

                    <Multiselect
                      onRemove={handleSelectedRemoveClasses}
                      onSelect={handleSelectedClasses}
                      options={classes}
                      displayValue="class_name"
                      labelledBy="Select"
                      selectedValues={
                        classInitialRendering ? classes?.slice(0, 1) : null
                      }
                    />
                  </Box>
                </>
              )}

              <Box>
                <Text>SELECT ASSESSMENTS</Text>
              </Box>
              <Flex flexGrow={"1"} flexWrap={{base: "wrap", md:"nowrap"}} gap={3} justifyContent={{base:"space-between", md:"flex-start"}} fontFamily={'body'}
            fontSize={{ base: 'sm', md: 'md', lg: 'sm' }}>
                <Box onClick={() => handleAssesments("last30Days")}>
                  <Button
                    backgroundColor="white"
                    px="4"
                    py="4"
                    borderRadius="md"
                    border={
                      assessments["last30Days"]
                        ? "1px solid  #0081C8"
                        : "1px solid rgb(134, 133, 133)"
                    }
                    marginRight="3"
                    bgColor={assessments["last30Days"] ? "#0081C8" : ""}
                    color={assessments["last30Days"] ? "white" : ""}
                  >
                    Last 30 Days
                  </Button>
                </Box>
                <Box onClick={() => handleAssesments("last3Months")}>
                  <Button
                    backgroundColor="white"
                    px="4"
                    py="4"
                    borderRadius="md"
                    border={
                      assessments["last3Months"]
                        ? "1px solid  #0081C8"
                        : "1px solid rgb(134, 133, 133)"
                    }
                    marginRight="3"
                    bgColor={assessments["last3Months"] ? "#0081C8" : ""}
                    color={assessments["last3Months"] ? "white" : ""}
                  >
                    Last 3 months
                  </Button>
                </Box>
                <Box onClick={() => handleAssesments("last6Months")}>
                  <Button
                    backgroundColor="white"
                    px="4"
                    py="4"
                    borderRadius="md"
                    border={
                      assessments["last6Months"]
                        ? "1px solid  #0081C8"
                        : "1px solid rgb(134, 133, 133)"
                    }
                    marginRight="3"
                    bgColor={assessments["last6Months"] ? "#0081C8" : ""}
                    color={assessments["last6Months"] ? "white" : ""}
                  >
                    Last 6 months
                  </Button>
                </Box>

                <Box display={{base:"block", md:"none", lg:"none"}}  onClick={() => handleAssesments("thisYear")}>
                  <Button
                    backgroundColor="white"
                    px="7"
                    py="4" 
                    borderRadius="md"
                    border={
                      assessments["thisYear"]
                        ? "1px solid  #0081C8"
                        : "1px solid rgb(134, 133, 133)"
                    }
                    marginRight="3"
                    bgColor={assessments["thisYear"] ? "#0081C8" : ""}
                    color={assessments["thisYear"] ? "white" : ""}
                  >
                    {year - 1}-{year}
                  </Button>
                </Box>


              </Flex>

              <Flex display={{base:"none", md:"block", lg:"block"}}>
                <Box onClick={() => handleAssesments("thisYear")}>
                  <Button
                    backgroundColor="white"
                    px="6"
                    py="4"
                    borderRadius="md"
                    border={
                      assessments["thisYear"]
                        ? "1px solid  #0081C8"
                        : "1px solid rgb(134, 133, 133)"
                    }
                    marginRight="3"
                    bgColor={assessments["thisYear"] ? "#0081C8" : ""}
                    color={assessments["thisYear"] ? "white" : ""}
                  >
                    {year - 1}-{year}
                  </Button>
                </Box>
              </Flex>
              <Spacer />

              {isViewMoreButtonClicked && (
                <>
                  <Box marginBottom="1rem">
                    <Text>TEST TYPE </Text>
                    <Select
                      placeholder="Select Below"
                      backgroundColor="#F5F9FF"
                      borderColor="gray"
                    >
                      <option value="option1">Pre Test</option>
                      <option value="option2">Post Test</option>
                      <option value="option3">Other</option>
                    </Select>
                  </Box>
                </>
              )}

              <Box>
                <Text>REPORT OPTIONS</Text>
                <Flex justifyContent={"flex-start"} alignItems={"center"}>
                  <Box>
                    <Text marginTop="1" marginRight="2">
                      PRINT BODY COMPOSITION
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    onChange={(prevState) => {
                      setData((prevState) => ({
                        ...data,
                        printComposition: !prevState["printComposition"],
                      }));
                    }}
                  >
                    <Checkbox isChecked={data["printComposition"]} />
                  </Box>
                </Flex>
              </Box>

              {isViewMoreButtonClicked && (
                <Box>
                  <Text>REPORT OUTPUT</Text>

                  <Flex gap={8} alignItems={"center"}>
                    <Button border="1px">View</Button>
                    <Button border="1px">Email</Button>
                    <Button border="1px">Schedule</Button>
                  </Flex>
                </Box>
              )}

              <Box onClick={handleView}>
                <Text
                  cursor={"pointer"}
                  textDecoration={"underline"}
                  color={"#3FA1D6"}
                >
                  {isViewMoreButtonClicked ? "Show Less" : "View More"}
                </Text>
              </Box>

              <Center>
                <ButtonGroup gap="4">
                  <Link to="">
                    <Button
                      onClick={onClose}
                      backgroundColor="#EEEEEE"
                      borderRadius="2xl"
                      color="black"
                      width="7rem"
                    >
                      Reset
                    </Button>
                  </Link>
                  <Button
                    backgroundColor="#1890ff"
                    color="white"
                    borderRadius="3xl"
                    onClick={() => {
                      dispatch(setRunReportButtonClicked(true));
                      setRunReportClicked(true);

                      setIsReportFilterClicked(false);
                    }}
                  >
                    Run Report
                  </Button>
                </ButtonGroup>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReportFilter;

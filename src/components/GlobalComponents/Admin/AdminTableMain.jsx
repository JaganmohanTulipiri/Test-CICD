import React, { useState, useEffect } from "react";
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
  Divider,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  GridItem,
  Select,
  Button,
  Box,
  Text,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { useToken } from "@chakra-ui/react";
import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import MultiSelect from "multiselect-react-dropdown";

import WarningPop from "../Popups/WarningPop";
import ClipBoard from "../Popups/ClipBoardPop";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fgStoreStudentData,
  getClassesList,
  getClassListByEvent,
  getEventDataById,
  getEventsList,
  getEventStudentList,
  getFgEventsList,
  setEventStudentList,
  setResponse,
  setSelectedEvent,
  setStoreDataResponse,
} from "../../../features/teacher/teacherSlice";
import { useLocation } from "react-router-dom";
import SuccessModal from "../../SuccessModal";
import SetExemptionPop from "./SetExemptionModal";

const AdminTableMain = (props) => {
  const { setType, type } = props;
  // console.log(event.event_struct, "from skel");

  // const test_items = event?.event_struct?.map((object) => object.test_items);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  const TEST_ITEMS_NAME = {
    "20M PACER": "20M_PACER",
    "15M PACER": "15M_PACER",
    "ONE-MILE RUN": "ONE_MILE_RUN",
    "ONE-MILE WALK": "ONE_MILE_WALK",
    HEART: "HEART",

    HEIGHT: "HEIGHT",
    WEIGHT: "WEIGHT",
    "PERCENT BODY FAT": "PERCENT_BODY_FAT",
    "ABDOMINAL SKIN FOLD": "ABDOMINAL_SKIN_FOLD",
    "CALF SKIN FOLD": "CALF_SKIN_FOLD",
    "TRICEP SKIN FOLD": "TRICEP_SKIN_FOLD",

    "CURL UP": "CURL_UP",
    "TRUNK LIFT": "TRUNK_LIFT",
    "PUSH-UP": "PUSH_UP",
    "FLEXED ARM HANG": "FLEXED_ARM_HANG",
    "MODIFIED PULL-UP": "MODIFIED_PULL_UP",

    "SIT AND REACH RIGHT": "SIT_AND_REACH_RIGHT",
    "SIT AND REACH LEFT": "SIT_AND_REACH_LEFT",
    "SHOULDER STRETCH LEFT": "SHOULDER_STRETCH_LEFT",
    "SHOULDER STRETCH RIGHT": "SHOULDER_STRETCH_RIGHT",

    "BONE-STRENGTHENING ACTIVITY": "BONE_STRENGTHENING_ACTIVITY",
    "AEROBIC ACTIVITY": "AEROBIC_ACTIVITY",
    "MUSCLE-STRENGTHENING ACTIVITY": "MUSCLE_STRENGTHENING_ACTIVITY",
  };

  // const eventStudentList=useSelector((state)=>state?.teacher?.eventStudentList)

  function tableResizing() {
    const createResizableTable = function (table) {
      const cols = table.querySelectorAll("th");
      const updateTableWidth = () => {
        table.style.width =
          [].reduce.call(cols, (sum, col) => {
            sum + parseInt(col.style.width), 5;
          }) + "px";
      };
      [].forEach.call(cols, function (col) {
        // Add a resizer element to the column
        const resizer = document.createElement("div");
        resizer.classList.add("resizer");

        // Set the height
        resizer.style.height = `${table.offsetHeight}px`;

        col.appendChild(resizer);

        createResizableColumn(col, resizer, updateTableWidth);
      });
      updateTableWidth();
    };

    const createResizableColumn = function (col, resizer, updateTableWidth) {
      let x = 0;
      let w = parseInt(window.getComputedStyle(col).width, 10);

      col.style.width = `${w}px`;

      const mouseDownHandler = function (e) {
        x = e.clientX;

        const styles = window.getComputedStyle(col);
        w = parseInt(styles.width, 10);

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);

        resizer.classList.add("resizing");
      };

      const mouseMoveHandler = function (e) {
        const dx = e.clientX - x;
        col.style.width = `${w + dx}px`;

        updateTableWidth();
      };

      const mouseUpHandler = function () {
        resizer.classList.remove("resizing");
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      };

      resizer.addEventListener("mousedown", mouseDownHandler);
    };

    createResizableTable(document.getElementById("resizeMe"));
  }

  const classesList = useSelector((state) => state?.teacher?.classesByEvent);

  const token = useSelector((state) => state?.profile?.token);

  const userId = useSelector((state) => state?.profile?.userId);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const eventsList = useSelector((state) => state?.teacher?.fgEventsList);
  const eventStudentList = useSelector(
    (state) => state?.teacher?.eventStudentList
  );

  const eventDataById = useSelector((state) => state?.teacher?.eventDataById);

  console.log("eventDataById", eventDataById);

  const responseCode = useSelector(
    (state) => state?.teacher?.storeDataResponse
  );

  const [edit, setEdit] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // const [type, setType] = useState("");

  const [selectedClasses, setSelectedClasses] = useState([]);
  const [test_items, setItems] = useState([]);

  const [dataToSend, setDataToSend] = useState([]);

  const [tableData, setTableData] = useState(eventStudentList);

  console.log(tableData, "tableData");

  const [eventId, setEventId] = useState(params?.eventId);

  console.log(params.eventId, eventId, "frim 198 ");

  const [classes, setClasses] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [userData, setUserData] = useState([]);

  const clickToOpen = (item) => {
    console.log(item, "item from 197");
    setUserData(item);
    setOpenModal(true);
  };

  const handleSelectClasses = (e) => {
    setSelectedClasses((prevState) => [...prevState, e[0].uuid]);
  };

  const handleRemoveClasses = (item) => {
    let modifiedClassList = selectedClasses.filter((clas) => clas != item.uuid);
    setSelectedClasses(modifiedClassList);
  };

  const TEST_PATTERN = {
    "PUSH-UP": "^(?:[1-9]|[1-6][0-9]|7[0-5])$",

    "FLEXED ARM HANG": "^(?:[0-9]{1,2}|[1-9][0-9]{1,2}|999)$",

    "TRUNK LIFT": "^(?:[0-9]|1[0-2])$",

    "CURL-UP": "^(?:[1-9]|[1-6][0-9]|7[0-5])$",

    "MODIFIED PULL-UP": "^(?:[0-9]{1,2}|[1-9][0-4][0-9]|150)$",

    "20M PACER": "^(?:[1-9]|[1-9][0-9]|1[0-9]{2}|2[0-3][0-9]|24[0-7])$",

    "15M PACER": "^(?:[1-9]|[1-9][0-9]|[12][0-9]{2}|3[0-1][0-9]|32[0-3])$",

    "ONE-MILE RUN": "^(?:0[3-9]|[1-5][0-9]):[0-5][0-9]$",

    "ONE-MILE WALK": "^(?:0[3-9]|[1-5][0-9]):[0-5][0-9]$",

    HEART: "^(?:3[0-9]|[4-9][0-9]|1[0-9]{2}|2[0-4][0-9]|250)$",

    HEIGHT: "",

    WEIGHT: "^(?:[2-9][0-9]|[1-3][0-9]{2}|4[0-4][0-9]|450)$",

    "ABDOMINAL SKIN FOLD": "^(?:[1-9]|[1-9][0-9]|99.5)$",

    "CALF SKIN FOLD": "^(?:[1-9]|[1-9][0-9]|99.5)$",

    "TRICEP SKIN FOLD": "^(?:[1-9]|[1-9][0-9]|99.5)$",

    "PERCENT BODY FAT": "^(?:[1-9]|[1-9][0-9])$",

    "SHOULDER STRETCH LEFT": "^(?:[0-9]|1[0-2])$",

    "SHOULDER STRETCH RIGHT": "^(?:[0-9]|1[0-2])$",

    "AEROBIC ACTIVITY": "^[0-7]$",

    "MUSCLE-STRENGTHENING ACTIVITY": "^[0-7]$",

    "BONE-STRENGTHENING ACTIVITY": "^[0-7]$",
  };

  useEffect(() => {
    dispatch(getEventDataById({ eventId, token }));
  }, [eventId, selectedClasses]);

  useEffect(() => {
    setItems(eventDataById?.test_items);
  }, [eventDataById]);

  useEffect(() => {
    tableData?.length && tableResizing();
  }, [tableData?.length]);

  function handleDisableClick() {
    setEdit(false);
    navigate(`/role/${selectedRole}`);
  }

  useEffect(() => {
    const _dataToSend = [];

    console.log("Table", tableData);

    if (tableData.length) {
      tableData.map((item, index) => {
        // const testArr = Object.keys(item?.event_struct).map(key =>({[key]: item?.event_struct[key],is_exempted:false,exemption_reason:""}))

        let _data = {
          user_uuid: item?.uuid,
          event_uuid: params?.eventId?.length
            ? params?.eventId
            : eventDataById?.uuid,
          submitted_by: userId,
          submitter_role: selectedRole,
          // event_struct: testArr || null,
          event_fields: item.event_struct || null,
        };
        _dataToSend.push(_data);
        console.log("item?.event_struct", item?.event_struct);
      });
    }

    setDataToSend(_dataToSend);
  }, [tableData.length]);

  console.log("_dataToSend", dataToSend);

  const handleOnChange = (value, key, name) => {
    //If user_uuid === key then fill the value of event_field:
    // dataToSend.key.event_fields = {... dataToSend.key.event_fields, [name]: value}

    const dummyData = dataToSend.slice();
    dummyData.forEach((data, i) => {
      if (data.user_uuid === key) {
        data.event_fields = { ...data.event_fields, [name]: value };
      }
    });
    setDataToSend(dummyData);
    console.log("_datatoSend_______________>", dataToSend);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let studentsArr = [];
    let finalObject = { student_data: dataToSend };

    console.log(studentsArr, "iammmm ");

    console.log(finalObject, "finallyy");

    dispatch(fgStoreStudentData({ body: finalObject, token }));
  };

  useEffect(() => {
    classesList?.length && setClasses(classesList);
    console.log(classesList, "classess");
  }, [classesList?.length]);

  useEffect(() => {
    !classesList?.length && console.log(classesList, "classess");

    dispatch(getClassListByEvent({ token, eventId }));
    return () => {
      dispatch(setEventStudentList([]));
      setItems([]);
      // dispatch(setSelectedEvent());
    };
  }, [eventId]);

  useEffect(() => {
    setTableData(eventStudentList);
  }, [eventStudentList]);

  useEffect(() => {
    dispatch(setStoreDataResponse(""));
  }, []);


  console.log(!type.length,"from 361")
  useEffect(() => {
    if (type.length) {
		console.log(type.length,"from 364")
      let body = {
        accesser_uuid: userId,
        accesser_role: selectedRole,
      };
      dispatch(getEventStudentList({ token, body, eventId }));
    }
  }, [type, eventId]);

  useEffect(() => {
    let body = {
      accesser_uuid: userId,
      accesser_role: selectedRole,
      classes: selectedClasses,
    };
    dispatch(getEventStudentList({ token, body, eventId }));
  }, [selectedClasses, eventId]);

  useEffect(() => {
    dispatch(getFgEventsList({ token }));
  }, []);

  console.log(tableData?.length, eventsList, "table length");

  return (
    <>
      <Box>
        <SimpleGrid
          columns={{ md: 2, lg: 3 }}
          rowGap={6}
          columnGap={6}
          mb="12"
          mt="5"
          ml={{ base: "-1rem", md: 0, lg: 0 }}
        >
          <Box w="100%" h="10">
            <Text
              className="text-[#808080] text-sm mb-2"
              fontSize={{ base: "sm", md: "md", lg: "sm" }}
              whiteSpace={{ base: "nowrap", md: "flex", lg: "flex" }}
              mt={{ base: "2px", md: "0", lg: "0" }}
            >
              Select the test event below
            </Text>
            <div
              onClick={(e) => {
                setEventId(e.target.value);
              }}
            >
              <Select
                placeholder="Select option"
                width={[
                  "16rem", // 0-30em
                  "60%", // 30em-48em
                  "65%", // 48em-62em
                  "100%", // 62em+
                ]}
              >
                {eventsList?.length &&
                  eventsList?.map((item, i) => {
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

                {/* {eventsList.length &&
                  eventsList.map((item, index) => {
                    return <option value={item.uuid}>{item.event_name}</option>;
                  })} */}
              </Select>
            </div>
          </Box>
          <Box w={["100%,50%,80%,100%"]} h="10">
            <Text
              className="text-[#808080] text-sm mb-2"
              fontSize={{ base: "sm", md: "md", lg: "sm" }}
              whiteSpace={{ base: "nowrap", md: "flex", lg: "flex" }}
              mt={{ base: "10px", md: "0", lg: "0" }}
            >
              Select the type of Entry
            </Text>
            <div
              onClick={(e) => {
                console.log(e.target.value);
                setType(e.target.value);
              }}
            >
              <Select
                placeholder="Select option"
                width={[
                  "16rem", // 0-30em
                  "60%", // 30em-48em
                  "65%", // 48em-62em
                  "100%", // 62em+
                ]}
                textStyle={"textHead"}
              >
                <option value="By Class">Enter by Class</option>
                <option value="By Student" selected={params?.eventId}>
                  Enter by Student
                </option>
              </Select>
            </div>
          </Box>

          {type == "By Class" ? (
            <>
              {" "}
              <Box w="100%" h="10">
                <Text
                  className="text-[#808080] text-sm mb-2"
                  fontSize={{ base: "sm", md: "md", lg: "sm" }}
                  whiteSpace={{ base: "nowrap", md: "flex", lg: "flex" }}
                  mt={{ base: "15px", md: "0", lg: "0" }}
                >
                  Select the type of Entry
                </Text>
                <Box
                  width={[
                    "16rem", // 0-30em
                    "60%", // 30em-48em
                    "65%", // 48em-62em
                    "100%", // 62em+
                  ]}
                >
                  <MultiSelect
                    style={{ width: "50%" }}
                    onRemove={(selectedList, item) => {
                      handleRemoveClasses(item);
                    }}
                    onSelect={(event) => {
                      handleSelectClasses(event);
                    }}
                    options={classes}
                    displayValue="class_name"
                  />
                  {/* <Select placeholder="Select option">
                    {classes.length &&
                      classes.map((item, index) => {
                        return (
                          <option value={item.uuid}>{item.class_name}</option>
                        );
                      })}
                  </Select> */}
                </Box>
              </Box>
              {selectedClasses.length ? (
                <Box w="100%" h="10" mt={7}>
                  <Input
                    placeholder="Search Student Name"
                    width={[
                      "16rem", // 0-30em
                      "60%", // 30em-48em
                      "65%", // 48em-62em
                      "100%", // 62em+
                    ]}
                    mt={{ base: "10px", md: "0", lg: "0" }}
                  />
                </Box>
              ) : null}
            </>
          ) : type == "By Student" || params?.eventId ? (
            <Box w="100%" h="10" mt={7}>
              <Input
                placeholder="Search Student Name"
                width={[
                  "16rem", // 0-30em
                  "60%", // 30em-48em
                  "65%", // 48em-62em
                  "100%", // 62em+
                ]}
                mt={{ base: "10px", md: "0", lg: "0" }}
              />
            </Box>
          ) : null}
        </SimpleGrid>
      </Box>
      {!tableData?.length && eventId?.length ? (
        <Text fontSize="md" fontWeight="bold" textAlign="center">
          NO STUDENTS FOUND FOR THE SELECTED EVENT
        </Text>
      ) : null}

      {tableData && tableData?.length ? (
        <form
          id="enterData"
          className="w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <table id="resizeMe" className="table-1  overflow-auto">
            <thead>
              <tr>
                <th className="">Student Name</th>
                {test_items?.map((columnName) => (
                  <>
                    <th className="">{columnName}</th>
                  </>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData?.map((item, studentIndex) => (
                <tr key={item.uuid}>
                  <td>
                    <Box
                      className="flex items-center "
                      onClick={() => clickToOpen(item)}
                    >
                      <FaUserAlt fill="green" size={20} className="mr-2" />
                      <Text>{item.first_name}</Text>
                    </Box>
                  </td>
                  <input
                    type="hidden"
                    name="studentId"
                    value={item?.uuid}
                    className=" border-r-[#AFAFAF] border-b-[#AFAFAF] border border-[#C6C7C7] w-full rounded-md py-1"
                  />
                  {test_items?.map((test_item, testItemIndex) => {
                    return (
                      <td>
                        {[
                          "SHOULDER STRETCH LEFT",
                          "SHOULDER STRETCH RIGHT",
                        ].includes(test_item) ? (
                          <select
                            disabled={!edit}
                            name={TEST_ITEMS_NAME[test_item]}
                            onChange={(e) =>
                              handleOnChange(
                                e.target.value,
                                item.uuid,
                                TEST_ITEMS_NAME[test_item]
                              )
                            }
                          >
                            <option value="">select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        ) : (
                          <input
                            type="text"
                            name={TEST_ITEMS_NAME[test_item]}
                            disabled={!edit}
                            pattern={TEST_PATTERN[test_item]}
                            // onBlur={()=>setFocused}
                            onChange={(e) =>
                              handleOnChange(
                                e.target.value,
                                item.uuid,
                                TEST_ITEMS_NAME[test_item]
                              )
                            }
                            // defaultValue={
                            // 	item?.event_struct
                            // 		? item.event_struct[TEST_ITEMS_NAME[test_item]]
                            // 		: ""
                            // }
                            value={
                              dataToSend[studentIndex]?.event_fields?.[
                                TEST_ITEMS_NAME[test_item]
                              ]
                            }
                            className=" border border-[#C6C7C7] w-full focus:outline-none  rounded-md py-1"
                          />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-10 gap-3">
            <Button
              backgroundColor="#F3F3F3"
              roundedLeft="10rem"
              roundedRight="10rem"
              color="#808080"
              onClick={handleDisableClick}
            >
              Cancel{" "}
            </Button>

            {edit ? (
              <>
                {" "}
                <Button
                  type="submit"
                  height="36px"
                  width="96px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  borderRadius="18px"
                  fontSize="14px"
                  fontWeight="normal"
                  bg="green"
                  color="white"
                  fontFamily="poppins"
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Box
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  <Button
                    type="button"
                    height="36px"
                    width="96px"
                    lineHeight="1.2"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    borderRadius="18px"
                    fontSize="14px"
                    fontWeight="normal"
                    bg="green"
                    color="white"
                    fontFamily="poppins"
                  >
                    Edit
                  </Button>
                </Box>
              </>
            )}
          </div>
        </form>
      ) : null}
      {responseCode ? (
        <ClipBoard
          setShowPopup={setShowPopup}
          params={params}
          setEdit={setEdit}
        />
      ) : null}
      {userData && (
        <SetExemptionPop
          openModal={openModal}
          setOpenModal={setOpenModal}
          userData={userData}
          testItems={test_items}
          testItemObj={TEST_ITEMS_NAME}
          setDataToSend={setDataToSend}
          dataToSend={dataToSend}
        />
      )}
    </>
  );
};

export default AdminTableMain;

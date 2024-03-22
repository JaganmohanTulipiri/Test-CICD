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
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { useToken } from "@chakra-ui/react";
import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import MultiSelect from "multiselect-react-dropdown";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fgStoreStudentData,
  getClassesList,
  getEventDataById,
  getEventsList,
  getEventStudentList,
  setEventStudentList,
} from "../../../features/teacher/teacherSlice";
import { useLocation } from "react-router-dom";

const AdminTableMain = (props) => {
  const { event } = props;

  console.log(event, "from ");

  // console.log(event.event_struct, "from skel");

  const test_items = event?.event_struct?.map((object) => object.test_items);

  console.log(test_items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const studentData = location?.state?.studentData;

  console.log(studentData, "iam studentData");

  const test_items_name = {
    "TRUNK LIFT": "TRUNK_LIFT",
    "TRUNK RIGHT": "TRUNK_RIGHT",
    "ONE-MILE RUN": "ONE_MILE_RUN",
    "PERCENT BODY FAT": "PERCENT_BODY_FAT",
    "SIT AND REACH RIGHT": "SIT_AND_REACH_RIGHT",
    "BONE-STRENGTHENING ACTIVITY": "BONE_STRENGTHENING_ACTIVITY",
    "15M PACER": "15M_PACER",
    "SHOULDER STRETCH LEFT": "SHOULDER_STRETCH_LEFT",
    "PUSH-UP": "PUSH_UP",
    "20M PACER": "20M PACER",
    "MUSCLE-STRENGTHENING ACTIVITY": "MUSCLE_STRENGTHENING_ACTIVITY",
  };

  // const eventStudentList=useSelector((state)=>state?.teacher?.eventStudentList)

  const tableColumn = [
    "Student Name",
    "Height",
    "Weight",
    "20M Pacer",
    "Percent Body Fat",
    "Abdominal Skin Fold",
    "Calf Skin Fold",
    "Tricep Skin Fold",
    "Curl-Up",
    "Trunk Lift",
    "Sit and Reach Left",
    "Sit and Reach Right",
    "Aerobic Activity",
    "Muscle-Strength",
    "Bone-Strength",
  ];

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

  useEffect(() => {
    tableResizing();
  }, []);

  const bg = useToken("colors", "white.500");
  const [edit, setEdit] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [type, setType] = useState("");
  const [flag, setFlag] = useState(true);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [eventUuid, setEventUuid] = useState("");
  const eventsList = useSelector((state) => state?.teacher?.eventsList);

  const handleSelectClasses = (e) => {
    setSelectedClasses((prevState) => [...prevState, e[0].uuid]);
  };

  const handleRemoveClasses = (item) => {
    let modifiedClassList = selectedClasses.filter((clas) => clas != item.uuid);
    setSelectedClasses(modifiedClassList);
  };

  console.log(eventsList.uuid, "from selected evvent uuid");

  const eventStudentListByClass = () => {
    if (selectedClasses.length != 0) {
      const eventId = event?.uuid  ;

      let body = {
        accesser_uuid: userId,
        accesser_role: selectedRole,
        classes: selectedClasses,
      };
      dispatch(getEventStudentList({ token, body, eventId }));
    }
  };

  useEffect(() => {
    eventStudentListByClass();
  }, [selectedClasses]);

  const classesList = useSelector((state) => state?.teacher?.classes);

  const token = useSelector((state) => state?.profile?.token);

  const userId = useSelector((state) => state?.profile?.userId);

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  console.log(classesList, "class list frim sekeleton");

  const eventStudentList = useSelector(
    (state) => state?.teacher?.eventStudentList
  );

  // const test_items=eventStudentList.event_struct

  // console.log(test_items,"from 471")

  const [tableData, setTableData] = useState(eventStudentList);

  console.log(tableData, eventsList, "iam table data");

  function handleDisableClick() {
    setEdit(false);
  }

  const data = [
    {
      id: "1",
      sn: "Randi",
      height: "5ft",
      weight: "55lb",
    },
    {
      id: "2",
      sn: "Martin",
      height: "5ft",
      weight: "55lb",
    },
    {
      id: "3",
      sn: "Wick",
      height: "5ft",
      weight: "55lb",
    },
    {
      id: "4",
      sn: "Rambo",
      height: "5ft",
      weight: "55lb",
    },
    {
      id: "5",
      sn: "Patrick",
      height: "5ft",
      weight: "55lb",
    },
  ];

  const tableHead = [
    {
      id: "1",
      head: "Student Name",
    },
    {
      id: "2",
      head: "Height ",
    },
    {
      id: "3",
      head: "Weight",
    },
    {
      id: "4",
      head: "20M Pacer",
    },
    {
      id: "5",
      head: "Percent Body Fat",
    },
    {
      id: "6",
      head: "Abdominal Skin Fold",
    },
    {
      id: "7",
      head: "Curl-Up",
    },
    {
      id: "8",
      head: "Trunk-lift",
    },
    {
      id: "9",
      head: "Calf Skin Fold",
    },
    {
      id: "10",
      head: "Tricep Skin Fold",
    },
    {
      id: "11",
      head: "Sit and Reach Left",
    },
    {
      id: "12",
      head: "Sit and Reach Right",
    },
    {
      id: "13",
      head: "Aerobic Activity",
    },
    {
      id: "14",
      head: "Muscle-Strength ",
    },
    {
      id: "15",
      head: "Bone-Strength",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // const elements = [...e.target.children[0].children[1].children];

    const elements = [...e.target.elements];

    elements.forEach((element) => console.log(element.name, element.value));

    let studentsArr = [];
    let finalObject = { student_data: studentsArr };

    let studentObj = {};

    elements.forEach((element, i) => {
      if (element.name == "studentId" && i != 0) {
        studentsArr.push({
          user_uuid: element.value,
          event_uuid: event.uuid,
          submitted_by: userId,
          submitter_role: selectedRole,
          event_fields: studentObj,
        });
        studentObj = {};
      } else if (i != 0) {
        studentObj[element.name] = element.value;
      }
    });

    console.log(studentsArr, "iammmm ");

    console.log(finalObject, "finallyy");

    dispatch(fgStoreStudentData({ body: finalObject, token }));

    // let subArrays = []
    // for (let i=0;i<=elements.length;i+16){
    //     let subArr = elements.slice(i,i+16)
    //   subArrays.push(subArr)
    // }
    // console.log(subArrays,"lllllllllll")

    // console.log(elements, "iam inside form submit");
  };

  useEffect(() => {
    !classesList.length && dispatch(getClassesList());
  }, []);

  useEffect(() => {
    eventStudentList?.length && setTableData(eventStudentList);
  }, [eventStudentList?.length]);

  useEffect(() => {
    return () => {
      dispatch(setEventStudentList([]));
    };
  }, []);

  return (
    <>
      <main>
        <Grid templateColumns="repeat(3, 1fr)" gap={12} mb="12" mt="5">
          <GridItem w="100%" h="10">
            <p className="text-[#808080] text-sm mb-2">
              Select the test event below
            </p>
            <div
              onClick={(e) => {
                console.log(e.target.value);
              }}
            >
              <Select placeholder="Select option">
                {eventsList.length &&
                  eventsList.map((item, i) => {
                    return (
                      <option
                        key={i}
                        value={item.uuid}
                        selected={item?.uuid == event?.uuid}
                        onClick={() => setEventUuid(item.uuid)}
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
          </GridItem>
          <GridItem w="100%" h="10">
            <p className="text-[#808080] text-sm mb-2">
              Select the type of Entry
            </p>
            <div
              onClick={(e) => {
                console.log(e.target.value);
                setType(e.target.value);
              }}
            >
              <Select placeholder="Select option">
                <option value="By Class">Enter by Class</option>
                <option value="By Student">Enter by Student</option>
              </Select>
            </div>
          </GridItem>
          {type === "By Class" ? (
            <>
              {" "}
              <GridItem w="100%" h="10">
                <p className="text-[#808080] text-sm mb-2">
                  Select the type of Entry
                </p>
                <div>
                  <MultiSelect
                    onRemove={(selectedList, item) => {
                      handleRemoveClasses(item);
                    }}
                    onSelect={(event) => {
                      handleSelectClasses(event);
                    }}
                    options={classesList}
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
                </div>
              </GridItem>
              <GridItem w="100%" h="10" mt={7}>
                <Input placeholder="Search Student Name" w={"20rem"} />
              </GridItem>
            </>
          ) : (
            <>
              {" "}
              <GridItem w="100%" h="10" mt={7}>
                <Input placeholder="Search Student Name" w={"20rem"} />
              </GridItem>
            </>
          )}
        </Grid>
      </main>
      <div className="  ">
        <div className="">
          <form id="enterData" onSubmit={(e) => handleSubmit(e)}>
            <table id="resizeMe" className="table-1">
              <thead>
                <tr>
                  <th
                    style={{ width: "100px", minWidth: "150px" }}
                    className=""
                  >
                    Student Name
                  </th>
                  {test_items?.map((columnName) => (
                    <>
                      <th className="">{columnName}</th>
                    </>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData?.map((item, index) => (
                  <tr
                    key={item.uuid}

                    // onChange={(event) => handleChange(event, item)}
                  >
                    <td>
                      <div className="flex items-center ">
                        <FaUserAlt fill="green" size={20} className="mr-2" />
                        <p>{item.first_name}</p>
                      </div>
                    </td>
                    <input
                      type="hidden"
                      name="studentId"
                      value={item?.uuid}
                      className=" border-r-[#AFAFAF] border-b-[#AFAFAF] border border-[#C6C7C7] w-full rounded-md py-1"
                    />
                    {test_items?.map((test_item, index) => {
                      return (
                        <>
                          <td>
                            <input
                              type="text"
                              name={test_items_name[test_item]}
                              disabled={edit ? false : true}
                              defaultValue={
                                item?.event_struct &&
                                item.event_struct[test_items_name[test_item]]
                              }
                              className="border-r-[#AFAFAF] border-b-[#AFAFAF] border border-[#C6C7C7] w-full  rounded-md py-1"
                            />
                          </td>
                        </>
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
              {/* <Button type="button">
  Cancel
</Button> */}

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
        </div>
      </div>
    </>
  );
};

export default AdminTableMain;

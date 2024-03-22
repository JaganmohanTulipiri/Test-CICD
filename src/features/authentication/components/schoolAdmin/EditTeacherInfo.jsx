import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Input,
  Text,
  Divider,
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
  RadioGroup,
  Stack,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAddCircle, IoMdAddCircle } from "react-icons/io";
import successTick from "../../../../assets/customIcons/success-tick.svg";

import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCreateSchoolAdmin,
  getEditTeacher,
  getGetTeacherById,
  setAddResCode,
  setGetTeacherById,
  setResponseCode,
} from "./schoolAdminSlice";
import AddSuccessModal from "./AddSuccessModal";
import PositiveButton from "../../../../components/PositiveButton";
// import ManageUSersView from './ManageUsersView';

const TabView = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const onTabclick = (index) => {
    setTabIndex(index);
  };
  return (
    <>
      <Tabs variant="unstyled" index={tabIndex} onChange={onTabclick}>
        <TabList>
          <Tab
            _selected={{
              color: "white",
              bg: "blue.500",
              borderLeftRadius: "15",
            }}
          >
            BASIC USER INFORMATION
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "blue.500",
              borderRightRadius: "15",
            }}
          >
            MANAGE USER"S ASSIGNMENTS
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <GreenLiteSkelton click={onTabclick} />
          </TabPanel>
          <TabPanel>
            <ManageUSersView />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

const GreenLiteSkelton = (prop) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const manageSchoolsData = useSelector(
    (state) => state?.schoolAdmin?.SchoolsForAdmin
  );

  const schoolId = manageSchoolsData[0]?.uuid;

  const userUUID = useSelector((state) => state?.profile?.user?.response?.uuid);
  const token = useSelector((state) => state?.profile?.token);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const GetTeacherByIdData = useSelector(
    (state) => state?.schoolAdmin?.GetTeacherById
  );
  const teacherId = GetTeacherByIdData?.uuid;
  console.log("teacherId================>", teacherId);

  const editResponse = useSelector((state) => state?.schoolAdmin?.EditTeacher);

  console.log("editResponse==============>", editResponse?.data?.message);
  const ResponseCode = useSelector((state) => state?.schoolAdmin?.ResponseCode);
  const AddResCode = useSelector((state) => state?.schoolAdmin?.AddResCode);

  useEffect(() => {
    dispatch(setResponseCode(null));
    dispatch(setAddResCode(null));
  }, []);
  
  const data = [
    {
      id: "1",
      head: "Teacher ID*:",
      placeholder: "",
      name: "teacher_id",
    },
    {

      
      id: "2",
      head: "First Name*:",
      placeholder: "",
      name: "first_name",
    },
    {
      id: "3",
      head: "Last Name*:",
      placeholder: "",
      name: "last_name",
    },
    {
      id: "4",
      head: "Middle initial:",
      placeholder: "",
      name: "middle_initial",
    },
    {
      id: "5",
      head: "Username*:",
      placeholder: "",
      name: "user_name",
    },
    {
      id: "6",
      head: "Email Address*:",
      placeholder: "",
      name: "email",
    },
    {
      id: "7",
      head: "Alternate Email Address 1:",
      placeholder: "",
      name: "email_1",
    },
    {
      id: "8",
      head: "Alternate Email Address 2:",
      placeholder: "",
      name: "email_2",
    },

    {
      id: "9",
      head: "Phone:",
      placeholder: "",
      name: "phone",
    },
    {
      id: "10",
      head: "Password*:",
      placeholder: "",
      name: "password",
    },
    {
      id: "11",
      head: "Re-enter Password*:",
      placeholder: "",
      name: "reEnterPassword",
    },

    {
      id: "12",
      head: "Role:",
      placeholder: "",
      name: "creater_role",
    },
  ];

  const [status, setStatus] = useState("1");

  const [inputs, setInputs] = useState({});

  // const validate = () => {
  // 	let errors = {};

  // 	const { teacher_id, first_name, last_name, user_name,password } = data;

  // 	if (!teacher_id || teacher_id.length === 0) {
  // 		errors.teacher_id = "*Required";
  // 	}

  //   if (!first_name || first_name.length === 0) {
  // 		errors.first_name = "*Required";
  // 	}

  //   if (!last_name || last_name.length === 0) {
  // 		errors.last_name = "*Required";
  // 	}

  //   if (!user_name || user_name.length === 0) {
  // 		errors.user_name = "*Required";
  // 	}

  // 	if (!password || password.length === 0) {
  // 		errors.password = "*Required";
  // 	}

  // 	return errors;
  // };

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);

    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setInputs({
      teacher_id: GetTeacherByIdData?.teacher_id,
      first_name: GetTeacherByIdData?.first_name,
      last_name: GetTeacherByIdData?.last_name,
      middle_initial: GetTeacherByIdData?.middle_initial,
      user_name: GetTeacherByIdData?.user_name,
      email: GetTeacherByIdData?.email,
      email_1: GetTeacherByIdData?.email_1,
      email_2: GetTeacherByIdData?.email_2,
      phone: GetTeacherByIdData?.phone,
      password: GetTeacherByIdData?.password,
      reEnterPassword: "",
    });
  }, [GetTeacherByIdData]);

  useEffect(() => {
    return () => {
      dispatch(setGetTeacherById({}));
    };
  }, []);

  const clickToSave = () => {
    // validate()

    const reqBody = {
      teacher_id: inputs?.teacher_id,
      first_name: inputs?.first_name,
      last_name: inputs?.last_name,
      middle_initial: inputs?.middle_initial,
      user_name: inputs?.user_name,
      email: inputs?.email,
      email_1: inputs?.email_1,
      email_2: inputs?.email_2,
      phone: inputs?.phone,
      password: inputs?.password,
      updated_by: userUUID,
      updater_role: selectedRole,
      schools: [schoolId],
      login_status: status === "1" ? true : false,
    };

    console.log("reqBody from edit teacher ===================>", reqBody);
    dispatch(getEditTeacher({ token, reqBody, teacherId }));
  };

  const clickToCancel = () => {
    navigate(`/role/${selectedRole}/GreenLiteElementary`);
  };

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt="4">
        {data.map((item, index) => {
          return (
            <>
              <GridItem w="100%" h="10">
                <Text>{item.head}</Text>
                {item.id === "12" ? (
                  <Select
                    isDisabled={true}
                    bg="#ecf4ff"
                    border={"none"}
                    rounded={"2xl"}
                    // placeholder='Select Role(s)'
                  >
                    <option value="Teacher">Teacher</option>
                    <option>School Admin</option>
                    <option>District Admin</option>
                  </Select>
                ) : (
                  <>
                    <Input
                      bg="#ECF4FF"
                      border={"none"}
                      rounded={"2xl"}
                      name={item?.name}
                      value={inputs[item?.name]}
                      onChange={handleChange}
                    />
                    <Flex></Flex>
                  </>
                )}
              </GridItem>
            </>
          );
        })}
      </Grid>

      <GridItem>
        <div className="mt-10">
          <Text className="mb-4">Login Status:</Text>
          <RadioGroup onChange={setStatus} value={status}>
            <Stack>
              <Radio value="1">Active</Radio>
              <Radio value="0">In Active</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </GridItem>

      <Flex justifyContent={"center"} mt="5" justify={"space-between"}>
        <Box className="mt-5 gap-2">
          <Button className="rounded-2xl gap-1" onClick={clickToCancel}>
            Cancel
          </Button>
          <Button
            className="bg-green text-white rounded-2xl "
            onClick={clickToSave}
          >
            Save
          </Button>
        </Box>
      </Flex>
      <Modal isOpen={ResponseCode === 200} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Flex
              direction="column"
              gap="6"
              marginTop="2rem"
              alignItems="center"
            >
              <Box boxSize="8">
                <img src={successTick} />
              </Box>
              <Text textStyle="h1" color="green" textAlign="center">
                User Updated Successfully
              </Text>
              <Box
                onClick={() => {
                  dispatch(setResponseCode(null));
                  dispatch(setAddResCode(null));
                  clickToCancel()
                }}
              >
                <PositiveButton text={"OK"} />
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={clickToClose}>
                Close
              </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const ManageUSersView = () => {
  return (
    <>
      <Text>
        This User is a District Administrator and has access to all schools and
        classes
      </Text>

      <div className="flex justify-between mt-6">
        <Flex fontWeight={"bold"} gap="3">
          <Text>School Administrator</Text>
        </Flex>
        <Flex gap="3">
          <Text textDecoration={"underline"}>Add School</Text>

          <IoMdAddCircle className="" fill="#0081c8" size={25} />
        </Flex>
      </div>
      <Divider mt="5" />
      <div className="mt-5">
        <Text className="mb-5">School</Text>
        <div className="flex justify-between mt-6 bg-[#ECF4FF] h-[3rem]">
          <div className="m-3">school name</div>
          {/* <RiDeleteBin6Line size={20} fill="#0081c8" className='m-4'/> */}
        </div>
      </div>
      {/* <div className='flex justify-between mt-6'>

        <Flex fontWeight={'bold'} gap='3' >
          <Text >Teacher</Text>
        </Flex>
        <Flex gap='3'>
          <Text textDecoration={'underline'}>Add Class</Text>

          <IoMdAddCircle className='' fill='#0081c8' size={25} />

        </Flex>
      </div>
      <Divider mt='5' /> */}
      {/* <div className='mt-5'>
        <Text className='mb-5'>School/Class</Text>
        <Select placeholder='Select option' border={'none'} bg='#'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </div> */}
      <Flex justifyContent={"center"} mt="5" justify={"space-between"}>
        <Box className="mt-5 gap-2">
          <Button className="rounded-2xl gap-1 ">Cancel</Button>
          <Button className="bg-green text-white rounded-2xl ">Save</Button>
        </Box>
      </Flex>
    </>
  );
};

const EditTeacherInfo = () => {
  return (
    <div>
      <Text fontWeight={"bold"} mb="3">
        Edit Teacher Information
      </Text>
      <TabView mt="10" />
    </div>
  );
};

export default EditTeacherInfo;
import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Input,
  Text,
  Divider,
  Flex,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  HStack,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import successTick from "../../../../assets/customIcons/success-tick.svg";
import AddTeacherPop from "./GreenLite/AddTeacherPop";
import { useDispatch, useSelector } from "react-redux";
import TeacherTable from "./TeacherTable";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AddAdminPop from "./AddAdminPop";
import {
  getClassbasedonSchool,
  getRemoveSchoolAdminFromSchool,
  getSchoolWithSchoolAdmin,
  getUpdateSchool,
  setAddResCode,
  setAddTeacherResCode,
  setResponseCode,
  setSchoolWithSchoolAdmin,
} from "./schoolAdminSlice";
import PositiveButton from "../../../../components/PositiveButton";
import {
  getUserData,
  setManageUser,
  setPreviousPath,
} from "../../../../store/slices/profileSlice";
import RemoveAdminSuccessModal from "./RemoveAdminSuccessModal";
import ErrorResponse from "../../../../components/GlobalComponents/ErrorResponse";

const AdminPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const params = useParams();
  const schoolId = params.schoolId;

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const getSchoolWithSchoolAdminData = useSelector(
    (state) => state?.schoolAdmin?.SchoolWithSchoolAdmin
  );

  const administrators = getSchoolWithSchoolAdminData?.AdminSchool;
  const createAdminCode = useSelector(
    (state) => state?.schoolAdmin?.CreateSchoolAdmin?.data
  );

  const token = useSelector((state) => state?.profile?.token);

  const removeSchoolAdminFromSchoolDeleteResponse = useSelector(
    (state) => state?.schoolAdmin?.removeSchoolAdminFromSchool
  );
  const userId = useSelector((state) => state?.profile?.userId);

  const handleEdit = (schoolAdminId) => {
    dispatch(getUserData({ id: schoolAdminId, token }));

    dispatch(
      setManageUser({
        formTitle: `Edit School Administrator`,
        userType: "schoolAdmin",
        // previousPath: location.pathname,
      })
    );
    dispatch(setPreviousPath(location.pathname))

    navigate(`/role/${selectedRole}/edit/schoolAdmin/${schoolAdminId}`);
  };

  const handleDelete = (uuid) => {
    const finalPayload = {
      user_uuid: uuid,
      updater_role: selectedRole,
      updated_by: userId,
    };

    dispatch(getRemoveSchoolAdminFromSchool({ token, schoolId, finalPayload }));
  };

  useEffect(() => {
    if (createAdminCode?.code === 200) {
      dispatch(getSchoolWithSchoolAdmin({ schoolId, token }));
    }
  }, [createAdminCode]);

  useEffect(() => {
    if (removeSchoolAdminFromSchoolDeleteResponse?.data?.code === 200) {
      dispatch(getSchoolWithSchoolAdmin({ schoolId, token }));
    }
  }, [removeSchoolAdminFromSchoolDeleteResponse]);

  return (
    <div>
      {selectedRole !== "schoolAdmin"
        ? administrators?.map((item, key) => (
            <div className="flex flex-row justify-between">
              <p className="text-primary">{item.first_name}</p>
              <Flex className="gap-2 mt-1">
                <HStack
                  onClick={() => {
                    handleEdit(item.uuid);
                  }}
                  cursor="pointer"
                >
                  <p>Edit</p>
                  <FaRegEdit className="mt-[0.2rem] text-primary mr-6" />
                </HStack>
                <HStack
                  onClick={() => {
                    handleDelete(item.uuid);
                  }}
                  cursor="pointer"
                >
                  <p>Delete</p>

                  <RiDeleteBin6Line className="mt-1 text-red" />
                </HStack>
              </Flex>
            </div>
          ))
        : administrators?.map((item, key) => <p>{item.first_name}</p>)}
    </div>
  );
};

const GreenLiteSkelton = () => {
  const dispatch = useDispatch();
  const { isOpen, onClose } = useDisclosure();

  const params = useParams();
  const navigate = useNavigate();

  const schoolUuid = params.schoolId;
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const getSchoolWithSchoolAdminData = useSelector(
    (state) => state?.schoolAdmin?.SchoolWithSchoolAdmin
  );
  const userUUID = useSelector((state) => state?.profile?.user?.response?.uuid);

  const token = useSelector((state) => state?.profile?.token);

  const updatedSchoolRes = useSelector(
    (state) => state?.schoolAdmin?.UpdateSchool
  );

  const ResponseCode = useSelector((state) => state?.schoolAdmin?.ResponseCode);

  const data = [
    {
      id: "1",
      head: "School Name*:",
      placeholder: "",
      name: "school_name",
    },
    {
      id: "2",
      head: "Address 1:",
      placeholder: "",
      name: "address_1",
    },
    {
      id: "3",
      head: "Phone 1:",
      placeholder: "",
      name: "phone_1",
    },
    {
      id: "4",
      head: "Local Identifier:",
      placeholder: "",
      name: "local_identifier",
    },
    {
      id: "5",
      head: "Address 2:",
      placeholder: "",
      name: "address_2",
    },
    {
      id: "6",
      head: "Phone 2:",
      placeholder: "",
      name: "phone_2",
    },
    {
      id: "7",
      head: "SSO ID:",
      placeholder: "",
      name: "sso_id",
    },
    {
      id: "8",
      head: "City:",
      placeholder: "",
      name: "city",
    },
    {
      id: "9",
      head: "Zip Code:",
      placeholder: "",
      name: "zip_code",
    },
    {
      id: "10",
      head: "Email:",
      placeholder: "",
      name: "email",
    },
    {
      id: "11",
      head: "State:",
      placeholder: "",
      name: "state",
    },
    {
      id: "12",
      head: "Administrators:",
      placeholder: "",
    },
  ];

  const [inputs, setInputs] = useState({});

  const [disable, setDisable] = useState(false);

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setDisable(true);
  };

  const onClickToSave = () => {
    dispatch(getUpdateSchool({ token, inputs, schoolId: schoolUuid }));
  };

  const onClickToBack = () => {
    navigate(`/role/${selectedRole}/schools`);
    setDisable(false);
  };

  useEffect(() => {
    dispatch(getSchoolWithSchoolAdmin({ schoolId: schoolUuid, token }));
  }, []);
  useEffect(() => {
    setInputs({
      school_name: getSchoolWithSchoolAdminData?.school_name,
      address_1: getSchoolWithSchoolAdminData?.address_1,
      phone_1: getSchoolWithSchoolAdminData?.phone_1,
      local_identifier: getSchoolWithSchoolAdminData?.local_identifier,
      address_2: getSchoolWithSchoolAdminData?.address_2,
      phone_2: getSchoolWithSchoolAdminData?.phone_2,
      sso_id: getSchoolWithSchoolAdminData?.sso_id,
      city: getSchoolWithSchoolAdminData?.city,
      zip_code: getSchoolWithSchoolAdminData?.zip_code,
      email: getSchoolWithSchoolAdminData?.email,
      state: getSchoolWithSchoolAdminData?.state,
      updated_by: userUUID,
    });
  }, [getSchoolWithSchoolAdminData]);

  useEffect(() => {
    if (updatedSchoolRes?.code === 200) {
      dispatch(getSchoolWithSchoolAdmin({ schoolId: schoolUuid, token }));
    }
  }, [updatedSchoolRes]);

  useEffect(() => {
    dispatch(setResponseCode(null));
    dispatch(setAddResCode(null));
    dispatch(setAddTeacherResCode(null));

    return () => {
      dispatch(setSchoolWithSchoolAdmin({}));
    };
  }, []);
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="4">
        {data?.map((item, index) => {
          return (
            <>
              <GridItem w="100%">
                <Text>{item.head}</Text>
                {item.id === "12" ? (
                  <AdminPage />
                ) : (
                  <Input
                    bg="#ECF4FF"
                    border={"none"}
                    rounded={"2xl"}
                    name={item?.name}
                    value={inputs[item?.name]}
                    onChange={handleChange}
                  />
                )}
              </GridItem>
            </>
          );
        })}
      </Grid>
      <Flex justifyContent={"center"} justify={"space-between"}>
        <Box className="mt-5 gap-2">
          <ButtonGroup gap="4">
            <Button
              color="black"
              borderRadius="3xl"
              backgroundColor="#EEEEEE"
              width="7rem"
              // className="rounded-2xl gap-1"
              onClick={() => onClickToBack()}
            >
              Cancel
            </Button>
            <Button
              // className="bg-green text-white rounded-2xl "
              color="white"
              borderRadius="3xl"
              backgroundColor="#00D100"
              width="7rem"
              isDisabled={!disable}
              onClick={onClickToSave}
            >
              Save
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>

      {/* <RemoveAdminSuccessModal /> */}

      {/* <Modal isOpen={ResponseCode === 200} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
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
                School Updated Successfully
              </Text>
              <Box
                onClick={() => {
                  dispatch(setResponseCode(null));
                  dispatch(setAddResCode(null));
                }}
              >
                <PositiveButton text={"OK"} />
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
};

const Teachers = () => {
  const [addTeacherModal, setAddTeacherModal] = useState(false);

  const dispatch = useDispatch()
  const params = useParams();

  const schoolID = params?.schoolId;
  const token = useSelector((state) => state?.profile?.token);

  const body = {
    schools: [schoolID],
  };

  const clickToNavigate = () =>{
    setAddTeacherModal(true);
        dispatch(getClassbasedonSchool({ token, body }));

  }

  return (
    <Box mt={"5"}>
      <Divider className="pt-4 mb-4" />
      <Text>TEACHERS</Text>
      <Flex justify="space-between" mt="5">
        <Input
          placeholder="Search  by name or user id"
          w="100"
          borderRadius={"30"}
        />
        <HStack className="" mt-2 onClick={() => clickToNavigate()}>
          <Text textDecoration="underline" cursor="pointer" textStyle="h4">Add Teacher</Text>
          {/* <AddTeacherPop /> */}
          <IoIosAddCircle size={25} fill={"#0081c8"} className="mt-2" />
        </HStack>
      </Flex>
      {addTeacherModal && (
        <AddTeacherPop
          addTeacherModal={addTeacherModal}
          setAddTeacherModal={setAddTeacherModal}
        />
      )}
    </Box>
  );
};

const GreenLiteElementary = () => {
  const getSchoolWithSchoolAdminData = useSelector(
    (state) => state?.schoolAdmin?.SchoolWithSchoolAdmin
  );
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const [addAdminModal, setAddAdminModal] = useState(false);

  return (
    <div>
      <Flex justify="space-between" mt="5">
        <Text fontSize="2xl">
          {getSchoolWithSchoolAdminData &&
            getSchoolWithSchoolAdminData?.school_name}
        </Text>
        <HStack className="" mt-2 onClick={() => setAddAdminModal(true)}>
          <Text textDecoration="underline" cursor="pointer" textStyle="h4">
            {selectedRole !== "schoolAdmin"
              ? "Add Administrator"
              : "Request to Add Admin"}
          </Text>

          <IoIosAddCircle size={25} fill={"#0081c8"} className="mt-2" />
        </HStack>
      </Flex>
      {addAdminModal && (
        <AddAdminPop
          addAdminModal={addAdminModal}
          setAddAdminModal={setAddAdminModal}
        />
      )}
      <GreenLiteSkelton />
      <Teachers />
      <TeacherTable />
    </div>
  );
};

export default GreenLiteElementary;

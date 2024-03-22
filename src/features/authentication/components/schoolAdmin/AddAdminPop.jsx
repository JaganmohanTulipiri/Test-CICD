import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Text,
  Input,
  Box,
  Flex,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRequestToAddAdminForSchool,
  getTeachersBySchool,
  setGreenLitePath,
  setManageUsersSelectedDropdownText,
  setRequestToAddAdmin,
  setRequestToAddAdminForSchool,
  setResponseCode,
} from "./schoolAdminSlice";
import { IoIosAddCircle } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AddSuccessModal from "./AddSuccessModal";
import {
  setErrorResponse,
  setManageUser,
  setPreviousPath,
} from "../../../../../src/store/slices/profileSlice";
import { Select } from "chakra-react-select";
import ErrorResponse from "../../../../components/GlobalComponents/ErrorResponse";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";

function AddAdminPop(props) {
  const { addAdminModal, setAddAdminModal } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();

  const schoolID = params?.schoolId;

  console.log("params==============", params?.schoolId);

  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const AddResCode = useSelector((state) => state?.schoolAdmin?.AddResCode);

  const getSchoolWithSchoolAdminData = useSelector(
    (state) => state?.schoolAdmin?.SchoolWithSchoolAdmin
  );

  const manageSchoolsData = useSelector(
    (state) => state?.schoolAdmin?.SchoolsForAdmin
  );
  const schoolId = manageSchoolsData[0]?.uuid;
  const errorResponse = useSelector((state) => state?.profile?.errorResponse);
  const token = useSelector((state) => state?.profile?.token);
  const userUUID = useSelector((state) => state?.profile?.user?.response?.uuid);

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const RequestToAddAdminForSchool = useSelector(
    (state) => state?.schoolAdmin?.RequestToAddAdminForSchool
  );

  console.log("RequestToAddAdminForSchool", RequestToAddAdminForSchool);

  const teachersBySchool = useSelector(
    (state) => state.schoolAdmin.TeachersBySchool
  );
  const code = useSelector((state) => state?.profile?.code);
  const [successModal, setSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    user_uuid: "",
  });
  const [teacherOptions, setTeacherOptions] = useState([]);

  const handleChange = (teacher) => {
    console.log(teacher, "teacher selected for api==========>");
    setFormData((prevState) => ({ ...prevState, user_uuid: teacher.value }));
  };

  const toClickToSave = () => {
    const payloadBody = {
      user_uuid: formData?.user_uuid,
      schools: [schoolId],
      assigner_role: selectedRole,
      assigner_uuid: userUUID,
    };

    dispatch(getRequestToAddAdminForSchool({ token, payloadBody }));

    setFormData({
      user_uuid: "",
    });
  };

  const clickToNavigate = (item) => {
    dispatch(setRequestToAddAdmin(true));
    dispatch(
      setManageUser({
        formTitle: `Request to Add School Administrator`,
        userType: "schoolAdmin",
        // previousPath: location.pathname,
      })
    );

    dispatch(setPreviousPath(location.pathname))
    navigate(`/role/${selectedRole}/AddUser`);
    dispatch(setGreenLitePath(location.pathname));
  };
  const clickToCancel = () => {
    setFormData({
      user_uuid: "",
    });
    setAddAdminModal(false);
  };

  const handleInputChange = (searchText) => {
    searchText.length >= 3 &&
      dispatch(
        getTeachersBySchool({
          token,
          schoolId: schoolID,
          body: { search_text: searchText },
        })
      );
  };

  useEffect(() => {
    if (teachersBySchool?.length) {
      let arr = [];
      teachersBySchool.forEach((teacher) => {
        let obj = { label: teacher.last_name, value: teacher.uuid };
        arr.push(obj);
      });
      console.log(arr, "for teacher options");
      setTeacherOptions([...arr]);
    } else {
      setTeacherOptions([]);
    }
  }, [teachersBySchool]);

  useEffect(() => {
    if (addAdminModal) {
      dispatch(
        getTeachersBySchool({
          token,
          schoolId: schoolID,
          body: { search_text: "" },
        })
      );
    }
  }, [addAdminModal]);

  useEffect(() => {
    dispatch(setResponseCode(null));
  }, []);

  useEffect(() => {
    dispatch(setManageUsersSelectedDropdownText(""));
  }, []);

  useEffect(() => {
    if (code === 200) {
      setAddAdminModal(false);
    }
  }, [code]);

  console.log("AddResCode", AddResCode);
  return (
    <>
      <Modal
        size="md"
        onClose={() => {
          setAddAdminModal(false);
          onClose;
        }}
        isOpen={addAdminModal}
        isCentered
        useInert={true}
        borderColor="transparent"
      >
        <ModalOverlay />
        <ModalContent p="4">
          <ModalBody>
            <Stack spacing="4">
              <div className="flex justify-between">
                <Text className="text-primary">
                  {selectedRole !== "schoolAdmin"
                    ? "Add School Administrator"
                    : "Request to Add Admin"}
                </Text>
                <Flex>
                  <Button textDecoration="underline" onClick={clickToNavigate}>
                    {selectedRole !== "schoolAdmin"
                      ? "Add a new user"
                      : "Add new"}
                  </Button>
                  <IoIosAddCircle size={25} fill={"#0081c8"} className="mt-2" />
                </Flex>
              </div>
              <FormControl>
                <FormLabel>User Last Name</FormLabel>
                <Select
                  mb="8px"
                  useBasicStyles
                  onInputChange={handleInputChange}
                  name="user_uuid"
                  onChange={handleChange}
                  options={teacherOptions}
                ></Select>
              </FormControl>
              <FormControl>
                <FormLabel>This Role</FormLabel>
                <Input value="School Admin" isDisabled />
              </FormControl>
              <FormControl>
                <FormLabel>At School</FormLabel>
                <Input
                  value={getSchoolWithSchoolAdminData?.school_name}
                  isDisabled
                />
              </FormControl>
              <Flex justify="center" gap="8">
                <Box
                  onClick={() => {
                    clickToCancel();
                    dispatch(setRequestToAddAdminForSchool(null));
                  }}
                >
                  <NegativeButton text={"Cancel"} />
                </Box>
                <Box onClick={toClickToSave}>
                  <PositiveButton text={"Submit"} />
                </Box>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* <AddSuccessModal setAddAdminModal={setAddAdminModal} /> */}
    </>
  );
}

export default AddAdminPop;

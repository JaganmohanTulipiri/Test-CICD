import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Input,
  Flex,
  Box,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import {
  getAddTeacherToClass,
  getClassbasedonSchool,
  getTeachersBySchool,
  setAddTeacherToClass,
  setResponseCode,
} from "../schoolAdminSlice";
import AddteacherSuccessModal from "../AddteacherSuccessModal";
import { useParams } from "react-router-dom";
import { Select } from "chakra-react-select";
import NegativeButton from "../../../../../components/NegativeButton";
import PositiveButton from "../../../../../components/PositiveButton";

function AddTeacherPop(props) {
  const { addTeacherModal, setAddTeacherModal } = props;

  const dispatch = useDispatch();
  const params = useParams();

  const schoolID = params?.schoolId;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const getSchoolWithSchoolAdminData = useSelector(
    (state) => state?.schoolAdmin?.SchoolWithSchoolAdmin
  );

  const manageSchoolsData = useSelector(
    (state) => state?.schoolAdmin?.SchoolsForAdmin
  );
  const schoolId = manageSchoolsData[0].uuid;
  const token = useSelector((state) => state?.profile?.token);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const userUUID = useSelector((state) => state?.profile?.user?.response?.uuid);
  const clasessData = useSelector(
    (state) => state?.schoolAdmin?.ClassbasedonSchool?.data?.response
  );

  const teachersBySchool = useSelector(
    (state) => state.schoolAdmin.TeachersBySchool
  );
  const code = useSelector((state) => state?.profile?.code);

  const [isDropdownClick, setIsDropdownClick] = useState(false);
  const [formData, setFormData] = useState({
    user_uuid: "",
    classId: "",
  });
  const [teacherOptions, setTeacherOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);

  const body = {
    schools: [schoolId],
  };

  
  const onhandleChange = (teacher) => {
    setFormData((prevState) => ({ ...prevState, user_uuid: teacher.value }));
  };

  const onhandleChangeClass = (classData) => {
    setFormData((prevState) => ({ ...prevState, classId: classData.value }));
  };

  const toClickToSave = () => {
    const payloadBody = {
      user_uuid: formData?.user_uuid,
      classes: [formData?.classId],
      schools: [schoolId],
      assigner_role: selectedRole,
      assigner_uuid: userUUID,
    };

    dispatch(getAddTeacherToClass({ token, payloadBody }));
  };

  const clickToCancle = () => {
    setIsDropdownClick(false);
    setFormData({
      user_uuid: "",
      classId: "",
    });
    setAddTeacherModal(false);
    dispatch(setAddTeacherToClass(null));
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
      setTeacherOptions([...arr]);
    } else {
      setTeacherOptions([]);
    }
  }, [teachersBySchool]);

  useEffect(() => {
    if (clasessData?.length) {
      let arr = [];
      clasessData.forEach((classData) => {
        let obj = { label: classData.class_name, value: classData.uuid };
        arr.push(obj);
      });
      setClassOptions([...arr]);
    } else {
      setClassOptions([]);
    }
  }, [clasessData]);

  useEffect(() => {
    dispatch(
      getTeachersBySchool({
        token,
        schoolId: schoolID,
        body: { search_text: "" },
      })
    );
  }, []);

  useEffect(() => {
    dispatch(setResponseCode(null));
  }, []);

  useEffect(() => {
    if (code === 200) {
      setAddTeacherModal(false);
    }
  }, [code]);

  return (
    <>
      <Modal
        size="md"
        onClose={() => {
          setAddTeacherModal(false);
          onClose;
        }}
        isOpen={addTeacherModal}
        isCentered
        useInert={true}
        borderColor="transparent"
      >
        <ModalOverlay />
        <ModalContent p="4">
          <ModalBody>
            <Stack spacing="4">
              <Text mb="8" className="text-primary">
                Add Teacher
              </Text>
              <FormControl>
                <FormLabel>User Last Name:</FormLabel>
                <Select
                  mb="8px"
                  useBasicStyles
                  onInputChange={handleInputChange}
                  name="user_uuid"
                  onChange={onhandleChange}
                  options={teacherOptions}
                ></Select>
              </FormControl>
              <FormControl>
                <FormLabel>This Role</FormLabel>
                <Input value="Teacher" isDisabled />
              </FormControl>

              <FormControl>
                <FormLabel>At School</FormLabel>
                <Input
                  value={getSchoolWithSchoolAdminData?.school_name}
                  isDisabled
                />
              </FormControl>
              <FormControl>
                <FormLabel>Add Class</FormLabel>
                <Select
                  mb="8px"
                  useBasicStyles
                  name="classId"
                  onChange={onhandleChangeClass}
                  options={classOptions}
                ></Select>
              </FormControl>
              <Flex justify="center" gap="8">
                <Box onClick={clickToCancle}>
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

      {/* <AddteacherSuccessModal setAddTeacherModal={setAddTeacherModal} /> */}
    </>
  );
}

export default AddTeacherPop;

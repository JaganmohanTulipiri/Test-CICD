import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NegativeButton from "../../components/NegativeButton";
import PositiveButton from "../../components/PositiveButton";
import { getClassbasedonSchool } from "../../features/authentication/components/schoolAdmin/schoolAdminSlice";

const TeacherAddSchoolModal = (props) => {
  const {
    addClassToStudent,
    setSelectedClassName,
    setSelectedSchoolName,
    setAddClassToStudent,
    setSelectedSchoolsList,
    setSelectedClasses,
    classes,
    schools,
    setAdded,
    addedSchoolsListArray,
    setAddedSchoolsListArray,
  } = props;

  const dispatch = useDispatch();

  const token = useSelector((state) => state.profile.token);

  const ClassbasedonSchool = useSelector(
    (state) => state?.schoolAdmin?.ClassbasedonSchool?.data?.response
  );

  const [selectedSchoolItem, setSelectedSchoolItem] = useState("");

  const [selectedClassItem, setSelectedClassItem] = useState("");

  const [schoolArray, setSchoolArray] = useState([]);

  const [classArray, setClassArray] = useState([]);

  const handleChange = (e) => {
    const schoolsList = schools?.filter(
      (each) => each?.uuid === e.target.value
    );

    setSchoolArray(schoolsList);

    setSelectedSchoolItem([e.target.value]);

    const body = {
      schools: [e.target.value],
    };

    dispatch(getClassbasedonSchool({ token, body }));
  };

  const handleChangeForClass = (e) => {
    setSelectedClassItem([e.target.value]);

    const classList = ClassbasedonSchool?.filter(
      (each) => each?.uuid === e.target.value
    );

    setClassArray(classList);
  };

  const addButtonClicked = () => {
    setAddClassToStudent(false);
    setAdded(true);

    setAddedSchoolsListArray([
      ...addedSchoolsListArray,
      { classArray, schoolArray },
    ]);
    setSelectedSchoolItem("");
    setSelectedClassItem("");
  };

  return (
    <>
      <Modal
        size={"md"}
        isOpen={addClassToStudent}
        isCentered
        useInert={true}
        borderColor="transparent"
      >
        <ModalOverlay />

        <ModalContent p="4" direction="flex" alignItems={"center"}>
          <Text textAlign={"center"} mb="3" color="primary">
            Add School/Class
          </Text>

          <ModalBody>
            <Flex direction="column" gap="4">
              <Box>
                <Select
                  onChange={(e) => handleChange(e)}
                  bg="bg.100"
                  borderColor="bg.100"
                  placeholder="All"
                  name="schools"
                  value={selectedSchoolItem}
                >
                  {schools?.map((value, i) => {
                    return (
                      <option key={i} value={value?.uuid}>
                        {value?.school_name}
                      </option>
                    );
                  })}
                </Select>
              </Box>

              <Box mt="4">
                <Select
                  onChange={(e) => handleChangeForClass(e)}
                  bg="bg.100"
                  borderColor="bg.100"
                  placeholder="All"
                  name="schools"
                  value={selectedClassItem}
                >
                  {ClassbasedonSchool?.map((value, i) => {
                    return (
                      <option key={i} value={value?.uuid}>
                        {value?.class_name}
                      </option>
                    );
                  })}
                </Select>
              </Box>

              <Flex justify="center" gap="8">
                <Box
                  onClick={() => {
                    setAddClassToStudent(false);
                  }}
                >
                  <NegativeButton text={"Cancel"} />
                </Box>
                <Box onClick={addButtonClicked}>
                  <PositiveButton text={"Add"} />
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TeacherAddSchoolModal;

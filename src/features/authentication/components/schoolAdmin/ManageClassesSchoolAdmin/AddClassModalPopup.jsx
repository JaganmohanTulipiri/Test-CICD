import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NegativeButton from "../../../../../components/NegativeButton";
import PositiveButton from "../../../../../components/PositiveButton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getClassesList,
  getSchoolsList,
} from "../../../../teacher/teacherSlice";
import MultiSelect from "multiselect-react-dropdown";

const AddClassModalPopup = (props) => {
  const {
    addClassModalShow,
    setAddClassModalShow,
    schoolClassListItems,
    setSchoolClassListItems,
  } = props;

  const { onClose } = useDisclosure();

  const dispatch = useDispatch();

  const initialVariable = "for useffect";

  const params = useParams();

  console.log(params, "paramsssssssss");

  const manageUsersAssignmentApiResponse = useSelector(
    (state) =>
      state?.schoolAdmin?.manageUsersAssignmentApiResponse?.data?.response
  );

  const manageClassesList = useSelector(
    (state) => state?.teacher?.manageClasses
  );

  const token = useSelector((state) => state?.profile?.token);

  const loginResponse = useSelector((state) => state?.profile?.user);

  const [selectedSchools, setSelectedSchools] = useState([]);

  const [selectedClasses, setSelectedClasses] = useState([]);

  const schoolsList = useSelector((state) => state?.teacher?.schools);

  const classesList = useSelector((state) => state?.teacher?.classes);

  console.log(schoolsList, "i am schools listtttt");

  console.log(classesList, "i am classes list");

  const handleSelectSchools = (e) => {
    console.log(e[0], "iam e[0");
    setSelectedSchools(e);
  };

  // dispatch(getClassesList({ body: { schools: [e.target.value] }, token }));

  useEffect(() => {
    const userId = loginResponse && loginResponse?.response?.uuid;

    dispatch(getSchoolsList({ userId, token }));


  }, [params, initialVariable, schoolClassListItems]);

  useEffect(() => {
    console.log({ selectedSchools, token });


    const schoolsListArray = selectedSchools?.length > 0 && selectedSchools?.map((each) => each.uuid)

    selectedSchools?.length &&
      dispatch(getClassesList({ body: { schools: schoolsListArray }, token }));
  }, [selectedSchools]);

  console.log(selectedSchools, "selectedSchools");

  const handleSelectClasses = (e) => {
    console.log(e[0], "iam e[0 class event");

    setSelectedClasses(e);
  };

  console.log(selectedClasses, "selected classes listttttttt");

  const validate = () => {
    let errors = {};

    if (selectedSchools?.length === 0) {
      errors.school_name = "*Required";
    } else {
      delete errors.school_name;
    }

    if (selectedClasses?.length === 0) {
      errors.class_name = "*Required";
    } else {
      delete errors.class_name;
    }

    return errors;
  };

  const [errors, setErrors] = useState({});

  const addButtonClicked = (event) => {
    console.log("event", event);

    const errors = validate();

    if (Object.keys(errors)?.length > 0) {
      setErrors(errors);
      console.log("form failedddd");
    } else {
      console.log("form submitted");

      const finalObj = {
        user_uuid: params?.selectedStudentUUID,
        classes: selectedClasses,
        schools: selectedSchools,
        assigner_role: manageClassesList[0]?.creater_role,
        assigner_uuid: params?.userUUID,
      };

      console.log(finalObj, "final objectttttttt");

      setSchoolClassListItems([...schoolClassListItems, finalObj]);

      setErrors({});
      setAddClassModalShow(false);

      // dispatch(getAddStudentToClassApiCall({ body: finalObj, token }))
    }
  };

  console.log(errors, "iam errors obj");

  return (
    <>
      <Modal
        size="sm"
        onClose={() => {
          setAddClassModalShow(false);
          onClose;
        }}
        isOpen={addClassModalShow}
        isCentered
        useInert={true}
        borderColor="transparent"
      >
        <ModalOverlay />
        <ModalContent p="4" direction="flex" alignItems={"center"}>
          <Text textAlign={"center"} mb="3" color="primary">
            Add Class
          </Text>

          <ModalCloseButton onClick={() => setAddClassModalShow(false)} />
          <ModalBody>
            <Flex direction="column" gap="4">
              <Box>
                <MultiSelect
                  onRemove={(event) => {
                    console.log(event, "iam renmove envent");
                    setSelectedSchools(event)
                  }}
                  onSelect={(event) => {
                    handleSelectSchools(event);
                  }}
                  options={schoolsList}
                  displayValue="school_name"
                />
                {errors && errors?.school_name === "*Required" && (
                  <Text color="red">{errors?.school_name}</Text>
                )}
              </Box>

              <Box>
                <MultiSelect
                  onRemove={(event) => {
                    console.log(event, "iam renmove envent");
                    setSelectedClasses(event);
                  }}
                  onSelect={(event) => {
                    handleSelectClasses(event);
                  }}
                  options={classesList}
                  displayValue="class_name"
                />

                {errors && errors?.class_name === "*Required" && (
                  <Text color="red">{errors?.class_name}</Text>
                )}
              </Box>

              <Flex justify="center" gap="8">
                <Box onClick={() => setAddClassModalShow(false)}>
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

export default AddClassModalPopup;

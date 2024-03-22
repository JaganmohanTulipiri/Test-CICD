import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClassesList, getSchoolsList } from "../../../teacher/teacherSlice";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";

const AddClassToStudentModal = (props) => {
  const { addClassToStudent, setAddClassToStudent } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.profile.userId);
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const token = useSelector((state) => state.profile.token);

  const schoolsList = useSelector((state) => state.teacher.schools);
  const classesList = useSelector((state) => state.teacher.classes);

  const [selectedSchools, setSelectedSchools] = useState();
  const [selectedClasses, setSelectedClasses] = useState();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSelectSchools = (e) => {
    setSelectedSchools(e.target.value);
    dispatch(getClassesList({ body: { schools: [e.target.value] }, token }));
  };

  useEffect(() => {
    !schoolsList?.length && dispatch(getSchoolsList({ userId, token }));
  }, []);

  // useEffect(() => {
  // 	console.log({ selectedSchools, token });
  // 	selectedSchools &&
  // 		dispatch(getClassesList({ body: { schools: [selectedSchools] }, token }));
  // }, [selectedSchools]);

  return (
    <>
      {/* <Modal
				
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={addClassToStudent}
				onClose={() => setAddClassToStudent(false)}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Class</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>School</FormLabel>
							<Select
								placeholder="Select"
								onChange={(e) => handleSelectSchools(e)}
							>
								{schoolsList !== undefined && schoolsList?.length > 0 &&
									schoolsList?.map((school) => {
										return (
											<option key={school.uuid} value={school.uuid}>
												{school.school_name}
											</option>
										);
									})}
							</Select>
						</FormControl>

						<FormControl>
							<FormLabel>Class</FormLabel>
							<Select placeholder="Select">
								{classesList !== undefined && classesList?.length > 0  &&
									classesList?.map((clas) => {
										return (
											<option key={clas.uuid} value={clas.uuid}>
												{clas.class_name}
											</option>
										)
									})}
							</Select>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3}>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal> */}

      <Modal
        size={"md"}
        onClose={() => {
          setAddClassToStudent(false);

          onClose;
        }}
        isOpen={addClassToStudent}
        isCentered
        useInert={true}
        borderColor="transparent"
      >
        <ModalOverlay />
        <ModalContent p="4">
          <ModalCloseButton onClick={() => setAddClassToStudent(false)} />
          <ModalBody>
            <form>
              <Text mt="3">Add Class</Text>
              <Select
                border={"none"}
                bg={"#F5F9FF"}
                name="classesMain"
                borderRadius={"15"}
           

              >
                {classesList !== undefined &&
                  classesList?.length > 0 &&
                  classesList?.map((clas) => {
                    return (
                      <option key={clas.uuid} value={clas.uuid}>
                        {clas.class_name}
                      </option>
                    );
                  })}
              </Select>

              <Select
                border={"none"}
                bg={"#F5F9FF"}
                name="classesMain"
                borderRadius={"15"} h="30" mt="3" py="3"
            
              >
                {classesList !== undefined &&
                  classesList?.length > 0 &&
                  classesList?.map((clas) => {
                    return (
                      <option key={clas.uuid} value={clas.uuid}>
                        {clas.class_name}
                      </option>
                    );
                  })}
              </Select>

              <Flex justify="center" gap="8" mt={"5"}>
                <Box onClick={() => setAddTeacherModal(false)}>
                  <button>Cancel</button>
                </Box>
                <Box>
                  <Button>Save</Button>{" "}
                </Box>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddClassToStudentModal;

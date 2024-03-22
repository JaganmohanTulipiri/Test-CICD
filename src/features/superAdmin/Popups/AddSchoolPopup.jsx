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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSchool } from "../../../store/slices/superAdminSlice/superAdminSlice";

const AddSchoolPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const finalRef = React.useRef(null);

  const created_by = useSelector((state) => state?.profile?.userRole);
  const schoolResponse = useSelector((state) => state?.superAdmin?.addSchool);
  const [schoolName, setSchoolName] = useState("");

  const handleChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Handle Submit function in mmmmmmmmmmmmmmmmmmmmmmmm");
    dispatch(
      getSchool({ body: { school_name: schoolName, created_by: created_by } })
    );
    if (schoolResponse.status === 200) {
      alert("School Added Successfully");
      onClose();
    } else {
      alert(
        schoolResponse.response.data.message + ". Try adding another school"
      );
    }
  };

  return (
    <>
      <Link background="none" border="none" onClick={onOpen}>
        <Button color="black">Add School</Button>
      </Link>
      <AddIcon
        backgroundColor="#0081c8"
        color="white"
        borderRadius="2rem"
        fontSize="1.1rem"
        p="0.3rem"
        marginLeft="-2"
      />

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="9">
            <Center>
              <Heading size="md" color="#1890ff">
                Add School
              </Heading>
            </Center>

            <Flex>
              <Spacer />
            </Flex>
            <Stack spacing="2" marginTop="3">
              <Text>School</Text>
              <Select
                placeholder="Select Below"
                backgroundColor="#F5F9FF"
                border="none"
                name="schoolName"
                onChange={handleChange}
              >
                <option value="Greenlight High School">
                  Greenlight High School
                </option>
                <option value="Greenlight Elementary">
                  Greenlight Elementary
                </option>
                <option value="Greenlight Middle School">
                  Greenlight Middle School
                </option>
              </Select>

              <Spacer />

              <Center>
                <ButtonGroup gap="4">
                  <Button onClick={onClose}>Cancel</Button>
                  <Button
                    backgroundColor="#1890ff"
                    color="white"
                    onClick={handleSubmit}
                  >
                    Submit
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

export default AddSchoolPopup;

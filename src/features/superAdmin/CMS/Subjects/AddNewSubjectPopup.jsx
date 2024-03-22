import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddNewSubject,
  getAllSubjects
} from "../../../../store/slices/superAdminSlice/superAdminSlice";

const AddNewSubjectPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const token = useSelector((state) => state?.profile?.token);
  const loginResponse = useSelector((state) => state?.profile?.user);
  const subjectAPIResponse = useSelector(
    (state) => state?.superAdmin?.addSubject
  );

  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);
  const [newSubjectData, setNewSubjectData] = useState({
    name: "",
    created_by: "",
    is_active: "",
  });

  const handleInputChange = (e) => {
    setNewSubjectData({
      ...newSubjectData,
      [e.target.name]: e.target.value,
      created_by: loginResponse?.response?.uuid,
    });
  };
  const handleRadioStatus = (event) => {
    console.log(event.target.name, event.target.value);
    setNewSubjectData({
      ...newSubjectData,
      [event.target.name]: event.target.value === "active" ? "true" : "false",
    });
  };

  const validateData = () => {
    dispatch(AddNewSubject({ body: newSubjectData, token: token }));
  };
  const handleModalClose = () => {
    setNewSubjectData({ name: "", is_active: "", created_by: "" });
    onClose();
  };

  const handleModalOpen = () => {
    console.log("newSubjectData after on open click", newSubjectData);
    onOpen();
  };

  useEffect(() => {
    if (subjectAPIResponse?.data?.code === 200) {
      setIsSuccessPopUpOpen(true);
      onClose();
      setNewSubjectData({ name: "", is_active: "", created_by: "" });
      dispatch(getAllSubjects({ token: token }));
    }
  }, [subjectAPIResponse]);

  return (
    <>
      <Link background="none" border="none">
        <Button color="black" onClick={handleModalOpen}>
          Add a new Subject
        </Button>
      </Link>
      <AddIcon
        marginTop="3"
        backgroundColor="#0081c8"
        color="white"
        borderRadius="2rem"
        fontSize="1.1rem"
        p="0.3rem"
        marginLeft="-1.5"
      />

      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="9">
            <Text size="md" color="#0081c8" textStyle="h4">
              Add New CMS Category
            </Text>

            <Flex>
              <Spacer />
            </Flex>
            <Stack spacing="2" marginTop="3">
              <Text marginRight="20">Name of the Subject</Text>

              <InputGroup>
                <Input
                  type="text"
                  marginBottom="5"
                  backgroundColor="#F5F9FF"
                  border="none"
                  name="name"
                  value={newSubjectData.name}
                  onChange={handleInputChange}
                />
              </InputGroup>

              <Text>Status</Text>
              <Box onChange={handleRadioStatus}>
                <RadioGroup marginLeft="4" name="is_active">
                  <Radio value="active">Active</Radio>
                  <br></br>
                  <Radio value="inactive">In Active</Radio>
                </RadioGroup>
              </Box>
              <Spacer />

              <Center>
                <ButtonGroup gap="4">
                  <Button
                    onClick={handleModalClose}
                    color="black"
                    borderRadius="3xl"
                    backgroundColor="#EEEEEE"
                    width="7rem"
                  >
                    Cancel
                  </Button>

                  <Button
                    backgroundColor="#1890ff"
                    color="white"
                    borderRadius="3xl"
                    width="7rem"
                    onClick={validateData}
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

export default AddNewSubjectPopup;

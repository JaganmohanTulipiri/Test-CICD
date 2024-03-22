import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  Text,
  Box,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import ADMINISTERTEST from "../../../../src/assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ADMINISTERTEST.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setResponse } from "../../../features/teacher/teacherSlice";
import { setActivatingID } from "../../../store/slices/profileSlice";

function AdminPopUp(props) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { code, successModal, setSuccessModal, message } = props;

  const responseCode = useSelector((state) => state?.teacher?.response?.code);

  console.log(responseCode,"from 31")

  // const editedResponseCode = useSelector(
  //   (state) => state?.teacher?.updatedResponse?.code
  // );
  const eventId = useSelector(
    (state) => state?.teacher?.response?.response?.uuid
  );

  // const editedEventId = useSelector(
  //   (state) => state?.teacher?.updatedResponse?.response?.uuid
  // );

  // const [eventId, setEventId] = useState("");

  // useEffect(() => {
  //   if (editedResponseCode === 200) {
  //     setEventId(editedEventId);
  //   } else
  //   setEventId(createdEventId);
  // }, [editedResponseCode, responseCode]);

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  console.log(responseCode, eventId, "from admin ppopup");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={responseCode == 200}
        onClose={() => setSuccessModal(false)}
      >
        <ModalOverlay />
        <ModalContent marginTop="300">
          <Center margin="5">
            <img
              src={ADMINISTERTEST}
              className="w-8 h-8 color-blue text-center"
            />
          </Center>
          <Center>
            <Text>ADMINISTER TEST?</Text>
          </Center>

          <ModalBody padding="10">
            <Center>
              <Box display="flex" justifyContent="space-between">
                <Box
                  as="button"
                  height="36px"
                  width="96px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  borderRadius="18px"
                  fontSize="14px"
                  fontWeight="normal"
                  bg="#F5F5F5"
                  color="#808080"
                  fontFamily="poppins"
                  onClick={() => {
                    navigate(`/role/${selectedRole}`);
                  }}
                >
                  Save & Exit{" "}
                </Box>

                <Box
                  as="button"
                  height="36px"
                  width="96px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  borderRadius="18px"
                  fontSize="14px"
                  marginLeft="1rem"
                  fontWeight="normal"
                  bg="primary"
                  color="white"
                  fontFamily="poppins"
                  onClick={() => {
                    navigate(`/role/${selectedRole}/adminTest/${eventId}`);
                    dispatch(setActivatingID(2));
                    if(role == 'districtAdmin'){
                      dispatch(setActivatingID(8))

                    }

                    dispatch(setResponse(null));
                  }}
                >
                  Proceed
                </Box>
              </Box>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminPopUp;

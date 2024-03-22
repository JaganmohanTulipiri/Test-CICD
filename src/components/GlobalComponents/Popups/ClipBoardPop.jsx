import React from "react";
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
import { FaClipboardList } from "react-icons/fa";

import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStoreDataResponse } from "../../../features/teacher/teacherSlice";

function ClipBoard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const responseCode = useSelector(
    (state) => state?.teacher?.storeDataResponse
  );

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const { setEdit, params, setShowPopup } = props;

  console.log(params, "params from clipboard");

  const eventId = params?.eventId;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button
      
        background="green"
        color="white"
        px="1rem"
        size="sm"
        colorScheme="green"
      >
        Create
      </Button> */}

      <Modal isOpen={responseCode == 200}>
        <ModalOverlay />
        <ModalContent marginTop="300" w="50">
          <Center margin="5">
            <FaClipboardList fill="#0081c8" />
          </Center>

          <div className="px-7 mt-2">
            <p className="text-sm text-center font-poppins-regular">
              Do you want to generate the Report ?
            </p>
          </div>

          <ModalBody padding="15" marginTop="1rem">
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
                    navigate("/role/Teacher");
                  }}
                >
                  No{" "}
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
                    setEdit(false); // setShowPopup(false)
                    navigate(`/role/${selectedRole}/adminTest/${eventId}`);
                    dispatch(setStoreDataResponse(null));
                  }}
                >
                  Yes{" "}
                </Box>
              </Box>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ClipBoard;

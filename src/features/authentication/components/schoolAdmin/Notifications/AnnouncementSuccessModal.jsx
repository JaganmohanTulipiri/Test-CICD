import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Text,
  Flex,
  Button,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
// import PositiveButton from "../../../../components/PositiveButton";
// import successTick from "../../../../assets/customIcons/success-tick.svg";

// import successTick from "../../../../../assets/customIcons/sucess-tick.svg";

import successTick from "../../../../../assets/customIcons/success-tick.svg"

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {
//   setAddResCode,
//   setAddTeacherResCode,
//   setResponseCode,
// } from "./schoolAdminSlice";
import PositiveButton from "../../../../../components/PositiveButton";
import { getManageAnnouncementData, setResponseCode } from "../schoolAdminSlice";

export default function AddAnnouncementSuccessModal(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const role = useSelector((state) => state?.profile?.selectedRole);
  const token = useSelector((state) => state?.profile?.token);


  const ResponseCode = useSelector((state) => state?.schoolAdmin?.ResponseCode);

  const AddResCode = useSelector(
    (state) => state?.schoolAdmin?.addTeacherResCode
  );

  const {
    message,
    setAddModal
  } = props;
  
  // const message = props.message

  const { onOpen, onClose } = useDisclosure();


  return (
    <>
     

      <Modal isOpen={ResponseCode === 200} onClose={onClose} isCentered>
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
                {message}
              </Text>
              <Box
                onClick={() => {
                  dispatch(setResponseCode(null));
                  setAddModal(false)

                  dispatch(getManageAnnouncementData({status:'', role, token }));

                }}
              >
                <PositiveButton text={"OK"} />
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={clickToClose}>
                Close
              </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

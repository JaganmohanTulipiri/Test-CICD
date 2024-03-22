import React, { useEffect } from "react";
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
} from "@chakra-ui/react";
// import successTick from "../../../../assets/customIcons/success-tick.svg";
import successTick from "../assets/customIcons/success-tick.svg";
import PositiveButton from "./PositiveButton";
import { useDispatch, useSelector } from "react-redux";
import { setResponseCode } from "../features/teacher/teacherSlice";
import { useLocation, useNavigate } from "react-router-dom";

const DeleteModal = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.pathname, "from  modal");

  const currentPath = location.pathname;

  const responseCode = useSelector((state) => state.teacher.responseCode);
  const { code, successModal, setSuccessModal, message } = props;
  const { onClose } = useDisclosure();

  //   useEffect(() => {
  //     setTimeout(() => dispatch(setResponseCode(null)), 4000);

  //   },[]);
  return (
    <Modal
      size="xs"
      onClose={() => setSuccessModal(false)}
      isOpen={responseCode == 200}
      isCentered
      useInert={true}
      borderColor="transparent"
    >
      <ModalOverlay />
      <ModalContent p="4">
        {/* <ModalCloseButton
          onClick={() => {
            dispatch(setResponseCode(null));
            navigate("/role/teacher");
          }}
        /> */}
        <ModalBody>
          <Flex direction="column" gap="6" alignItems="center">
            <Text textStyle="h1" color="green" textAlign="center">
              Event deleted 
            </Text>
            <Box boxSize="8">
              <img src={successTick} />
            </Box>
            <Text textStyle="h1" color="green" textAlign="center">
              Successfully
            </Text>
            <Box
              onClick={() => {
                dispatch(setResponseCode(null));
                if (currentPath.includes("ActivityLog")) {
                  navigate("/role/teacher/ActivityLog");
                } else if (currentPath.includes("ActivityGramEvent")) {
                  navigate("/role/teacher/ActivityGramEvent");
                } else {
                  navigate("/role/teacher");
                }
              }}
            >
              <PositiveButton text={"OK"} />
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;

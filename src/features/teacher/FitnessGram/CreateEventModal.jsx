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
import successTick from "../../../assets/customIcons/success-tick.svg";
import enterData from "../../../assets/customIcons/adminstertest2.png"
import PositiveButton from "../../../components/PositiveButton";
import { useDispatch, useSelector } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";

const CreateEventModal = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();



  const responseCode = useSelector((state) => state.teacher.responseCode);

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
           
            <Box boxSize="8">
              <img src={enterData} />
            </Box>
            <Text textStyle="h1" color="green" textAlign="center">
              Successfully
            </Text>
            <Box
              onClick={() => {
                dispatch(setResponseCode(null));
                if (currentPath.includes("al")) {
                  navigate("/role/teacher/ActivityLog");
                } else if (currentPath.includes("ag")) {
                  navigate("/role/teacher/ActivityGramEvent");
                } else {
                  navigate("/role/teacher");
                }
              }}
            >
              <Box
                as="button"
                height="36px"
                width="96px"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                borderRadius="18px"
                fontSize="14px"
                fontWeight="normal"
                bg="grey"
                color="white"
                fontFamily="poppins"
              >
                Save & Exit
              </Box>{" "}
              <Box
                as="button"
                height="36px"
                width="96px"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                borderRadius="18px"
                fontSize="14px"
                fontWeight="normal"
                bg="primary"
                color="white"
                fontFamily="poppins"
              >
                Proceed
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateEventModal;

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
import successTick from "../../assets/customIcons/success-tick.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import PositiveButton from "./PositiveButton";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCode, setErrorResponse, setMessage } from "../../store/slices/profileSlice";

const ErrorResponse = (props) => {
  const { message } = props;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const errorResponse = useSelector((state) => state?.profile?.message);
  console.log(errorResponse, "from error response midal");

  return (
    <Modal
      size="xs"
      onClose={() => dispatch(setErrorResponse(null))}  
      isOpen={errorResponse}
      isCentered
      useInert={true}
      borderColor="transparent"
    >
      <ModalOverlay />
      <ModalContent p="4">
        <ModalBody>
          <Flex direction="column" gap="6" alignItems="center">
            <Text textStyle="h1" color="#ff4040" textAlign="center">
              Oops!{" "}
            </Text>
            <Box boxSize="8">
              <AiOutlineCloseCircle color="#ff4040" size="45" />
              {/* <img src={successTick} /> */}
            </Box>
            <Text textStyle="h1" color="#ff4040" textAlign="center">
              {errorResponse}
              {/* Successfully */}
            </Text>
            <Box
              onClick={() => {
                dispatch(setMessage(null));
                dispatch(setCode(null));

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
                bg="red"
                color="white"
                fontFamily="poppins"
              >
                OK
              </Box>{" "}
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ErrorResponse;

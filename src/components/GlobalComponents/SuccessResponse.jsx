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
import {
  setCode,
  setErrorResponse,
  setManageUser,
  setMessage,
  setPreviousPath,
  setResponse,
} from "../../store/slices/profileSlice";

const SuccessResponse = (props) => {
  const { message } = props;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const response = useSelector((state) => state?.profile?.message);

  const manageUser = useSelector((state) => state.profile.manageUser);

  const previousPath = useSelector((state) => state?.profile?.previousPath);

  console.log(previousPath, "33");

  return (
    <Modal
      size="xs"
      isOpen={response}
      isCentered
      useInert={true}
      borderColor="transparent"
    >
      <ModalOverlay />
      <ModalContent p="4">
        <ModalBody>
          <Flex direction="column" gap="6" alignItems="center">
            <Text textStyle="h1" color="green" textAlign="center">
              Wow !
            </Text>
            <Box boxSize="8">
              <img src={successTick} />
            </Box>
            <Text textStyle="h1" color="green" textAlign="center">
              {response}
            </Text>
            <Box
              onClick={() => {
                dispatch(setMessage(null));
                dispatch(setCode(null));
                if (previousPath) {
                  navigate(previousPath);
                }
                dispatch(setPreviousPath(""));
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
                bg="green"
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

export default SuccessResponse;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  Stack,
  Center,
  Heading,
  ButtonGroup,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import successTick from "../../../src/assets/customIcons/success-tick.svg";
import {
  setForgotPassword,
  setForgotUserName,
} from "../../store/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";

function SuccessCardPopUp(props) {
  const { success, setSuccess, setIsPopUpShow, setIsPopUpShowPwd } = props;

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const forgotUserName = useSelector((state) => state?.profile?.forgotUserName);
  const forgotPassword = useSelector((state) => state?.profile?.forgotPassword);

  const finalRef = React.useRef(null);

  return (
    <>
      {/* <Modal
        finalFocusRef={finalRef}
        isOpen={success}
        onClose={() => {
          setSuccess(false);
          onClose;
        }}
        onClick={onOpen}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent p="5">
          <ModalCloseButton />
          <ModalBody marginTop="3">
            <Center>
              <Text className="text-green text-center">
                <Center>
                  <IoMdCheckmarkCircle fill="green" size="25" />
                </Center>
                Email Sent{" "}
              </Text>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal> */}

      <Modal
        size="xs"
        isOpen={forgotUserName === 200 || forgotPassword === 200}
        onClose={() => {
          setSuccess(false);
          onClose;
        }}
        isCentered
        useInert={true}
        borderColor="transparent"
      >
        <ModalOverlay />
        <ModalContent p="4">
          <ModalBody>
            <Flex direction="column" gap="6" alignItems="center">
              <Text textStyle="h1" color="green" textAlign="center">
                Your Request has been sent
              </Text>
              <Box boxSize="8">
                <img src={successTick} />
              </Box>
              <Text textStyle="h1" color="green" textAlign="center">
                Successfully
              </Text>
              <Box
                onClick={() => {
                  if (forgotPassword == 200) {
                    setIsPopUpShowPwd(false);
                  }
                  if (forgotUserName === 200) {
                    setIsPopUpShow(false);
                  }
                  dispatch(setForgotUserName({}));
                  dispatch(setForgotPassword({}));
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
    </>
  );
}

export default SuccessCardPopUp;

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
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import {
  getForgotPassword,
  setForgotUserName,
} from "../../store/slices/profileSlice";
import SuccessCardPopUp from "./SuccessCardPopUp";
import { useDispatch } from "react-redux";

function ForgetPassword(props) {
  const { isPopUpShowPwd, setIsPopUpShowPwd } = props;

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const [data, setData] = useState({
    user_name: "",
    // district_code:""
  });
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const checkNow = (event) => {
    event.preventDefault();
    console.log("heloooo from chevk now");

    dispatch(getForgotPassword(data));
  };

  useEffect(() => {
    // console.log("heloo in yse",forgotUserName)
    dispatch(setForgotUserName({}));
  }, []);
  console.log(data, "hanlde change");
  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isPopUpShowPwd}
        onClose={() => {
          setIsPopUpShowPwd(false);
          onClose;
        }}
        onClick={onOpen}
        borderRadius={4}
        isCentered
        mt="10"
      >
        <ModalOverlay />
        <ModalContent p="5">
          <ModalCloseButton />
          <ModalBody marginTop="3">
            <Stack spacing="3">
              <Center>
                <Heading size="md" color="#0081c8">
                  Forget Password?
                </Heading>
              </Center>

              <Box p="1">
                <Input
                  name="user_name"
                  borderColor="gray"
                  value={data.user_name}
                  h={{ base: "2rem", md: "3rem", lg: "3rem" }}
                  onChange={handleChange}
                  placeholder="Enter UserName"
                ></Input>
                <Input
                  mt="4"
                  type="password"
                  borderColor="gray"
                  h={{ base: "2rem", md: "3rem", lg: "3rem" }}
                  placeholder="Enter District Code"
                ></Input>
              </Box>
            </Stack>

            <Center>
              <ButtonGroup gap="4" marginTop="5">
                <Button
                  width={{ base: "5rem", md: "5rem", lg: "7rem" }}
                  color="black"
                  borderRadius="3xl"
                  backgroundColor="#EEEEEE"
                  onClick={() => {
                    setData({ user_name: "" });
                    setIsPopUpShowPwd(false);
                  }}
                  fontFamily={"body"}
                  fontSize={{ base: "13px", md: "13px", lg: "15px" }}
                >
                  Enter Again
                </Button>

                <Button
                  onClick={(event) => checkNow(event)}
                  backgroundColor="#0081C8"
                  width={{ base: "5rem", md: "5rem", lg: "7rem" }}
                  color="white"
                  rounded="3xl"
                  fontFamily={"body"}
                  fontSize={{ base: "13px", md: "13px", lg: "15px" }}
                >
                  Reset{" "}
                </Button>
              </ButtonGroup>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
      <SuccessCardPopUp setIsPopUpShowPwd={setIsPopUpShowPwd} />
    </>
  );
}

export default ForgetPassword;

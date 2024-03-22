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
import SuccessCardPopUp from "../../../../../MobileResponsive/ForgetScreens/SuccessCardPopUp";
import { useDispatch, useSelector } from "react-redux";
import {
  getForgotUserName,
  setForgotUserName,
} from "../../../../../store/slices/profileSlice";

function ForgetUserName(props) {
  const { isPopUpShow, setIsPopUpShow } = props;
  const dispatch = useDispatch();
  console.log(isPopUpShow, "isPopUpShowisPopUpShow");

  const token = useSelector((state) => state?.profile?.token);
  const forgotUserName = useSelector((state) => state?.profile?.forgotUserName);

  console.log(forgotUserName, "code");
  const [success, setSuccess] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const checkNow = (event) => {
    event.preventDefault();
    console.log("heloooo from chevk now")
    setIsPopUpShow(true);

    let body = {
      email: email,
    };
    dispatch(getForgotUserName(body));
  };

  useEffect(() => {
    console.log("heloo in yse",forgotUserName)
    dispatch(setForgotUserName({})) ;
    
  }, []);

  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isPopUpShow}
        onClose={() => {
          setIsPopUpShow(false);
        }}
        onClick={onOpen}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent p="5">
          {/* <ModalCloseButton /> */}
          <ModalBody marginTop="3">
            <Stack spacing="3">
              <Center>
                <Heading size="sm" color="#0081c8">
                  Forget UserName?
                </Heading>
              </Center>

              <Box p="1">
                <Input
                  type="email"
                  borderColor="gray"
                  h={{ base: "2rem", md: "3rem", lg: "3rem" }}
                  placeholder="Enter Email"
                  onChange={handleChange}
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
                    setIsPopUpShow(false);
                  }}
                  fontFamily={"body"}
                  fontSize={{ base: "13px", md: "13px", lg: "15px" }}
                >
                  Cancel
                </Button>

                <Button
                  backgroundColor="#0081C8"
                  width={{ base: "5rem", md: "5rem", lg: "7rem" }}
                  color="white"
                  rounded="3xl"
                  fontFamily={"body"}
                  fontSize={{ base: "13px", md: "13px", lg: "15px" }}
                  onClick={(event)=>checkNow(event)}
                >
                  Send
                </Button>
              </ButtonGroup>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>

      <SuccessCardPopUp
        success={success}
        setSuccess={setSuccess}
        setIsPopUpShow={setIsPopUpShow}
      />
    </>
  );
}

export default ForgetUserName;

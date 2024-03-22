import {
    Box,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  
  import successTick from "../../../assets/customIcons/success-tick.svg";
  
  import PositiveButton from "../../../components/PositiveButton";
  import { setState, setUpdatedSchoolById } from "../../../store/slices/superAdminSlice/superAdminSlice";
  
  const CreateSuccessPopup = (props) => {
    const { isSuccessPopUpOpen, setIsSuccessPopUpOpen } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const selectedRole = useSelector((state) => state?.profile?.selectedRole);

    const code =useSelector(state=>state?.superAdmin?.addedState?.data?.code)
  
    const { onOpen, onClose } = useDisclosure();
  
   
  const getAddedStateResponse = useSelector(
    (state) => state?.superAdmin?.addedState
  );
    console.log(getAddedStateResponse, "getAddedStateResponse");
  
    return (
      <>
        <Modal
          isOpen={code=== 200}
          onClose={() => {
            setIsSuccessPopUpOpen(false);
            onClose;
          }}
          isCentered
        >
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
                  {getAddedStateResponse?.data?.message}
                </Text>
                <Box
                  onClick={() => {
                    // setIsSuccessPopUpOpen(false);
                    dispatch(setState(null));
                    navigate("/role/SuperAdmin/StatesPartners");
                  }}
                >
                  <PositiveButton text={"OK"} />
                </Box>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default CreateSuccessPopup;
  
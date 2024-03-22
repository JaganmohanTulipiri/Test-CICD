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
  import { setState, setUpdatedSchoolById, setUpdatedState } from "../../../store/slices/superAdminSlice/superAdminSlice";
  
  const UpdateStatesPopup = (props) => {
    const { isSuccessPopUpOpen, setIsSuccessPopUpOpen } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  
    const { onOpen, onClose } = useDisclosure();
  
   
    const UpdateStatesAPIResponse = useSelector((state) => state?.superAdmin?.updatedState);

    console.log(UpdateStatesAPIResponse, "UpdateStatesAPIResponse");
  
    return (
      <>
        <Modal
          isOpen={UpdateStatesAPIResponse?.data?.code === 200}
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
                  {UpdateStatesAPIResponse?.data?.message}
                </Text>
                <Box
                  onClick={() => {
                    dispatch(setUpdatedState(null));
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
  
  export default UpdateStatesPopup;
  
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
import {
  setNewSSOConfig,
  setUpdatedSchoolById,
} from "../../../store/slices/superAdminSlice/superAdminSlice";

const SSOSuccessPopup = (props) => {
  const { isSuccessPopUpOpen, setIsSuccessPopUpOpen } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const addSSOConfigResponse = useSelector(
    (state) => state?.superAdmin?.newSSOConfig
  );

  const { onOpen, onClose } = useDisclosure();

  console.log(addSSOConfigResponse, "addSSOConfigResponse");

  return (
    <>
      <Modal
        isOpen={addSSOConfigResponse?.data?.status === "success"}
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
                {addSSOConfigResponse?.data?.message}
              </Text>
              <Box
                onClick={() => {
                  dispatch(setNewSSOConfig(null));
                  navigate("/role/SuperAdmin/SSOConfigMain");
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

export default SSOSuccessPopup;

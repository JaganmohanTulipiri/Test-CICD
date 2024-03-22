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
  getAllSSOConfig,
  setState,
  setUpdatedSchoolById,
  setUpdatedSSOConfigById,
  setUpdatedState,
} from "../../../store/slices/superAdminSlice/superAdminSlice";

const SSOConfigSuccessPopup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const { onOpen, onClose } = useDisclosure();

  const updateSSOConfigResponse = useSelector(
    (state) => state?.superAdmin?.getUpdateSSOConfig
  );

  console.log(updateSSOConfigResponse, "updateSSOConfigResponse");

  return (
    <>
      <Modal
        isOpen={updateSSOConfigResponse?.data?.code === 200}
        onClose={() => {
          dispatch(getAllSSOConfig());
          dispatch(setUpdatedSSOConfigById(null));
          navigate("/role/SuperAdmin/SSOConfigMain");

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
                {updateSSOConfigResponse?.data?.message}
              </Text>
              <Box
                onClick={() => {
                  dispatch(getAllSSOConfig());
                  dispatch(setUpdatedSSOConfigById(null));
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

export default SSOConfigSuccessPopup;

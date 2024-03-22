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
  setDeleteSSOConfigById,
  setNewSubject,
  setUpdatedCMSSubject,
  setUpdatedSchoolById,
} from "../../../store/slices/superAdminSlice/superAdminSlice";

const SSOConfigDeletionPopup = (props) => {
  const { isSuccessPopUpOpen, setIsSuccessPopUpOpen } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const { onOpen, onClose } = useDisclosure();
  const deleteSSOConfigByIdAPIResponse = useSelector(
    (state) => state?.superAdmin?.deleteSSOConfig
  );

  console.log(deleteSSOConfigByIdAPIResponse, "deleteSSOConfigByIdAPIResponse");

  return (
    <>
      <Modal
        isOpen={deleteSSOConfigByIdAPIResponse?.data?.status === "success"}
        onClose={() => {
          setIsSuccessPopUpOpen(false);
          dispatch(setDeleteSSOConfigById(null));
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
                {deleteSSOConfigByIdAPIResponse?.data?.message}
              </Text>
              <Box
                onClick={() => {
                  dispatch(setDeleteSSOConfigById(null));
                  navigate(`/role/${selectedRole}/SSOConfigMain`)
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

export default SSOConfigDeletionPopup;

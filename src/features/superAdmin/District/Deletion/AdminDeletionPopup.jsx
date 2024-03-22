import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import successTick from "../../../../assets/customIcons/success-tick.svg";

import PositiveButton from "../../../../components/PositiveButton";
import {
  setDeletedAdminUser
} from "../../../../store/slices/superAdminSlice/superAdminSlice";
import { setRemoveSchoolAdminFromSchool } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const AdminDeletionPopup = (props) => {
  console.log("props in AdminDeletionPopup", props);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onOpen, onClose } = useDisclosure();

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const adminDeletionResponse = useSelector(
    (state) => state.superAdmin?.deleteAdminUserResponse
  );

  const removeSchoolAdminFromSchoolDeleteResponse = useSelector(
    (state) => state?.schoolAdmin?.removeSchoolAdminFromSchool
  );

  return (
    <>
      {props.card !== "schoolAdminDeletion" ? (
        <Modal
          isOpen={adminDeletionResponse?.data?.status === "success"}
          onClose={() => {
            dispatch(setDeletedAdminUser(null));
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
                  {adminDeletionResponse?.data?.message}
                </Text>
                <Box
                  onClick={() => {
                    dispatch(setDeletedAdminUser(null));
                    navigate(`/role/${selectedRole}/Districts/ABBEVILLE`);
                    onClose;
                  }}
                >
                  <PositiveButton text={"OK"} />
                </Box>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : (
        <Modal
          isOpen={
            removeSchoolAdminFromSchoolDeleteResponse?.data?.status ===
            "success"
          }
          onClose={() => {
            dispatch(setRemoveSchoolAdminFromSchool(null));
            dispatch(setDeletedAdminUser(null));
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
                  {removeSchoolAdminFromSchoolDeleteResponse?.data?.message}
                </Text>
                <Box
                  onClick={() => {
                    dispatch(setRemoveSchoolAdminFromSchool(null));
                    dispatch(setDeletedAdminUser(null));
                    navigate(
                      `/role/${selectedRole}/Districts/DistrictDetails`
                    );
                    onClose;
                  }}
                >
                  <PositiveButton text={"OK"} />
                </Box>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default AdminDeletionPopup;

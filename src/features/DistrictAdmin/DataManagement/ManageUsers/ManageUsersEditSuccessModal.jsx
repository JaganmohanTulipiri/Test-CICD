import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PositiveButton from "../../../../components/PositiveButton";

import successTick from "../../../../assets/customIcons/success-tick.svg";
import {
   setUpdateUsers,
} from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const ManageUsersEditSuccessModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onClose } = useDisclosure();

  const manageUsersEditUsersResponse = useSelector(
    (state) => state?.schoolAdmin?.updateUsers
  );

  const manageUser = useSelector((state) => state.profile.manageUser);



  return (
    <>
      <Modal
        isOpen={manageUsersEditUsersResponse?.data?.code === 200}
        onClose={onClose}
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
                {manageUsersEditUsersResponse?.data?.message}
              </Text>
              <Box
                onClick={() => {
                  dispatch(setUpdateUsers(null));

                  navigate(manageUser?.previousPath);
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

export default ManageUsersEditSuccessModal;

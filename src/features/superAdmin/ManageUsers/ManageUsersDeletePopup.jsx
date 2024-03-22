import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  Image,
  useDisclosure,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDeletedAdminOrHelpDeskData,
  getSuperAdmins,
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import CustomDeleteIcon from "../customIcons/DeleteIcon.png";
import Ellipses from "../customIcons/Ellipse 277.svg";
import DeleteResponsePopup from "./DeleteResponsePopup";

const ManageUsersDeletePopup = (props) => {
  console.log("props in ManageUserDeletePopup", props);

  const dispatch = useDispatch();
  const token = useSelector((state) => state?.profile?.token);

  const [enablePopup, setEnablePopup] = useState(false);

  const getDeletedAdminUserResponse = useSelector(
    (state) => state?.superAdmin?.deleteAdminOrHelpDesk
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRemove = () => {
    console.log("Data required for Delete", props?.data);
    dispatch(
      getDeletedAdminOrHelpDeskData({ uuid: props?.data?.uuid, token: token })
    );
    onClose();
  };

  useEffect(() => {
    console.log(
      "getDeletedAdminUserResponse in useEffect()",
      getDeletedAdminUserResponse?.data?.status
    );
    if (getDeletedAdminUserResponse?.data?.status === "success") {
      console.log(
        "getDeletedAdminUserResponse",
        getDeletedAdminUserResponse?.data?.status
      );

      setEnablePopup(true);
      onClose();
      dispatch(getSuperAdmins({ token: token }));
    }
  }, [getDeletedAdminUserResponse]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} borderRadius={10} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0">
            <Flex>
              <Spacer />
            </Flex>
            <Stack spacing="2" p="4">
              <Box>
                <Center>
                  <Image src={Ellipses} boxSize="6rem"></Image>
                </Center>
                <Center>
                  <Image src={CustomDeleteIcon} marginTop={-20}></Image>
                </Center>
                <Center marginTop="6">
                  <Text alignContent="space-around" textStyle="h4">
                    Do you want to Delete?
                  </Text>
                </Center>
              </Box>
              <Center>
                <ButtonGroup gap="4" p="3" marginTop={4}>
                  <Button onClick={onClose}>Cancel</Button>

                  <Button
                    backgroundColor="#FF4040"
                    color="white"
                    onClick={() => {
                      handleRemove();
                    }}
                  >
                    Remove
                  </Button>
                </ButtonGroup>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>

      
    </>
  );
};

export default ManageUsersDeletePopup;

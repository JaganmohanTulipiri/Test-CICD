import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRemoveSchoolAdminFromSchool } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";
import CustomDeleteIcon from "../../customIcons/DeleteIcon.png";
import Ellipses from "../../customIcons/Ellipse 277.svg";
import WarningSymbol from "../../customIcons/WarningSymbol.jpg";
import AdminDeletionPopup from "./AdminDeletionPopup";

const SchoolAdminDeletion = (props) => {
  const updated_by = props.updated_by;
  const updater_role = props.updater_role;

  const dispatch = useDispatch();

  const token = useSelector((state) => state?.profile?.token);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const {
    isOpen: isOpenFirstModal,
    onOpen: onOpenFirstModal,
    onClose: onCloseFirstModal,
  } = useDisclosure();
  const {
    isOpen: isOpenSecondModal,
    onOpen: onOpenSecondModal,
    onClose: onCloseSecondModal,
  } = useDisclosure();

  const openSecondModal = () => {
    onCloseFirstModal();
    onOpenSecondModal();
  };

  const handleRemove = () => {
    console.log("props in schooladmin remove function", props);

    const schoolId = props.schoolId;

    const finalPayload = {
      user_uuid: props.admin_uuid,
      updater_role: selectedRole,
      updated_by: updated_by,
    };
    console.log("final payload for schoolId", finalPayload);
    dispatch(getRemoveSchoolAdminFromSchool({ token, schoolId, finalPayload }));
  };

  return (
    <>
      <Box>
        <Button onClick={onOpenFirstModal}>Delete</Button>
        <DeleteIcon marginLeft="-0.4rem" color="red" />
      </Box>

      <Modal
        isOpen={isOpenFirstModal}
        onClose={onCloseFirstModal}
        borderRadius={10}
        size="xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0">
            <Heading
              size="md"
              backgroundColor="#0081c8"
              height="4rem"
              color="white"
              p="5"
            >
              Remove School Administrator
            </Heading>
            <br></br>
            <Flex>
              <Spacer />
            </Flex>
            <Stack spacing="2" p="4">
              <Box>
                <Center>
                  <Image src={WarningSymbol} boxSize="3rem"></Image>
                </Center>
                <Center>
                  <Text color="red" marginTop={3}>
                    WARNING
                  </Text>
                </Center>

                <Center>
                  <Text alignContent="space-around">
                    All the data associated with 1 School will be Removed.
                  </Text>
                </Center>

                <Center>
                  <Text>This cannot be undone.</Text>
                </Center>
              </Box>
              <Center>
                <ButtonGroup gap="4" p="3" marginTop={4}>
                  <Button onClick={onCloseFirstModal}>Cancel</Button>
                  <Button
                    onClick={openSecondModal}
                    backgroundColor="#0081C8"
                    color="white"
                  >
                    Remove
                  </Button>
                </ButtonGroup>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenSecondModal}
        onClose={onCloseSecondModal}
        borderRadius={10}
        isCentered
      >
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
                  <Button onClick={onCloseSecondModal}>Cancel</Button>

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

      <AdminDeletionPopup card="schoolAdminDeletion" />
    </>
  );
};

export default SchoolAdminDeletion;

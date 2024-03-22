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
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeletedDistrict } from "../../../../store/slices/superAdminSlice/superAdminSlice";
import CustomDeleteIcon from "../../customIcons/DeleteIcon.png";
import Ellipses from "../../customIcons/Ellipse 277.svg";
import WarningSymbol from "../../customIcons/WarningSymbol.jpg";

const DistrictDeletion = (props) => {
  console.log("props of district deletion", props);
  const dispatch = useDispatch();
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

  const updated_by = props.updated_by;
  const updater_role = props.updater_role;
  const token = useSelector((state) => state?.profile?.token);

  const openSecondModal = () => {
    onCloseFirstModal();
    onOpenSecondModal();
  };

  const handleRemove = () => {
    console.log("handleRemove Called======", props);
    dispatch(
      getDeletedDistrict({
        uuid: props.districtId,
        body: { updated_by, updater_role },
        token: token,
      })
    );
    onCloseSecondModal();
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
              Remove District
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
                    All the data associated with 1 District will be Removed.
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
    </>
  );
};

export default DistrictDeletion;

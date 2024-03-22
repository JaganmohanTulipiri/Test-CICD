import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Input,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  Text,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import clipBoardIcon from "../Icons/writing-pad-clipboard-icon.svg";

const ConfirmTestData = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Link background="none" border="none" onClick={onOpen}>
        View Data
      </Link>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="9">
            <Stack spacing="2" marginTop="3">
              <Center>
                <Image src={clipBoardIcon} width="10" />
              </Center>
              <Center>
                <Text marginTop="3">Is the Test Data Ready?</Text>
              </Center>

              <Box>
                <ButtonGroup gap="4">
                  <Button onClick={onClose} marginTop="4" width="40" backgroundColor="#EEEEEE" borderRadius="2xl">No</Button>
                  <Button backgroundColor="#1890ff" color="white" marginTop="4" width="40" borderRadius="2xl">
                    Yes
                  </Button>
                </ButtonGroup>
              </Box>
              <Spacer />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfirmTestData;

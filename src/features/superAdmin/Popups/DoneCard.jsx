import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
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
import { useNavigate } from "react-router-dom";
import GreenTick from "../customIcons/greentick.png";

const DoneCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const navigate = useNavigate();

  const RedirectToWAAdmin = () => {
    navigate("/role/SuperAdmin/StatesPartners/WAAdmin");
  };
  return (
    <>
      <Button
        backgroundColor="#54B435"
        color="white"
        p="5"
        marginLeft="3rem"
        marginTop="1rem"
        borderRadius="2rem"
        onClick={onOpen}
      >
        {}
      </Button>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0">
            <Flex>
              <Spacer />
            </Flex>
            <Stack spacing="2" p="10">
              <Box>
                <Center>
                  <Image src={GreenTick} boxSize="7rem"></Image>
                </Center>
                <Center>
                  <b>
                    <Text marginTop={3}>Done</Text>
                  </b>
                </Center>
                <Box textAlign="center">
                  <Text marginTop="1rem">
                    State addition has been done successfully!
                  </Text>
                </Box>
                <Center>
                  <Button
                    onClick={RedirectToWAAdmin}
                    marginTop="2rem"
                    marginBottom="2rem"
                    width="10rem"
                    backgroundColor="#0081C8"
                    color="white"
                  >
                    Ok
                  </Button>
                </Center>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DoneCard;
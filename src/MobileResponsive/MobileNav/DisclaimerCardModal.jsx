import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ButtonGroup,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const DisclaimerCardModal = (props) => {
  const {
    disclaimerPopUpOpened,
    setDisclaimerPopUpOpened,
    loginDetails,
    setLoginDetails,
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        onClose={() => {
          setDisclaimerPopUpOpened(false);
          setLoginDetails({
            ...loginDetails,
            disclaimerAccepted: false,
          });

          onClose();
        }}
        isOpen={disclaimerPopUpOpened}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          margin="1rem"
          h={{ base: "25rem", md: "auto" }}
          overflow="scroll"
          className="example"
        >
          <ModalBody>
            <>
              <Center textColor="#0081C8" mt="6" mb="4">
                Disclaimer
              </Center>

              <Text>
                This system is restricted to authorized users in accordance with
                the GreenLight Fitness EULA. Any unauthorized access or use of
                the FitnessGram platform is a violation of GreenLight Fitness
                policy and may be a violation of law. The system may be
                monitored by the company for administrative and security
                purposes.
              </Text>
              <br />

              <Text>
                By clicking "Accept", you acknowledge that you have read and
                understand this notice and consent to the system monitoring for
                these purposes, otherwise click "Decline"
              </Text>

              <Flex
                justifyContent={{ base: "space-around", md: "center" }}
                gap={{ md: "5rem" }}
                mt="7"
                mb="4"
              >
                <Button
                  rounded="md"
                  border="1px solid #0081C8"
                  bgColor="#0081C8"
                  textColor="#F5F5F5"
                  onClick={() => {
                    setLoginDetails({
                      ...loginDetails,
                      disclaimerAccepted: true,
                    });

                    setDisclaimerPopUpOpened(false);
                    onClose();
                  }}
                >
                  Accept
                </Button>

                <Button
                  rounded="md"
                  border="1px solid #F5F5F5"
                  bgColor="#F5F5F5"
                  textColor="#282828"
                  onClick={() => {
                    setLoginDetails({
                      ...loginDetails,
                      disclaimerAccepted: false,
                    });

                    setDisclaimerPopUpOpened(false);

                    onClose();
                  }}
                >
                  Decline
                </Button>
              </Flex>
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DisclaimerCardModal;

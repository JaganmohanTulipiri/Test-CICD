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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

function DisclaimerCard(props) {
  const { disclaimerSubmit, checboxChecked, checkboxClicked } = props;

  const disclaimerFunction = (value) => {
    disclaimerSubmit(value);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Button onClick={onOpen}>Trigger modal</Button> */}

      <Modal
        onClose={() => {
          disclaimerFunction(false);

          onClose;
        }}
        isOpen={checboxChecked}
        isCentered
      >
        <ModalOverlay />
        <ModalContent  margin="1rem" h={{base:"25rem", md:"auto"}} overflow="scroll" className="example">
          <ModalBody>
            <>
              <div className="text-center">
                <h1 className="text-[#0081C8] mt-6 mb-4 md:text-xl lg:text-2xl font-bold xl:text-2xl xl:mb-3">
                  Disclaimer
                </h1>
              </div>
              <p className="leading-6">
                This system is restricted to authorized users in accordance with
                the GreenLight Fitness EULA. Any unauthorized access or use of
                the FitnessGram platform is a violation of GreenLight Fitness
                policy and may be a violation of law. The system may be
                monitored by the company for administrative and security
                purposes.
              </p>
              <br />
              <p className="leading-6">
                By clicking "Accept", you acknowledge that you have read and
                understand this notice and consent to the system monitoring for
                these purposes, otherwise click "Decline"{" "}
              </p>

              <div className="mt-5 flex justify-around items-center  mb-8 md:w-[100%] xl:w-[30vw] 2xl:w-[20vw]">
                <Button
                  className="border-1 rounded-md text-[#F5F5F5] px-12 py-2 bg-[#0081C8]"
                  onClick={() => {
                    disclaimerFunction(true);
                    onClose;
                  }}
                >
                  Accept
                </Button>
                <Button
                  className="border-1 rounded-md text-[#282828] px-12 py-2 bg-[#F5F5F5]"
                  onClick={() => {
                    disclaimerFunction(false);
                    onClose;
                  }}
                >
                  Decline
                </Button>
              </div>
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DisclaimerCard;

import { AddIcon } from "@chakra-ui/icons";
import {
  Box, Flex, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay, Spacer,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import TestDistrictTable from "../../Licenses/TestDistrictsTable";
import AddSchoolToDistrictPopup from "./AddSchoolToDistrict";

const AddSchooltoDistrictMain = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Link background="none" border="none" onClick={onOpen}>
        Add School to License
      </Link>
      <AddIcon
        marginLeft="0.4rem"
        backgroundColor="#0081c8"
        color="white"
        borderRadius="2rem"
        fontSize="1.1rem"
        p="0.3rem"
        marginTop="1"
        marginBottom="2rem"
      />

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent h="50rem">
          <ModalCloseButton />
          <ModalBody p="9">
            <Text marginBottom="5" textStyle="h1">
              Add School to District Name
            </Text>

            <Link to="">
              Show Filters
              <AddIcon
                marginLeft="0.4rem"
                backgroundColor="#0081c8"
                color="white"
                marginBottom="0.2rem"
                borderRadius="2rem"
                fontSize="1.3rem"
                p={"0.3rem"}
              />
            </Link>
            <Flex>
              <Spacer />
              <Box p="5">
                <AddSchoolToDistrictPopup/>
              </Box>
            </Flex>

            <TestDistrictTable />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSchooltoDistrictMain;

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
import { useDispatch, useSelector } from "react-redux";

import PositiveButton from "../../../../components/PositiveButton";

import successTick from "../../../../assets/customIcons/success-tick.svg";
import {  setRequestToAddAdminForSchool } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const AddSuccessModal = (props) => {

    const {setAddAdminModal} = props
  const dispatch = useDispatch();
  const { onClose } = useDisclosure();

  const RequestToAddAdminForSchool = useSelector((state) => state?.schoolAdmin?.RequestToAddAdminForSchool)

  return (
    <>
      <Modal
        isOpen={RequestToAddAdminForSchool?.data?.code === 200}
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
                {RequestToAddAdminForSchool?.data?.message}
              </Text>
              <Box
                onClick={() => {
                  dispatch(setRequestToAddAdminForSchool(null));
                  setAddAdminModal(false)
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

export default AddSuccessModal;

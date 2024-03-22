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
import {  setAddTeacherToClass } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const AddteacherSuccessModal = (props) => {

    const {setAddTeacherModal} = props
  const dispatch = useDispatch();
  const { onClose } = useDisclosure();

  const AddTeacherToClass = useSelector((state) => state?.schoolAdmin?.AddTeacherToClass)

  return (
    <>
      <Modal
        isOpen={AddTeacherToClass?.data?.code === 200}
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
                {AddTeacherToClass?.data?.message}
              </Text>
              <Box
                onClick={() => {
                  dispatch(setAddTeacherToClass(null));
                  setAddTeacherModal(false)
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

export default AddteacherSuccessModal;

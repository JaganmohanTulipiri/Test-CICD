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
import { getGetMappingObjectList, setRemoveMappingObjects } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const DeleteMappingSuccessModal = (props) => {

    const {setActiveTab} = props
  const dispatch = useDispatch();
  const { onClose } = useDisclosure();

  const removeMappingObjectsRes = useSelector(
    (state) => state?.schoolAdmin?.removeMappingObjects
  );

  const token = useSelector(state=>state?.profile?.token)

  return (
    <>
      <Modal
        isOpen={removeMappingObjectsRes?.data?.code === 200}
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
                {removeMappingObjectsRes?.data?.message}
              </Text>
              <Box
                onClick={() => {
                  dispatch(setRemoveMappingObjects(null));
                  dispatch(getGetMappingObjectList({ token }));
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

export default DeleteMappingSuccessModal;

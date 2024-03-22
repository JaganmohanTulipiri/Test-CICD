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
  ModalFooter,
} from "@chakra-ui/react";
import PositiveButton from "../../../../components/PositiveButton";
import successTick from "../../../../assets/customIcons/success-tick.svg";
import { useDispatch, useSelector } from "react-redux";

import { setRemoveAdminFromDistrict } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

export default function RemoveDistrictAdminSuccessModal() {
  const dispatch = useDispatch();

  const removeAdminFromDistrict = useSelector(
    (state) => state?.schoolAdmin?.removeAdminFromDistrict
  );

  const { onClose } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={removeAdminFromDistrict?.data?.code === 200}
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
                {removeAdminFromDistrict?.data?.message}
              </Text>
              <Box
                onClick={() => {
                  dispatch(setRemoveAdminFromDistrict(null));
                }}
              >
                <PositiveButton text={"OK"} />
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

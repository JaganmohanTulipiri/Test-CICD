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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PositiveButton from "../../../../components/PositiveButton";

import successTick from "../../../../assets/customIcons/success-tick.svg";
import {
  setAddUpdateImportSetting,
  setCreateMappingObject,
  setUpdateUsers,
} from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const ImportSettingsSuccessModal = (props) => {
  const { setActiveTab } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onClose, onOpen } = useDisclosure();

  const importSettingsData = useSelector(
    (state) => state?.schoolAdmin?.addUpdateImportSettings
  );

  console.log(importSettingsData, "importSettingsDataimportSettingsData");

  const manageUser = useSelector((state) => state.profile.manageUser);

  const clickToClose = () => {
    dispatch(setAddUpdateImportSetting(null));
    onClose();
  };

  return (
    <>
      <Modal isOpen={onOpen} onClose={clickToClose} isCentered>
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
                {importSettingsData?.data?.response}
              </Text>
              <Box
                onClick={() => {
                  clickToClose();
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

export default ImportSettingsSuccessModal;

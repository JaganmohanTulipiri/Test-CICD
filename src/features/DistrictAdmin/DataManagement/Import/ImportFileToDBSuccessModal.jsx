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
import { setUploadCsvToDB,
} from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const ImportFileToDBSuccessModal = (props) => {
  const { setActiveTab } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onClose, onOpen } = useDisclosure();

  const uploadCsvToDBRes = useSelector(
    (state) => state?.schoolAdmin?.uploadCsvToDB
  );

  console.log(uploadCsvToDBRes, "uploadCsvToDBResuploadCsvToDBRes");

  const manageUser = useSelector((state) => state.profile.manageUser);

  const clickToClose = () => {
    dispatch(setUploadCsvToDB(null));
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
                {uploadCsvToDBRes?.data?.message}
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

export default ImportFileToDBSuccessModal;

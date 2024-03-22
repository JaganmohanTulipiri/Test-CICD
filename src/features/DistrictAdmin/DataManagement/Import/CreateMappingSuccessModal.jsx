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
import { setCreateMappingObject, setUpdateUsers } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const CreateMappingSuccessModal = (props) => {

    const {setActiveTab} = props
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onClose } = useDisclosure();

  const createMappingObjectRes = useSelector(
    (state) => state?.schoolAdmin?.createMappingObject
  );

  console.log(createMappingObjectRes,"createMappingObjectRescreateMappingObjectRes")


  const manageUser = useSelector((state) => state.profile.manageUser);

  return (
    <>
      <Modal
        isOpen={createMappingObjectRes?.data?.code === 200}
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
                {createMappingObjectRes?.data?.message}
              </Text>
              <Box
                onClick={() => {
                  dispatch(setCreateMappingObject(null));

                  navigate(manageUser?.previousPath);

                  // setActiveTab(2)
                  // dispatch(setActiveTabVal(2))
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

export default CreateMappingSuccessModal;

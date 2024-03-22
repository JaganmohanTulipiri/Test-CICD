


import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Text,
  Flex,
  Button,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import successTick from "../../../../assets/customIcons/success-tick.svg";

import { setAddStudentToClassApiResponse } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";
import PositiveButton from "../../../../components/PositiveButton";
import { setUpdateDistrictForDistrictAdminResponse } from "../../../../DistrictAdminApis/districtAdminSlice";

const UpdateDistrictSuccessModal = (props) => {


  const {isDistrcitUpdatedSuccess, setIsDistrcitUpdatedSuccess } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  const greenLitePath = useSelector(
    (state) => state?.schoolAdmin?.greenLitePath
  );

  const addStudentToClassApiResponse = useSelector(
    (state) => state?.schoolAdmin?.addStudentToClassApiResponse
  );

  const requestToAddAdmin = useSelector(
    (state) => state?.schoolAdmin?.requestToAddAdmin
  );

  const { onOpen, onClose } = useDisclosure();

  const location = useLocation();



  const updateDistrictForDistrictAdminResponse = useSelector((state) => state?.districtAdmin?.updateDistrictForDistrictAdminResponse)



  // const currentPath = location.pathname;

  return (
    <>
      <Modal
        isOpen={isDistrcitUpdatedSuccess}
        onClose={() => {
            setIsDistrcitUpdatedSuccess(false);
          dispatch(setUpdateDistrictForDistrictAdminResponse(null));
          onClose;
        }}
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
                {updateDistrictForDistrictAdminResponse?.data?.message}
              </Text>
              <Box
                onClick={() => {
                    setIsDistrcitUpdatedSuccess(false);

                  dispatch(setUpdateDistrictForDistrictAdminResponse(null));
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

export default UpdateDistrictSuccessModal;

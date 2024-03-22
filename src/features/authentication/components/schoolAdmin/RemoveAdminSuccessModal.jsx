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
import PositiveButton from "../../../../components/PositiveButton";
import successTick from "../../../../assets/customIcons/success-tick.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAddResCode, setRemoveSchoolAdminFromSchool, setResponseCode } from "./schoolAdminSlice";

export default function RemoveAdminSuccessModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeSchoolAdminFromSchoolDeleteResponse = useSelector((state) => state?.schoolAdmin?.removeSchoolAdminFromSchool)
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);


  const params = useParams()

  console.log(params, "iam paramsss")




  const { onOpen, onClose } = useDisclosure();



  return (
    <>
  

      <Modal isOpen={ removeSchoolAdminFromSchoolDeleteResponse?.data?.code === 200 } onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Flex direction="column" gap="6" marginTop='2rem' alignItems="center">
              <Box boxSize="8">
                <img src={successTick} />
              </Box>
              <Text textStyle="h1" color="green" textAlign="center">
                {removeSchoolAdminFromSchoolDeleteResponse?.data?.message}
              </Text>
              <Box
                onClick={() => {
               
                  dispatch(setRemoveSchoolAdminFromSchool(null))

                    navigate(`/role/${selectedRole}/school/${params?.schoolId}`)
                 
                
                }}
              >
                <PositiveButton text={"OK"} />
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={clickToClose}>
                Close
              </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>


    </>
  );
}

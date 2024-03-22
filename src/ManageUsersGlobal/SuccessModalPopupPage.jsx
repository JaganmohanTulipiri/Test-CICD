import React, { useEffect } from "react";
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
} from "@chakra-ui/react";
// import successTick from "../../../../assets/customIcons/success-tick.svg";
import successTick from "../assets/customIcons/success-tick.svg";
import PositiveButton from "./PositiveButton";
import { useDispatch, useSelector } from "react-redux";
import { setResponseCode } from "../features/teacher/teacherSlice";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessModalPopupPage = (props) => {
    
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  console.log(location.pathname, "from  modal");

  const currentPath = location.pathname;

  const responseCode = useSelector((state) => state?.teacher?.responseCode);

  
  console.log(responseCode,"from success modal")
  const isLoading = useSelector((state) => state?.teacher?.isLoading);
  const { code, successModal, setSuccessModal, message,params } = props;


  console.log(params,"successsssss mkodal")

  const eventId= params?.eventId
  const studentId=params?.studentId
  const challengeId=params?.challengeId

  const { onClose } = useDisclosure();

  //   useEffect(() => {
  //     setTimeout(() => dispatch(setResponseCode(null)), 4000);

  //   },[]);
  return (
    <Modal
      size="xs"
      onClose={() => setSuccessModal(false)}
      isOpen={responseCode == 200}
      isCentered
      useInert={true}
      borderColor="transparent"
    >
      <ModalOverlay />
      <ModalContent p="4">
        {/* <ModalCloseButton
          onClick={() => {
            dispatch(setResponseCode(null));
            navigate("/role/teacher");
          }}
        /> */}
        <ModalBody>
          <Flex direction="column" gap="6" alignItems="center">
            <Text textStyle="h1" color="green" textAlign="center">
              {message}
            </Text>
            <Box boxSize="8">
              <img src={successTick} />
            </Box>
            <Text textStyle="h1" color="green" textAlign="center">
              Successfully
            </Text>
            <Box
              onClick={() => {
                dispatch(setResponseCode(null));
                if (currentPath.includes("al")) {
                  navigate("/role/teacher/ActivityLog");
                } else if (currentPath.includes("ag")) {
                  navigate("/role/teacher/ActivityGramEvent");
                } else if(currentPath.includes("studentroster")){
                  navigate(`/role/teacher/studentroster/${eventId}/student/${studentId}`);
                }else if(currentPath.includes("storedata")){
                  navigate(`/role/teacher/al-storedata/${challengeId}`);
                }
              }}
            >
              <Box
                as="button"
                height="36px"
                width="96px"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                borderRadius="18px"
                fontSize="14px"
                fontWeight="normal"
                bg="green"
                color="white"
                fontFamily="poppins"
              >
                OK
              </Box>{" "}
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModalPopupPage

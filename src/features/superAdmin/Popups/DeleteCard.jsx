import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Image, Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getDeletedDistrict
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import CustomDeleteIcon from "../customIcons/DeleteIcon.png";
import Ellipses from "../customIcons/Ellipse 277.svg";

const DeleteCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const cardData = props.card;

  const { isDeleteSucessModalOpen, setIsDeleteSucessModalOpen } = props;

  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);
  const [ssoconfigPopupOpen, setSSOConfigPopupOpen] = useState(false);

  console.log("==========delete card========== in DeleteCard", props);

  const { isDeleteButtonClicked, setIsDeleteButtonClicked } = props;

  // const uuid = props.id;
  const updated_by = props.updated_by;
  const updater_role = props.updater_role;
  const token = useSelector((state) => state?.profile?.token);
  const selectedRole = useSelector((state) => state?.profile?.selectedRole);

  console.log("cardData============DeleteCard============", cardData);
  console.log(
    "In DeleteCard=======================districtId",
    props.districtId
  );
  console.log("In DeleteCard=======================schoolId", props.schoolId);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteSSOConfigByIdAPIResponse = useSelector(
    (state) => state?.superAdmin?.deleteSSOConfig
  );
  const deleteStateAPIResponse = useSelector(
    (state) => state?.superAdmin?.deleteState
  );
  const deletedDistrictResponse = useSelector(
    (state) => state.superAdmin?.deleteDistrict
  );

  const deleteDistrictAdminResponse = useSelector(
    (state) => state?.superAdmin?.deleteAdminUserResponse
  );

  const [isDeletedSuccess, setIsDeletedSuccess] = useState(false);

  console.log(deletedDistrictResponse, "deletedDistrictResponse");

  // const handleDelete = () => {
  //   if (cardData === "statespartners") {
  //     dispatch(DeleteStateById({ uuid: props.uuid, token: token }));
  //   } else if (cardData === "removeDistrict") {
  //     console.log("Into else condition=========cardData", cardData);
  //     if (props.districtId !== "") {
  //       dispatch(
  //         getDeletedDistrict({
  //           uuid: props.districtId,
  //           body: { updated_by, updater_role },
  //           token: token,
  //         })
  //       );
  //     } else {
  //       dispatch(
  //         getDeletedAdminUser({
  //           districtId: props.districtId,
  //           body: { updated_by, updater_role, user_uuid: props.schoolId },
  //           token: token,
  //         })
  //       );
  //     }
  //   } else {
  //     dispatch(getDeleteSSOConfigById({ uuid: props.uuid, token: token }));
  //   }
  // };

  const handleRemove = () => {
    console.log("handleRemove Called======");
    dispatch(
      getDeletedDistrict({
        uuid: props.districtId,
        body: { updated_by, updater_role },
        token: token,
      })
    );
    // setIsDeletedSuccess(false)
  };

  // useEffect(() => {
  //   if (deleteStateAPIResponse?.status === 200) {
  //     // setIsSuccessPopUpOpen(true);
  //     // onClose();
  //     navigate(`/role/${selectedRole}/StatesPartners`);
  //   }
  // }, [deleteStateAPIResponse]);

  useEffect(() => {
    if (deletedDistrictResponse?.data?.status === "success") {
      setIsDeletedSuccess(false);
    }
  }, [deletedDistrictResponse]);

  console.log("deletedDistrictResponse", deletedDistrictResponse);

  // useEffect(() => {
  //   if (deleteDistrictAdminResponse?.data?.status === "success") {
  //     // setIsSuccessPopUpOpen(true);
  //     // onClose();
  //   }
  // }, [deleteDistrictAdminResponse]);

  // useEffect(() => {
  //   if (deleteSSOConfigByIdAPIResponse?.status === 200) {
  //     setSSOConfigPopupOpen(true);
  //     // onClose();
  //   }
  // }, [deleteSSOConfigByIdAPIResponse]);

  // console.log(
  //   "====deleteSSOConfigByIdAPIResponse",
  //   deleteSSOConfigByIdAPIResponse
  // );

  console.log("===deletedDistrictResponse", deletedDistrictResponse);

  return (
    <>
    {cardData === "removeDistrict" ?  <Modal
        isOpen={isDeleteSucessModalOpen}
        onClose={() => {
          setIsDeleteSucessModalOpen(false);
        }}
        borderRadius={10}
        size="md"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0">
            <Flex>
              <Spacer />
            </Flex>
            <Stack spacing="2" p="4">
              <Box>
                <Center>
                  <Image src={Ellipses} boxSize="6rem"></Image>
                </Center>
                <Center>
                  <Image src={CustomDeleteIcon} marginTop={-20}></Image>
                </Center>
                <Center marginTop="6">
                  <Text alignContent="space-around" textStyle="h4">
                    Do you want to Delete?
                  </Text>
                </Center>
              </Box>
              <Center>
                <ButtonGroup gap="4" p="3" marginTop={4}>
                  <Button onClick={() => setIsDeleteSucessModalOpen(false)}>
                    Cancel
                  </Button>

                  <Button
                    backgroundColor="#FF4040"
                    color="white"
                    onClick={() => {
                      setIsDeleteSucessModalOpen(false);
                      handleRemove();
                    }}
                  >
                    Remove
                  </Button>
                </ButtonGroup>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal> : ""}
     

      {/* <SuccessfulDeletionPopup /> */}
    </>
  );
};

export default DeleteCard;

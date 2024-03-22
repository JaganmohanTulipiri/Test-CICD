import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setManageUser, setPreviousPath } from "../../../../store/slices/profileSlice";
import {
  getAdminToDistrict,
  getTeachersAndSchoolsByDistrict,
} from "../../../../store/slices/superAdminSlice/superAdminSlice";
import { setManageUsersSelectedDropdownText } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

const AddDistrictAdminPopup = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const finalRef = React.useRef(null);

  const distrcitIDForDistrict = useSelector(
    (state) => state?.superAdmin?.distrcitIDForDistrict
  );
  const teachersAndSchoolsResponse = useSelector(
    (state) => state?.superAdmin?.TeachersAndSchoolsByDistricts?.data?.response
  );
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const loginResponse = useSelector((state) => state?.profile?.user);
  const authToken = useSelector((state) => state?.profile?.token);
  const assignAdminResponse = useSelector(
    (state) => state?.superAdmin?.assignAdminToDistrictResponse
  );

  const [assignAdmin, setAssignAdmin] = useState("");
  const [lastName, setLastName] = useState("");
  const [storeUUID, setStoreUUID] = useState({});
  const [lastNamesData, setLastNamesData] = useState([]);

  const districtId = distrcitIDForDistrict?.uuid;

  const getLastNameUUID = (list) => {
    let storeUUIDsList = [];
    for (let i in list) {
      storeUUIDsList[list[i].uuid] = list[i].last_name;
    }
    setStoreUUID(storeUUIDsList);
  };

  const getUUIDForLastName = (lastName) => {
    let currentUUID = "";
    getLastNameUUID(teachersAndSchoolsResponse);
    for (let i in storeUUID) {
      if (storeUUID[i] === lastName) {
        currentUUID = i;
        break;
      }
    }
    return currentUUID;
  };

  const handleLastNameChange = (option) => {
    setLastName(option.value);
  };

  const handleUserAddition = () => {
    if (selectedRole === "stateAdmin") {
      dispatch(
        setManageUser({
          userType: "districtAdmin",
          formTitle: `Add District Administrator`,
          previousPath: location.pathname,
        })
      );

      navigate(`/role/${selectedRole}/AddUser`, {
        state: { role: "districtAdmin" },
      });

      dispatch(setManageUsersSelectedDropdownText(""));
    } else {
      dispatch(
        setManageUser({
          userType: "districtAdmin",
          formTitle: `Add District Administrator`,
          previousPath: location.pathname,
        })
      );

      navigate("/role/SuperAdmin/Districts/AddUser", {
        state: {
          districtId: districtId,
        },
      });
      dispatch(setPreviousPath(location.pathname))
    }
  };

  const handleSubmit = () => {
    const uuid = getUUIDForLastName(lastName);
    console.log("uuid of the lastname", uuid);
    const finalData = {
      user_uuid: uuid,
      updated_by: loginResponse?.response?.uuid,
      updater_role: selectedRole,
    };
    dispatch(
      getAdminToDistrict({
        body: finalData,
        token: authToken,
        districtId: districtId,
      })
    );
  };

  useEffect(() => {
    dispatch(
      getTeachersAndSchoolsByDistrict({
        districtId: distrcitIDForDistrict?.uuid,
        token: authToken,
      })
    );
  }, []);

  useEffect(() => {
    setAssignAdmin(assignAdminResponse);
  }, [assignAdminResponse]);

  useEffect(() => {
    if (assignAdmin?.data?.status === "success") {
      onClose();
    }
  }, [assignAdmin]);

  useEffect(() => {
    let lastNamesList = [];
    for (let i in teachersAndSchoolsResponse) {
      lastNamesList.push({
        value: teachersAndSchoolsResponse[i]["last_name"],
        label: teachersAndSchoolsResponse[i]["last_name"],
      });
    }
    setLastNamesData(lastNamesList);
  }, [teachersAndSchoolsResponse]);

  return (
    <>
      <Link background="none" border="none" onClick={onOpen}>
        <Button color="black">Add Administrator</Button>
      </Link>
      <AddIcon
        marginLeft="-0.4rem"
        backgroundColor="#0081c8"
        color="white"
        borderRadius="2rem"
        fontSize="1.1rem"
        p="0.3rem"
      />

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="9">
            <Text color="#0081c8" textStyle="h4">
              Add District Administrator
            </Text>

            <Flex>
              <Spacer />
              <Box>
                <Button color="black" onClick={handleUserAddition}>
                  Add a new user
                </Button>
                <AddIcon
                  marginLeft="-0.4rem"
                  backgroundColor="#0081c8"
                  color="white"
                  borderRadius="2rem"
                  fontSize="1.1rem"
                  p="0.3rem"
                />
              </Box>
            </Flex>
            <Stack spacing="2" marginTop="3">
              <Text className="color-black mr-10">User Last Name:</Text>

              <Select
                options={lastNamesData}
                onChange={handleLastNameChange}
              ></Select>
              <Text marginRight="20">At District</Text>
              <Input
                type="text"
                marginBottom="5"
                backgroundColor="#F5F9FF"
                border="none"
                name="districtName"
                value={props.districtName}
              />
              <Spacer />

              <Center>
                <ButtonGroup gap="4">
                  <Button onClick={onClose}>Cancel</Button>
                  <Button
                    backgroundColor="#1890ff"
                    color="white"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </ButtonGroup>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDistrictAdminPopup;

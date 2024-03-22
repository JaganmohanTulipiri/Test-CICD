import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addState } from "../../../store/slices/superAdminSlice/superAdminSlice";
import DoneCard from "../Popups/DoneCard";
import CreateSuccessPopup from "./CreateSuccessPopup";

const CreateStatePartner = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.profile?.token);
  const loginResponse = useSelector((state) => state?.profile?.user);
  const userRole = useSelector((state) => state.profile.selectedRole);

  const navigate = useNavigate("");

  console.log("UserRole=====================", userRole);
  const [stateData, setStateData] = useState({
    state_name: "",
    license_status: "",
    type: "",
    created_by: "",
    creater_role: "",
    is_active: "",
    state_code: "",
  });
  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);

  const handleChange = (e) => {
    setStateData({
      ...stateData,
      [e.target.name]: e.target.value,
      created_by: loginResponse?.response?.uuid,
      creater_role: userRole,
    });
  };

  const getAddedStateResponse = useSelector(
    (state) => state?.superAdmin?.addedState
  );

  const handleSubmit = () => {
    console.log("creator role========", stateData.creator_role);
    console.log(stateData);
    try {
      dispatch(addState({ body: stateData, token: token }));
      console.log("CreateStatePartner==============stateData", stateData);
      console.log(
        "getAddedStateResponse==============Response after dispatch",
        getAddedStateResponse
      );
    } catch (error) {
      console.log("Could not add state");
    }
  };

  useEffect(() => {
    if (getAddedStateResponse?.data?.code === 200) {
      setIsSuccessPopUpOpen(true);
    } else {
      console.log(getAddedStateResponse);
    }
  }, [getAddedStateResponse]);

  useEffect(() => {
    setIsSuccessPopUpOpen(true);
  }, []);

  return (
    <>
      <Flex>
        <Box>
          <Text textStyle="h1">CREATE STATE/PARTNER</Text>
        </Box>
        <Spacer />
      </Flex>
      <Divider marginTop="3" borderColor="gray" />

      <Flex p="4">
        <Box flex="1">
          <Text className="color-black mr-20">
            Name (use abbrevation for states)*:
          </Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            placeholder="Enter State/Partner Name"
            border="none"
            width="20rem"
            name="state_name"
            value={stateData.state_name}
            onChange={handleChange}
          />

          <Text>Type:</Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="20rem"
            border="none"
            name="type"
            value={stateData.type}
            onChange={handleChange}
          >
            <option value="partner">Partner</option>
            <option value="state">State</option>
          </Select>
        </Box>
        <Spacer />
      </Flex>

      <Button
        backgroundColor="#54B435"
        color="white"
        p="5"
        marginLeft="3rem"
        marginTop="1rem"
        borderRadius="2rem"
        onClick={handleSubmit}
      >
        Create State/Partner
      </Button>
      <CreateSuccessPopup
        isSuccessPopUpOpen={isSuccessPopUpOpen}
        setIsSuccessPopUpOpen={setIsSuccessPopUpOpen}
      />
    </>
  );
};

export default CreateStatePartner;

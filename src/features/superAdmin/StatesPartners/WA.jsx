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
import { useLocation, useNavigate } from "react-router-dom";
import { updateState } from "../../../store/slices/superAdminSlice/superAdminSlice";
import DeleteCard from "../Popups/DeleteCard";
import UpdateStatesPopup from "./UpdateStatesPopup";
import WAAdmin from "./WAAdmin";

const WA = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const token = useSelector((state) => state?.profile?.token);
  const loginResponse = useSelector((state) => state?.profile?.user);
  const userRole = useSelector((state) => state.profile.selectedRole);

  const [stateData, setStatesData] = useState(state?.data);
  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);

  console.log("State Data=================", stateData);

  const handleChange = (e) => {
    setStatesData({ ...stateData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const UpdateStatesAPIResponse = useSelector(
    (state) => state?.superAdmin?.updatedState
  );

  const handleSave = () => {
    console.log("handleSave function==============", stateData);
    dispatch(updateState({ token: token, body: stateData }));
  };

  useEffect(() => {
    if (UpdateStatesAPIResponse?.data?.status === "success") {
      setIsSuccessPopUpOpen(true);
    } else {
      console.log(UpdateStatesAPIResponse);
    }
  },[UpdateStatesAPIResponse]);

  return (
    <>
      <Flex>
        <Box>
          <Text textStyle="h4">WA</Text>
        </Box>
        <Spacer />
        <DeleteCard uuid={stateData?.uuid} card="statespartners" />
      </Flex>
      <Divider marginTop="1" borderColor="gray" p="1" />

      <Flex marginTop="3">
        <Box flex="1">
          <Text className="color-black mr-20">
            Name (use abbrevation for states)*:
          </Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            placeholder="WA"
            border="none"
            width="20rem"
            name="state_name"
            value={stateData?.state_name}
            onChange={handleChange}
          />

          <Text className="color-black mr-20">Type:</Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="20rem"
            border="none"
            name="type"
            value={stateData?.type}
            onChange={handleChange}
          >
            <option value="partner">Partner</option>
            <option value="state">State</option>
          </Select>

          <Text className="color-black mr-20 mt-8">4-Digit Code:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            className="rounded-lg h-8 mb-5"
            placeholder="zqMG"
            border="none"
            width="20rem"
            name="state_code"
            value={stateData?.state_code}
            onChange={handleChange}
          />
        </Box>
      </Flex>
      <Button
        backgroundColor="#54B435"
        color="white"
        p="5"
        marginLeft="3rem"
        marginTop="1rem"
        borderRadius="2rem"
        marginBottom="1rem"
        width="7rem"
        onClick={handleSave}
      >
        Save
      </Button>
      <Divider borderColor="gray" />

      <WAAdmin />
      <UpdateStatesPopup
        isSuccessPopUpOpen={isSuccessPopUpOpen}
        setIsSuccessPopUpOpen={setIsSuccessPopUpOpen}
      />
    </>
  );
};

export default WA;

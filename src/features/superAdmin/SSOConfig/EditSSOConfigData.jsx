import {
  Box,
  Button,
  Center,
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
import { getUpdatedSSOConfigById, setUpdatedSSOConfigById } from "../../../store/slices/superAdminSlice/superAdminSlice";
import DeleteCard from "../Popups/DeleteCard";
import OAuth2 from "./OAuth2";
import SSOConfigSuccessPopup from "./SSOConfidSuccessPopup";
import WSFederation from "./WSFederation";

const EditSSOConfigData = () => {
  const { state } = useLocation();

  const { isSuccessPopUpOpen, setIsSuccessPopUpOpen } = useState(false);

  console.log("State Data in EditSSOConfigData", state.data);

  const uuid = state.data.uuid;

  const [ssoconfig, setSSOConfig] = useState(state.data);
  const [currentScreen, setCurrentScreen] = useState(
    state.data.authorization_protocol
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const token = useSelector((state) => state?.profile?.token);
  const loginResponse = useSelector((state) => state?.profile?.user);

  const updateSSOConfigResponse = useSelector(
    (state) => state?.superAdmin?.getUpdateSSOConfig
  );

  var finalFormData = [];

  const getFormData = (formData) => {
    finalFormData = formData;
  };

  const handleChange = (e) => {
    setSSOConfig({
      ...ssoconfig,
      [e.target.name]: e.target.value,
      updated_by: loginResponse?.response?.uuid,
    });
  };

  const handleSave = () => {
    console.log("Final Form Data", finalFormData);
    dispatch(
      getUpdatedSSOConfigById({
        body: finalFormData,
        id: finalFormData.uuid,
        token: token,
      })
    );
  };

 

  return (
    <>
      <Flex>
        <Box>
          <Text textStyle="h4">SSO CONFIGURATIONS</Text>
        </Box>

        <Spacer />
        <Box>
          <DeleteCard uuid={uuid} card="ssoconfig"/>
        </Box>
      </Flex>
      <Divider borderColor="gray" />

      <Flex marginTop="6">
        <Box marginRight="24rem">
          <Text className="color-black mr-20">Authorization Protocol*:</Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="30rem"
            border="none"
            value={currentScreen}
            onChange={(e) => setCurrentScreen(e.target.value)}
          >
            <option value="ws-fed">WS-Federation</option>
            <option value="oauth2">OAuth2</option>
            <option value="openid">OpenID Connect</option>
          </Select>
          <Text className="color-black mr-20 mt-6">Configuration Name*:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            rounded="lg"
            w="30rem"
            marginBottom="1rem"
            border="none"
            name="configuration_name"
            value={ssoconfig.configuration_name}
            onChange={handleChange}
          />
          <Text className="color-black mr-20 mt-6">District(s)*</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            rounded="lg"
            w="30rem"
            marginBottom="1rem"
            border="none"
            name="districts"
            value={ssoconfig.districts}
            onChange={handleChange}
          />
        </Box>

        {currentScreen === "ws-fed" ? (
          <WSFederation ssoconfigData={ssoconfig} func={getFormData} />
        ) : currentScreen === "oauth2" || "openid" ? (
          <OAuth2 ssoconfigData={ssoconfig} func={getFormData} />
        ) : (
          ""
        )}
      </Flex>
      <Center marginTop="4rem">
        <Button
          backgroundColor="#19A617"
          color="white"
          width="8rem"
          borderRadius="3xl"
          onClick={handleSave}
        >
          Save
        </Button>
      </Center>
      <SSOConfigSuccessPopup />
    </>
  );
};

export default EditSSOConfigData;

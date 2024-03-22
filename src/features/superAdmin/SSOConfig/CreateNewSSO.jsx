import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNewSSOConfig } from "../../../store/slices/superAdminSlice/superAdminSlice";
import OAuth2 from "./OAuth2";
import SSOSuccessPopup from "./SSOSuccessPopup";
import WSFederation from "./WSFederation";

const CreateNewSSO = () => {
  const [currentScreen, setCurrentScreen] = useState("ws-fed");

  const navigate = useNavigate();

  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state?.profile?.token);
  const loginResponse = useSelector((state) => state?.profile?.user);
  const [errors, setErrors] = useState({});

  const addSSOConfigResponse = useSelector(
    (state) => state?.superAdmin?.newSSOConfig
  );

  const [ssoconfig, setSSOConfig] = useState({
    authorization_protocol: currentScreen,
    configuration_name: "",
    districts: "",
    districts_url: "",
    issuer: "",
    authorization_url: "",
    token_url: "",
    user_info_http_type: "",
    user_info_response_type: "",
    user_id_property: "",
    fitness_gram_sso_field: "",
    district_id_property: "",
    Json_web_key_set_url: "",
    url_path: "",
    client_id: "",
    client_secret: "",
    response_type: "",
    response_mode: "",
    scope: "",
    enable_state: "1",
    enable_nonce: "0",
    authentication_type: "",
    caption: "",
    metadata_url: "",
    callback_url: "",
    app_id_url: "",
    created_by: "",
  });

  var finalFormData = [];

  const getFormData = (formData) => {
    finalFormData = formData;
  };

  const handleChange = (e) => {
    setSSOConfig({
      ...ssoconfig,
      [e.target.name]: e.target.value,
      created_by: loginResponse?.response?.uuid,
    });
  };

  const validateData = (event) => {
    event.preventDefault();

    console.log("formmmmmmmm", event.target.elements);

    const finalObj = {};

    let errorsObj = {};

    for (let i of event.target.elements) {
      if (i.name !== "") {
        console.log("i.name======i.value", i.name, i.value);

        finalObj[i.name] = i.value;
      } else {
        errorsObj[i.name] = i.value;
      }
    }

    console.log("========formData=======finalObj", finalObj);
    console.log("========formData=======errorsObj", errorsObj);

    for (let i in finalObj) {
      console.log("i======", i);
      if (finalObj[i] === "" || finalObj[i] === " ") {
        errorsObj[i] = "*Required";
      }
    }

    if (Object.keys(errorsObj)?.length > 0) {
      console.log("form not submitted");

      setErrors(errorsObj);
    } else {
      console.log("form submitteddd");

      setErrors({});
    }

    console.log(errorsObj, "errorrrrrrrrrrrrrrrrr");

    dispatch(getNewSSOConfig({ body: finalFormData, token: token }));
    console.log(
      "Response after addssoconfig api call",
      addSSOConfigResponse.status
    );

    useEffect(() => {
      if (addSSOConfigResponse?.status === 200) {
        setIsSuccessPopUpOpen(true);
      }
    }, [addSSOConfigResponse]);
  };

  return (
    <>
      <Flex marginTop="1rem">
        <Box>
          <Text textStyle="h4">SSO CONFIGURATIONS</Text>
        </Box>
      </Flex>
      <Divider borderColor="gray" />

      <form onSubmit={validateData}>
        <Flex marginTop="6">
          <Box marginRight="24rem">
            <Text className="color-black mr-20">Authorization Protocol*:</Text>
            <Select
              placeholder="Select"
              backgroundColor="#F5F9FF"
              w="30rem"
              border="none"
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
              border="none"
              name="configuration_name"
              value={ssoconfig.configuration_name}
              onChange={handleChange}
            />
            <Text className="text-red mb-5">
              {errors && errors?.configuration_name}
            </Text>

            <Text className="color-black mr-20 mt-6">District(s)*</Text>
            <Input
              type="text"
              autoFocus
              backgroundColor="#F5F9FF"
              rounded="lg"
              w="30rem"
              border="none"
              name="districts"
              value={ssoconfig.districts}
              onChange={handleChange}
            />
            <Text className="text-red mb-5">{errors && errors?.districts}</Text>
          </Box>

          {currentScreen === "ws-fed" ? (
            <WSFederation ssoconfigData={ssoconfig} func={getFormData} />
          ) : currentScreen === "oauth2" ? (
            <OAuth2 ssoconfigData={ssoconfig} func={getFormData} />
          ) : currentScreen === "openid" ? (
            <OAuth2 />
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
            // onClick={handleSave}
            type="submit"
          >
            Save
          </Button>
        </Center>
      </form>
      <SSOSuccessPopup
        isSuccessPopUpOpen={isSuccessPopUpOpen}
        setIsSuccessPopUpOpen={setIsSuccessPopUpOpen}
      />
    </>
  );
};

export default CreateNewSSO;

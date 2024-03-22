import { Box, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const WSFederation = (props) => {
  const prevData = props.ssoconfigData;

  useEffect(() => {
    setSSOConfig({ ...prevData });
  }, [prevData]);

  const [ssoconfig, setSSOConfig] = useState({
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
    enable_state: "",
    enable_nonce: "",
    authentication_type: "",
    caption: "",
    metadata_url: "",
    callback_url: "",
    app_id_url: "",
    authorization_protocol:""
  });

  
  const handleChange = (e) => {
    setSSOConfig({ ...ssoconfig, [e.target.name]: e.target.value, authorization_protocol:"ws-fed" });
  };

  console.log(ssoconfig);
  return (
    <>
      <Box>
        <Text>Authentication Type:</Text>
        <Input
          type="text"
          autoFocus
          backgroundColor="#F5F9FF"
          rounded="lg"
          w="30rem"
          marginBottom="1rem"
          border="none"
          name="authentication_type"
          value={ssoconfig.authentication_type}
          onChange={handleChange}
        />
        <Text className="color-black mr-20 mt-3">Caption:</Text>
        <Input
          type="text"
          autoFocus
          backgroundColor="#F5F9FF"
          rounded="lg"
          w="30rem"
          marginBottom="1rem"
          border="none"
          name="caption"
          value={ssoconfig.caption}
          onChange={handleChange}
        />
        <Text className="color-black mr-20">Metadata URL:</Text>
        <Input
          type="text"
          autoFocus
          backgroundColor="#F5F9FF"
          rounded="lg"
          w="30rem"
          marginBottom="1rem"
          border="none"
          name="metadata_url"
          value={ssoconfig.metadata_url}
          onChange={handleChange}
        />
        <Text className="color-black mr-20">Callback URL:</Text>
        <Input
          type="text"
          autoFocus
          backgroundColor="#F5F9FF"
          rounded="lg"
          w="30rem"
          marginBottom="1rem"
          border="none"
          name="callback_url"
          value={ssoconfig.callback_url}
          onChange={handleChange}
        />
        <Text className="color-black mr-20">
          Relying party Trust Identifier / App ID URL:
        </Text>
        <Input
          type="text"
          autoFocus
          backgroundColor="#F5F9FF"
          rounded="lg"
          w="30rem"
          marginBottom="1rem"
          border="none"
          name="app_id_url"
          value={ssoconfig.app_id_url}
          onChange={handleChange}
        />
        <Text className="color-black mr-20">User ID Property:</Text>
        <Input
          type="text"
          autoFocus
          backgroundColor="#F5F9FF"
          rounded="lg"
          w="30rem"
          marginBottom="1rem"
          border="none"
          name="user_id_property"
          value={ssoconfig.user_id_property}
          onChange={handleChange}
        />
        <Text className="color-black mr-20">Fitness Gram SSO Field:</Text>
        <Select
          placeholder="Select"
          backgroundColor="#F5F9FF"
          w="30rem"
          border="none"
          name="fitness_gram_sso_field"
          onChange={handleChange}
        >
          <option value="district">District</option>
          <option value="school">School</option>
          <option value="state">State</option>
          <option value="partner">Partner</option>
        </Select>
        {props.func(ssoconfig)}
      </Box>
      
    </>
  );
};

export default WSFederation;

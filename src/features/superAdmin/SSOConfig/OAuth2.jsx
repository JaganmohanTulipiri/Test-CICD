import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
  Divider,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const OAuth2 = (props) => {
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
    discovery_url: "",
    user_info_url: "",
  });

  const handleChange = (e) => {
    setSSOConfig({ ...ssoconfig, [e.target.name]: e.target.value, authorization_protocol:"oauth2" });
  };

  console.log(ssoconfig);

  return (
    <>
      <Flex>
        <Box flex="1" marginLeft="6rem">
          <Text className="color-black mr-20">Discovery URL:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            borderRadius="lg"
            marginBottom="4"
            w="30rem"
            border="none"
            name="discovery_url"
            value={ssoconfig.discovery_url}
            onChange={handleChange}
          />
          <Text className="color-black mr-20">Issuer:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            borderRadius="lg"
            marginBottom="4"
            w="30rem"
            border="none"
            name="issuer"
            value={ssoconfig.issuer}
            onChange={handleChange}
          />
          <Text className="color-black mr-20 mt-6">Authorization URL*:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            borderRadius="lg"
            marginBottom="4"
            w="30rem"
            border="none"
            name="authorization_url"
            value={ssoconfig.authorization_url}
            onChange={handleChange}
          />
          <Text className="color-black mr-20 mt-6">Token URL:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            borderRadius="lg"
            marginBottom="4"
            w="30rem"
            border="none"
            name="token_url"
            value={ssoconfig.token_url}
            onChange={handleChange}
          />

          <Text className="color-black mr-20 mt-6">User info URL:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            borderRadius="lg"
            marginBottom="4"
            w="30rem"
            border="none"
            name="user_info_url"
            value={ssoconfig.user_info_url}
            onChange={handleChange}
          />
          <Text className="color-black mr-20 mt-6">User Info HTTP Type:</Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="30rem"
            border="none"
            name="user_info_http_type"
            value={ssoconfig.user_info_http_type}
            onChange={handleChange}
          >
            <option value="get">Get</option>
            <option value="put">Put</option>
            <option value="post">Post</option>
            <option value="delete">Delete</option>
          </Select>
          <Text className="color-black mr-20 mt-10">
            User Info Response Type:
          </Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="30rem"
            border="none"
            name="user_info_response_type"
            value={ssoconfig.user_info_response_type}
            onChange={handleChange}
          >
            <option value="json">JSON</option>
            <option value="xml">XML</option>
          </Select>
          <Text className="color-black mr-20 mt-10">User ID Property:</Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="30rem"
            border="none"
            name="user_id_property"
            value={ssoconfig.user_id_property}
            onChange={handleChange}
          >
            <option value="district">District</option>
            <option value="school">School</option>
            <option value="state">State</option>
            <option value="partner">Partner</option>
          </Select>
          <Text className="color-black mr-20 mt-10">
            FitnessGram SSO Field:
          </Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="30rem"
            border="none"
            name="fitness_gram_sso_field"
            value={ssoconfig.fitness_gram_sso_field}
            onChange={handleChange}
          >
            <option value="district">District</option>
            <option value="school">School</option>
            <option value="state">State</option>
            <option value="partner">Partner</option>
          </Select>
          <Text className="color-black mr-20 mt-10">District ID Field:</Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="30rem"
            border="none"
            name="district_id_property"
            value={ssoconfig.district_id_property}
            onChange={handleChange}
          >
             <option value="district">District</option>
            <option value="school">School</option>
            <option value="state">State</option>
            <option value="partner">Partner</option>
          </Select>
          <Text className="color-black mr-20 mt-10">JSON Web Key Set URL:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            borderRadius="lg"
            marginBottom="4"
            w="30rem"
            border="none"
            name="Json_web_key_set_url"
            value={ssoconfig.Json_web_key_set_url}
            onChange={handleChange}
          />
          <Text className="color-black mr-20 mt-6">URL Path:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            borderRadius="lg"
            marginBottom="4"
            w="30rem"
            border="none"
            name="url_path"
            value={ssoconfig.url_path}
            onChange={handleChange}
          />
          <Text className="color-black mr-20 mt-6">Client ID:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            borderRadius="lg"
            marginBottom="4"
            w="30rem"
            border="none"
            name="client_id"
            value={ssoconfig.client_id}
            onChange={handleChange}
          />
          <Text className="color-black mr-20 mt-6">Client Secret:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            borderRadius="lg"
            marginBottom="4"
            w="30rem"
            border="none"
            name="client_secret"
            value={ssoconfig.client_secret}
            onChange={handleChange}
          />
          <Text className="color-black mr-20 mt-10">Response Type:</Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="30rem"
            border="none"
            name="response_type"
            value={ssoconfig.response_type}
            onChange={handleChange}
          >
            <option value="code">Code</option>
            <option value="option1">School</option>
          </Select>
          <Text className="color-black mr-20 mt-10">Response Mode:</Text>
          <Select
            placeholder="Select"
            backgroundColor="#F5F9FF"
            w="30rem"
            border="none"
            name="response_mode"
            value={ssoconfig.response_mode}
            onChange={handleChange}
          >
            <option value="default">Default</option>
          </Select>
          <Text className="color-black mr-20 mt-6">Scope:</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            borderRadius="lg"
            marginBottom="4"
            w="30rem"
            border="none"
            name="scope"
            value={ssoconfig.scope}
            onChange={handleChange}
          />
          <Text>Enable State:</Text>
          <RadioGroup marginLeft="3rem" defaultValue="no">
            <Stack direction="column">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Stack>
          </RadioGroup>
          <Text>Enable Nonce:</Text>
          <RadioGroup marginLeft="3rem">
            <Stack direction="column">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Flex>
      {props.func(ssoconfig)}
    </>
  );
};

export default OAuth2;

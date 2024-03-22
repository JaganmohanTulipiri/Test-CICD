import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex, Grid, Heading,
  Input, InputGroup,
  InputRightElement, Text
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import GridProviderNew from "../../../GridProviderNew";
import ChangeUsername from "./ChangeUsername";
import ChangePassword from "./ChangePassword";

const EditMyAccount = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const myAccountData = {
    title: "MY ACCOUNT",
    showAccountDetails: "Account Details",
    userIdDetails: [
      {
        lable: "User Name",
        inputType: "text",
        defaultValue: "raj.basu@xelpmoc.in",
        placeholder: "",
        readOnlyValue: true,
      },
      {
        lable: "Password",
        inputType: "password",
        defaultValue: "rajbasu",
        placeholder: "",
        readOnlyValue: true,
      },
    ],
    BasicDetails: [
      {
        lable: "First Name",
        inputType: "text",
        defaultValue: "Raj",
        placeholder: "",
        readOnlyValue: false,
      },
      {
        lable: "Middle Name",
        inputType: "text",
        defaultValue: "Kumar",
        placeholder: "",
        readOnlyValue: false,
      },
      {
        lable: "Last Name",
        inputType: "text",
        defaultValue: "Basu",
        placeholder: "",
        readOnlyValue: false,
      },
      {
        lable: "Email",
        inputType: "email",
        defaultValue: "raj.basu@xelpmoc.in",
        placeholder: "",
        readOnlyValue: false,
      },
    ],
  };
  const { title, showAccountDetails, userIdDetails, BasicDetails } =
    myAccountData;
  return (
    <div>
      <Box>
        <Heading fontSize="2xl">{title}</Heading>
      </Box>

      <Flex marginTop="8">
        <Box>
          <Text>User Name</Text>
          <Input
            type="text"
            autoFocus
            backgroundColor="#F5F9FF"
            marginBottom="0.4rem"
            marginTop="0.4rem"
            rounded="lg"
            w="16rem"
            border="none"
            value="raj.basu@xelpmoc.in"
          />

          <Box>
           <ChangeUsername/>
          </Box>
        </Box>

        <Box marginLeft="40">
          <Text>Password</Text>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder=""
              autoFocus
              backgroundColor="#F5F9FF"
              marginBottom="0.6rem"
              className="rounded-lg h-8"
              marginTop="0.3rem"
              w="17rem"
              border="none"
              value="fhdwdfaeihd"
            />
            <InputRightElement width="13rem" marginTop="0.5rem">
              <Button
                h="1.75rem"
                size="sm"
                backgroundColor="#F5F9FF"
                onClick={handleClick}
              >
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Box>
            <ChangePassword />
          </Box>
        </Box>
      </Flex>

      <Divider className="p-5" borderColor="gray" />

      <Grid templateColumns="repeat(3, 1fr)" gap="8" marginTop="8">
        <GridProviderNew data={BasicDetails} />
      </Grid>

      <Center>
        <Flex minWidth="max-content" alignItems="center" marginTop="18rem">
          <ButtonGroup gap="4">
            <Link to="/role/SuperAdmin/MyAccount">
              <Button
                color="black"
                borderRadius="3xl"
                backgroundColor="#EEEEEE"
                width="7rem"
              >
                Cancel
              </Button>
            </Link>
            <Link to="/role/SuperAdmin/MyAccount">
              <Button
                backgroundColor="#65a30d"
                width="7rem"
                color="white"
                borderRadius="3xl"
              >
                Save
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>
      </Center>
    </div>
  );
};

export default EditMyAccount;
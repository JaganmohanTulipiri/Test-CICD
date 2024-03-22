import { EditIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import GridProviderNew from "../../../GridProviderNew";
import ChangePassword from "./ChangePassword";
import ChangeUsername from "./ChangeUsername";

const MyAccount = () => {
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
        readOnlyValue: true,
      },
      {
        lable: "Middle Name",
        inputType: "text",
        defaultValue: "Kumar",
        placeholder: "",
        readOnlyValue: true,
      },
      {
        lable: "Last Name",
        inputType: "text",
        defaultValue: "Basu",
        placeholder: "",
        readOnlyValue: true,
      },
      {
        lable: "Email",
        inputType: "email",
        defaultValue: "raj.basu@xelpmoc.in",
        placeholder: "",
        readOnlyValue: true,
      },
    ],
  };

  const { title, showAccountDetails, BasicDetails } = myAccountData;
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
      <Flex marginRight="2rem" marginTop="1rem" marginBottom="0.3rem">
        <Spacer />
        <ButtonGroup gap="1">
          <Link to="/role/SuperAdmin/editMyAccount">
            <Button color="black">Edit</Button>
            <EditIcon
              color="#1890ff"
              fontSize="1.2rem"
              marginBottom="0.2rem"
              marginLeft="-2"
            />
          </Link>
        </ButtonGroup>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap="8" marginTop="8">
        <GridProviderNew data={BasicDetails} />
      </Grid>
    </div>
  );
};

export default MyAccount;
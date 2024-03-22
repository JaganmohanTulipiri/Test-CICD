import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Divider,
    Flex,
    Heading,
    Input,
    Spacer,
    Text,
    InputGroup,
    InputRightElement,
  } from "@chakra-ui/react";
  import React from "react";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import { ViewIcon, ViewOffIcon, EditIcon } from "@chakra-ui/icons";
  import ChangePassword from "../../components/GlobalComponents/SuperAdmin/Account/ChangePassword";
  
  const EditAccount = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
      <div>
        <Box>
          <Heading fontSize="2xl">
            MY ACCOUNT
          </Heading>
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
              <Link
                to="/role/SuperAdmin/editMyAccount"
                className="text-[#1890ff]"
              >
                Change Username
              </Link>
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
  
           <ChangePassword/>
          </Box>
        </Flex>
  
        <Divider className="p-5" borderColor="gray" />
  
        <Flex marginRight="2rem" marginTop="3rem" marginBottom="0.3rem">
          <Box>
            <Text>First Name*</Text>
            <Input
              type="text"
              autoFocus
              backgroundColor="#F5F9FF"
              marginBottom="0.4rem"
              className="rounded-lg h-8"
              w="16rem"
              border="none"
              value="Raj"
            />
          </Box>
          <Spacer />
          <Box>
            <Text>Middle Name</Text>
            <Input
              type="text"
              autoFocus
              backgroundColor="#F5F9FF"
              marginBottom="0.4rem"
              className="rounded-lg h-8"
              w="16rem"
              border="none"
              value="Kumar"
            />
          </Box>
          <Spacer />
          <Box>
            <Text>Last Name*</Text>
            <Input
              type="text"
              autoFocus
              backgroundColor="#F5F9FF"
              marginBottom="0.4rem"
              className="rounded-lg h-8"
              w="16rem"
              border="none"
              value="Basu"
            />
          </Box>
        </Flex>
        <Flex marginTop="10">
          <Box>
            <Text>Email*</Text>
            <Input
              type="email"
              autoFocus
              backgroundColor="#F5F9FF"
              marginBottom="0.4rem"
              className="rounded-lg h-8"
              w="20rem"
              border="none"
              value="raj.basu@xelpmoc.in"
            />
          </Box>
        </Flex>
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
  
  export default EditAccount;
  
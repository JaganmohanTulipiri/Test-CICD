import { QuestionIcon } from "@chakra-ui/icons";
import {
  CardBody, Center, Divider, Flex, Heading, Image, Stack, Text
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logout_icon from "../customIcons/logout.png";
import my_account_icon from "../customIcons/my_account.png";

const Settings = () => {
  return (
    <div className="w-full max-w-full h-full max-h-full overflow-y-auto ml-4 mt-4">
      <Center>
        <Flex width="300px">
          <CardBody>
            <Stack mt="4" spacing="3">
              <Heading size="md" color="#1890ff">
                ACCOUNT SETTINGS
              </Heading>

              <Divider />
              <Link to="/role/SuperAdmin/MyAccount">
                <Flex gap={5}>
                  <Image src={my_account_icon} width="25px"></Image>{" "}
                  <Text>My Account</Text>
                </Flex>
              </Link>
              <Divider />
              <Flex gap={5}>
                <QuestionIcon width={25} />
                <Text>Help</Text>
              </Flex>
              <Divider />
              <Flex gap={5}>
                <Image src={logout_icon} width="25px"></Image>
                <Text>Logout</Text>
              </Flex>
            </Stack>
            <Stack mt="4" spacing="3">
              <Heading size="md" color="#1890ff">
                SYSTEM ADMINISTRATOR
              </Heading>

              <Link to="/role/SuperAdmin/MyAccount">
                <Flex gap={5}>
                  <Image src={my_account_icon} width="25px"></Image>{" "}
                  <Text>My Account</Text>
                </Flex>
              </Link>
              <Divider />
              <Flex gap={5}>
                <QuestionIcon width={25} />
                <Text>Help</Text>
              </Flex>
              <Divider />
              <Flex gap={5}>
                <Image src={logout_icon} width="25px"></Image>
                <Text>Logout</Text>
              </Flex>
            </Stack>
          </CardBody>
        </Flex>
      </Center>
    </div>
  );
};

export default Settings;

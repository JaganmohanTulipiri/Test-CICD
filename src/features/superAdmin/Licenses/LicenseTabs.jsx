import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getLicensedSchoolInfo,
  getSchoolsToAddLicense,
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import AddLicenseToSchool from "./AddLicenseToSchool";
import GASchoolTable from "./GASchoolTable";
import LicenseHistory from "./LicenseHistory";

const LicenseTabs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state?.profile?.token);
  const [activeTab, setActiveTab] = useState(0);
  const buttonsList = [
    "SCHOOLS",
    "LICENSE HISTORY",
    "CONTACTS",
    "EMAIL HISTORY",
  ];

  const funderId = useSelector((state) => state?.superAdmin?.funderId);

  console.log("funderId", funderId);

  useEffect(() => {
    console.log("hello from useEffect");
    dispatch(
      getLicensedSchoolInfo({
        uuid: "0a1c4af1-05e6-4ef0-b0fa-0105f75a45fd",
        token: token,
      })
    );
    dispatch(getSchoolsToAddLicense({ uuid: funderId, token: token }));
  }, []);

  const handleButtonClick = () => {
    navigate("/role/SuperAdmin/Licenses/GALicenseHistory");
  };

  return (
    <>
      <Flex>
        <Box>
          <Tabs variant="unstyled" marginTop="3">
            <TabList>
              <Tab
                _selected={{
                  color: "white",
                  bg: "blue.500",
                }}
                backgroundColor="#F5F5F5"
                w="10rem"
                roundedLeft="15"
                textStyle="h5"
              >
                SCHOOLS
              </Tab>
              <Tab
                _selected={{
                  color: "white",
                  bg: "blue.500",
                }}
                backgroundColor="#F5F5F5"
                w="14rem"
                textStyle="h5"
              >
                LICENSE HISTORY
              </Tab>
              <Tab
                _selected={{
                  color: "white",
                  bg: "blue.500",
                }}
                backgroundColor="#F5F5F5"
                w="15rem"
                textStyle="h5"
              >
                CONTACTS
              </Tab>
              <Tab
                _selected={{
                  color: "white",
                  bg: "blue.500",
                }}
                backgroundColor="#F5F5F5"
                w="15rem"
                roundedRight="15"
                textStyle="h5"
              >
                EMAIL HISTORY
              </Tab>
            </TabList>

            <HStack border="4px">
              <Box>
                <Button marginRight="-3">Show Filters</Button>
                <AddIcon
                  backgroundColor="#0081c8"
                  color="white"
                  borderRadius="2rem"
                  fontSize="1.1rem"
                  p="0.3rem"
                />
              </Box>
              <Spacer />
              <Box>
                <AddLicenseToSchool />
              </Box>
            </HStack>

            <TabPanels>
              <TabPanel>
                <GASchoolTable />
              </TabPanel>
              <TabPanel>
                <LicenseHistory />
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default LicenseTabs;

import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Divider,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  GridItem,
  Select,
  Text,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import TestResults from "./TestResults";
import activityGram from '../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ActivityGram.svg'
import activityLog from '../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/ActivityLogo.svg'

const TestTable = () => {
  return (
    <div>
      <Text>Adminster Test</Text>
      <Tabs variant="unstyled" marginTop="2rem">
        <TabList>
          <Tab
            _selected={{
              color: "white",
              bg: "blue.500",
            }}
            w="9rem"
            roundedLeft="15"
            textStyle="h5"
          >
            FitnessGram
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "blue.500",
            }}
            w="9rem"
            roundedRight="15"
            textStyle="h5"
          >
            Other
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TestResults />
          </TabPanel>
          <TabPanel>
            <Card
              bg="#f5f5f5"
              boxShadow="sm"
              border="1"
              mt="4"
              height="14"
              justifyContent="center"
              onClick={() => cardItemClicked(item)}
            >
              <CardBody
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                cursor={"pointer"}
              >
                <Image src={activityGram} width="7" />

                <Text className="px-5" fontSize="sm">
                  Activity Gram{" "}
                </Text>
              </CardBody>
            </Card>{" "}

            <Card
              bg="#f5f5f5"
              boxShadow="sm"
              border="1"
              mt="4"
              height="14"
              justifyContent="center"
              onClick={() => cardItemClicked(item)}
            >
              <CardBody
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                cursor={"pointer"}
              >
                <Image src={activityLog} width="7" />

                <Text className="px-5" fontSize="sm">
                  Activity Log{" "}
                </Text>
              </CardBody>
            </Card>{" "}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TestTable;

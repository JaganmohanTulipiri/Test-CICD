import {
  Flex,
  Input,
  InputGroup,
  Spacer,
  Text,
  InputLeftElement,
  Button,
  Image,
  Box,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ReportFilter from "../Popups/ReportFilter";
import { SearchIcon } from "@chakra-ui/icons";
import printIcon from "../customIcons/Report Icons/printer-icon.png";
import emailIcon from "../customIcons/Report Icons/email-address-icon.png";
import csvIcon from "../customIcons/Report Icons/download-pdf-icon-1.png";
import xpsIcon from "../customIcons/Report Icons/download-pdf-icon-2.png";
import pdfIcon from "../customIcons/Report Icons/download-pdf-icon.png";
import FitnessGramLogo from "../customIcons/Report Icons/FitnessGramLogo.png";
import ReportGraph from "./ReportGraph";
import TextImage from "../customIcons/Report Icons/Improving youth fitness throughassessment, science and reasearch.@2x.png";
import DistrictsReportBg from "../customIcons/Report Icons/Path7350.png";
import ReportDashboard from "./ReportDashboard";

const FitnessGramStudentReport = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex>
        <Text textStyle="h4">FitnessGram Student Report</Text>
        <Spacer />
        <ReportFilter />
      </Flex>

      <Flex marginTop="1.5rem">
        <InputGroup>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input
            type="Search"
            autoFocus
            borderRadius="3xl"
            w="20rem"
            placeholder="Search Student Here"
          />
          <Spacer />
          <Image src={printIcon} h="1rem" marginTop="3"></Image>
          <Button>Print</Button>
          <Spacer />

          <Image src={emailIcon} h="1rem" marginTop="3"></Image>
          <Button>Email</Button>
          <Spacer />
          <Image src={pdfIcon} h="1rem" marginTop="3"></Image>
          <Button>PDF Download</Button>
          <Spacer />
          <Image src={csvIcon} h="1rem" marginTop="3"></Image>
          <Button>CSV Download</Button>
          <Spacer />
          <Image src={xpsIcon} h="1rem" marginTop="3"></Image>
          <Button>XPS Download</Button>
        </InputGroup>
      </Flex>

      <Flex marginLeft="30rem" marginTop="3" h="10rem">
        <Box boxSize="23rem" marginRight="4rem" marginTop="3rem">
          <Image src={FitnessGramLogo} />
        </Box>

        <Box boxSize="20rem" marginRight="4rem" marginTop="3rem">
          <Text color="#6D6E70" marginTop="2">
            Improving youth fitness through assessment, science and reasearch.
          </Text>
        </Box>
      </Flex>
      <Flex marginLeft="4rem" marginBottom="4">
        <Box backgroundColor="#B02071" w="18rem" h="0.6rem"></Box>
        <Box backgroundColor="#FBAF2F" w="18rem" h="0.6rem"></Box>
        <Box backgroundColor="#4FB74A" w="18rem" h="0.6rem"></Box>
        <Box backgroundColor="#F05F78" w="18rem" h="0.6rem"></Box>
        <Box backgroundColor="#67C5B7" w="18rem" h="0.6rem"></Box>
        <Box backgroundColor="#B02071" w="18rem" h="0.6rem"></Box>
      </Flex>
      <Flex marginLeft="4rem">
        <Image src={DistrictsReportBg} />

        <Text fontSize="2rem" marginLeft="-35rem" color="white">
          DISTRICT REPORT
        </Text>
        <Text
          fontSize="1.4rem"
          marginTop="14"
          marginLeft="-16rem"
          color="white"
        >
          Summary
        </Text>

        <Box w="65rem" marginLeft="10rem">
          <Text marginLeft="30rem" color="#6D6E70" marginTop="4">
            The District Report - Summary shows the percentage of boys and girls
            that achieve Healthy Fitness Zone by component.
          </Text>
        </Box>
      </Flex>

      <Flex marginLeft="4rem" marginTop="10" marginBottom="6">
        <Box>
          <Text fontSize="2rem">TEST DISTRICT (THE COOPER INSTITUTE)</Text>
          <Text>GRADES KG-13</Text>
        </Box>
      </Flex>
      <Center><Text p="4" fontSize="2rem" color="#4FA446">STUDENTS IN HEALTHY FITNESS ZONE(HFZ)</Text></Center>
      <ReportGraph />
      <ReportDashboard/>
    </>
  );
};

export default FitnessGramStudentReport;

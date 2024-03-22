import React, { useEffect, useRef, useState } from "react";
import play from "../../../../assets/images/Untitled design/play.png";
import fit from "../../../../assets/images/Teacher_Student_Parent_SchoolAdmin SVGSVG/FITNESSGRAM.png";
import { FcClearFilters } from "react-icons/fc";
import emailImg from "../../../../assets/images/StudentReportTableImages/email.png";
import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { BsChevronDown, BsChevronUp, BsPrinter } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
import { FaFileCsv, FaUser } from "react-icons/fa";

import { Bar } from "react-chartjs-2";

import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart, { Colors, plugins } from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import {
  getOverviewReportSummaryByClassApiCall,
  setRunReportButtonClicked,
} from "../../../../DistrictAdminApis/districtAdminSlice";
import { TiInfo } from "react-icons/ti";

const FitnessGramOverviewReport = () => {
  const overviewReportSummaryByClass = useSelector(
    (state) => state?.districtAdmin?.overviewReportSummaryByClass
  );

  const initialOptions = {
    responsive: true,
    maintainAspectRatio: false,
    pan: {
      enabled: true,
      mode: "xy",
    },
    zoom: {
      enabled: true,
      mode: "xy",
    },
    skipNull: true,
    scales: {
      x: {
        display: true,
        grid: {
          display: true,
          drawOnChartArea: false,
        },
        ticks: {
          color: "#8c8c8b",
          font: {
            size: 12,
            weight: "500",
          },
          padding: 0,
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
          color: "#8c8c8b",
          font: {
            size: 12,
            weight: "500",
          },
          padding: 6,
        },
      },
    },
  };

  const sampleData = {
    labels: ["Heart Health"],
    datasets: [
      {
        label: "Boys",
        data: [10, 20, 40, 60, 80, 100],
        backgroundColor: "#35A2D5",
        barPercentage: 0.4,
        categoryPercentage: 0.5,
      },
      {
        label: "Girls",
        data: [10, 20, 40, 60, 80, 100],
        backgroundColor: "#80BDAD",
        barPercentage: 0.4,
        categoryPercentage: 0.5,
      },
      {
        label: "Total",
        data: [10, 20, 40, 60, 80, 100],
        backgroundColor: "#4FA446",
        barPercentage: 0.4,
        categoryPercentage: 0.5,
      },
    ],
  };

  const initialOptions2 = {
    responsive: true,
    maintainAspectRatio: false,
    pan: {
      enabled: true,
      mode: "xy",
    },
    zoom: {
      enabled: true,
      mode: "xy",
    },
    skipNull: true,
    scales: {
      x: {
        display: true,
        grid: {
          display: true,
          drawOnChartArea: false,
        },
        offset: true,
        ticks: {
          color: "#8c8c8b",
          font: {
            size: 12,
            weight: "500",
          },
          padding: 0,
        },
      },
      y: {
        position: "left",
        ticks: {
          display: false,
        },
        grid: {
          display: true,

          borderColor: "rgba(0, 0, 0, 0)",
          drawBorder: false,
        },
      },
    },
  };

  const sampleData2 = {
    labels: ["Body Health"],

    datasets: [
      {
        label: "Boys",
        data: [10, 20, 40, 60, 80, 100],
        backgroundColor: "#35A2D5",
        barPercentage: 0.4,
        categoryPercentage: 0.5,
      },
      {
        label: "Girls",
        data: [10, 20, 40, 60, 80, 100],
        backgroundColor: "#80BDAD",
        barPercentage: 0.4,
        categoryPercentage: 0.5,
      },
      {
        label: "Total",
        data: [10, 20, 40, 60, 80, 100],
        backgroundColor: "#4FA446",
        barPercentage: 0.4,
        categoryPercentage: 0.5,
      },
    ],
  };

  const initialOptions3 = {
    responsive: true,
    maintainAspectRatio: false,
    pan: {
      enabled: true,
      mode: "xy",
    },
    zoom: {
      enabled: true,
      mode: "xy",
    },
    skipNull: true,

    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        offset: true,
        ticks: {
          color: "#8c8c8b",
          font: {
            size: 12,
            weight: "500",
          },
          padding: 0,
        },
      },

      y: {
        display: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
          display: false,
        },
      },
    },
  };

  const sampleData3 = {
    labels: ["", "", "Muscle Fitness", ""],
    datasets: [
      {
        label: "Boys",
        data: [10, 20, 40, 60, 80, 100],
        backgroundColor: "#35A2D5",

        barPercentage: 0.5,
        categoryPercentage: 0.7,
      },
      {
        label: "Girls",
        data: [10, 20, 40, 60, 80, 100],
        backgroundColor: "#80BDAD",

        barPercentage: 0.5,
        categoryPercentage: 0.7,
      },
      {
        label: "Total",
        data: [10, 20, 40, 60, 80, 100],
        backgroundColor: "#4FA446",

        barPercentage: 0.5,
        categoryPercentage: 0.7,
      },
    ],
  };

  const [isSelectedStudentitem, setIsSelectedStudentitem] = useState(null);
  const [isSelectedStudentID, setIsSelectedStudentID] = useState(null);

  const studentDataItemClicked = (selectedItem) => {
    setIsSelectedStudentitem(!isSelectedStudentitem);

    console.log(selectedItem);

    setIsSelectedStudentID(selectedItem);
  };

  console.log(
    overviewReportSummaryByClass,
    "overviewReportSummaryByClassoverviewReportSummaryByClass"
  );

  return (
    <>
      <Box
        h="full"
        mt="2"
        className="example"
        overflowY={"scroll"}
        px={5}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"} mt={2}>
          <Text textStyle={"h1"} fontFamily={"poppins-bold"}>
            FitnessGram Overview Report
          </Text>
          <Text
            textStyle={"h1"}
            fontFamily={"poppins-bold"}
            textColor={"primary"}
          >
            FitnessGram
          </Text>
        </Flex>
        <Divider border="2px solid black" mt={3} />
        <Flex justifyContent={"center"} alignItems={"center"} gap={5} mt={5}>
          <Box p="0" m="0">
            <Text
              fontSize={"5xl"}
              textColor={"primary"}
              fontFamily={"poppins-bold"}
            >
              FITNESSGRAM
            </Text>
            <Text textAlign={"right"}>The Cooper Institute</Text>
          </Box>
          <Divider orientation="vertical" border="0.5px solid gray" h={20} />
          <Box>
            <Text>Improving youth fitness Through</Text>

            <Text>assesment, science and research.</Text>
          </Box>
        </Flex>

        <SimpleGrid columns={6} mt={4}>
          <GridItem h="3" bg="darkPink" />
          <GridItem h="3" bg="darkYellow" />
          <GridItem h="3" bg="lightGreen" />
          <GridItem h="3" bg="lightPink" />
          <GridItem h="3" bg="lightSkyBlue" />
          <GridItem h="3" bg="darkPink" />
        </SimpleGrid>

        <Grid templateColumns="repeat(4, 1fr)" mt="8" mb="8" gap={2}>
          <GridItem h="500" colSpan={1} className="bar1-width">
            <Bar data={sampleData} options={initialOptions} />
          </GridItem>

          <GridItem colSpan={1} className="bar2-width" h="500">
            <Bar data={sampleData2} options={initialOptions2} />
          </GridItem>

          <GridItem colStart={3} colEnd={6} className="bar3-width" h="500">
            <Bar data={sampleData3} options={initialOptions3} />
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(4, 1fr)" textAlign={"center"} gap={2}>
          <GridItem
            style={{
              width: "200px",
            }}
            colSpan={1}
            h="8"
            bg={"darkPink"}
            textColor={"white"}
            pt="1"
          >
            <Text>Heart Health</Text>
          </GridItem>

          <GridItem
            style={{
              width: "200px",
            }}
            colSpan={1}
            h="8"
            bg={"darkYellow"}
            textColor={"white"}
            pt="1"
          >
            <Text>Body Health</Text>
          </GridItem>

          <GridItem
            colStart={3}
            colEnd={6}
            style={{
              width: "630px",
            }}
            h="8"
            bg={"lightPink"}
            textColor={"white"}
            pt="1"
          >
            <Text>Muscle Fitness</Text>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(4, 1fr)" textAlign={"center"} gap={2}>
          <GridItem
            style={{
              width: "200px",
            }}
            colSpan={1}
            h="8"
            pt="1"
          >
            <Text>Heart Health</Text>
          </GridItem>

          <GridItem
            style={{
              width: "200px",
            }}
            colSpan={1}
            h="8"
            pt="1"
          >
            <Text>Body Health</Text>
          </GridItem>

          <GridItem
            colStart={3}
            colEnd={6}
            style={{
              width: "630px",
            }}
            h="8"
            pt="1"
          >
            <Box display={"flex"} justifyContent={"space-around"}>
              <Box>
                <Text>Upper Body</Text>
                <Text>Strength / Endurance</Text>
              </Box>

              <Box>
                <Text>Abdominal</Text>
                <Text>Strength / Endurance</Text>
              </Box>

              <Text>Trunk Extensor</Text>
              <Text>Flexibility</Text>
            </Box>
          </GridItem>
        </Grid>

        <Box
          display={"flex"}
          gap="3"
          justifyContent={"center"}
          alignItems={"center"}
          mt="10"
        >
          <TiInfo size={50} fill="#B84768" />
          <Text textStyle={"h1"} textColor={"dangerRed"}>
            STUDENTS IN NEEDS IMPROVEMENT ZONE (NI)
          </Text>
        </Box>

        <Grid
          templateColumns="repeat(11, 1fr)"
          gap={1}
          textAlign={"center"}
          mt="5"
        >
          <GridItem
            colStart={"1"}
            colEnd={"3"}
            h="8"
            pt="1"
            border="1px solid #ECECEC"
          >
            <Text textStyle={"h6"}>NI: Needs Improvement</Text>
          </GridItem>

          <GridItem
            colStart={"3"}
            colEnd={"6"}
            h="8"
            pt="1"
            border="1px solid #ECECEC"
          >
            <Text textStyle={"h6"}>NI-HR: Needs Improvement - Health Risk</Text>
          </GridItem>

          <GridItem
            colStart={"6"}
            colEnd={"7"}
            h="8"
            pt="1"
            border="1px solid #ECECEC"
          >
            <Text textStyle={"h6"}>VL: Very Lean</Text>
          </GridItem>

          <GridItem
            colStart={"7"}
            colEnd={"12"}
            h="8"
            pt="1"
            border="1px solid #ECECEC"
          >
            <Text textStyle={"h6"}>
              For more information please visit: cdc.gov/healthyweight
            </Text>
          </GridItem>
        </Grid>

        <Grid
          templateColumns="repeat(4, 1fr)"
          textAlign={"center"}
          gap={2}
          mt="8"
        >
          <GridItem
            style={{
              width: "200px",
            }}
            colSpan={1}
            h="8"
            bg={"cement"}
            pt="1"
          >
            <Text>Heart Health</Text>
          </GridItem>

          <GridItem
            style={{
              width: "200px",
            }}
            colSpan={1}
            h="8"
            bg={"cement"}
            pt="1"
          >
            <Text>Body Health</Text>
          </GridItem>

          <GridItem
            colStart={3}
            colEnd={6}
            style={{
              width: "630px",
            }}
            h="8"
            bg={"cement"}
            pt="1"
          >
            <Text>Muscle Fitness</Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default FitnessGramOverviewReport;

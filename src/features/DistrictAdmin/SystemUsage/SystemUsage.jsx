import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

import systemUsageIcon from "../../../../src/assets/customIcons/systemUsage.svg";

// import systemUsageIcon from "../../assets/customIcons/systemUsage.svg";

import { Line } from "react-chartjs-2";

import Chart, { Colors, plugins } from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { getDistrictStatistics } from "../../../DistrictAdminApis/districtAdminSlice";
import { getAccessLogCounts } from "../../../DistrictAdminApis/districtAdminSlice";
import { Box, Center, Flex, Select, Spinner, Text } from "@chakra-ui/react";

const SystemUsage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.profile?.token);

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const loading = useSelector((state) => state?.districtAdmin?.loading);

  const districtStatistics = useSelector(
    (state) => state?.districtAdmin?.districtStatistics
  );
  const [data, setData] = useState([]);

  const [date, setDate] = useState([]);
  const [dateCount, setDateCount] = useState([]);

  const handleData = (list) => {
    console.log(list, "list");
    // console.log(e, "e");
    console.log([...list.map((item) => item.date)], "iamdateee");
    setDate([...list.map((item) => item.date)]);
    setDateCount([...list.map((item) => item.datecount)]);
  };

  useEffect(() => {
    setData(districtStatistics);
  }, [districtStatistics]);
  useEffect(() => {
    handleData(data);
  }, [data]);

  const area_data = {
    labels: date,
    datasets: [
      {
        label: "Users",
        data: dateCount,
        backgroundColor: "#FCB131",
        borderColor: "#FCB131",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const area_options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          suggestedMin: 0,
          beginAtZero: true,
          // steps: 50,
          // stepSize: 15,
        },
      },
    },

    elements: {
      point: {
        borderWidth: 0,
        radius: 0,
        backgroundColor: "#36B24A",
      },
    },
    plugins: {
      legend: {
        display: false,
        // position: "bottom",
        labels: {
          boxWidth: 10,
        },
        toolTip: {
          enabled: false,
        },
        datalabels: {
          display: true,
          color: "black",
          align: "end",
          anchor: "end",
          font: { size: "14" },
        },
      },
    },
  };

  useEffect(() => {
    dispatch(getDistrictStatistics(token));
  }, []);

  console.log(districtStatistics.length, "from 110");

  return (
    <Box margin="2rem">
      <Box border="">
        <Flex marginY="1rem">
          <img src={systemUsageIcon} />
          <Text
            marginLeft="2rem"
            fontSize="xl"
            display="flex"
            fontFamily="poppins-regular"
          >
            <Text textStyle={"text"}>SYSTEM USAGE</Text>
          </Text>
        </Flex>

        {selectedRole === "stateAdmin" && (
          <Flex direction={"column"} gap={3}>
            <Text>Select district</Text>

            <Select w="64">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Select>
          </Flex>
        )}

        {loading ? (
          <Center h="80vh">
            <Spinner color="gray-3" />
          </Center>
        ) : districtStatistics?.length > 1 ? (
          <>
            <Box marginTop="2rem" fontFamily="poppins-regular">
              <Text>Weekly logins</Text>
            </Box>
            <Box marginTop="2rem">
              <Line options={area_options} data={area_data} />
            </Box>
            <Box>
              <Text
                display="flex"
                marginTop="3rem"
                fontFamily="poppins-regular"
                fontSize="xs"
                marginBottom="2rem"
              >
                Statistics are based on the total number of system logins by
                role over the past 7 days.
              </Text>
            </Box>
          </>
        ) : (
          <Text textStyle="h4">No Past Logins for the User</Text>
        )}
      </Box>
    </Box>
    // <div style={{ position: "relative", height: "50vh", width: "80vw" }}>

    //   <div style={{ position: "relative", height: "57vh", width: "100vw" }}>
    //   </div>

    // </div>
  );
};

export default SystemUsage;

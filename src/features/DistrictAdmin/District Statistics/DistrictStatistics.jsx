import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

import districtStaticticsIcon from "../../../../src/assets/customIcons/districtStatistics.svg";

import Chart, { Colors, plugins } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { useDispatch, useSelector } from "react-redux";
import { getDistrictStatistics } from "../../../DistrictAdminApis/districtAdminSlice";
import { getAccessLogCounts } from "../../../DistrictAdminApis/districtAdminSlice";
import {
	Box,
	Center,
	Flex,
	Img,
	Select,
	Spinner,
	Text,
} from "@chakra-ui/react";

const DistrictStatistics = () => {
	Chart.register(ChartDataLabels);

	const dispatch = useDispatch();
	const token = useSelector((state) => state?.profile?.token);
	const loading = useSelector((state) => state?.districtAdmin?.loading);

	const selectedRole = useSelector((state) => state?.profile?.selectedRole);

	const accessLogData = useSelector(
		(state) => state?.districtAdmin?.accessLogCounts,
	);

	const [accessLog, setAccessLog] = useState([]);

	const [fieldName, setFieldName] = useState([]);
	const [fieldCount, setFieldCount] = useState([]);

	const handleAccessLog = (list) => {
		console.log(list, "list");

		setFieldName([
			...list?.map(
				(item) =>
					item?.field_name?.charAt(0).toUpperCase() +
					item?.field_name?.slice(1),
			),
		]);

		setFieldCount([...list.map((item) => item.countfieldname)]);
	};

	console.log(fieldName, fieldCount, "from 45");

	useEffect(() => {
		setAccessLog(accessLogData);
	}, [accessLogData]);

	useEffect(() => {
		handleAccessLog(accessLog);
	}, [accessLog]);

	const horizontal_bar_data = {
		labels: fieldName,
		datasets: [
			{
				label: "Visit",
				data: fieldCount,
				backgroundColor: "#4F81BD",
				barThickness: 12,
			},
		],
	};

	const horizontal_bar_options = {
		indexAxis: "y",
		scales: {
			x: {
				grid: {
					display: true,
				},
				// ticks: {
				//   steps: 10,
				//   stepSize: 500,
				// },outl
			},
		},

		plugins: {
			datalabels: {
				anchor: "end",
				align: "end",
				labels: {
					value: {
						color: "black",
					},
				},
			},
			legend: {
				display: false,
				position: "bottom",
				// labels: {
				//   boxWidth: 10,
				// },
				toolTip: {
					enabled: false,
				},
			},
			options: {
				maintainAspectRatio: false,
				aspectRatio: 1,

				responsive: true,
			},
		},
	};

	useEffect(() => {
		dispatch(getAccessLogCounts(token));
	}, []);

	return (
		<Box margin="2rem">
			<Box border="">
				<Flex gap="4">
					<Img src={districtStaticticsIcon} w="8" h="8" />

					<Text textStyle={"text"}>DISTRICT STATISTICS</Text>
				</Flex>

				{selectedRole === "stateAdmin" && (
					<Flex direction={"column"} gap={3}>
						<Text
							fontFamily={"body"}
							fontSize={{ base: "sm", md: "md", lg: "sm" }}
						>
							Select district
						</Text>

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
				) : (
					<>
						<Box>
							<Text textStyle={"textHead"} mt="5" mb="2">
								Activity at a Glance (for the last 30days)
							</Text>
						</Box>
						<Box mt="10">
							<Bar
								options={horizontal_bar_options}
								data={horizontal_bar_data}
							/>
						</Box>
					</>
				)}
			</Box>
		</Box>
		// <div style={{ position: "relative", height: "50vh", width: "80vw" }}>

		//   <div style={{ position: "relative", height: "57vh", width: "100vw" }}>
		//   </div>

		// </div>
	);
};

export default DistrictStatistics;

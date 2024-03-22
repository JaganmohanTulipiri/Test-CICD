import {
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	HStack,
	Input,
	Select,
	Spinner,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GridProvider from "../../../components/GridProvider";
import { Select as MultiSelect } from "chakra-react-select";
import PositiveButton from "../../../components/PositiveButton";
import NegativeButton from "../../../components/NegativeButton";

import { createEventData } from "./fitnessgramdata";
import { useDispatch, useSelector } from "react-redux";
import {
	getClassesList,
	getEventDataById,
	getEventTestList,
	getMandateEventTestList,
	getRecentEventTestList,
	getrecommondedEventTestList,
	getSchoolsList,
	postEventData,
	setEventDataById,
	setResponse,
	updateEvent,
} from "../teacherSlice";
// import { Button } from "antd";
import { Button } from "@chakra-ui/react";
import SuccessModal from "../../../components/SuccessModal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AdminPopUp from "../../../components/GlobalComponents/Popups/AdminPopUp";
import { validateFormData } from "../../../Utilities/FormValidation";

const EditEvent = () => {
	const { title, createEventDetails } = createEventData;
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const params = useParams();

	const eventId = params.eventId;

	console.log(eventId, "event ID=========>");

	const userId = useSelector((state) => state.profile.userId);
	const selectedRole = useSelector((state) => state.profile.selectedRole);
	const token = useSelector((state) => state.profile.token);
	const schoolsList = useSelector((state) => state.teacher.schools);
	const classesList = useSelector((state) => state.teacher.classes);
	const eventTestList = useSelector((state) => state.teacher.eventTestList);
	const isLoading = useSelector((state) => state.teacher.loading);
	const responseCode = useSelector((state) => state.teacher.responseCode);
	const eventEditDetails = useSelector((state) => state.teacher.eventDataById);
	const {required, exclude} = useSelector(
		(state) => state?.teacher?.mandateEventTestList
	  );

	console.log(eventEditDetails, "event edit details");

	const initialEventTests = [
		{
			name: "Aerobic Capacity",
			test_items: [],
		},
		{
			name: "Body Composition",
			test_items: [],
		},
		{
			name: "Muscle Strength and Endurance",
			test_items: [],
		},
		{
			name: "Flexibility",
			test_items: [],
		},
		{
			name: "Activity Days",
			test_items: [],
		},
	];

	const autoSelectArr = ["ONE-MILE RUN", "ONE-MILE WALK", "HEART"];

	const autoSelectObj = {
		"ONE-MILE RUN": (modifiedEvents, testName) => {
			let autoIndex = modifiedEvents.findIndex((event) =>
				event.name.includes("Body Composition"),
			);

			let autoIndex2 = modifiedEvents.findIndex((event) =>
				event.name.includes("Aerobic Capacity"),
			);
			if (autoIndex == -1) {
				modifiedEvents.push({
					name: "Body Composition",
					test_items: ["HEIGHT", "WEIGHT"],
				});
				setSelectedTestItems((prevState) => [...prevState, "HEIGHT", "WEIGHT"]);
			} else {
				if (
					modifiedEvents[autoIndex2]?.test_items.includes("ONE-MILE RUN") &&
					!modifiedEvents[autoIndex].test_items.includes("WEIGHT")
				) {
					modifiedEvents[autoIndex].test_items.push("WEIGHT");
					setSelectedTestItems((prevState) => [...prevState, "WEIGHT"]);
				}

				if (
					modifiedEvents[autoIndex2]?.test_items.includes("ONE-MILE RUN") &&
					!modifiedEvents[autoIndex].test_items.includes("HEIGHT")
				) {
					modifiedEvents[autoIndex].test_items.push("HEIGHT");
					setSelectedTestItems((prevState) => [...prevState, "HEIGHT"]);
				}
			}
		},
		"ONE-MILE WALK": (modifiedEvents, testName, testIndex) => {
			let autoIndex2 = modifiedEvents.findIndex((event) =>
				event.name.includes("Aerobic Capacity"),
			);

			if (!modifiedEvents[autoIndex2]?.test_items.includes("HEART")) {
				modifiedEvents[autoIndex2]?.test_items.push("HEART");

				!selectedTestItems.includes("HEART") &&
					setSelectedTestItems((prevState) => [...prevState, "HEART"]);
			}

			let autoIndex = modifiedEvents.findIndex((event) =>
				event.name.includes("Body Composition"),
			);
			if (autoIndex == -1) {
				modifiedEvents.push({
					name: "Body Composition",
					test_items: ["WEIGHT"],
				});
				setSelectedTestItems((prevState) => [...prevState, "WEIGHT"]);
			} else {
				if (
					!modifiedEvents[autoIndex].test_items.includes("WEIGHT") &&
					modifiedEvents[autoIndex2]?.test_items.includes("ONE-MILE WALK")
				) {
					modifiedEvents.splice(autoIndex, 1, {
						...modifiedEvents[autoIndex],
						test_items: [...modifiedEvents[autoIndex]["test_items"], "WEIGHT"],
					});
					setSelectedTestItems((prevState) => [...prevState, "WEIGHT"]);
				}
			}
		},
		HEART: (modifiedEvents, testName, testIndex, modifiedItems) => {
			if (modifiedItems.includes("ONE-MILE WALK")) {
				let testItemIndex =
					modifiedEvents[testIndex].test_items.indexOf("ONE-MILE WALK");
				if (testItemIndex != -1) {
					modifiedEvents[testIndex].test_items.splice(testItemIndex, 1);
					let testItemIndex2 = modifiedItems.indexOf("ONE-MILE WALK");
					modifiedItems.splice(testItemIndex2, 1);
					setSelectedTestItems([...modifiedItems]);
				}
			}
		},
	};

	const [schools, setSchools] = useState();
	const [classes, setClasses] = useState();

	const [selectedSchools, setSelectedSchools] = useState([]);
	const [selectedClasses, setSelectedClasses] = useState([]);
	const [selectedEventTests, setSelectedEventTests] =
		useState(initialEventTests);

	const [selectedTestItems, setSelectedTestItems] = useState([]);

	const [selectedEvents, setSelectedEvents] = useState([]);
	const [inputs, setInputs] = useState({
		event_name: "",
		event_type: "",
		start_date: "",
		end_date: "",
		schools: [],
		classes: [],
	});
	const [errors, setErrors] = useState({});

	const handleSchools = (schoolsList) => {
		let all_value = null;
		if (schoolsList?.length) {
			for (let school of schoolsList) {
				if (school.label == "All") {
					all_value = school;
					break;
				}
			}
		}

		if (all_value) {
			console.log("in all case");
			setSelectedSchools(all_value);
			console.log(all_value.value, "paylpoadd");

			setInputs((prevState) => ({
				...prevState,
				schools: all_value.value,
			}));
		} else {
			console.log("Not in all case");

			setSelectedSchools(schoolsList);

			setInputs((prevState) => ({
				...prevState,
				schools: schoolsList?.map((item) => item?.value),
			}));
		}
	};

	const handleClasses = (classesList) => {
		let all_value = null;
		if (classesList?.length) {
			for (let clas of classesList) {
				if (clas.label == "All") {
					all_value = clas;
					break;
				}
			}
		}

		if (all_value) {
			console.log("in all case");
			setSelectedClasses([all_value]);

			setInputs((prevState) => ({
				...prevState,
				classes: all_value.value,
			}));
		} else {
			console.log("Not in all case");

			setSelectedClasses(classesList);

			setInputs((prevState) => ({
				...prevState,
				classes: classesList?.map((item) => item?.value),
			}));
		}
	};
	const handleEventsTestList = (i, testName, testItem) => {
		console.log(testItem, "test item in handle function");
		console.log(testName, "testName");

		let modifiedEvents = [...selectedEvents];
		let modifiedItems = [...selectedTestItems];

		if (testName === "Activity Days") {
			let testIndex = modifiedEvents.findIndex((event) =>
				event.name.includes(testName),
			);
			if (testIndex == -1) {
				modifiedEvents.push({
					name: testName,
					test_items: [
						"AEROBIC ACTIVITY",
						"MUSCLE-STRENGTHENING ACTIVITY",
						"BONE-STRENGTHENING ACTIVITY",
					],
				});
				setSelectedTestItems((prevState) => [
					...prevState,

					"AEROBIC ACTIVITY",
					"MUSCLE-STRENGTHENING ACTIVITY",
					"BONE-STRENGTHENING ACTIVITY",
				]);
			} else {
				modifiedEvents.splice(testIndex, 1);
				[
					"AEROBIC ACTIVITY",
					"MUSCLE-STRENGTHENING ACTIVITY",
					"BONE-STRENGTHENING ACTIVITY",
				].forEach((item) => {
					let testItemIndex2 = modifiedItems.indexOf(item);
					modifiedItems.splice(testItemIndex2, 1);
					setSelectedTestItems([...modifiedItems]);
				});
			}
		} else if (
			["ABDOMINAL SKIN FOLD", "CALF SKIN FOLD", "TRICEP SKIN FOLD"].includes(
				testItem,
			)
		) {
			let testIndex = modifiedEvents.findIndex((event) =>
				event.name.includes(testName),
			);
			if (testIndex === -1) {
				modifiedEvents.push({
					name: testName,
					test_items: [
						"ABDOMINAL SKIN FOLD",
						"CALK SKIN FOLD",
						"TRICEP SKIN FOLD",
					],
				});

				setSelectedTestItems((prevState) => [
					...prevState,
					"ABDOMINAL SKIN FOLD",
					"CALF SKIN FOLD",
					"TRICEP SKIN FOLD",
				]);
			} else {
				if (
					!modifiedEvents[testIndex].test_items.includes("ABDOMINAL SKIN FOLD")
				) {
					modifiedEvents[testIndex].test_items.push(
						"ABDOMINAL SKIN FOLD",
						"CALF SKIN FOLD",
						"TRICEP SKIN FOLD",
					);
					setSelectedTestItems((prevState) => [
						...prevState,
						"ABDOMINAL SKIN FOLD",
						"CALF SKIN FOLD",
						"TRICEP SKIN FOLD",
					]);
				} else {
					let remainingItems = modifiedEvents[testIndex].test_items.filter(
						(item) =>
							![
								"ABDOMINAL SKIN FOLD",
								"CALF SKIN FOLD",
								"TRICEP SKIN FOLD",
							].includes(item),
					);

					modifiedEvents.splice(testIndex, 1, {
						...modifiedEvents[testIndex],
						test_items: remainingItems,
					});

					["ABDOMINAL SKIN FOLD", "CALF SKIN FOLD", "TRICEP SKIN FOLD"].forEach(
						(item) => {
							let testItemIndex2 = modifiedItems.indexOf(item);
							modifiedItems.splice(testItemIndex2, 1);
							setSelectedTestItems([...modifiedItems]);
						},
					);
				}
			}
		} else if (
			["SIT AND REACH LEFT", "SIT AND REACH RIGHT"].includes(testItem)
		) {
			let testIndex = modifiedEvents.findIndex((event) =>
				event.name.includes(testName),
			);
			if (testIndex === -1) {
				modifiedEvents.push({
					name: testName,
					test_items: ["SIT AND REACH LEFT", "SIT AND REACH RIGHT"],
				});

				setSelectedTestItems((prevState) => [
					...prevState,
					"SIT AND REACH LEFT",
					"SIT AND REACH RIGHT",
				]);
			} else {
				if (
					!modifiedEvents[testIndex].test_items.includes("SIT AND REACH LEFT")
				) {
					modifiedEvents[testIndex].test_items.push(
						"SIT AND REACH LEFT",
						"SIT AND REACH RIGHT",
					);
					setSelectedTestItems((prevState) => [
						...prevState,
						"SIT AND REACH LEFT",
						"SIT AND REACH RIGHT",
					]);
				} else {
					let remainingItems = modifiedEvents[testIndex].test_items.filter(
						(item) =>
							!["SIT AND REACH LEFT", "SIT AND REACH RIGHT"].includes(item),
					);

					modifiedEvents.splice(testIndex, 1, {
						...modifiedEvents[testIndex],
						test_items: remainingItems,
					});

					["SIT AND REACH LEFT", "SIT AND REACH RIGHT"].forEach((item) => {
						let testItemIndex2 = modifiedItems.indexOf(item);
						modifiedItems.splice(testItemIndex2, 1);
						setSelectedTestItems([...modifiedItems]);
					});
				}
			}
		} else if (
			["SHOULDER STRETCH LEFT", "SHOULDER STRETCH RIGHT"].includes(testItem)
		) {
			let testIndex = modifiedEvents.findIndex((event) =>
				event.name.includes(testName),
			);
			if (testIndex === -1) {
				modifiedEvents.push({
					name: testName,
					test_items: ["SHOULDER STRETCH LEFT", "SHOULDER STRETCH RIGHT"],
				});

				setSelectedTestItems((prevState) => [
					...prevState,
					"SHOULDER STRETCH LEFT",
					"SHOULDER STRETCH RIGHT",
				]);
			} else {
				if (
					!modifiedEvents[testIndex].test_items.includes(
						"SHOULDER STRETCH LEFT",
					)
				) {
					modifiedEvents[testIndex].test_items.push(
						"SHOULDER STRETCH LEFT",
						"SHOULDER STRETCH RIGHT",
					);
					setSelectedTestItems((prevState) => [
						...prevState,
						"SHOULDER STRETCH LEFT",
						"SHOULDER STRETCH RIGHT",
					]);
				} else {
					let remainingItems = modifiedEvents[testIndex].test_items.filter(
						(item) =>
							!["SHOULDER STRETCH LEFT", "SHOULDER STRETCH RIGHT"].includes(
								item,
							),
					);

					modifiedEvents.splice(testIndex, 1, {
						...modifiedEvents[testIndex],
						test_items: remainingItems,
					});

					let remainingItems2 = modifiedItems.filter(
						(item) =>
							!["SHOULDER STRETCH LEFT", "SHOULDER STRETCH RIGHT"].includes(
								item,
							),
					);

					setSelectedTestItems([...remainingItems2]);
				}
			}
		} else {
			let testIndex = modifiedEvents.findIndex((event) =>
				event.name.includes(testName),
			);
			if (testIndex === -1) {
				modifiedEvents.push({ name: testName, test_items: [testItem] });
				setSelectedTestItems((prevState) => [...prevState, testItem]);
				console.log("1st condition");
				autoSelectArr.includes(testItem) &&
					autoSelectObj[testItem](
						modifiedEvents,
						testName,
						testIndex,
						modifiedItems,
					);
			} else {
				if (!modifiedEvents[testIndex].test_items.includes(testItem)) {
					modifiedEvents.splice(testIndex, 1, {
						...modifiedEvents[testIndex],
						test_items: [...modifiedEvents[testIndex].test_items, testItem],
					});
					setSelectedTestItems((prevState) => [...prevState, testItem]);
					console.log("2st condition");

					autoSelectArr.includes(testItem) &&
						autoSelectObj[testItem](
							modifiedEvents,
							testName,
							testIndex,
							modifiedItems,
						);
				} else {
					let testItemIndex =
						modifiedEvents[testIndex].test_items.indexOf(testItem);

					let remaining = modifiedEvents[testIndex].test_items.filter(
						(item, index) => index !== testItemIndex,
					);

					console.log(remaining, "remaining items");

					modifiedEvents.splice(testIndex, 1, {
						...modifiedEvents[testIndex],
						test_items: [...remaining],
					});
					let testItemIndex2 = modifiedItems.indexOf(testItem);
					console.log(testItemIndex2, "index2++++++++++++++++++++++++>>>");
					modifiedItems.splice(testItemIndex2, 1);
					console.log(modifiedItems, "modified items=====>");

					setSelectedTestItems([...modifiedItems]);

					console.log("3st condition");

					autoSelectArr.includes(testItem) &&
						autoSelectObj[testItem](
							modifiedEvents,
							testName,
							testIndex,
							modifiedItems,
						);
				}
			}
		}

		console.log(modifiedEvents);
		setSelectedEvents([...modifiedEvents]);

		console.log(i, testItem, "in create event page");
	};

	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
		console.log([e.target.name], e.target.value);
	};

	useEffect(() => {
		dispatch(getSchoolsList({ userId, token }));
		// dispatch(setClasses([]))
		dispatch(getEventTestList(token));
		dispatch(setResponse(""));

		let body = {
			accesser_uuid: userId,
			accesser_role: selectedRole,
		};
		dispatch(getEventDataById({ eventId, token }));
	}, []);

	useEffect(() => {
		dispatch(getClassesList({ body: { schools: inputs?.schools }, token }));
		// setSelectedClasses([])
		dispatch(
			getMandateEventTestList({
			  token,
			  schools: { schools: inputs?.schools },
			})
		  );
	}, [inputs?.schools]);

	useEffect(() => {
		dispatch(
			getRecentEventTestList({ token, classes: { classes: selectedClasses } }),
		);
		dispatch(
			getrecommondedEventTestList({
				token,
				classes: { classes: selectedClasses },
			}),
		);
	}, [selectedClasses]);

	useEffect(() => {
		if (eventEditDetails && Object.keys(eventEditDetails)?.length) {
			setInputs({
				event_name: eventEditDetails?.event_name,
				event_type: eventEditDetails?.event_type,
				start_date: eventEditDetails?.start_date?.split("T")[0],
				end_date: eventEditDetails?.end_date?.split("T")[0],
				schools: eventEditDetails?.FitnessSchool?.map((school) => school.uuid),
				classes: eventEditDetails?.FitnessClass?.map((clas) => clas.uuid),
			});
			let arr = eventEditDetails?.event_struct
				?.map((item) => item.test_items)
				.flat(5);
			console.log(arr, "arr +++++++++");
			setSelectedTestItems(arr.slice());
			setSelectedEvents([...eventEditDetails?.event_struct]);
		}

		if (eventEditDetails?.FitnessSchool?.length) {
			let arr = eventEditDetails.FitnessSchool.map((school) => ({
				label: school.school_name,
				value: school.uuid,
			}));
			setSelectedSchools(arr);
		}

		if (eventEditDetails?.FitnessClass?.length) {
			let classArr = eventEditDetails.FitnessClass.map((clas) => ({
				label: clas.class_name,
				value: clas.uuid,
			}));
			setSelectedClasses(classArr);
		}
	}, [eventEditDetails]);

	console.log(selectedSchools, "selectedSchools");
	console.log(selectedClasses, "selected classes");

	console.log(eventTestList, "event test list in create event page");
	console.log(selectedEvents, "selectedEvents=+>");
	console.log(selectedTestItems, "selectedTestItems");
	console.log(inputs, "inputs");
	console.log(eventEditDetails, "event edit details in fg edit event");

	const handleSubmit = () => {
		let body = {
			...inputs,

			event_struct: selectedEvents,
		};

		let errorObj = validateFormData(body);

		console.log(errorObj, "validation errors==========>");
		setErrors(errorObj);

		if (Object.keys(errorObj)?.length === 0) {
			let payload = {
				...body,
				updater_role: selectedRole,
				updated_by: userId,
				type_of_gram: false,
			};

			console.log(payload, "payload brfore dispatch");

			dispatch(updateEvent({ payload, token, eventId }));
		}
	};
	useEffect(() => {
		let schoolOptions = [];

		const schoolUuidArray =
			schoolsList?.length &&
			schoolsList.map((each) => {
				schoolOptions.push({ label: each.school_name, value: each.uuid });
				return each.uuid;
			});

		schoolOptions.unshift({ label: "All", value: schoolUuidArray });

		setSchools(schoolOptions);
	}, [schoolsList]);

	useEffect(() => {
		let classOptions = [];

		const classUuidArr =
			classesList?.length &&
			classesList.map((each) => {
				classOptions.push({ label: each.class_name, value: each.uuid });
				return each.uuid;
			});

		classOptions.unshift({ label: "All", value: classUuidArr });

		setClasses(classOptions);
	}, [classesList]);
	return (
		<Flex position="relative" gap="4" direction="column" height="100%">
			<Text>{title}</Text>
			<Grid templateColumns="repeat(3,1fr)" gap="8">
				<GridItem>
					<Box maxW="100%">
						<Text mb="2">Schools</Text>
						<MultiSelect
							useBasicStyles
							name="schools"
							colorScheme="bg"
							isMulti
							value={selectedSchools}
							closeMenuOnSelect
							onChange={handleSchools}
							options={selectedSchools?.[0]?.label != "All" ? schools : []}
						/>
						{errors?.schools && <Text color="red">{errors.schools}</Text>}
					</Box>
				</GridItem>
				<GridItem>
					<Box maxW="100%">
						<Text mb="2">Classes</Text>
						<MultiSelect
							useBasicStyles
							name="classes"
							colorScheme="bg"
							isMulti
							value={selectedClasses}
							closeMenuOnSelect
							onChange={handleClasses}
							options={
								selectedSchools?.length && selectedClasses?.[0]?.label != "All"
									? classes
									: []
							}
						/>
						{errors?.classes && <Text color="red">{errors.classes}</Text>}
					</Box>
				</GridItem>

				{/* <GridProvider data={createEventDetails} handleChange={handleChange} /> */}
				{createEventDetails.map((item, index) => {
					return (
						<GridItem>
							{item.inputType == "select" && (
								<Box maxW="100%">
									<Text mb="2">{item.lable}</Text>
									<Select
										bg="bg.100"
										borderColor="bg.100"
										name={item.name}
										value={
											inputs?.[item.name]?.trim().charAt(0).toUpperCase() +
											inputs?.[item.name]?.trim().slice(1)
										}
										// defaultValue={eventEditDetails?.[item.name]}
										place
										TRUNK
										holder="Select..."
										onChange={(e) => handleChange(e)}
									>
										{item.options.map((value, i) => {
											return (
												<option
													key={i}
													value={value}
													// selected={inputs?.[item.name] == value}
												>
													{value}
												</option>
											);
										})}
										{errors?.[item?.name] && (
											<Text color="red">{errors?.[item?.name]}</Text>
										)}
									</Select>
								</Box>
							)}

							{item.inputType !== "multi-select" &&
								item.inputType !== "select" && (
									<Box maxW="100%">
										<Text mb="2">{item.lable}</Text>
										<Input
											type={item.inputType}
											name={item.name}
											value={
												item.inputType == "date"
													? inputs?.[item.name]?.split("T")[0]
													: inputs?.[item.name]
											}
											onChange={(e) => handleChange(e)}
											border="0px"
											bg="bg.100"
										/>
										{errors?.[item?.name] && (
											<Text color="red">{errors?.[item?.name]}</Text>
										)}
									</Box>
								)}
						</GridItem>
					);
				})}
			</Grid>

			<Tabs>
				<TabList borderBottomColor="white">
					<Tab textStyle="h5">New</Tab>
					<Tab textStyle="h5">Recommended for You</Tab>
					<Tab textStyle="h5">Recents</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						{eventTestList?.length &&
							eventTestList.map((test, i) => {
								return (
									<Flex direction="column" key={test.name} gap="1" mt="2">
										<Text textStyle="h5">{test.name}</Text>
										<HStack spacing="2">
											{test.test_items.map((testItem, j) => {
												return (
													<Button
														size="sm"
														key={testItem}
														onClick={() => {
															if(![...exclude,...required].includes(testItem)){
															  handleEventsTestList(
																i,
																test.name,
																testItem
															  );
															}
														  }}
														rounded="lg"
														bg={
															selectedTestItems.includes(testItem)
																? "primary"
																: "bg.100"
														}
														color={
															selectedTestItems.includes(testItem)
																? "white"
																: "black"
														}
													>
														<Text textStyle="h6">{testItem}</Text>
													</Button>
												);
											})}
										</HStack>
									</Flex>
								);
							})}
						{errors?.event_struct && (
							<Text color="red">{errors?.event_struct}</Text>
						)}
					</TabPanel>
					<TabPanel>
						<p>Recommonded Event list</p>
					</TabPanel>
					<TabPanel>
						<p>Recent Event list</p>
					</TabPanel>
				</TabPanels>
			</Tabs>

			<Flex justify="center" gap="8" pb="8" w="100%">
				<Box
					onClick={() => {
						navigate(`/role/${selectedRole}`), console.log("hello");
					}}
				>
					<NegativeButton text={"Cancel"} />
				</Box>{" "}
				<Box onClick={handleSubmit}>
					<PositiveButton text={"Save"} isLoading={isLoading} />
				</Box>
			</Flex>
			{/* <SuccessModal code={responseCode} message="Event Created" /> */}
			<AdminPopUp />
		</Flex>
	);
};

export default EditEvent;

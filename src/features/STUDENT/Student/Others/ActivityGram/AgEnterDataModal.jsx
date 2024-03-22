import React, { useState } from "react";
import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	ListItem,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Select,
	Stack,
	Text,
	UnorderedList,
	useDisclosure,
} from "@chakra-ui/react";

import clockStartImage from "../../../../../assets/images/OthersSectionImages/stopwatchImage1.svg";

import clockStopImage from "../../../../../assets/images/OthersSectionImages/stopwatchImage2.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { agStoreStudentData } from "../../../../teacher/teacherSlice";
import SuccessModal from "../../../../../components/SuccessModal";

const AgEnterDataModal = (props) => {
	const {
		agEnterDataModal,
		setAgEnterDataModal,
		time,
		schoolDay,
		selectedTimeObj,
	} = props;

	const { isOpen, onOpen, onClose } = useDisclosure();

	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userRole = useSelector((state) => state.profile.selectedRole);
	const token = useSelector((state) => state?.profile?.token);
	const userId = useSelector((state) => state.profile.userIds);

	const loginResponse = useSelector((state) => state?.profile?.user);

	const [firstTimerClicked, setFirstTimerClicked] = useState(false);

	const [secondTimerClicked, setSecondTimerClicked] = useState(false);

	const [errorMsg, setErrorMsg] = useState(false);

	const firstTimerList = [
		"7:00 AM",
		"7:30 AM",
		"8:00 AM",
		"8:30 AM",
		"9:00 AM",
		"9:30 AM",
		"10:00 AM",

		"10:30 AM",
		"11:00 AM",
		"11:30 AM",
		"12:00 PM",
		"12:30 PM",
		"1:00 PM",
		"1:30 PM",

		"2:00 PM",
		"2:30 PM",
		"3:00 PM",
		"3:30 PM",
		"4:00 PM",
		"4:30 PM",
		"5:00 PM",
		"5:30 PM",

		"6:00 PM",
		"6:30 PM",
		"7:00 PM",
		"7:30 PM",
		"8:00 PM",
		"8:30 PM",
		"9:00 PM",
		"9:30 PM",

		"10:00 PM",
		"10:30 PM",
		"11:00 PM",
	];

	const activityTypesList = [
		"Lifestyle Activity",
		"Rest",
		"Musclar Activity",
		"Flexibility Activity",
		"Aerobic Sports",
		"Aerobic Activity",
	];

	const activityTypesObj = {
		"Lifestyle Activity": [
			"Walking, bicycling, or skateboarding",
			"Housework or yardwork",

			"Playing active games or dancing",
			"Work-active job",

			"Other",
		],

		"Aerobic Activity": [
			"Aerobic dance activity",

			"Aerobic gym equipment",

			"Aerobic activity (bicycling, running, etc)",
			"Aerobic activity in Physical Education",
			"Other",
		],

		"Aerobic Sports": [
			"Field sports (baseball, softball, football)",
			"Court sports (basketball, volleyball, hockey)",
			"Racquet sports",
			"Sports during Physical Education",
			"Other",
		],

		"Flexibility Activity": [
			"Martial Arts (Tai Chi)",
			"Stretching",
			"Yoga",
			"Ballet",
			"Other",
		],

		"Musclar Activity": [
			"Gymnastics or cheer, dance or drill teams",
			"Track and field sports",

			"Weight lifting or calisthenics",

			"Wrestling or Martial Arts",

			"Other",
		],

		Rest: [
			"Schoolwork or homework o reading",
			"Computer games or TV/videos",
			"Eating or resting",

			"Sleeping",

			"Other",
		],
	};

	const [timerValues, setTimerValues] = useState();

	const handleStartTime = (selectedTime) => {
		const endTime = firstTimerList[firstTimerList?.indexOf(selectedTime) + 1];
		setTimerValues({
			...timerValues,
			start_time: selectedTime,
			end_time: endTime,
		});
		setFirstTimerClicked(!firstTimerClicked);
	};

	const handleEndTime = (selectedTime) => {
		if (
			firstTimerList?.indexOf(selectedTime) >
			firstTimerList?.indexOf(timerValues?.start_time)
		) {
			setTimerValues({
				...timerValues,

				end_time: selectedTime,
			});

			setSecondTimerClicked(!secondTimerClicked);
		}
	};

	const handleTimerValues = (e) => {
		if (e.target.name === "start_time") {
			const newVal = firstTimerList.find((item) =>
				e.target.value.toLowerCase().includes(item.toLowerCase()),
			);

			if (newVal) {
				const secondValIndexNum = firstTimerList?.indexOf(newVal) + 1;
				const secondVal = firstTimerList[secondValIndexNum];
				setTimerValues((prevState) => ({
					...prevState,
					firstTimer: newVal,
					secondTimer: secondVal,
				}));
			}
		} else if (e.target.name === "end_time") {
			const newVal = firstTimerList.find((item) =>
				e.target.value.toLowerCase().includes(item.toLowerCase()),
			);
			if (newVal) {
				setTimerValues((prevState) => ({
					...prevState,
					secondTimer: newVal,
				}));
			}
		} else if (e.target.name === "type_of_activity") {
			setTimerValues((prevState) => ({
				...prevState,
				[e.target.name]: e.target.value,
				activity: "",
			}));
		} else {
			setTimerValues((prevState) => ({
				...prevState,
				[e.target.name]: e.target.value,
			}));
		}
	};

	const handleSubmit = (e) => {
		let error = Object.values(timerValues).some(
			(item) => item === "" || item === undefined || item === null,
		);
		console.log(error, "hi error how are you=============>");
		setErrorMsg(error);
		if (!error) {
			let timeresArray = [];

			for (
				let i = firstTimerList.indexOf(timerValues.start_time);
				i < firstTimerList.indexOf(timerValues.end_time);
				i++
			) {
				const obj = {
					...timerValues,
					start_time: firstTimerList[i],
					end_time: firstTimerList[i + 1],
					submitted_by: userId,
					submitter_role: userRole,
				};

				timeresArray.push(obj);
			}

			let body = {
				user_uuid: params.studentId,
				event_uuid: params.eventId,
				data: timeresArray,
				date: schoolDay,
			};
			dispatch(agStoreStudentData({ body, token }));
			setAgEnterDataModal(false);
		}
	};

	useEffect(() => {
		if (agEnterDataModal) {
			setTimerValues({
				start_time: time?.start_time,
				end_time: time?.end_time,
				type_of_activity: selectedTimeObj?.type_of_activity,
				activity: selectedTimeObj?.activity,
				level: selectedTimeObj?.level,
				frequency_of_time: selectedTimeObj?.frequency_of_time,
			});
		}
	}, [agEnterDataModal]);

	console.log(timerValues, "timerValues");

	return (
		<>
			<Modal
				onClose={() => setAgEnterDataModal(false)}
				isOpen={agEnterDataModal}
				isCentered
				size="sm"
			>
				<ModalOverlay />
				<ModalContent shadow={"lg"} p={0}>
					<ModalHeader
						p="0"
						pl="2rem"
						bgColor={"primary"}
						py="2"
						color="white"
						fontSize={"md"}
					>
						Add ActivityGram Activity
					</ModalHeader>

					<ModalBody w="full">
						<Flex alignItems="center">
							<Box className="mr-2">
								<Text textStyle="h6" color="black-2">
									Start Time:
								</Text>
								<Box className="relative">
									<Box>
										<InputGroup>
											<Input
												border="1px solid #f5f5f5"
												bg="#EDF4FE"
												type="text"
												name="start_time"
												borderRadius={15}
												value={timerValues?.start_time}
												onChange={handleTimerValues}
											/>

											<InputRightElement
												children={
													<Image
														src={clockStartImage}
														alt="clock-image"
														className="w-5 h-5"
														onClick={() => {
															setFirstTimerClicked(!firstTimerClicked);
															setSecondTimerClicked(false);
														}}
													/>
												}
											/>
										</InputGroup>
									</Box>
									{firstTimerClicked ? (
										<Box
											className="absolute w-full z-10 h-[20vh] bg-white ease-in duration-700 overflow-scroll example border-2 border-white shadow-lg rounded-xl"
											textAlign="center"
										>
											{firstTimerList?.map((each, index) => {
												if (index < firstTimerList.length - 1) {
													return (
														<Text
															mt="2"
															_hover={{
																bg: "primary",
																color: "white",
																borderRadius: "7",
																cursor: "pointer",
															}}
															key={index}
															onClick={() => handleStartTime(each)}
														>
															{each}
														</Text>
													);
												}
											})}
										</Box>
									) : null}
								</Box>
							</Box>
							<Box className="ml-2">
								<Text textStyle="h6" color="black-2">
									End Time:
								</Text>
								<Box className="relative">
									<Box>
										<InputGroup>
											<Input
												border="1px solid #f5f5f5"
												bg="#EDF4FE"
												borderRadius={15}
												type="text"
												name="end_time"
												value={timerValues?.end_time}
												onChange={handleTimerValues}
											/>
											<InputRightElement
												children={
													<Image
														src={clockStopImage}
														alt="clock-image"
														className="w-5 h-5"
														onClick={() => {
															setSecondTimerClicked(!secondTimerClicked);
															setFirstTimerClicked(false);
														}}
													/>
												}
											/>
										</InputGroup>
									</Box>
									{secondTimerClicked ? (
										<Box
											className="absolute w-full z-10 h-[20vh] bg-white ease-in duration-700 overflow-scroll example border-2 border-white shadow-lg rounded-xl"
											textAlign="center"
										>
											{firstTimerList?.map((each, index) => {
												if (index >= 1 && index < firstTimerList.length) {
													return (
														<Text
															mt="2"
															_hover={{
																bg: "primary",
																color: "white",
																borderRadius: "7",
																cursor: "pointer",
															}}
															key={index}
															onClick={() => handleEndTime(each)}
														>
															{each}
														</Text>
													);
												}
											})}
										</Box>
									) : null}
								</Box>
							</Box>
						</Flex>

						<Box mt="3" display="flex" alignItems={"center"} gap={2}>
							<Text fontSize={"h2"} color="black-2">
								Duration :{" "}
							</Text>
							<Text fontSize="h2" color="black-2">
								30 minutes
							</Text>
						</Box>

						<hr className="border border-[#f5f5f5] mt-3 mb-3" />

						<Box mt="3">
							<h1>Type of Activity: </h1>

							<Select
								placeholder="Select option"
								size="md"
								variant="filled"
								border="1px solid #f5f5f5"
								bg="#EDF4FE"
								name="type_of_activity"
								borderRadius="15"
								onChange={handleTimerValues}
								value={timerValues?.type_of_activity}
							>
								{activityTypesList?.map((each) => (
									<option key={each} value={each}>
										{each}
									</option>
								))}
							</Select>

							{timerValues?.activityType?.length > 0 && (
								<ul
									className="flex gap-5 mt-3 mb-2  flex-wrap flex-grow items-center border-2 border-red"
									name="activity"
								>
									{activityTypesObj[timerValues?.activityType]?.map((each) => (
										<>
											<li
												onClick={(event) => {
													setTimerValues({
														...timerValues,
														activity: event.target.textContent,
													});

													if (event.target.textContent?.length === 0) {
														setErrors({
															...errors,
															activity: "*Required",
														});
													} else {
														setErrors({
															...errors,
															activity: null,
														});
													}
												}}
												className={`${
													timerValues?.activity === each
														? "bg-[#ECF4FF]"
														: " bg-[#F5F5F5]"
												} px-3 py-2  rounded-sm`}
											>
												{each}
											</li>
										</>
									))}
								</ul>
							)}
						</Box>

						<Box mt="3">
							<h1>Type of Sub Activity: </h1>

							<Select
								placeholder="Select option"
								size="md"
								variant="filled"
								border="1px solid #f5f5f5"
								name="activity"
								bg="#EDF4FE"
								borderRadius="15"
								value={timerValues?.activity}
								onChange={handleTimerValues}
							>
								{activityTypesObj[timerValues?.type_of_activity]?.map(
									(each) => (
										<option
											value={each}
											selected={each == timerValues?.activity}
										>
											{each}
										</option>
									),
								)}
							</Select>
						</Box>

						<Box>
							<h1>My Activity Level was: </h1>
							<Select
								placeholder="Select option"
								size="md"
								variant="filled"
								border="1px solid #f5f5f5"
								name="level"
								bg="#EDF4FE"
								borderRadius="15"
								onChange={handleTimerValues}
								value={timerValues?.level}
							>
								<option value="Light">Light</option>
								<option value="Moderate">Moderate</option>
							</Select>
						</Box>
						<Box>
							<Box
								mt="2"
								display="flex"
								justifyContent="space-between"
								alignItems="center"
							>
								<Select
									placeholder="Select option"
									size="md"
									w={60}
									variant="filled"
									border="1px solid #f5f5f5"
									name="frequency_of_time"
									bg="#EDF4FE"
									borderRadius="15"
									onChange={handleTimerValues}
									value={timerValues?.frequency_of_time}
								>
									<option value="Some">Some</option>
									<option value="Most">Most</option>
									<option value="All"> All</option>
								</Select>
								<h1>of the time</h1>
							</Box>
						</Box>

						{errorMsg ? (
							<Text color="red">Please Select all the fields</Text>
						) : null}

						<Box
							display="flex"
							justifyContent="center"
							gap={5}
							alignItems="center"
							mt="5"
							mb="3"
						>
							<Button
								bgColor="#F5F4F4"
								textColor="black"
								fontSize="small"
								borderRadius={50}
								type="button"
								px={12}
								py={0}
								onClick={() => {
									setAgEnterDataModal(false);
								}}
							>
								Cancel
							</Button>
							<Button
								bgColor="green"
								textColor="white"
								fontSize="small"
								borderRadius={50}
								type="submit"
								px={9}
								onClick={handleSubmit}
							>
								Save & Next
							</Button>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AgEnterDataModal;

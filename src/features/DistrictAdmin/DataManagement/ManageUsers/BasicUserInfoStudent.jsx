import React, { useEffect, useState } from "react";
import {
	Box,
	Checkbox,
	Flex,
	Grid,
	GridItem,
	HStack,
	Input,
	InputGroup,
	InputRightElement,
	Radio,
	Select,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";
import { validateFormData } from "../../../../Utilities/FormValidation";
import { useNavigate, useParams } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Select as MultiSelect } from "chakra-react-select";
import { getUserData } from "../../../../store/slices/profileSlice";

const BasicUserInfoStudent = (props) => {
	const navigate = useNavigate();
	const {
		setActiveTab,
		inputDetailsObj,
		setInputDetailsObj,
		selectedRace,
		setSelectedRace,
		errors,
		setErrors,
	} = props;

	const params = useParams();

	const id = params.id;

	const dispatch = useDispatch();

	const manageUser = useSelector((state) => state.profile.manageUser);

	const token = useSelector((state) => state?.profile.token);

	const previousPath = useSelector((state) => state?.profile?.previousPath);

	const student = [
		{
			id: "1",
			lable: "Student ID*:",
			placeholder: "",
			name: "student_id",
			inputType: "text",
		},
		{
			id: "2",
			lable: "Username*:",
			placeholder: "",
			name: "user_name",
			inputType: "text",
		},

		{
			id: "3",
			lable: "Password*:",
			placeholder: "",
			name: "password",
			inputType: "password",
		},
		{
			id: "4",
			lable: "Re-enter-Password:",
			placeholder: "",
			name: "re_enter_password",
			inputType: "password",
		},

		{
			id: "5",
			lable: "First Name*:",
			placeholder: "",
			name: "first_name",
			inputType: "text",
		},
		{
			id: "6",
			lable: "Last Name*:",
			placeholder: "",
			name: "last_name",
			inputType: "text",
		},

		{
			id: "7",
			lable: "Middle initial",
			placeholder: "",
			name: "middle_initial",
			inputType: "text",
		},

		{
			id: "8",
			lable: "Birth Date*(mm/dd/yyyy)",
			placeholder: "",
			name: "date_of_birth",
			inputType: "date",
		},

		{
			id: "9",
			lable: "sex Assigned At Birth*",
			placeholder: "",
			name: "gender",
			inputType: "select",
			options: [
				{ lable: "Male", value: "Male" },
				{ lable: "Female", value: "Female" },
			],
		},
		{
			id: "10",
			lable: "Grade*:",
			placeholder: "",
			name: "grade",
			inputType: "select",
			options: [
				{ lable: "kindergarten", value: "KG" },
				{ lable: "First Grade", value: 1 },
				{ lable: "Second Grade", value: 2 },
				{ lable: "Third Grade", value: 3 },
				{ lable: "Fourth Grade", value: 4 },
				{ lable: "Fifth Grade", value: 5 },
				{ lable: "Sixth Grade", value: 6 },
				{ lable: "Seventh Grade", value: 7 },
				{ lable: "Eighth Grade", value: 8 },
				{ lable: "Ninth Grade", value: 9 },
				{ lable: "Tenth Grade", value: 10 },
				{ lable: "Eleventh Grade", value: 11 },
				{ lable: "Twelth Grade", value: 12 },
				{ lable: "Adult", value: "Adult" },
			],
		},

		{
			id: "11",
			lable: "Race:",
			placeholder: "",
			name: "race",
			inputType: "multi-select",
			options: [
				{ value: "White", label: "White" },
				{
					value: "Black or African American",
					label: "Black or African American",
				},
				{
					value: "American Indian or Alaska Native",
					label: "American Indian or Alaska Native",
				},
				{ value: "Asian", label: "Asian" },
				{
					value: "Native Hawailian or Other Pacific",
					label: "Native Hawailian or Other Pacific",
				},
				{ value: "Others", label: "Others" },
			],
		},

		{
			id: "12",
			lable: "Ethnicity*",
			placeholder: "",
			name: "ethnicity",
			inputType: "select",
			options: [
				{ lable: "Hispanic or Latino", value: "Hispanic or Latino" },
				{ lable: "Not Hispanic or Latino", value: "Not Hispanic or Latino" },
			],
		},
		{
			id: "13",
			lable: "Student Email Address*:",
			placeholder: "",
			name: "email",
			inputType: "text",
		},

		{
			id: "14",
			lable: "Parent Email Address 1:",
			placeholder: "",
			name: "parent_email_1",
			inputType: "text",
		},

		{
			id: "15",
			lable: "Parent Email Address 2:",
			placeholder: "",
			name: "parent_email_2",
			inputType: "text",
		},

		{
			id: "16",
			lable: "Phone",
			placeholder: "",
			name: "phone",
			inputType: "text",
		},
	];

	const printList = [
		{
			name: "print_body_composition",
			lable: "Print Body Composition",
		},
		{
			name: "print_reports_in_spanish",
			lable: "Print Reports in Spanish",
		},
		{
			name: "permanently_exempt",
			lable: "Permanently Exempt",
		},
	];

	const [showPassword, setShowPassword] = useState({
		password: false,
		re_enter_password: false,
	});
	const handlePassword = (name) => {
		console.log(name, "name of the input field in ");
		setShowPassword((prevState) => ({
			...prevState,
			[name]: !prevState[name],
		}));
	};

	const handleChange = (event) => {
		if (event.target.type === "checkbox") {
			setInputDetailsObj((prevState) => ({
				...prevState,
				[event.target.name]: event.target.checked,
			}));
		} else if (event.target.type === "radio") {
			setInputDetailsObj((prevState) => ({
				...prevState,
				login_status: event.target.value,
			}));
		} else {
			setInputDetailsObj({
				...inputDetailsObj,
				[event.target.name]: event.target.value,
			});
		}
	};

	const handleRace = (selectedRace) => {
		setSelectedRace(selectedRace);
		setInputDetailsObj({
			...inputDetailsObj,
			race: selectedRace.map((race) => race.value),
		});
	};

	const minDate = () => {
		let todayDate = new Date();
		let day = todayDate.getDate();

		let month = todayDate.getMonth() + 1;

		const todayYear = todayDate.getFullYear();

		if (month < 10) month = "0" + month.toString();

		if (day < 10) {
			day = "0" + day.toString();
		}

		const minimumYear = todayYear - "15";

		const minDate = minimumYear + "-" + month + "-" + day;

		return minDate;
	};

	const maxDate = () => {
		let todayDate = new Date();
		let day = todayDate.getDate();

		let month = todayDate.getMonth() + 1;

		const todayYear = todayDate.getFullYear();

		if (month < 10) month = "0" + month.toString();

		if (day < 10) {
			day = "0" + day.toString();
		}

		const maxYear = todayYear - "5";

		const maxDate = maxYear + "-" + month + "-" + day;

		console.log(maxDate, "from 309");

		return maxDate;
	};

	const clickToNext = (props) => {
		const {
			student_role,
			permanently_exempt,
			print_body_composition,
			print_reports_in_spanish,
			re_enter_password,
			race,
			...payload
		} = inputDetailsObj;

		const errorsObj = validateFormData(payload);

		setErrors(errorsObj);

		if (Object.keys(errorsObj).length === 0) {
			setActiveTab(props);
		}
	};

	useEffect(() => {
		if (id) {
			dispatch(getUserData({ id, token }));
		}
	}, []);

	console.log(inputDetailsObj, "a;sdoifjawlerk==========>");

	return (
		<>
			<Grid
				templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
				gap="6"
			>
				{student?.map((item, index) => {
					return (
						<GridItem colSpan="1">
							{!["select", "password", "multi-select", "date"].includes(
								item.inputType,
							) && (
								<Box>
									<Text mb="2" textStyle={"textHead"}>
										{item.lable}
									</Text>
									<Input
										type={item.inputType}
										border="0px"
										bg="bg.100"
										name={item?.name}
										value={inputDetailsObj[item?.name]}
										onChange={handleChange}
										textStyle={"textHead"}
									/>

									{errors?.[item?.name] && (
										<Text color="red">{errors?.[item?.name]}</Text>
									)}
								</Box>
							)}
							{item.inputType == "select" && (
								<Box>
									<Text mb="2" textStyle={"textHead"}>
										{item.lable}
									</Text>
									<Select
										bg="bg.100"
										borderColor="bg.100"
										onChange={handleChange}
										name={item?.name}
										placeholder="select"
										value={inputDetailsObj[item?.name]}
										textStyle={"textHead"}
									>
										{item?.options?.map((value, i) => {
											return (
												<option
													key={i}
													value={value.value}
													selected={inputDetailsObj[item?.value] === value}
												>
													{value.lable}
												</option>
											);
										})}
									</Select>

									{errors?.[item?.name] && (
										<Text color="red" textStyle={"textHead"}>
											{errors?.[item?.name]}
										</Text>
									)}
								</Box>
							)}
							{item.inputType == "multi-select" && (
								<Box>
									<Text mb="2" textStyle={"textHead"}>
										{item.lable}
									</Text>
									<MultiSelect
										useBasicStyles
										colorScheme="bg"
										isMulti
										closeMenuOnSelect
										value={selectedRace}
										backgroundColor="black"
										placeholder="select"
										onChange={handleRace}
										options={item.options}
									/>
									{errors?.[item?.name] && (
										<Text color="red">{errors?.[item?.name]}</Text>
									)}
								</Box>
							)}
							{item.inputType == "password" && (
								<Box>
									<Text mb="2" textStyle={"textHead"}>
										{item.lable}
									</Text>
									<InputGroup>
										<Input
											type={!showPassword[item?.name] ? item.inputType : "text"}
											border="0px"
											bg="bg.100"
											name={item?.name}
											value={inputDetailsObj[item?.name]}
											onChange={handleChange}
										/>

										<InputRightElement
											h="full"
											pb="1.5"
											display={"flex"}
											flexDirection={"column"}
											justifyContent={"center"}
											alignItems={"center"}
										>
											<span
												size="lg"
												backgroundColor="#F5F9FF"
												onClick={() => {
													handlePassword(item?.name);
												}}
											>
												{showPassword[item?.name] ? (
													<ViewIcon cursor={"pointer"} />
												) : (
													<ViewOffIcon cursor={"pointer"} />
												)}
											</span>
										</InputRightElement>
									</InputGroup>
									{errors?.[item?.name] && (
										<Text color="red" textStyle={"textHead"}>
											{errors?.[item?.name]}
										</Text>
									)}
								</Box>
							)}
							{item.inputType == "date" && (
								<Box>
									<Text mb="2">{item.lable}</Text>
									<Input
										type="date"
										border="0px"
										bg="bg.100"
										name={item?.name}
										min={minDate()}
										max={maxDate()}
										value={inputDetailsObj[item?.name]}
										onChange={handleChange}
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
			<div className=" flex gap-20  items-center">
				<Box>
					{printList.map((role) => {
						return (
							<HStack>
								<Checkbox
									value={inputDetailsObj?.[role.name]}
									name={role.name}
									isChecked={inputDetailsObj?.[role.name]}
									onChange={handleChange}
								/>
								<Text textStyle={"textHead"}>{role.lable}</Text>
							</HStack>
						);
					})}
				</Box>

				<GridItem>
					<div>
						<Text className="mb-4" textStyle={"textHead"}>
							Login Status:
						</Text>

						<Stack>
							<Radio
								name="login_status"
								onChange={handleChange}
								isChecked={inputDetailsObj?.login_status == "1" ? true : false}
								value="1"
							>
								Active
							</Radio>
							<Radio
								name="login_status"
								onChange={handleChange}
								isChecked={inputDetailsObj?.login_status == "0" ? true : false}
								value="0"
							>
								Inactive
							</Radio>
						</Stack>
					</div>
					{errors?.["login_status"] && (
						<Text color="red" textStyle={"textHead"}>
							{errors?.["login_status"]}
						</Text>
					)}
				</GridItem>
			</div>
			<Flex mt="8" justify="center" gap="8">
				<Box
					onClick={() => {
						navigate(previousPath);
					}}
				>
					<NegativeButton text={"Cancel"} />
				</Box>
				<Box onClick={() => clickToNext(1)}>
					<PositiveButton text={"Next"} />
				</Box>
			</Flex>
		</>
	);
};

export default BasicUserInfoStudent;

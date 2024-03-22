import {
	Box,
	Flex,
	HStack,
	Input,
	Radio,
	RadioGroup,
	Select,
	Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Select as MultiSelect } from "chakra-react-select";

// import MultiSelect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";
import { addMandatesData } from "./ManageMandatedata";
import { getClassesList, getSchoolsList } from "../../../teacher/teacherSlice";
import {
	getTestItemsList,
	postMandate,
	setAddMandate,
} from "../../../../DistrictAdminApis/districtAdminSlice";
import { color } from "framer-motion";
import SuccessModal from "../../../../components/SuccessModal";
import { validateFormData } from "../../../../Utilities/FormValidation";
const AddMandates = () => {
	const {
		title,
		startDate,
		EndDate,
		requiredLable,
		requiredOptions,
		radioLable,
		radioOptions,
		chooseTestsLable,
		chooseTestsOptions,
		chooseGradesLable,
		chooseGradesOptions,
		mandateTitle,
		chooseSchoolsLabel,
		chooseClassLabel,
	} = addMandatesData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [data, setData] = useState({
		title: "",
		start_date: "",
		end_date: "",
		required: "",
		// login_status: "",
		schools: [],
		// classes: [],
		tests: [],
	});

	const userId = useSelector((state) => state.profile.userId);
	const selectedRole = useSelector((state) => state.profile.selectedRole);
	const token = useSelector((state) => state.profile.token);
	const schoolsList = useSelector((state) => state.teacher.schools);
	const classesList = useSelector((state) => state.teacher.classes);
	const testItemsList = useSelector(
		(state) => state?.districtAdmin?.testItemsList,
	);

	console.log(testItemsList, "from screen");
	const [schools, setSchools] = useState();
	const [classes, setClasses] = useState();
	const [testItems, setTestItems] = useState();
	const [selectedSchools, setSelectedSchools] = useState();
	const [selectedClasses, setSelectedClasses] = useState([]);
	const [selectedTestItems, setSelectedTestItems] = useState([]);
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
			setSelectedSchools([all_value]);

			setData((prevState) => ({
				...prevState,
				schools: all_value.value,
			}));
		} else {
			console.log("Not in all case");

			setSelectedSchools(schoolsList);

			setData((prevState) => ({
				...prevState,
				schools: schoolsList?.map((item) => item?.value),
			}));
		}
	};

	// const handleClasses = (classesList) => {
	// 	let all_value = null;
	// 	if (classesList?.length) {
	// 		for (let clas of classesList) {
	// 			if (clas.label == "All") {
	// 				all_value = clas;
	// 				break;
	// 			}
	// 		}
	// 	}

	// 	if (all_value) {
	// 		console.log("in all case");
	// 		setSelectedClasses([all_value]);

	// 		setData((prevState) => ({
	// 			...prevState,
	// 			classes: all_value.value,
	// 		}));
	// 	} else {
	// 		console.log("Not in all case");

	// 		setSelectedClasses(classesList);

	// 		setData((prevState) => ({
	// 			...prevState,
	// 			classes: classesList?.map((item) => item?.value),
	// 		}));
	// 	}
	// };

	const handleTestItems = (testItemsList) => {
		let all_value = null;
		if (testItemsList?.length) {
			for (let clas of testItemsList) {
				if (clas.label == "All") {
					all_value = clas;
					break;
				}
			}
		}

		if (all_value) {
			console.log("in all case");
			setSelectedTestItems([all_value]);

			setData((prevState) => ({
				...prevState,
				tests: all_value.value,
			}));
		} else {
			console.log("Not in all case");

			setSelectedTestItems(testItemsList);

			setData((prevState) => ({
				...prevState,
				tests: testItemsList?.map((item) => item?.value),
			}));
		}
	};

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
		// setField([event.target.name], event.target.value);
	};

	console.log(data, "datadata");

	console.log(data?.required?.length, "iam out final objectttt");

	const formSubmitted = (event) => {
		event.preventDefault();

		let errorObj = validateFormData(data);

		console.log(errorObj, "iam final objectttt");
		setErrors(errorObj);

		if (Object.keys(errorObj)?.length === 0) {
			const finalObject = {
				...data,

				created_by: userId,
				creater_role: selectedRole,
			};

			dispatch(postMandate({ token, finalObject }));
		}
	};

	useEffect(() => {
		dispatch(getTestItemsList(token));
		dispatch(getSchoolsList({ userId, token }));
	}, []);

	useEffect(() => {
		console.log({ selectedSchools, token });

		dispatch(getClassesList({ body: { schools: data?.schools }, token }));
		setSelectedClasses([]);
	}, [data?.schools]);

	useEffect(() => {
		schoolsList?.length && setSchools(schoolsList);
		let schoolOptions = [];

		const schoolUuidArray =
			schoolsList?.length &&
			schoolsList.map((each) => {
				schoolOptions.push({ label: each.school_name, value: each.uuid });
				return each.uuid;
			});
		// setSchools(schoolOptions);

		schoolOptions.unshift({ label: "All", value: schoolUuidArray });
		// setSelectedSchools([{ label: "All", value: schoolUuidArray }]);
		setSchools(schoolOptions);
	}, [schoolsList]);
	// useEffect(() => {
	// 	classesList?.length && setClasses(classesList);

	// 	let classOptions = [];

	// 	const classUuidArr =
	// 		classesList?.length &&
	// 		classesList.map((each) => {
	// 			classOptions.push({ label: each.class_name, value: each.uuid });
	// 			return each.uuid;
	// 		});

	// 	classOptions.unshift({ label: "All", value: classUuidArr });
	// 	// setSelectedSchools([{ label: "All", value: schoolUuidArray }]);
	// 	setClasses(classOptions);
	// }, [classesList]);

	useEffect(() => {
		testItemsList?.length && setTestItems(testItemsList);

		let testOptions = testItemsList.map((item) => {
			return { label: item, value: item };
		});

		// testOptions.unshift({ label: "All", value: testItemsUuidArr });
		// setSelectedSchools([{ label: "All", value: schoolUuidArray }]);
		setTestItems(testOptions);
	}, [testItemsList]);

	console.log(selectedSchools, data, testItemsList, "iam response code");

	return (
		<Flex direction="column" gap="4">
			<Text textStyle="h1">{title}</Text>

			<form onSubmit={formSubmitted}>
				<Box>
					<Box inlineSize="sm" marginTop="1rem" onChange={handleChange}>
						<Text textStyle="p" color="black-2">
							{mandateTitle}
						</Text>
						<Input type="text" name="title" />
						{errors?.title && <Text color="red">{errors.title}</Text>}
					</Box>
					<Box inlineSize="sm" marginTop="1rem" onChange={handleChange}>
						<Text textStyle="p" color="black-2">
							{startDate}
						</Text>
						<Input type="date" name="start_date" />
						{errors?.start_date && <Text color="red">{errors.start_date}</Text>}
					</Box>
					<Box inlineSize="sm" marginTop="1rem" onChange={handleChange}>
						<Text textStyle="p" color="black-2">
							{EndDate}
						</Text>
						<Input type="date" name="end_date" />
						{errors?.end_date && <Text color="red">{errors.end_date}</Text>}
					</Box>
					<Box inlineSize="sm" marginTop="1rem">
						<Text textStyle="p" color="black-2">
							{requiredLable}
						</Text>
						<Select variant="outline" name="required" onChange={handleChange}>
							<option value="">SelectOption </option>

							<option value="1">Required</option>
							<option value="0">Excluded</option>
						</Select>
						{errors?.required && <Text color="red">{errors.required}</Text>}
					</Box>

					<Box inlineSize="sm " marginTop="1rem" onChange={handleChange}>
						<Text textStyle="p" color="black-2">
							{chooseTestsLable}
						</Text>
						<Box maxW="100%">
							<MultiSelect
								useBasicStyles
								name="tests"
								colorScheme="bg"
								isMulti
								value={selectedTestItems}
								closeMenuOnSelect
								onChange={handleTestItems}
								options={
									selectedTestItems?.[0]?.label != "All" ? testItems : []
								}
							/>
						</Box>{" "}
						{errors?.tests && <Text color="red">{errors.tests}</Text>}
					</Box>

					<Box inlineSize="sm " marginTop="1rem" onChange={handleChange}>
						<Text textStyle="p" color="black-2">
							{chooseSchoolsLabel}
						</Text>
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

					{/* <Box inlineSize="sm " marginTop="1rem" onChange={handleChange}>
						<Text textStyle="p" color="black-2">
							{chooseClassLabel}
						</Text>
						<Box maxW="100%">
							<MultiSelect
								useBasicStyles
								name="classes"
								colorScheme="bg"
								isMulti
								value={selectedClasses}
								closeMenuOnSelect
								onChange={handleClasses}
								options={
									selectedSchools?.length &&
									selectedClasses?.[0]?.label != "All"
										? classes
										: []
								}
							/>
							{errors?.classes && <Text color="red">{errors.classes}</Text>}
						</Box>
					</Box> */}

					<Flex
						inlineSize="sm"
						marginTop="2rem"
						justifyContent="center"
						gap={8}
					>
						<Box
							onClick={() => {
								dispatch(setAddMandate(""));
								navigate(`/role/${selectedRole}/manage-mandates`);
							}}
						>
							<NegativeButton text={"Cancel"} />
						</Box>
						<Box>
							<PositiveButton text={"Save"} />
						</Box>
					</Flex>
				</Box>
			</form>
		</Flex>
	);
};

export default AddMandates;

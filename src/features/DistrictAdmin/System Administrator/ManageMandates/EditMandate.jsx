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
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";
import { addMandatesData } from "./ManageMandatedata";
import { getClassesList, getSchoolsList } from "../../../teacher/teacherSlice";
import {
	getTestItemsList,
	postMandate,
	setAddMandate,
	updateMandate,
} from "../../../../DistrictAdminApis/districtAdminSlice";
import { color } from "framer-motion";
import SuccessModal from "../../../../components/SuccessModal";
const EditMandate = () => {
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
	const location = useLocation();
	const navigate = useNavigate();

	const mandate = location.state.mandate;

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
	const loading = useSelector((state) => state?.districtAdmin?.loading);
	const testItemsList = useSelector(
		(state) => state?.districtAdmin?.testItemsList,
	);

	const [schools, setSchools] = useState();
	const [classes, setClasses] = useState();
	const [testItems, setTestItems] = useState();
	const [selectedSchools, setSelectedSchools] = useState([]);
	const [selectedClasses, setSelectedClasses] = useState([]);
	const [selectedTestItems, setSelectedTestItems] = useState([]);

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

	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		setField([event.target.name], event.target.value);

		// if (event.target.name === "login_status") {
		//   console.log(event);
		//   setField([event.target.name], selectedSchools);
		// } else {
		//   setField([event.target.name], event.target.value);
		// }
	};

	useEffect(() => {
		dispatch(getSchoolsList({ userId, token }));
	}, []);

	useEffect(() => {
		dispatch(getClassesList({ body: { schools: data?.schools }, token }));

		// setSelectedClasses([]);
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
	// 	setClasses(classOptions);
	// }, [selectedSchools, classesList]);

	useEffect(() => {
		testItemsList?.length && setTestItems(testItemsList);

		let testOptions = testItemsList.map((item) => {
			return { label: item, value: item };
		});

		setTestItems(testOptions);
	}, [testItemsList]);

	useEffect(() => {
		dispatch(getTestItemsList(token));
	}, []);
	const finalObject = {
		...data,

		updated_by: userId,
		updated_role: selectedRole,
	};

	useEffect(() => {
		if (Object.keys(mandate)?.length) {
			setData({
				title: mandate?.title,
				start_date: mandate?.start_date?.split(" ")[0],
				end_date: mandate?.end_date?.split(" ")[0],
				required: mandate?.required ? 1 : 0,
				schools: mandate?.SchoolMandates?.map((school) => school.uuid),
				// classes: mandate?.ClassMandates?.map((clas) => clas.uuid),
				tests: mandate?.tests?.map((test) => test),
			});
			if (mandate?.SchoolMandates.length) {
				let arr = mandate.SchoolMandates.map((school) => ({
					label: school.school_name,
					value: school.uuid,
				}));
				setSelectedSchools(arr);
			}

			// if (mandate?.ClassMandates.length) {
			// 	let classArr = mandate.ClassMandates.map((clas) => ({
			// 		label: clas.class_name,
			// 		value: clas.uuid,
			// 	}));
			// 	setSelectedClasses(classArr);
			// }
			if (mandate?.tests.length) {
				let testArr = mandate.tests.map((test) => ({
					label: test,
					value: test,
				}));
				setSelectedTestItems(testArr);
			}
		}
	}, [mandate]);

	const formSubmitted = (event) => {
		event.preventDefault();

		let mandateId = mandate?.uuid;

		dispatch(updateMandate({ token, finalObject, mandateId }));
	};

	return (
		<Flex direction="column" gap="4">
			<Text textStyle="h1">Edit Mandate</Text>

			<form onSubmit={formSubmitted}>
				<Box>
					<Box inlineSize="sm" marginTop="1rem" onChange={handleChange}>
						<Text textStyle="p" color="black-2">
							{mandateTitle}
						</Text>
						{/* <Input type="text" name="title" /> */}

						<Input
							type="text"
							name="title"
							value={data?.title}
							onChange={(e) => handleChange(e)}
						/>
						{errors && errors.title && (
							<p className="text-[#f50c0c]">{errors.title}</p>
						)}
					</Box>
					<Box inlineSize="sm" marginTop="1rem" onChange={handleChange}>
						<Text textStyle="p" color="black-2">
							{startDate}
						</Text>
						<Input
							type="date"
							name="start_date"
							value={data?.start_date?.split(" ")[0]}
						/>
						{errors && errors.start_date && (
							<p className="text-[#f50c0c]">{errors.start_date}</p>
						)}
					</Box>
					<Box inlineSize="sm" marginTop="1rem" onChange={handleChange}>
						<Text textStyle="p" color="black-2">
							{EndDate}
						</Text>
						<Input
							type="date"
							name="end_date"
							value={data?.end_date?.split(" ")[0]}
						/>
						{errors && errors.end_date && (
							<p className="text-[#f50c0c]">{errors.end_date}</p>
						)}
					</Box>
					<Box inlineSize="sm" marginTop="1rem">
						<Text textStyle="p" color="black-2">
							{requiredLable}
						</Text>

						<Select name="required" variant="outline" onChange={handleChange}>
							<option value="" selected={mandate?.required}>
								Select Option
							</option>
							<option value="1" selected={mandate?.required}>
								Required
							</option>
							<option value="0" selected={!mandate?.required}>
								Excluded
							</option>
						</Select>

						{errors && errors.required && (
							<p className="text-[#f50c0c]">{errors.required}</p>
						)}
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
						{errors && errors.test && (
							<p className="text-[#f50c0c]">{errors.test}</p>
						)}
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
					</Box>
					{/* {errors && errors.schools && (
            <p className="text-[#f50c0c]">{errors.schools}</p>
          )} */}

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
						</Box>
						{errors && errors.classes && (
              <p className="text-[#f50c0c]">{errors.classes}</p>
            )}
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
								navigate("/role/DistrictAdmin/manage-mandates");
							}}
						>
							<NegativeButton text={"Cancel"} />
						</Box>
						<Box>
							<PositiveButton text={"Update"} />
						</Box>
					</Flex>
				</Box>
			</form>
		</Flex>
	);
};

export default EditMandate;

import { SearchIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	Grid,
	GridItem,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	Spacer,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaFileExport } from "react-icons/fa";

import { ManageUsersData } from "./ManageUsersData";
import addCircleIcon from "../../../../assets/customIcons/Icon ionic-ios-add-circle.svg";
import ManageUsersTable from "./ManageUserTable";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Multiselect from "multiselect-react-dropdown";
import { Select as MultiSelect } from "chakra-react-select";

import {
	getAllUsersList,
	getSchoolsList,
	setAllUsers,
} from "../../../teacher/teacherSlice";
import { BsFillPlusCircleFill } from "react-icons/bs";

import {
	getExportUsers,
	getUserRolesListForManageUsersApiCall,
	setAddTeacherModalButtonClicked,
	setAddUsersResponse,
	setClassesListItemsToShow,
	setManageUsersSelectedDropdownText,
	setPreviousValuesOfAddUser,
	setSchoolsListItemsToShow,
} from "../../../authentication/components/schoolAdmin/schoolAdminSlice";
import ManageUsersTextIcon from "../../../../ManageUsersGlobal/ManageUsersTextIcon";

import AssignRole from "./SelectTabs/AssignRole";
import {
	setManageUser,
	setPreviousPath,
} from "../../../../store/slices/profileSlice";
import { CSVLink } from "react-csv";

const ManageUsers = () => {
	const {
		title,
		userDetails,
		tableName,
		searchPlaceholder,
		actionPlaceholder,
		actionOptions,
		addStudent,
		exportUsers,
		tableColumns,
		rows,
	} = ManageUsersData;

	const [userType, school, loginStatus, birthDate, assignmentStatus, grades] =
		userDetails;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const location = useLocation();

	const userId = useSelector((state) => state.profile.userId);

	const selectedRole = useSelector((state) => state.profile.selectedRole);
	const exportUsersData = useSelector(
		(state) => state?.schoolAdmin?.exportUsers,
	);

	const token = useSelector((state) => state.profile.token);

	const schoolsList = useSelector((state) => state.teacher.schools);

	const manageUsersSelectedDropdownText = useSelector(
		(state) => state?.schoolAdmin?.manageUsersSelectedDropdownText,
	);

	const manageUser = useSelector((state) => state?.profile?.manageUser);

	const manageUsersAddUsersResponse = useSelector(
		(state) => state?.schoolAdmin?.addUsersResponse,
	);

	const userRolesList = useSelector(
		(state) => state?.schoolAdmin?.userRolesList,
	);

	const usersTableList = useSelector((state) => state.teacher.allUsers);

	const previousValuesOfAddUser = useSelector(
		(state) => state?.schoolAdmin?.previousValuesOfAddUser,
	);

	const schoolsListItems = useSelector(
		(state) => state?.schoolAdmin?.schoolsListItemsToShow,
	);

	const classesListItems = useSelector(
		(state) => state?.schoolAdmin?.classesListItemsToShow,
	);

	const districtInformation = useSelector(
		(state) => state?.superAdmin?.distrcitIDForDistrict,
	);

	const USERS_OBJ = {
		student: "Student",
		teacher: "Teacher",
		parent: "Parent",
		schoolAdmin: "School Administrator",
		districtAdmin: "District Administrator",
	};

	const [initialSchoolsList, setInitialSchoolsList] = useState([]);
	const [selectedSchools, setSelectedSchools] = useState();

	const [userIds, setUserIds] = useState([]);
	const [isAllChecked, setIsAllChecked] = useState(false);
	const [pageNumber, setPageNumber] = useState(1);

	const [formData, setFormData] = useState({
		schools: [],
		date_of_birth: "",
		search: "",
		login_status: "",
		grade: "",
		user_type: userRolesList?.[0],
	});

	const [schools, setSchools] = useState([]);
	const [schoolArray, setSchoolArray] = useState([]);

	// console.log(
	//   schoolsListItems,
	//   classesListItems,
	//   exportUsersData,
	//   "items list"
	// );

	const [errors, setErrors] = useState({});
	const [isPopUpShow, setIsPopUpShow] = useState(false);

	const [disableAll, setDisableAll] = useState(false);

	const [initialRendering, setInitialRendering] = useState(true);
	const [removedSchoolsList, setRemovedSchoolsList] = useState(null);

	// const [details, setDetails] = useState(userDetails);

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
			setFormData((prevState) => ({
				...prevState,
				schools: all_value.value,
			}));
		} else {
			console.log("Not in all case");

			setSelectedSchools(schoolsList);
			setFormData((prevState) => ({
				...prevState,
				schools: schoolsList?.map((school) => school.value),
			}));
		}
	};

	const handleChange = (event) => {
		console.log(event.target.name, event.target.value, "from 323");

		if (event.target.name === "user_type") {
			dispatch(setManageUser({ ...manageUser, userType: event.target.value }));
			setFormData((prevState) => ({
				...prevState,
				[event.target.name]: event.target.value,
			}));
			setUserIds([]);
			setIsAllChecked(false);
			// dispatch(setManageUsersSelectedDropdownText(event.target.value));
		} else if (event.target.name === "login_status") {
			setFormData((prevState) => ({
				...prevState,
				[event.target.name]:
					event.target.value === "all"
						? "all"
						: event.target.value === "Inactive"
						? false
						: true,
			}));
		} else if (event.target.name === "date_of_birth") {
			setFormData((prevState) => ({
				...prevState,
				[event.target.name]: event.target.value,
			}));
		} else if (event.target.name !== "date_of_birth") {
			setFormData((prevState) => ({
				...prevState,
				[event.target.name]: event.target.value,
			}));
		}

		if (
			event.target.name !== "date_of_birth" &&
			event.target.name === "search"
		) {
			setFormData((prevState) => ({
				...prevState,

				date_of_birth: "",

				[event.target.name]: event.target.value,
			}));
		}
	};

	const handleSelectedSchools = (selectedItems) => {
		setInitialRendering(false);

		let filteredList = selectedItems?.map((item) => item?.uuid);

		if (filteredList.includes("all")) {
			filteredList = schoolsList?.map((school) => school?.uuid);
			setSchools([{ uuid: "all", school_name: "Select All", disable: false }]);
			setDisableAll(false);
		} else {
			setDisableAll(true);
			setSchools(schoolsList);
		}

		setFormData((prevState) => ({
			...prevState,
			schools: filteredList,
		}));
	};

	// const [removedSchoolsList, setRemovedSchoolsList] = useState(null);

	// const handleSelectedRemoveSchools = (selectedItems) => {
	//   console.log(selectedItems, 'selectedItemsselectedItems');

	//   setInitialRendering(false);

	//   const filteredList = [];

	//   if (selectedItems?.length === 0) {
	//     setRemovedSchoolsList(selectedItems);
	//   }

	//   for (let i = 0; i < selectedItems?.length; i++) {
	//     if (selectedItems[i]?.uuid !== 'all') {
	//       filteredList.push(selectedItems[i]?.uuid);
	//     }
	//   }

	//    const filteredList = selectedItems?.map((each) => each.uuid);

	//   setFormData((prevState) => ({
	//     ...prevState,
	//     schools: filteredList,
	//   }));
	// };

	const handleSelectedRemoveSchools = (selectedItems) => {
		setInitialRendering(false);

		if (selectedItems?.length === 0) {
			setRemovedSchoolsList(selectedItems);
		}

		const filteredList = selectedItems
			?.filter((item) => item.uuid !== "all")
			.map((item) => item.uuid);

		setFormData((prevState) => ({
			...prevState,
			schools: filteredList,
		}));
	};

	// console.log(formData, "formdata from manage users");

	const addUserTextObj = {
		student: <ManageUsersTextIcon text={"Add Student"} />,
		teacher: <ManageUsersTextIcon text={"Add Teacher"} />,
		parent: <ManageUsersTextIcon text={"Add parent"} />,
		districtAdmin: <ManageUsersTextIcon text={"Add District Administrator"} />,
		schoolAdmin: <ManageUsersTextIcon text={"Add School Administrator"} />,
	};

	const clickToNavigate = () => {
		dispatch(
			setManageUser({
				formTitle: `Add ${USERS_OBJ[manageUser?.userType]}`,
				userType: manageUser?.userType,
			}),
		);
		dispatch(setPreviousPath(location.pathname));

		navigate(`/role/${selectedRole}/AddUser`);
	};

	console.log(formData, "from 323");
	useEffect(() => {
		if (removedSchoolsList && removedSchoolsList?.length === 0) {
			setSchools([
				{ uuid: "all", school_name: "Select All", disable: true },
				...schoolsList,
			]);

			// setFormData((prevState) => ({
			//   ...prevState,
			//   schools: initialSchoolsList,
			// }));

			console.log(
				removedSchoolsList?.length,
				"selectedItemsselectedItems length if",
			);

			setRemovedSchoolsList(null);
		}
	}, [removedSchoolsList]);

	console.log(schools, "schoollllll");

	useEffect(() => {
		// !schoolsList &&
		//   schoolsList?.length &&
		//   dispatch(getSchoolsList({ userId, token }))

		dispatch(getUserRolesListForManageUsersApiCall({ token }));

		dispatch(getSchoolsList({ userId, token }));

		// dispatch(setManageUsersSelectedDropdownText(''));
		// dispatch(setManageUser?.userType(''))

		dispatch(setAllUsers(null));

		dispatch(setSchoolsListItemsToShow([]));

		dispatch(setClassesListItemsToShow([]));

		dispatch(setAddUsersResponse(null));

		if (initialRendering) {
			setSchools([
				{
					uuid: "all",
					school_name: "Select All",
					label: "Select All",
					value: "Select All",
				},
			]);
		}

		//  dispatch(getAllUsersList({ token, body: formData }));
	}, []);

	//  useEffect(() => {

	//  const schoolItemsList = schoolsList?.length && schoolsList?.map((each) => each.uuid)

	//   setFormData({...formData,
	//     schools: schoolItemsList})

	//  }, [schoolsList]);

	console.log("helllo");

	useEffect(() => {
		if (schoolsList?.length) {
			let schoolOptions = [];
			const schoolUuidArray =
				schoolsList?.length &&
				schoolsList.map((each) => {
					schoolOptions.push({ label: each.school_name, value: each.uuid });
					return each.uuid;
				});

			schoolOptions.unshift({ label: "All", value: schoolUuidArray });
			setSelectedSchools([{ label: "All", value: schoolUuidArray }]);
			setSchoolArray(schoolOptions);
			setFormData((prevState) => ({
				...prevState,
				schools: [...schoolUuidArray],
			}));
		}
	}, [schoolsList]);

	useEffect(() => {
		let final_body = {
			...formData,
			skip: 1,
			size: 20,
		};

		formData?.user_type &&
			dispatch(getAllUsersList({ token, body: final_body }));

		dispatch(setPreviousValuesOfAddUser(final_body));

		let body = {
			user_uuid: usersTableList?.uuids,
			user_type: manageUser?.userType ? manageUser?.userType : "student",
		};

		console.log(body, "from 424");
		usersTableList?.uuids &&
			manageUser?.userType &&
			dispatch(getExportUsers({ token, body }));
		setPageNumber(1);
	}, [formData]);
	useEffect(() => {
		let final_body = {
			...formData,
			skip: pageNumber,
			size: 20,
		};

		formData?.user_type &&
			dispatch(getAllUsersList({ token, body: final_body }));

		dispatch(setPreviousValuesOfAddUser(final_body));

		let body = {
			user_uuid: usersTableList?.uuids,
			user_type: manageUser?.userType ? manageUser?.userType : "student",
		};
		console.log(body, "from 424");
		usersTableList?.uuids &&
			manageUser?.userType &&
			dispatch(getExportUsers({ token, body }));
	}, [pageNumber]);

	console.log(manageUser?.userType, "from 424");

	console.log(previousValuesOfAddUser, "not from useeffect");

	useEffect(() => {
		if (manageUsersAddUsersResponse?.data?.code === 200) {
			if (selectedRole !== "superAdmin") {
				dispatch(
					getAllUsersList({
						token,
						body: previousValuesOfAddUser,
					}),
				);
			}

			if (selectedRole === "superAdmin") {
				dispatch(
					getDistrictsAdminById({
						districtId: districtInformation?.uuid,
						token: token,
					}),
				);
			}

			console.log(previousValuesOfAddUser, "previous value of add user");

			setFormData(previousValuesOfAddUser);
		}
	}, [manageUsersAddUsersResponse, pageNumber]);

	useEffect(() => {
		const schoolItemsList = schoolsList?.length
			? schoolsList?.map((each) => each.uuid)
			: [];

		setFormData({
			schools: schoolItemsList,
			date_of_birth: "",
			search: "",
			login_status: "all",
			grade: "",
			user_type: userRolesList?.[0],
		});

		dispatch(setManageUser({ userType: userRolesList?.[0] }));

		// setSchools([{ uuid: "all", school_name: "Select All", disable: false }]);

		// dispatch(getAllUsersList({ token, body: formData }));
	}, [userRolesList, schoolsList]);

	return (
		<Flex gap="4" direction="column">
			<Text textStyle={"textHead"} fontWeight="bold">
				{title}
			</Text>
			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(3, 1fr)",
					lg: "repeat(3, 1fr)",
				}}
				gap={{ base: "1", lg: 8, md: 8 }}
			>
				<GridItem colSpan="1">
					<Box maxW={{ base: "92%", md: "100%", lg: "100%" }} key={userType.id}>
						<Text mb="2" textStyle={"textHead"}>
							User Type
						</Text>
						<Select
							textStyle={"textHead"}
							onChange={(e) => handleChange(e)}
							className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2 focus:ring-primary dark:focus:border-primary"
							// placeholder={userType.placeholder}
							name="user_type"
							value={formData?.user_type}
						>
							{/* <option value=''>Select</option> */}
							{userRolesList?.length &&
								userRolesList?.map((value, i) => {
									return (
										<option key={i} value={value}>
											{value}
										</option>
									);
								})}
						</Select>
					</Box>
					{/* <Box>
						{errors && errors.user_type === "*Required" && (
							<Text color="red">{errors.user_type}</Text>
						)}
					</Box> */}
				</GridItem>
				<GridItem colSpan="1">
					<Box maxW={{ base: "92%", md: "100%", lg: "100%" }} key={school.id}>
						<Text mb="2" textStyle={"textHead"}>
							{school.lable}
						</Text>
						{/* <Multiselect
              onRemove={handleSelectedRemoveSchools}
              onSelect={handleSelectedSchools}
              options={schools}
              displayValue="school_name"
              labelledBy="Select"
              selectedValues={initialRendering ? schools?.slice(0, 1) : null}

              // value={formData?.schools}
            /> */}

						<MultiSelect
							useBasicStyles
							colorScheme="bg"
							isMulti
							value={selectedSchools}
							closeMenuOnSelect
							onChange={handleSchools}
							options={selectedSchools?.[0]?.label != "All" ? schoolArray : []}
							size={{ base: "sm", md: "md", lg: "md" }}
						/>
					</Box>
					{/* <Box>
						{errors && errors.schools === "*Required" && (
							<Text color="red">{errors.schools}</Text>
						)}
					</Box> */}
				</GridItem>
				<GridItem colSpan="1">
					<Box
						maxW={{ base: "92%", md: "100%", lg: "100%" }}
						key={loginStatus.id}
					>
						<Text mb="2" textStyle={"textHead"}>
							{loginStatus.lable}
						</Text>
						<Select
							onChange={(e) => handleChange(e)}
							bg="bg.100"
							borderColor="bg.100"
							name={loginStatus.name}
							textStyle={"textHead"}
							// value={
							// 	formData?.login_status == ""
							// 		? ""
							// 		: formData.login_status
							// 		? "Active"
							// 		: "Inactive"
							// }
						>
							<option value="all">All</option>

							{loginStatus?.options?.map((value, i) => {
								return (
									<option key={i} value={value}>
										{value}
									</option>
								);
							})}
						</Select>
					</Box>
				</GridItem>

				{manageUser?.userType === "student" ? (
					<>
						<GridItem colSpan="1">
							<Box
								maxW={{ base: "92%", md: "100%", lg: "100%" }}
								key={birthDate.id}
							>
								<Text mb="2" textStyle={"textHead"}>
									{birthDate.lable}
								</Text>
								<Input
									textStyle={"textHead"}
									type={birthDate.type}
									onChange={(e) => handleChange(e)}
									border="0px"
									bg="bg.100"
									placeholder={birthDate.placeholder}
									name="date_of_birth"
									value={formData?.date_of_birth}
								/>
							</Box>
						</GridItem>

						<GridItem colSpan="1">
							<Box
								maxW={{ base: "92%", md: "100%", lg: "100%" }}
								key={assignmentStatus.id}
							>
								<Text
									mb={{ base: "0", md: "2", lg: "2" }}
									textStyle={"textHead"}
								>
									{assignmentStatus.lable}
								</Text>
								<Select
									//   onChange={(e) => handleChange(e)}
									bg="bg.100"
									borderColor="bg.100"
									textStyle={"textHead"}
									placeholder={assignmentStatus.placeholder}
									//   name="search"
									//   value={formData?.search}
								>
									{assignmentStatus.options.map((value, i) => {
										return (
											<option key={i} value={value}>
												{value}
											</option>
										);
									})}
								</Select>
							</Box>
						</GridItem>

						<GridItem colSpan="1">
							<Box
								maxW={{ base: "92%", md: "100%", lg: "100%" }}
								key={grades.id}
							>
								<Text mb="2" textStyle={"textHead"}>
									{grades.lable}
								</Text>
								<Select
									textStyle={"textHead"}
									onChange={(e) => handleChange(e)}
									bg="bg.100"
									borderColor="bg.100"
									placeholder={grades.placeholder}
									name="grade"
									value={formData?.grade}
								>
									{grades.options.map((value, i) => {
										return (
											<option key={i} value={value}>
												{value}
											</option>
										);
									})}
								</Select>
							</Box>
						</GridItem>
					</>
				) : null}

				{manageUser?.userType === "teacher" ? (
					<>
						<GridItem colSpan="1">
							<Box
								maxW={{ base: "92%", md: "100%", lg: "100%" }}
								key={assignmentStatus.id}
							>
								<Text mb="2" textStyle={"textHead"}>
									{assignmentStatus.lable}
								</Text>
								<Select
									textStyle={"textHead"}
									onChange={(e) => handleChange(e)}
									bg="bg.100"
									borderColor="bg.100"
									placeholder={assignmentStatus.placeholder}
									name="search"
									value={formData?.search}
								>
									{assignmentStatus.options.map((value, i) => {
										return (
											<option key={i} value={value}>
												{value}
											</option>
										);
									})}
								</Select>
							</Box>
						</GridItem>
					</>
				) : null}
			</Grid>

			<Divider />
			<Text textStyle={"textHead"}>{manageUser?.userType}</Text>

			<HStack>
				<HStack spacing={{ base: "10", md: "8", lg: "8" }}>
					<Box inlineSize={{ base: "8em", lg: "25em", md: "10em" }}>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<SearchIcon color="gray.300" />}
							/>
							<Input
								rounded="full"
								type="text"
								placeholder={searchPlaceholder}
								name="search"
								value={formData?.search}
								onChange={(e) => handleChange(e)}
							/>
						</InputGroup>
					</Box>
					<Box inlineSize={{ base: "8em", lg: "10em", md: "10em" }}>
						<Select
							textStyle={"textHead"}
							rounded="full"
							color="white"
							bg="primary"
							_hover={{
								background: "primary",
								color: "white",
								// other hover styles
							}}
							onClick={() => setIsPopUpShow(true)}
							placeholder="Select Option"
						>
							{actionOptions.map((action, index) => {
								return (
									<option
										key={index}
										value={action}
										// style={{ color: 'black', bg: 'red' }}
									>
										{action}
									</option>
								);
							})}
						</Select>
					</Box>
				</HStack>

				{
					<AssignRole
					// isPopUpShow={isPopUpShow}
					// setIsPopUpShow={setIsPopUpShow}
					/>
				}

				<Spacer />
				<HStack spacing={{ base: "0", md: "8", lg: "8" }}>
					<HStack
						cursor="pointer"
						onClick={clickToNavigate}
						display={{ base: "none", md: "flex", lg: "flex" }}
					>
						{addUserTextObj[manageUser?.userType]}
					</HStack>

					<Box display={{ md: "block", lg: "block", base: "none" }}>
						{exportUsersData?.data ? (
							<CSVLink
								filename="userData.csv"
								data={exportUsersData?.data}
								headers={exportUsersData?.headers}
							>
								<HStack
									cursor="pointer"
									// onClick={() => {
									//   setExportUser(true);
									// }}
									// onClick={() => navigate(`${pathname}/AddUser`)}
								>
									<Text
										textStyle={"textHead"}
										as="span"
										textDecoration="underline"
										color="black-2"
									>
										{exportUsers}
									</Text>
									<Box width="6" height="6">
										<FaFileExport className="w-5 h-5" fill="#0081c8" />
									</Box>
								</HStack>
							</CSVLink>
						) : (
							<HStack
								cursor="pointer"

								// onClick={() => navigate(`${pathname}/AddUser`)}
							>
								<Text
									textStyle={"textHead"}
									as="span"
									textDecoration="underline"
									color="black-2"
								>
									{exportUsers}
								</Text>
								<Box width="6" height="6">
									<FaFileExport className="w-5 h-5" fill="#0081c8" />
								</Box>
							</HStack>
						)}
					</Box>
				</HStack>
			</HStack>

			<Box display={{ base: "block", md: "none", lg: "none" }}>
				<HStack
					display={{ base: "flex", md: "none", lg: "none" }}
					alignItems="center"
					justifyContent={"space-around"}
				>
					<HStack flexDirection="row" onClick={clickToNavigate}>
						<Text textStyle={"textHead"}>Add Student</Text>
						<BsFillPlusCircleFill color="#0081c8" />
					</HStack>
					<HStack display={{ base: "inline-block", md: "none", lg: "none" }}>
						{exportUsersData?.data ? (
							<CSVLink
								filename="userData.csv"
								data={exportUsersData?.data}
								headers={exportUsersData?.headers}
							>
								<HStack
									cursor="pointer"
									// onClick={() => {
									//   setExportUser(true);
									// }}
									// onClick={() => navigate(`${pathname}/AddUser`)}
								>
									<Text
										textStyle={"textHead"}
										as="span"
										textDecoration="underline"
										color="black-2"
									>
										{exportUsers}
									</Text>
									<Box width="6" height="6">
										<FaFileExport className="w-5 h-5" fill="#0081c8" />
									</Box>
								</HStack>
							</CSVLink>
						) : (
							<HStack
								cursor="pointer"

								// onClick={() => navigate(`${pathname}/AddUser`)}
							>
								<Text
									textStyle={"textHead"}
									as="span"
									textDecoration="underline"
									color="black-2"
								>
									{exportUsers}
								</Text>
								<Box width="6" height="6">
									<FaFileExport className="w-5 h-5" fill="#0081c8" />
								</Box>
							</HStack>
						)}
					</HStack>
				</HStack>
			</Box>

			<ManageUsersTable
				usersList={usersTableList?.response}
				userIds={userIds}
				setUserIds={setUserIds}
				setIsAllChecked={setIsAllChecked}
				isAllChecked={isAllChecked}
				setPageNumber={setPageNumber}
			/>
		</Flex>
	);
};

export default ManageUsers;

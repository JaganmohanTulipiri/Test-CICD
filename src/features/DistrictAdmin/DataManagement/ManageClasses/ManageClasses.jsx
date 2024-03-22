import { SearchIcon } from "@chakra-ui/icons";
import {
	Box,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	HStack,
	Img,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	Spacer,
	Stack,
	Text,
} from "@chakra-ui/react";
import { Select as MultiSelect } from "chakra-react-select";
import { BsFillPlusCircleFill } from "react-icons/bs";

import ReactSelect from "react-select";

import { Divider } from "antd";
import { AddIcon } from "@chakra-ui/icons";
import { FaFileExport } from "react-icons/fa";
import addIcon from "../../../../assets/customIcons/addIcon.svg";
import React, { useEffect, useState } from "react";
import ManageClassCard from "./ManageClassCard";
import { manageClassesData } from "./ManageClassesConfig";
import AddClassModal from "./AddClassModal";

import { useDispatch, useSelector } from "react-redux";
import {
	getFilteredManageClassesList,
	getManageClassesList,
	getSchoolsList,
	setManageClasses,
} from "../../../teacher/teacherSlice";
import {
	getExportClasses,
	getExportUsers,
	getTeachersBySchoolsApiCall,
	setAddClassToManageClassesApiResponse,
} from "../../../authentication/components/schoolAdmin/schoolAdminSlice";

import { CSVLink } from "react-csv";
import { Rings } from "react-loader-spinner";
import ManageSkeleton from "../../../../components/GlobalComponents/ManageSkeleton";
import ReactPaginate from "react-paginate";

const ManageClasses = () => {
	const { title, details } = manageClassesData;

	const [school, teacher, status] = details;

	const dispatch = useDispatch();

	const loading = useSelector((state) => state?.teacher?.loading);

	console.log(loading, "from 61");

	const token = useSelector((state) => state.profile.token);
	const userId = useSelector((state) => state.profile.userId);
	const selectedRole = useSelector((state) => state.profile.selectedRole);
	const totalPages = useSelector((state) => state?.teacher?.totalPages);

	const schoolsList = useSelector((state) => state.teacher.schools);

	const teachersListBySchools = useSelector(
		(state) => state.schoolAdmin.teachersListBySchools,
	);
	const manageClassesList = useSelector(
		(state) => state.teacher.manageClasses.response,
	);
	const manageClassUuid = useSelector(
		(state) => state.teacher.manageClasses.uuids,
	);

	console.log(manageClassesList, "from 76");
	const code = useSelector((state) => state?.profile?.code);

	const exportClassData = useSelector(
		(state) => state?.schoolAdmin?.exportClasses,
	);
	const [schools, setSchools] = useState([]);

	const [teachers, setTeachers] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);

	const [userIds, setUserIds] = useState([]);
	const [isAllChecked, setIsAllChecked] = useState(false);

	const [formData, setFormData] = useState({
		school_uuid: [],
		teacher_uuid: [],
		status: "",
		search: "",
	});

	const [addClassModal, setAddClassModal] = useState(false);

	const [isSuccess, setIsSuccess] = useState(false);

	const [selectedSchools, setSelectedSchools] = useState();
	const [selectedTeachers, setSelectedTeachers] = useState([]);

	const [displayClasses, setDisplayClasses] = useState([]);

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
				school_uuid: all_value.value,
			}));
		} else {
			console.log("Not in all case");

			setSelectedSchools(schoolsList);
			setFormData((prevState) => ({
				...prevState,
				school_uuid: schoolsList?.map((school) => school.value),
			}));
		}
	};
	const handleTeachers = (teachersList) => {
		let all_value = null;
		if (teachersList?.length) {
			for (let teacher of teachersList) {
				if (teacher.label == "All") {
					all_value = teacher;
					break;
				}
			}
		}

		if (all_value) {
			console.log("in all case");
			setSelectedTeachers([all_value]);
			setFormData((prevState) => ({
				...prevState,
				teacher_uuid: all_value.value,
			}));
		} else {
			console.log("Not in all case");

			setSelectedTeachers(teachersList);
			setFormData((prevState) => ({
				...prevState,
				teacher_uuid: teachersList?.map((teacher) => teacher.value),
			}));
		}
	};

	const handlePageNumber = (event) => {
		setPageNumber(event.selected + 1);
	};
	const handleChangeFormData = (event) => {
		if (event.target.name == "school_uuid") {
			event.target.value == "all"
				? setFormData((prevState) => ({
						...prevState,
						school_uuid: schools.map((school) => school.uuid),
				  }))
				: setFormData((prevState) => ({
						...prevState,
						school_uuid: [event.target.value],
				  }));
		} else if (event.target.name == "teacher_uuid") {
			event.target.value == []
				? setFormData((prevState) => ({
						...prevState,
						teacher_uuid: [],
				  }))
				: setFormData((prevState) => ({
						...prevState,
						teacher_uuid: [event.target.value],
				  }));
		} else {
			setFormData({
				...formData,
				[event.target.name]: event.target.value,
			});
		}
	};

	// const handleSearch = (event) => {
	//   if (event.target.value && manageClassesList?.length) {
	//     const searchResultClasses = manageClassesList.filter(
	//       (each) =>
	//         each.class_name
	//           .toLowerCase()
	//           .includes(event.target.value.toLowerCase()) ||
	//         each?.status
	//           ?.toLowerCase()
	//           ?.includes(event.target.value.toLowerCase())
	//     );
	//     setDisplayClasses(searchResultClasses);
	//   } else {
	//     setDisplayClasses(manageClassesList);
	//   }
	// };

	const handleCheckAll = (e) => {
		if (e.target.checked) {
			setIsAllChecked(true);
			let arr = displayClasses.map((user) => user.uuid);

			setUserIds(arr);

			let body = {
				class_uuid: arr,
			};
			dispatch(getExportClasses({ token, body }));
		} else {
			setIsAllChecked(false);
			setUserIds([]);
		}
	};

	useEffect(() => {
		dispatch(getSchoolsList({ userId, token }));
		dispatch(setAddClassToManageClassesApiResponse(null));
		setIsSuccess(false);
	}, []);

	useEffect(() => {
		if (code === 200) {
			dispatch(getSchoolsList({ userId, token }));
		}
	}, [dispatch, code]);

	useEffect(() => {
		setDisplayClasses(manageClassesList);
	}, [manageClassesList]);

	useEffect(() => {
		if (schoolsList?.length) {
			let schoolOptions = [];
			const schoolUuidArray =
				schoolsList?.length &&
				schoolsList.map((each) => {
					schoolOptions.push({ label: each.school_name, value: each.uuid });
					return each.uuid;
				});
			let finalData = {
				accesser_uuid: userId,
				schools: schoolUuidArray,
			};
			dispatch(getTeachersBySchoolsApiCall({ body: finalData, token }));

			schoolOptions.unshift({ label: "All", value: schoolUuidArray });
			setSelectedSchools([{ label: "All", value: schoolUuidArray }]);
			setSchools(schoolOptions);
			setFormData((prevState) => ({
				...prevState,
				school_uuid: [...schoolUuidArray],
			}));
		}
	}, [schoolsList]);

	useEffect(() => {
		let finalData = {
			accesser_uuid: userId,
			schools: formData?.school_uuid,
		};
		dispatch(getTeachersBySchoolsApiCall({ body: finalData, token }));
	}, [formData?.school_uuid]);

	useEffect(() => {
		if (teachersListBySchools?.length) {
			let teacherOptions = [];
			const teacherUuidArr = teachersListBySchools.map((each) => {
				teacherOptions.push({ label: each.first_name, value: each.uuid });
				return each.uuid;
			});

			teacherOptions.unshift({ label: "All", value: teacherUuidArr });
			// setSelectedTeachers([{ label: "All", value: teacherUuidArr }]);
			setTeachers(teacherOptions);
			setFormData((prevState) => ({
				...prevState,
				teacher_uuid: [],
			}));
		} else {
			setSelectedTeachers([]);
			setTeachers([]);
			setFormData((prevState) => ({
				...prevState,
				teacher_uuid: [],
			}));
		}
	}, [teachersListBySchools]);

	useEffect(() => {
		console.log(formData, "oiam formdata");

		let body = {
			user_role: selectedRole,
			user_uuid: userId,
			size: "20",
			skip: pageNumber,
			...formData,
		};

		dispatch(getFilteredManageClassesList({ token, body }));

		// let Ids =
		//   displayClasses?.length && displayClasses?.map((item) => item?.uuid);
		let final_body = {
			class_uuid: manageClassUuid,
		};

		manageClassUuid?.length &&
			dispatch(getExportClasses({ token, body: final_body }));
	}, [formData, pageNumber]);

	return (
		<>
			<Flex direction="column" gap="4 ">
				<Text textStyle={"textHead"} fontWeight="bold" color="black-1">
					{title}
				</Text>
				<Grid
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={6}
				>
					<GridItem>
						<Box maxW="100%">
							<Text textStyle={"textHead"}>{school?.lable}</Text>

							<MultiSelect
								useBasicStyles
								colorScheme="bg"
								isMulti
								value={selectedSchools}
								closeMenuOnSelect
								onChange={handleSchools}
								options={selectedSchools?.[0]?.label != "All" ? schools : []}
								size={{ base: "sm", md: "md", lg: "md" }}
							/>
						</Box>
					</GridItem>
					<GridItem>
						<Box maxW="100%">
							<Text textStyle={"textHead"}>{teacher?.lable}</Text>
							<MultiSelect
								useBasicStyles
								colorScheme="bg"
								isMulti
								value={selectedTeachers}
								placeholder={
									teachersListBySchools?.length == 0
										? "No Teachers for the selected school(s)"
										: "Select Teacher(s)"
								}
								closeMenuOnSelect
								onChange={handleTeachers}
								options={selectedTeachers?.[0]?.label != "All" ? teachers : []}
								size={{ base: "sm", md: "md", lg: "md" }}
							/>
						</Box>
					</GridItem>
					<GridItem>
						<Box maxW="100%">
							<Text textStyle={"textHead"}>{status?.lable}</Text>
							<Select
								name="status"
								bg={"#F5F9FF"}
								border={"none"}
								value={formData?.status}
								onChange={handleChangeFormData}
								fontFamily={"body"}
								fontSize={{ base: "xs", md: "sm", lg: "sm" }}
							>
								<option value="all">All</option>
								{status?.options.map((value, i) => {
									return (
										<option key={value} value={value}>
											{value}
										</option>
									);
								})}
							</Select>
						</Box>
					</GridItem>
				</Grid>

				<Divider />

				<Box
					display={{ base: "flex flex-col", lg: "flex", md: "flex" }}
					justifyContent="space-between"
				>
					<HStack spacing={{ base: "2", md: "12", lg: "12" }}>
						<Box>
							<Checkbox
								textStyle="h6"
								isChecked={isAllChecked}
								onChange={handleCheckAll}
							>
								<Text textStyle={"textHead"} whiteSpace="nowrap">
									Select all
								</Text>
							</Checkbox>
						</Box>
						<Box>
							<Select
								size="xs"
								rounded="full"
								bg="primary"
								borderColor="primary"
								placeholder="Action"
								color="white"
							>
								<option value="delete">Delete</option>
							</Select>
						</Box>
						<Box inlineSize={{ base: "7em", lg: "15em", md: "15em" }}>
							<InputGroup size="sm" bg="bg.100" borderColor="bg.100">
								<InputLeftElement
									pointerEvents="none"
									children={<SearchIcon color="gray-2" />}
								/>
								<Input
									type="text"
									placeholder="Search"
									rounded="full"
									name="search"
									// onChange={handleSearch}
									onChange={handleChangeFormData}
								/>
							</InputGroup>
						</Box>
					</HStack>
					<HStack spacing="12" mt={{ base: "6", md: "0", lg: "0" }}>
						{exportClassData?.data ? (
							<CSVLink
								filename="userClasses.csv"
								data={exportClassData?.data}
								headers={exportClassData?.headers}
							>
								<Flex gap="2">
									<Text textStyle={"textHead"} textDecoration="underline">
										Export Classes
									</Text>
									<Box width="6" height="6">
										<FaFileExport className="w-5 h-5" fill="#0081c8" />
									</Box>
								</Flex>
							</CSVLink>
						) : (
							<Flex gap="2">
								<Text textStyle={"textHead"} textDecoration="underline">
									Export Classes
								</Text>
								<Box width="6" height="6">
									<FaFileExport className="w-5 h-5" fill="#0081c8" />
								</Box>
							</Flex>
						)}

						{["districtAdmin", "schoolAdmin", "superAdmin"].includes(
							selectedRole,
						) ? (
							<Flex
								gap="2"
								onClick={() => setAddClassModal(true)}
								cursor="pointer"
							>
								<Text textStyle={"textHead"} textDecoration="underline">
									Add New Class
								</Text>
								<Box width="6" height="6">
									{/* <Img w='full' h='full' src={addIcon} /> */}
									<BsFillPlusCircleFill className="w-4 h-4" color="#0081c8" />
								</Box>
							</Flex>
						) : null}
					</HStack>
				</Box>

				<Grid
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap="6"
				>
					{loading ? (
						<>
							<ManageSkeleton />
							<ManageSkeleton />

							<ManageSkeleton />
						</>
					) : displayClasses?.length ? (
						displayClasses?.map((item, index) => (
							<>
								<GridItem m="auto">
									<ManageClassCard
										item={item}
										index={index}
										userIds={userIds}
										setUserIds={setUserIds}
										setIsAllChecked={setIsAllChecked}
									/>
								</GridItem>
							</>
						))
					) : (
						<GridItem colSpan="3" textAlign="center">
							No Classes Available for the selected school(s) and/or teacher(s)
						</GridItem>
					)}
				</Grid>

				{addClassModal && (
					<AddClassModal
						addClassModal={addClassModal}
						setAddClassModal={setAddClassModal}
						isSuccess={isSuccess}
						setIsSuccess={setIsSuccess}
					/>
				)}

				<Flex justify="flex-end">
					<ReactPaginate
						breakLabel="..."
						nextLabel="Next >"
						onPageChange={handlePageNumber}
						pageRangeDisplayed={5}
						pageCount={totalPages}
						previousLabel="<Previous"
						renderOnZeroPageCount={null}
						containerClassName="pagination"
						pageLinkClassName="page-num"
						previousLinkClassName="page-num"
						nextLinkClassName="page-num"
						activeLinkClassName="active"
					/>
				</Flex>
			</Flex>
		</>
	);
};

export default ManageClasses;

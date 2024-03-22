import {
	Box,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";

import React, { useEffect, useState } from "react";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";
import addCircleCion from "../../../../assets/customIcons/Icon ionic-ios-add-circle.svg";

import { addTeacherModalData } from "./SchoolsData";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	getAddTeacherToManageClassApiCall,
	getTeachersBySchool,
	setAddTeacherToManageClassApiResponse,
} from "../../../authentication/components/schoolAdmin/schoolAdminSlice";
import { setIsLoading } from "../../../../pages/AuthWorkFlow/authSlice";

import TextIcon from "../../../../components/TextIcon";
import { setManageUser } from "../../../../store/slices/profileSlice";
import { useRef } from "react";
import ErrorResponse from "../../../../components/GlobalComponents/ErrorResponse";

const AddTeacherModal = (props) => {
	const { addTeacherModal, setAddTeacherModal } = props;

	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const { onClose } = useDisclosure();

	const selectedRole = useSelector((state) => state.profile.selectedRole);
	const errorResponse = useSelector((state) => state?.profile?.errorResponse);

	const token = useSelector((state) => state.profile.token);
	const userId = useSelector((state) => state.profile.userId);

	const selectedClassDetails = useSelector(
		(state) => state?.schoolAdmin?.selectedClassDetails,
	);

	const teachersBySchool = useSelector(
		(state) => state.schoolAdmin.TeachersBySchool,
	);
	const addTeacherToManageClassApiResponse = useSelector(
		(state) => state?.schoolAdmin?.addTeacherToManageClassApiResponse,
	);

	const [teacherOptions, setTeacherOptions] = useState([]);

	const [data, setData] = useState({
		user_uuid: "",
		classes: [params?.classId],
		schools: [params?.schoolId],
		assigner_role: selectedRole,
		assigner_uuid: userId,
	});

	const handleChange = (teacher) => {
		console.log(teacher, "teacher selected for api==========>");
		setData((prevState) => ({ ...prevState, user_uuid: teacher.value }));
	};

	const handleSubmit = () => {
		dispatch(getAddTeacherToManageClassApiCall({ body: data, token }));
	};

	const handleRequestToAddTeacher = () => {
		dispatch(
			setManageUser({
				formTitle: `Request to Add Teacher`,
				userType: "teacher",
				previousPath: location.pathname,
			}),
		);
		navigate(`/role/${userRole}/AddUser`);
	};

	useEffect(() => {
		if (teachersBySchool?.length) {
			let arr = [];
			teachersBySchool.forEach((teacher) => {
				let obj = { label: teacher.last_name, value: teacher.uuid };
				arr.push(obj);
			});
			console.log(arr, "for teacher options");
			setTeacherOptions([...arr]);
		} else {
			setTeacherOptions([]);
		}
	}, [teachersBySchool]);

	const handleInputChange = (searchText) => {
		searchText.length >= 3 &&
			dispatch(
				getTeachersBySchool({
					token,
					schoolId: selectedClassDetails?.schoolUuid,
					body: { search_text: searchText },
				}),
			);
	};

	useEffect(() => {
		if (addTeacherModal) {
			dispatch(
				getTeachersBySchool({
					token,
					schoolId: selectedClassDetails?.schoolUuid,
					body: { search_text: "" },
				}),
			);
		}
	}, [addTeacherModal]);

	return (
		<>
		<Modal
			size="md"
			onClose={() => {
				setAddTeacherModal(false);
				onClose();
			}}
			isOpen={addTeacherModal}
			isCentered
			useInert={true}
			borderColor="transparent"
		>
			<ModalOverlay />
			<ModalContent p="4">
				<ModalBody>
					<Stack spacing="4">
						{selectedRole !== "teacher" ? (
							<Text mb="8" className="text-primary">
								Add Teacher to Class
							</Text>
						) : (
							<Box>
								<Flex
									justifyContent={"space-between"}
									alignItems={"center"}
									py="3"
									my="3"
								>
									<Text wordBreak={"break-word"} color="primary">
										Request to Add Teacher
									</Text>
									<Box onClick={handleRequestToAddTeacher}>
										<TextIcon
											text="Add Teacher to Class"
											icon={addCircleCion}
										/>
									</Box>
								</Flex>
							</Box>
						)}
						<FormControl>
							<FormLabel>User Last Name</FormLabel>
							<Select
								useBasicStyles
								onInputChange={handleInputChange}
								name="user_uuid"
								onChange={handleChange}
								options={teacherOptions}
								// placeholder="Start Typing last name"p
							></Select>
						</FormControl>
						<FormControl>
							<FormLabel>This Role</FormLabel>
							<Input value="Teacher" isDisabled />
						</FormControl>

						<FormControl>
							<FormLabel>Class Name</FormLabel>
							<Input value={selectedClassDetails?.class_name} isDisabled />
						</FormControl>
						<FormControl>
							<FormLabel>At School</FormLabel>
							<Input
								value={selectedClassDetails?.school?.school_name}
								isDisabled
							/>
						</FormControl>
						{/* {addTeacherToManageClassApiResponse?.message && (
							<Text color="red">
								{addTeacherToManageClassApiResponse.message}
							</Text>
						)} */}
						<Flex justify="center" gap="8">
							<Box
								onClick={() => {
									setAddTeacherModal(false);
									dispatch(setAddTeacherToManageClassApiResponse(null));
								}}
							>
								<NegativeButton text={"Cancel"} />
							</Box>
							<Box onClick={handleSubmit}>
								<PositiveButton text={"Submit"} />
							</Box>
						</Flex>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>

		</>
	);
};

export default AddTeacherModal;

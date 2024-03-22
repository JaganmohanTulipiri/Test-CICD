import {
	Box,
	Button,
	Card,
	CardBody,
	Checkbox,
	Flex,
	Text,
	Grid,
	GridItem,
	HStack,
	Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { manageClassesCardDetails } from "./ManageClassesConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSchoolsList } from "../../../teacher/teacherSlice";
import {
	getExportClasses,
	getSchoolAdminStudentByClassesCall,
	setSelectedClassDetails,
} from "../../../authentication/components/schoolAdmin/schoolAdminSlice";
import moment from "moment";

const ManageClassCard = (props) => {
	const { item, index, userIds, setUserIds, setIsAllChecked } = props;

	const navigate = useNavigate();
	const token = useSelector((state) => state.profile.token);
	const userId = useSelector((state) => state.profile.userId);
	const selectedRole = useSelector((state) => state.profile.selectedRole);
	const schoolsList = useSelector((state) => state.teacher.schools);

	const userRole = useSelector((state) => state.profile.selectedRole);

	const [click, setClick] = useState(false);

	const manageClassesList = useSelector(
		(state) => state?.teacher?.manageClasses,
	);

	const dispatch = useDispatch();
	const data = [
		{
			id: "1",
			name: "ClassName",
			val: `${item?.class_name}`,
		},
		{
			id: "2",
			name: "Class Id",
			val: `${item?.uuid}`,
		},
		{
			id: "3",
			name: "Start Date",
			// val: `${item?.start_date?.split('T')[0]}`,
			val: `${moment(item?.start_date).format(
				navigator.language === "en-GB" ? "DD-MM-YYYY" : "MM-DD-YYYY",
			)}`,
		},
		{
			id: "4",
			name: "End Date",
			val: `${moment(item?.end_date).format(
				navigator.language === "en-GB" ? "DD-MM-YYYY" : "MM-DD-YYYY",
			)}`,
			// val: `${item?.end_date?.split('T')[0]}`,
		},
		{
			id: "5",
			name: "Students",
			val: `${item?.students}`,
		},
		{
			id: "6",
			name: "Status",
			val: `${item?.status}`,
		},
	];

	// console.log(data,"from class card")

	const handleUserIds = (e, userId) => {
		if (e.target.checked) {
			setUserIds((prevState) => {
				manageClassesList.length === [...prevState, userId].length
					? setIsAllChecked(true)
					: setIsAllChecked(false);
				let body = {
					class_uuid: [...prevState, userId],
				};
				dispatch(getExportClasses({ token, body }));
				return [...prevState, userId];
			});
		} else {
			let dummyUserIds = userIds.slice();
			let userIdIndex = dummyUserIds.findIndex((id) => id === userId);
			dummyUserIds.splice(userIdIndex, 1);
			setUserIds([...dummyUserIds]);
			manageClassesList.length === dummyUserIds.length
				? setIsAllChecked(true)
				: setIsAllChecked(false);

			let body = {
				class_uuid: [...dummyUserIds],
			};
			dispatch(getExportClasses({ token, body }));
		}
	};

	useEffect(() => {
		let body = {
			user_uuid: userId,
			user_role: selectedRole,
		};

		// dispatch(getManageClassesList({ token, body }));

		!schoolsList?.length && dispatch(getSchoolsList({ userId, token }));
	}, []);

	// const handleChange = (position) => {
	//   const updatedCheckedState = checkedState?.map((item, index) =>
	//     position === index ? !item : item
	//   );

	//   setCheckedState(updatedCheckedState);
	// };

	// console.log(checkedState, 'from checkboxes');

	return (
		<Card
			shadow="xl"
			pos="relative"
			rounded="lg"
			inlineSize="fit-content"
			p="4"
		>
			<CardBody gap="2">
				{data.map((head, index) => {
					return (
						<Grid templateColumns="repeat(5, 1fr)">
							<GridItem colSpan="2">
								<HStack>
									<Text textStyle={"textHead"}>{head.name}</Text>
									<Spacer />
									<Text>&#58;</Text>
								</HStack>
							</GridItem>
							<GridItem colSpan="3">
								<Text pl="4" textStyle={"textHead"}>
									{head.val}
								</Text>
							</GridItem>
						</Grid>
					);
				})}

				<Box textAlign="center" mt="4">
					<Button colorScheme="blue" size="sm">
						<Text
							textStyle="p"
							onClick={() => {
								// console.log(item, "iam itemmmmmm");

								const classId = item?.uuid;

								dispatch(setSelectedClassDetails(item));

								navigate(
									`/role/${userRole}/manage-classes/school/${item?.schoolUuid}/class/${item?.uuid}`,
								);
							}}
						>
							View
						</Text>
					</Button>
				</Box>
				<Checkbox
					colorScheme="blue"
					pos="absolute"
					top="10"
					left="3"
					isChecked={userIds.includes(item?.uuid)}
					onChange={(e) => [handleUserIds(e, item.uuid)]}
					// isChecked={checkedState[index]}
					// onChange={() => handleChange(index)}
				/>
			</CardBody>
		</Card>
	);
};

export default ManageClassCard;

import { Button, Flex, HStack, Select, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PrivilagesTable from "./PrivilagesTable";
import { rolesPrevilagesData } from "./rolesPrevilagesData";
import { useDispatch, useSelector } from "react-redux";
import { getRolesAndPrivilagesByRole } from "../../../../DistrictAdminApis/districtAdminSlice";

const RolesPrevilages = () => {
	const {
		title,
		text,
		rolesList,
		tableColumns,
		rowsData,
		superAdminRolesList,
	} = rolesPrevilagesData;

	const loading = useSelector((state) => state?.teacher?.loading);

	const role_obj = {
		ADMIN: "admin",
		"HELP DESK": "helpDesk",
		STUDENT: "student",
		TEACHER: "teacher",
		PARENT: "parent",
		"SCHOOL ADMINISTRATOR": "schoolAdmin",
		"DISTRICT ADMINISTRATOR": "districtAdmin",
	};
	const dispatch = useDispatch();

	const token = useSelector((state) => state?.profile?.token);
	const userRole = useSelector((state) => state?.profile?.selectedRole);
	const district_uuid = useSelector(
		(state) => state?.profile?.loggedInUserDetails?.district_uuid,
	);

	const privilage = useSelector(
		(state) => state?.districtAdmin?.rolesAndPrivilagesByRole,
	);

	console.log(privilage, "from privilage table");
	const [activeTab, setActiveTab] = useState(0);
	const [selectedRole, setSelectedRole] = useState("student");

	const handleGetPrevilages = (selectedRole) => {
		dispatch(
			getRolesAndPrivilagesByRole({
				token,
				selectedRole,
				district_uuid: userRole === "districtAdmin" ? district_uuid : "",
			}),
		);
	};

	console.log(userRole, "from 40");

	useEffect(() => {
		if (userRole === "superAdmin") {
			rolesList.push("ADMIN", "HELP DESK");
		}
		handleGetPrevilages(selectedRole);
	}, [selectedRole]);

	console.log("selected Role", selectedRole);

	return (
		<Flex direction="column" gap="4">
			<Text
				fontFamily={"body"}
				fontSize={{ base: "md", md: "sm", lg: "sm" }}
				fontWeight="bold"
			>
				{title}
			</Text>
			<Text textStyle="p" color="gray-2">
				{text}
			</Text>
			<Flex display={{ base: "none", md: "block", lg: "block" }}>
				{userRole === "superAdmin"
					? superAdminRolesList.map((role, index) => {
							return (
								<>
									<Button
										key={index}
										color={activeTab == index ? "white" : "black-2"}
										bgColor={activeTab == index ? "primary" : "gray-1"}
										py="1"
										borderLeftRadius={index == 0 && "full"}
										borderRightRadius={
											index == superAdminRolesList.length - 1 && "full"
										}
										borderRightWidth={
											index != superAdminRolesList.length - 1 && "1px"
										}
										rounded="none"
										borderColor="gray"
										w="15em"
										onClick={() => {
											setActiveTab(index);
											setSelectedRole(role_obj[role]);
											console.log(role_obj[role], "selected rolee");
											handleGetPrevilages(role_obj[role]);
										}}
									>
										<Text
											fontFamily={"body"}
											fontSize={{ base: "9px", md: "sm", lg: "sm" }}
											whiteSpace="pre-line"
										>
											{role}
										</Text>
									</Button>
								</>
							);
					  })
					: rolesList.map((role, index) => {
							// console.log("role list = role", role);
							return (
								<Button
									key={index}
									color={activeTab == index ? "white" : "black-2"}
									bgColor={activeTab == index ? "primary" : "gray-1"}
									py="1"
									borderLeftRadius={index == 0 && "full"}
									borderRightRadius={index == rolesList.length - 1 && "full"}
									borderRightWidth={index != rolesList.length - 1 && "1px"}
									rounded="none"
									borderColor="gray"
									w="15em"
									onClick={() => {
										setActiveTab(index);
										setSelectedRole(role_obj[role]);
										console.log(role_obj[role], "selected rolee");
										handleGetPrevilages(role_obj[role]);
									}}
								>
									<Text
										fontFamily={"body"}
										fontSize={{ base: "9px", md: "sm", lg: "sm" }}
										whiteSpace="pre-line"
									>
										{role}
									</Text>
								</Button>
							);
					  })}
			</Flex>
			<HStack display={{ base: "block", md: "none", lg: "none" }}>
				{userRole === "superAdmin" ? (
					<Select
						value={selectedRole}
						onChange={(event) => {
							// setActiveTab(index);
							setSelectedRole(role_obj[event.target.value]);
							console.log(role_obj[event.target.value], "selected rolee");
							handleGetPrevilages(role_obj[event.target.value]);
						}}
					>
						{superAdminRolesList.map((role, index) => (
							<>
								<option
									key={index}
									color={activeTab == index ? "white" : "black-2"}
									bgColor={activeTab == index ? "primary" : "gray-1"}
									py="1"
									borderLeftRadius={index == 0 && "full"}
									borderRightRadius={
										index == superAdminRolesList.length - 1 && "full"
									}
									borderRightWidth={
										index != superAdminRolesList.length - 1 && "1px"
									}
									rounded="none"
									borderColor="gray"
									w="15em"
									fontFamily={"body"}
									fontSize={{ base: "9px", md: "sm", lg: "sm" }}
									whiteSpace="pre-line"
								>
									{role}
								</option>
							</>
						))}
					</Select>
				) : (
					<Select
						onChange={(event) => {
							setSelectedRole(role_obj[event.target.value]);

							console.log(role_obj[event.target.value], "selected rolee");

							handleGetPrevilages(role_obj[event.target.value]);
						}}
					>
						{rolesList.map((role, index) => (
							<>
								<option
									key={index}
									color={activeTab == index ? "white" : "black-2"}
									bgColor={activeTab == index ? "primary" : "gray-1"}
									py="1"
									borderLeftRadius={index == 0 && "full"}
									borderRightRadius={index == rolesList.length - 1 && "full"}
									borderRightWidth={index != rolesList.length - 1 && "1px"}
									rounded="none"
									borderColor="gray"
									w="15em"
								>
									{role}
								</option>
							</>
						))}
					</Select>
				)}
			</HStack>
			<PrivilagesTable role={selectedRole} />
		</Flex>
	);
};

export default RolesPrevilages;

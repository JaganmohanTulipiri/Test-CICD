import React, { useEffect, useState } from "react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Checkbox,
	Text,
	Flex,
} from "@chakra-ui/react";

import { ManageUsersData } from "./ManageUsersData";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
	getUserRole,
	setManageUser,
	setPreviousPath,
} from "../../../../store/slices/profileSlice";
import { getExportUsers } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";
import ReactPaginate from "react-paginate";
import TableSkeleton from "../../../../components/GlobalComponents/TableSkeleton";
import moment from "moment";

const ManageUsersTable = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const {
		usersList,
		userIds,
		setUserIds,
		setIsAllChecked,
		isAllChecked,
		setPageNumber,
	} = props;
	console.log("manage users");

	const usersTableList = useSelector((state) => state.teacher.allUsers);
	const totalPages = useSelector((state) => state?.teacher?.totalPages);
	const loading = useSelector((state) => state?.schoolAdmin?.loading);

	console.log(totalPages, "pages form 46");

	const exportUsersData = useSelector(
		(state) => state?.schoolAdmin?.exportUsers,
	);

	console.log("manage users listtt", usersTableList, exportUsersData);

	const manageUsersSelectedDropdownText = useSelector(
		(state) => state?.schoolAdmin?.manageUsersSelectedDropdownText,
	);

	const manageUser = useSelector((state) => state?.profile?.manageUser);

	console.log(manageUser);

	const DropdownText = useSelector(
		(state) => state?.profile?.manageUser?.userType,
	);

	console.log("DropdownText============", DropdownText);

	const previousValuesOfAddUser = useSelector(
		(state) => state?.schoolAdmin?.previousValuesOfAddUser,
	);

	const userRole = useSelector((state) => state?.profile?.selectedRole);

	const token = useSelector((state) => state?.profile?.token);

	console.log(previousValuesOfAddUser, "previousValuesOfAddUser");

	const tableData = {
		student: [
			// "Student Name",
			"Student ID",
			"Birth Date",
			"Grade",
			"Sex  at Birth",
			"Login Status",
			"Assigned to Class",
		],

		teacher: [
			// "Teacher Name",
			"Teacher ID",
			"Login Status",
			"Assigned to Class",
		],

		schoolAdmin: [
			// "School Administrator Name",
			"School Administrator",
			"Login Status",
			"Assigned to Class",
		],

		districtAdmin: [
			// "District Administrator Name",
			"District Administrator ID",
			"Login Status",
		],
	};

	const { tableColumns, rows } = ManageUsersData;

	const USERS_OBJ = {
		student: "Student",
		teacher: "Teacher",
		parent: "Parent",
		schoolAdmin: "School Administrator",
		districtAdmin: "District Administrator",
	};

	const clickOnUser = (id) => {
		dispatch(
			setManageUser({
				formTitle: `Edit ${USERS_OBJ[manageUser?.userType]}`,
				userType: manageUser?.userType,
				// previousPath: location.pathname,
			}),
		);
		dispatch(setPreviousPath(location.pathname));

		navigate(`/role/${userRole}/edit/${DropdownText}/${id}`);
	};

	const handleUserIds = (e, userId) => {
		if (e.target.checked) {
			setUserIds((prevState) => {
				usersList.length === [...prevState, userId].length
					? setIsAllChecked(true)
					: setIsAllChecked(false);

				let body = {
					user_uuid: [...prevState, userId],
					user_type: manageUser?.userType,
				};
				dispatch(getExportUsers({ token, body }));
				return [...prevState, userId];
			});
		} else {
			let dummyUserIds = userIds.slice();
			let userIdIndex = dummyUserIds.findIndex((id) => id === userId);
			dummyUserIds.splice(userIdIndex, 1);
			setUserIds([...dummyUserIds]);
			usersList.length === dummyUserIds.length
				? setIsAllChecked(true)
				: setIsAllChecked(false);

			let body = {
				user_uuid: [...dummyUserIds],
				user_type: manageUser?.userType,
			};
			dispatch(getExportUsers({ token, body }));
		}
	};

	const handleCheckAll = (e) => {
		if (e.target.checked) {
			setIsAllChecked(true);
			let arr = usersList.map((user) => user.uuid);
			setUserIds(arr);

			let body = {
				user_uuid: arr,
				user_type: manageUser?.userType,
			};
			dispatch(getExportUsers({ token, body }));
		} else {
			setIsAllChecked(false);
			setUserIds([]);
			let body = {
				user_uuid: userIds,
				user_type: manageUser?.userType,
			};
			dispatch(getExportUsers({ token, body }));
		}
	};

	const handlePageNumber = (event) => {
		setPageNumber(event.selected + 1);
	};

	console.log(userIds, "iam user ids");

	return (
		<>
			{loading ? (
				<TableSkeleton />
			) : (
				<TableContainer>
					<Table variant="striped" colorScheme="bg">
						<Thead>
							<Tr>
								{/* <Th>
                <Checkbox />
              </Th>
               */}
								{DropdownText === "student" ||
								previousValuesOfAddUser?.user_type === "student" ? (
									<>
										<Th>
											<Flex gap={5}>
												<Checkbox
													isChecked={isAllChecked}
													onChange={handleCheckAll}
												/>
												<Text
													fontFamily={"body"}
													fontSize={{ base: "sm", md: "sm", lg: "sm" }}
													color="black"
												>
													Student Name
												</Text>
											</Flex>
										</Th>
									</>
								) : (
									<>
										{DropdownText === "teacher" ||
										previousValuesOfAddUser?.user_type === "teacher" ? (
											<>
												<Th>
													<Flex gap={5}>
														<Checkbox
															isChecked={isAllChecked}
															onChange={handleCheckAll}
														/>
														<Text textStyle={"textHead"}>Teacher Name </Text>
													</Flex>
												</Th>
											</>
										) : (
											<>
												{DropdownText === "schoolAdmin" ||
												previousValuesOfAddUser?.user_type === "schoolAdmin" ? (
													<>
														<Th>
															<Flex gap={5}>
																<Checkbox
																	isChecked={isAllChecked}
																	onChange={handleCheckAll}
																/>
																<Text
																	fontFamily={"body"}
																	fontSize={{ base: "sm", md: "sm", lg: "sm" }}
																>
																	School Administrator Name
																</Text>
															</Flex>
														</Th>
													</>
												) : (
													<>
														{DropdownText === "districtAdmin" ||
														previousValuesOfAddUser?.user_type ===
															"districtAdmin" ? (
															<>
																<Th>
																	<Flex gap={5}>
																		<Checkbox
																			isChecked={isAllChecked}
																			onChange={handleCheckAll}
																		/>
																		<Text
																			fontFamily={"body"}
																			fontSize={{
																				base: "sm",
																				md: "sm",
																				lg: "sm",
																			}}
																		>
																			District Administrator Name
																		</Text>
																	</Flex>
																</Th>
															</>
														) : (
															<></>
														)}
													</>
												)}
											</>
										)}
									</>
								)}

								{tableData[DropdownText]?.map((columnName, index) => {
									return (
										<Th>
											<Text
												fontFamily={"body"}
												fontSize={{ base: "sm", md: "sm", lg: "sm" }}
											>
												{columnName}
											</Text>
										</Th>
									);
								})}
							</Tr>
						</Thead>

						<Tbody>
							{usersList &&
								usersList?.length > 0 &&
								usersList?.map((item, index) => {
									return (
										<Tr key={index}>
											{/* <Td>
                      <Checkbox />
                    </Td> */}
											{DropdownText === "student" ||
											previousValuesOfAddUser?.user_type === "student" ? (
												<>
													<Td
														fontFamily={"body"}
														fontSize={{ base: "sm", md: "sm", lg: "sm" }}
													>
														<Flex gap={5}>
															<Checkbox
																name="studentId"
																isChecked={userIds.includes(item?.uuid)}
																onChange={(e) => [handleUserIds(e, item.uuid)]}
															/>
															<Text
																fontFamily={"body"}
																fontSize={{ base: "sm", md: "sm", lg: "sm" }}
																color="primary"
																className="cursor-pointer"
																onClick={() => {
																	clickOnUser(item.uuid);
																}}
															>
																{item.first_name} {item?.last_name}
															</Text>
														</Flex>
													</Td>
													<Td
														fontFamily={"body"}
														fontSize={{ base: "sm", md: "sm", lg: "sm" }}
													>
														{item.student_id}
													</Td>
													<Td
														fontFamily={"body"}
														fontSize={{ base: "sm", md: "sm", lg: "sm" }}
													>
														{moment(item.date_of_birth).format(
															navigator.language === "en-GB"
																? "DD-MM-YYYY"
																: "MM-DD-YYYY",
														)}
													</Td>
													<Td
														fontFamily={"body"}
														fontSize={{ base: "sm", md: "sm", lg: "sm" }}
													>
														{item.grade}
													</Td>
													<Td
														fontFamily={"body"}
														fontSize={{ base: "sm", md: "sm", lg: "sm" }}
													>
														{item.gender}
													</Td>
													<Td
														fontFamily={"body"}
														fontSize={{ base: "sm", md: "sm", lg: "sm" }}
													>
														{item.is_active === true ? "Active" : "In Active"}
													</Td>
													<Td
														color="primary"
														fontFamily={"body"}
														fontSize={{ base: "sm", md: "sm", lg: "sm" }}
													>
														Assigned
													</Td>
												</>
											) : (
												<>
													{DropdownText === "teacher" ||
													previousValuesOfAddUser?.user_type === "teacher" ? (
														<>
															<Td
																fontFamily={"body"}
																fontSize={{ base: "sm", md: "sm", lg: "sm" }}
															>
																<Flex gap={5}>
																	<Checkbox
																		name="teacherId"
																		isChecked={userIds.includes(item?.uuid)}
																		onChange={(e) => [
																			handleUserIds(e, item.uuid),
																		]}
																	/>
																	<Text
																		color="primary"
																		className="cursor-pointer"
																		onClick={() => {
																			clickOnUser(item.uuid);
																		}}
																	>
																		{item.first_name} {item?.last_name}
																	</Text>
																</Flex>
															</Td>
															<Td
																fontFamily={"body"}
																fontSize={{ base: "sm", md: "sm", lg: "sm" }}
															>
																{item.teacher_id}
															</Td>
															<Td>
																{item.is_active === true
																	? "Active"
																	: "In Active"}
															</Td>
															<Td
																color="primary"
																fontFamily={"body"}
																fontSize={{ base: "sm", md: "sm", lg: "sm" }}
															>
																Assigned
															</Td>
														</>
													) : (
														<>
															{DropdownText === "schoolAdmin" ||
															previousValuesOfAddUser?.user_type ===
																"schoolAdmin" ? (
																<>
																	<Td>
																		<Flex gap={5}>
																			<Checkbox
																				name="schoolAdminId"
																				isChecked={userIds.includes(item?.uuid)}
																				onChange={(e) => [
																					handleUserIds(e, item.uuid),
																				]}
																			/>
																			<Text
																				fontFamily={"body"}
																				fontSize={{
																					base: "sm",
																					md: "sm",
																					lg: "sm",
																				}}
																				color="primary"
																				className="cursor-pointer"
																				onClick={() => {
																					clickOnUser(item.uuid);
																				}}
																			>
																				{item.first_name} {item?.last_name}
																			</Text>
																		</Flex>
																	</Td>
																	<Td
																		fontFamily={"body"}
																		fontSize={{
																			base: "sm",
																			md: "sm",
																			lg: "sm",
																		}}
																	>
																		AS00001
																	</Td>
																	<Td>
																		{item.is_active === true
																			? "Active"
																			: "In Active"}
																	</Td>
																	<Td
																		color="primary"
																		fontFamily={"body"}
																		fontSize={{
																			base: "sm",
																			md: "sm",
																			lg: "sm",
																		}}
																	>
																		Assigned
																	</Td>
																</>
															) : (
																<>
																	{DropdownText === "districtAdmin" ||
																	previousValuesOfAddUser?.user_type ===
																		"districtAdmin" ? (
																		<>
																			<Td>
																				<Flex gap={5}>
																					<Checkbox
																						name="districtAdminId"
																						isChecked={userIds.includes(
																							item?.uuid,
																						)}
																						onChange={(e) => [
																							handleUserIds(e, item.uuid),
																						]}
																					/>
																					<Text
																						color="primary"
																						className="cursor-pointer"
																						onClick={() => {
																							clickOnUser(item.uuid);
																						}}
																					>
																						{item.first_name} {item?.last_name}
																					</Text>
																				</Flex>
																			</Td>
																			<Td
																				fontFamily={"body"}
																				fontSize={{
																					base: "sm",
																					md: "sm",
																					lg: "sm",
																				}}
																			>
																				AS00001
																			</Td>
																			<Td
																				fontFamily={"body"}
																				fontSize={{
																					base: "sm",
																					md: "sm",
																					lg: "sm",
																				}}
																			>
																				{item.is_active === true
																					? "Active"
																					: "In Active"}
																			</Td>
																		</>
																	) : (
																		<></>
																	)}
																</>
															)}
														</>
													)}
												</>
											)}

											{/* {row.rowData.map((value, index) => {
										return <Td key="index">{value}</Td>;
									})} */}
										</Tr>
									);
								})}
						</Tbody>
					</Table>
					{usersList?.length === 0 && (
						<Text
							textStyle="h4"
							color="black"
							textAlign={"center"}
							mt="5"
							mb="5"
						>
							No Data Found
						</Text>
					)}
				</TableContainer>
			)}

			{totalPages > 1 && (
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
			)}
		</>
	);
};

export default ManageUsersTable;

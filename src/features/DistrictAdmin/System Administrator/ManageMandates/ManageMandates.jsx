import { Box, Flex, HStack, Img, Select, Spacer, Text } from '@chakra-ui/react';
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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ManageMandatesData } from "./ManageMandatedata";
import addCircleIcon from "../../../../assets/customIcons/Icon ionic-ios-add-circle.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMandateData } from "../../../../DistrictAdminApis/districtAdminSlice";
import { FiEdit } from "react-icons/fi";
import moment from "moment";
import ReactPaginate from "react-paginate";
import TableSkeleton from "../../../../components/GlobalComponents/TableSkeleton";
import { setPreviousPath } from "../../../../store/slices/profileSlice";

// import { getMandateData } from "../../../../DistrictAdminApis/district.service";

const ManageMandates = () => {
	const {
		title,
		text,
		selectLable,
		selectOptions,
		addMandate,
		tableColumns,
		rowData,
	} = ManageMandatesData;

	const dispatch = useDispatch();

	const mandateData = useSelector((state) => state?.districtAdmin?.mandateData);
	const userId = useSelector((state) => state.profile.userId);
	const selectedRole = useSelector((state) => state.profile.selectedRole);
	const token = useSelector((state) => state.profile.token);
	const totalPages = useSelector((state) => state?.teacher?.totalPages);
	const loading = useSelector((state) => state?.districtAdmin?.loading);
	// const schoolsList = useSelector((state) => state.teacher.schools);

	const mangeDataShowList = useSelector(
		(state) => state?.district?.setMandatesData,
	);

	console.log(mandateData, "from screen");

	const [status, setStatus] = useState("");
	const [pageNumber, setPageNumber] = useState("1");

	const handlePageNumber = (event) => {
		setPageNumber(event.selected + 1);
		// dispatch(setCurrentPageNumber(event.selected+1))
	};

	console.log(selectLable, "selectLableselectLable");

	useEffect(() => {
		console.log(status);

		let body = {
			skip: pageNumber,
			status: status == "Pending" ? "NOT STARTED" : status,
			size: 20,
		};
		dispatch(getMandateData({ token, body }));
	}, [pageNumber, status]);

	console.log(mangeDataShowList, ManageMandates);

	const navigate = useNavigate();

	return (
		<Flex direction="column" gap="4">
			<Text
				fontFamily={"body"}
				fontSize={{ base: "md", md: "sm", lg: "sm" }}
				fontWeight="bold"
			>
				{title}
			</Text>
			<Text
				fontFamily={"body"}
				fontSize={{ base: "sm", md: "sm", lg: "sm" }}
				color="gray-2"
			>
				{text}
			</Text>
			<HStack display={{ base: "flex flex-row", md: "flex", lg: "flex" }}>
				<Box
					display={{
						base: "flex flex-row",
						md: "flex flex-col",
						lg: "flex flex-col",
					}}
				>
					<Text
						fontFamily={"body"}
						fontSize={{ base: "sm", md: "md", lg: "md" }}
						mb={{ base: "3", lg: "0", md: "0" }}
					>
						{selectLable}
					</Text>
					<Select
						variant="outline"
						onClick={(e) => {
							setStatus(e.target.value);
						}}
						mb={{ base: "3", lg: "0", md: "0" }}
					>
						{selectOptions.map((option, index) => {
							return (
								<option
									key={index}
									value={option === "All Status" ? "" : option}
								>
									{option}
								</option>
							);
						})}
					</Select>
				</Box>
				<Spacer />
				<HStack
					cursor="pointer"
					onClick={() => {
						dispatch(setPreviousPath(location.pathname));
						navigate(`/role/${selectedRole}/add-mandates`);
					}}
				>
					<Text
						fontFamily={"body"}
						fontSize={{ base: "sm", md: "sm", lg: "sm" }}
						as="span"
						textDecoration="underline"
						color="black-2"
					>
						{addMandate}
					</Text>
					<Box width="4" height="4">
						<Img w="full" h="full" src={addCircleIcon} />
					</Box>
				</HStack>
			</HStack>
			{loading ? (
				<TableSkeleton />
			) : (
				<TableContainer>
					<Table variant="striped" colorScheme="bg">
						<Thead>
							<Tr>
								{tableColumns.map((columnName, index) => {
									return (
										<Th
											fontFamily={"body"}
											fontSize={{ base: "sm", md: "sm", lg: "sm" }}
											color="primary"
										>
											{columnName}
										</Th>
									);
								})}
							</Tr>
						</Thead>
						<Tbody>
							{mandateData &&
								mandateData?.length > 0 &&
								mandateData.map((item, index) => {
									return (
										<>
											<Tr>
												<Td>
													<Text
														fontFamily={"body"}
														fontSize={{ base: "sm", md: "sm", lg: "sm" }}
													>
														{item.title}
													</Text>
												</Td>
												<Td
													fontFamily={"body"}
													fontSize={{ base: "sm", md: "sm", lg: "sm" }}
												>
													{moment(item.start_date).format(
														navigator.language === "en-GB"
															? "DD-MM-YYYY"
															: "MM-DD-YYYY",
													)}
												</Td>
												<Td
													fontFamily={"body"}
													fontSize={{ base: "sm", md: "sm", lg: "sm" }}
												>
													{moment(item.end_date).format(
														navigator.language === "en-GB"
															? "DD-MM-YYYY"
															: "MM-DD-YYYY",
													)}
												</Td>

												{/* <Td>{item.minutes}</Td> */}
												<Td
													fontFamily={"body"}
													fontSize={{ base: "sm", md: "sm", lg: "sm" }}
												>
													District
												</Td>
												<Td
													fontFamily={"body"}
													fontSize={{ base: "sm", md: "sm", lg: "sm" }}
												>
													{item.status}
												</Td>
												<Td
													fontFamily={"body"}
													fontSize={{ base: "sm", md: "sm", lg: "sm" }}
													cursor="pointer"
													onClick={() => {
														dispatch(setPreviousPath(location.pathname));
														navigate(`/role/${selectedRole}/edit-mandates`, {
															state: { mandate: item },
														});
													}}
												>
													{" "}
													<FiEdit color="#0081C8" />
												</Td>
											</Tr>
										</>
									);
								})}
							{/* {rowData.map((row, index) => {
              return (
                <Tr key={index}>
                  {row.data.map((value, index) => {
                    return (
                      <>
                        <Td key={index}>{value}</Td>
                      </>
                    );
                  })}
                  <Td>icon</Td>
                </Tr>
              );
            })} */}
						</Tbody>
					</Table>
				</TableContainer>
			)}

			{!mandateData?.length || totalPages < 2 ? null : (
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
		</Flex>
	);
};

export default ManageMandates;

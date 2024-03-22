import {
	Box,
	Checkbox,
	Divider,
	Flex,
	Grid,
	GridItem,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Spacer,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TextIcon from "../../../../components/TextIcon";
import addCircleCion from "../../../../assets/customIcons/Icon ionic-ios-add-circle.svg";
import { schoolData, teachersTableData } from "./SchoolsData";
import GridProvider from "../../../../components/GridProvider";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";
import { tableData } from "./SchoolsData";
import { SearchIcon } from "@chakra-ui/icons";
import AddTeacherModal from "./addTeacherModal";
import AddSchoolAdminModal from "./AddSchoolAdminModal";

const School = () => {
	const { title, details } = schoolData;
	const { tableName, searchPlaceholder, addTeacher, tableColumns, rows } =
		teachersTableData;

	const [addTeacherModal, setAddTeacherModal] = useState(null);
	const [addSchoolAdminModal, setAddSchoolAdminModal] = useState(null);

	console.log(addTeacherModal, "modal=======>");
	return (
		<Flex direction="column" gap="4">
			<HStack>
				<Text>{title}</Text>
				<Spacer />
				<Box onClick={() => setAddSchoolAdminModal(true)}>
					<TextIcon text={"Add Administrator"} icon={addCircleCion} />
				</Box>
			</HStack>
			<Grid
				templateColumns="repeat(3, 1fr)"
				templateRows="repeat(5,1fr)"
				gap="8"
			>
				<GridProvider data={details} />
			</Grid>
			<Flex justify="center" gap={12} width={"full"}>
				<Box>
					<NegativeButton text={"No"} />
				</Box>
				<Box>
					<PositiveButton text={"Save"} />
				</Box>
			</Flex>
			<Divider />
			<Text>{tableName}</Text>
			<HStack>
				<Box inlineSize="15em">
					<InputGroup size="sm">
						<InputLeftElement
							pointerEvents="none"
							children={<SearchIcon color="gray-2" />}
						/>
						<Input type="text" placeholder={searchPlaceholder} rounded="full" />
					</InputGroup>
				</Box>
				<Spacer />
				<Box
					onClick={() => {
						setAddTeacherModal(true);
						console.log("inside onclick on add teacher");
					}}
					border="1px"
				>
					<TextIcon text={addTeacher} icon={addCircleCion} />
				</Box>
			</HStack>
			<TableContainer>
				<Table variant="striped" colorScheme="bg">
					<Thead>
						<Tr>
							<Th>
								<Checkbox />
							</Th>
							{tableColumns.map((columnName, index) => {
								return (
									<Th textStyle="h6" color="primary">
										{columnName}
									</Th>
								);
							})}
						</Tr>
					</Thead>
					<Tbody>
						{rows.map((row, index) => {
							return (
								<Tr key={index}>
									<Td>
										<Checkbox />
									</Td>
									{row.rowData.map((value, index) => {
										return <Td key="index">{value}</Td>;
									})}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>
			<AddTeacherModal
				addTeacherModal={addTeacherModal}
				setAddTeacherModal={setAddTeacherModal}
			/>
			<AddSchoolAdminModal
				addSchoolAdminModal={addSchoolAdminModal}
				setAddSchoolAdminModal={setAddSchoolAdminModal}
			/>
		</Flex>
	);
};

export default School;

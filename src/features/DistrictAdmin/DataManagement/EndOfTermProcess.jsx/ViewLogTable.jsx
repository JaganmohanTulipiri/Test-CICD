import React from "react";
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
} from "@chakra-ui/react";
import { EndOfTermProcessData } from "./EndOf TermprocessData";
const ViewLogTable = () => {
	const { tableName, tableColumns, rowsData } = EndOfTermProcessData;
	return (
		<>
			<Text textStyle="h3" color="black">
				{tableName}
			</Text>
			<TableContainer>
				<Table variant="striped" colorScheme="bg">
					<Thead>
						<Tr>
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
						{rowsData.map((row, index) => {
							return (
								<Tr key={index}>
									{row.data.map((value, index) => {
										return <Td key="index">{value}</Td>;
									})}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default ViewLogTable;

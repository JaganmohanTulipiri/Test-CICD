import {
	Box,
	Button,
	Flex,
	Select,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EndOfTermProcessData } from "./EndOf TermprocessData";
import PromoteUnPromoteModal from "./PromoteUnPromoteModel";
import ViewLogTable from "./ViewLogTable";

const EndOFTermProcess = () => {
	const {
		title,
		text,
		buttonLable,
		buttonsList,
		buttonCaption,
		selectLable,
		selectOptions,
		promoteStudents,
		undoPromoteStudents,
		tableName,
		tableColumn,
		rowsData,
	} = EndOfTermProcessData;

	const [activeTab, setActiveTab] = useState(0);
	const [modal, setModal] = useState(null);
	console.log("modal boolen", modal);
	return (
		<Flex direction="column" gap="4">
			<Text textStyle="h1">{title}</Text>
			<Text textStyle="p" color="gray-2">
				{text}
			</Text>
			<Stack direction="column" spacing="2">
				<Text textStyle="h6" color="black-2">
					{buttonLable}
				</Text>
				<Flex>
					{buttonsList.map((action, index) => {
						return (
							<Button
								key={index}
								color={activeTab == index ? "white" : "black-2"}
								bgColor={activeTab == index ? "primary" : "gray-1"}
								py="1"
								borderLeftRadius={index == 0 && "full"}
								borderRightRadius={index == buttonsList.length - 1 && "full"}
								borderRightWidth={index != buttonsList.length - 1 && "1px"}
								rounded="none"
								borderColor="gray"
								w="15em"
								onClick={() => setActiveTab(index)}
							>
								<Text textStyle="h5">{action}</Text>
							</Button>
						);
					})}
				</Flex>
				<Text textStyle="p" color="gray-2">
					{buttonCaption}
				</Text>
			</Stack>
			<Stack direction="column" spacing="2">
				<Text textStyle="h6" color="black-2">
					{selectLable}
				</Text>
				<Box inlineSize="sm">
					<Select bg="bg.100" borderColor="bg.100" placeholder="Select school">
						{selectOptions.map((option, index) => {
							return (
								<option key={index} value={option}>
									{option}
								</option>
							);
						})}
					</Select>
				</Box>
			</Stack>
			<Box inlineSize="sm" textAlign="center">
				<Button
					// color={activeTab == index ? "white" : "black-2"}
					// bgColor={activeTab == index ? "primary" : "gray-1"}
					color="white"
					bg="gray-3"
					rounded="full"
					border="0"
					size="sm"
					onClick={() => setModal(true)}
				>
					<Text textStyle="h6">
						{activeTab ? undoPromoteStudents : promoteStudents}
					</Text>
				</Button>
			</Box>
			<ViewLogTable />
			<PromoteUnPromoteModal
				activeTab={activeTab}
				modal={modal}
				setModal={setModal}
			/>
		</Flex>
	);
};

export default EndOFTermProcess;

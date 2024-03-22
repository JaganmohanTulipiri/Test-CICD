import {
	Box,
	Flex,
	Grid,
	GridItem,
	HStack,
	Spacer,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import addCircleCion from "../../../../assets/customIcons/Icon ionic-ios-add-circle.svg";
import GridProvider from "../../../../components/GridProvider";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";
import TextIcon from "../../../../components/TextIcon";
import AddTeacherModal from "../../System Administrator/Schools/addTeacherModal";
import ClassTable from "./ClassTable";
import { classData } from "./ManageClassesConfig";

const Class = () => {
	const { title, addTeacherToClass, classDetails, teachers } = classData;
	const [addTeacherModal, setAddTeacherModal] = useState(false);
	return (
		<Flex direction="column" gap="4">
			<HStack>
				<Text>{title}</Text>
				<Spacer />
				<Box onClick={() => setAddTeacherModal(true)}>
					<TextIcon text={addTeacherToClass} icon={addCircleCion} />
				</Box>
			</HStack>
			<Grid templateColumns="repeat(4, 1fr)" gap="8">
				<GridProvider data={classDetails} />
				<GridItem colSpan="1">
					<Flex direction="column">
						<Text>{teachers.title}:</Text>
						{teachers.list.map((admin, index) => {
							return (
								<Flex
									inlineSize="sm"
									direction="flex-reverse"
									gap="4"
									key={index}
								>
									<Text mr="auto">{admin}</Text>
									<Box onClick={() => {}}>
										<TextIcon text={"Edit"} icon={addCircleCion} />
									</Box>
									<TextIcon text={"Delete"} icon={addCircleCion} />
								</Flex>
							);
						})}
					</Flex>
				</GridItem>
			</Grid>
			<Flex justify="center" gap={12} width={"full"} mt="8">
				<Box>
					<NegativeButton text={"No"} />
				</Box>
				<Box>
					<PositiveButton text={"Save"} />
				</Box>
			</Flex>
			<ClassTable />
			<AddTeacherModal
				addTeacherModal={addTeacherModal}
				setAddTeacherModal={setAddTeacherModal}
			/>
		</Flex>
	);
};

export default Class;

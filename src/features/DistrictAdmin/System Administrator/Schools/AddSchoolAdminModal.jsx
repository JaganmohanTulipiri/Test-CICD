import {
	Box,
	Flex,
	Grid,
	GridItem,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Select,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import AddEditUser from "../../../../components/AddEditUser";
import addCircleCion from "../../../../assets/customIcons/Icon ionic-ios-add-circle.svg";
import GridProvider from "../../../../components/GridProvider";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";
import TextIcon from "../../../../components/TextIcon";
import { addSchoolAdminModalData, addAdministratorData } from "./SchoolsData";
import { useNavigate } from "react-router-dom";
const AddSchoolAdminModal = (props) => {
	const { title, addNewUser, userDetails } = addSchoolAdminModalData;
	const { addSchoolAdminModal, setAddSchoolAdminModal } = props;
	const { onClose } = useDisclosure();
	const navigate = useNavigate();
	return (
		<Modal
			size="sm"
			onClose={onClose}
			isOpen={addSchoolAdminModal}
			isCentered
			useInert={true}
			borderColor="transparent"
		>
			<ModalOverlay />
			<ModalContent p="4">
				<ModalCloseButton onClick={() => setAddSchoolAdminModal(false)} />
				<ModalBody>
					<Text>{title}</Text>
					<Flex justify="flex-end">
						<Box
							onClick={() =>
								navigate("/role/DistrictAdmin/add-edit-user", {
									state: { userData: addAdministratorData },
								})
							}
						>
							<TextIcon text={addNewUser} icon={addCircleCion} />
						</Box>
					</Flex>
					<Flex direction="column" gap="4">
						{userDetails.map((item, index) => {
							return (
								<>
									{item.inputType == "select" ? (
										<Box inlineSize="xs" maxW="100%">
											<Text mb="2">{item.lable}</Text>
											<Select bg="bg.100" borderColor="bg.100">
												{item.options.map((value, i) => {
													return (
														<option key={i} value={value}>
															{value}
														</option>
													);
												})}
											</Select>
										</Box>
									) : (
										<Box inlineSize="xs" maxW="100%">
											<Text mb="2">{item.lable}</Text>
											<Input type={item.inputType} border="0px" bg="bg.100" />
										</Box>
									)}
								</>
							);
						})}
						<Flex justify="center" gap="8">
							<Box>
								<NegativeButton text={"Cancel"} />
							</Box>
							<Box>
								<PositiveButton text={"Next"} />
							</Box>
						</Flex>
					</Flex>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default AddSchoolAdminModal;

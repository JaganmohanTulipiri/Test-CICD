import React, { useEffect, useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	useDisclosure,
	Box,
	Text,
	Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import successTick from "../../../../../assets/customIcons/success-tick.svg";
import PositiveButton from "../../../../../components/PositiveButton";
import { setAddTeacherToManageClassApiResponse } from "../schoolAdminSlice";

const AddTeacherSuccessModal = () => {
	const dispatch = useDispatch();

	const addTeacherToManageClassApiResponse = useSelector(
		(state) => state.schoolAdmin.addTeacherToManageClassApiResponse
	);

	const { onOpen, onClose } = useDisclosure();

	return (
		<>
			<Modal
				isOpen={onOpen}
				onClose={() => {
					dispatch(setAddTeacherToManageClassApiResponse(null));
					onClose();
				}}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						<Flex
							direction="column"
							gap="6"
							marginTop="2rem"
							alignItems="center"
						>
							<Box boxSize="8">
								<img src={successTick} />
							</Box>
							<Text textStyle="h1" color="green" textAlign="center">
								{addTeacherToManageClassApiResponse?.data?.message}
							</Text>
							<Box
								onClick={() => {
									dispatch(setAddTeacherToManageClassApiResponse(null));
									onClose();
								}}
							>
								<PositiveButton text={"OK"} />
							</Box>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddTeacherSuccessModal;

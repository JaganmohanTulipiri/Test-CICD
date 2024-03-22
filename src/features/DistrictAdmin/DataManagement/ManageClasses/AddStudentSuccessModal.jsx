import React, { useEffect, useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Box,
	Text,
	Flex,
	Button,
	ModalHeader,
	ModalFooter,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import successTick from "../../../../assets/customIcons/success-tick.svg";

import { setAddStudentToClassApiResponse } from "../../../authentication/components/schoolAdmin/schoolAdminSlice";
import PositiveButton from "../../../../components/PositiveButton";

const AddStudentSuccessModal = (props) => {
	const dispatch = useDispatch();

	const addStudentToClassApiResponse = useSelector(
		(state) => state?.schoolAdmin?.addStudentToClassApiResponse
	);

	const { onOpen, onClose } = useDisclosure();

	return (
		<>
			<Modal
				isOpen={onOpen}
				onClose={() => {
					dispatch(setAddStudentToClassApiResponse(null));
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
								{addStudentToClassApiResponse?.data?.message}
							</Text>
							<Box
								onClick={() => {
									dispatch(setAddStudentToClassApiResponse(null));
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

export default AddStudentSuccessModal;

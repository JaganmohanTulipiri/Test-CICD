import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Box,
	Stack,
	Text,
	Flex,
	Input,
	RadioGroup,
	Radio,
} from "@chakra-ui/react";
import { promoteUnpromoteModalData } from "./EndOf TermprocessData";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";

const PromoteUnPromoteModal = (props) => {
	const { title, promoteText, unPromoteText } = promoteUnpromoteModalData;
	const { activeTab, modal, setModal } = props;
	const { onClose } = useDisclosure();

	return (
		<Modal
			size="sm"
			rounded="lg"
			onClose={onClose}
			isOpen={modal}
			isCentered
			useInert={true}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader textStyle="p" color="primary" textAlign="center">
					{title}
				</ModalHeader>
				<ModalCloseButton onClick={() => setModal(false)} />
				<ModalBody textAlign="center">
					<Text textStyle="h6" color="black-2">
						{activeTab ? unPromoteText : promoteText}
					</Text>
				</ModalBody>
				<ModalFooter>
					<Flex justify="center" gap={4} width={"full"}>
						<Box onClick={() => setModal(false)}>
							<NegativeButton text={"No"} />
						</Box>
						<Box>
							<PositiveButton text={"Yes"} />
						</Box>
					</Flex>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default PromoteUnPromoteModal;

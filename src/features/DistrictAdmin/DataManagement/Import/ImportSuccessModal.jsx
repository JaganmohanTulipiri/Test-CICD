import React from "react";
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
} from "@chakra-ui/react";
import successTick from "../../../../assets/customIcons/success-tick.svg";
import PositiveButton from "../../../../components/PositiveButton";

const ImportSuccessModal = (props) => {
	const { importSuccessModal, setImportSuccessModal } = props;
	const { onClose } = useDisclosure();
	return (
		<Modal
			size="xs"
			onClose={onClose}
			isOpen={importSuccessModal}
			isCentered
			useInert={true}
			borderColor="transparent"
		>
			<ModalOverlay />
			<ModalContent p="4">
				<ModalCloseButton onClick={() => setImportSuccessModal(false)} />
				<ModalBody>
					<Flex direction="column" gap="6" alignItems="center">
						<Text textStyle="h1" color="green" textAlign="center">
							Import has been
						</Text>
						<Box boxSize="8">
							<img src={successTick} />
						</Box>
						<Text textStyle="h1" color="green" textAlign="center">
							Successfull
						</Text>
						<Box onClick={() => setImportSuccessModal(false)}>
							<PositiveButton text={"OK"} />
						</Box>
					</Flex>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default ImportSuccessModal;

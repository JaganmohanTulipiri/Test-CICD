import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setIsSucessPopUpOpen } from "../../../pages/AuthWorkFlow/authSlice";

import successImage from "../../../assets/images/success-green-check-mark-icon.svg";
import { useEffect } from "react";
const breakpoints = {
	sm: "320px",
	md: "768px",
	lg: "960px",
	xl: "1200px",
	"2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

function SuccessfullCard(props) {
	const { forgotsClicked, forgots } = props;
	const dispatch = useDispatch();

	const loginForgotName = useSelector((state) => state.profile.loginForgotName);

	const isSucessPopUpOpen = useSelector(
		(state) => state.profile.isSucessPopUpOpen,
	);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const closingPrevious = () => {
		forgotsClicked(loginForgotName, false);
	};

	useEffect(() => {
		if (forgots[loginForgotName] && isSucessPopUpOpen) {
			closingPrevious();
		}
	}, []);

	return (
		<>
			<Modal onClose={onClose} isOpen={isSucessPopUpOpen} isCentered>
				<ModalOverlay />
				<ModalContent w="25vw">
					<ModalBody className="rounded-lg flex flex-col justify-center items-center">
						<>
							{loginForgotName === "usernameForgot" && (
								<>
									<div className="text-center flex flex-col justify-center items-center">
										<h1 className="text-[#0081C8] mt-6 mb-4 w-56 md:text-xl lg:text-2xl font-bold xl:text-2xl xl:mb-3">
											Your Request has been sent
										</h1>
									</div>
									<div className="flex flex-col justify-center items-center w-[50%]">
										<img src={successImage} alt="success" className="mt-3" />
										<h3 className="text-[#0081C8] mt-4  md:text-xl lg:text-2xl font-bold xl:text-2xl xl:mb-3">
											Successful
										</h3>
									</div>

									<div className="mt-3 flex justify-around items-center  mb-8 md:w-[100%] xl:w-[30vw] 2xl:w-[20vw]">
										<button
											className="border-1 rounded-md text-[#F5F5F5] px-12 py-2 bg-[#0081C8]"
											onClick={() => {
												dispatch(setIsSucessPopUpOpen(false));
												onClose;
											}}
										>
											OK
										</button>
									</div>
								</>
							)}

							{loginForgotName === "passwordForgot" && (
								<>
									<div className="text-center flex flex-col justify-center items-center">
										<h1 className="text-[#0081C8] mt-6 mb-4 w-56 md:text-xl lg:text-2xl font-bold xl:text-2xl xl:mb-3">
											Your Request has been sent
										</h1>
									</div>
									<div className="flex flex-col justify-center items-center w-[50%]">
										<img src={successImage} alt="success" className="mt-3" />
										<h3 className="text-[#0081C8] mt-4  md:text-xl lg:text-2xl font-bold xl:text-2xl xl:mb-3">
											Successful
										</h3>
									</div>

									<div className="mt-3 flex justify-around items-center  mb-8 md:w-[100%] xl:w-[30vw] 2xl:w-[20vw]">
										<button
											className="border-1 rounded-md text-[#F5F5F5] px-12 py-2 bg-[#0081C8]"
											onClick={() => {
												dispatch(setIsSucessPopUpOpen(false));
												onClose;
											}}
										>
											OK
										</button>
									</div>
								</>
							)}

							{loginForgotName === "districtCodeForgot" && (
								<>
									<div className="text-center flex flex-col justify-center items-center">
										<h1 className="text-[#0081C8] mt-6 mb-4 w-80 md:text-xl lg:text-xl font-bold xl:text-xl xl:mb-3">
											Your School District Code is
											<br />
											<span className="text-[#19A617]">fEQn</span>
										</h1>
									</div>
									<div className="mt-3 flex justify-around items-center  mb-8 md:w-[100%] xl:w-[30vw] 2xl:w-[20vw]">
										<button
											className="border-1 rounded-md text-[#F5F5F5] px-12 py-2 bg-[#0081C8]"
											onClick={() => {
												dispatch(setIsSucessPopUpOpen(false));
												onClose;
											}}
										>
											OK
										</button>
									</div>
								</>
							)}
						</>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default SuccessfullCard;

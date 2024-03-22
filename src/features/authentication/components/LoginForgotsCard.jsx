import React, { useState } from "react";
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

import { FiChevronDown } from "react-icons/fi";
import { RiArrowUpSLine } from "react-icons/ri";
import { useDisclosure } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setIsSucessPopUpOpen } from "../../../pages/AuthWorkFlow/authSlice";
const breakpoints = {
	sm: "320px",
	md: "768px",
	lg: "960px",
	xl: "1200px",
	"2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

const LoginForgotsCard = (props) => {
	const { forgots, forgotsClicked } = props;

	const dispatch = useDispatch();

	const loginForgotName = useSelector((state) => state.profile.loginForgotName);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const [data, setData] = useState({
		email: "",
		username: "",
		districtCode: "",
		zipcode: "",
		school: "",
	});

	const [isDropdownOpened, setIsDropdownOpened] = useState(false);

	const [errors, setErrors] = useState({});

	const setField = (key, value) => {
		setData({
			...data,
			[key]: value,
		});

		setErrors({
			...errors,
			[key]: null,
		});
	};

	const handleSubmit = (event) => {
		setField([event.target.name], event.target.value);
	};

	const dropdownClicked = (event) => {
		event.stopPropagation();
		setIsDropdownOpened(!isDropdownOpened);
	};

	const dropdownMenuOptionSelected = (event) => {
		console.log(event.target.textContent, "iam event");

		event.stopPropagation();

		setField("school", event.target.textContent);

		setIsDropdownOpened(!isDropdownOpened);
	};

	const validate = () => {
		const { zipcode, school, email, username, districtCode } = data;

		let errors = {};

		if (loginForgotName === "districtCodeForgot") {
			if (!zipcode || zipcode.length === 0) {
				errors.zipcode = "*Required";
			}

			if (!school || school.length === 0) {
				errors.school = "*Required";
			}
		}

		if (loginForgotName === "usernameForgot") {
			if (!email || email.length === 0) {
				errors.email = "*Required";
			}
		}

		if (loginForgotName === "passwordForgot") {
			if (!username || username.length === 0) {
				errors.username = "*Required";
			}

			if (!districtCode || districtCode.length === 0) {
				errors.districtCode = "*Required";
			}
		}

		return errors;
	};

	const formSubmitted = (event) => {
		event.preventDefault();

		const errors = validate();

		if (Object.keys(errors).length > 0) {
			console.log("error form not submitted");

			setErrors(errors);
		} else {
			console.log("form submitted successfull");
			onClose;
			dispatch(setIsSucessPopUpOpen(true));
		}
	};

	console.log(errors, "iam errors");
	console.log(data, "iam data obj");

	return (
		<>
			<Modal onClose={onClose} isOpen={forgots} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						<>
							<div className="text-center flex flex-col justify-center items-center">
								{loginForgotName === "usernameForgot" && (
									<>
										<h1 className="text-[#0081C8] mt-6 mb-4 md:text-xl lg:text-xl font-bold xl:text-xl xl:mb-3">
											Forgot Username
										</h1>
										<form
											onSubmit={formSubmitted}
											className="flex flex-col justify-center items-center"
										>
											<input
												type="text"
												placeholder="Enter Email"
												name="email"
												value={data.email}
												onChange={handleSubmit}
												className={`${
													errors?.email === "*Required" ? "border-red" : ""
												} block w-80 px-4 py-3 mt-2 bg-[white] border border-black-4 rounded-md focus:border-black-4 focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                        `}
											/>

											{errors && errors.email === "*Required" && (
												<p className="text-red block w-80 text-start pl-2">
													{errors.email}
												</p>
											)}

											<div className="mt-6 flex justify-around items-center mb-8 md:w-[100%] xl:w-[30vw] 2xl:w-[20vw]">
												<button
													className="border-1 rounded-md  text-[#282828] px-12 py-2 bg-[#F5F5F5] "
													type="button"
													onClick={() => {
														dispatch(setIsSucessPopUpOpen(false));
														forgotsClicked(loginForgotName, false);
														onClose;
													}}
												>
													Cancel
												</button>
												<button
													type="submit"
													className="border-1 rounded-md text-[#F5F5F5] px-12 py-2  bg-[#0081C8]"
												>
													Send
												</button>
											</div>
										</form>
									</>
								)}

								{loginForgotName === "passwordForgot" && (
									<>
										<h1 className="text-[#0081C8] mt-6 mb-4 md:text-xl lg:text-xl font-bold xl:text-xl xl:mb-3">
											Forgot Password?
										</h1>
										<form
											className="flex flex-col justify-center items-center"
											onSubmit={formSubmitted}
										>
											<input
												type="text"
												onChange={handleSubmit}
												placeholder="Enter Username"
												name="username"
												value={data.username}
												className={`${
													errors?.username === "*Required" ? "border-red" : ""
												} block w-80 px-4 py-3 mt-2 bg-[white] border border-black-4 rounded-md focus:border-black-4 focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40`}
											/>
											{errors && errors.username === "*Required" && (
												<p className="text-red block w-80 text-start pl-2">
													{errors.username}
												</p>
											)}
											<input
												type="text"
												onChange={handleSubmit}
												placeholder="Enter District Code"
												name="districtCode"
												value={data.districtCode}
												className={`${
													errors?.username === "*Required" ? "border-red" : ""
												} block w-80 px-4 py-3 mt-2 bg-[white] border border-black-4 rounded-md focus:border-black-4 focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40`}
											/>
											{errors && errors.districtCode === "*Required" && (
												<p className="text-red block w-80 text-start pl-2">
													{errors.districtCode}
												</p>
											)}

											<div className="mt-6 flex justify-around items-center mb-8 md:w-[100%] xl:w-[30vw] 2xl:w-[20vw]">
												<button
													className="border-1 rounded-md  text-[#282828] px-10 py-2 bg-[#F5F5F5] "
													type="button"
													onClick={() => {
														dispatch(setIsSucessPopUpOpen(false));
														forgotsClicked(loginForgotName, false);
														onClose;
													}}
												>
													Enter Again
												</button>
												<button
													className="border-1 rounded-md text-[#F5F5F5] px-10 py-2  bg-[#0081C8]"
													type="submit"
												>
													Reset
												</button>
											</div>
										</form>
									</>
								)}

								{loginForgotName === "districtCodeForgot" && (
									<>
										<h1 className="text-[#0081C8] mt-6 mb-4 md:text-xl lg:text-xl font-bold xl:text-xl xl:mb-3">
											Forgot District Code?
										</h1>

										<form
											onSubmit={formSubmitted}
											className="flex flex-col justify-center items-center"
										>
											<input
												type="text"
												name="zipcode"
												value={data.zipcode}
												onChange={handleSubmit}
												placeholder="Enter Zipcode"
												className={`${
													errors?.zipcode === "*Required" ? "border-red" : ""
												} block w-80 px-4 py-3 mt-2 bg-[white] border border-black-4 rounded-md focus:border-black-4 focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40 `}
											/>
											{errors && errors.zipcode === "*Required" && (
												<p className="text-red block w-80 text-start pl-2">
													{errors.zipcode}
												</p>
											)}
											{/* <select
                        name="districtcodes"
                        id="districtcodes"
                        className="block w-80 px-4 py-3 mt-2 bg-[white]
             border border-black-4 rounded-md focus:border-black-4 focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                      >
                        <option value="Select">District/School</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select> */}
											{/* 
                      <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>


            </div> */}
											<div className="relative">
												<div className="mt-2">
													<button
														disabled={data.zipcode.length === 0}
														className={`${
															errors?.school === "*Required" ? "border-red" : ""
														} w-80 flex justify-between items-center px-4 py-3 mt-2 bg-[white] border border-black-4 rounded-md focus:border-black-4 focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40
                              `}
														value={data.school}
														type="button"
														onClick={dropdownClicked}
													>
														{data.school.length === 0
															? "District/School"
															: data.school}
														<span className="w-6">
															{isDropdownOpened ? (
																<RiArrowUpSLine />
															) : (
																<FiChevronDown />
															)}
														</span>
													</button>
												</div>
												{errors && errors.school === "*Required" && (
													<p className="text-red block w-80 text-start pl-2">
														{errors.school}
													</p>
												)}
											</div>
											{isDropdownOpened ? (
												<>
													<div
														className="absolute h-[25vh] scroll-smooth overflow-y-scroll example origin-center top-48 w-80 rounded-md bg-[white]
                     border border-black-4"
													>
														<ul
															className="flex flex-col"
															type="button"
															onClick={dropdownMenuOptionSelected}
														>
															<li className="text-[#808492] py-2 rounded-md bg-[#F5F5F5] hover:bg-[#0081C8] hover:text-[#F5F5F5] m-2 cursor-pointer">
																Hello
															</li>
															<li className="text-[#808492] py-2 rounded-md bg-[#F5F5F5] hover:bg-[#0081C8] hover:text-[#F5F5F5] m-2 cursor-pointer">
																Hiii
															</li>
															<li className="text-[#808492] py-2 rounded-md bg-[#F5F5F5] hover:bg-[#0081C8] hover:text-[#F5F5F5] m-2 cursor-pointer">
																How r u
															</li>
															<li className="text-[#808492] py-2 rounded-md bg-[#F5F5F5] hover:bg-[#0081C8] hover:text-[#F5F5F5] m-2 cursor-pointer">
																Hello
															</li>
															<li className="text-[#808492] py-2 rounded-md bg-[#F5F5F5] hover:bg-[#0081C8] hover:text-[#F5F5F5] m-2 cursor-pointer">
																Hiii
															</li>
															<li className="text-[#808492] py-2 rounded-md bg-[#F5F5F5] hover:bg-[#0081C8] hover:text-[#F5F5F5] m-2 cursor-pointer">
																How r u
															</li>
															<li className="text-[#808492] py-2 rounded-md bg-[#F5F5F5] hover:bg-[#0081C8] hover:text-[#F5F5F5] m-2 cursor-pointer">
																Hello
															</li>
															<li className="text-[#808492] py-2 rounded-md bg-[#F5F5F5] hover:bg-[#0081C8] hover:text-[#F5F5F5] m-2 cursor-pointer">
																Hiii
															</li>
															<li className="text-[#808492] py-2 rounded-md bg-[#F5F5F5] hover:bg-[#0081C8] hover:text-[#F5F5F5] m-2 cursor-pointer">
																How r u
															</li>
														</ul>
													</div>
												</>
											) : null}

											<div className="mt-6 flex justify-around items-center mb-8 md:w-[100%] xl:w-[30vw] 2xl:w-[20vw]">
												<button
													className="border-1 rounded-md  text-[#282828] px-12 py-2 bg-[#F5F5F5] "
													onClick={(event) => {
														event.stopPropagation();
														forgotsClicked(loginForgotName, false);
														onClose;
													}}
												>
													Cancel
												</button>
												<button
													className="border-1 rounded-md text-[#F5F5F5] px-12 py-2  bg-[#0081C8]"
													type="submit"
												>
													Show
												</button>
											</div>
										</form>
									</>
								)}
							</div>
						</>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginForgotsCard;

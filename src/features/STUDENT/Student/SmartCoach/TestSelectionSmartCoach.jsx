import { Input, InputGroup, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";


const TestSelectionSmartCoach = (props) => {
	const {
		setIsSelectDropDownClicked,
		isSelectDropDownClicked,
		isDropdownOpened,
		setIsDropdownOpened,
	} = props;


	const dispatch = useDispatch()

	const [searchValue, setSearchValue] = useState("");

	const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);

	const [selectDropdownValue, setSelectDropdownValue] = useState(null);



	const testSelectionResponse = useSelector(
		(state) => state?.profile?.testSelectionResponse?.response,
	);

	console.log(testSelectionResponse, "testSelectionResponsetestSelectionResponse")

	const handleChange = (event) => {
		event.stopPropagation();
		setSearchValue(event.target.value);
	};

	const filteredOptions = testSelectionResponse?.length > 0 && testSelectionResponse?.filter((option) =>
			option?.title?.toLowerCase().includes(searchValue.toLowerCase()),
		);



	return (
		<>
			<div className="flex justify-between items-center  mt-5 md:px-5 lg:px-10">
				<div
					className="flex border border-[#C9C8C8] relative rounded-lg focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none"
					onClick={() => {
						setIsSelectDropDownClicked(!isSelectDropDownClicked);
					}}
				>
					<div className="flex items-center">
						<input
							type="text"
							value={selectDropdownValue}
							className="px-3 py-3 border-0 border-[#C9C8C8] rounded-lg focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none"
						/>
						{isSelectDropDownClicked ? (
							<MdKeyboardArrowUp size={25} />
						) : (
							<MdKeyboardArrowDown size={25} />
						)}
					</div>

					{isSelectDropDownClicked ? (
						<>
							<div className="border border-white bg-white rounded-sm absolute top-14 z-30 w-full shadow-lg  ">
								{filteredOptions &&
									filteredOptions?.map((each) => (
										<p
											className="bg-gray-1 p-2 m-2 border border-gray-1 rounded-md hover:bg-primary hover:text-white text-[1rem] "
											onClick={(event) => {
												setSelectDropdownValue(event.target.textContent);
												// setIsDropdownOpened(false);
											}}
										>
											{each?.title?.charAt(0)?.toUpperCase() +
												each?.title?.slice(1)}
										</p>
									))}
							</div>
						</>
					) : null}
				</div>

				<div className="relative">
					<>
						<Stack
							spacing={4}
							className=""
							width={["30vw", "40vw", "40vw", "40vw"]}
						>
							<InputGroup>
								{isDropdownOpened ? (
									<Input
										type="type"
										placeholder="Search"
										className=" border border-[#C9C8C8] rounded-lg focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none"
										onChange={handleChange}
										value={searchValue}
									/>
								) : (
									<Input
										type="type"
										placeholder="Search"
										className=" border border-[#C9C8C8] rounded-lg focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none"
										value={searchValue}
										onClick={() => {
											setIsSearchBarClicked(true);
										}}
									/>
								)}
							</InputGroup>
						</Stack>
					</>

					{isSearchBarClicked && (
						<div className=" absolute top-11 z-30 w-full shadow-lg border border-[#C9C8C8] rounded-lg focus:border-[#C9C8C8] active:border-[#C9C8C8] outline-none">
							{filteredOptions &&
								filteredOptions?.map((each) => (
									<p
										className="bg-gray-1 p-2 m-2 border border-[#C9C8C8] rounded-md hover:bg-primary hover:text-white text-[1rem] "
										onClick={(event) => {
											setIsSearchBarClicked(false);
											setSearchValue(event.target.textContent);
										}}
									>
										{each?.title?.charAt(0)?.toUpperCase() +
											each?.title?.slice(1)}
									</p>
								))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default TestSelectionSmartCoach

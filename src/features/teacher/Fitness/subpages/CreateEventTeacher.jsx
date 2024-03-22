import React, { useState } from "react";

import calender from "../../../../assets/customIcons/Icon awesome-calendar-alt@2x.png";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Select,
	Heading,
	Stack,
	StackDivider,
	Box,
	Input,
	Text,
	Divider,
} from "@chakra-ui/react";
import { Button } from "antd";
import AdminPopUp from "../../../../components/GlobalComponents/Popups/AdminPopUp";
import WarningPop from "../../../../components/GlobalComponents/Popups/WarningPop";
import ClipBoard from "../../../../components/GlobalComponents/Popups/ClipBoardPop";

function ObjectComponent({ obj }) {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	const handlePop = () => {};

	const textStyle = {
		color: isClicked ? "white" : "black",
		backgroundColor: isClicked ? "#0081c8" : "white",
	};

	return (
		<div>
			<p
				className="bg-gray-1 w-[11vw] shadow-lg rounded-md  cursor-pointer text-center font-poppins-semibold text-[0.7rem] p-2"
				style={textStyle}
				onClick={handleClick}
			>
				{obj.name}
			</p>
		</div>
	);
}

const Aerobic = () => {
	const [objects, setObjects] = useState([
		{ id: "1", name: "PACER" },
		{ id: "2", name: " One-Mile Run" },
		{ id: "3", name: " One-Mile Walk" },
	]);

	const handleObjectClick = (index) => {
		const newObjects = [...objects];
		newObjects[index].value += 1;
		setObjects(newObjects);
	};

	const [objects1, setObjects1] = useState([
		{ id: "1", name: "BMI(Height)" },
		{ id: "2", name: " BMI(Weight)" },
		{ id: "3", name: " BIA" },
		{ id: "4", name: " Calf Skin Fold" },
		{ id: "5", name: " Abdominal Skin Fold" },
		{ id: "6", name: "  Triceps Skin Fold" },
	]);
	const [objects2, setObjects2] = useState([
		{ id: "1", name: "Curl-Up" },
		{ id: "2", name: " Trunk Lift" },
		{ id: "3", name: " Push-Up" },
		{ id: "4", name: " Modified Pull-Up" },
		{ id: "5", name: " Fixed Arm Hang" },
	]);
	const [objects3, setObjects3] = useState([
		{ id: "1", name: "Sit and Reach (Left)" },
		{ id: "2", name: "  Sit and Reach (Right)" },
		{ id: "3", name: " Shoulder Stretch (Left)" },
		{ id: "4", name: " Shoulder Stretch (Right)" },
	]);
	return (
		<>
			<p className="font-poppins-medium text-[0.7rem] m-4">Aerobic capacity </p>
			<div className="flex gap-4 ">
				{objects.map((obj, index) => {
					return (
						<div key={index}>
							<ObjectComponent
								key={index}
								obj={obj}
								onClick={() => handleObjectClick(index)}
							/>
						</div>
					);
				})}
			</div>
			<>
				<p className="font-poppins-medium text-[0.7rem] m-4">
					Body Composition{" "}
				</p>
				<div className="flex gap-3 ">
					{objects1.map((obj, index) => {
						return (
							<div key={index}>
								<ObjectComponent
									key={index}
									obj={obj}
									onClick={() => handleObjectClick(index)}
								/>
							</div>
						);
					})}
				</div>
			</>
			<>
				<p className="font-poppins-medium text-[0.7rem] m-4">
					Muscle Strength and Endurance
				</p>
				<div className="flex gap-4 ">
					{objects2.map((obj, index) => {
						return (
							<div key={index}>
								<ObjectComponent
									key={index}
									obj={obj}
									onClick={() => handleObjectClick(index)}
								/>
							</div>
						);
					})}
				</div>
			</>
			<>
				<p className="font-poppins-medium text-[0.7rem] m-4">Flexibility </p>
				<div className="flex gap-4 ">
					{objects3.map((obj, index) => {
						return (
							<div key={index}>
								<ObjectComponent
									key={index}
									obj={obj}
									onClick={() => handleObjectClick(index)}
								/>
							</div>
						);
					})}
				</div>
			</>
		</>
	);
};

const Recommended = () => {
	const data = [
		{
			id: "1",
			title: "Aerobic Capacity",
			content: "20M Pacer, One-Mile Run.",
		},
		{
			id: "2",
			title: "Body Composition",
			content:
				"BMI (Height), BMI (Weight), Calf Skin Fold, Abdominal Skin Fold, Tricep Skin Fold.",
		},
		{
			id: "3",
			title: " Muscle Strength and Endurance",
			content:
				"BMI (Height), BMI (Weight), Calf Skin Fold, Abdominal Skin Fold, Tricep Skin Fold.",
		},

		{
			id: "4",
			title: "Flexibility",
			content:
				"Sit and Reach(Left), Sit and Reach(Right), Shoulder Stretch(Left), Shoulder Stretch(Right).",
		},
	];

	const RecommendedCard = () => {
		return (
			<Card w="25rem" shadow="lg">
				<CardHeader>
					<Heading
						size="md"
						variant="filled"
						roundedTop="lg"
						bg="#f5f5f5"
						className="p-2"
						text="sm"
						fontSize="0.8rem"
					>
						Recommended1
					</Heading>
				</CardHeader>

				{data.map((item, index) => {
					return (
						<>
							<CardBody>
								<Stack divider={<StackDivider />} spacing="4">
									<Box>
										<Heading
											size="xs"
											textTransform="uppercase"
											fontSize="0.8rem"
											color="#0081c8"
										>
											{item.title}
										</Heading>
										<Text pt="2" fontSize="0.6rem">
											{item.content}
										</Text>
									</Box>
								</Stack>
								<Divider mt="6" />
							</CardBody>
						</>
					);
				})}
			</Card>
		);
	};
	return (
		<div className="flex gap-4 p-10">
			<RecommendedCard />
			<RecommendedCard />
			<RecommendedCard />
		</div>
	);
};

const ThirdTab = () => {
	return (
		<>
			<div>
				<p>Hi Welcome </p>
			</div>
		</>
	);
};

const CreateEventTeacher = () => {
	const [activeTab, setActiveTab] = useState("tab1");

	//  Functions to handle Tab Switching
	const handleTab1 = () => {
		// update the state to tab1
		setActiveTab("tab1");
	};
	const handleTab2 = () => {
		// update the state to tab2
		setActiveTab("tab2");
	};
	const handleTab3 = () => {
		// update the state to tab2
		setActiveTab("tab3");
	};
	return (
		<>
			<div className="p-6 overflow-y-auto  h-full">
				{/* <p className='text-left font-poppins-medium text-[1rem]'>
          CREATE EVENT{' '}
        </p> */}

				<>
					{/* <div className='mt-4'>
            <div className='grid grid-cols-4 gap-4'>
              <>
                <p className=' font-poppins-medium text-[1rem]'>Schools</p>
                <p className='font-poppins-medium text-[1rem]'>Classes</p>

                <p className='font-poppins-medium text-[1rem]'>Event Name</p>

                <p className='font-poppins-medium text-[1rem]'>Event Type</p>
              </>

              <>
                <Select
                  placeholder='Select Schools(s)'
                  size='sm'
                  fontFamily='font-poppins-medium'
                  border='0.5px solid #f5f5f5'
                  borderRadius='8'
                  variant='filled'
                >
                  <option value='option1'> AllSchools</option>
                  <option value='option2' variant='primary'>
                    GreenLight Elementary <p>Hi</p>
                  </option>
                  <option value='option3'> GreenLight High School</option>
                </Select>
              </>
              <>
                <Select
                  placeholder='Select option'
                  size='sm'
                  fontFamily='font-poppins-medium'
                  border='0.5px solid #f5f5f5'
                  borderRadius='8'
                  variant='filled'
                >
                  <option value='option1'>Coach Barb HS Period3</option>
                  <option value='option1'> AllSchools</option>
                  <option value='option2' variant='primary'>
                    GreenLight Elementary
                  </option>
                  <option value='option3'> GreenLight High School</option>
                </Select>
              </>
              <>
                <Input
                  variant='filled'
                  placeholder='Filled'
                  size='sm'
                  fontFamily='font-poppins-medium'
                  border='0.5px solid #f5f5f5'
                  borderRadius='8px'
                  marginTop='0.5'
                />
              </>
              <>
                <Select
                  placeholder='Select option'
                  size='sm'
                  fontFamily='font-poppins-medium'
                  border='0.5px solid #f5f5f5'
                  borderRadius='8'
                  variant='filled'
                >
                  <option value='option1'>Pre Test</option>
                  <option value='option2'>Post Test</option>
                  <option value='option3'>Other</option>
                </Select>
              </>
            </div>
          </div> */}
				</>

				{/* <div className='mt-4'>
          <div className='grid grid-cols-4 gap-10 mb-4 '>
            <>
              <p className=' font-poppins-medium text-[1rem]'>Start Date</p>
              <p className=' font-poppins-medium text-[1rem]'>End Date</p>
            </>
          </div>
          <div className='flex justify-start gap-16'>
            <div className='flex flex-column gap-4'>
              <Input
                variant='filled'
                placeholder='Filled'
                w='15vw'
                size='sm'
                fontFamily='font-poppins-medium'
                border='0.5px solid #f5f5f5'
                borderRadius='8px'
              />
              <img src={calender} className='w-4 h-5' />
            </div>
            <div className='flex gap-4'>
              <Input
                variant='filled'
                placeholder='Filled'
                w='15vw'
                size='sm'
                fontFamily='font-poppins-medium'
                border='1px solid #f5f5f5'
                borderRadius='8'
              />
              <img src={calender} className='w-4 h-5' />
            </div>
          </div>
        </div> */}
				<>
					<div className="mt-4">
						<ul className="nav flex gap-4 p-2 rounded-3xl  cursor-pointer ">
							<li
								className={
									activeTab === "tab1"
										? "active"
										: "hover:underline font-poppins-medium text-[0.7rem]"
								}
								onClick={handleTab1}
							>
								New
							</li>

							<li
								className={
									activeTab === "tab2"
										? "active"
										: "hover:underline font-poppins-medium text-[0.7rem]"
								}
								onClick={handleTab2}
							>
								Recommended for You
							</li>
							<li
								className={
									activeTab === "tab3"
										? "active"
										: "hover:underline font-poppins-medium text-[0.7rem]"
								}
								onClick={handleTab3}
							>
								Recents
							</li>
						</ul>

						<div className="">
							{activeTab === "tab1" ? null : <Recommended />}
							{activeTab === "tab2" ? null : <Aerobic />}
							{activeTab === "tab3" ? <Aerobic /> : null}
						</div>
					</div>
				</>
				<div className="flex justify-center mt-6 gap-4">
					<button className="bg-white text-black text-sm shadow-2xl px-4 gap-6 rounded-md">
						Cancel
					</button>
					{/* <button className='bg-green text-white shadow-2xl  text-sm px-4 gap-6 rounded-md'>
            Create
          </button> */}
					<div className="text-center ">
						<AdminPopUp />
						{/* <WarningPop /> */}
						{/* <ClipBoard /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateEventTeacher;

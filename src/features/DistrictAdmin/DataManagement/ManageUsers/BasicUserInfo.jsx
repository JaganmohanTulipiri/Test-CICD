import React, { useState } from "react";
import {
	Box,
	Checkbox,
	CheckboxGroup,
	Flex,
	Grid,
	GridItem,
	HStack,
	Input,
	Radio,
	RadioGroup,
	Select,
	Stack,
	Text,
} from "@chakra-ui/react";
import { addUserData } from "./ManageUsersData";
import { useSelector } from "react-redux";
import { usersData } from "../../../authentication/components/schoolAdmin/UsersConfig";
import NegativeButton from "../../../../components/NegativeButton";
import PositiveButton from "../../../../components/PositiveButton";

const BasicUserInfo = (props) => {
	const { activeTab } = props;
	const { userDetails } = addUserData;

	const manageUsersSelectedDropdownText = useSelector(
		(state) => state?.schoolAdmin?.manageUsersSelectedDropdownText,
	);
	const [status, setStatus] = useState("1");
	const [checked, setChecked] = useState("");

	const [inputs, setInputs] = useState({
		student_id: "",
		first_name: "",
		last_name: "",
		middle_initial: "",
		user_name: "",
		gender: "",
		grade: "",
		date_of_birth: "",
		created_by: "",
		schools: [],
		email: "",
		phone: "",
		password: "",
		login_status: null,
		teacher_id: "",
		district_administrator_id: "",
		parent_id: "",
		creater_role: "",
	});

	const handleChange = (event) => {
		// console.log(event.target.name, event.target.value, "jjjjjjjjj");
		console.log("event=========", event);

		setInputs({
			...inputs,
			[event.target.name]: event.target.value,
		});
	};
	//   const handleChangeSelect = (e) => {
	//     setInputs((prevState) => ({
	//       ...prevState,
	//       [e.target.name]: e.target.value,
	//     }));
	//   };

	const handleChangeRadio = (e) => {
		console.log(e, "e in handlechangeRadio-------------");
		setInputs({
			...inputs,
			login_status: e == 1 ? true : false,
		});
	};

	const handleSubmit = () => {
		console.log("inputs", inputs);
		console.log("login status===========>", status === "1" ? true : false);
		console.log("checked from checkbox===========>", checked);
	};
	return (
		<>
			<Grid templateColumns="repeat(4, 1fr)" gap="6">
				{usersData[manageUsersSelectedDropdownText].map((item, index) => {
					return (
						<GridItem colSpan="1">
							{item.inputType == "text" && (
								<Box>
									<Text mb="2">{item.lable}</Text>
									<Input
										type="text"
										border="0px"
										bg="bg.100"
										name={item?.name}
										value={inputs[item?.name]}
										onChange={handleChange}
									/>
								</Box>
							)}
							{item.inputType == "select" && (
								<Box>
									<Text mb="2">{item.lable}</Text>
									<Select
										bg="bg.100"
										borderColor="bg.100"
										onChange={handleChange}
										name={item?.name}
										placeholder="select"
									>
										{item.options.map((value, i) => {
											return (
												<option key={i} value={value}>
													{value}
												</option>
											);
										})}
									</Select>
								</Box>
							)}
							{item.inputType == "date" && (
								<Box>
									<Text mb="2">{item.lable}</Text>
									<Input
										type="date"
										border="0px"
										bg="bg.100"
										name={item?.name}
										value={inputs[item?.name]}
										onChange={handleChange}
									/>
								</Box>
							)}
              
							{/* {item.inputType == "checkbox" && (
                <Flex direction="column">
                  <HStack spacing="2">
                    <Checkbox />
                    <Text mb="2">{item.lable}</Text>
                  </HStack>
                </Flex>
              )} */}

							{/* {item.inputType == "radio" && (
                <Flex direction="column">
                  <Text mb="2">{item.groupLable}</Text>
                 
                 
                  <Flex direction="column">
                  <input type="radio" onChange={handleChange} name={item.name} value={false}/> 
                  <input type="radio" onchange={handleChange} name={item.name} value={true}/>
                  </Flex>
                  
                    
                 
                </Flex>
              )} */}
						</GridItem>
					);
				})}
			</Grid>
			<div className=" flex gap-20  items-center">
				{manageUsersSelectedDropdownText === "student" ? (
					<CheckboxGroup value={checked} onChange={setChecked}>
						<Stack spacing={[1, 5]} direction={["column"]}>
							<Checkbox value="1">Print Body Composition</Checkbox>
							<Checkbox value="2">Print Reports in Spanish</Checkbox>
							<Checkbox value="3">Permanently Exempt</Checkbox>
						</Stack>
					</CheckboxGroup>
				) : null}
				<GridItem>
					<div>
						<Text className="mb-4">Login Status:</Text>
						<RadioGroup onChange={handleChangeRadio}>
							<Stack>
								<Radio value="1">Active</Radio>
								<Radio value="0">In Active</Radio>
							</Stack>
						</RadioGroup>
					</div>
				</GridItem>
			</div>
			<Flex mt="8" justify="center" gap="8">
				<Box>
					<NegativeButton text={"Cancel"} />
				</Box>
				<Box>
					<PositiveButton onClick={handleSubmit} text={"Next"} />
				</Box>
			</Flex>
		</>
	);
};

export default BasicUserInfo;

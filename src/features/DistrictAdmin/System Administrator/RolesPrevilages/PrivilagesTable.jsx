import React, { useEffect, useState } from "react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Checkbox,
	useEditable,
} from "@chakra-ui/react";
import { rolesPrevilagesData } from "./rolesPrevilagesData";
import { useDispatch, useSelector } from "react-redux";
import { updateRolesAndPrivilages } from "../../../../DistrictAdminApis/districtAdminSlice";

const PrivilagesTable = (props) => {
	const role = props.role;

	const { tableColumns, rowsData, superAdminTableColumns } =
		rolesPrevilagesData;

	const dispatch = useDispatch();

	const token = useSelector((state) => state?.profile?.token);
	const privilage = useSelector(
		(state) => state?.districtAdmin?.rolesAndPrivilagesByRole,
	);

	const [privilageData, setPrivilageData] = useState([]);
	const userRole = useSelector((state) => state?.profile?.userRole);

	const handleChangeCheckBox = (item, e) => {
		console.log(item, e.target.name, "asldjf=======>");

		let modifiedPrevilageData = privilageData.slice();

		let itemIndex = modifiedPrevilageData.findIndex(
			(data) => data.uuid === item.uuid,
		);
		modifiedPrevilageData.splice(itemIndex, 1, {
			...item,
			[e.target.name]: e.target.checked,
		});

		setPrivilageData(modifiedPrevilageData);

		const arr = ["is_add", "is_delete", "view", "enter_data", "edit"].filter(
			(item) => item !== e.target.name,
		);

		let body = {
			role: item.role,
			privilegeName: item.privilege,
			// [e.target.name]: e.target.checked ? "1" : "0",
			[e.target.name]: e.target.checked,
		};

		// arr.forEach((previlege) => (body[previlege] = item[previlege] ? "1" : "0"));
		arr.forEach((previlege) => (body[previlege] = item[previlege]));

		dispatch(updateRolesAndPrivilages({ token, body }));
	};
	useEffect(() => {
		setPrivilageData(privilage);
	}, [privilage, dispatch]);

	console.log("user role=== in privilegesTable", userRole);
	console.log("role====", role);

	return (
		<TableContainer>
			<Table variant="striped" colorScheme="bg">
				{role === "admin" || role === "helpDesk" ? (
					<Thead>
						<Tr>
							{superAdminTableColumns.map((columnName, index) => {
								return (
									<Th
										textStyle="h6"
										color="primary"
										fontFamily={"body"}
										fontSize={{ base: "md", md: "sm", lg: "sm" }}
									>
										{columnName}
									</Th>
								);
							})}
						</Tr>
					</Thead>
				) : (
					<Thead>
						<Tr>
							{tableColumns.map((columnName, index) => {
								return (
									<Th
										fontFamily={"body"}
										fontSize={{ base: "sm", md: "sm", lg: "sm" }}
										color="primary"
									>
										{columnName}
									</Th>
								);
							})}
						</Tr>
					</Thead>
				)}

				<Tbody>
					{privilageData?.length &&
						privilageData.map((row, index) => {
							return (
								<Tr key={index}>
									<Td
										fontFamily={"body"}
										fontSize={{ base: "sm", md: "sm", lg: "sm" }}
									>
										{row.privilege}
									</Td>
									<Td
										fontFamily={"body"}
										fontSize={{ base: "sm", md: "sm", lg: "sm" }}
									>
										<Checkbox
											name="view"
											isChecked={row.view}
											isDisabled={!row.is_view_editable}
											onChange={(e) => {
												handleChangeCheckBox(row, e);
											}}
										/>
									</Td>
									<Td
										fontFamily={"body"}
										fontSize={{ base: "sm", md: "sm", lg: "sm" }}
									>
										<Checkbox
											name="edit"
											isChecked={row.edit}
											isDisabled={!row.is_edit_editable}
											onChange={(e) => {
												handleChangeCheckBox(row, e);
											}}
										/>
									</Td>
									<Td
										fontFamily={"body"}
										fontSize={{ base: "sm", md: "sm", lg: "sm" }}
									>
										<Checkbox
											name="is_add"
											isChecked={row.is_add}
											isDisabled={!row.is_add_editable}
											onChange={(e) => {
												handleChangeCheckBox(row, e);
											}}
										/>
									</Td>
									<Td
										fontFamily={"body"}
										fontSize={{ base: "sm", md: "sm", lg: "sm" }}
									>
										<Checkbox
											name="is_delete"
											isChecked={row.is_delete}
											isDisabled={!row.is_delete_editable}
											// colorScheme={row.is_delete_editable && "green"}
											onChange={(e) => {
												handleChangeCheckBox(row, e);
											}}
										/>
									</Td>
									<Td
										fontFamily={"body"}
										fontSize={{ base: "sm", md: "sm", lg: "sm" }}
									>
										<Checkbox
											name="enter_data"
											isChecked={row.enter_data}
											isDisabled={!row.is_enter_data_editable}
											onChange={(e) => {
												handleChangeCheckBox(row, e);
											}}
										/>
									</Td>
									{role === "admin" || role === "helpDesk" ? (
										<Td
											fontFamily={"body"}
											fontSize={{ base: "sm", md: "sm", lg: "sm" }}
										>
											<Checkbox
												name="is_active"
												isChecked={row.is_active}
												isDisabled={!row.is_active}
												onChange={(e) => {
													handleChangeCheckBox(row, e);
												}}
											/>
										</Td>
									) : (
										""
									)}
								</Tr>
							);
						})}
				</Tbody>

				{/* <Tbody>
          {rowsData.map((row, index) => {
            return (
              <Tr key={index}>
                <Td>{row.data[0]}</Td>
                {row.data.slice(1, 7).map((value, index) => {
                  return (
                    <Td key="index">
                      <Checkbox isChecked={value} onClick={() => !value} />
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody> */}
			</Table>
		</TableContainer>
	);
};

export default PrivilagesTable;

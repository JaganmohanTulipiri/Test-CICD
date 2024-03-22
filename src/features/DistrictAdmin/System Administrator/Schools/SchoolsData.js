export const districtData = {
	title: "GreenLight District",
	addAdministrator: "Add Administrator",
	details: [
		{
			lable: "District Name*:",
			inputType: "text",
			name: "district_name",
		},
		{
			lable: "District Identifier",
			inputType: "text",
			name: "district_identifier",
		},
		{
			lable: "SSO ID:",
			inputType: "number",
			name: "district_sso_id",

		},
		{
			lable: "Email:",
			inputType: "email",
			name: "email",
		},
		{
			lable: "Phone 1:",
			inputType: "text",
			name: "phone_1",
		},
		{
			lable: "Phone 2:",
			inputType: "text",
			name: "phone_2",
		},
		{
			lable: "Address1:",
			inputType: "text",
			name: "address_1",
		},
		{
			lable: "Address2:",
			inputType: "text",
			name: "address_2",

		},
		{
			lable: "City:",
			inputType: "text",
			name: "city",
		},
		{
			lable: "State:",
			inputType: "text",
			name: "state",
		},
		{
			lable: "Zip Code:",
			inputType: "number",
			name: "zipcode",
		},
		{
			lable: "School Year Start Date:",
			inputType: "date",
			name: "school_start_date",
		},
		{
			lable: "SIS Vendor",
			inputType: "select",
			options: ["1", "2", "3"],
			name: "sis_vendor"

		},
	],
	administrators: "Administrators",
	administratorsList: [
		"kumar,kumar",
		"kumar,kumar",
		"kumar,kumar",
		"kumar,kumar",
		"kumar,kumar",
	],
};

export const tableData = {
	tableName: "Participating Schools",
	tableColumns: ["School Name", "Local Identifier", "License(s)"],
	rows: [
		{
			rowData: [
				"Greenlight Elementary",
				"5239044",
				" Greenlight ISD (11/16/2021 - 08/31/2025), GLISDPartner (12/12/2022 - 12/12/2023)",
			],
		},
		{
			rowData: [
				"Greenlight Elementary",
				"5239044",
				" Greenlight ISD (11/16/2021 - 08/31/2025), GLISDPartner (12/12/2022 - 12/12/2023)",
			],
		},
		{
			rowData: [
				"Greenlight Elementary",
				"5239044",
				" Greenlight ISD (11/16/2021 - 08/31/2025), GLISDPartner (12/12/2022 - 12/12/2023)",
			],
		},
		{
			rowData: [
				"Greenlight Elementary",
				"5239044",
				" Greenlight ISD (11/16/2021 - 08/31/2025), GLISDPartner (12/12/2022 - 12/12/2023)",
			],
		},
	],
};
export const schoolData = {
	title: "GreenLight Elementary",
	addAdministrator: "Add Administrator",
	details: [
		{
			lable: "School Name*:",
			inputType: "text",
		},
		{
			lable: "Local Identifier",
			inputType: "text",
		},
		{
			lable: "SSO ID:",
			inputType: "number",
		},
		{
			lable: "Email:",
			inputType: "email",
		},
		{
			lable: "Phone 1:",
			inputType: "email",
		},
		{
			lable: "Phone 2:",
			inputType: "email",
		},
		{
			lable: "Address1:",
			inputType: "text",
		},
		{
			lable: "Address2:",
			inputType: "text",
		},
		{
			lable: "City:",
			inputType: "text",
		},
		{
			lable: "State:",
			inputType: "text",
		},
		{
			lable: "Zip Code:",
			inputType: "number",
		},
	],
};

export const teachersTableData = {
	tableName: "Teachers",
	searchPlaceholder: "Search by Alphabet, Names or User ID",
	addTeacher: "Add Teacher",
	tableColumns: ["Teacher Name", "ID", "Login Status", "Assigned to Class"],
	rows: [
		{
			rowData: ["Basu Raj", "4-637788864563451959", "Active", "Assigned"],
		},
		{
			rowData: ["Basu Raj", "4-637788864563451959", "Active", "Assigned"],
		},
		{
			rowData: ["Basu Raj", "4-637788864563451959", "Active", "Assigned"],
		},
		{
			rowData: ["Basu Raj", "4-637788864563451959", "Active", "Assigned"],
		},
		{
			rowData: ["Basu Raj", "4-637788864563451959", "Active", "Assigned"],
		},
		{
			rowData: ["Basu Raj", "4-637788864563451959", "Active", "Assigned"],
		},
	],
};
export const addAdministratorData = {
	title: "Add Administrator",
	buttonsList: ["BASIC USER INFORMATION", "MANAGE USER'S ASSIGNMENTS"],



   

    
    
 



	userDetails: [

		{
			lable: "District Administrator Id*",
			inputType: "text",
			name: "district_administrator_id",
		},


		{
			lable: "Username*",
			inputType: "text",
			name: "user_name",

			

		},
		{
			lable: "Password*",
			inputType: "text",
			name: "password"
		},
		{
			lable: "Re-enter Password*",
			inputType: "text",
			name: "reenterpassword"
		},
		{
			lable: "First Name*",
			inputType: "text",
			name: "first_name"
		},
		{
			lable: "Last Name*",
			inputType: "text",
			name: "last_name",
		},
		{
			lable: "Middle Initial",
			inputType: "text",
			name: "middle_initial"
		},

		{
			lable: "Email Address",
			inputType: "text",
			name: "email"
		},
		{
			lable: "Alternate Email Address1",
			inputType: "text",
			name: "email_1"
		},
		{
			lable: "Alternate Email Address2",
			inputType: "text",
			name: "email_2"
		},
		{
			lable: "Phone",
			inputType: "text",
			name: "phone"
		},

		{
			lable: "Role",
			inputType: "select",
			options: ["Teacher", "School Admin", "District Admin"],
			name: "selectedRole"
		},
		{
			lable: "SSO ID:",
			inputType: "number",
			name: "sso_id",
		},
		{
			groupLable: "Login Status",

			inputType: "radio",
			group: ["Active", "Inactive"],
			name: "login_status"
		},
	],
};

export const addTeacherModalData = {
	title: "Add teacher",
	userDetails: [
		{
			lable: "Username Last Name:",
			inputType: "text",
		},
		{
			lable: "This role",
			inputType: "text",
			placeholder: "Teacher",
		},
		{
			lable: "At School",
			inputType: "text",
			placeholder: "GreenLight Elementary",
		},
		{
			lable: "Add School",
			inputType: "select",
			options: ["1", "2", "3"],
		},
	],
};

export const addSchoolAdminModalData = {
	title: "Add School Administrator",
	addNewUser: "Add a new user",
	userDetails: [
		{
			lable: "Username Last Name:",
			inputType: "text",
		},
		{
			lable: "Add/Remove",
			inputType: "select",
			options: ["1", "2", "3"],
		},
		{
			lable: "At School",
			inputType: "text",
			placeholder: "GreenLight Elementary",
		},
	],
};

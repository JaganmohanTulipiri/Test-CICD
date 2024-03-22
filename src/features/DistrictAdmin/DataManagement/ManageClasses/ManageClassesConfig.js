export const manageClassesCardDetails = [
	{ key: "Class Name", value: "Coach Bard HS Period 3" },
	{ key: "Class 1D", value: "Hspae" },
	{ key: "Start Date", value: "08/02/2022" },
	{ key: "End Date", value: "08/02/2023" },
	{ key: "Students", value: "38" },
	{ key: "Status", value: "in Progress" },
];

export const manageClassesData = {
	title: "Manage Classes",
	details: [
		{ id: 1, name: "school_uuid", type: "select", lable: "School" },
		{
			id: 2,
			name: "teacher_uuid",
			type: "select",
			lable: "Teacher	",
			
		},
		{
			id: 3,
			name: "status",
			type: "select",
			lable: "Status",
			placeholder:"Select Status",
			options: ["Not Started", "Completed", "In Progress"],
		},
	],
};

export const classData = {
	title: "Coach Bard HS Period 3",
	addTeacherToClass: "Add Teacher to Class",
	classDetails: [
		{ id: 1, lable: "Class Name", name: "class_name", type: "text" },
		{ id: 2, lable: "Start Date", name: "start_date", type: "date" },
		{ id: 3, lable: "End Date", name: "end_date", type: "date" },
		{ id: 4, lable: "Select School", name: "schoolUuid", type: "select" },
		{
			id: 5,
			lable: "Local Identifier",
			name: "local_identifier",
			type: "number",
		},
		{
			id: 6,
			name: "status",
			type: "select",
			lable: "Status",
			placeholder:"Select Status",
			options: ["Not Started", "Completed", "In Progress"],
		}
	],
	teachers: {
		title: "Teachers",
		list: ["kumar", "surya", "Ram Charan"],
	},
};

export const classTableData = {
	tableName: "Class Roster",
	actions: [
		"Assign",
		"Unassign",
		"Active	Login",
		"Deactivate login",
		"Delete User",
		"Merge Users ",
	],
	addStudentoClass: "Add Student to Class",
	tableColumns: [
		"Student Name",

		"Student ID ",
		"Birth Date ",
		"Grade ",
		"Sex at Birth ",
		"Login Status",
	],
	rows: [
		{
			rowData: ["John", "AS00001", "01/15/2007 ", "10", "M", "Active"],
		},
		{
			rowData: ["John", "AS00001", "01/15/2007 ", "10", "M", "Active"],
		},
		{
			rowData: ["John", "AS00001", "01/15/2007 ", "10", "M", "Active"],
		},
		{
			rowData: ["John", "AS00001", "01/15/2007 ", "10", "M", "Active"],
		},
		{
			rowData: ["John", "AS00001", "01/15/2007 ", "10", "M", "Active"],
		},
		{
			rowData: ["John", "AS00001", "01/15/2007 ", "10", "M", "Active"],
		},
		{
			rowData: ["John", "AS00001", "01/15/2007 ", "10", "M", "Active"],
		},
	],
};

export const addClassModalData = {
	title: "Add New Class",

	classDetails: [
		{ id: 1, lable: "Class Name", name: "class_name", type: "text" },
		{ id: 2, lable: "Start Date", name: "start_date", type: "date" },
		{ id: 3, lable: "End Date", name: "end_date", type: "date" },
		{ id: 4, lable: "Select School", name: "schoolUuid", type: "select" },
		{
			id: 5,
			lable: "Local Identifier",
			name: "local_identifier",
			type: "number",
		},
	],
};

export const addStudentModalData = {
	title: "Add Student to Class",
	studentDetails: [
		{
			lable: "User Last Name",
			inputType: "input",
		},
		{
			lable: "This role",
			inputType: "text",
		},
		{
			lable: "At School",
			inputType: "text",
		},
		,
		{
			lable: "Add Class",
			inputType: "select",
			options: ["1", "2", "3", "4"],
		},
		,
	],
};

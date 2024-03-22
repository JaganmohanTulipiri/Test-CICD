import { Checkbox } from "@chakra-ui/react";
export const rolesPrevilagesData = {
	title: "Roles & Privileges",
	text: "Set privileges for what users can access or modify in the system, based on their role.",
	superAdminRolesList: [
		"STUDENT",
		// "PARENT",
		"TEACHER",
		"SCHOOL ADMINISTRATOR",
		"DISTRICT ADMINISTRATOR",
		"ADMIN", 
		"HELP DESK"
	],
	rolesList:[
		"STUDENT",
		"PARENT",
		"TEACHER",
		"SCHOOL ADMINISTRATOR",
		"DISTRICT ADMINISTRATOR",
		
	],
	tableColumns: [
		"Privilege",
		"View",
		"Edit",
		"Add",
		"Delete",
		"Enter data",
		// "Assigned to Class",
	],
	superAdminTableColumns: [
		"Privilege",
		"View",
		"Edit",
		"Add",
		"Delete",
		"Enter data",
		"Assigned to Class",
	],
	rowsData: [
		{
			data: ["ActivityGram Data Entry", true, false, true, false, true, true],
		},
		{
			data: [
				"ActivityGram Lite Test Event",
				true,
				false,
				true,
				false,
				true,
				true,
			],
		},
		{
			data: [
				"ActivityGram Student Report",
				true,
				false,
				true,
				false,
				true,
				true,
			],
		},
		{
			data: ["ActivityGramLite Survey", true, false, true, false, true, true],
		},
		{
			data: ["ActivityGramlLiteMenu", true, false, true, false, true, true],
		},
		{
			data: ["ActivityGramliteTiie", true, false, true, false, true, true],
		},
		{
			data: ["ActivityGramliteTiie", true, false, true, false, true, true],
		},
		{
			data: ["ActivityGramMenu", true, false, true, false, true, true],
		},
		{
			data: ["ActivityGramTile", true, false, true, false, true, true],
		},
		{
			data: ["Activitylog Challenge", true, false, true, false, true, true],
		},
	],
};

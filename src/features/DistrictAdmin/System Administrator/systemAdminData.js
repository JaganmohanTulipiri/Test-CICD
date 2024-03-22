import schoolsIcon from "../../../assets/customIcons/District and schools icon.svg";
import notificationsIcon from "../../../assets/customIcons/Notificationis.svg";
import rolesIcon from "../../../assets/customIcons/Roles & privileges.svg";
import manageMandatesIcon from "../../../assets/customIcons/Manage Mandates (2).svg";

export const systemAdminData = {
	title: "SYSTEM ADMINISTRATOR",
	subFields: [
		{
			icon: schoolsIcon,
			name: "District & Schools",
			stateAdminName: "District & Schools",
		},
		{
			icon: manageMandatesIcon,
			name: "Manage Mandates",
			stateAdminName: "Manage Mandates",
		},
		{
			icon: notificationsIcon,
			name: "Notifications",
			stateAdminName: "Notificaiton System",
		},
		{
			icon: rolesIcon,
			name: "Roles & Privileges",
			stateAdminName: "Roles & Privileges",
		},
	],
};

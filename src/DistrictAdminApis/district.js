import BASE_URL from "../APIS";

export const districtEndPoints = {
	emailSetting: () => {
		`${BASE_URL}/emailSetting/addEmailSettings`;
	},
	mandatesApi: () => {
		`${BASE_URL}/mandates/addMandates`;
	},

	getDistrictForDistrictAdmin: (UUID) =>
		`${BASE_URL}/districts/getDistrictForDistrictAdmin/${UUID}`,
	updateDistrictForDistrictAdmin: (UUID) =>
		`${BASE_URL}/districts/updateDistrict/${UUID}`,

	getMandates: () => `${BASE_URL}/mandates/getAllMandates`,
	getAllTestItems: () => `${BASE_URL}/mandates/getAllTests`,
	addMandate: () => `${BASE_URL}/mandates/addMandates`,
	updateMandate: (mandateId) =>
		`${BASE_URL}/mandates/updateMandates/${mandateId}`,

	getRolesAndPrivilegesByRole: (role, districtId) =>
		`${BASE_URL}/privileges?role=${role}&district_uuid=${districtId}`,
	updateRolesAndPrivilages: () => `${BASE_URL}/privileges/updatePermission`,
	districtStatistics: () => `${BASE_URL}/districts/getweeklylogins`,
	getAccessLogsCount: () => `${BASE_URL}/districts/getaccesslogscount`,

	recievedNotifications: () => `${BASE_URL}/announcement/getNotifications`,

	getStudentsListForReports: () =>
		`${BASE_URL}/users/getStudentsListForReports`,

	overviewReportSummaryByClass: () =>
		`${BASE_URL}/studentreports/overviewReportSummaryByClass`,
};

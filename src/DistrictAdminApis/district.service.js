import axios from "axios";
import { districtEndPoints as api } from "./district";

export const getEmails = async (data) => {
	const config = {
		method: "post",
		url: api.emailSetting(),
		headers: {
			Authorization: `Bearer ${data.token}`,
			"Content-Type": "application/json",
		},
		data: data?.body,
	};
	try {
		const response = await axios(config);

		console.log(response, "iam response-===========");
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const mandatesApiShow = async (data) => {
	const config = {
		method: "post",
		url: api.mandatesApi(),
		headers: {
			Authorization: `Bearer ${data.token}`,
			"Content-Type": "application/json",
		},
		data: data?.body,
	};
	try {
		const response = await axios(config);

		console.log(response, "iam response-===========");
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getDistrictForDistrictAdminApi = async (data) => {
	const config = {
		method: "get",
		url: api.getDistrictForDistrictAdmin(data.userId),
		headers: {
			Authorization: `Bearer ${data.token}`,
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await axios(config);

		return response;

		console.log(response, "iam response-===========");
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getMandateData = async (data) => {
	console.log(data, "from hgettt");
	const config = {
		method: "post",
		url: api.getMandates(),
		headers: {
			Authorization: `Bearer ${data.token}`,
		},
		data: data.body,
	};

	console.log(config, "ffrom serviceee");
	try {
		const response = await axios(config);

		console.log(response, "iam response-=========== for get mandatesss");
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getTestItems = async (token) => {
	const config = {
		method: "get",
		url: api.getAllTestItems(),
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	try {
		const response = await axios(config);
		console.log(response, "iam response-=========== for get mandatesss");
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const postMandate = async (data) => {
	console.log(data, "from sliceeeeeeeeeeeee");
	const config = {
		method: "post",
		url: api.addMandate(),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},
		data: data?.finalObject,
	};

	try {
		const response = await axios(config);
		console.log(response, "from service");
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const updateMandate = async (data) => {
	console.log(data, "for updatee mandate");
	const config = {
		method: "post",
		url: api.updateMandate(data.mandateId),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},
		data: data?.finalObject,
	};
	try {
		const response = await axios(config);
		console.log(response, "from slice update");
		return response;
	} catch (error) {
		throw error;
	}
};

export const rolesAndPrivilagesByRole = async (data) => {
	console.log(data, "from 156");
	const config = {
		method: "get",
		url: api.getRolesAndPrivilegesByRole(data.selectedRole, data.district_uuid),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},
	};
	console.log(config, "from 156");
	try {
		const response = await axios(config);
		console.log(response, "from slice role and privilages");
		return response;
	} catch (error) {
		return error;
	}
};

export const updateRolesAndPrivilages = async (data) => {
	const config = {
		method: "post",
		url: api.updateRolesAndPrivilages(),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},
		data: data?.body,
	};

	try {
		const response = await axios(config);
		console.log(response, "from slice role and privilages updated");
		return response;
	} catch (error) {
		return error;
	}
};

export const districtStatistics = async (token) => {
	console.log(token, "tokennnn");
	const config = {
		method: "get",
		url: api.districtStatistics(),
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
	};
	console.log(config, "from district statists");
	try {
		const response = await axios(config);
		console.log(response, "from slice diwstrict statistics");
		return response;
	} catch (error) {
		console.log(error, "error");
		throw error;
	}
};

export const accessLogCounts = async (token) => {
	const config = {
		method: "get",
		url: api.getAccessLogsCount(),
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios(config);
		console.log(response, "from slice access  log counts");
		return response;
	} catch (error) {
		throw error;
	}
};

export const updateDistrictForDistrictAdminApi = async (data) => {
	console.log(data, "data from update distrcit");

	const config = {
		method: "post",
		url: api.updateDistrictForDistrictAdmin(data?.UUID),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},
		data: data?.body,
	};
	try {
		const response = await axios(config);
		console.log(response, "from slice update");
		return response;
	} catch (error) {
		throw error;
	}
};

export const recievedNotificationsApi = async (data) => {
	console.log(data, "data from update distrcit");

	const config = {
		method: "get",
		url: api.recievedNotifications(),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},
	};
	try {
		const response = await axios(config);

		return response;
	} catch (error) {
		throw error;
	}
};

export const getStudentsListForReportsApi = async (data) => {
	console.log(data, "data from update distrcit");

	const config = {
		method: "post",
		url: api.getStudentsListForReports(),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},
		data: data?.finalObj,
	};
	try {
		const response = await axios(config);

		return response;
	} catch (error) {
		return error;
	}
};

export const overviewReportSummaryByClassApi = async (data) => {
	console.log(data, "data overviewReportSummaryByClassApi");

	const config = {
		method: "post",
		url: api.overviewReportSummaryByClass(),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},
		data: data?.finalObj,
	};
	try {
		const response = await axios(config);

		return response;
	} catch (error) {
		return error;
	}
};

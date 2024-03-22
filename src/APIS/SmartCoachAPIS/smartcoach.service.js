import axios from "axios";
import { smartEndPoints as api } from "../SmartCoachAPIS/smart";

export const smartCoachAPI = async (data) => {
	console.log(data, "from smart coach api========");

	const config = {
		method: "get",
		url: api.smartCoach(),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},
		data: data?.userDetails,
	};

	try {
		const response = await axios(config);
		return response;
	} catch (error) {
		console.log(error);
		return error;
	}
};

export const testSelectionAPI = async (token) => {
	const config = {
		method: "get",
		url: api.testSelection(),
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios(config);

		return response.data;
	} catch (error) {
		console.log(error);

		return error;
	}
};

export const getRecommendedSmartCoachAPI = async (data) => {
	console.log(data.userDetails, "data from get recommneded api call");

	const config = {
		method: "post",
		url: api.getRecommendedSmartCoach(),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},

		data: data?.userDetails,
	};

	try {
		const response = await axios(config);

		return response;
	} catch (error) {
		console.log(error);

		throw error;
	}
};

export const getRecentResourcesByTest = async (data) => {
	const config = {
		method: "post",
		url: api.getRecentResourcesByTest(),
		headers: {
			Authorization: `Bearer ${data?.token}`,
		},

		data: data?.body,
	};
	try {
		const response = await axios(config);
		console.log(response, "from serivce");
		return response;
	} catch (error) {
		throw error;
	}
};

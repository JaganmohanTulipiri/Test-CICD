import axios from "axios";

import { testResultsEndPoints as api } from "./testResults";


export const enterTestResults = async (data) => {

	console.log(data, "befor api====================================>>>>>>>>");

	const config = {
		method: "post",
		url: api.testResults,
		headers: {

			Authorization: `Bearer ${data.token}`,
		},
		data: data.body,
	};

	try {
		const response = await axios(config);

		console.log(response);
		return response;

	} catch (error) {
		console.log(error);
		return error;
	}		
};


export const updateStudentData = async (data) => {

	console.log(data, "befor api====================================>>>>>>>>");

	const config = {
		method: "post",
		url: api.updateStudentResult,
		headers: {

			Authorization: `Bearer ${data.token}`,
		},
		data: data.body,
	};

	try {
		const response = await axios(config);

		console.log(response);
		return response;

	} catch (error) {
		console.log(error);
		return error;
	}		

}

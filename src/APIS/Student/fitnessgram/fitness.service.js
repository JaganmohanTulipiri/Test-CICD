import axios from "axios";
import { fitnessGramEndPoints as api } from "../fitnessgram/fitness";

export const studentFitnessGram = async (data) => {
	console.log(data, "befor api====================================>>>>>>>>");

	const config = {
		method: "get",
		url: api.fitnessGram,
		headers: {
			Authorization: `Bearer ${data.token}`,
		},
		// data: data.body,
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



export const studentReportApi = async (data) => {



	

	const config = {
		method: "post",
		url: api.studentReport,
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

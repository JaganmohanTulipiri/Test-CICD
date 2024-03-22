import axios from "axios";
import { activityLogEndPoints as api } from "./activitylog";

export const activityLogGetEvents = async(data) => {

    console.log(data, "activity log api before call")


    const config = {
		method: "get",
		url: api.activityLog(data.userId),
		headers: {
			Authorization: `Bearer ${data.token}`,
		},
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


export const activityGramEvents = async (data) => {


	console.log(data, "befor api call activityGramEvents")


    const config = {
		method: "post",
		url: api.activityGram,
		headers: {
			Authorization: `Bearer ${data.token}`,
		},
		data: data.body
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

import axios from "axios";

import { activityEndPoints as api } from "./activit";


export const activityTestRegularData = async (data) => {


    const config = {

        method: "get",
        url : api.activityGramTestRegular,

        headers: {

			Authorization: `Bearer ${data.token}`,
		},



    }

    try {
		const response = await axios(config);

		console.log(response);
		return response;

	} catch (error) {
		console.log(error);
		return error;
	}	


}
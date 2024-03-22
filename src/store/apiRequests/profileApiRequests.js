import axios from "axios";
// import respective api from APIS


import endPaths from '../../APIS/index'

export const fetchProfile = (data) => {
	config = {};
	axios.config;
};



export const loginAPI = async (data) => {

	let config = {

		method: "post",
		url : endPaths.auth.login,
		headers: {

			"Content-Type" : 'application/json',
		},
		data,
	}

	axios.config

}




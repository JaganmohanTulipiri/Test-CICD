import axios from "axios";
import { authEndpoints as api } from "./auth";
import { data } from "autoprefixer";

export const login = async (data) => {
  try {
    const response = await axios.post(api.login, data, {
      "Content-Type": "application/json",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (data) => {
  const config = {
    method: "get",
    url: api.loginUserById(data.id),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
    // return error;
  }
};

export const forgotUserName = async (data) => {
  console.log(data, "from forgot userrname");
  const config = {
    method: "post",
    url: api.forgotUserName(),
    data,
  };

  console.log(config);
  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const forgotPassword = async (data) => {
  console.log(data, "from forgot userrname");
  const config = {
    method: "post",
    url: api.forgotPassword(),
    data,
  };

  console.log(config);
  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const logOut = async (token) => {
  const config = {
    method: "post",
    url: api.logOut(),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    return error;
  }
};

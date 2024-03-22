import { SSOConfigEndPoints as api } from "../SSOConfiguration/ssoconfig";
import axios from "axios";

export const AddSSOConfig = async (data) => {
  const config = {
    method: "post",
    url: api.addSSOConfig,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  try {

    console.log("config data", config);
    const result = await axios(config);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const GetAllSSOConfigData = async (data) => {
  const config = {
    method: "get",
    url: api.getSSOConfigData,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const result = await axios(config);
    console.log("Get All SSO COnfig Results", result);
    return result;
  } catch (error) {
    console.log("Get All SSO Config Error", error);
    return error;
  }
};

export const GetSSOConfigByDistrict = async (data) => {
  console.log("Data in GetSSOConfigByDistrict", data.district);
  const config = {
    method: "get",
    url: api.SSOConfigByDistrict(data.district),
    headers : {
      Authorization : `Bearer ${data.token}`
    }
  };

  try {
    const result = await axios(config);
    console.log("ighrgievw", result.data.response);
    return result.data.response;
  } catch (error) {
    console.log("Get SSOCOnfig By District", error);
    return error;
  }
};

export const GetSSOConfigByOAuth2 = async (data) => {
  console.log("In GetSSOConfigByOAuth2", data.OAuth2);
  const config = {
    method: "get",
    url: api.SSOConfigByAuthorization(data.OAuth2),
  };

  try {
    const result = await axios(config);
    console.log("GetSSOConfigByOAuth2=====", result.data);
    return result.data.response;
  } catch (error) {
    console.log("Get SSOConfigByOAuth2 Error", error);
    return error;
  }
};

export const DeleteSSOConfig = async (data) => {
  console.log("Delete SSO Configuration", data);
  const config = {
    method: "delete",
    url: api.deleteSSOConfig(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const result = await axios(config);
    console.log("Delete SSO Config Response:", result);
    return result;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data.message;
  }
};

export const updateSSOConfig = async (data) => {
  console.log("Update SSO Config (Data from API Call)=======", data);
  const config = {
    method: "post",
    url: api.updateSSOConfigByID(data.id),
    headers : {
      Authorization : `Bearer ${data.token}`
    },
    data: data.body,
  };

  try {
    const result = await axios(config);
    console.log("API Response after Axios Call", result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

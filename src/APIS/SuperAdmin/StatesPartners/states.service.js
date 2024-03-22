import { data } from "autoprefixer";
import axios from "axios";
import { StatesPartnersEndPoints as api } from "../StatesPartners/states";

export const AddStates = async (data) => {
  const config = {
    method: "post",
    url: api.addState,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    console.log("AddState==========Config", config);
    const result = await axios(config);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
  }
};

export const UpdateState = async (data) => {
  const config = {
    method: "post",
    url: api.updateState(data.body.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  try {
    const result = await axios(config);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

export const GetAllStates = async (data) => {
  const config = {
    method: "get",
    url: api.getStates,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const result = await axios(config);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const DeleteState = async(data) => {
  const config = {
    method : "delete",
    url : api.deleteState(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  }

  try {
    const result = await axios(config);
    console.log(result);
    return result;
  }
  catch(error) {
    console.log(error);
    return error;
  }
}

export const FilterStatesByName = async(data) => {
  const config = {
    method: "get",
    url: api.getStateByFilterName(data.name),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const result = await axios(config);
    console.log("FilterStatesByName ===== API CALL", result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}


export const FilterStatesByType = async(data) => {
  const config = {
    method:"get",
    url : api.getStateByFilterType(data.type),
    headers : {
      Authorization : `Bearer ${data.token}`
    }
  }

  try {
    const result = await axios(config);
    console.log("FilterStateByType ===== API CALL", result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const FilterStatesByLicense = async(data) => {
  const config = {
    method:"get",
    url : api.getStateByFilterType(data.license_status),
    headers : {
      Authorization : `Bearer ${data.token}`
    }
  }

  try {
    const result = await axios(config);
    console.log("FilterStateByLicense ===== API CALL", result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}
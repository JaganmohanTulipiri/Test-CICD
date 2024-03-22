import axios from "axios";
import { LiencesEndPoints as api } from "./licenses";

export const getFundersListAPI = async (data) => {
  const config = {
    method: "get",
    url: api.fundersList,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error.response.data.code;
  }
};

export const createLicenseAPI = async (data) => {
  const config = {
    method: "post",
    url: api.createLicense,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    console.log("config createLicenseAPI", config);
    const response = await axios(config);
    console.log("response of createdlicense", response);
    return response;
  } catch (error) {
    return error.response.data.code;
  }
};

export const getLicensesList = async (data) => {
  const config = {
    method: "post",
    url: api.getLicenses,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data : data.body
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error.response.data.code;
  }
};

export const getLicenseDataById = async (data) => {
  const config = {
    method: "get",
    url: api.getLicenseById(data.id),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateLicenseById = async (data) => {
  const config = {
    method: "post",
    url: api.updateLicenseById,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error.response.data.code;
  }
};

export const getLicensedSchoolData = async (data) => {
  const config = {
    method: "get",
    url: api.getLicensedSchools(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteLicenseById = async (data) => {
  const config = {
    method: "delete",
    url: api.deleteLicense(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteSchoolLicense = async (data) => {
  const config = {
    method: "delete",
    url: api.deleteSchoolLicense(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
};


export const getAllSchoolsToAddLicenseAPI = async (data) => {
  const config = {
    method: "get",
    url: api.schoolsToAddLicense(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
};


export const addLicenseToSchoolAPI = async (data) => {
  const config = {
    method: "post",
    url: api.addLicenseToSchool,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error.response.data.code;
  }
};

export const getLicenseHistoryByIdAPI = async(data) => {
  const config = {
    method:"get",
    url : api.getLicenseHistoryById(data.id),
    headers : {
      Authorization : `Bearer ${data.token}`
    }
  }
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error.response.data.code;
  }
}


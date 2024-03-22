import axios from "axios";
import { districtsEndPoints as api } from "../Districts/district";

export const addNewDistrict = async (data) => {
  const config = {
    method: "post",
    url: api.AddDistricts,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    //console.log("In addNewDistrict function", error.response.data.message);
    return error.response.data.code;
  }
};

export const GetAllDistricts = async (data) => {
  const config = {
    method: "get",
    url: api.GetDistricts,
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

export const UpdateDistrictData = async (data) => {
  console.log("Update District Function - UUID", data.body.uuid);
  const config = {
    method: "post",
    url: api.UpdateDistricts(data.body.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const response = await axios(config);
    console.log(
      "Response from Update District Data Function (district.service.js)",
      response
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const DeleteDistrictData = async (data) => {
  console.log("Delete District Function - UUID", data.uuid);
  const config = {
    method: "delete",
    url: api.DeleteDistrict(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const response = await axios(config);
    console.log(
      "Response from Delete District Data Function (district.service.js)",
      response
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const AddSchool = async (data) => {
  console.log("Add School API function call", data);
  const config = {
    method: "post",
    url: api.addSchool,
    data: data.body,
  };

  try {
    const result = await axios(config);
    console.log("Add School API Response", result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const AddAdminUser = async (data) => {
  console.log("Add Admin API Function call", data);
  const config = {
    method: "post",
    url: api.createAdminUser,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  try {

    const result = await axios(config);
    console.log("Add Admin User API Response", result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const EditTeacherUser = async (data) => {
  console.log("Edit Teacher User Information", data);
  const config = {
    method: "post",
    url: api.editTeacherInfo(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  try {
    const result = await axios(config);
    console.log("Edit Teacher User API Response", result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getSchoolsApi = async (data) => {
  console.log("data from getschools service", data);

  const config = {
    method: "post",
    url: api.getSchools,

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.body,
  };
  try {
    console.log("config=========================", config);
    const response = await axios(config);
    console.log("respose from getschools service---->", response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getTeachersAPI = async (data) => {
  console.log("getTeachers API called");
  console.log("data from getTeachers service", data);

  const config = {
    method: "get",
    url: api.getTeachers(data.schoolId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    console.log("config=========================", config);
    const response = await axios(config);
    console.log("response from getTeachers service---->", response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getAdminByDistrictAPI = async (data) => {
  console.log("==============getAdminByDistrictAPI========", data);
  const config = {
    method: "get",
    url: api.getDistrictAdmin(data.districtId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios(config);
    console.log(
      "getAdminByDistrictAPI response===========",
      response?.data?.response
    );
    return response;
  } catch (error) {
    console.log("getAdminByDistrictId error response", error);
  }
};

export const getSchoolsByDistrictIDAPI = async (data) => {
  console.log(
    "=================data==============getSchoolsByDistrictIDAPI",
    data.districtId.districtId
  );
  const config = {
    method: "get",
    url: api.getSchoolsByDistrictId(data.districtId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    console.log("config===============", config);
    const response = await axios(config);
    console.log(
      "getSchoolsByDistrictId response===========",
      response?.data?.response
    );
    return response?.data?.response;
  } catch (error) {
    console.log("getSchoolsByDistrictId error response", error);
    return error;
  }
};

export const getDistrictByFilterAPI = async (data) => {
  console.log("data in getDistrictByFilterAPI============", data.body);

  const { district_sso_id, district_name, zipcode, district_identifier } =
    data.body;
  const config = {
    method: "get",
    url: api.getDistrictByFilter(
      district_sso_id,
      district_name,
      zipcode,
      district_identifier
    ),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    console.log("config===============", config);
    const response = await axios(config);
    console.log("getSchoolsByDistrictId response===========", response);
    return response;
  } catch (error) {
    console.log("getSchoolsByDistrictId error response", error);
  }
};

export const updateSchoolById = async (data) => {
  console.log("=========updateSchoolById==========", data);
  const config = {
    method: "post",
    url: api.updateSchool(data.body.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  try {
    console.log("config===============", config);
    const response = await axios(config);
    console.log("updateSchoolsByDistrictId response===========", response);
    return response;
  } catch (error) {
    console.log("updateSchoolsByDistrictId error response", error);
  }
};

export const AssignAdminToDistrictById = async (data) => {
  console.log("=========AssignAdminToDistrictById==========", data);
  const config = {
    method: "post",
    url: api.assignAdminToDistrict(data.districtId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  try {
    console.log("config===============", config);
    const response = await axios(config);
    console.log("=========AssignAdminToDistrictById==========", response);
    return response;
  } catch (error) {
    console.log("AssignAdminToDistrictById error response", error);
  }
};
export const updateAdminUsersById = async (data) => {
  console.log("=========UpdateAdminUsersById==========", data);
  const config = {
    method: "post",
    url: api.updateAdminDetails(data.id),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body.formData,
  }
  try {
    console.log("config===============", config);
    const response = await axios(config);
    console.log("=========UpdateAdminUsersById==========", response);
    return response;
  } catch (error) {
    console.log("UpdateAdminUsersById error response", error);
  }
};

export const deleteAdminUserById = async(data) => {

  console.log("==========data==========deleteAdminUserById", deleteAdminUserById);
  const config = {
    method : "delete",
    url : api.deleteAdminUser(data.districtId),
    headers : {
      Authorization : `Bearer ${data.token}`
    },
    data:data.body
  }

  try {
    console.log("config===============", config);
    const response = await axios(config);
    console.log("=========deleteAdminUserById==========", response);
    return response;
  } catch (error) {
    console.log("deleteAdminUserById error response", error);
  }
}

export const GetSchoolAdminsBySchoolId = async (data) => {
  console.log("==============GetSchoolAdminsBySchoolId========", data);
  const config = {
    method: "get",
    url: api.getSchoolAdminsBySchoolId(data.schoolId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios(config);
    console.log(
      "GetSchoolAdminsBySchoolId response===========",
      response?.data?.response?.AdminSchool
    );
    return response?.data?.response?.AdminSchool;
  } catch (error) {
    console.log("GetSchoolAdminsBySchoolId error response", error);
  }
};

export const GetTeachersAndSchoolsByDistrictId = async (data) => {
  console.log("==============GetTeachersAndSchoolsByDistrictId========", data);
  const config = {
    method: "get",
    url: api.getSchoolsAndTeacherofDistrict(data.districtId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const response = await axios(config);
    console.log(
      "GetTeachersAndSchoolsByDistrictId response===========",
      response?.data?.response
    );
    return response;
  } catch (error) {
    console.log("GetTeachersAndSchoolsByDistrictId error response", error);
  }
};


export const GetUsersDataById = async(data) => {
  const config = {
    method : "get",
    url : api.getUsersDataById(data.userId),
    headers : {
      Authorization : `Bearer ${data.token}`
    }
  }
  try {
    const response = await axios(config);
    console.log("GetUsersDataById=======", response);
    return response;
  }
  catch(error) {
    console.log("error============", error);
    return error;
  }
}

export const RemoveSchool = async(data) => {
  console.log("Delete School Function - UUID", data.uuid);
  const config = {
    method: "delete",
    url: api.removeSchool(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const response = await axios(config);
    console.log(
      "Response from Delete Shcool Data Function (district.service.js)",
      response
    );
    return response;
  } catch (error) {
    return error;
  }
}



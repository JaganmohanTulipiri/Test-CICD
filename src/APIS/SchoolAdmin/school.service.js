import axios from "axios";
import { schoolAdminEndPoint as api } from "./school";

export const getManageClasses = async (data) => {
  console.log(data, "");

  const config = {
    method: "post",
    url: api.manageClasses(),
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.body,
  };
  console.log(config, "in api request==========>");
  try {
    const response = await axios(config);

    console.log(response, "iam response-===========");
    return response.data;
  } catch (error) {
    console.log(error, "iam error");
    throw error;
  }
};

export const getSchoolAdminGetAllClasses = async (data) => {
  console.log(data, "iammmmmmmmmmmmmm");
  const config = {
    method: "get",
    url: api.schoolAdminGetAllClasses(data.classId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  console.log(config, "in api request==========>school");
  try {
    const response = await axios(config);
    console.log(response, "from service");
    return response;
  } catch (error) {
    return error;
  }
};

export const getSchoolAdminStudentByClasses = async (data) => {
  console.log(data, "ima data from class api from service.js");
  const config = {
    method: "get",
    url: api.schoolAdminStudentByClass(data.classId, data.skip),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  console.log(config, "in api request==========>school");
  try {
    const response = await axios(config);
    console.log(response, "from service");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getStudentDataSchoolAdminAPi = async (data) => {
  console.log(data, "from==njkscnbjhbaschbhjasbchjasbchj");

  const config = {
    method: "get",
    url: api.getSchoolAdminStudentDataByClass(data.classId),
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

export const getAddTeacherToManageClass = async (data) => {
  console.log(data, "iam data from getadd manageuser calss api calll");

  const config = {
    method: "post",
    url: api.assignSchoolAndClassToAdminUser(),

    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
    },
    data: data?.body,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAddStudentToClassApi = async (data) => {
  const config = {
    method: "post",
    url: api.assignSchoolAndClassToUser(),
    headers: {
      Authorization: `Bearer ${data.token}`,

      "Content-Type": "application/json",
    },
    data: data?.body,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getManageUsersAssignmentApi = async (data) => {
  const config = {
    method: "get",
    url: api.manageUsersAssignment(data.userUUID),
    headers: {
      Authorization: `Bearer ${data.token}`,

      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
};

export const getTeachersListByClassIdApi = async (data) => {
  console.log("data of search api", data);

  const config = {
    method: "get",
    url: api.teachersByClassId(data.classId),
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

// export const getSchoolsApi = async (data) => {
//   console.log("data from getschools service",data.finalBody)
//   const config = {
//     method: 'post',
//     url: api.getSchools(),

//     headers: {
//       Authorization: `Bearer ${data.token}`,
//     },
//     data: data?.finalBody,
//   };
//   try {
//     console.log("config=========================",config)
//     const response = await axios(config);
//     console.log("respose from getschools service---->",response)
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const getSchoolWithSchoolAdminApi = async (data) => {
//   console.log('data of getSchoolWithSchoolAdminApi api', data);

//   const config = {
//     method: 'get',
//     url: api.getSchoolWithSchoolAdmin(data.schoolId),
//     headers: {
//       Authorization: `Bearer ${data.token}`,
//     },
//   };
// }

export const getAddToStudentTable = async (data) => {
  const config = {
    method: "post",
    url: api.schoolAdminGetSchools(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.body,
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    console.log("erorors", error);
  }
};

export const getAllSchoolsOnly = async (data) => {
  const config = {
    method: "post",
    url: api.schoolAdminSchoolsOnly(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.body,
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    console.log("erorors", error);
  }
};

export const getTeachersBySchoolApi = async (data) => {
  console.log("data of getTeachersBySchool api", data);

  const config = {
    method: "post",
    url: api.getTeachersBySchool(data.schoolId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };
  console.log(config, "config for get teacherfs");
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSchoolsApi = async (data) => {
  console.log("data from getschools service", data.skip);
  const config = {
    method: "get",
    url: api.getSchools(data.skip),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    // data: data?.finalBody,
  };
  try {
    console.log("config=========================", config);
    const response = await axios(config);
    console.log("respose from getschools service---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSchoolWithSchoolAdminApi = async (data) => {
  console.log("data of getSchoolWithSchoolAdminApi api", data);

  const config = {
    method: "get",
    url: api.getSchoolWithSchoolAdmin(data.schoolId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getClassbasedonSchoolApi = async (data) => {
  console.log("data from getClassbasedonSchool service", data.body);
  const config = {
    method: "post",
    url: api.getClassbasedonSchool(),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.body,
  };
  try {
    console.log("config=========================", config);
    const response = await axios(config);
    console.log("respose from getClassbasedonSchool service---->", response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getaddTeacherToClassApi = async (data) => {
  console.log("data from addTeacherToClass service", data.payloadBody);
  const config = {
    method: "post",
    url: api.addTeacherToClass(),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.payloadBody,
  };
  try {
    console.log("config=========================", config);
    const response = await axios(config);
    console.log("respose from addTeacherToClass service---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const requestToAddAdminForSchoolApi = async (data) => {
  console.log("data from requestToAddAdminForSchool service", data.payloadBody);
  const config = {
    method: "post",
    url: api.requestToAddAdminForSchool(),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.payloadBody,
  };
  try {
    console.log("config=========================", config);
    const response = await axios(config);
    console.log(
      "respose from requestToAddAdminForSchool service---->",
      response
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateSchoolApi = async (data) => {
  console.log("data from updateSchool service", data.inputs);
  const config = {
    method: "post",
    url: api.updateSchool(data.schoolId),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.inputs,
  };
  try {
    console.log("config=========================", config);
    const response = await axios(config);
    console.log("respose from updateSchool service---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addAnnouncement = async (data) => {
  console.log(data, "befor api====================================>>>>>>>>");

  const config = {
    method: "post",
    url: api.addAnnouncement(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.finalObj,
  };

  try {
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getManageAnnouncements = async (data) => {
  console.log("data from getManageAnnouncements------------>", data);
  const config = {
    method: "get",
    url: api.manageAnnouncement(data.role, data.status,data.skip),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);
    console.log(response, "manageAnnouncement data list");
    return response;
  } catch (error) {
    console.log(error, "from manageAnnouncement error log ");
    throw error
  }
};

export const getAddClassToManageClasses = async (data) => {
  const config = {
    method: "post",
    url: api.addClassToManageClasses(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    throw error;
    console.log(error);
  }
};

export const createSchoolAdminApi = async (data) => {
  console.log("data from createSchoolAdmin service", data.reqBody);
  const config = {
    method: "post",
    url: api.createSchoolAdmin(),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.reqBody,
  };
  try {
    console.log("config=========================", config);
    const response = await axios(config);
    console.log("respose from createSchoolAdmin service---->", response);
    return response;
  } catch (error) {
    return error;
  }
};

export const editTeacherApi = async (data) => {
  console.log("data from createSchoolAdmin service", data.reqBody);
  const config = {
    method: "post",
    url: api.editTeacher(data.teacherId),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.reqBody,
  };
  try {
    console.log("config=========================", config);
    const response = await axios(config);
    console.log("respose from createSchoolAdmin service---->", response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getTeacherByIdApi = async (data) => {
  console.log("data from getTeacherById------------>", data);
  const config = {
    method: "get",
    url: api.getTeacherById(data.teacherId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);
    console.log(response, "getTeacherById data list");
    return response;
  } catch (error) {
    console.log(error, "from getTeacherById error log ");
  }
};

export const getUserRolesListForManageUsersApi = async (data) => {
  const config = {
    method: "get",
    url: api.userRolesListForManageUsers(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const addUserApi = async (data) => {
  console.log("data from createSchoolAdmin service", data.finalPayload);
  const config = {
    method: "post",
    url: api.addUsers(),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.finalPayload,
  };
  try {
    const response = await axios(config);
    console.log("respose from createSchoolAdmin service---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getTeachersBySchoolsApi = async (data) => {
  console.log(data, "iam data from get teachers by schools");

  const config = {
    method: "post",
    url: api.getTeachersBySchools(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },

    data: data.body,
  };

  try {
    const response = await axios(config);
    console.log("respose from getTeachersBySchoolsApi service---->", response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getStudentInfoBasedOnSchoolApi = async (data) => {
  console.log(data.body, "iam data from get student info based on school");

  const config = {
    method: "post",
    url: api.getStudentInfoBasedOnSchool(data.schoolId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },

    data: data.body,
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    return error;
  }
};

export const getClassByIDApi = async (data) => {
  const config = {
    method: "get",
    url: api.getClassByID(data.classId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateClassByIDApi = async (data) => {
  console.log(data, "iam update classID");

  const config = {
    method: "post",
    url: api.updateClassByID(data.classId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },

    data: data.body,
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const removeSchoolAdminFromSchoolApi = async (data) => {
  console.log(
    "data from removeSchoolAdminFromSchool service",
    data.finalPayload
  );
  const config = {
    method: "post",
    url: api.removeSchoolAdminFromSchool(data.schoolId),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.finalPayload,
  };
  try {
    const response = await axios(config);
    console.log(
      "respose from removeSchoolAdminFromSchool service---->",
      response
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const removeAdminFromDistrictApi = async (data) => {
  const config = {
    method: "delete",
    url: api.removeAdminFromDistrict(data.districtUUID),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },

    data: data?.finalPayload,
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateUsersApi = async (data) => {
  console.log("data from updateUsers service", data.finalPayload);
  const config = {
    method: "post",
    url: api.updateUsers(data.UserId),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.finalPayload,
  };
  try {
    const response = await axios(config);
    console.log("respose from updateUsers service---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCsvFileColumnNamesApi = async (data) => {
  console.log("data from getCsvFileColumnNames service", data);

  const config = {
    method: "post",
    url: api.getCsvFileColumnNames(),

    headers: {
      Authorization: `Bearer ${data.token}`,

      "Content-Type": "multipart/form-data",
    },

    data: data?.finalBody,
  };
  try {
    const response = await axios(config);
    console.log("respose from getCsvFileColumnNames service---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getExportUsers = async (data) => {
  // console.log("data from updateUsers service", data.finalPayload);
  const config = {
    method: "post",
    url: api.getExportUsers(),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.body,
  };
  try {
    const response = await axios(config);
    console.log("respose export users---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getExportClasses = async (data) => {
  console.log("data from updateUsers service", data);
  const config = {
    method: "post",
    url: api.getExportClasses(),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.body,
  };
  try {
    const response = await axios(config);
    console.log("respose export classes---->", response);
    return response;
  } catch (error) {
    return error;
  }
};

export const createMappingObjectApi = async (data) => {
  console.log("data from createMappingObject service", data);
  const config = {
    method: "post",
    url: api.createMappingObject(),

    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.finalBody,
  };
  try {
    const response = await axios(config);
    console.log("respose createMappingObject ---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getMappingObjectListApi = async (data) => {
  const config = {
    method: "get",
    url: api.getMappingObjectList(data.skip),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const removeMappingObjectsApi = async (data) => {
  console.log("data---------------", data);
  const config = {
    method: "delete",
    url: api.removeMappingObjects(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getTablesByIdApi = async (data) => {
  const config = {
    method: "get",
    url: api.getTablesById(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getMapObjDetailsByIdApi = async (data) => {
  const config = {
    method: "get",
    url: api.getMapObjDetailsById(data.uuid),
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

export const getImportHistoryApi = async (data) => {
  const config = {
    method: "get",
    url: api.getImportHistory(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getImportSettingsApi = async (data) => {
  const config = {
    method: "get",
    url: api.getImportSettings(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const addUpdateImportSettingsApi = async (data) => {
  const config = {
    method: "post",
    url: api.addUpdateImportSettings(),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data?.finalBody,
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const rollBackImportDataApi = async (data) => {
  const config = {
    method: "post",
    url: api.rollBackImportData(data.importId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const response = await axios(config);

    return response;
  } catch (error) {
    throw error;
  }
};

export const previewCsvApi = async (data) => {
  console.log("data from previewCsv service", data);

  const config = {
    method: "post",
    url: api.previewCsv(),

    headers: {
      Authorization: `Bearer ${data.token}`,

      "Content-Type": "multipart/form-data",
    },

    data: data?.finalBody,
  };
  try {
    const response = await axios(config);
    console.log("respose from previewCsv service---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const uploadCsvToDBApi = async (data) => {
  console.log("data from uploadCsvToDB service", data);

  const config = {
    method: "post",
    url: api.uploadCsvToDB(),

    headers: {
      Authorization: `Bearer ${data.token}`,

      "Content-Type": "multipart/form-data",
    },

    data: data?.finalBody,
  };
  try {
    const response = await axios(config);
    console.log("respose from uploadCsvToDB service---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};










export const editUserProfileApi = async (data) => {
  console.log("data from uploadCsvToDB service", data);

  const config = {
    method: "post",
    url: api.editUserProfile(data?.userID),

    headers: {
      Authorization: `Bearer ${data.token}`,

    },

    data: data?.finalBody,
  };
  try {
    const response = await axios(config);
    console.log("respose from uploadCsvToDB service---->", response);
    return response;
  } catch (error) {
    throw error;
  }
};

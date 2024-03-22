import { CMSEndPoints as api } from "../CMS/cms";
import axios from "axios";

export const AddCMSContent = async (data) => {
  const config = {
    method: "post",
    url: api.AddContent,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const response = await axios(config);
    // console.log("Add CMS Content:", response.data.status);
    return response;
  } catch (error) {
    // console.log(error.response.data);
    return error.response.data.message;
  }
};

export const GetAllResources = async (data) => {
  const config = {
    method: "get",
    url: api.GetCMSResources,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  // // console.log("============In CMS SERVICE COMPONENT",config);
  try {
    const response = await axios(config);
    // // console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const AddCMSSubject = async (data) => {
  const config = {
    method: "post",
    url: api.AddSubject,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const response = await axios(config);
    // // console.log("Add Subject Response:", response);
    return response;
  } catch (error) {
    // // console.log(error.response.data);
    return error.response.data.message;
  }
};

export const GetCMSSubject = async (data) => {
  // // console.log("GetCMSSubject function before API call", data);
  const config = {
    method: "get",
    url: api.GetSubject,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  // console.log(config);
  try {
    const response = await axios(config);
    // console.log("Get Subjects Response", response);
    return response;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const UpdateCMSSubject = async (data) => {
  // console.log("Update CMS Subject", data);
  const config = {
    method: "post",
    url: api.UpdateSubject(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const response = await axios(config);
    // console.log("Update Subject Response:", response);
    return response;
  } catch (error) {
    // console.log(error.response.data);
    return error.response.data.message;
  }
};

export const DeleteCMSSubject = async (data) => {
  // console.log("Delete CMS Subject", data);
  const config = {
    method: "delete",
    url: api.DeleteSubject(data.uuid),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data: data.body,
  };

  try {
    const result = await axios(config);
    // console.log("Delete Subject Response:", result);
    return result;
  } catch (error) {
    // console.log(error.response.data);
    return error.response.data.message;
  }
};

export const getResourceByCategoryStatus = async (data) => {
  console.log("Get Resource By Category Status Before API Call", data);
  const config = {
    method: "get",
    url: api.GetResourceByCategoryStatus(data.status),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const result = await axios(config);
    console.log("result in getResourceByCategoryStatus", result);
    return result.data.response;
  } catch (error) {
    return error;
  }
};

export const getResourceByCategorySubject = async (data) => {
  // console.log("Get Resource By Category Subject Before API Call", data);
  const config = {
    method: "get",
    url: api.GetResourceByCategorySubject(data.subject),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const result = await axios(config);
    // console.log("Get Resource By Subject Response", result.data.response);
    return result.data.response;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const GetResourceByCategoryTitle = async (data) => {
  // console.log("Get CMS Resource By Title", data.title);
  const config = {
    method: "get",
    url: api.GetCMSByTitle(data.title),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const result = await axios(config);
    // console.log("API Response after Axios call", result);
    return result;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const DeleteCMSContentById = async (data) => {
  const config = {
    method: "delete",
    url: api.deleteCMSContentById(data.id),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    const result = await axios(config);
    return result;
  } catch (error) {
    return error;
  }
};

export const GetCMSAssessmentsList = async () => {
  const config = {
    method: "get",
    url: api.getAssessmentsList,
  };

  try {
    const result = await axios(config);
    return result;
  } catch (error) {
    return error;
  }
};

export const GetCMSTestsList = async () => {
  const config = {
    method: "get",
    url: api.getTestsList,
  };

  try {
    const result = await axios(config);
    return result;
  } catch (error) {
    return error;
  }
};

export const GetCMSAudienceList = async () => {
  const config = {
    method: "get",
    url: api.getAudienceList,
  };

  try {
    const result = await axios(config);
    return result;
  } catch (error) {
    return error;
  }
};

export const ActiveInactiveSubject = async (data) => {

  console.log("data======ActiveInactiveSubject", data);
  const config = {
    method : "post",
    url : api.activeInactiveSubject(data.subjectId),
    headers : {
      Authorization : `Bearer ${data.token}`
    },
    data:data.body
  }

  try {
    const result = await axios(config);
    return result;
  }
  catch(error) {
    return error;
  }
}

export const UpdateCMSContent = async(data) => {

  console.log("CMS COntent Body", data);
  const config = {
    method:"post",
    url : api.updateCMSContent(data.contentId),
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    data:data.body
  }
  try {
    console.log("configuration for edit cms content", config);
    const result = await axios(config);
    console.log("result from api ==== CMSContent", result);
    return result;
  }
  catch(error) {
    console.log("error===========", error);
    return error;
  }
}

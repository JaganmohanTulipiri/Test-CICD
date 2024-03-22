import axios from "axios";
import { ManageUsersEndPoints as api } from "../ManageUsers/manageUsers";

export const getManageUsersData = async (data) => {
  console.log("==========getManageUsersData=======", data);
  const config = {
    method: "get",
    url: api.getUsersData,
    headers: {
      Authorization: `${data.token}`,
    },
  };

  try {
    const response = await axios(config);
    console.log("ManageUsers Response======", response);
    return response;
  } catch (error) {
    console.log("=======ManageUsers error", error);
    return error;
  }
};

export const getAllSuperAdminsDataAPI = async (data) => {
  console.log("==========getAllSuperAdminsDataAPI=======", data.token);
  const config = {
    method: "get",
    url: api.getAllSuperAdmins,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    console.log("config", config);
    const response = await axios(config);
    console.log("SuperAdmins Response======", response);
    return response;
  } catch (error) {
    console.log("=======SuperAdmin error", error);
    throw error;
  }
};

export const getAllSuperAdminHelpDeskUsers = async (data) => {
  console.log("==========getAllSuperAdminHelpDeskUsers=======", data.token);
  const config = {
    method: "get",
    url: api.getAllHelpDeskUsers,
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  try {
    console.log("config", config);
    const response = await axios(config);
    console.log("getAllSuperAdminHelpDeskUsers Response======", response);
    return response;
  } catch (error) {
    console.log("=======getAllSuperAdminHelpDeskUsers error", error);
    return error;
  }
};


export const deleteAdminOrHelpDesk = async(data) => {
  const config = {
    method:"delete",
    url : api.deleteAdmin(data.uuid),
    headers : {
      Authorization : `Bearer ${data.token}`
    }
  }
  try {
    console.log("config", config);
    const response = await axios(config);
    console.log("deleteAdminOrHelpDesk Response======", response);
    return response;
  } catch (error) {
    console.log("=======deleteAdminOrHelpDesk error", error);
    return error;
  }
}


import axios from "axios";
import {RolesPrivileges as api} from "../RolesPrivileges/rolesprivileges";

export const GetAllAdminPrivileges = async(data) => {
    const config = {
        method : "get",
        url : api.getAdminPrivileges,
        headers : {
            Authorization : `${data.token}`
        }
    }

    try {
        const response = await axios(config);
        console.log("===========Roles Privileges Response======", response?.data?.response);
        return response?.data?.response;
    }
    catch(error) {
        console.log("=======Roles Privileges Error", error);
        return error;
    }
}

export const GetHelpDeskPrivileges = async(data) => {
    const config = {
        method : "get",
        url : api.getHelpDeskPrivileges,
        headers : {
            Authorization : `${data.token}`
        }
    }

    try {
        const response = await axios(config);
        console.log("===========GetHelpDeskPrivileges Response======", response?.data?.response);
        return response?.data?.response;
    }
    catch(error) {
        console.log("=======GetHelpDeskPrivileges Error", error);
        return error;
    }
}
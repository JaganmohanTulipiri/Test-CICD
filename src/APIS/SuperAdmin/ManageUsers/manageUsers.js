import BASE_URL from "../../index";

export const ManageUsersEndPoints = {
    getUsersData : `${BASE_URL}/users/getAllUserData`,
    getAllSuperAdmins : `${BASE_URL}/users/getAllSuperAdmin`,
    getAllHelpDeskUsers:`${BASE_URL}/users/getAllhelpDesk`,
    deleteAdmin: (uuid) => `${BASE_URL}/users/${uuid}`
}
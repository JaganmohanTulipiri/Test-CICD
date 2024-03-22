import  BASE_URL  from "./index";


export const authEndpoints = {
    login: `${BASE_URL}/users/login`,

    loginUserById: (userId) => `${BASE_URL}/users/getUserById/${userId}`,

    logOut:()=>`${BASE_URL}/users/logout`,
    forgotUserName:()=>`${BASE_URL}/users/forgotUsername`,
    forgotPassword:()=>`${BASE_URL}/users/forgotPassword`


}
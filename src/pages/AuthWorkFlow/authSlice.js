import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = `http://3.85.124.12:5001`;

const initialState = {
  selectedRole: "",
  loginForgotName: "",
  isSucessPopUpOpen: false,
  studentViewDataId: "",
  isLoading: false,
  loginResponse: {},

};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSelectedRole: (state, action) => {
      state.selectedRole = action.payload;
    },

    setLoginForgotName: (state, action) => {
      state.loginForgotName = action.payload;
    },

    setIsSucessPopUpOpen: (state, action) => {
      state.isSucessPopUpOpen = action.payload;
    },

    setStudentViewDataId: (state, action) => {
      state.studentViewDataId = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setLoginResponse: (state, action) => {
      state.loginResponse = action.payload;
    },

    



  },
});

export const {
  setSelectedRole,
  setLoginForgotName,
  setIsSucessPopUpOpen,
  setStudentViewDataId,
  setIsLoading,
  setLoginResponse,
} = authSlice.actions;
export default authSlice.reducer;

export const loginApi = (data) => (dispatch) => {

  console.log(data, "iam from login api before call")

  const config = {
    method: "post",
    url: `${BASE_URL}/api/users/login`,
    data,
  };

  axios(config)
    .then((response) => {

      console.log(response, "response")
      console.log(response.data.response, "iam login response");
 
      dispatch(setLoginResponse(response.data));
      dispatch(setIsLoading(false))
    })

    .catch((error) => {
      console.log(error, "iam login error ");
      dispatch(setLoginResponse(error.response));
      dispatch(setIsLoading(false))
    });

}

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  error: false,
  code: "",
  message: "",
  response: "",
  errorResponse: null,
  profile: {},
  user: {},
  userId: "",
  userRole: [],
  selectedRole: "",
  currentPath: "",

  token: null,
  smartCoachResponse: null,
  activityLogEvents: null,
  activityGramEventsList: null,
  loadingOne: false,
  loadingTwo: false,
  testSelectionResponse: null,
  testSelectionButtonClicked: false,
  activatingID: 1,
  forgotUserName: {},

  hoveringID: null,
  basicUserInfo: {},

  navbarCardItemShow: false,

  UserData: {},
  logOutResponse: "",
  manageUser: {
    userType: "",
    formTitle: "",
    previousPath: "",
  },
  recentResourcesByTest: [],

  loggedInUserDetails: null,

  loggedInUserReportDetails: [],

  openSideBar: true,
  forgotPassword: "",
  previousPath: "",










  
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrorResponse: (state, action) => {
      state.errorResponse = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    setCode: (state, action) => {
      state.code = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },

    setLoadingOne: (state, action) => {
      state.loadingOne = action.payload;
    },
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },

    setLoadingTwo: (state, action) => {
      state.loadingTwo = action.payload;
    },

    setNavbarCardItemShow: (state, action) => {
      state.navbarCardItemShow = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setUserData: (state, action) => {
      state.UserData = action.payload;
    },
    setRecentResourcesByTest: (state, action) => {
      state.recentResourcesByTest = action.payload;
    },

    setManageUser: (state, action) => {
      state.manageUser = action.payload;
    },

    getUser: (state, action) => {},

    getUserRole: (state, action) => {},

    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
    setSelectedRole: (state, action) => {
      state.selectedRole = action.payload;
    },

    setLoggedInUserDetails: (state, action) => {
      state.loggedInUserDetails = action.payload;
    },

    getSmartCoach: (state, action) => {},

    getTestSelection: (state, action) => {},

    setSmartCoachResponse: (state, action) => {
      state.smartCoachResponse = action.payload;
    },

    setTestSelectionResponse: (state, action) => {
      state.testSelectionResponse = action.payload;
    },

    getActivityLogEvents: (state, action) => {},

    setActivityLogEvents: (state, action) => {
      state.activityLogEvents = action.payload;
    },

    setActivityGramEventsList: (state, action) => {
      state.activityGramEventsList = action.payload;
    },

    getActivityGramEventsList: (state, action) => {},

    setTestSelectionButtonClicked: (state, action) => {
      state.testSelectionButtonClicked = action.payload;
    },

    setActivatingID: (state, action) => {
      state.activatingID = action.payload;
    },

    setHoveringID: (state, action) => {
      state.hoveringID = action.payload;
    },

    setBasicUserInfo: (state, action) => {
      state.basicUserInfo = action.payload;
    },
    setLogOutResponse: (state, action) => {
      state.logOutResponse = action.payload;
    },
    setForgotUserName: (state, action) => {
      state.forgotUserName = action.payload;
    },
    setForgotPassword: (state, action) => {
      state.forgotPassword = action.payload;
    },
    getForgotUserName: (state, action) => {},
    getForgotPassword: (state, action) => {},

    getUserData: (state, action) => {},
    logOut: (state, action) => {},

    getRecommendedSmartCoachAPICall: (state, action) => {},
    getRecentResourcesByTest: (state, action) => {},

    getStudentReportApiCall: (state, action) => {},

    setLoggedInUserReportDetails: (state, action) => {
      state.loggedInUserReportDetails = action.payload;
    },

    setOpenSideBar: (state, action) => {
      state.openSideBar = action.payload;
    },
    setPreviousPath: (state, action) => {
      state.previousPath = action.payload;
    },

    reset: () => {
      return initialState;
    },
  },
});

const profileReducer = profileSlice.reducer;
export const {
  getUser,
  setLoading,
  setErrorResponse,
  setResponse,
  setMessage,
  setCode,
  setUser,
  setUserRole,
  setUserId,
  getUserRole,
  getSmartCoach,
  getTestSelection,
  setTestSelectionResponse,
  setSmartCoachResponse,
  setToken,
  setSelectedRole,
  getActivityLogEvents,
  setActivityGramEventsList,
  getActivityGramEventsList,
  setActivityLogEvents,
  setLoadingOne,
  setLoadingTwo,
  setTestSelectionButtonClicked,
  setActivatingID,
  setHoveringID,
  setCurrentPath,
  setBasicUserInfo,

  setNavbarCardItemShow,
  getUserData,
  setUserData,
  logOut,
  setLogOutResponse,
  setManageUser,
  getRecentResourcesByTest,
  getRecommendedSmartCoachAPICall,
  setRecentResourcesByTest,

  setLoggedInUserDetails,

  getStudentReportApiCall,
  setLoggedInUserReportDetails,
  setForgotUserName,
  getForgotUserName,
  setForgotPassword,
  getForgotPassword,

  setOpenSideBar,
  setPreviousPath,

  reset,
} = profileSlice.actions;
export default profileReducer;

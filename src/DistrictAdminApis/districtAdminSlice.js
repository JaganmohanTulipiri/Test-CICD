import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:false,
  emailSettings: [],
  mandatesData: [],

  getDistrictForDistrictAdminResponse: [],
  mandateData: null,
  testItemsList: [],
  addMandate: null,
  updateMandate: null,
  rolesAndPrivilagesByRole: [],
  updateRolesAndPrivilages: [],
  districtStatistics: [],
  accessLogCounts: [],
  updateDistrictForDistrictAdminResponse: null,

  notificationsRecievedList: [],

  studentsListForReports : [],

  reportFilterDataObject: {},

  selectedStudentUUIDForReport : "",

  runReportButtonClicked: false,

  overviewReportSummaryByClass : [],


};

const districtSlice = createSlice({
  name: "district",
  initialState,
  reducers: {
    setLoading: (state, action) => {
			state.loading = action.payload;
		},
    setEmailSettings: (state, action) => {
      state.emailSettings = action.payload;
    },

    setMandateData: (state, action) => {
      state.mandateData = action.payload;
    },
    setTestItemsList: (state, action) => {
      state.testItemsList = action.payload;
    },
    setAddMandate: (state, action) => {
      state.addMandate = action.payload;
    },
    setUpdateMandate: (state, action) => {
      state.updateMandate = action.payload;
    },
    getEmailSettings: (state, action) => {},
    getMandatesData: (state, action) => {},

    setGetDistrictForDistrictAdminResponse: (state, action) => {
      state.getDistrictForDistrictAdminResponse = action.payload;
    },
    setRolesAndPrivilagesByRole: (state, action) => {
      state.rolesAndPrivilagesByRole = action.payload;
    },
    setUpdateRolesAndPrivilages: (state, action) => {
      state.updateRolesAndPrivilages = action.payload;
    },
    setDistrictStatistics: (state, action) => {
      state.districtStatistics = action.payload;
    },
    setAccessLogCounts: (state, action) => {
      state.accessLogCounts = action.payload;
    },
    getDistrictForDistrictAdminApiCall: (state, action) => {},
    getMandateData: (state, action) => {},
    getTestItemsList: (state, action) => {},
    postMandate: (state, action) => {},
    updateMandate: (state, action) => {},
    getRolesAndPrivilagesByRole: (state, action) => {},
    updateRolesAndPrivilages: (state, action) => {},
    getDistrictStatistics: (state, action) => {},
    getAccessLogCounts:(state,action)=>{},
    // updateMandate:(state,action)=>{},


    getUpdateDistrictForDistrictAdminApiCall: (state, action) => {

    },

    setUpdateDistrictForDistrictAdminResponse: (state, action) => {

      state.updateDistrictForDistrictAdminResponse = action.payload;
    },



    getNotificationsRecievedApiCall: (state, action) => {},


    setNotificationsRecievedList: (state, action) => {

      state.notificationsRecievedList = action.payload;
    },

    




    setStudentsListForReports: (state, action) => {

      state.studentsListForReports = action.payload;

    },




    getStudentsListForReportsApiCall: (state, action) => {

    },


    setReportFilterDataObject: (state, action) => {

      state.reportFilterDataObject = action.payload;


    },

    setSelectedStudentUUIDForReport: (state, action) => {

      state.selectedStudentUUIDForReport =  action.payload;


    },



    getOverviewReportSummaryByClassApiCall: (state, action) => {},



    setOverviewReportSummaryByClass: (state, action) => {

      state.overviewReportSummaryByClass = action.payload;


    },


    setRunReportButtonClicked: (state, action) => {

      state.runReportButtonClicked = action.payload;


    },



  },
});

const districtReducer = districtSlice.reducer;

export const {
  setLoading,
  setMandatesData,
  getMandatesData,
  setGetDistrictForDistrictAdminResponse,
  getDistrictForDistrictAdminApiCall,
  setEmailSettings,
  getEmailSettings,
  getMandateData,
  setMandateData,
  getTestItemsList,
  setTestItemsList,
  postMandate,
  setAddMandate,
  setUpdateMandate,
  updateMandate,
  getRolesAndPrivilagesByRole,
  setRolesAndPrivilagesByRole,
  setUpdateRolesAndPrivilages,
  updateRolesAndPrivilages,
  setDistrictStatistics,
  getDistrictStatistics,
  setAccessLogCounts,
  getAccessLogCounts,

  getUpdateDistrictForDistrictAdminApiCall,
  setUpdateDistrictForDistrictAdminResponse,



  getNotificationsRecievedApiCall,
  setNotificationsRecievedList,


  setStudentsListForReports,
  getStudentsListForReportsApiCall,


  setReportFilterDataObject,
  setSelectedStudentUUIDForReport,


  getOverviewReportSummaryByClassApiCall,

  setOverviewReportSummaryByClass,

  setRunReportButtonClicked,



} = districtSlice.actions;

export default districtReducer;

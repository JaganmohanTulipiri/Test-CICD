import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newDistrict: [],
  updateDistrict: [],
  getDistricts: [],
  CMSContent: [],
  CMSResources: [],
  getSubjects: [],
  addSubject: [],
  updateSubject: [],
  deleteSubject: [],
  resourceByStatus: [],
  resourceBySubject: [],
  newSSOConfig: [],
  getSSOConfigData: [],
  SSOConfigResultByDistrict: [],
  SSOConfigResultByOAuth2: [],
  deleteSSOConfig: [],
  getUpdateSSOConfig: [],
  deleteDistrict: [],
  resourceByTitle: [],
  addSchool: [],
  addedState: [],
  updatedState: [],
  getAllStatesInfo: [],
  deleteState: [],
  filterStatesByName: [],
  filteredStatesByType: [],
  filterStatesByLicense: [],
  addAdminUser: [],
  deleteCMSContent: [],
  editTeacherInfo: [],
  getSchoolsResponse: [],
  getTeachersResponse: [],
  getAdminByDistrictResponse: [],
  districtsSchools: [],
  getDistrictDataByFilter: [],
  updateSchools: [],
  assignAdminToDistrictResponse: [],
  updateAdminUsersResponse: [],
  deleteAdminUserResponse: [],
  schoolAdminsResponse: [],
  ManageUsersResponse: [],
  rolesPrivilegesResponse: [],
  helpDeskPrivilegesResponse: [],
  TeachersAndSchoolsByDistricts: [],
  distrcitIDForDistrict: null,
  schoolBySchoolId: null,
  assessmentsList: [],
  testsList: [],
  audienceList: [],
  districtAdminsData: [],
  UsersById: [],
  CMSSubjectStatus: [],
  updateCMSContent: [],
  currentCMSContent: [],
  removeSchool: [],
  superAdmins: [],
  helpDeskUsers: [],
  deleteAdminOrHelpDesk: [],
  stateId: [],
  stateName: [],
  fundersList: [],
  license: [],
  licensesList: [],
  licenseData:[],
  updatedLicense:[],
  funderId:"",
  licensedSchools:[], 
  deleteLicense:[],
  deleteSchoolLicense:[],
  schoolsToAddLicense:[],
  AddLicenseToSchool:[], 
  licenseHistory:[],
  storeFunderType:""
};

console.log("SuperAdmin Slice Called==========");
const superAdminSlice = createSlice({
  name: "superAdmin",
  initialState,
  reducers: {
    getNewDistrict: (state, action) => {},
    setNewDistrict: (state, action) => {
      state.newDistrict = action.payload;
    },
    getAllDistricts: (state, action) => {},
    setAllDistricts: (state, action) => {
      state.getDistricts = action.payload;
    },
    getUpdateDistrict: (state, action) => {},
    setUpdateDistrict: (state, action) => {
      state.updateDistrict = action.payload;
    },

    getCMSContent: (state, action) => {},
    setCMSContent: (state, action) => {
      state.CMSContent = action.payload;
    },

    GetResources: (state, action) => {},
    setCMSResources: (state, action) => {
      state.CMSResources = action.payload;
    },

    getAllSubjects: (state, action) => {},
    setAllSubjects: (state, action) => {
      state.getSubjects = action.payload;
    },
    AddNewSubject: (state, action) => {},
    setNewSubject: (state, action) => {
      state.addSubject = action.payload;
    },
    getUpdatedCMSSubject: (state, action) => {},
    setUpdatedCMSSubject: (state, action) => {
      state.updateSubject = action.payload;
    },
    deleteCMSSubject: (state, action) => {},
    setDeleteCMSSubject: (state, action) => {
      state.deleteSubject = action.payload;
    },
    getResourceByCategoryStatus: (state, action) => {},
    setResourceByCategoryStatus: (state, action) => {
      state.resourceByStatus = action.payload;
    },

    getResourceBySubject: (state, action) => {},
    setResourceBySubject: (state, action) => {
      state.resourceBySubject = action.payload;
    },

    getNewSSOConfig: (state, action) => {},
    setNewSSOConfig: (state, action) => {
      state.newSSOConfig = action.payload;
    },
    getAllSSOConfig: (state, action) => {},
    setAllSSoConfig: (state, action) => {
      state.getSSOConfigData = action.payload;
    },

    getSSOConfigByDistrict: (state, action) => {},
    setSSOConfigByDistrict: (state, action) => {
      state.SSOConfigResultByDistrict = action.payload;
    },
    getSSOConfigByOAuth2: (state, action) => {},
    setSSOConfigByOAuth2: (state, action) => {
      state.SSOConfigResultByOAuth2 = action.payload;
    },
    getDeleteSSOConfigById: (state, action) => {},
    setDeleteSSOConfigById: (state, action) => {
      state.deleteSSOConfig = action.payload;
    },
    getUpdatedSSOConfigById: (state, action) => {},
    setUpdatedSSOConfigById: (state, action) => {
      state.getUpdateSSOConfig = action.payload;
    },
    getDeletedDistrict: (state, action) => {},
    setDeletedDistrict: (state, action) => {
      state.deleteDistrict = action.payload;
    },
    getCMSResourceByTitle: (state, action) => {},
    setCMSResourceByTitle: (state, action) => {
      state.resourceByTitle = action.payload;
    },
    getSchool: (state, action) => {},
    setSchool: (state, action) => {
      state.addSchool = action.payload;
    },
    addState: (state, action) => {},
    setState: (state, action) => {
      state.addedState = action.payload;
    },
    updateState: (state, action) => {},
    setUpdatedState: (state, action) => {
      state.updatedState = action.payload;
    },
    getAllStates: (state, action) => {},
    setAllStates: (state, action) => {
      state.getAllStatesInfo = action.payload;
    },
    DeleteStateById: (state, action) => {},
    setDeleteStateById: (state, action) => {
      state.deleteState = action.payload;
    },
    getFilteredStatesByName: (state, action) => {},
    setFilteredStatesByName: (state, action) => {
      state.filterStatesByName = action.payload;
    },
    getFilteredStatesByType: (state, action) => {},
    setFilteredStatesByType: (state, action) => {
      state.filteredStatesByType = action.payload;
    },
    getFilteredStatesByLicense: (state, action) => {},
    setFilteredStatesByLicense: (state, action) => {
      state.filterStatesByLicense = action.payload;
    },
    getAdminUser: (state, action) => {},
    setAdminUser: (state, action) => {
      state.addAdminUser = action.payload;
    },
    getDeletedCMSContentById: (state, action) => {},
    setDeletedCMSContentById: (state, action) => {
      state.deleteCMSContent = action.payload;
    },
    getEditTeacherInfoById: (state, action) => {},
    setEditTeacherInfoById: (state, action) => {
      state.editTeacherInfo = action.payload;
    },
    getAllSchools: (state, action) => {},
    setAllSchools: (state, action) => {
      state.getSchoolsResponse = action.payload;
    },
    getAllTeachers: (state, action) => {},
    setAllTeachers: (state, action) => {
      state.getTeachersResponse = action.payload;
    },

    getDistrictsAdminById: (state, action) => {
      console.log("action", action);
    },
    setDistrictAdminById: (state, action) => {
      state.getAdminByDistrictResponse = action.payload;
    },
    getSchoolsByDistrictId: (state, action) => {},
    setSchoolsByDistrictId: (state, action) => {
      state.districtsSchools = action.payload;
    },
    getDistrictsByFilter: (state, action) => {},
    setDistrictsByFilter: (state, action) => {
      state.getDistrictDataByFilter = action.payload;
    },
    getUpdatedSchoolById: (state, action) => {},
    setUpdatedSchoolById: (state, action) => {
      state.updateSchools = action.payload;
    },
    getAdminToDistrict: (state, action) => {},
    setAdminToDistrict: (state, action) => {
      state.assignAdminToDistrictResponse = action.payload;
    },
    getUpdatedAdminUser: (state, action) => {},
    setUpdatedAdminUser: (state, action) => {
      state.updateAdminUsersResponse = action.payload;
    },
    getDeletedAdminUser: (state, action) => {},
    setDeletedAdminUser: (state, action) => {
      state.deleteAdminUserResponse = action.payload;
    },
    getSchoolAdmins: (state, action) => {},
    setSchoolAdmins: (state, action) => {
      state.schoolAdminsResponse = action.payload;
    },
    getManageUsersData: (state, action) => {},
    setManageUsersData: (state, action) => {
      state.ManageUsersResponse = action.payload;
    },
    getRolesPrivilegesData: (state, action) => {},
    setRolesPrivilegesData: (state, action) => {
      state.rolesPrivilegesResponse = action.payload;
    },
    getHelpDeskPrivilegesData: (state, action) => {},
    setHelpDeskPrivielgesData: (state, action) => {
      state.helpDeskPrivilegesResponse = action.payload;
    },

    setDistrcitIDForDistrict: (state, action) => {
      state.distrcitIDForDistrict = action.payload;
    },

    setSchoolBySchoolId: (state, action) => {
      state.schoolBySchoolId = action.payload;
    },

    getTeachersAndSchoolsByDistrict: (state, action) => {},
    setTeachersAndSchoolsByDistrictId: (state, action) => {
      state.TeachersAndSchoolsByDistricts = action.payload;
    },

    getCMSAssessmentsList: (state, action) => {},
    setCMSAssessmentsList: (state, action) => {
      state.assessmentsList = action.payload;
    },

    getCMSTestsLists: (state, action) => {},
    setCMSTestsLists: (state, action) => {
      state.testsList = action.payload;
    },

    getCMSAudienceList: (state, action) => {},
    setCMSAudienceList: (state, action) => {
      state.audienceList = action.payload;
    },
    setDistrictsAdminData: (state, action) => {
      state.districtAdminsData = action.payload;
    },
    getUsersById: (state, action) => {},
    setUsersById: (state, action) => {
      state.UsersById = action.payload;
    },
    getCMSSubjectStatus: (state, action) => {},
    setCMSSubjectStatus: (state, action) => {
      state.CMSSubjectStatus = action.payload;
    },
    getUpdatedCMSContent: (state, action) => {},
    setUpdatedCMSContent: (state, action) => {
      state.updateCMSContent = action.payload;
    },
    setCurrentCMSContent: (state, action) => {
      state.currentCMSContent = action.payload;
    },

    getRemovedSchool: (state, action) => {},
    setRemovedSchool: (state, action) => {
      state.removeSchool = action.payload;
    },

    getSuperAdmins: (state, action) => {},
    setSuperAdmins: (state, action) => {
      state.superAdmins = action.payload;
    },
    getAllHelpDeskUsers: (state, action) => {},
    setAllHelpDeskUsers: (state, action) => {
      state.helpDeskUsers = action.payload;
    },
    getDeletedAdminOrHelpDeskData: (state, action) => {},
    setDeletedAdminOrHelpDeskData: (state, action) => {
      state.deleteAdminOrHelpDesk = action.payload;
    },

    storeStateId: (state, action) => {
      state.stateId = action.payload;
    },
    storeStateName: (state, action) => {
      state.stateName = action.payload;
    },
    getFundersList: (state, action) => {},
    setFundersList: (state, action) => {
      state.fundersList = action.payload;
    },
    createLicenses: (state, action) => {
      console.log("action from createlicense", action);
    },
    setCreatedLicense: (state, action) => {
      state.license = action.payload;
    },

    getLicenseList: (state, action) => {},
    setLicenseList: (state, action) => {
      state.licensesList = action.payload;
    },

    getLicenseById:(state,action) => {},
    setLicenseById:(state, action) => {
      state.licenseData = action.payload;
    },
    updateLicenseById:(state, action) => {
      console.log("uupdateLicenseById", action.payload);
    },
    setUpdatedLicenseById:(state, action) => {
      state.updatedLicense = action.payload;
    },
    setFunderId:(state, action) => {
      state.funderId = action.payload;
    },
    getLicensedSchoolInfo:(state, action) => {},
    setLicensedSchoolInfo:(state, action) => {
      state.licensedSchools = action.payload;
    }, 
    deleteLicenseById:(state, action) => {},
    setDeletedLicenseById:(state,action) =>{
      state.deleteLicense = action.payload;
    },
    deleteSchoolLicenseById:(state, action) => {},
    setDeletedSchoolLicenseById:(state,action) =>{
      state.deleteSchoolLicense = action.payload;
    }, 
    getSchoolsToAddLicense:(state,action) => {},
    setSchoolsToAddLicense:(state,action) => {
      state.schoolsToAddLicense = action.payload;
    },
    addLicenseToSchool:(state,action) => {},
    setLicenseToSchool:(state, action) => {
      state.AddLicenseToSchool=action.payload
    }, 
    getLicenseHistory:(state, action) =>{},
    setLicenseHistory:(state, action) =>{
      state.licenseHistory = action.payload;
    },
    setFunderTypeID:(state, action) => {
      state.storeFunderType(action.payload);
    }
  },
});

const superAdminReducer = superAdminSlice.reducer;

export const {
  getNewDistrict,
  setNewDistrict,
  getAllDistricts,
  setAllDistricts,
  getUpdateDistrict,
  setUpdateDistrict,
  getCMSContent,
  setCMSContent,
  GetResources,
  setCMSResources,
  getAllSubjects,
  setAllSubjects,
  AddNewSubject,
  setNewSubject,
  getUpdatedCMSSubject,
  setUpdatedCMSSubject,
  deleteCMSSubject,
  setDeleteCMSSubject,
  getResourceByCategoryStatus,
  setResourceByCategoryStatus,
  getResourceBySubject,
  setResourceBySubject,
  getNewSSOConfig,
  setNewSSOConfig,
  getAllSSOConfig,
  setAllSSoConfig,
  getSSOConfigByDistrict,
  setSSOConfigByDistrict,
  getSSOConfigByOAuth2,
  setSSOConfigByOAuth2,
  getDeleteSSOConfigById,
  setDeleteSSOConfigById,
  getUpdatedSSOConfigById,
  setUpdatedSSOConfigById,
  getDeletedDistrict,
  setDeletedDistrict,
  getCMSResourceByTitle,
  setCMSResourceByTitle,
  getSchool,
  setSchool,
  addState,
  setState,
  updateState,
  setUpdatedState,
  getAllStates,
  setAllStates,
  DeleteStateById,
  setDeleteStateById,
  getFilteredStatesByName,
  setFilteredStatesByName,
  getFilteredStatesByType,
  setFilteredStatesByType,
  getFilteredStatesByLicense,
  setFilteredStatesByLicense,
  getAdminUser,
  setAdminUser,
  getDeletedCMSContentById,
  setDeletedCMSContentById,
  getEditTeacherInfoById,
  setEditTeacherInfoById,
  getAllSchools,
  setAllSchools,
  getAllTeachers,
  setAllTeachers,
  getDistrictsAdminById,
  setDistrictAdminById,
  getSchoolsByDistrictId,
  setSchoolsByDistrictId,
  getDistrictsByFilter,
  setDistrictsByFilter,
  getUpdatedSchoolById,
  setUpdatedSchoolById,
  getAdminToDistrict,
  setAdminToDistrict,
  getUpdatedAdminUser,
  setUpdatedAdminUser,
  getDeletedAdminUser,
  setDeletedAdminUser,
  getSchoolAdmins,
  setSchoolAdmins,
  getManageUsersData,
  setManageUsersData,
  getRolesPrivilegesData,
  setRolesPrivilegesData,
  getHelpDeskPrivilegesData,
  setHelpDeskPrivielgesData,
  setDistrcitIDForDistrict,
  getTeachersAndSchoolsByDistrict,
  setTeachersAndSchoolsByDistrictId,
  setSchoolBySchoolId,
  getCMSAssessmentsList,
  setCMSAssessmentsList,
  getCMSTestsLists,
  setCMSTestsLists,
  getCMSAudienceList,
  setCMSAudienceList,
  setDistrictsAdminData,
  getUsersById,
  setUsersById,
  getCMSSubjectStatus,
  setCMSSubjectStatus,
  getUpdatedCMSContent,
  setUpdatedCMSContent,
  setCurrentCMSContent,
  getRemovedSchool,
  setRemovedSchool,
  getSuperAdmins,
  setSuperAdmins,
  getAllHelpDeskUsers,
  setAllHelpDeskUsers,
  getDeletedAdminOrHelpDeskData,
  setDeletedAdminOrHelpDeskData,
  storeStateId,
  storeStateName,
  getFundersList,
  setFundersList,
  createLicenses,
  setCreatedLicense,
  getLicenseList,
  setLicenseList,
  getLicenseById,
  setLicenseById,
  updateLicenseById,
  setUpdatedLicenseById,
  setFunderId,
  getLicensedSchoolInfo,
  setLicensedSchoolInfo, 
  deleteLicenseById,
  setDeletedLicenseById,
  deleteSchoolLicenseById,
  setDeletedSchoolLicenseById,
  getSchoolsToAddLicense,
  setSchoolsToAddLicense,
  addLicenseToSchool,
  setLicenseToSchool,
  getLicenseHistory,
  setLicenseHistory,
  setFunderTypeID
} = superAdminSlice.actions;

export default superAdminReducer;

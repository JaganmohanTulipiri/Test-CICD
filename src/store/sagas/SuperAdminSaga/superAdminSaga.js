import { call, put, take, takeEvery } from "redux-saga/effects";
import {
  ActiveInactiveSubject,
  AddCMSContent,
  AddCMSSubject,
  DeleteCMSContentById,
  DeleteCMSSubject,
  GetAllResources,
  GetCMSAssessmentsList,
  GetCMSAudienceList,
  GetCMSSubject,
  GetCMSTestsList,
  getResourceByCategoryStatus,
  getResourceByCategorySubject,
  GetResourceByCategoryTitle,
  UpdateCMSContent,
  UpdateCMSSubject,
} from "../../../APIS/SuperAdmin/CMS/cms.service";

import {
  AddAdminUser,
  addNewDistrict,
  AddSchool,
  AssignAdminToDistrictById,
  deleteAdminUserById,
  DeleteDistrictData,
  EditTeacherUser,
  getAdminByDistrictAPI,
  GetAllDistricts,
  getDistrictByFilterAPI,
  GetSchoolAdminsBySchoolId,
  getSchoolsApi,
  getSchoolsByDistrictIDAPI,
  GetTeachersAndSchoolsByDistrictId,
  getTeachersAPI,
  GetUsersDataById,
  RemoveSchool,
  updateAdminUsersById,
  UpdateDistrictData,
  updateSchoolById,
} from "../../../APIS/SuperAdmin/Districts/district.service";
import {
  addLicenseToSchoolAPI,
  createLicenseAPI,
  deleteLicenseById,
  deleteSchoolLicense,
  getAllSchoolsToAddLicenseAPI,
  getFundersListAPI,
  getLicenseDataById,
  getLicensedSchoolData,
  getLicenseHistoryByIdAPI,
  getLicensesList,
  updateLicenseById,
} from "../../../APIS/SuperAdmin/Licenses/licenses.service";
import {
  deleteAdminOrHelpDesk,
  getAllSuperAdminHelpDeskUsers,
  getAllSuperAdminsDataAPI,
  getManageUsersData,
} from "../../../APIS/SuperAdmin/ManageUsers/manageUsers.service";
import {
  GetAllAdminPrivileges,
  GetHelpDeskPrivileges,
} from "../../../APIS/SuperAdmin/RolesPrivileges/rolesprivileges.service";
import {
  AddSSOConfig,
  DeleteSSOConfig,
  GetAllSSOConfigData,
  GetSSOConfigByDistrict,
  GetSSOConfigByOAuth2,
  updateSSOConfig,
} from "../../../APIS/SuperAdmin/SSOConfiguration/ssoconfig.service";
import {
  AddStates,
  DeleteState,
  FilterStatesByLicense,
  FilterStatesByName,
  FilterStatesByType,
  GetAllStates,
  UpdateState,
} from "../../../APIS/SuperAdmin/StatesPartners/states.service";
import { setCode, setMessage } from "../../slices/profileSlice";
import {
  getLicensedSchoolInfo,
  getSchoolsToAddLicense,
  setAdminToDistrict,
  setAdminUser,
  setAllDistricts,
  setAllHelpDeskUsers,
  setAllSchools,
  setAllSSoConfig,
  setAllStates,
  setAllSubjects,
  setAllTeachers,
  setCMSAssessmentsList,
  setCMSAudienceList,
  setCMSContent,
  setCMSResourceByTitle,
  setCMSResources,
  setCMSSubjectStatus,
  setCMSTestsLists,
  setCreatedLicense,
  setDeleteCMSSubject,
  setDeletedAdminOrHelpDeskData,
  setDeletedAdminUser,
  setDeletedCMSContentById,
  setDeletedDistrict,
  setDeletedLicenseById,
  setDeletedSchoolLicenseById,
  setDeleteSSOConfigById,
  setDeleteStateById,
  setDistrictAdminById,
  setDistrictsByFilter,
  setEditTeacherInfoById,
  setFilteredStatesByLicense,
  setFilteredStatesByName,
  setFilteredStatesByType,
  setFundersList,
  setHelpDeskPrivielgesData,
  setLicenseById,
  setLicensedSchoolInfo,
  setLicenseHistory,
  setLicenseList,
  setLicenseToSchool,
  setManageUsersData,
  setNewDistrict,
  setNewSSOConfig,
  setNewSubject,
  setRemovedSchool,
  setResourceByCategoryStatus,
  setResourceBySubject,
  setRolesPrivilegesData,
  setSchool,
  setSchoolAdmins,
  setSchoolsByDistrictId,
  setSchoolsToAddLicense,
  setSSOConfigByDistrict,
  setSSOConfigByOAuth2,
  setState,
  setSuperAdmins,
  setTeachersAndSchoolsByDistrictId,
  setUpdatedAdminUser,
  setUpdatedCMSContent,
  setUpdatedCMSSubject,
  setUpdateDistrict,
  setUpdatedLicenseById,
  setUpdatedSchoolById,
  setUpdatedSSOConfigById,
  setUpdatedState,
  setUsersById,
} from "../../slices/superAdminSlice/superAdminSlice";

// console.log("==========SuperAdminSaga Called");
function* superAdminAddDistrictAPI(action) {
  // console.log(action);

  try {
    const response = yield call(addNewDistrict, action.payload);
    yield put(setNewDistrict(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetAllDistrictsAPI(action) {
  try {
    const response = yield call(GetAllDistricts, action.payload);
    yield put(setAllDistricts(response));
    // console.log(response);
  } catch (error) {
    yield put(setAllDistricts(error));
    // console.log(error);
  }
}

function* superAdminUpdateDistrictAPI(action) {
  try {
    const response = yield call(UpdateDistrictData, action.payload);
    yield put(setUpdateDistrict(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminDeleteDistrictAPI(action) {
  // console.log(action);
  try {
    const response = yield call(DeleteDistrictData, action.payload);
    yield put(setDeletedDistrict(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    yield put(setDeletedDistrict(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminAddCMSContentAPI(action) {
  // console.log("In CMSSaga function", action);
  try {
    const response = yield call(AddCMSContent, action.payload);
    // console.log("Response:", response);
    yield put(setCMSContent(response));
    yield put(setCode(response.data.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    // yield put(setCMSContent(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetCMSResourcesAPI(action) {
  // console.log("SuperAdmin Saga=========");
  // console.log(action);
  try {
    const response = yield call(GetAllResources, action.payload);
    yield put(setCMSResources(response));
    // console.log(response);
  } catch (error) {
    yield put(setCMSResources(error));
    // console.log(error);
  }
}

function* superAdminGetAllCMSSubjectsAPI(action) {
  // console.log("superAdminGetAllCMSSubjectsAPI", action);
  try {
    const response = yield call(GetCMSSubject, action.payload);
    yield put(setAllSubjects(response));
    // // console.log(response);
  } catch (error) {
    // console.log(error);
    yield put(setAllSubjects(error));
  }
}

function* superAdminAddSubjectAPI(action) {
  // console.log("AddSubjectAPI data", action);

  try {
    const response = yield call(AddCMSSubject, action.payload);
    console.log(response, "add subject response");
    yield put(setNewSubject(response));
    yield put(setCode(response.data.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    yield put(setNewSubject(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminUpdateSubjectAPI(action) {
  // console.log("Update Subject API", action);

  try {
    const response = yield call(UpdateCMSSubject, action.payload);
    yield put(setUpdatedCMSSubject(response));
    yield put(setCode(response.data.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    yield put(setUpdatedCMSSubject(error));
    yield put(setMessage(error?.response?.data?.message));
    // console.log(error);
  }
}

function* superAdminDeleteCMSSubjectAPI(action) {
  // console.log("Delete Subject API", action);
  try {
    const response = yield call(DeleteCMSSubject, action.payload);
    // console.log(response);
    yield put(setDeleteCMSSubject(response));
    yield put(setCode(response.data.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    // console.log(error);
    yield put(setDeleteCMSSubject(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetResourceByCategoryStatus(action) {
  // console.log("Get Resource By Category Status API", action);
  try {
    const response = yield call(getResourceByCategoryStatus, action.payload);
    // console.log(response);
    yield put(setResourceByCategoryStatus(response));
  } catch (error) {
    // console.log(error);
  }
}

function* superAdminGetResourceBySubject(action) {
  // console.log("Get Resource By Subject", action);
  try {
    const response = yield call(getResourceByCategorySubject, action.payload);
    // console.log(response);
    yield put(setResourceBySubject(response));
  } catch (error) {
    // console.log(error);
    yield put(setResourceBySubject(error));
  }
}

function* superAdminAddNewSSOConfigAPI(action) {
  // console.log("Add SSOConfig", action);
  try {
    const response = yield call(AddSSOConfig, action.payload);
    yield put(setNewSSOConfig(response));
    yield put(setCode(response.data.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    // console.log(error);
    yield put(setNewSSOConfig(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetAllSSOConfigResultsAPI(action) {
  // console.log(action);
  try {
    const response = yield call(GetAllSSOConfigData, action.payload);
    yield put(setAllSSoConfig(response));
    // console.log(response);
  } catch (error) {
    // console.log(error);
    yield put(setAllSSoConfig(error));
  }
}

function* superAdminGetAllSSOConfigResultsByDistrictAPI(action) {
  // console.log("In superAdminGetAllSSOConfigResultsByDistrictAPI", action);
  try {
    const response = yield call(GetSSOConfigByDistrict, action.payload);
    yield put(setSSOConfigByDistrict(response));
    // console.log("Response set===========", response);
  } catch (error) {
    // console.log(error);
    yield put(setSSOConfigByDistrict(error));
  }
}

function* superAdminGetAllSSOConfigResultsByOAuth2API(action) {
  // console.log("In SuperAdminGetAllSSOConfigResultByOAuth2API", action);
  try {
    const response = yield call(GetSSOConfigByOAuth2, action.payload);
    // console.log("In superAdminGetAllSSOConfigByAuthorization", response);
    yield put(setSSOConfigByOAuth2(response));
  } catch (error) {
    yield put(setSSOConfigByOAuth2(error));
    // console.log(error);
  }
}

function* superAdminDeleteSSOConfigByIdAPI(action) {
  // console.log("In SuperAdminDeleteSSOConfigByIdAPI", action);
  try {
    const response = yield call(DeleteSSOConfig, action.payload);
    // console.log("Saga response", response);
    yield put(setDeleteSSOConfigById(response));
    yield put(setCode(response.data.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    // console.log(error);
    yield put(setDeleteSSOConfigById(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminUpdateSSOConfigByIdAPI(action) {
  // console.log("In SuperAdminUpdateSSOConfigByIdAPI function", action.payload);
  try {
    const response = yield call(updateSSOConfig, action.payload);
    // console.log("Response of update ssoconfig before setting", response);
    yield put(setUpdatedSSOConfigById(response));
    yield put(setCode(response.data.code));
    yield put(setMessage(response?.data?.message));
    // console.log("response after setting the value", response);
  } catch (error) {
    // console.log(error);
    yield put(setUpdatedSSOConfigById(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetCMSResultsByTitleAPI(action) {
  // console.log("In superAdminGetCMSResultsByTitleAPI", action.payload);
  try {
    const response = yield call(GetResourceByCategoryTitle, action.payload);
    // console.log("Saga response before setting the value", response);
    yield put(setCMSResourceByTitle(response));
  } catch (error) {
    // console.log(error);
    yield put(setCMSResourceByTitle(error));
  }
}

function* superAdminAddSchoolAPI(action) {
  // console.log("In SuperAdminAddSchoolAPI", action);
  try {
    const response = yield call(AddSchool, action.payload);
    // console.log("Saga response", response);
    yield put(setSchool(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    // console.log(error);
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminAddStatesAPI(action) {
  try {
    const response = yield call(AddStates, action.payload);
    yield put(setState(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    yield put(setState(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminUpdateStateAPI(action) {
  try {
    const response = yield call(UpdateState, action.payload);
    yield put(setUpdatedState(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log(error);
    yield put(setUpdatedState(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetAllStatesAPI(action) {
  try {
    const response = yield call(GetAllStates, action.payload);
    yield put(setAllStates(response));
    console.log(
      "Response from superAdminGetAllStatesAPI===================",
      response
    );
  } catch (error) {
    console.log(error);
    yield put(setAllStates(error));
  }
}

function* superAdminDeleteStateAPI(action) {
  try {
    const response = yield call(DeleteState, action.payload);
    yield put(setDeleteStateById(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log(error);
    yield put(setDeleteStateById(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetStatesByNameAPI(action) {
  try {
    const response = yield call(FilterStatesByName, action.payload);
    yield put(setFilteredStatesByName(response));
    console.log("Response in saga============", response);
  } catch (error) {
    console.log(error);
    yield put(setFilteredStatesByName(error));
  }
}

function* superAdminGetStatesByTypeAPI(action) {
  try {
    const response = yield call(FilterStatesByType, action.payload);
    yield put(setFilteredStatesByType(response));
    console.log("Response in saga============", response);
  } catch (error) {
    console.log(error);
    yield put(setFilteredStatesByType(error));
  }
}

function* superAdminGetStatesByLicenseAPI(action) {
  try {
    const response = yield call(FilterStatesByLicense, action.payload);
    yield put(setFilteredStatesByLicense(response));
    console.log("Response in saga============", response);
  } catch (error) {
    console.log(error);
    yield put(setFilteredStatesByLicense(error));
  }
}

function* superAdminAddAdminUserAPI(action) {
  try {
    const response = yield call(AddAdminUser, action.payload);
    yield put(setAdminUser(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log(error);
    yield put(setAdminUser(error));
    yield put(setMessage(response?.data?.message));
  }
}

function* superAdminDeleteCMSContentById(action) {
  try {
    const response = yield call(DeleteCMSContentById, action.payload);
    yield put(setDeletedCMSContentById(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log(error);
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminEditTeacherInfoById(action) {
  try {
    const response = yield call(EditTeacherUser, action.payload);
    yield put(setEditTeacherInfoById(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    yield put(setEditTeacherInfoById(error));
    yield put(setMessage(response?.data?.message));
  }
}

function* superAdminGetAllSchoolsAPI(action) {
  try {
    const response = yield call(getSchoolsApi, action.payload);
    yield put(setAllSchools(response));
  } catch (error) {
    yield put(setAllSchools(error));
    console.log(error);
  }
}

function* superAdminGetAllTeachersAPI(action) {
  console.log("superAdminGetAllteachersAPI=========action", action);
  try {
    const response = yield call(getTeachersAPI, action.payload);
    yield put(setAllTeachers(response));
  } catch (error) {
    yield put(setAllTeachers(error));
    console.log(error);
  }
}

function* superAdminGetAdminByDistrictID(action) {
  try {
    const response = yield call(getAdminByDistrictAPI, action.payload);
    yield put(setDistrictAdminById(response));
  } catch (error) {
    yield put(setDistrictAdminById(error));
    console.log("=============superAdminGetAdminByDistrictAPI error", error);
  }
}

function* superAdminGetSchoolsbyDistrictId(action) {
  try {
    const response = yield call(getSchoolsByDistrictIDAPI, action.payload);
    console.log(
      "==========response==========superAdminGetSchoolsbyDistrictId",
      response
    );
    yield put(setSchoolsByDistrictId(response));
  } catch (error) {
    yield put(setSchoolsByDistrictId(error));
    console.log("=============superAdminGetAdminByDistrictAPI error", error);
  }
}

function* superAdminGetDistrictsByFilter(action) {
  try {
    const response = yield call(getDistrictByFilterAPI, action.payload);
    yield put(setDistrictsByFilter(response));
  } catch (error) {
    yield put(setDistrictsByFilter(response));
    console.log("=============superAdminGetDistrictsByFilter error", error);
  }
}

function* superAdminGetUpdatedSchoolByDistrictId(action) {
  try {
    const response = yield call(updateSchoolById, action.payload);
    yield put(setUpdatedSchoolById(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    yield put(setUpdatedSchoolById(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminAssignAdminToDistrict(action) {
  try {
    const response = yield call(AssignAdminToDistrictById, action.payload);
    yield put(setAdminToDistrict(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    yield put(setAdminToDistrict(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminUpdateAdminUserById(action) {
  console.log("superAdminUpdateAdminUserById==", action);
  try {
    const response = yield call(updateAdminUsersById, action.payload);
    yield put(setUpdatedAdminUser(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("============superAdminGetUpdateUserById", error);
    yield put(setUpdatedAdminUser(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetDeleteAdminById(action) {
  console.log("superAdminGetDeleteAdminById==", action);
  try {
    const response = yield call(deleteAdminUserById, action.payload);
    yield put(setDeletedAdminUser(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("============superAdminGetDeleteAdminById", error);
    yield put(setDeletedAdminUser(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetAllSchoolAdminsBasedOnSchoolId(action) {
  try {
    const response = yield call(GetSchoolAdminsBySchoolId, action.payload);
    yield put(setSchoolAdmins(response));
  } catch (error) {
    console.log("============superAdminGetDeleteAdminById", error);
    yield put(setSchoolAdmins(error));
  }
}

function* superAdminGetManageUsersData(action) {
  try {
    const response = yield call(getManageUsersData, action.payload);
    yield put(setManageUsersData(response));
  } catch (error) {
    console.log("============superAdminGetManageUsersData", error);
    yield put(setManageUsersData(error));
  }
}

function* superAdminGetAllAdminPrivileges(action) {
  try {
    const response = yield call(GetAllAdminPrivileges, action.payload);
    yield put(setRolesPrivilegesData(response));
  } catch (error) {
    console.log("============superAdminGetAllAdminPrivileges", error);
    yield put(setRolesPrivilegesData(error));
  }
}

function* superAdminGetHelpDeskPrivileges(action) {
  try {
    const response = yield call(GetHelpDeskPrivileges, action.payload);
    yield put(setHelpDeskPrivielgesData(response));
  } catch (error) {
    console.log("============superAdminGetAllAdminPrivileges", error);
    yield put(setHelpDeskPrivielgesData(error));
  }
}

function* superAdminGetTeachersAndSchoolsByDistrictId(action) {
  try {
    const response = yield call(
      GetTeachersAndSchoolsByDistrictId,
      action.payload
    );
    yield put(setTeachersAndSchoolsByDistrictId(response));
  } catch (error) {
    console.log(
      "============superAdminGetTeachersAndSchoolsByDistrictId",
      error
    );
    yield put(setTeachersAndSchoolsByDistrictId(error));
  }
}

function* superAdminGetCMSAssessmentsListAPICall(action) {
  try {
    const response = yield call(GetCMSAssessmentsList, action.payload);
    yield put(setCMSAssessmentsList(response));
  } catch (error) {
    console.log("============superAdminGetCMSAssessmentsListAPICall", error);
    yield put(setCMSAssessmentsList(error));
  }
}

function* superAdminGetCMSTestsListAPICall(action) {
  try {
    const response = yield call(GetCMSTestsList, action.payload);
    yield put(setCMSTestsLists(response));
  } catch (error) {
    console.log("============superAdminGetCMSTestsListAPICall", error);
    yield put(setCMSTestsLists(error));
  }
}

function* superAdminGetCMSAudienceListAPICall(action) {
  try {
    const response = yield call(GetCMSAudienceList, action.payload);
    yield put(setCMSAudienceList(response));
  } catch (error) {
    console.log("============superAdminGetCMSTestsListAPICall", error);
    yield put(setCMSAudienceList(error));
  }
}

function* superAdminGetUsersDataById(action) {
  try {
    const response = yield call(GetUsersDataById, action.payload);
    yield put(setUsersById(response));
    console.log("user id by data response", response);
  } catch (error) {
    console.log("===============superAdminGetUsersDataById", error);
    yield put(setUsersById(error));
  }
}

function* superAdminUpdateSubjectStatusAPI(action) {
  try {
    const response = yield call(ActiveInactiveSubject, action.payload);
    yield put(setCMSSubjectStatus(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("Get CMS Subject Status=======error", error);
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetUpdatedCMSContent(action) {
  try {
    const response = yield call(UpdateCMSContent, action.payload);
    yield put(setUpdatedCMSContent(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("Get CMS Subject Status=======error", error);
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetRemovedSchoolData(action) {
  try {
    const response = yield call(RemoveSchool, action.payload);
    yield put(setRemovedSchool(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("Get CMS Subject Status=======error", error);
    yield put(setRemovedSchool(error));
    yield put(setMessage(response?.data?.message));
  }
}

function* superAdminGetAllSuperAdminsData(action) {
  try {
    const response = yield call(getAllSuperAdminsDataAPI, action.payload);
    yield put(setSuperAdmins(response));
  } catch (error) {
    console.log("get All superAdmins error response", error);
    yield put(setSuperAdmins(error));
    yield put(setMessage(error.response.data.message));
    yield put(setSuperAdmins([]));
  }
}

function* superAdminGetAllHelpDeskUsersData(action) {
  try {
    const response = yield call(getAllSuperAdminHelpDeskUsers, action.payload);
    yield put(setAllHelpDeskUsers(response));
  } catch (error) {
    console.log("get All help desk users error response", error);
    yield put(setAllHelpDeskUsers(error));
  }
}

function* superAdminDeleteAdminOrHelpDesk(action) {
  try {
    const response = yield call(deleteAdminOrHelpDesk, action.payload);
    yield put(setDeletedAdminOrHelpDeskData(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("error === ", error);
    yield put(setDeletedAdminOrHelpDeskData(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}
function* superAdminGetLicensesFundersList(action) {
  try {
    const response = yield call(getFundersListAPI, action.payload);
    yield put(setFundersList(response));
  } catch (error) {
    console.log("error === ", error);
    yield put(setFundersList(error));
  }
}

function* superAdminCreateLicense(action) {
  console.log("payload", action.payload);
  try {
    const response = yield call(createLicenseAPI, action.payload);
    yield put(setCreatedLicense(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("error === ", error);
    yield put(setCreatedLicense(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetAllLicenses(action) {
  try {
    const response = yield call(getLicensesList, action.payload);
    console.log("response from getAllLicenses", response);
    yield put(setLicenseList(response));
  } catch (error) {
    console.log("error === ", error);
    yield put(setLicenseList(error));
  }
}

function* superAdminGetLicenseById(action) {
  try {
    const response = yield call(getLicenseDataById, action.payload);
    console.log("response from getAllLicenses", response);
    yield put(setLicenseById(response));
    // yield put(setCode(response?.data?.code));
    // yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("error === ", error);
    yield put(setLicenseById(error));
  }
}

function* superAdminUpdateLicenseById(action) {
  try {
    const response = yield call(updateLicenseById, action.payload);
    console.log("response from updateLicenseById", response);
    yield put(setUpdatedLicenseById(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("error === ", error);
    yield put(setUpdatedLicenseById(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetLicensedSchools(action) {
  try {
    const response = yield call(getLicensedSchoolData, action.payload);
    console.log("response from updateLicenseById", response);
    yield put(setLicensedSchoolInfo(response));
  } catch (error) {
    console.log("error === ", error);
    yield put(setLicensedSchoolInfo(error));
  }
}

function* superAdminGetDeletedLicenseById(action) {
  try {
    const response = yield call(deleteLicenseById, action.payload);
    console.log("response from deleteLicenseById", response);
    yield put(setDeletedLicenseById(response));
  } catch (error) {
    console.log("error === ", error);
    yield put(setDeletedLicenseById(error));
  }
}

function* superAdminGetDeletedSchoolLicenseById(action) {
  try {
    const response = yield call(deleteSchoolLicense, action.payload);
    console.log("response from deletSchoolLicense", response);
    yield put(setDeletedSchoolLicenseById(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("error === ", error);
    yield put(setDeletedSchoolLicenseById(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetSchoolsToAddLicense(action) {
  try {
    const response = yield call(getAllSchoolsToAddLicenseAPI, action.payload);
    console.log("response from getSchoolsToAddLicense", response);
    yield put(setSchoolsToAddLicense(response));
    // yield put(setCode(response?.data?.code));
    // yield put(setMessage(response?.data?.message));
  } catch (error) {
    console.log("error === ", error);
    yield put(setSchoolsToAddLicense(error));
    // yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminAddLicenseToSchool(action) {
  try {
    const response = yield call(addLicenseToSchoolAPI, action.payload);
    console.log("response", response);
    yield put(setLicenseToSchool(response));
    yield put(setCode(response?.data?.code));
    yield put(setMessage(response?.data?.message));
  } catch (error) {
    yield put(setLicenseToSchool(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminGetLicenseHistoryById(action) {
  try {
    const response = yield call(getLicenseHistoryByIdAPI, action.payload);
    console.log("response", response);
    yield put(setLicenseHistory(response));
  } catch (error) {
    yield put(setLicenseHistory(error));
    yield put(setMessage(error?.response?.data?.message));
  }
}

function* superAdminSaga() {
  yield takeEvery("superAdmin/getCMSContent", superAdminAddCMSContentAPI);
  yield takeEvery("superAdmin/GetResources", superAdminGetCMSResourcesAPI);
  yield takeEvery("superAdmin/getNewDistrict", superAdminAddDistrictAPI);
  yield takeEvery("superAdmin/getAllDistricts", superAdminGetAllDistrictsAPI);
  yield takeEvery("superAdmin/getUpdateDistrict", superAdminUpdateDistrictAPI);
  yield takeEvery("superAdmin/AddNewSubject", superAdminAddSubjectAPI);
  yield takeEvery("superAdmin/getAllSubjects", superAdminGetAllCMSSubjectsAPI);
  yield takeEvery(
    "superAdmin/getUpdatedCMSSubject",
    superAdminUpdateSubjectAPI
  );
  yield takeEvery("superAdmin/deleteCMSSubject", superAdminDeleteCMSSubjectAPI);
  yield takeEvery(
    "superAdmin/getResourceByCategoryStatus",
    superAdminGetResourceByCategoryStatus
  );
  yield takeEvery(
    "superAdmin/getResourceBySubject",
    superAdminGetResourceBySubject
  );
  yield takeEvery("superAdmin/getNewSSOConfig", superAdminAddNewSSOConfigAPI);
  yield takeEvery(
    "superAdmin/getAllSSOConfig",
    superAdminGetAllSSOConfigResultsAPI
  );
  yield takeEvery(
    "superAdmin/getSSOConfigByDistrict",
    superAdminGetAllSSOConfigResultsByDistrictAPI
  );
  yield takeEvery(
    "superAdmin/getSSOConfigByOAuth2",
    superAdminGetAllSSOConfigResultsByOAuth2API
  );

  yield takeEvery(
    "superAdmin/getDeleteSSOConfigById",
    superAdminDeleteSSOConfigByIdAPI
  );
  yield takeEvery(
    "superAdmin/getUpdatedSSOConfigById",
    superAdminUpdateSSOConfigByIdAPI
  );

  yield takeEvery("superAdmin/getDeletedDistrict", superAdminDeleteDistrictAPI);
  yield takeEvery(
    "superAdmin/getCMSResourceByTitle",
    superAdminGetCMSResultsByTitleAPI
  );

  yield takeEvery("superAdmin/getSchool", superAdminAddSchoolAPI);
  yield takeEvery("superAdmin/addState", superAdminAddStatesAPI);
  yield takeEvery("superAdmin/updateState", superAdminUpdateStateAPI);
  yield takeEvery("superAdmin/getAllStates", superAdminGetAllStatesAPI);
  yield takeEvery("superAdmin/DeleteStateById", superAdminDeleteStateAPI);
  yield takeEvery(
    "superAdmin/getFilteredStatesByName",
    superAdminGetStatesByNameAPI
  );
  yield takeEvery(
    "superAdmin/getFilteredStatesByType",
    superAdminGetStatesByTypeAPI
  );
  yield takeEvery(
    "superAdmin/getFilteredStatesByLicense",
    superAdminGetStatesByLicenseAPI
  );
  yield takeEvery("superAdmin/getAdminUser", superAdminAddAdminUserAPI);
  yield takeEvery(
    "superAdmin/getDeletedCMSContentById",
    superAdminDeleteCMSContentById
  );
  yield takeEvery(
    "superAdmin/getEditTeacherInfoById",
    superAdminEditTeacherInfoById
  );
  yield takeEvery("superAdmin/getAllSchools", superAdminGetAllSchoolsAPI);
  yield takeEvery("superAdmin/getAllTeachers", superAdminGetAllTeachersAPI);
  yield takeEvery(
    "superAdmin/getDistrictsAdminById",
    superAdminGetAdminByDistrictID
  );
  yield takeEvery(
    "superAdmin/getSchoolsByDistrictId",
    superAdminGetSchoolsbyDistrictId
  );
  yield takeEvery(
    "superAdmin/getDistrictsByFilter",
    superAdminGetDistrictsByFilter
  );
  yield takeEvery(
    "superAdmin/getUpdatedSchoolById",
    superAdminGetUpdatedSchoolByDistrictId
  );
  yield takeEvery(
    "superAdmin/getAdminToDistrict",
    superAdminAssignAdminToDistrict
  );
  yield takeEvery(
    "superAdmin/getUpdatedAdminUser",
    superAdminUpdateAdminUserById
  );
  yield takeEvery(
    "superAdmin/getDeletedAdminUser",
    superAdminGetDeleteAdminById
  );
  yield takeEvery(
    "superAdmin/getSchoolAdmins",
    superAdminGetAllSchoolAdminsBasedOnSchoolId
  );
  yield takeEvery(
    "superAdmin/getManageUsersData",
    superAdminGetManageUsersData
  );
  yield takeEvery(
    "superAdmin/getRolesPrivilegesData",
    superAdminGetAllAdminPrivileges
  );
  yield takeEvery(
    "superAdmin/getHelpDeskPrivilegesData",
    superAdminGetHelpDeskPrivileges
  );
  yield takeEvery(
    "superAdmin/getTeachersAndSchoolsByDistrict",
    superAdminGetTeachersAndSchoolsByDistrictId
  );
  yield takeEvery(
    "superAdmin/getCMSAssessmentsList",
    superAdminGetCMSAssessmentsListAPICall
  );
  yield takeEvery(
    "superAdmin/getCMSTestsLists",
    superAdminGetCMSTestsListAPICall
  );
  yield takeEvery(
    "superAdmin/getCMSAudienceList",
    superAdminGetCMSAudienceListAPICall
  );
  yield takeEvery("superAdmin/getUsersById", superAdminGetUsersDataById);
  yield takeEvery(
    "superAdmin/getCMSSubjectStatus",
    superAdminUpdateSubjectStatusAPI
  );
  yield takeEvery(
    "superAdmin/getUpdatedCMSContent",
    superAdminGetUpdatedCMSContent
  );
  yield takeEvery(
    "superAdmin/getRemovedSchool",
    superAdminGetRemovedSchoolData
  );
  yield takeEvery("superAdmin/getSuperAdmins", superAdminGetAllSuperAdminsData);
  yield takeEvery(
    "superAdmin/getAllHelpDeskUsers",
    superAdminGetAllHelpDeskUsersData
  );
  yield takeEvery(
    "superAdmin/getDeletedAdminOrHelpDeskData",
    superAdminDeleteAdminOrHelpDesk
  );
  yield takeEvery(
    "superAdmin/getFundersList",
    superAdminGetLicensesFundersList
  );
  yield takeEvery("superAdmin/createLicenses", superAdminCreateLicense);
  yield takeEvery("superAdmin/getLicenseList", superAdminGetAllLicenses);
  yield takeEvery("superAdmin/getLicenseById", superAdminGetLicenseById);
  yield takeEvery("superAdmin/updateLicenseById", superAdminUpdateLicenseById);
  yield takeEvery(
    "superAdmin/getLicensedSchoolInfo",
    superAdminGetLicensedSchools
  );
  yield takeEvery(
    "superAdmin/deleteLicenseById",
    superAdminGetDeletedLicenseById
  );
  yield takeEvery(
    "superAdmin/deleteSchoolLicenseById",
    superAdminGetDeletedSchoolLicenseById
  );
  yield takeEvery(
    "superAdmin/getSchoolsToAddLicense",
    superAdminGetSchoolsToAddLicense
  );
  yield takeEvery(
    "superAdmin/addLicenseToSchool",
    superAdminAddLicenseToSchool
  );
  yield takeEvery(
    "superAdmin/getLicenseHistory",
    superAdminGetLicenseHistoryById
  );
}

export default superAdminSaga;

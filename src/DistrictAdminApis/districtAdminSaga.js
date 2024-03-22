import { takeEvery, call, put } from "redux-saga/effects";
// import { setLoading, setResponse } from "../features/teacher/teacherSlice";
import {
  setLoading,
  setEmailSettings,
  getEmailSettings,
  setMandateData,
  setTestItemsList,
  setAddMandate,
  setUpdateMandate,
  getMandatesData,
  setMandatesData,
  setGetDistrictForDistrictAdminResponse,
  setRolesAndPrivilagesByRole,
  setUpdateRolesAndPrivilages,
  setDistrictStatistics,
  setAccessLogCounts,
  setUpdateDistrictForDistrictAdminResponse,
  setNotificationsRecievedList,
  setStudentsListForReports,
  setOverviewReportSummaryByClass,
} from "./districtAdminSlice";
import {
  accessLogCounts,
  districtStatistics,
  getDistrictForDistrictAdminApi,
  getEmails,
  getMandateData,
  getTestItems,
  postMandate,
  rolesAndPrivilagesByRole,
  updateMandate,
  updateRolesAndPrivilages,
  updateDistrictForDistrictAdminApi,
  recievedNotificationsApi,
  getStudentsListForReportsApi,
  overviewReportSummaryByClassApi,
} from "./district.service";
import { setTotalPages } from "../features/teacher/teacherSlice";
import { setCode, setMessage } from "../store/slices/profileSlice";

console.log("frommmmmmmm district sagaa");
function* getEmailEffect(action) {
  try {
    yield put(setLoading(true));
    const response = yield call(getEmails, action.payload);
    yield put(setEmailSettings(response.response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error, "login error from saga getSchoolsEffect");
  }
}

function* getMandatesDataApiEffect(action) {
  console.log("frommmmmmmmmmmmm sagaaaaaa distrc");
  try {
    yield put(setLoading(true));
    const response = yield call(getMandateData, action.payload);
    console.log(response.totalNoOfPages, "frommmmmmmmmmmm district");
    yield put(setMandateData(response.response));
    yield put(setTotalPages(response.totalNoOfPages));

    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setMessage(error.response.data.message));
  }
}

function* getTestItemsEffect(action) {
  console.log("frommmmmmmmmmmmm sagaaaaaa distrc");
  try {
    yield put(setLoading(true));
    const response = yield call(getTestItems, action.payload);
    console.log(response.response, "frommmmmmmmmmmm district");
    yield put(setTestItemsList(response.response));
    yield put(setLoading(false));

    // yield put(setResponse(response.response.code));
  } catch (error) {
    yield put(setLoading(false));
  }
}

function* postMandateEffect(action) {
  console.log("frommmmmmmmmmmmm sagaaaaaa distrc");
  try {
    yield put(setLoading(true));
    const response = yield call(postMandate, action.payload);
    console.log(response.code, "frommmmmmmmmmmm district");
    yield put(setCode(response.code));
    yield put(setMessage(response.message));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setMessage(error.response.data.code));
  }
}

function* updateMandateEffect(action) {
  console.log("frommmmmmmmmmmmm sagaaaaaa distrc");
  try {
    yield put(setLoading(true));
    const response = yield call(updateMandate, action.payload);
    console.log(response.data.code, "frommmmmmmmmmmm update api");
    yield put(setUpdateMandate(response));
    yield put(setCode(response.data.code));
    yield put(setMessage(response.data.message));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setMessage(error.response.data.code));
  }
}

function* rolesAndPrivilagesByRoleEffect(action) {
  console.log("frommmmmmmmmmmmm sagaaaaaa distrc provilage");
  try {
    yield put(setLoading(true));
    const response = yield call(rolesAndPrivilagesByRole, action.payload);
    console.log(response.data.code, "frommmmmmmmmmmm update api");
    yield put(setRolesAndPrivilagesByRole(response.data.response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
  }
}
function* updateDistrictForDistrictAdminApiCall(action) {
  try {
    yield put(setLoading(true));
    const response = yield call(
      updateDistrictForDistrictAdminApi,
      action.payload
    );

    yield put(setUpdateDistrictForDistrictAdminResponse(response));

    console.log(response, "from 134");
    yield put(setCode(response.data.code));

    yield put(setMessage(response.data.message));

    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
    yield put(setMessage(error.response.data.message));
  }
}

function* updateRolesAndPrivilagesEffect(action) {
  console.log("frommmmmmmmmmmmm sagaaaaaa distrc");
  try {
    yield put(setLoading(true));
    const response = yield call(updateRolesAndPrivilages, action.payload);
    console.log(response.data.code, "frommmmmmmmmmmm update api");
    yield put(setUpdateRolesAndPrivilages(response));
  } catch (error) {
    yield put(setLoading(false));
  }
}

function* districtStatisticsEffect(action) {
  console.log("frommmmmmmmmmmmm sagaaaaaa distrc");
  try {
    yield put(setLoading(true));
    const response = yield call(districtStatistics, action.payload);
    console.log(response, "frommmmmmmmmmmm update api");
    yield put(setDistrictStatistics(response.data.response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setMessage(error.response.data.message));
  }
}

function* accessLogCountsEffect(action) {
  console.log("frommmmmmmmmmmmm sagaaaaaa distrc");
  try {
    yield put(setLoading(true));
    const response = yield call(accessLogCounts, action.payload);
    console.log(response, "frommmmmmmmmmmm update api");
    yield put(setAccessLogCounts(response.data.response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setMessage(error.response.data.message));
  }
}

function* getDistrictForDistrictAdminApiEffect(action) {
  try {
    yield put(setLoading(true));
    const response = yield call(getDistrictForDistrictAdminApi, action.payload);

    yield put(setGetDistrictForDistrictAdminResponse(response?.data?.response));

    console.log(response, "iam from getDistrictForDistrictAdminApi response");
    yield put(setLoading(false));
  } catch (error) {
    console.error("error");
    yield put(setLoading(false));
    yield put(setMessage(error.response.data.message));
    yield put(setGetDistrictForDistrictAdminResponse([]));
  }
}

function* getRecievedNotificationsApiEffect(action) {
  try {
    yield put(setLoading(true));

    const response = yield call(recievedNotificationsApi, action.payload);

    yield put(setNotificationsRecievedList(response?.data?.response));

    console.log(
      response,
      "iam from getRecievedNotificationsApiEffect response"
    );
    yield put(setLoading(false));
  } catch (error) {
    console.error("error");
    yield put(setLoading(false));
    yield put(setMessage(error.response.data.message));
  }
}

function* getStudentsListForReportsApiEffect(action) {
  try {
    const response = yield call(getStudentsListForReportsApi, action.payload);

    yield put(setStudentsListForReports(response?.data?.response));

    console.log(
      response,
      "iam from getStudentsListForReportsApiEffect response"
    );
  } catch (error) {
    console.error("error");
  }
}

function* getOverviewReportSummaryByClassApiEffect(action) {
  try {
    const response = yield call(
      overviewReportSummaryByClassApi,
      action.payload
    );

    yield put(setOverviewReportSummaryByClass(response?.data?.response));

    console.log(
      response,
      "iam from getStudentsListForReportsApiEffect response"
    );
  } catch (error) {
    console.error("error");
  }
}

function* districtAdminSaga() {
  yield takeEvery("district/getEmailSettings", getEmailEffect);
  yield takeEvery("district/getMandatesData", getMandatesDataApiEffect);

  yield takeEvery(
    "district/getDistrictForDistrictAdminApiCall",
    getDistrictForDistrictAdminApiEffect
  );
  yield takeEvery("district/getEmailSettings", getEmailEffect);
  yield takeEvery("district/getMandateData", getMandatesDataApiEffect);
  yield takeEvery("district/getTestItemsList", getTestItemsEffect);
  yield takeEvery("district/postMandate", postMandateEffect);
  yield takeEvery("district/updateMandate", updateMandateEffect);
  yield takeEvery(
    "district/getRolesAndPrivilagesByRole",
    rolesAndPrivilagesByRoleEffect
  );
  yield takeEvery(
    "district/updateRolesAndPrivilages",
    updateRolesAndPrivilagesEffect
  );
  yield takeEvery("district/getDistrictStatistics", districtStatisticsEffect);
  yield takeEvery("district/getAccessLogCounts", accessLogCountsEffect);
  yield takeEvery(
    "district/getUpdateDistrictForDistrictAdminApiCall",
    updateDistrictForDistrictAdminApiCall
  );

  yield takeEvery(
    "district/getNotificationsRecievedApiCall",
    getRecievedNotificationsApiEffect
  );

  yield takeEvery(
    "district/getStudentsListForReportsApiCall",
    getStudentsListForReportsApiEffect
  );

  yield takeEvery(
    "district/getOverviewReportSummaryByClassApiCall",
    getOverviewReportSummaryByClassApiEffect
  );
}

export default districtAdminSaga;

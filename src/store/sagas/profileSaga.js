import { all } from "axios";
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
  forgotPassword,
  forgotUserName,
  logOut,
  login,
  loginUser,
} from "../../APIS/auth.service";
import {
  getRecentResourcesByTest,
  getRecommendedSmartCoachAPI,
  smartCoachAPI,
  testSelectionAPI,
} from "../../APIS/SmartCoachAPIS/smartcoach.service";
import * as apiRequests from "../apiRequests/profileApiRequests";
import {
  getUser,
  setLoading,
  setLoadingOne,
  setLoadingTwo,
  setUser,
  getUserRole,
  setToken,
  setUserRole,
  setSelectedRole,
  setUserId,
  setSmartCoachResponse,
  setTestSelectionResponse,
  setUserData,
  setLogOutResponse,
  setRecentResourcesByTest,
  setLoggedInUserDetails,
  setLoggedInUserReportDetails,
  setForgotUserName,
  setForgotPassword,
  setErrorResponse,
  setResponse,
  setMessage,
  setCode,
} from "../slices/profileSlice";
import { studentReportApi } from "../../APIS/Student/fitnessgram/fitness.service";

function* getUserEffect(action) {
  try {
    console.log("Action++++++++++++?", action.payload);
    yield put(setLoadingOne(true));
    const response = yield call(login, action.payload);
    yield put(setUser(response));
    yield put(setToken(response.response.token));
    console.log(response.response.uuid, "user id in profile saga=======>	");
    yield put(setUserId(response.response.uuid));
    yield put(setLoadingOne(false));
  } catch (error) {
    yield put(setLoadingOne(false));
    yield put(setMessage(error.response.data.message));
    console.log(error, "login error from saga getuserfeccet");
  }
}

function* getLoginUserEffect(action) {
  try {
    console.log("Action============>", action.payload);
    yield put(setLoadingTwo(true));
    const response = yield call(loginUser, action.payload);
    console.log(response.response.role, "from  login user saga");

    yield put(setUserRole(response?.response.role));
    console.log("first role in user roles======>", response?.response?.role[0]);
    yield put(setSelectedRole(response?.response?.role[0]));

    yield put(setLoggedInUserDetails(response?.response));

    console.log(
      response.response.role,
      "loginUser response from saga getuserfeccet"
    );
    yield put(setLoadingTwo(false));
  } catch (error) {
    yield put(setLoadingTwo(false));
    console.log(error, "loginUser error from saga getuserEffect");
  }
}

function* getUserDataEffect(action) {
  try {
    yield put(setLoading(true));

    // yield put(setLoadingTwo(true));
    const response = yield call(loginUser, action.payload);
    console.log(response, "for userData========>");

    yield put(setUserData(response.response));
    yield put(setLoading(false));
  } catch (error) {
    // yield put(setLoadingTwo(false));
    yield put(setLoading(false));
    yield put(setErrorResponse(error?.response?.data?.message));
  }
}

function* logOutEffect(action) {
  try {
    console.log("Action============>", action.payload);
    // yield put(setLoadingTwo(true));
    const response = yield call(logOut, action.payload);
    console.log(response.code, "from  logout user saga");

    yield put(setLogOutResponse(response.code));
  } catch (error) {
    // yield put(setLoadingTwo(false));
    console.log(error, "loginUser error from saga getuserEffect");
  }
}

function* forgotUserNameEffect(action) {
  try {
    console.log("Action============>", action.payload);
    // yield put(setLoadingTwo(true));
    const response = yield call(forgotUserName, action.payload);
    console.log(response.code, "from  logout user saga");

    yield put(setForgotUserName(response.code));
  } catch (error) {
    // yield put(setLoadingTwo(false));
    console.log(error, "loginUser error from saga getuserEffect");
  }
}

function* forgotPasswordEffect(action) {
  try {
    console.log("Action============>", action.payload);
    // yield put(setLoadingTwo(true));
    const response = yield call(forgotPassword, action.payload);
    console.log(response.code, "from  logout user saga");

    yield put(setForgotPassword(response.code));
  } catch (error) {
    // yield put(setLoadingTwo(false));
    console.log(error, "loginUser error from saga getuserEffect");
  }
}
function* getSmartCoachEffect(action) {
  console.log(action, "-----------[-------------[p[-plkinhjvbghvscghAC");

  try {
    console.log(action.payload, "action patload from api call");

    yield put(setLoading(true));
    const response = yield call(smartCoachAPI, action.payload);

    console.log(response, "smart get api response ====================>>>>>>>");
    yield put(setSmartCoachResponse(response));

    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));

    console.log(error, "smart coacvh get error");
  }
}

function* getTestSelectionEffect(action) {
  console.log(action, "iam action from test selection===============>>>>>>>>>");

  try {
    yield put(setLoading(true));
    const response = yield call(testSelectionAPI, action.payload);
    yield put(setTestSelectionResponse(response));
    console.log(response, "test selection api");
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
  }
}

function* getRecentResourcesByTestEffect(action) {
  console.log(action, "iam action from test selection===============>>>>>>>>>");

  try {
    yield put(setLoading(true));
    const response = yield call(getRecentResourcesByTest, action.payload);
    yield put(setRecentResourcesByTest(response.data.response));
  

    console.log(response, "test selection api");
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
    yield put(setMessage(error.response.data.message));
  }
}

function* getRecommendedSmartCoachAPIEffect(action) {
  console.log(action, "action from getRecommeneded api call");

  try {
    yield put(setLoading(true));
    const response = yield call(getRecommendedSmartCoachAPI, action.payload);
    yield put(setSmartCoachResponse(response));
    console.log(response, "getRecommeneded selection api");
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
    yield put(setMessage(error.response.data.message));

  }
}

function* studentReportApiEffect(action) {
  console.log(action, "action from getRecommeneded api call");

  try {
    yield put(setLoading(true));
    const response = yield call(studentReportApi, action.payload);

    console.log(response, "studentReportApi responseeeee");
    yield put(setLoggedInUserReportDetails(response?.data?.response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error);
  }
}

function* profileSaga() {
  yield takeEvery("profile/getUser", getUserEffect);
  yield takeEvery("profile/getUserRole", getLoginUserEffect);
  yield takeEvery("profile/getUserData", getUserDataEffect);

  yield takeEvery("profile/getSmartCoach", getSmartCoachEffect);
  yield takeEvery("profile/getTestSelection", getTestSelectionEffect);
  yield takeEvery("profile/logOut", logOutEffect);
  yield takeEvery("profile/getForgotUserName", forgotUserNameEffect);
  yield takeEvery("profile/getForgotPassword", forgotPasswordEffect);

  yield takeEvery(
    "profile/getRecommendedSmartCoachAPICall",
    getRecommendedSmartCoachAPIEffect
  );
  yield takeEvery(
    "profile/getRecentResourcesByTest",
    getRecentResourcesByTestEffect
  );

  yield takeEvery("profile/getStudentReportApiCall", studentReportApiEffect);
}
export default profileSaga;

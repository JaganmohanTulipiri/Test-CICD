import { call, put, takeLatest, takeEvery, take } from "redux-saga/effects";
import {
	getClasses,
	getSchools,
	getEventTestList,
	postEvent,
	agPostEvent,
	getRecommondedEventTestList,
	getRecentTestEventsList,
	getValidatedList,
	getPendingList,
	getEventsList,
	deleteEvent,
	getApproveStudentList,
	agDeleteEvent,
	getManageClasses,
	getFilteredManageClasses,
	getStudentsByClass,
	getAllUsers,
	getActivityGramEventsList,
	getActivityGramEventStudentList,
	getActivityLogEventList,
	alPostEvent,
	alDeleteEvent,
	getEventStudentList,
	getActivityLogClassList,
	getActivityLogStudentsList,
	getActivityLogFilterByStudent,
	fgStoreStudentData,
	getEventById,
	getAgEventById,
	getAlEventById,
	updateAlEventById,
	updateAgEventById,
	updateEventById,
	alStoreStudentData,
	getAlStudentResultById,
	getAgStudentResultById,
	agStoreStudentData,
	getMandateEventTestList,
	getFgEventsList,
	getClassesByEvent,
} from "../../APIS/Teacher/teacher.service";
import {
	setSchools,
	setLoading,
	setClasses,
	setEventTestList,
	setRecommondedEventTestList,
	setRecentEventTestList,
	setPendingList,
	setValidatedList,
	setEventsList,
	setApprovedStudentList,
	setManageClasses,
	setFilteredManageClasses,
	setStudentsByClass,
	setAllUsers,
	setActivityGramEventStudentList,
	setActivityGramEventsList,
	setActivityLogEventList,
	setEventStudentList,
	setActivityLogClassList,
	setActivityLogStudentsList,
	setActivityLogFilterByStudent,
	setResponseCode,
	setEventDataById,
	setAgEventDataById,
	setAlEventDataById,
	updateAlEvent,
	setAlStudentResultById,
	setAgStudentResultById,
	setResponse,
	setStoreDataResponse,
	setMandateEventTestList,
	setTotalPages,
	setFgEventsList,
	setClassesByEvent,
} from "../../features/teacher/teacherSlice";
import { setCode, setMessage } from "../slices/profileSlice";

function* getSchoolsEffect(action) {
	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getSchools, action.payload);
		console.log(response, "for get schools");
		yield put(setSchools(response.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
		yield put(setMessage(error?.response?.data?.message));
		yield put(setSchools([]));
	}
}

function* getClassesEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getClasses, action.payload);
		console.log(response, "for get schools");
		yield put(setClasses(response.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
		yield put(setMessage(error?.response?.data?.message));
		yield put(setClasses([]));
	}
}

function* getClassesByEventEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getClassesByEvent, action.payload);
		console.log(response, "for get schools");
		yield put(setClassesByEvent(response.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* getEventTestListEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getEventTestList, action.payload);
		console.log(response, "for get schools");
		yield put(setEventTestList(response.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* getEventListEffect(action) {
	console.log(action, "iam action======");

	console.log("filter events==========>");

	try {
		yield put(setLoading(true));
		const response = yield call(getEventsList, action.payload);
		console.log(response.data.response, "for get events");
		yield put(setEventsList(response.data.response));
		yield put(setTotalPages(response.data.totalNoOfPages));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		yield put(setMessage(error.response.data.message));
	}
}

function* getFgEventListEffect(action) {
	console.log(action, "iam action======");

	try {
		yield put(setLoading(true));
		const response = yield call(getFgEventsList, action.payload);
		console.log(response.data.response, "for get events");
		yield put(setFgEventsList(response.data.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* getEventByIdEffect(action) {
	console.log(action, "iam action======");

	try {
		yield put(setLoading(true));
		const response = yield call(getEventById, action.payload);
		console.log(response.data.response, "for get event by id");
		yield put(setEventDataById(response.data.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* getAgEventByIdEffect(action) {
	console.log(action, "iam action======");

	try {
		yield put(setLoading(true));
		const response = yield call(getAgEventById, action.payload);
		console.log(response.data.response, "for get event by id");
		yield put(setAgEventDataById(response.data.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* getAlEventByIdEffect(action) {
	console.log(action, "iam action======");

	try {
		yield put(setLoading(true));
		const response = yield call(getAlEventById, action.payload);
		console.log(response.data.response, "for get event by id");
		yield put(setAlEventDataById(response.data.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* getValidatedListEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getValidatedList, action.payload);

		console.log(response.data.response, "valideated response");
		yield put(setValidatedList(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga validated response");
		yield put(setMessage(error.response.data.message))
		yield put(setValidatedList([]));

	}
}

function* getPendingListEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getPendingList, action.payload);
		console.log(response, "for event test lists");
		console.log(response, "pending response from saga");
		yield put(setPendingList(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "form saga pending error");
	}
}

function* getRecentEventTestListEffect(action) {
	console.log(action, "iam action======");

	try {
		const response = yield call(getRecentTestEventsList, action.payload);
		console.log(response, "for recent event test lists");
		yield put(setRecentEventTestList(response.response));
	} catch (error) {
		console.log(error, "275");
		yield put(setMessage(error.response.data.message));
	}
}

function* getRecommondedEventTestListEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getRecommondedEventTestList, action.payload);
		console.log(response, "for recommonded event lists");
		yield put(setRecommondedEventTestList(response.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "293");
		yield put(setMessage(error.response.data.message));
	}
}

function* getMandateEventTestListEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getMandateEventTestList, action.payload);
		console.log(response, "for recommonded event lists");
		yield put(setMandateEventTestList(response.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* postEventEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(postEvent, action.payload);
		console.log(response, "for create event");
		yield put(setResponse(response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		// alert(error.response.data.message)
		console.log(error, "login error from saga create event in fg");
	}
}

function* agPostEventEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(agPostEvent, action.payload);
		console.log(response, "from 336");
		yield put(setCode(response.code));
		yield put(setMessage(response.message));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
		yield put(setMessage(error.response.data.message));
	}
}

function* alPostEventEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(alPostEvent, action.payload);
		console.log(response, "for create event");
		yield put(setCode(response.code));
		yield put(setMessage(response.message));
		yield put(setLoading(false));
		// yield put(setResponseCode(response.code));
	} catch (error) {
		yield put(setLoading(false));
		yield put(setMessage(error.response.data.message));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}
function* agUpdateEventEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(updateAgEventById, action.payload);
		console.log(response, "from 369");
		yield put(setCode(response.data.code));
		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(
			error.response.data.message,
			"login error from saga getSchoolsEffect",
		);

		yield put(setMessage(error.response.data.message));
	}
}
function* updateEventEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(updateEventById, action.payload);
		console.log(response, "from 378");
		yield put(setLoading(false));
		yield put(setResponse(response));

		// yield put(setResponse(response.data.message));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
		yield put(setMessage(error.response.data.message));
	}
}

function* alUpdateEventEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(updateAlEventById, action.payload);
		console.log(response, "for create event");
		yield put(setLoading(false));
		yield put(setCode(response.data.code));
		yield put(setMessage(response.data.message));

		console.log(response.code);
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
		yield put(setMessage(error.response.data.message));
	}
}

function* deleteEventEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(deleteEvent, action.payload);
		yield put(setResponseCode(response.code));
		console.log(response.code, "for create event");
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));

		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* agDeleteEventEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(agDeleteEvent, action.payload);
		yield put(setResponseCode(response.code));

		console.log(response.response, "for create event");
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* alDeleteEventEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(alDeleteEvent, action.payload);
		yield put(setResponseCode(response.code));

		console.log(response.response, "for create event");
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* getApprovedStudentListEffect(action) {
	console.log(action, "action");
	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getApproveStudentList, action.payload);
		console.log(response, "482");
		yield put(setCode(response.data.code));
		yield put(setApprovedStudentList(response));
		yield put(setMessage(response.data.message))

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga approvedlist");
	}
}

function* fgStoreStudentDataEffect(action) {
	console.log(action, "action");
	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(fgStoreStudentData, action.payload);
		console.log(response, "for create event");
		yield put(setStoreDataResponse(response.data.code));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga approvedlist");
	}
}

function* agStoreStudentDataEffect(action) {
	console.log(action, "action");
	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(agStoreStudentData, action.payload);

		console.log(response, "for ag store  event");
		yield put(setCode(response.data.code));
		yield put(setMessage(response.data.message));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga approvedlist");
		yield put(setMessage(error.response.data.message));
	}
}

function* alStoreStudentDataEffect(action) {
	console.log(action, "action");
	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(alStoreStudentData, action.payload);
		console.log(response, "for al store daata");
		yield put(setCode(response.data.code));
		yield put(setMessage(response.data.message));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga approvedlist");
		yield put(setMessage(error.response.data.message));
	}
}
function* getManageClassesEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getManageClasses, action.payload);
		console.log(response, "for get schools");
		yield put(setManageClasses(response.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* getFilteredManageClassesEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getFilteredManageClasses, action.payload);
		console.log(response, "from 76");
		yield put(setManageClasses(response));
		yield put(setTotalPages(response.totalNoOfPages));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));

		console.log(error, "553 frommm");
		yield put(setMessage(error.response.data.message));
		yield put(setManageClasses([]));
	}
}

function* getStudentsByClassEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getStudentsByClass, action.payload);
		console.log(response, "for get schools");
		yield put(setStudentsByClass(response.response));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
	}
}

function* getAllUsersEffect(action) {
	console.log(action, "iam action======");

	try {
		console.log("Action++++++++++++?", action.payload);
		yield put(setLoading(true));
		const response = yield call(getAllUsers, action.payload);
		console.log(response.response, "for get all users ");
		yield put(setAllUsers(response));
		console.log(response.totalNoOfPages, "from pages 584");
		yield put(setTotalPages(response.totalNoOfPages));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "login error from saga getSchoolsEffect");
		yield put(setMessage(error?.response?.data?.message));
		yield put(setAllUsers([]));
	}
}

function* getActivityGramEventsListEffect(action) {
	console.log(action, "hiiii");
	try {
		yield put(setLoading(true));
		const response = yield call(getActivityGramEventsList, action.payload);
		console.log(response, "from saga gram events list");
		yield put(setActivityGramEventsList(response.data.response));
		yield put(setTotalPages(response.data.totalNoOfPages));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "error from saga activity gram events list");
	}
}

function* getActivityGramEventStudentListEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(
			getActivityGramEventStudentList,
			action.payload,
		);
		console.log(response, "from saga ag student list");
		yield put(setActivityGramEventStudentList(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "from ag student list from saga");
		yield put(setMessage(error.response.data.message));
	}
}
function* getEventStudentListEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getEventStudentList, action.payload);
		console.log(response, "from saga event student list");
		yield put(setEventStudentList(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "from  student list from saga");
	}
}

function* getActivityLogEventListEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getActivityLogEventList, action.payload);
		console.log(response.data.response, "from saga log events");
		yield put(setActivityLogEventList(response.data.response));
		yield put(setTotalPages(response.data.totalNoOfPages));

		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		yield put(setMessage(error.response.data.message));

		console.log(error, "from error log list from saga");
	}
}

function* getActivityLogClassListEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getActivityLogClassList, action.payload);
		console.log(response.data.response, "from saga log class list");
		yield put(setActivityLogClassList(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "from saga log class list error");
	}
}

function* getActivityLogStudentsListEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getActivityLogStudentsList, action.payload);
		console.log(response, "errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
		yield put(setActivityLogStudentsList(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "from saga all log student list");
	}
}

function* getActivityLogFilterByStudentEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getActivityLogFilterByStudent, action.payload);
		console.log(response, "filterr data list");
		yield put(setActivityLogStudentsList(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "from saga ");
	}
}
function* getActivityLogStudentResultByIdEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getAlStudentResultById, action.payload);
		console.log(response, "reponse for student result");
		yield put(setAlStudentResultById(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "from saga all log student list");
		yield put(setMessage(error.response.data.message));
	}
}

function* getActivityGramStudentResultByIdEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getAgStudentResultById, action.payload);
		console.log(response, "reponse for student result");
		yield put(setAgStudentResultById(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "from saga all log student list");
		yield put(setMessage(error.response.data.message));
	}
}

function* teacherSaga() {
	yield takeEvery("teacher/getSchoolsList", getSchoolsEffect);
	yield takeEvery("teacher/getClassesList", getClassesEffect);
	yield takeEvery("teacher/getClassListByEvent", getClassesByEventEffect);
	yield takeEvery("teacher/getManageClassesList", getManageClassesEffect);
	yield takeEvery(
		"teacher/getFilteredManageClassesList",
		getFilteredManageClassesEffect,
	);
	yield takeEvery("teacher/getStudentListByClass", getStudentsByClassEffect);
	yield takeEvery("teacher/getEventTestList", getEventTestListEffect);
	yield takeEvery("teacher/getFgEventsList", getFgEventListEffect);
	yield takeEvery(
		"teacher/getRecentEventTestList",
		getRecentEventTestListEffect,
	);

	yield takeEvery(
		"teacher/getrecommondedEventTestList",
		getRecommondedEventTestListEffect,
	);
	yield takeEvery(
		"teacher/getMandateEventTestList",
		getMandateEventTestListEffect,
	);
	yield takeEvery("teacher/getValidatedList", getValidatedListEffect);
	yield takeEvery("teacher/getPendingList", getPendingListEffect);
	yield takeEvery("teacher/getEventsList", getEventListEffect);
	yield takeEvery("teacher/getEventStudentList", getEventStudentListEffect);

	yield takeEvery("teacher/postEventData", postEventEffect);
	yield takeEvery("teacher/agPostEventData", agPostEventEffect);
	yield takeEvery("teacher/alPostEventData", alPostEventEffect);

	yield takeEvery("teacher/deleteEventData", deleteEventEffect);
	yield takeEvery("teacher/agDeleteEventData", agDeleteEventEffect);
	yield takeEvery("teacher/alDeleteEventData", alDeleteEventEffect);

	yield takeEvery(
		"teacher/getActivityGramEventsList",
		getActivityGramEventsListEffect,
	);
	yield takeEvery(
		"teacher/getActivityGramEventStudentList",
		getActivityGramEventStudentListEffect,
	);
	yield takeEvery(
		"teacher/getApprovedStudentList",
		getApprovedStudentListEffect,
	);

	yield takeEvery("teacher/getAllUsersList", getAllUsersEffect);
	yield takeEvery(
		"teacher/getActivityLogEventList",
		getActivityLogEventListEffect,
	);
	yield takeEvery(
		"teacher/getActivityLogClassList",
		getActivityLogClassListEffect,
	);
	yield takeEvery(
		"teacher/getActivityLogStudentsList",
		getActivityLogStudentsListEffect,
	);
	yield takeEvery(
		"teacher/getActivityLogFilterByStudent",
		getActivityLogFilterByStudentEffect,
	);
	yield takeEvery("teacher/getEventDataById", getEventByIdEffect);
	yield takeEvery("teacher/getAgEventDataById", getAgEventByIdEffect);
	yield takeEvery("teacher/getAlEventDataById", getAlEventByIdEffect);
	yield takeEvery("teacher/updateAlEvent", alUpdateEventEffect);
	yield takeEvery("teacher/updateAgEvent", agUpdateEventEffect);
	yield takeEvery("teacher/updateEvent", updateEventEffect);
	yield takeEvery("teacher/fgStoreStudentData", fgStoreStudentDataEffect);
	yield takeEvery("teacher/agStoreStudentData", agStoreStudentDataEffect);

	yield takeEvery("teacher/alStoreStudentData", alStoreStudentDataEffect);
	yield takeEvery(
		"teacher/getAgStudentResultById",
		getActivityGramStudentResultByIdEffect,
	);

	yield takeEvery(
		"teacher/getAlStudentResultById",
		getActivityLogStudentResultByIdEffect,
	);
}

export default teacherSaga;

import { all } from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
	activityGramEvents,
	activityLogGetEvents,
} from "../../APIS/activitylog/activity.service";
import { setActivityGramEventsList } from "../slices/profileSlice";
import { setActivityLogEvents } from "../slices/profileSlice";

function* activityLogGetEventsList(action) {
	console.log(action, "activity log get events");

	try {
		const response = yield call(activityLogGetEvents, action.payload);
		yield put(setActivityLogEvents(response));
		console.log(response, "activity saga response");
	} catch (error) {
		console.log(error, "iam from activity saga error");
		yield put(setActivityLogEvents(error));
	}
}

function* activityGramEventsList(action) {
	try {
		const response = yield call(activityGramEvents, action.payload);

		yield put(setActivityGramEventsList(response));

		console.log(response, "iam response from actiitygram evnets list");
	} catch (error) {
		yield put(setActivityGramEventsList(response));

		console.log(error, "iam from student saga error");
	}
}

function* activitySaga() {
	yield takeEvery("profile/getActivityLogEvents", activityLogGetEventsList);
	yield takeEvery("profile/getActivityGramEventsList", activityGramEventsList);
}

export default activitySaga;

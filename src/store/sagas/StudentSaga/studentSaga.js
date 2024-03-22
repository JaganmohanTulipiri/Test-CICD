import { all } from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { activityTestRegularData } from "../../../APIS/Student/Activity/activity.service";
import { enterTestResults, updateStudentData } from "../../../APIS/Student/enterTestResults/testResults.service";
import { studentFitnessGram } from "../../../APIS/Student/fitnessgram/fitness.service";
import { setStudentFitnessGramEventsList, getTestResultsData, setEnterTestResultsResponse, setUpdateStudentResponse } from "../../slices/studentSlice/studentSlice";

function* studentFitnessGramListAPI(action) {
	console.log(action, "from student get event list call");

	try {		
		const response = yield call(studentFitnessGram, action.payload);
		yield put(setStudentFitnessGramEventsList(response.data.response));
		console.log(response, "iam from student saga response");
	} catch (error) {
		console.log(error, "iam from student saga error");
		yield put(setStudentFitnessGramEventsList(error));
	}
}



function* enterTestResultsAPI(action){

	console.log(action, "===============++++++++fffffffffffbkjsdnkjnfjk")

	try{

		const response = yield call(enterTestResults, action.payload)

		yield put(setEnterTestResultsResponse(response?.data))

		console.log(response, "iam response from enter test results")

	}

	catch(error){

		console.log(error)

		yield put(setEnterTestResultsResponse(error))


	}
}


function* updateStudentDataResultEffect(action){

	console.log(action, "===============++++++++fffffffffffbkjsdnkjnfjk")

	try{

		const response = yield call(updateStudentData, action.payload)

		yield put(setUpdateStudentResponse(response?.data))

		console.log(response, "iam response from enter test results")

	}

	catch(error){

		console.log(error)

		yield put(setUpdateStudentResponse(error))


	}


}


function* getActivityTestRegularDataEffect(action){


	try{

		const response = yield call(activityTestRegularData, action.payload)

		// yield put(setUpdateStudentResponse(response?.data))

		console.log(response, "iam response from getActivityTestRegularDataEffect")

	}

	catch(error){

		console.log(error)

		// yield put(setUpdateStudentResponse(error))


	}



}








function* studentSaga() {

	yield takeEvery("student/getStudentFitnessGramList", studentFitnessGramListAPI);

	yield takeEvery("student/getTestResultsData", enterTestResultsAPI)


	yield takeEvery("student/getUpdateStudentData", updateStudentDataResultEffect)

	yield takeEvery("student/getActivityTestRegularDataCall", getActivityTestRegularDataEffect)




}

export default studentSaga;

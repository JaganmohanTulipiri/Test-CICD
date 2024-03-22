import { createSlice } from "@reduxjs/toolkit";

const initialState = {

	studentFitnessGramEventsList: null,

	studentSelectedEventCard: null,

	enterTestResultsResponse: null,

	updateStudentResponse: null,

	isEditClicked: null,

	activityTestRegularDataResponse: null,



};

const studentSlice = createSlice({
	name: "student",
	initialState,
	reducers: {
		getStudentFitnessGramList: (state, action) => {},

		setStudentFitnessGramEventsList: (state, action) => {
			state.studentFitnessGramEventsList = action.payload;
		},

		setStudentSelectedEventCard: (state, action) => {

			state.studentSelectedEventCard = action.payload;
		},


		getTestResultsData: (state, action) => {

		},

		setEnterTestResultsResponse: (state, action) => {

			state.enterTestResultsResponse = action.payload;


		},

		setUpdateStudentResponse: (state, action) => {

			state.updateStudentResponse = action.payload;


		},

		getUpdateStudentData: (state, action) => {},


		setIsEditClicked: (state, action) => {

			state.isEditClicked = action.payload;


		},


		getActivityTestRegularDataCall: (state, action) => {},

		setActivityTestRegularDataResponse: (state, action) => {

			state.activityTestRegularDataResponse = action.payload;


		},



		

	},
});

const studentReducer = studentSlice.reducer;

export const { getStudentFitnessGramList, setStudentFitnessGramEventsList, setStudentSelectedEventCard, setEnterTestResultsResponse, getTestResultsData, setUpdateStudentResponse,
	getUpdateStudentData, setIsEditClicked, setActivityTestRegularDataResponse, getActivityTestRegularDataCall} =
	studentSlice.actions;

export default studentReducer;

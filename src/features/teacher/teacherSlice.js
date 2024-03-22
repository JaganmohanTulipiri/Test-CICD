import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	loading: false,
	error: false,

	schools: [],

	classes: [],
	classesByEvent: [],
	allUsers: [],
	response: "",
	deleteResponse: "",

	manageClasses: [],
	filteredManageClasses: [],
	studentsByClass: [],
	selectedAlEvent: {},

	eventTestList: [],
	fgEventsList: [],

	recentEventTestList: {},

	recommondedEventTestList: {},
	validatedList: null,
	pendingList: [],
	eventsList: [],
	eventDataById: {},
	agEventDataById: {},
	alEventDataById: {},

	eventStudentList: [],
	approveStudentList: [],
	activityGramEventsList: [],
	activityGramEventStudentList: [],
	activityLogEventList: [],
	activityLogClassList: [],
	activityLogStudentsList: [],
	activityLogFilterByStudent: [],
	agStudentResultById: {},
	alStudentResultById: {},
	responseCode: null,
	storeDataResponse: null,
	selectedEvent: {},
	mandateEventTestList: {},
	totalPages: "",

	token: null,
};

const teacherSlice = createSlice({
	name: "teacher",
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setSchools: (state, action) => {
			state.schools = action.payload;
		},
		setClasses: (state, action) => {
			state.classes = action.payload;
		},
		setClassesByEvent: (state, action) => {
			state.classesByEvent = action.payload;
		},
		setAllUsers: (state, action) => {
			state.allUsers = action.payload;
		},
		setResponseCode: (state, action) => {
			state.responseCode = action.payload;
		},
		setManageClasses: (state, action) => {
			state.manageClasses = action.payload;
		},
		setSelectedAlEvent: (state, action) => {
			state.selectedAlEvent = action.payload;
		},
		setStudentsByClass: (state, action) => {
			state.studentsByClass = action.payload;
		},
		setFilteredManageClasses: (state, action) => {
			state.filteredManageClasses = action.payload;
		},
		setEventTestList: (state, action) => {
			state.eventTestList = action.payload;
		},
		setFgEventsList: (state, action) => {
			state.fgEventsList = action.payload;
		},
		setRecentEventTestList: (state, action) => {
			state.recentEventTestList = action.payload;
		},
		setRecommondedEventTestList: (state, action) => {
			state.recommondedEventTestList = action.payload;
		},
		setMandateEventTestList: (state, action) => {
			state.mandateEventTestList = action.payload;
		},
		setValidatedList: (state, action) => {
			state.validatedList = action.payload;
		},
		setPendingList: (state, action) => {
			state.pendingList = action.payload;
		},
		setEventsList: (state, action) => {
			state.eventsList = action.payload;
		},
		setEventDataById: (state, action) => {
			state.eventDataById = action.payload;
		},
		setAgEventDataById: (state, action) => {
			state.agEventDataById = action.payload;
		},
		setAlEventDataById: (state, action) => {
			state.alEventDataById = action.payload;
		},
		setAgStudentResultById: (state, action) => {
			state.agStudentResultById = action.payload;
		},
		setAlStudentResultById: (state, action) => {
			state.alStudentResultById = action.payload;
		},
		setEventStudentList: (state, action) => {
			state.eventStudentList = action.payload;
		},
		setApprovedStudentList: (state, action) => {
			state.approveStudentList = action.payload;
		},
		setActivityGramEventsList: (state, action) => {
			state.activityGramEventsList = action.payload;
		},
		setActivityGramEventStudentList: (state, action) => {
			state.activityGramEventStudentList = action.payload;
		},
		setActivityLogEventList: (state, action) => {
			state.activityLogEventList = action.payload;
		},
		setActivityLogClassList: (state, action) => {
			state.activityLogClassList = action.payload;
		},
		setActivityLogStudentsList: (state, action) => {
			state.activityLogStudentsList = action.payload;
		},
		setActivityLogFilterByStudent: (state, action) => {
			state.activityLogFilterByStudent = action.payload;
		},
		setResponse: (state, action) => {
			state.response = action.payload;
		},
		setDeleteResponse: (state, action) => {
			state.deleteResponse = action.payload;
		},
		setStoreDataResponse: (state, action) => {
			state.storeDataResponse = action.payload;
		},
		setSelectedEvent: (state, action) => {
			state.selectedEvent = action.payload;
		},
		setTotalPages: (state, action) => {
			state.totalPages = action.payload;
		},
		getSchoolsList: (state, action) => {},
		getClassesList: (state, action) => {},
		getClassListByEvent: (state, action) => {},
		getAllUsersList: (state, action) => {},
		getManageClassesList: (state, action) => {},
		getStudentListByClass: (state, action) => {},
		getFilteredManageClassesList: (state, action) => {},
		getEventTestList: (state, action) => {},
		getRecentEventTestList: (state, action) => {},
		getrecommondedEventTestList: (state, action) => {},
		postEventData: (state, action) => {},
		agPostEventData: (state, action) => {},
		alPostEventData: (state, action) => {},
		deleteEventData: (state, action) => {},
		agDeleteEventData: (state, action) => {},
		alDeleteEventData: (state, action) => {},

		getValidatedList: (state, action) => {},
		getPendingList: (state, action) => {},
		getEventsList: (state, action) => {},
		getFgEventsList: (state, action) => {},
		getEventStudentList: (state, action) => {},

		getApprovedStudentList: (state, action) => {},
		getActivityGramEventsList: (state, action) => {},
		getActivityGramEventStudentList: (state, action) => {},
		getActivityLogEventList: (state, action) => {},
		getActivityLogClassList: (state, action) => {},
		getActivityLogStudentsList: (state, action) => {},
		getActivityLogFilterByStudent: (state, action) => {},
		fgStoreStudentData: (state, action) => {},
		agStoreStudentData: (state, action) => {},

		alStoreStudentData: (state, action) => {},
		getAgStudentResultById: (state, action) => {},
		getAlStudentResultById: (state, action) => {},
		getEventDataById: (state, action) => {},
		getAgEventDataById: (state, action) => {},
		getAlEventDataById: (state, action) => {},
		updateAlEvent: (state, action) => {},
		updateAgEvent: (state, action) => {},
		updateEvent: (state, action) => {},
		getMandateEventTestList: (state, action) => {},
	},
});

const teacherReducer = teacherSlice.reducer;
export const {
	setLoading,
	setSchools,
	setClasses,
	setClassesByEvent,
	setManageClasses,
	setFilteredManageClasses,
	setStudentsByClass,
	setEventTestList,
	setRecentEventTestList,
	setRecommondedEventTestList,
	setMandateEventTestList,
	setEventsList,
	setFgEventsList,
	getFgEventsList,
	setApprovedStudentList,
	setResponseCode,
	setAllUsers,
	setActivityGramEventStudentList,
	setEventStudentList,
	setEventDataById,
	setAgEventDataById,
	setAlEventDataById,
	setSelectedAlEvent,
	setAgStudentResultById,
	setAlStudentResultById,

	setResponse,
	getSchoolsList,
	getClassesList,
	getClassListByEvent,
	getFilteredManageClassesList,
	getAllUsersList,
	getManageClassesList,
	getStudentListByClass,
	getEventTestList,
	getRecentEventTestList,
	getEventStudentList,
	postEventData,
	agPostEventData,
	alPostEventData,
	deleteEventData,
	agDeleteEventData,
	alDeleteEventData,
	getrecommondedEventTestList,
	getMandateEventTestList,
	setValidatedList,
	setPendingList,
	getValidatedList,
	getPendingList,
	getEventsList,
	getApprovedStudentList,
	getActivityGramEventsList,
	setActivityGramEventsList,
	getActivityGramEventStudentList,
	getActivityLogEventList,
	setActivityLogEventList,
	getActivityLogClassList,
	setActivityLogClassList,
	setActivityLogStudentsList,
	getActivityLogStudentsList,
	getActivityLogFilterByStudent,
	setActivityLogFilterByStudent,
	fgStoreStudentData,
	getEventDataById,
	getAgEventDataById,
	getAlEventDataById,
	updateAlEvent,
	updateAgEvent,
	updateEvent,
	alStoreStudentData,
	getAgStudentResultById,
	getAlStudentResultById,
	agStoreStudentData,
	setStoreDataResponse,
	setSelectedEvent,
	setDeleteResponse,
	setTotalPages,
} = teacherSlice.actions;
export default teacherReducer;

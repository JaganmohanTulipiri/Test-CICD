import { call, put, takeLatest, takeEvery, take } from "redux-saga/effects";
import {
	getAddTeacherToManageClass,
	getaddTeacherToClassApi,
	getClassbasedonSchoolApi,
	getSchoolAdminGetAllClasses,
	getSchoolAdminStudentByClasses,
	getSchoolsApi,
	getSchoolWithSchoolAdminApi,
	getTeachersListByClassIdApi,
	getStudentDataSchoolAdminAPi,
	getTeachersBySchoolApi,
	getAddToStudentTable,
	getAddStudentToClassApi,
	getManageUsersAssignmentApi,
	requestToAddAdminForSchoolApi,
	updateSchoolApi,
	addAnnouncement,
	getManageAnnouncements,
	getAddClassToManageClasses,
	createSchoolAdminApi,
	editTeacherApi,
	getTeacherByIdApi,
	getUserRolesListForManageUsersApi,
	addUserApi,
	getTeachersBySchoolsApi,
	getStudentInfoBasedOnSchoolApi,
	updateClassByIDApi,
	getClassByIDApi,
	removeSchoolAdminFromSchoolApi,
	removeAdminFromDistrictApi,
	updateUsersApi,
	getCsvFileColumnNamesApi,
	getExportUsers,
	createMappingObjectApi,
	getMappingObjectListApi,
	removeMappingObjectsApi,
	getTablesByIdApi,
	getMapObjDetailsByIdApi,
	getImportHistoryApi,
	getImportSettingsApi,
	getExportClasses,
	addUpdateImportSettingsApi,
	rollBackImportDataApi,
	previewCsvApi,
	uploadCsvToDBApi,
	editUserProfileApi,
} from "../../APIS/SchoolAdmin/school.service";
import {
	setLoading,
	setSchoolAdminGetAllClasses,
	setSchoolAdminStudentByClasses,
	setSchoolAdminAddToTeacherClasses,
	setSchoolAdminGetStudentByClassResponse,
	setTeachersListByClassId,
	setSchoolWithSchoolAdmin,
	setTeachersBySchool,
	setAddStudentToAll,
	setAddTeacherToManageClassApiResponse,
	setClassbasedonSchool,
	setAddTeacherToClass,
	setAddStudentToClassApiResponse,
	setManageUsersAssignmentApiResponse,
	setRequestToAddAdminForSchool,
	setUpdateSchool,
	setManageAnnouncementData,
	setAddAnnouncementData,
	setAddClassToManageClassesApiResponse,
	setCreateSchoolAdmin,
	setEditTeacher,
	setGetTeacherById,
	setSchoolsForAdmin,
	setResponseCode,
	setAddResCode,
	setAddTeacherResCode,
	setUserRolesList,
	setTeachersListBySchools,
	setAddUsersResponse,
	setStudentInfoBasedOnSchool,
	setSelectedClassDetails,
	setUpdateClassByIdResponse,
	setRemoveSchoolAdminFromSchool,
	setRemoveAdminFromDistrict,
	setUpdateUsers,
	setCsvColumnsNames,
	setExportUsers,
	setCreateMappingObject,
	setGetMappingObjectList,
	setRemoveMappingObjects,
	setGetTablesById,
	setGetMapObjDetailsById,
	setGetImportHistory,
	setGetImportSettings,
	setExportClasses,
	setAddUpdateImportSetting,
	setRollBackImportData,
	setPreviewCsv,
	setUploadCsvToDB,
	setEditUserResponse,
} from "../../features/authentication/components/schoolAdmin/schoolAdminSlice";
import {
	setCode,
	setErrorResponse,
	setMessage,
	setResponse,
} from "../slices/profileSlice";
import { setTotalPages } from "../../features/teacher/teacherSlice";

function* getSchoolAdminGetAllClassesEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getSchoolAdminGetAllClasses, action.payload);
		console.log(response, "filterr data list");
		yield put(setSchoolAdminGetAllClasses(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "from saga ");
	}
}

function* getSchoolAdminStudentAPIByClassEffect(action) {
	console.log(action, "iam from clkass api from saga");

	try {
		yield put(setLoading(true));
		const response = yield call(getSchoolAdminStudentByClasses, action.payload);
		console.log(response, "classstudentsbyid");
		yield put(setSchoolAdminStudentByClasses(response.data.response));
		console.log("1233", response.totalNoOfPages);
		yield put(setTotalPages(response.data.totalNoOfPages));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "from saga ");
		yield put(setErrorResponse(error.response.data.message));
	}
}

function* getSchoolAdminTeacherToClassEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(
			getSchoolAdminAddToTeacherClass,
			action.payload,
		);
		console.log(response, "classstudentsbyid");
		yield put(setSchoolAdminAddToTeacherClasses(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "from saga ");
	}
}

function* getStudentSchoolAdminDataAPICALL(action) {
	try {
		const response = yield call(getStudentDataSchoolAdminAPi, action.payload);

		console.log("response syuccess fromget student calls  appi ", response);

		yield put(setSchoolAdminGetStudentByClassResponse(response));
	} catch (error) {
		console.log(error);
	}
}

function* getAddTeacherToManageClassesEffect(action) {
	try {
		yield put(setLoading(true));

		const response = yield call(getAddTeacherToManageClass, action.payload);
		console.log(response, "getAddTeacherToManageClassesEffect");

		yield put(setAddTeacherToManageClassApiResponse(response));
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));

		console.log(error, "getAddTeacherToManageClassesEffect ");
		yield put(setMessage(error.response.data.message));
	}
}

function* getAddStudentToClassApiEffect(action) {
	try {
		const response = yield call(getAddStudentToClassApi, action.payload);

		yield put(setAddStudentToClassApiResponse(response));
		yield put(setCode(response.data.code));
		yield put(setMessage(response.data.message));
	} catch (error) {
		yield put(setMessage(error.response.data.message));
	}
}

function* getManageUsersAssignmentApiEffect(action) {
	try {
		const response = yield call(getManageUsersAssignmentApi, action.payload);
		console.log(response, "getManageUsersAssignmentApiEffect");

		yield put(setManageUsersAssignmentApiResponse(response));
	} catch (error) {
		console.log(error, "getManageUsersAssignmentApiEffect ");
	}
}

function* getAddStudentsAllEffect(action) {
	try {
		const response = yield call(getAddToStudentTable, action.payload);
		console.log("response add to students", response);
		yield put(setAddStudentToAll(response));
	} catch (error) {
		console.log(error, "mainaerrorgetAll");
	}
}

function* getTeachersListByClassIdEffect(action) {
	try {
		yield put(setLoading(true));

		const response = yield call(getTeachersListByClassIdApi, action.payload);

		console.log(response, "iam respoonse from getSearchStudentsApiManage");

		yield put(setTeachersListByClassId(response?.data?.response));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error);
	}
}

function* getSchoolsApicallEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getSchoolsApi, action.payload);
		console.log(response, "iam from getSchoolsApi saga response");

		yield put(setSchoolsForAdmin(response?.data?.response));
		yield put(setTotalPages(response.data.totalNoOfPages));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from getSchoolsApi saga error");
		yield put(setLoading(false));
		yield put(setMessage(error.response.data.message));
		yield put(setSchoolsForAdmin([]));
	}
}

function* getSchoolWithSchoolAdminEffect(action) {
	try {
		yield put(setLoading(true));

		const response = yield call(getSchoolWithSchoolAdminApi, action.payload);
		yield put(setSchoolWithSchoolAdmin(response?.data?.response));

		console.log(response, "iam from getSchoolWithSchoolAdminApi saga response");
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from getSchoolWithSchoolAdminApi saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
		yield put(setSchoolWithSchoolAdmin({}));
	}
}

function* getTeachersBySchoolEffect(action) {
	console.log(action, "from getTeachersBySchoolApi saga");

	try {
		yield put(setLoading(true));
		const response = yield call(getTeachersBySchoolApi, action.payload);
		yield put(setTeachersBySchool(response?.data?.response));
		console.log(response, "iam from 267");
		yield put(setTotalPages(response.data.totalNoOfPages));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "iam from getTeachersBySchoolApi saga error");
		yield put(setMessage(error.response.data.message));
		yield put(setTeachersBySchool([]));
	}
}

function* getClassbasedonSchoolEffect(action) {
	console.log(action, "from getTeachersBySchoolApi saga");

	try {
		const response = yield call(getClassbasedonSchoolApi, action.payload);
		yield put(setClassbasedonSchool(response));
		console.log(response, "iam from getTeachersBySchoolApi saga response");
	} catch (error) {
		console.log(error, "iam from getTeachersBySchoolApi saga error");
	}
}

function* getAddTeacherToClassEffect(action) {
	console.log(action, "from getTeachersBySchoolApi saga");

	try {
		yield put(setLoading(true));
		const response = yield call(getaddTeacherToClassApi, action.payload);
		yield put(setAddTeacherToClass(response));
		yield put(setAddTeacherResCode(response?.data?.code));
		console.log(response, "iam from getTeachersBySchoolApi saga response");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error, "iam from getTeachersBySchoolApi saga error");
		yield put(setMessage(error.response.data.message));
	}
}

function* getRequestToAddAdminForSchoolEffect(action) {
	console.log(action, "from requestToAddAdminForSchoolApi saga");

	try {
		yield put(setLoading(true));
		const response = yield call(requestToAddAdminForSchoolApi, action.payload);
		console.log(response?.data?.code, "from sagaaaaaaaaaa");
		yield put(setRequestToAddAdminForSchool(response));
		// yield put(setResponseCode(response?.data?.code))
		yield put(setAddResCode(response?.data?.code));
		console.log(
			response,
			"iam from requestToAddAdminForSchoolApi saga response",
		);
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		yield put(setMessage(error.response.data.message));
	}
}

function* getUpdateSchoolApiEffect(action) {
	console.log(action, "from requestToAddAdminForSchoolApi saga");

	try {
		yield put(setLoading(true));

		const response = yield call(updateSchoolApi, action.payload);
		yield put(setUpdateSchool(response?.data));
		yield put(setCode(response?.data?.code));
		console.log(response, "iam from updateSchoolApi saga response");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from updateSchoolApi saga error");
		yield put(setLoading(false));
		yield put(setMessage(error.response.data.message));
	}
}

function* AddAnnouncementApi(action) {
	console.log(action, "from  add announcement post event list call");

	try {
		yield put(setLoading(true));
		const response = yield call(addAnnouncement, action.payload);
		yield put(setAddAnnouncementData(response));
		yield put(setResponseCode(response?.data?.code));
		console.log(response, "iam from announcement saga response");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));

		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from announcement saga error");
		yield put(setAddAnnouncementData(error));
		yield put(setLoading(false));
		yield put(setMessage(error.response.data.message));
	}
}

function* ManageAnnouncement(action) {
	console.log(action, "from  Manage announcement post event list call");

	try {
		yield put(setLoading(true));

		const response = yield call(getManageAnnouncements, action.payload);
		yield put(setManageAnnouncementData(response?.data?.response));
		console.log(response, "iam from Manageannouncement saga response");
		yield put(setTotalPages(response.data.totalNoOfPages));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from Manageannouncement saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
		yield put(setManageAnnouncementData([]));
	}
}

function* getAddClassToManageClassesEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getAddClassToManageClasses, action.payload);
		// yield put(setAddClassToManageClassesApiResponse(response));

		console.log(response, "from 365");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setAddClassToManageClassesApiResponse(response));

		yield put(setLoading(false));
	} catch (error) {
		console.log(
			error,
			"iam from add class from superadmin mange classes error",
		);
		yield put(setMessage(error.response.data.message));
	}
}

function* getCreateSchoolAdminApiEffect(action) {
	console.log(action, "from requestToAddAdminForSchoolApi saga");

	try {
		const response = yield call(createSchoolAdminApi, action.payload);
		yield put(setCreateSchoolAdmin(response));
		yield put(setAddResCode(response?.data?.code));
		console.log(response, "iam from updateSchoolApi saga response");
	} catch (error) {
		console.log(error, "iam from updateSchoolApi saga error");
	}
}

function* getEditTeacherApiEffect(action) {
	console.log(action, "from requestToAddAdminForSchoolApi saga");

	try {
		const response = yield call(editTeacherApi, action.payload);
		yield put(setEditTeacher(response));
		yield put(setResponseCode(response?.data?.code));
		console.log(response?.data?.code, "iam from updateSchoolApi saga response");
	} catch (error) {
		console.log(error, "iam from updateSchoolApi saga error");
	}
}

function* getTeacherByIdApiEffect(action) {
	console.log(action, "from requestToAddAdminForSchoolApi saga");

	try {
		const response = yield call(getTeacherByIdApi, action.payload);
		yield put(setGetTeacherById(response?.data?.response));
		console.log(response, "iam from updateSchoolApi saga response");
	} catch (error) {
		console.log(error, "iam from updateSchoolApi saga error");
	}
}

function* getUserRolesListForManageUsersApiEffect(action) {
	try {
		yield put(setLoading(true));

		const response = yield call(
			getUserRolesListForManageUsersApi,
			action.payload,
		);
		console.log(response, "iam from getUserRolesListForManageUsersApiEffect");

		yield put(setUserRolesList(response?.data?.response));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from getUserRolesListForManageUsersApiEffecterror");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
		yield put(setUserRolesList([]));
	}
}

function* addUsersApiEffect(action) {
	console.log(action, "from setAddUsers saga");

	try {
		yield put(setLoading(true));
		const response = yield call(addUserApi, action.payload);
		yield put(setAddUsersResponse(response));
		console.log(response, "iam from setAddUsers saga response");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from setAddUsers saga error");
		yield put(setLoading(false));
		yield put(setMessage(error.response.data.message));
	}
}

function* getTeachersBySchoolsApiEffect(action) {
	console.log(action, "action from get teachers by schoiols");

	try {
		const response = yield call(getTeachersBySchoolsApi, action.payload);

		yield put(setTeachersListBySchools(response?.data?.response));

		console.log(response, "from getTeachers by schools");
	} catch (error) {
		console.log(error);
	}
}

function* getStudentInfoBasedOnSchoolApiCall(action) {
	try {
		const response = yield call(getStudentInfoBasedOnSchoolApi, action.payload);

		yield put(setStudentInfoBasedOnSchool(response?.data?.response));

		console.log(response, "from getstudents by school uuid");
	} catch (error) {
		console.log(error);
	}
}

function* getClassByIDApiCallEffect(action) {
	try {
		yield put(setLoading(true));
		const response = yield call(getClassByIDApi, action.payload);

		yield put(setSelectedClassDetails(response?.data?.response));

		console.log(
			response,
			"from get class api by its iddd=================================== by school uuid",
		);
		yield put(setLoading(false));
	} catch (error) {
		yield put(setLoading(false));
		console.log(error);
		yield put(setErrorResponse(error.response.data.message));
	}
}

function* updateClassByIDApiCallEffect(action) {
	try {
		// yield put(setLoading(true));
		const response = yield call(updateClassByIDApi, action.payload);

		yield put(setUpdateClassByIdResponse(response));
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));

		console.log(response, "from getstudents by school uuid");
		// yield put(setLoading(false));
	} catch (error) {
		console.log(error);
		// yield put(setLoading(false));

		yield put(setMessage(error.response.data.message));
	}
}

function* removeSchoolAdminFromSchoolApiEffect(action) {
	console.log(
		action,
		"action from get removeSchoolAdminFromSchool by schoiols",
	);

	try {
		yield put(setLoading(true));

		const response = yield call(removeSchoolAdminFromSchoolApi, action.payload);

		yield put(setRemoveSchoolAdminFromSchool(response));

		console.log(response, "from removeSchoolAdminFromSchool by schools");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error);
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
	}
}

function* removeAdminFromDistrictApiEffect(action) {
	console.log(
		action,
		"action from get removeSchoolAdminFromSchool by schoiols",
	);

	try {
		yield put(setLoading(true));

		const response = yield call(removeAdminFromDistrictApi, action.payload);

		yield put(setRemoveAdminFromDistrict(response));

		console.log(response, "from removeSchoolAdminFromSchool by schools");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error);
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
	}
}

function* updateUsersApiEffect(action) {
	console.log(action, "action from get UpdateUsers by schoiols");

	try {
		yield put(setLoading(true));
		const response = yield call(updateUsersApi, action.payload);

		yield put(setUpdateUsers(response));

		console.log(response, "from UpdateUsers by schools");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error);
		yield put(setLoading(false));
		yield put(setMessage(error.response.data.message));
	}
}

function* getCsvFileColumnNamesEffect(action) {
	console.log(action, "from getCsvFileColumnNames saga");

	try {
		yield put(setLoading(true));

		const response = yield call(getCsvFileColumnNamesApi, action.payload);
		yield put(setCsvColumnsNames(response?.data?.response));
		console.log(response, "iam from getCsvFileColumnNames saga response");
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from getCsvFileColumnNames saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
		yield put(setCsvColumnsNames([]));
	}
}

function* getExportUsersEffect(action) {
	console.log(action, "action from get UpdateUsers by schoiols");

	try {
		const response = yield call(getExportUsers, action.payload);

		yield put(setExportUsers(response.data.response));

		console.log(response, "from EXPORT USERSS by SAGA");
	} catch (error) {
		console.log(error);
		yield put(setMessage(error?.response?.data?.message));
		yield put(setExportUsers([]));
	}
}

function* getExportClassesEffect(action) {
	console.log(action, "action from get UpdateUsers by schoiols");

	try {
		const response = yield call(getExportClasses, action.payload);

		yield put(setExportClasses(response.data.response));

		console.log(response, "from EXPORT classses by SAGA");
	} catch (error) {
		console.log(error);
	}
}

function* getCreateMappingObjectEffect(action) {
	console.log(action, "from CreateMappingObject saga");

	try {
		yield put(setLoading(true));

		const response = yield call(createMappingObjectApi, action.payload);
		yield put(setCreateMappingObject(response));
		console.log(response, "iam from CreateMappingObject saga response");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from CreateMappingObject saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
	}
}

function* getMappingObjectListEffect(action) {
	console.log(action, "from getMappingObjectList saga");

	try {
		yield put(setLoading(true));

		const response = yield call(getMappingObjectListApi, action.payload);
		yield put(setGetMappingObjectList(response?.data?.response));
		console.log(response, "iam from getMappingObjectList saga response");
		yield put(setTotalPages(response.data.totalNoOfPages));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from getMappingObjectList saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
		yield put(setGetMappingObjectList([]));
	}
}

function* removeMappingObjectsEffect(action) {
	console.log(action, "from setRemoveMappingObjects saga");

	try {
		yield put(setLoading(true));

		const response = yield call(removeMappingObjectsApi, action.payload);
		yield put(setRemoveMappingObjects(response));
		console.log(response, "iam from setRemoveMappingObjects saga response");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from setRemoveMappingObjects saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
	}
}

function* getTablesByIdEffect(action) {
	console.log(action, "from setGetTablesById saga");

	try {
		yield put(setLoading(true));

		const response = yield call(getTablesByIdApi, action.payload);
		yield put(setGetTablesById(response));
		console.log(response, "iam from setGetTablesById saga response");
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from setGetTablesById saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
		yield put(setGetTablesById([]));
	}
}

function* getMapObjDetailsByIdEffect(action) {
	console.log(action, "from setGetMapObjDetailsById saga");

	try {
		const response = yield call(getMapObjDetailsByIdApi, action.payload);
		yield put(setGetMapObjDetailsById(response));
		console.log(response, "iam from setGetMapObjDetailsById saga response");
	} catch (error) {
		console.log(error, "iam from setGetMapObjDetailsById saga error");
	}
}

function* getImportHistoryEffect(action) {
	console.log(action, "from setGetImportHistory saga");

	try {
		yield put(setLoading(true));

		const response = yield call(getImportHistoryApi, action.payload);
		yield put(setGetImportHistory(response));
		console.log(response, "iam from setGetImportHistory saga response");
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from setGetImportHistory saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
		yield put(setGetImportHistory([]));
	}
}

function* getImportSettingsEffect(action) {
	console.log(action, "from setGetImportSettings saga");

	try {
		yield put(setLoading(true));

		const response = yield call(getImportSettingsApi, action.payload);
		yield put(setGetImportSettings(response));
		console.log(response, "iam from setGetImportSettings saga response");
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from setGetImportSettings saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
		yield put(setGetImportSettings({}));
	}
}

function* addUpdateImportSettingsEffect(action) {
	console.log(action, "from setAddUpdateImportSetting saga");

	try {
		yield put(setLoading(true));

		const response = yield call(addUpdateImportSettingsApi, action.payload);
		yield put(setAddUpdateImportSetting(response));
		console.log(response, "iam from setAddUpdateImportSetting saga response");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from setAddUpdateImportSetting saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
	}
}

function* rollBackImportDataEffect(action) {
	console.log(action, "from setRollBackImportData saga");

	try {
		yield put(setLoading(true));

		const response = yield call(rollBackImportDataApi, action.payload);
		yield put(setRollBackImportData(response));
		console.log(response, "iam from setRollBackImportData saga response");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.response));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from setRollBackImportData saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
	}
}

function* previewCsvEffect(action) {
	console.log(action, "from setPreviewCsv saga");

	try {
		yield put(setLoading(true));

		const response = yield call(previewCsvApi, action.payload);
		yield put(setPreviewCsv(response));
		console.log(response, "iam from setPreviewCsv saga response");
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from setPreviewCsv saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
	}
}

function* uploadCsvToDBEffect(action) {
	console.log(action, "from uploadCsvToDB saga");

	try {
		yield put(setLoading(true));

		const response = yield call(uploadCsvToDBApi, action.payload);
		yield put(setUploadCsvToDB(response));
		console.log(response, "iam from uploadCsvToDB saga response");
		yield put(setCode(response.data.code));

		yield put(setMessage(response.data.message));
		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from uploadCsvToDB saga error");
		yield put(setLoading(false));
		yield put(setMessage(error?.response?.data?.message));
	}
}

function* editUserProfileApiEffect(action) {
	console.log(action, "from uploadCsvToDB saga");

	try {
		yield put(setLoading(true));

		const response = yield call(editUserProfileApi, action.payload);

		yield put(setEditUserResponse(response?.data));
		yield put(setCode(response.data.code));
		yield put(setMessage(response?.data?.message));

		console.log(response, "iam from editUserProfileApiEffect saga response");

		yield put(setLoading(false));
	} catch (error) {
		console.log(error, "iam from editUserProfileApiEffect saga error");
		yield put(setLoading(false));

		yield put(setMessage(error?.response?.data?.message));
	}
}

function* schoolAdminSaga() {
	yield takeEvery(
		"schoolAdmin/getSchoolAdminGetAllClasses",
		getSchoolAdminGetAllClassesEffect,
	);
	yield takeEvery(
		"schoolAdmin/getSchoolAdminStudentByClassesCall",
		getSchoolAdminStudentAPIByClassEffect,
	);
	yield takeEvery(
		"schoolAdmin/getSchoolAdminAddToTeacherClasses",
		getSchoolAdminTeacherToClassEffect,
	);

	yield takeEvery(
		"schoolAdmin/getSchoolAdminClassStudentCall",
		getStudentSchoolAdminDataAPICALL,
	);

	yield takeEvery(
		"schoolAdmin/getAddTeacherToManageClassApiCall",
		getAddTeacherToManageClassesEffect,
	);

	yield takeEvery(
		"schoolAdmin/getAddStudentToClassApiCall",
		getAddStudentToClassApiEffect,
	);

	yield takeEvery(
		"schoolAdmin/getManageUsersAssignmentApiCall",
		getManageUsersAssignmentApiEffect,
	);

	yield takeEvery(
		"schoolAdmin/getAddClassToManageClassesApiCall",
		getAddClassToManageClassesEffect,
	);

	yield takeEvery(
		"schoolAdmin/getTeachersListByClassIdApiCall",
		getTeachersListByClassIdEffect,
	);

	yield takeEvery("schoolAdmin/getSchoolsForAdmin", getSchoolsApicallEffect);

	yield takeEvery(
		"schoolAdmin/getSchoolWithSchoolAdmin",
		getSchoolWithSchoolAdminEffect,
	);

	yield takeEvery("schoolAdmin/getTeachersBySchool", getTeachersBySchoolEffect);
	yield takeEvery("schoolAdmin/getAddStudentToAll", getAddStudentsAllEffect);

	yield takeEvery(
		"schoolAdmin/getClassbasedonSchool",
		getClassbasedonSchoolEffect,
	);

	yield takeEvery(
		"schoolAdmin/getAddTeacherToClass",
		getAddTeacherToClassEffect,
	);

	yield takeEvery(
		"schoolAdmin/getRequestToAddAdminForSchool",
		getRequestToAddAdminForSchoolEffect,
	);

	yield takeEvery("schoolAdmin/getUpdateSchool", getUpdateSchoolApiEffect);

	yield takeEvery("schoolAdmin/getAccouncementData", AddAnnouncementApi);

	yield takeEvery("schoolAdmin/getManageAnnouncementData", ManageAnnouncement);

	yield takeEvery(
		"schoolAdmin/getCreateSchoolAdmin",
		getCreateSchoolAdminApiEffect,
	);

	yield takeEvery("schoolAdmin/getEditTeacher", getEditTeacherApiEffect);

	yield takeEvery("schoolAdmin/getGetTeacherById", getTeacherByIdApiEffect);

	yield takeEvery(
		"schoolAdmin/getUserRolesListForManageUsersApiCall",
		getUserRolesListForManageUsersApiEffect,
	);

	yield takeEvery("schoolAdmin/getAddUsers", addUsersApiEffect);

	yield takeEvery(
		"schoolAdmin/getTeachersBySchoolsApiCall",
		getTeachersBySchoolsApiEffect,
	);

	yield takeEvery(
		"schoolAdmin/getStudentInfoBasedOnParticularSchoolApi",
		getStudentInfoBasedOnSchoolApiCall,
	),
		yield takeEvery(
			"schoolAdmin/getClassByIDApiCall",
			getClassByIDApiCallEffect,
		);

	yield takeEvery(
		"schoolAdmin/getUpdateClassByIDApiCall",
		updateClassByIDApiCallEffect,
	);

	yield takeEvery(
		"schoolAdmin/getRemoveSchoolAdminFromSchool",
		removeSchoolAdminFromSchoolApiEffect,
	);

	yield takeEvery(
		"schoolAdmin/getRemoveAdminFromDistrict",
		removeAdminFromDistrictApiEffect,
	);

	yield takeEvery("schoolAdmin/getUpdateUsers", updateUsersApiEffect);

	yield takeEvery(
		"schoolAdmin/getCsvColumnsNames",
		getCsvFileColumnNamesEffect,
	);
	yield takeLatest("schoolAdmin/getExportUsers", getExportUsersEffect);
	yield takeLatest("schoolAdmin/getExportClasses", getExportClassesEffect);
	yield takeEvery(
		"schoolAdmin/getCreateMappingObject",
		getCreateMappingObjectEffect,
	);
	yield takeEvery(
		"schoolAdmin/getGetMappingObjectList",
		getMappingObjectListEffect,
	);
	yield takeEvery(
		"schoolAdmin/getRemoveMappingObjects",
		removeMappingObjectsEffect,
	);
	yield takeEvery("schoolAdmin/getGetTablesById", getTablesByIdEffect);
	yield takeEvery(
		"schoolAdmin/getGetMapObjDetailsById",
		getMapObjDetailsByIdEffect,
	);
	yield takeEvery("schoolAdmin/getGetImportHistory", getImportHistoryEffect);
	yield takeEvery("schoolAdmin/getGetImportSettings", getImportSettingsEffect);
	yield takeEvery(
		"schoolAdmin/getAddUpdateImportSettings",
		addUpdateImportSettingsEffect,
	);
	yield takeEvery(
		"schoolAdmin/getRollBackImportData",
		rollBackImportDataEffect,
	);
	yield takeEvery("schoolAdmin/getPreviewCsv", previewCsvEffect);
	yield takeEvery("schoolAdmin/getUploadCsvToDB", uploadCsvToDBEffect);

	yield takeEvery(
		"schoolAdmin/getEditUserProfileApiCall",
		editUserProfileApiEffect,
	);
}

export default schoolAdminSaga;

import { Route } from "react-router-dom";
import AddEditUser from "../../../components/AddEditUser";
import GreenLiteElementary from "../../../features/authentication/components/schoolAdmin/GreenLiteElementary";
import AddAnnouncement from "../../../features/authentication/components/schoolAdmin/Notifications/AddAnnouncement";
import NotificationsManage from "../../../features/authentication/components/schoolAdmin/Notifications/Manage";
import NotificationsReceived from "../../../features/authentication/components/schoolAdmin/Notifications/Recieved";
import DataManagementDashboard from "../../../features/DistrictAdmin/DataManagement/DataManagementDashboard";
import EndOFTermProcess from "../../../features/DistrictAdmin/DataManagement/EndOfTermProcess.jsx/EndOFTermProcess";

import CreateNewMapping from "../../../features/DistrictAdmin/DataManagement/Import/CreateNewMapping";
import Import from "../../../features/DistrictAdmin/DataManagement/Import/Import";
import ManageClasses from "../../../features/DistrictAdmin/DataManagement/ManageClasses/ManageClasses";
import AddUser from "../../../features/DistrictAdmin/DataManagement/ManageUsers/AddUser";
import ManageUsers from "../../../features/DistrictAdmin/DataManagement/ManageUsers/ManageUsers";
import DistrictStatistics from "../../../features/DistrictAdmin/District Statistics/DistrictStatistics";
import EmailSettings from "../../../features/DistrictAdmin/Settings/EmailSettings";
import AddMandates from "../../../features/DistrictAdmin/System Administrator/ManageMandates/AddMandates";
import ManageMandates from "../../../features/DistrictAdmin/System Administrator/ManageMandates/ManageMandates";
import RolesPrevilages from "../../../features/DistrictAdmin/System Administrator/RolesPrevilages/RolesPrevilages";
import District from "../../../features/DistrictAdmin/System Administrator/Schools/District";
import SystemAdminDashboard from "../../../features/DistrictAdmin/System Administrator/SystemAdminDashboard";
// import EditDistrictAdministrator from "../../../features/superAdmin/District/AddDistrict/EditDistrictAdministrator";

import AdminTableSkelton from "../../../components/GlobalComponents/Admin/AdminTableSkelton";
import AdminTestResultSkelton from "../../../components/GlobalComponents/Admin/AdminTestResultSkelton";
import ActivityGramTestEvents from "../../../components/GlobalComponents/Others/ActivityGram/ActivityGramTestEvents";
import ActivityGramStaticReport from "../../../components/GlobalComponents/Others/ActivityGramLite/ActivityGramStaticReport";
import FitnessGramClassScoreReport from "../../../components/GlobalComponents/Others/FitnessReport/FitnessGramClassScoreReport";
import FitnessGramCompletionReport from "../../../components/GlobalComponents/Others/FitnessReport/FitnessGramCompletionReport";
import FitnessGramStaticReport from "../../../components/GlobalComponents/Others/FitnessReport/FitnessGramStaticReport";
import AdminPopUp from "../../../components/GlobalComponents/Popups/AdminPopUp";
import ActivityGramStudentReport from "../../../components/GlobalComponents/Reports/ActivityReports/ActivityGramStudentReport";
import ActivityLogStudentReport from "../../../components/GlobalComponents/Reports/ActivityReports/ActivityLogStudentReport";
import ReportsOfStudents from "../../../components/GlobalComponents/Reports/StudentReports/ReportsOfStudents";
import ReportsPage from "../../../components/GlobalComponents/Reports/StudentReports/ReportsPage";
import StudentReportsTableData from "../../../components/GlobalComponents/Reports/StudentReports/StudentReportsTableData";
import RecommendedSmart from "../../../components/GlobalComponents/SmartCoach/RecommendedSmart";
import Class from "../../../features/authentication/components/schoolAdmin/GreenLite/Class";
import EditMapping from "../../../features/DistrictAdmin/DataManagement/Import/EditMapping";
import ErrorsPage from "../../../features/DistrictAdmin/DataManagement/Import/ErrorsPage";
import EditMandate from "../../../features/DistrictAdmin/System Administrator/ManageMandates/EditMandate";
import SystemUsage from "../../../features/DistrictAdmin/SystemUsage/SystemUsage";
import ActivityGramEvent from "../../../features/teacher/ActivityGram/ActivityGramEvent";
import AddStudentList from "../../../features/teacher/ActivityGram/AddStudentlist";
import AgCreateEvent from "../../../features/teacher/ActivityGram/AgCreateEvent";
import AgEditEvent from "../../../features/teacher/ActivityGram/AgEditEvent";
import StudentRegisterRoster from "../../../features/teacher/ActivityGram/StudenRegisterRoster";
import ActivityLog from "../../../features/teacher/ActivityLog/ActivityLog";
import AlCreateEvent from "../../../features/teacher/ActivityLog/AlCreateEvent";
import AlEditEvent from "../../../features/teacher/ActivityLog/AlEditEvent";
import AlEnterData from "../../../features/teacher/ActivityLog/AlEnterData";
import StudentRosterLog from "../../../features/teacher/ActivityLog/StudentRosterLog";
import Teacher from "../../../features/teacher/Fitness/Teacher";
import TestRegular from "../../../features/teacher/Fitness/TestRegular";
import CreateEvent from "../../../features/teacher/FitnessGram/CreateEvent";
import EditEvent from "../../../features/teacher/FitnessGram/EditEvent";
import Myaccount from "../../../features/teacher/Myaccount";
import NotificationsRecievedComponent from "../../../NotificationsGlobal/NotificationsRecievedComponent";
import TestRegularModal from "../../../features/teacher/Fitness/TestRegularModal";

const DistrictAdminRoute = [
	<Route index element={<DataManagementDashboard />} />,
	<Route path="data-management" element={<DataManagementDashboard />} />,

	<Route path="import" element={<Import />} />,
	<Route path="error" element={<ErrorsPage />} />,
	// <Route path="import" element={<Import />}>
	// 	<Route index element={<Import1 />} />
	// 	<Route path="import" element={<Import1 />} />
	// 	<Route path="mapping" element={<Mapping />} />
	// 	<Route path="mapping/create-new-mapping" element={<CreateNewMapping />} />
	// 	<Route path="history" element={<History />} />
	// </Route>,
	<Route path="create-new-mapping" element={<CreateNewMapping />} />,
	<Route path="edit/mapping/:id" element={<EditMapping />} />,

	<Route path="manage-classes" element={<ManageClasses />} />,
	<Route
		path="manage-classes/school/:schoolId/class/:classId"
		element={<Class />}
	/>,

	<Route path="class" element={<Class />} />,

	<Route path="end-of-term-process" element={<EndOFTermProcess />} />,

	//   schools elements

	<Route path="schools" element={<District />} />,
	// <Route path="school" element={<School />} />,

	// <Route
	// 	path="EditDistrictAdministrator"
	// 	element={<EditDistrictAdministrator />}
	// />,

	<Route path="system-admin" element={<SystemAdminDashboard />} />,
	<Route path="manage-mandates" element={<ManageMandates />} />,
	<Route path="add-mandates" element={<AddMandates />} />,
	<Route path="edit-mandates" element={<EditMandate />} />,
	<Route path="roles-privilages" element={<RolesPrevilages />} />,
	// <Route
	// 	path="StudentReportsTableData"
	// 	element={<StudentReportsTableData />}
	// />,

	<Route path="manage-users" element={<ManageUsers />} />,

	<Route path="edit/:role/:id" element={<AddUser />} />,

	<Route path="AddUser" element={<AddUser />} />,

	<Route path="add-edit-user" element={<AddEditUser />} />,
	<Route path="email-settings" element={<EmailSettings />} />,

	<Route path="district-statistics" element={<DistrictStatistics />} />,

	// <Route path="SmartCoach" element={<SmartCoachComponent />} />,

	<Route path="smartCoach" element={<RecommendedSmart />} />,
	<Route path=":eventType/smartCoach" element={<RecommendedSmart />} />,
	<Route
		path=":eventType/smartCoach/:eventId"
		element={<RecommendedSmart />}
	/>,

	// <Route path="reports" element={<Reports />} />,



	<Route path="reports" element={<ReportsPage />} />,

	<Route path="reports/fitness" element={<StudentReportsTableData />}>
	  <Route path="StudentReportsTableData" element={<ReportsOfStudents />} />,
	  <Route
		path="StudentReportsTableData/student/:studentUUID"
		element={<ReportsOfStudents />}
	  />
	  ,
	  <Route
		path="FitnessGramOverviewReport"
		element={<FitnessGramCompletionReport />}
	  />
	  ,
	  <Route
		path="reports/fitness/FitnessGramCompletionReport"
		element={<FitnessGramCompletionReport />}
	  />
	  ,
	  <Route
		path="reports/fitness/FitnessGramStaticReport"
		element={<FitnessGramStaticReport />}
	  />
	  ,
	  <Route
		path="reports/fitness/FitnessGramClassScoreReport"
		element={<FitnessGramClassScoreReport />}
	  />
	  ,
	</Route>,
  
	<Route
	  path="ActivityGramStudentReport"
	  element={<ActivityGramStudentReport />}
	/>,
  
	<Route
	  path="ActivityGramStaticReport"
	  element={<ActivityGramStaticReport />}
	/>,
  
	<Route
	  path="ActivityLogStudentReport"
	  element={<ActivityLogStudentReport />}
	/>,




	<Route path="testRegular/:eventId" element={<TestRegular />} />,


	<Route path="EndOFTermProcess" element={<EndOFTermProcess />} />,
	<Route path="RolesPrevilages" element={<RolesPrevilages />} />,
	<Route path="system_usage" element={<SystemUsage />} />,
	// <Route path="schools" element={<Schools />} />,

	<Route path="fitnessgram" element={<Teacher />} />,

	<Route path="adminPopUp" element={<AdminPopUp />} />,
	<Route path="events" element={<CreateEvent />} />,
	<Route path="fitnessgram/CreateEvent" element={<CreateEvent />} />,
	<Route path="edit-event" element={<EditEvent />} />,

	<Route path="adminTest" element={<AdminTestResultSkelton />} />,

	<Route path="adminTable/:eventId" element={<AdminTableSkelton />} />,
	<Route path="adminTest/:eventId" element={<AdminTestResultSkelton />} />,

	<Route path="ag-create-event" element={<AgCreateEvent />} />,
	<Route path="ag-edit-event" element={<AgEditEvent />} />,

	<Route path="ActivityGramEvent" element={<ActivityGramEvent />} />,
	<Route path="ActivityGramTestEvents" element={<ActivityGramTestEvents />} />,

	<Route path="ActivityLog" element={<ActivityLog />} />,

	<Route path="studentroster/:eventId" element={<StudentRegisterRoster />} />,
	<Route path="studentroster" element={<StudentRegisterRoster />} />,

	<Route
		path="studentroster/:eventId/student/:studentId"
		element={<AddStudentList />}
	/>,

	<Route
		path="activity-log-store-data/:challengeId"
		element={<StudentRosterLog />}
	/>,

	<Route path="al-create-event" element={<AlCreateEvent />} />,
	<Route path="al-edit-event" element={<AlEditEvent />} />,
	<Route
		path="activity-log-store-data/:challengeId/student/:studentId"
		element={<AlEnterData />}
	/>,

	<Route path="edit-event/:eventId" element={<EditEvent />} />,

	<Route path="ag-edit-event/:eventId" element={<AgEditEvent />} />,

	<Route path="al-edit-event/:eventId" element={<AlEditEvent />} />,

	<Route path="testRegular" element={<TestRegular />} />,

	<Route path="my-account" element={<Myaccount />} />,

	<Route path="school/:schoolId" element={<GreenLiteElementary />} />,

	// navigate(`/role/${selectedRole}/school/${schoolId}`);

	<Route path="Notifications" element={<NotificationsRecievedComponent />} />,

	<Route path="Notifications/AddAnnouncement" element={<AddAnnouncement />} />,
	<Route path="Notifications/Received" element={<NotificationsReceived />} />,
	<Route path="Notifications/Manage" element={<NotificationsManage />} />,



];

export default DistrictAdminRoute;

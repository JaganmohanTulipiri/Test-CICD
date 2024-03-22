import React from 'react';
import Admin from '../../../features/teacher/AdminTest/Admin';
// import CreateEvent from "../../../features/teacher/Fitness/subpages/CreateEvent";
import Teacher from '../../../features/teacher/Fitness/Teacher';
import SmartCoachComponent from '../../../components/GlobalComponents/SmartCoach/SmartCoachComponent';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminPopUp from '../../../components/GlobalComponents/Popups/AdminPopUp';
import CoachBoard from '../../../features/teacher/Fitness/subpages/Manage/CoachBoard';
import TestRegular from '../../../features/teacher/Fitness/TestRegular';
import AdminTableSkelton from '../../../components/GlobalComponents/Admin/AdminTableSkelton';
import EnterTestResultsPage from '../../../features/STUDENT/Student/EnterTestResults/EnterTestResultsPage';
import ActivityGramTestEvents from '../../../components/GlobalComponents/Others/ActivityGram/ActivityGramTestEvents';
import ActivityGramLiteTestEvents from '../../../components/GlobalComponents/Others/ActivityGramLite/ActivityGramLiteTestEvents';
import ActivityLogChallenges from '../../../components/GlobalComponents/Others/ActivityLog/ActivityLogChallenges';
import AdminTestResultSkelton from '../../../components/GlobalComponents/Admin/AdminTestResultSkelton';
// import ActivityLog from "../../../components/GlobalComponents/Others/ActivityLog/ActivityLog";
import TestLoggerActivity from '../../../components/GlobalComponents/Others/TestLoggerActivity';

import Reports from '../../../components/GlobalComponents/Reports/Reports';
import ActivityGramLiteStudentRoster from '../../../components/GlobalComponents/Others/ActivityGramLite/ActivityGramLiteStudentRoster';
import ActivityLogAssessmentLog from '../../../components/GlobalComponents/Others/ActivityLog/ActivityLogAssessmentLog';
import ActivityCreateElement from '../../../components/GlobalComponents/Others/ActivityGram/ActivityCreateElement';
import ActivityLiteStudentReport from '../../../components/GlobalComponents/Others/ActivityGramLite/ActivityLiteStudentReport';
import ActivityGramSummaryReport from '../../../components/GlobalComponents/Others/ActivityGramLite/  ActivityGramSummaryReport';
import ActivityGramStaticReport from '../../../components/GlobalComponents/Others/ActivityGramLite/ActivityGramStaticReport';
import FitnessGramStaticReport from '../../../components/GlobalComponents/Others/FitnessReport/FitnessGramStaticReport';
import FitnessGramClassScoreReport from '../../../components/GlobalComponents/Others/FitnessReport/FitnessGramClassScoreReport';
import CreateEvent from '../../../features/teacher/FitnessGram/CreateEvent';
import CreateEventTeacher from '../../../features/teacher/Fitness/subpages/CreateEventTeacher';
import AgCreateEvent from '../../../features/teacher/ActivityGram/AgCreateEvent';
import ManageClasses from '../../../features/DistrictAdmin/DataManagement/ManageClasses/ManageClasses';
import ManageUsers from '../../../features/DistrictAdmin/DataManagement/ManageUsers/ManageUsers';
import ManageUser from '../../../features/DistrictAdmin/DataManagement/ManageUsers/ManageUser';
import StudentRegisterRoster from '../../../features/teacher/ActivityGram/StudenRegisterRoster';
import Myaccount from '../../../features/teacher/Myaccount';
import EditAccount from '../../../features/teacher/EditAccount';
import ActivityLog from '../../../features/teacher/ActivityLog/ActivityLog';
import AlCreateEvent from '../../../features/teacher/ActivityLog/AlCreateEvent';
import StudentRosterLog from '../../../features/teacher/ActivityLog/StudentRosterLog';
import ActivityGramEvent from '../../../features/teacher/ActivityGram/ActivityGramEvent';
import Schools from '../../../features/authentication/components/schoolAdmin/Schools';
import GreenLiteElementary from '../../../features/authentication/components/schoolAdmin/GreenLiteElementary';
import NavbarCardSkelton from '../../../components/GlobalComponents/NavbarCardSkelton';
import EnterStudentDataTable from '../../../features/STUDENT/Student/EnterTestResults/EnterStudentDataTable';
import ManageClassCard from '../../../features/DistrictAdmin/DataManagement/ManageClasses/ManageClassCard';
import Class from '../../../features/authentication/components/schoolAdmin/GreenLite/Class';
import AddUser from '../../../features/DistrictAdmin/DataManagement/ManageUsers/AddUser';
import EditStudentInformation from '../../../features/authentication/components/schoolAdmin/ManageClassesSchoolAdmin/EditStudentInformation';
import TestTable from '../../../features/teacher/AdminsterTest/TestTable';
import Import from '../../../features/DistrictAdmin/DataManagement/Import/Import';
import Notifications from '../../../features/Partners/Notifications';
import NotificationsReceived from '../../../features/authentication/components/schoolAdmin/Notifications/Recieved';
import NotificationsManage from '../../../features/authentication/components/schoolAdmin/Notifications/Manage';
import AddAnnouncement from '../../../features/authentication/components/schoolAdmin/Notifications/AddAnnouncement';
import CreateSchoolAdmin from '../../../features/authentication/components/schoolAdmin/CreateSchoolAdmin';
import ManageUSersView from '../../../features/authentication/components/schoolAdmin/ManageUsersView';
import EditTeacherInfo from '../../../features/authentication/components/schoolAdmin/EditTeacherInfo';
import EditEvent from '../../../features/teacher/FitnessGram/EditEvent';
import AgEditEvent from '../../../features/teacher/ActivityGram/AgEditEvent';
import AlEditEvent from '../../../features/teacher/ActivityLog/AlEditEvent';
import AlEnterData from '../../../features/teacher/ActivityLog/AlEnterData';
import AddStudentList from '../../../features/teacher/ActivityGram/AddStudentlist';
import SuccessModal from '../../../components/SuccessModal';
import AssignRole from '../../../features/DistrictAdmin/DataManagement/ManageUsers/SelectTabs/AssignRole';
import RecommendedSmart from '../../../components/GlobalComponents/SmartCoach/RecommendedSmart';
import CreateNewMapping from '../../../features/DistrictAdmin/DataManagement/Import/CreateNewMapping';
import StudentReportsTableData from '../../../components/GlobalComponents/Reports/StudentReports/StudentReportsTableData';
import FitnessGramStudentReport from '../../../features/Partners/Reports/FitnessGramStudentReport';
import NotificationsRecievedComponent from '../../../NotificationsGlobal/NotificationsRecievedComponent';
import FitnessGramOverviewReport from '../../../components/GlobalComponents/Others/FitnessReport/FitnessGramOverviewReport';
import FitnessGramCompletionReport from '../../../components/GlobalComponents/Others/FitnessReport/FitnessGramCompletionReport';
import EditMapping from '../../../features/DistrictAdmin/DataManagement/Import/EditMapping';
import ReportsPage from '../../../components/GlobalComponents/Reports/StudentReports/ReportsPage';
import StudentEventReportCard from '../../../components/GlobalComponents/Reports/StudentReports/StudentEventReportCard';
import ActivityLogStudentReport from '../../../components/GlobalComponents/Reports/ActivityReports/ActivityLogStudentReport';
import ActivityGramStudentReport from '../../../components/GlobalComponents/Reports/ActivityReports/ActivityGramStudentReport';
import ReportsOfStudents from '../../../components/GlobalComponents/Reports/StudentReports/ReportsOfStudents';

export const SchoolAdminRoute = [
  <Route index element={<Teacher />} />,
  <Route path='admin' element={<Admin />} />,
  // <Route path='smartCoach' element={<SmartCoachComponent />} />,

  <Route path='smartCoach' element={<RecommendedSmart />} />,
  <Route path=':eventType/smartCoach' element={<RecommendedSmart />} />,
  <Route
    path=':eventType/smartCoach/:eventId'
    element={<RecommendedSmart />}
  />,

  <Route path='create-new-mapping' element={<CreateNewMapping />} />,

  <Route path='adminPopUp' element={<AdminPopUp />} />,
  <Route path='CreateEvent' element={<CreateEvent />} />,
  <Route path='events' element={<CreateEvent />} />,
  <Route path='edit-event' element={<EditEvent />} />,

  <Route path='ag-create-event' element={<AgCreateEvent />} />,
  <Route path='manage-classes' element={<ManageClasses />} />,
  <Route path='manage-users' element={<ManageUsers />} />,

  <Route path='assign' element={<AssignRole />} />,

  <Route path='studentroster' element={<StudentRegisterRoster />} />,

  // <Route path="event" element={<CreateEvent />} />,
  <Route path='CoachBoard' element={<CoachBoard />} />,
  <Route path='adminTable' element={<AdminTableSkelton />} />,
  <Route path='adminTest' element={<AdminTestResultSkelton />} />,
  <Route path='adminTable/:eventId' element={<AdminTableSkelton />} />,
  <Route path='adminTest/:eventId' element={<AdminTestResultSkelton />} />,

  <Route path='testRegular' element={<TestRegular />} />,
  <Route path='ActivityGramTestEvents' element={<ActivityGramTestEvents />} />,
  <Route path='ActivityGramEvent' element={<ActivityGramEvent />} />,
  <Route
    path='ActivityGramLiteTestEvents'
    element={<ActivityGramLiteTestEvents />}
  />,
  // <Route
  //   path='StudentReportsTableData'
  //   element={<StudentReportsTableData />}
  // />,
  // <Route path="ActivityLogChallenges" element={<ActivityLogChallenges />} />,
  <Route path='ActivityLog' element={<ActivityLog />} />,
  // <Route path="ActivityLog" element={<ActivityLog />} />,
  <Route path='TestLoggerActivity' element={<TestLoggerActivity />} />,
  <Route path='ManageUser' element={<ManageUser />} />,









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


  





  <Route
    path='ActivityGramLiteStudentRoster'
    element={<ActivityGramLiteStudentRoster />}
  />,
  <Route
    path='ActivityLogAssessmentLog'
    element={<ActivityLogAssessmentLog />}
  />,
  <Route path='ActivityCreateElement' element={<ActivityCreateElement />} />,
  <Route
    path='ActivityLiteStudentReport'
    element={<ActivityLiteStudentReport />}
  />,
  <Route
    path='ActivityGramSummaryReport'
    element={<ActivityGramSummaryReport />}
  />,
  <Route
    path='ActivityGramStaticReport'
    element={<ActivityGramStaticReport />}
  />,
  <Route
    path='FitnessGramStaticReport'
    element={<FitnessGramStaticReport />}
  />,
  <Route
    path='FitnessGramStaticReport'
    element={<FitnessGramStaticReport />}
  />,
  <Route
    path='FitnessGramClassScoreReport'
    element={<FitnessGramClassScoreReport />}
  />,
  <Route
    path='FitnessGramCompletionReport'
    element={<FitnessGramCompletionReport />}
  />,
  <Route
    path='FitnessGramOverviewReport'
    element={<FitnessGramOverviewReport />}
  />,

  <Route path='CreateEventTeacher' element={<CreateEventTeacher />} />,

  <Route path='edit-account' element={<EditAccount />} />,
  <Route path='studentrosterlog' element={<StudentRosterLog />} />,

  <Route path='activityLog-createEvent' element={<AlCreateEvent />} />,
  <Route path='schools' element={<Schools />} />,
  // <Route path='GreenLiteElementary' element={<GreenLiteElementary />} />,
  <Route path='school/:schoolId' element={<GreenLiteElementary />} />,

  <Route path='NavbarCardSkelton' element={<NavbarCardSkelton />} />,
  <Route path='EnterStudentDataTable' element={<EnterStudentDataTable />} />,
  <Route path='ManageClassCard' element={<ManageClassCard />} />,

  <Route
    path='manage-classes/school/:schoolId/class/:classId'
    element={<Class />}
  />,
  <Route path='AddUser' element={<AddUser />} />,

  <Route path='edit/:role/:id' element={<AddUser />} />,
  <Route
    path='activity-log-store-data/:challengeId'
    element={<StudentRosterLog />}
  />,

  <Route path='al-create-event' element={<AlCreateEvent />} />,
  <Route path='al-edit-event' element={<AlEditEvent />} />,
  <Route path='ag-edit-event' element={<AgEditEvent />} />,

  <Route path='edit-event/:eventId' element={<EditEvent />} />,

  <Route path='ag-edit-event/:eventId' element={<AgEditEvent />} />,

  <Route path='al-edit-event/:eventId' element={<AlEditEvent />} />,

  <Route
    path='activity-log-store-data/:challengeId/student/:studentId'
    element={<AlEnterData />}
  />,
  <Route path='studentroster/:eventId' element={<StudentRegisterRoster />} />,
  <Route path='studentroster' element={<StudentRegisterRoster />} />,

  <Route
    path='studentroster/:eventId/student/:studentId'
    element={<AddStudentList />}
  />,

  <Route
    path=':userUUID/EditStudentInformation/:selectedStudentUUID'
    element={<EditStudentInformation />}
  />,

  <Route path='admin-table' element={<TestTable />} />,
  <Route path='my-account' element={<Myaccount />} />,
  <Route path='Import' element={<Import />} />,
  <Route path="edit/mapping/:id" element={<EditMapping />} />,
  // <Route path="Notifications" element={<Notifications />} />,

  <Route path='Notifications' element={<NotificationsRecievedComponent />} />,

  <Route path='createSchoolAdmin' element={<CreateSchoolAdmin />} />,
  <Route path='Notifications/AddAnnouncement' element={<AddAnnouncement />} />,
  <Route path='Notifications/Received' element={<NotificationsReceived />} />,
  <Route path='Notifications/Manage' element={<NotificationsManage />} />,
  <Route path='manageUsersView' element={<ManageUSersView />} />,
  <Route path='editTeacherInfo' element={<EditTeacherInfo />} />,
  <Route
    path='FitnessGramStudentReport'
    element={<FitnessGramStudentReport />}
  />,
];

import React from "react";
import SmartCoachComponent from "../../../components/GlobalComponents/SmartCoach/SmartCoachComponent";
import Admin from "../../../features/teacher/AdminTest/Admin";
// import CreateEvent from "../../../features/teacher/Fitness/subpages/CreateEvent";
import Teacher from "../../../features/teacher/Fitness/Teacher";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import CoachBoard from "../../../features/teacher/Fitness/subpages/Manage/CoachBoard";
import AdminTableSkelton from "../../../components/GlobalComponents/Admin/AdminTableSkelton";
import AdminTestResultSkelton from "../../../components/GlobalComponents/Admin/AdminTestResultSkelton";
// import ActivityLog from "../../../components/GlobalComponents/Others/ActivityLog/ActivityLog";
import TestLoggerActivity from "../../../components/GlobalComponents/Others/TestLoggerActivity";
import Reports from "../../../components/GlobalComponents/Reports/Reports";
import ActivityCreateElement from "../../../components/GlobalComponents/Others/ActivityGram/ActivityCreateElement";
import ActivityGramTestEvents from "../../../components/GlobalComponents/Others/ActivityGram/ActivityGramTestEvents";
import ActivityGramSummaryReport from "../../../components/GlobalComponents/Others/ActivityGramLite/  ActivityGramSummaryReport";
import ActivityGramStaticReport from "../../../components/GlobalComponents/Others/ActivityGramLite/ActivityGramStaticReport";
import ActivityLiteStudentReport from "../../../components/GlobalComponents/Others/ActivityGramLite/ActivityLiteStudentReport";
import ActivityLogAssessmentLog from "../../../components/GlobalComponents/Others/ActivityLog/ActivityLogAssessmentLog";
import ActivityLogChallenges from "../../../components/GlobalComponents/Others/ActivityLog/ActivityLogChallenges";
import FitnessGramClassScoreReport from "../../../components/GlobalComponents/Others/FitnessReport/FitnessGramClassScoreReport";
import CreateEvent from "../../../features/teacher/FitnessGram/CreateEvent";
import CreateEventTeacher from "../../../features/teacher/Fitness/subpages/CreateEventTeacher";
import AgCreateEvent from "../../../features/teacher/ActivityGram/AgCreateEvent";
import ManageClasses from "../../../features/DistrictAdmin/DataManagement/ManageClasses/ManageClasses";
import ManageUsers from "../../../features/DistrictAdmin/DataManagement/ManageUsers/ManageUsers";
import StudentRegisterRoster from "../../../features/teacher/ActivityGram/StudenRegisterRoster";
import Myaccount from "../../../features/teacher/Myaccount";
import EditAccount from "../../../features/teacher/EditAccount";
import ActivityLog from "../../../features/teacher/ActivityLog/ActivityLog";
import AlCreateEvent from "../../../features/teacher/ActivityLog/AlCreateEvent";
import StudentRosterLog from "../../../features/teacher/ActivityLog/StudentRosterLog";
import ActivityGramEvent from "../../../features/teacher/ActivityGram/ActivityGramEvent";
import AddStudentlist from "../../../features/teacher/ActivityGram/AddStudentlist";
import TestTable from "../../../features/teacher/AdminsterTest/TestTable";

import AdminPopUp from "../../../components/GlobalComponents/Popups/AdminPopUp";
import { Coach_board } from "../../../features/teacher/Fitness/subpages/Manage/data";
import TestRegular from "../../../features/teacher/Fitness/TestRegular";
import AlEditEvent from "../../../features/teacher/ActivityLog/AlEditEvent";
import AgEditEvent from "../../../features/teacher/ActivityGram/AgEditEvent";
import EditEvent from "../../../features/teacher/FitnessGram/EditEvent";
import AlEnterData from "../../../features/teacher/ActivityLog/AlEnterData";
import AddTeacherPage from "../../../ManageUsersGlobal/AddTeacherPage";
import Class from "../../../features/authentication/components/schoolAdmin/GreenLite/Class";
import Notifications from "../../../features/Partners/Notifications";
import NotificationsReceived from "../../../features/authentication/components/schoolAdmin/Notifications/Recieved";
import NotificationsManage from "../../../features/authentication/components/schoolAdmin/Notifications/Manage";
import AddAnnouncement from "../../../features/authentication/components/schoolAdmin/Notifications/AddAnnouncement";
import AddUser from "../../../features/DistrictAdmin/DataManagement/ManageUsers/AddUser";
import RecommendedSmart from "../../../components/GlobalComponents/SmartCoach/RecommendedSmart";
import StudentReportsTableData from "../../../components/GlobalComponents/Reports/StudentReports/StudentReportsTableData";
import FitnessGramStaticReport from "../../../components/GlobalComponents/Others/FitnessReport/FitnessGramStaticReport";
import FitnessGramStudentReport from "../../../features/Partners/Reports/FitnessGramStudentReport";
import NotificationsRecievedComponent from "../../../NotificationsGlobal/NotificationsRecievedComponent";
import FitnessGramCompletionReport from "../../../components/GlobalComponents/Others/FitnessReport/FitnessGramCompletionReport";
import ReportsPage from "../../../components/GlobalComponents/Reports/StudentReports/ReportsPage";
import StudentReportCard from "../../../components/GlobalComponents/Reports/StudentReports/StudentReportCard";
import ActivityGramStudentReport from "../../../components/GlobalComponents/Reports/ActivityReports/ActivityGramStudentReport";
import ActivityLogStudentReport from "../../../components/GlobalComponents/Reports/ActivityReports/ActivityLogStudentReport";
import StudentEventReportCard from "../../../components/GlobalComponents/Reports/StudentReports/StudentEventReportCard";
import ReportsOfStudents from "../../../components/GlobalComponents/Reports/StudentReports/ReportsOfStudents";
import FitnessGramOverviewReport from "../../../components/GlobalComponents/Others/FitnessReport/FitnessGramOverviewReport";

export const TeacherRoute = [
  <Route index element={<Teacher />} />,
  <Route path="fitness-gram" element={<Teacher />} />,

  <Route path="admin" element={<Admin />} />,
  // <Route path="smartCoach" element={<SmartCoachComponent />} />,

  <Route path="smartCoach" element={<RecommendedSmart />} />,
  <Route path=":eventType/smartCoach" element={<RecommendedSmart />} />,
  <Route
    path=":eventType/smartCoach/:eventId"
    element={<RecommendedSmart />}
  />,
  <Route path="adminPopUp" element={<AdminPopUp />} />,
  <Route path="CreateEvent" element={<CreateEvent />} />,
  <Route path="edit-event" element={<EditEvent />} />,
  <Route path="edit-event/:eventId" element={<EditEvent />} />,

  <Route path="events" element={<CreateEvent />} />,
  // <Route path="adminTest" element={<TestTable />} />,

  <Route path="ag-create-event" element={<AgCreateEvent />} />,
  <Route path="ag-edit-event" element={<AgEditEvent />} />,
  <Route path="ag-edit-event/:eventId" element={<AgEditEvent />} />,

  <Route path="manage-classes" element={<ManageClasses />} />,
  <Route path="manage-users" element={<ManageUsers />} />,

  <Route path="studentroster/:eventId" element={<StudentRegisterRoster />} />,
  <Route path="studentroster" element={<StudentRegisterRoster />} />,

  // <Route path="event" element={<CreateEvent />} />,
  <Route
    path="manage-classes/school/:schoolId/class/:classId"
    element={<Class />}
  />,
  <Route path="CoachBoard" element={<Coach_board />} />,
  <Route path="adminTable/:eventId" element={<AdminTableSkelton />} />,
  <Route path="adminTest/:eventId" element={<AdminTestResultSkelton />} />,

  <Route path="adminTest" element={<AdminTestResultSkelton />} />,

  // <Route
  // 	path="StudentReportsTableData"
  // 	element={<StudentReportsTableData />}
  // />,

  <Route path="testRegular/:eventId" element={<TestRegular />} />,
  <Route path="ActivityGramTestEvents" element={<ActivityGramTestEvents />} />,
  <Route path="ActivityGramEvent" element={<ActivityGramEvent />} />,

  // <Route path="ActivityLogChallenges" element={<ActivityLogChallenges />} />,
  <Route path="ActivityLog" element={<ActivityLog />} />,
  // <Route path="ActivityLog" element={<ActivityLog />} />,
  <Route path="TestLoggerActivity" element={<TestLoggerActivity />} />,
  // <Route path="reports" element={<Reports />} />,
  <Route
    path="studentroster/:eventId/student/:studentId"
    element={<AddStudentlist />}
  />,

  <Route path="AddUser" element={<AddUser />} />,
  <Route path="edit/:role/:id" element={<AddUser />} />,

  <Route
    path="ActivityLogAssessmentLog"
    element={<ActivityLogAssessmentLog />}
  />,
  <Route path="ActivityCreateElement" element={<ActivityCreateElement />} />,
  <Route
    path="ActivityLiteStudentReport"
    element={<ActivityLiteStudentReport />}
  />,
  <Route
    path="ActivityGramSummaryReport"
    element={<ActivityGramSummaryReport />}
  />,
  <Route
    path="ActivityGramStaticReport"
    element={<ActivityGramStaticReport />}
  />,

  <Route
    path="FitnessGramClassScoreReport"
    element={<FitnessGramClassScoreReport />}
  />,
  <Route path="CreateEventTeacher" element={<CreateEventTeacher />} />,
  <Route path="my-account" element={<Myaccount />} />,
  <Route path="edit-account" element={<EditAccount />} />,
  <Route
    path="activity-log-store-data/:challengeId"
    element={<StudentRosterLog />}
  />,

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
      element={<FitnessGramOverviewReport />}
    />
    ,
    <Route
      path="FitnessGramCompletionReport"
      element={<FitnessGramCompletionReport />}
    />


    ,
    <Route
      path="FitnessGramStaticReport"
      element={<FitnessGramStaticReport />}
    />


    ,
    <Route
      path="FitnessGramClassScoreReport"
      element={<FitnessGramClassScoreReport />}
    />
    ,


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

  

  </Route>,




  <Route path="al-create-event" element={<AlCreateEvent />} />,
  <Route path="al-edit-event" element={<AlEditEvent />} />,
  <Route path="al-edit-event/:eventId" element={<AlEditEvent />} />,
  <Route
    path="activity-log-store-data/:challengeId/student/:studentId"
    element={<AlEnterData />}
  />,

  <Route path="AddTeacher" element={<AddTeacherPage />} />,

  // <Route path="Notifications" element={<Notifications />} />,

  <Route path="Notifications" element={<NotificationsRecievedComponent />} />,

  <Route path="Notifications/AddAnnouncement" element={<AddAnnouncement />} />,
  <Route path="Notifications/Received" element={<NotificationsReceived />} />,
  <Route path="Notifications/Manage" element={<NotificationsManage />} />,
  <Route
    path="FitnessGramStaticReport"
    element={<FitnessGramStaticReport />}
  />,

  <Route
    path="FitnessGramStudentReport"
    element={<FitnessGramStudentReport />}
  />,
  <Route path="Notifications/AddAnnouncement" element={<AddAnnouncement />} />,
  <Route path="Notifications/Received" element={<NotificationsReceived />} />,
  <Route path="Notifications/Manage" element={<NotificationsManage />} />,
];

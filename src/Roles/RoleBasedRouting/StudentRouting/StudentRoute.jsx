import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentViewData from '../../../features/STUDENT/Student/StudentViewData';
import StudentData from '../../../features/STUDENT/Student/StudentData';
import SmartCoachComponent from '../../../components/GlobalComponents/SmartCoach/SmartCoachComponent';
import { useSelector } from 'react-redux';
import SharedLayout from '../../../navigation/SharedLayout';
import Reports from '../../../components/GlobalComponents/Reports/Reports';
import StudentReportsTableData from '../../../components/GlobalComponents/Reports/StudentReports/StudentReportsTableData';
import ActivityGramLiteTestEvents from '../../../components/GlobalComponents/Others/ActivityGramLite/ActivityGramLiteTestEvents';
import ActivityLiteEvent from '../../../components/GlobalComponents/Others/ActivityGramLite/ActivityLiteEvent';
import ManageUser from '../../../features/DistrictAdmin/DataManagement/ManageUsers/ManageUser';
import ActivityGramTestRegular from '../../../components/GlobalComponents/Others/ActivityGram/ActivityGramTestRegular';
import ActivityGramLiteElementary from '../../../components/GlobalComponents/Others/ActivityGramLite/ActivityGramLiteElementary';
import ActivityLogStudentReport from '../../../components/GlobalComponents/Reports/ActivityReports/ActivityLogStudentReport';
import EnterTestResultsPage from '../../../features/STUDENT/Student/EnterTestResults/EnterTestResultsPage';
import EnterStudentDataTable from '../../../features/STUDENT/Student/EnterTestResults/EnterStudentDataTable';
import ActivityGramStudentReport from '../../../components/GlobalComponents/Reports/ActivityReports/ActivityGramStudentReport';
import ActivityLiteStudentReport from '../../../components/GlobalComponents/Others/ActivityGramLite/ActivityLiteStudentReport';
import ConfirmTestData from '../../../features/STUDENT/Popups/ConfirmTestData';
import DataSentForApproval from '../../../features/STUDENT/Popups/DataSentForApproval';
import TestRegular from '../../../features/STUDENT/Student/TestRegular';
import ReportFilter from '../../../features/STUDENT/ReportFilter/ReportFilter';

import Admin from '../../../features/teacher/AdminTest/Admin';
import ActivityLogPage from '../../../features/STUDENT/Student/Others/ActivityGram/ActivityLog/ActivityLogPage';
import ActivityGramPage from '../../../features/STUDENT/Student/Others/ActivityGram/ActivityGramPage';
import RecommendedSmartCoach from '../../../features/STUDENT/Student/SmartCoach/RecommendedSmartCoach';
import ActivityGramTestRegularPage from '../../../features/STUDENT/Student/Others/ActivityGram/ActivityGramTestRegularPage';
import ActivityGramEvent from '../../../features/teacher/ActivityGram/ActivityGramEvent';
import ActivityLog from '../../../features/teacher/ActivityLog/ActivityLog';
import AddStudentList from '../../../features/teacher/ActivityGram/AddStudentlist';
import AlEnterData from '../../../features/teacher/ActivityLog/AlEnterData';
import Notifications from '../../../features/Partners/Notifications';
import Myaccount from '../../../features/teacher/Myaccount';
import RecommendedSmart from '../../../components/GlobalComponents/SmartCoach/RecommendedSmart';
import ReportsTable from '../../../components/GlobalComponents/Reports/ReportsTable';
import ActivityGramStaticReport from '../../../components/GlobalComponents/Others/ActivityGramLite/ActivityGramStaticReport';
import FitnessGramStudentReport from '../../../features/Partners/Reports/FitnessGramStudentReport';
import ActivityModalSkeleton from '../../../components/GlobalComponents/Others/ActivityModalSkeleton';
import FitnessGramClassScoreReport from '../../../components/GlobalComponents/Others/FitnessReport/FitnessGramClassScoreReport';
import FitnessGramStaticReport from '../../../components/GlobalComponents/Others/FitnessReport/FitnessGramStaticReport';
import NotificationsRecievedComponent from '../../../NotificationsGlobal/NotificationsRecievedComponent';
import ReportsPage from '../../../components/GlobalComponents/Reports/StudentReports/ReportsPage';
import StudentReportCard from '../../../components/GlobalComponents/Reports/StudentReports/StudentReportCard';

import FitnessGramOverviewReport from '../../../components/GlobalComponents/Others/FitnessReport/FitnessGramOverviewReport';
import StudentEventReportCard from '../../../components/GlobalComponents/Reports/StudentReports/StudentEventReportCard';
import ReportsOfStudents from '../../../components/GlobalComponents/Reports/StudentReports/ReportsOfStudents';
import HisoryStudentReport from '../../../components/GlobalComponents/Others/FitnessReport/HisoryStudentReport';
import ViewEventTestItemsPage from '../../../features/STUDENT/Student/EnterTestResults/ViewEventTestItemsPage';

const StudentRoute = [
  <Route index element={<StudentViewData />} />,

  <Route path='mainStudnet' element={<StudentData />} />,

  <Route path='EnterTestResults' element={<ViewEventTestItemsPage />} />,

  <Route path='EnterStudentDataTable' element={<EnterStudentDataTable />} />,

  <Route path='admin' element={<Admin />} />,

  // <Route path='SmartCoach' element={<RecommendedSmartCoach />} />,

  <Route path='SmartCoach' element={<RecommendedSmart />} />,

  <Route path=':eventType/smartCoach' element={<RecommendedSmart />} />,
  <Route
    path=':eventType/smartCoach/:eventId'
    element={<RecommendedSmart />}
  />,
  // <Route path='reports' element={<Reports />} />,

  // <Route
  //   path='StudentReportsTableData'
  //   element={<StudentReportsTableData />}
  // />,

  <Route path='reports' element={<ReportsPage />} />,

  <Route path='reports/fitness' element={<StudentReportsTableData />}>
    {/* <Route path="StudentReportsTableData" element={<StudentReportCard />} />, */}
    <Route path='StudentReportsTableData' element={<ReportsOfStudents />} />,
    <Route
      path='StudentReportsTableData/student/:studentUUID'
      element={<ReportsOfStudents />}
    />
    ,
    {/* <Route path="StudentReportsTableData" element={<StudentEventReportCard />} />, */}
    <Route
      path='FitnessGramOverviewReport'
      element={<FitnessGramOverviewReport />}
    />
    ,
    <Route
      path='ActivityGramStudentReport'
      element={<ActivityGramStudentReport />}
    />{' '}
    ,
    <Route
      path='ActivityLogStudentReport'
      element={<ActivityLogStudentReport />}
    />
    ,
  </Route>,

  <Route path='ActivityModalSkeleton' element={<ActivityModalSkeleton />} />,

  // <Route path="reports" element={<Reports />} />,

  <Route path='reports' element={<ReportsPage />} />,

  <Route path='ReportsTable' element={<ReportsTable />} />,

  <Route path='studentreporttable' element={<StudentReportsTableData />} />,

  <Route path='ActivityGramEvent' element={<ActivityGramEvent />} />,

  <Route
    path='ActivityGramEvent/:eventId/student/:studentId'
    element={<AddStudentList />}
  />,

  <Route path='ActivityLog' element={<ActivityLog />} />,

  <Route
    path='ActivityLog/:challengeId/student/:studentId'
    element={<AlEnterData />}
  />,

  <Route
    path='ActivityGramLiteTestEvents'
    element={<ActivityGramLiteTestEvents />}
  />,
  <Route path='ActivityGramLiteEvent' element={<ActivityLiteEvent />} />,

  <Route
    path='ActivityGramStudentReport'
    element={<ActivityGramStudentReport />}
  />,

  <Route
    path='ActivityLiteStudentReport'
    element={<ActivityLiteStudentReport />}
  />,

  <Route
    path='ActivityGramTestRegular'
    element={<ActivityGramTestRegularPage />}
  />,

  <Route
    path='ActivityGramLiteElementary'
    element={<ActivityGramLiteElementary />}
  />,

  <Route
    path='ActivityLogStudentReport'
    element={<ActivityLogStudentReport />}
  />,

  <Route path='ConfirmTestData' element={<ConfirmTestData />} />,
  // <Route path="DataSentforApproval" element={<DataSentForApproval/>}/>,
  <Route path='TestRegular' element={<TestRegular />} />,

  // <Route path='Notifications' element={<Notifications />} />,

  <Route path='Notifications' element={<NotificationsRecievedComponent />} />,

  <Route path='ReportFilter' element={<ReportFilter />} />,

  <Route
    path='ActivityGramStudentReport'
    element={<ActivityGramStudentReport />}
  />,

  <Route
    path='ActivityGramStaticReport'
    element={<ActivityGramStaticReport />}
  />,

  <Route
    path='FitnessGramStudentReport'
    element={<FitnessGramStudentReport />}
  />,

  <Route
    path='FitnessGramClassScoreReport'
    element={<FitnessGramClassScoreReport />}
  />,
  <Route
    path='FitnessGramStaticReport'
    element={<FitnessGramStaticReport />}
  />,

  <Route
    path='FitnessGramStudentReport'
    element={<FitnessGramStudentReport />}
  />,

  <Route path='my-account' element={<Myaccount />} />,
  <Route path='HisoryStudentReport' element={<HisoryStudentReport />} />,
];

export default StudentRoute;

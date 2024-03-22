import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEditUser from "../../../components/AddEditUser";
import Reports from "../../../components/GlobalComponents/Reports/Reports";
import SmartCoachComponent from "../../../components/GlobalComponents/SmartCoach/SmartCoachComponent";
import GreenLiteElementary from "../../../features/authentication/components/schoolAdmin/GreenLiteElementary";
import AddAnnouncement from "../../../features/authentication/components/schoolAdmin/Notifications/AddAnnouncement";
import NotificationsManage from "../../../features/authentication/components/schoolAdmin/Notifications/Manage";
import NotificationsReceived from "../../../features/authentication/components/schoolAdmin/Notifications/Recieved";
import Schools from "../../../features/authentication/components/schoolAdmin/Schools";
import { CreateNewMappingData } from "../../../features/DistrictAdmin/config/config";
import DataManagementDashboard from "../../../features/DistrictAdmin/DataManagement/DataManagementDashboard";
import EndOFTermProcess from "../../../features/DistrictAdmin/DataManagement/EndOfTermProcess.jsx/EndOFTermProcess";

import CreateNewMapping from "../../../features/DistrictAdmin/DataManagement/Import/CreateNewMapping";
import History from "../../../features/DistrictAdmin/DataManagement/Import/History";
import Import from "../../../features/DistrictAdmin/DataManagement/Import/Import";
import Import1 from "../../../features/DistrictAdmin/DataManagement/Import/Import1";
import Mapping from "../../../features/DistrictAdmin/DataManagement/Import/Mapping";
import Class from "../../../features/DistrictAdmin/DataManagement/ManageClasses/Class";
import ManageClasses from "../../../features/DistrictAdmin/DataManagement/ManageClasses/ManageClasses";
import AddUser from "../../../features/DistrictAdmin/DataManagement/ManageUsers/AddUser";
import ManageUsers from "../../../features/DistrictAdmin/DataManagement/ManageUsers/ManageUsers";
import DistrictStatistics from "../../../features/DistrictAdmin/District Statistics/DistrictStatistics";
import EmailSettings from "../../../features/DistrictAdmin/Settings/EmailSettings";
import AddMandates from "../../../features/DistrictAdmin/System Administrator/ManageMandates/AddMandates";
import ManageMandates from "../../../features/DistrictAdmin/System Administrator/ManageMandates/ManageMandates";
import RolesPrevilages from "../../../features/DistrictAdmin/System Administrator/RolesPrevilages/RolesPrevilages";
import District from "../../../features/DistrictAdmin/System Administrator/Schools/District";
import School from "../../../features/DistrictAdmin/System Administrator/Schools/School";
import SystemAdminDashboard from "../../../features/DistrictAdmin/System Administrator/SystemAdminDashboard";
import Notifications from "../../../features/Partners/Notifications";
import ABBEVILLE from "../../../features/superAdmin/District/ABBEVILLE";
// import EditDistrictAdministrator from "../../../features/superAdmin/District/AddDistrict/EditDistrictAdministrator";

import Myaccount from "../../../features/teacher/Myaccount";
import RecommendedSmart from "../../../components/GlobalComponents/SmartCoach/RecommendedSmart";
import DistrictLookup from "../../../features/superAdmin/District/DistrictLookup";
import AddNewDistrict from "../../../features/superAdmin/District/AddNewDistrict";
import SystemUsage from "../../../features/DistrictAdmin/SystemUsage/SystemUsage";
import StudentReportsTableData from "../../../components/GlobalComponents/Reports/StudentReports/StudentReportsTableData";
import EditMapping from "../../../features/DistrictAdmin/DataManagement/Import/EditMapping";

const StateAdminRoute = [
  <Route index element={<SystemAdminDashboard />} />,

  <Route path="data-management" element={<DataManagementDashboard />} />,

  <Route path="import" element={<Import />} />,
  <Route path="edit/mapping/:id" element={<EditMapping />} />,
  // <Route path="import" element={<Import />}>
  // 	<Route index element={<Import1 />} />
  // 	<Route path="import" element={<Import1 />} />
  // 	<Route path="mapping" element={<Mapping />} />
  // 	<Route path="mapping/create-new-mapping" element={<CreateNewMapping />} />
  // 	<Route path="history" element={<History />} />
  // </Route>,
  <Route path="create-new-mapping" element={<CreateNewMapping />} />,
  <Route path="manage-classes" element={<ManageClasses />} />,
  <Route path="class" element={<Class />} />,

  <Route path="end-of-term-process" element={<EndOFTermProcess />} />,

  //   schools elements

  <Route path="district" element={<District />} />,

  <Route path="Districts/DistrictLookup" element={<DistrictLookup />} />,
  <Route path="Districts/AddNewDistrict" element={<AddNewDistrict />} />,
  <Route path="Districts/ABBEVILLE" element={<ABBEVILLE />} />,
  <Route
    path="Districts/GreenlightElementary"
    element={<GreenLiteElementary />}
  />,

  <Route path="school" element={<School />} />,

  // <Route
  //   path="EditDistrictAdministrator"
  //   element={<EditDistrictAdministrator />}
  // />,

  <Route path="edit/:role/:id" element={<AddUser />} />,
  <Route
    path="StudentReportsTableData"
    element={<StudentReportsTableData />}
  />,

  <Route path="AddUser" element={<AddUser />} />,

  // <Route path = "DistrictLookup" element = {<DistrictLookup />}/>,

  <Route path="system-admin" element={<SystemAdminDashboard />} />,
  <Route path="manage-mandates" element={<ManageMandates />} />,
  <Route path="add-mandates" element={<AddMandates />} />,
  <Route path="roles-privilages" element={<RolesPrevilages />} />,

  <Route path="manage-users" element={<ManageUsers />} />,
  // <Route path='add-user' element={<AddUser />} />,
  <Route path="add-edit-user" element={<AddEditUser />} />,
  <Route path="email-settings" element={<EmailSettings />} />,

  <Route path="district-statistics" element={<DistrictStatistics />} />,

  <Route path="SmartCoach" element={<RecommendedSmart />} />,

  <Route path="system_usage" element={<SystemUsage />} />,

  <Route path="schools" element={<District />} />,

  // <Route path='smart-coach' element={<SmartCoachComponent />} />,

  <Route path="reports" element={<Reports />} />,
  <Route path="EndOFTermProcess" element={<EndOFTermProcess />} />,
  <Route path="RolesPrevilages" element={<RolesPrevilages />} />,
  // <Route path='schools' element={<Schools />} />,

  <Route path="my-account" element={<Myaccount />} />,

  <Route path="GreenLiteElementary" element={<GreenLiteElementary />} />,

  <Route path="Notifications" element={<Notifications />} />,

  <Route path="Notifications/AddAnnouncement" element={<AddAnnouncement />} />,
  <Route path="Notifications/Received" element={<NotificationsReceived />} />,
  <Route path="Notifications/Manage" element={<NotificationsManage />} />,
];

export default StateAdminRoute;

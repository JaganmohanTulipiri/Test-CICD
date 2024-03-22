import { Route } from "react-router-dom";
import CMSDashboard from "../../../features/superAdmin/CMS/CMSDashboard";

import AddNewDistrict from "../../../features/superAdmin/District/AddNewDistrict";
// import AddSchoolAdmin from "../../../features/superAdmin/District/AddSchool/AddSchoolAdmin";
// import AddSchoolManageUsers from "../../../features/superAdmin/District/AddSchool/AddSchoolManageUsers";
import DistrictLookup from "../../../features/superAdmin/District/DistrictLookup";
// import NotificationsManage from "../../../features/superAdmin/Notifications/Manage";
// import NotificationsReceived from "../../../features/superAdmin/Notifications/Recieved";

import EditMyAccount from "../../../components/GlobalComponents/SuperAdmin/Account/EditMyAccount";
import MyAccount from "../../../components/GlobalComponents/SuperAdmin/Account/MyAccount";
import CreateLicense from "../../../features/superAdmin/Licenses/CreateLicense";

import LicenseMain from "../../../features/superAdmin/Licenses/LicensesMain";

// import AddAnnouncement from "../../../features/superAdmin/Popups/AddAnnouncement";
import AddAnnouncement from "../../../features/authentication/components/schoolAdmin/Notifications/AddAnnouncement";
import NotificationsManage from "../../../features/authentication/components/schoolAdmin/Notifications/Manage";
import NotificationsReceived from "../../../features/authentication/components/schoolAdmin/Notifications/Recieved";
import AddUser from "../../../features/DistrictAdmin/DataManagement/ManageUsers/AddUser";
import RolesPrevilages from "../../../features/DistrictAdmin/System Administrator/RolesPrevilages/RolesPrevilages";
import CMSContent from "../../../features/superAdmin/CMS/CMSContent";
import ShowUpdateDistrict from "../../../features/superAdmin/District/ShowUpdateDistrict";
import ShowUpdateSchoolDetails from "../../../features/superAdmin/District/ShowUpdateSchoolDetails";
import DisplayLicensedDistrictsData from "../../../features/superAdmin/Licenses/DisplayLicensedDistrictsData";
import ManageUsersDashboard from "../../../features/superAdmin/ManageUsers/ManageUsersDashboard";
import AddSchoolPopup from "../../../features/superAdmin/Popups/AddSchoolPopup";
import DoneCard from "../../../features/superAdmin/Popups/DoneCard";
import CreateNewSSO from "../../../features/superAdmin/SSOConfig/CreateNewSSO";
import EditSSOConfigData from "../../../features/superAdmin/SSOConfig/EditSSOConfigData";
import SSOConfigurationMain from "../../../features/superAdmin/SSOConfig/SSOConfigurationMain";
import AddStateAdministrator from "../../../features/superAdmin/StatesPartners/AddStateAdministrator";
import AddStateUserAssignments from "../../../features/superAdmin/StatesPartners/AddStateUserAssignments";
import CreateStatePartner from "../../../features/superAdmin/StatesPartners/CreateStatePartner";
import EditStateAdministrator from "../../../features/superAdmin/StatesPartners/EditStateAdministrator";
import EditStateUserAssignments from "../../../features/superAdmin/StatesPartners/EditStateUserAssignments";
import StatesPartners from "../../../features/superAdmin/StatesPartners/StatesPartners";
import WA from "../../../features/superAdmin/StatesPartners/WA";
import WAAdmin from "../../../features/superAdmin/StatesPartners/WAAdmin";
import WALicense from "../../../features/superAdmin/StatesPartners/WALicense";
import NotificationsRecievedComponent from "../../../NotificationsGlobal/NotificationsRecievedComponent";
import UpdateLicense from "../../../features/superAdmin/Licenses/UpdateLicense";

export const SuperAdminRoute = [
  <Route index element={<CMSDashboard />} />,

  <Route path="my-account" element={<MyAccount />} />,
  <Route path="EditmyAccount" element={<EditMyAccount />} />,
  <Route path="Districts/AddUser" element={<AddUser />} />,
  <Route path="Districts/DistrictLookup" element={<DistrictLookup />} />,
  <Route path="Districts/AddNewDistrict" element={<AddNewDistrict />} />,
  <Route path="Districts/DistrictDetails" element={<ShowUpdateDistrict />} />,
  <Route
    path="Districts/SchoolDetails"
    element={<ShowUpdateSchoolDetails />}
  />,
  <Route path="Districts/AddSchool" element={<AddSchoolPopup />} />,
  <Route path="Licenses/CreateLicense" element={<CreateLicense />} />,
  <Route path="Licenses" element={<LicenseMain />} />,
  <Route path="Licenses/CreateNewLicense" element={<CreateLicense />} />,
  // <Route path="Licenses/Schools" element={<TestDistrict />} />,
  // <Route path="Licenses/AddedSchoolData" element={<TestDistrictTable />} />,
  <Route path="StatesPartners" element={<StatesPartners />} />,
  <Route
    path="StatesPartners/CreateStatePartner"
    element={<CreateStatePartner />}
  />,
  <Route path="StatesPartners/WAAdmin" element={<WAAdmin />} />,
  <Route path="StatesPartners/WALicense" element={<WALicense />} />,
  <Route
    path="StatesPartners/AddStateAdmin"
    element={<AddStateAdministrator />}
  />,
  <Route
    path="StatesPartners/StateUsersAssignments"
    element={<AddStateUserAssignments />}
  />,
  <Route
    path="StatesPartners/EditStateAdmin"
    element={<EditStateAdministrator />}
  />,
  <Route
    path="StatePartners/EditManageUserAssignments"
    element={<EditStateUserAssignments />}
  />,
  <Route path="DoneCard" element={<DoneCard />} />,
  <Route path="Notifications/AddAnnouncement" element={<AddAnnouncement />} />,
  <Route path="Notifications/Received" element={<NotificationsReceived />} />,
  <Route path="Notifications/Manage" element={<NotificationsManage />} />,
  <Route path="StatesPartners/WA" element={<WA />} />,
  <Route path="manage-users" element={<ManageUsersDashboard />} />,
  <Route path="RolesPrevilages" element={<RolesPrevilages />} />,
  <Route path="SSOConfigMain" element={<SSOConfigurationMain />} />,
  <Route path="SSOConfig/CreateNewSSOConfig" element={<CreateNewSSO />} />,
  <Route path="SSOConfig/EditSSOConfig" element={<EditSSOConfigData />} />,

  <Route path="Notifications" element={<NotificationsRecievedComponent />} />,
  <Route path="Notifications/AddAnnouncement" element={<AddAnnouncement />} />,
  <Route path="Notifications/Received" element={<NotificationsReceived />} />,
  <Route path="Notifications/Manage" element={<NotificationsManage />} />,
  <Route path="AddUser" element={<AddUser />} />,
  <Route path="edit/:role/:id" element={<AddUser />} />,
  <Route path="CMS/CMSContent" element={<CMSContent />} />,
  <Route path="Licenses/DisplayLicensedDistrictsData" element={<DisplayLicensedDistrictsData/>}/>
];

import React, { useContext } from 'react';
import SharedLayout from './SharedLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RenderRoutes from '../RenderRouting/RenderRoutes';
import StudentViewData from '../../features/STUDENT/Student/StudentViewData';
import StudentData from '../../features/STUDENT/Student/StudentData';
import { useSelector } from 'react-redux';
import SmartCoach from '../../features/STUDENT/Student/SmartCoach';
import LoginPage from '../../features/authentication/LoginPage';
import CMSMain from '../../features/super_admin/CMS/CMSMain';
import AddContent from '../../features/super_admin/CMS/AddContent';
import Settings from '../../features/super_admin/Account/Settings';
import MyAccount from '../../features/super_admin/Account/MyAccount';
import EditMyAccount from '../../features/super_admin/Account/EditMyAccount';
import ManageUsersAssignments from '../../features/super_admin/District/AddTeacher/EditManageUsersAssignment';
import AddDistrictAdmin from '../../features/super_admin/District/AddDistrict/AddDistrictAdmin';
import EditTeacherInformation from '../../features/super_admin/District/AddTeacher/EditTeacherInformation';
import AddManageUserAssignment from '../../features/super_admin/District/AddDistrict/AddManageUserAssignment';
import EditManageUsersAssignments from '../../features/super_admin/District/AddTeacher/EditManageUsersAssignment';
import AddSchoolAdmin from '../../features/super_admin/District/AddSchool/AddSchoolAdmin';
import AddSchoolManageUsers from '../../features/super_admin/District/AddSchool/AddSchoolManageUsers';
import AddSchoolCard from '../../features/super_admin/District/AddSchool/AddSchoolCard';
import NotificationsReceived from '../../features/super_admin/Notifications/Recieved';
import NotificationsManage from '../../features/super_admin/Notifications/Manage';
import DistrictLookup from '../../features/super_admin/District/DistrictLookup';
import AddNewDistrict from '../../features/super_admin/District/AddNewDistrict';
import ABBEVILLE from '../../features/super_admin/District/ABBEVILLE';
import AddAdminPopup from '../../features/super_admin/District/AddAdminPopup';

import Admin from '../../features/teacher/AdminTest/Admin';

import Teacher from '../../features/teacher/Fitness/Teacher';

import CreateEvent from '../../features/teacher/Fitness/subpages/CreateEvent';
import Import from '../../features/DistrictAdmin/DataManagement/Import/Import';
import CreateNewMapping from '../../features/DistrictAdmin/DataManagement/Import/CreateNewMapping';
import ManageClasses from '../../features/DistrictAdmin/DataManagement/ManageClasses/ManageClasses';
import SignInMobile from '../../MobileResponsive/SignInMobile';

const Root = () => {
  const studentViewDataId = useSelector(
    (state) => state.profile.studentViewDataId
  );

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route path='/' element={<SignInMobile />} />

          <Route path='/role/Student' element={<SharedLayout />}>
            <Route index element={<StudentViewData />} />
            <Route
              path={`/role/Student/${studentViewDataId}`}
              element={<StudentData />}
            />
            <Route path='/role/Student/Reports' element={<SmartCoach />} />
          </Route>
          <Route path='/role/DistrictAdmin' element={<SharedLayout />}>
            <Route index element={<Import />} />
            <Route path='create-new-mapping' element={<CreateNewMapping />} />
            <Route path='manage-classes' element={<ManageClasses />} />
          </Route>
          <Route path='/role/SuperAdmin' element={<SharedLayout />}>
            <Route index element={<CMSMain />} />
            <Route path='/role/SuperAdmin/Settings' element={<Settings />} />
            <Route path='/role/SuperAdmin/MyAccount' element={<MyAccount />} />
            <Route
              path='/role/SuperAdmin/EditmyAccount'
              element={<EditMyAccount />}
            />
            <Route
              path='/role/SuperAdmin/CMS/AddContent'
              element={<AddContent />}
            />
            <Route
              path='/role/SuperAdmin/Districts/ManageUsersAssginments'
              element={<ManageUsersAssignments />}
            />
            <Route
              path='/role/SuperAdmin/Districts/AddManageUsersAssginments'
              element={<AddManageUserAssignment />}
            />
            <Route
              path='/role/SuperAdmin/Districts/AddDistrictAdmin'
              element={<AddDistrictAdmin />}
            />
            <Route
              path='/role/SuperAdmin/Districts/AddSchoolAdmin'
              element={<AddSchoolAdmin />}
            />
            <Route
              path='/role/SuperAdmin/Districts/EditTeacherInformation'
              element={<EditTeacherInformation />}
            />
            <Route
              path='/role/SuperAdmin/Districts/EditManageUsersAssignments'
              element={<EditManageUsersAssignments />}
            />
            <Route
              path='/role/SuperAdmin/Districts/AddSchoolManageUsers'
              element={<AddSchoolManageUsers />}
            />
            <Route
              path='/role/SuperAdmin/Districts/AddSchool'
              element={<AddSchoolCard />}
            />
            <Route
              path='/role/SuperAdmin/Notifications/Received'
              element={<NotificationsReceived />}
            />
            <Route
              path='/role/SuperAdmin/Notifications/Manage'
              element={<NotificationsManage />}
            />
            <Route
              path='/role/SuperAdmin/Districts/DistrictLookup'
              element={<DistrictLookup />}
            />
            <Route
              path='/role/SuperAdmin/Districts/AddNewDistrict'
              element={<AddNewDistrict />}
            />
            <Route
              path='/role/SuperAdmin/Districts/ABBEVILLE'
              element={<ABBEVILLE />}
            />
            <Route
              path='/role/SuperAdmin/Districts/AddAdminPopup'
              element={<AddAdminPopup />}
            />
          </Route>

          <Route path='/role/Teacher' element={<SharedLayout />}>
            <Route index element={<Teacher />} />
            <Route path='event' element={<CreateEvent />} />
            <Route path='admin' element={<Admin />} />
          </Route>

          <Route path='*' element={<p>Loading....</p>} />
        </Routes>
      </Router>
    </>
  );
};

export default Root;

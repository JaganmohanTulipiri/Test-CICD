import React, { useContext } from "react";
import SharedLayout from "./SharedLayout";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "../features/authentication/LoginPage";
import StudentRoute from "../Roles/RoleBasedRouting/StudentRouting/StudentRoute";
import { TeacherRoute } from "../Roles/RoleBasedRouting/TeacherRouting/TeacherRoute";
import { SuperAdminRoute } from "../Roles/RoleBasedRouting/SuperAdminRouting/SuperAdminRoute";
import Teacher from "../features/teacher/Fitness/Teacher";
import ContainerSharedLayout from "./ContainerSharedLayout";

import DistrictAdminRoute from "../Roles/RoleBasedRouting/DistrictAdminRouting/DistrictAdminRoute";
import { PartnerRoute } from "../Roles/RoleBasedRouting/PartnerRouting/PartnerRoute";
import { SchoolAdminRoute } from "../Roles/RoleBasedRouting/SchoolAdminRouting/SchoolAdminRoute";
import StateAdminRoute from "../Roles/RoleBasedRouting/StateAdminRouting/StateAdminRoute";
import SignInMobile from "../MobileResponsive/SignInMobile";
import RequiredAuth from "../Utilities/RequiredAuth";
import MainPage from "./MainPage";

const Root = () => {
	const studentViewDataId = useSelector(
		(state) => state.profile.studentViewDataId
	);

	const token = useSelector((state) => state?.profile?.token);

	return (
		<>
			<Router>
				<Routes>
					{/* <Route path='/' element={<LoginPage />} /> */}







					{/* <Route path = "/" element = {<MainPage />}/> */}


					<Route path="/" element={<SignInMobile />} />
					<Route path="/signin" element={<SignInMobile />} />

					<Route
						path="/role"
						element={
							<RequiredAuth>


								<SharedLayout />

							{/* <MainPage /> */}





							</RequiredAuth>
						}
					>
						<Route path="teacher" element={<ContainerSharedLayout />}>
							{TeacherRoute}
						</Route>
						<Route path="Student" element={<ContainerSharedLayout />}>
							{StudentRoute}
						</Route>
						<Route path="schoolAdmin" element={<ContainerSharedLayout />}>
							{SchoolAdminRoute}
						</Route>
						<Route path="superAdmin" element={<ContainerSharedLayout />}>
							{SuperAdminRoute}
						</Route>

						<Route path="districtAdmin" element={<ContainerSharedLayout />}>
							{DistrictAdminRoute}
						</Route>
						<Route path="StateAdmin" element={<ContainerSharedLayout />}>
							{StateAdminRoute}
						</Route>
						<Route path="Partner" element={<ContainerSharedLayout />}>
							{PartnerRoute}
						</Route>
					</Route>

					<Route path="*" element={<p>Loading....</p>} />
				</Routes>
			</Router>
		</>
	);
};

export default Root;

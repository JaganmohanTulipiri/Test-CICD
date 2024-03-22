import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
const RequiredAuth = ({ children }) => {
	const token = useSelector((state) => state.profile.token);

	// const navigate = useNavigate()
	const location = useLocation();
	if (!token) {
		return <Navigate to="/signin" state={{ from: location }} replace />;
	}
	return children;
};

export default RequiredAuth;

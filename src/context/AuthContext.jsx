import React, { createContext, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../store/slices/profileSlice";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const token = useSelector((state) => state.profile.token);
	const apiErrors = useSelector((state) => state.profile.error);

	const dispatch = useDispatch();

	const login = (user) => {
		return new Promise((resolve, reject) => {
			dispatch(getUser(user));
			resolve();
		});
	};

	let value = {
		isAuthenticated,
		login,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

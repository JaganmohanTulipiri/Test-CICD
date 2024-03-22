import React from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import MobileResponseScreen from "./MobileResponsive/MobileNav/MobileResponseScreen";
import SignInMobile from "./MobileResponsive/SignInMobile";
import Root from "./navigation/Root";

const App = () => {
	return (
		<div className="container-one">
			<AuthProvider>
				<Root />
			</AuthProvider>
		</div>
	);
};

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "components/Layout/Layout";

import MainPage from "pages/MainPage/MainPage";
import LoginPage from "pages/LoginPage/LoginPage";
import SignupPage from "pages/SignupPage/SignupPage";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="signup" element={<SignupPage />} />
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

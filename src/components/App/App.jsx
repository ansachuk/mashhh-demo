import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "pages/MainPage/MainPage";
import LoginPage from "pages/LoginPage/LoginPage";
import SignupPage from "pages/SignupPage/SignupPage";

import Layout from "components/Layout/Layout";
import PrivatRoute from "components/PrivatRoute/PrivatRoute";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route
					path="login"
					element={
						<PrivatRoute>
							<LoginPage />
						</PrivatRoute>
					}
				/>
				<Route
					path="signup"
					element={
						<PrivatRoute>
							<SignupPage />
						</PrivatRoute>
					}
				/>
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

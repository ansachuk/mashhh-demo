// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { selectIsAuth } from "redux/auth/selector";

export default function PrivatRoute({ children }) {
	// const isAuth = useSelector(selectIsAuth);
	return children;
	// return isAuth ? children : <Navigate to="/" />;
}

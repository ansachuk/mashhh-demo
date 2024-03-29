import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "redux/store";

import { App } from "components/App/App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter basename="/mashhh-demo">
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>,
);

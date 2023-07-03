import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "components/App/App";

import "./index.css";
import { Provider } from "react-redux";
import store from "redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter basename="/mashhh-demo">
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>,
);

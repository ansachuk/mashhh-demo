import Navigation from "components/Header/Navigation/Navigation";
import Meta from "./Meta/Meta";
import MainHeader from "./MainHeader/MainHeader";

export default function Header() {
	return (
		<header>
			<Meta />
			<MainHeader />
			<Navigation />
		</header>
	);
}

import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer>
			footer
			<br />
			<Link to="/login">login</Link>
			<br />
			<Link to="/signup">signup</Link>
		</footer>
	);
}

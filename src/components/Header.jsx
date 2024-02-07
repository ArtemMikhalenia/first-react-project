import { useState } from "react";
import logo from "/public/logo-name.svg";

export default function Header() {
	const [now, setNow] = useState(new Date());

	setInterval(() => setNow(new Date()), 1000);

	const altName = "Result";

	return (
		<header>
			<img src={logo} alt={altName} />
			<span>Время сейчас: {now.toLocaleTimeString()}</span>
		</header>
	);
}

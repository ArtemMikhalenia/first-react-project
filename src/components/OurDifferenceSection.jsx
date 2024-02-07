import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function OurDifferenceSection() {
	const [contentType, setContentType] = useState(null);

	function handleClick(type) {
		console.log("Button clicked!", type);
		setContentType(type);
	}

	// let tabContent = null;

	// if (contentType) {
	// 	tabContent = <p>{differences[contentType]}</p>;
	// } else {
	// 	tabContent = <p>Нажми на кнопку</p>;
	// }

	return (
		<section>
			<h3>Чем мы отличаемся от других</h3>

			<Button
				isActive={contentType === "way"}
				onClick={() => handleClick("way")}
			>
				Подход
			</Button>
			<Button
				isActive={contentType === "easy"}
				onClick={() => handleClick("easy")}
			>
				Доступность
			</Button>
			<Button
				isActive={contentType === "program"}
				onClick={() => handleClick("program")}
			>
				Концентрация
			</Button>

			{/* {contentType ? (
						<p>{differences[contentType]}</p>
					) : (
						<p>Нажми на кнопку</p>
					)} */}

			{/* {!contentType ? <p>Нажми на кнопку</p> : null} */}
			{/* {contentType ? (
						<p>{differences[contentType]}</p>
					) : (
						<p>Нажми на кнопку</p>
					)} */}

			{!contentType && <p>Нажми на кнопку</p>}
			{contentType && <p>{differences[contentType]}</p>}

			{/* {tabContent} */}
			{/* <p>{differences[contentType]}</p> */}
		</section>
	);
}

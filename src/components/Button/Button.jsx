import "./Button.css";

export default function Button({ children, onClick }) {

	return (
		<button
			className="button active"
			onClick={onClick}
			// onMouseEnter={handleMouseEnter}
			// onDoubleClick={() => console.log("Double!")}
		>
			{children}
		</button>
	);
}

import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	const colorOnClick = (selectedColor) => {
		setColor(selectedColor);
	};

	return (
		<div className="top">
			<div className="container">
				<div
					className={color === "red" ? "red light selected" : "red light"}
					onClick={() => colorOnClick("red")}
				> </div>
				<div
					className={color === "yellow" ? "yellow light selected" : "yellow light"}
					onClick={() => colorOnClick("yellow")}
				></div>
				<div
					className={color === "green" ? "green light selected" : "green light"}
					onClick={() => colorOnClick("green")}
				></div>
			</div>
		</div>
	);
};

export default Home;

import React from "react";

import logo from "../img/logo.png";

const Header = () => {
	const handleToggle = () => {
		const width = window.screen.width;
		let link = document.getElementById("link").style.display;
		if (link == "block") {
			document.getElementById("link").style.height = "0";
			document.getElementById("link").style.opacity = "0";
			document.getElementById("link").style.overflow = "hidden";
			document.getElementById("link").style.display = "flex";
		} else {
			document.getElementById("link").style.height = "fit-content";
			document.getElementById("link").style.opacity = "1";
			document.getElementById("link").style.overflow = "hidden";
			document.getElementById("link").style.display = "block";
		}
	};
	return (
		<div className="header">
			<img src={logo} />
			<ul id="link">
				<li>Home</li>
				<li>Portfolio</li>
				<li>Skills</li>
				<li>Testimonials</li>
				<li>Hire Now</li>
			</ul>
			<img
				onClick={handleToggle}
				className="menu"
				alt="menu"
				src="https://img.icons8.com/material/24/000000/menu--v4.png"
			/>
		</div>
	);
};

export default Header;

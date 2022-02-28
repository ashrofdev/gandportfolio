import React from "react";

import fsp from "../img/fsp.png";
import venue from "../img/ultra.jpeg";
import trello from "../img/income.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = ({ openModal }) => {
	return (
		<div className="container grid hero">
			<div className="fullwidth">
				<div className="content">
					<h1 style={{ margin: "1rem 0" }}>Need to do something on the web?</h1>
					<h3 style={{ margin: "1rem 0" }}>You've come to the right place</h3>
					<div style={{ display: "flex", alignItems: "center" }}>
						<p>I am a web engineer with experience working with</p>
						<p>HTML</p>
					</div>
					<div className="cta">
						<button onClick={openModal}>Hire now</button>
						<a
							style={{ color: "black" }}
							target="_blank"
							rel="noreferrer"
							href="https://drive.google.com/file/d/1dqfrZPjNilMGin8x41IwuhfeNswjPLUq/view?usp=sharing"
						>
							Download CV &rarr;
						</a>
					</div>
				</div>
				<div className="imgshow">
					<Carousel
						autoPlay={true}
						infiniteLoop={true}
						showArrows={false}
						showThumbs={false}
					>
						<div>
							<img alt="venue" src={venue} />
						</div>
						<div>
							<img alt="fsp" src={fsp} />
						</div>
						<div>
							<img alt="trello" src={trello} />
						</div>
					</Carousel>
				</div>
			</div>
			{/* <div className="fullwidth">
                <Skills/>
            </div> */}
		</div>
	);
};

export default Hero;

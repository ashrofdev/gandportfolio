import React from "react";

const HeadsUp = () => {
	return (
		<div className="container expectations">
			<h3 style={{ textAlign: "center" }}>
				Here's what you get from working with me
			</h3>

			<div className="attributes">
				<div className="attribute">
					<img
						alt=""
						src="https://img.icons8.com/ios-filled/50/000000/available-updates.png"
					/>
					<div className="info">
						<h5>Always in touch</h5>
						<p>Responds within miniutes</p>
					</div>
				</div>
				<div className="attribute">
					<img
						alt=""
						src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-quality-logistic-delivery-kiranshastry-lineal-kiranshastry.png"
					/>
					<div className="info">
						<h5>Quality</h5>
						<p>High-quality work</p>
					</div>
				</div>
				<div className="attribute">
					<img alt="" src="https://img.icons8.com/ios/50/000000/speed.png" />
					<div className="info">
						<h5>Speed</h5>
						<p>Completion of project before deadline</p>
					</div>
				</div>
				<div className="attribute">
					<img
						alt=""
						src="https://img.icons8.com/ios-glyphs/30/000000/honesty.png"
					/>
					<div className="info">
						<h5>Honesty</h5>
						<p>Honesty when communicating about the project</p>
					</div>
				</div>
				<div className="attribute">
					<img
						alt=""
						src="https://img.icons8.com/dotty/80/000000/good-decision.png"
					/>
					<div className="info">
						<h5>Optimistic</h5>
						<p>If someone has done it, we can do better</p>
					</div>
				</div>
				<div className="attribute">
					<img
						alt=""
						src="https://img.icons8.com/ios/50/000000/happy--v1.png"
					/>
					<div className="info">
						<h5>Good mood</h5>
						<p>Good mood always</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeadsUp;

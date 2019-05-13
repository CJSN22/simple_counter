//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.css";

function Home(props) {
	return (
		<div className="counter">
			<div className="far fa-clock" />
			<div className="index-6">{props.six % 10}</div>
			<div className="index-5">{props.five % 10}</div>
			<div className="index-4">{props.four % 10}</div>
			<div className="index-3">{props.three % 10}</div>
			<div className="index-2">{props.two % 10}</div>
			<div className="index-1">{props.one % 10}</div>
		</div>
	);
}

Home.propTypes = {
	six: PropTypes.number,
	five: PropTypes.number,
	four: PropTypes.number,
	three: PropTypes.number,
	two: PropTypes.number,
	one: PropTypes.number
};

let count = 0;
setInterval(function() {
	const six = Math.floor(count / 10000);
	const five = Math.floor(count / 10000);
	const four = Math.floor(count / 1000);
	const three = Math.floor(count / 100);
	const two = Math.floor(count / 10);
	const one = Math.floor(count / 1);

	count++;
	//render your react application
	ReactDOM.render(
		<Home
			one={one}
			two={two}
			three={three}
			four={four}
			five={five}
			six={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

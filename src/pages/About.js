import React, { Component } from "react";
import "./pages.css";
import "./About.css";
import Member from "../components/Member";

class About extends Component {
	render() {
		return (
			<div className="page">
				<h1> OBJECTIVE </h1>{" "}
				<ul>
					<li>
						<h3> Create a new image using Genetic Algorithm. </h3>{" "}
					</li>{" "}
					<li>
						<h3> Research and understanding how Genetic Algorithm works. </h3>{" "}
					</li>{" "}
				</ul>{" "}
				<Member />
			</div>
		);
	}
}

export default About;

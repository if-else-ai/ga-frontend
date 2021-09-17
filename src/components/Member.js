import React, { Component } from "react";
import "./Member.css";
import MemberCard from "./Membercard"

class Member extends Component {
	render() {
		return (
			<div className="member">
				<h1> DEVELOPER </h1>
				<MemberCard />
			</div>
		);
	}
}

export default Member;

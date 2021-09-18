import "./Member.css";
import { Team } from "./team-info"
import Card from "./Card"

	const Member = () => {
		// let info = [
		// 	"/images/contributor/Natthadecha.jpg"
		// ];

		return (
			<div className="member">
				<h1> DEVELOPER </h1>
				<div className="member__items">
					{Team.map((item, index) => {
						return (
							<div className="member__item">
								<Card>
									<img src={item.image} alt="team" /> 
									<p>{item.name}</p>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
		);
	}

export default Member;

import "./Card.css";

	const Card = (props) => {
		return (
			<div className="member-card">
				{props.children}
			</div>
			
		);
	}

export default Card;

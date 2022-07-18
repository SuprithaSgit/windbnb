import './Stay.css';

const Stay = (props) => {
	return (
		<div className="stay_cont">
			<img src={props.stay.img} alt="stay"></img>
			<div className="stay_desc">
				<p>{props.stay.category}</p>
				<p>{props.stay.rating}⭐</p>
			</div>
			<p>
				<strong>{props.stay.title}</strong>
			</p>
		</div>
	);
};

export default Stay;

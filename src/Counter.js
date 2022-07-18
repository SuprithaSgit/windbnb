import './Counter.css';

const PersonCount = (props) => {
	return (
		<div className="counter">
			<h4>{props.selectCategory.name}</h4>
			<p>{props.selectCategory.desc}</p>
			<div>
				<button onClick={props.increment}> + </button>
				{props.count}
				<button onClick={props.decrement}> - </button>
			</div>
		</div>
	);
};

export default PersonCount;

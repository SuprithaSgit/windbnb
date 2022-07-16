import './Counter.css';
const Counter = (props) => {
	return (
		<div className="counter">
			<h4>{props.counter.name}</h4>
			<p>{props.counter.desc}</p>
			<div className="coufunc">
				<button onClick={props.increment}> + </button>
				{props.count}
				<button onClick={props.decrement}> - </button>
			</div>
		</div>
	);
};

export default Counter;

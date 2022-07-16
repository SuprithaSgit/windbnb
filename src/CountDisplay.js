import './CountDisplay.css';
import { useState } from 'react';
import Counter from './Counter';
function CountDisplay() {
	let [count, setCount] = useState(0);
	let [count1, setCount1] = useState(0);
	const counter = [
		{
			name: 'Adults',
			desc: 'Ages 13 or above',
		},
		{
			name: 'Children',
			desc: 'Ages 2 - 12',
		},
	];
	const incrementHandler = () => {
		setCount((count) => count + 1);
	};
	const decrementHandler = () => {
		if (count === 0) count = 0;
		else setCount((count) => count - 1);
	};
	const incrementHandler1 = () => {
		setCount1((count1) => count1 + 1);
	};
	const decrementHandler1 = () => {
		if (count1 === 0) count1 = 0;
		else setCount1((count1) => count1 - 1);
	};
	return (
		<div>
			<div className="container">
				<h6>Guests</h6> {count1 + count} guests
			</div>
			<div className="count-class">
				<Counter
					count={count}
					key={Math.random()}
					increment={incrementHandler}
					decrement={decrementHandler}
					counter={counter[0]}
				/>
				<Counter
					count={count1}
					key={Math.random()}
					counter={counter[1]}
					increment={incrementHandler1}
					decrement={decrementHandler1}
				/>
			</div>
		</div>
	);
}
export default CountDisplay;

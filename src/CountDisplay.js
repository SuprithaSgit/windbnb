import './CountDisplay.css';
import { useState } from 'react';
import PersonCount from './Counter';

function CountDisplay() {
	const [adultCount, setAdultCount] = useState(0);
	const [childCount, setChildCount] = useState(0);
	const selectCategory = [
		{
			name: 'Adults',
			desc: 'Ages 13 or above',
		},
		{
			name: 'Children',
			desc: 'Ages 2 - 12',
		},
	];
	const addAdult = () => {
		setAdultCount((prevAdultCount) => prevAdultCount + 1);
	};
	const removeAdult = () => {
		setAdultCount((adultCount) =>
			adultCount > 0 ? adultCount - 1 : (adultCount = 0)
		);
	};
	const addChildren = () => {
		setChildCount((prevChildCount) => prevChildCount + 1);
	};
	const removeChildren = () => {
		setChildCount((childCount) =>
			childCount > 0 ? childCount - 1 : (childCount = 0)
		);
	};
	return (
		<div>
			<div className="count_display">
				<h6>Guests</h6> {childCount + adultCount} guests
			</div>
			<div>
				<PersonCount
					count={adultCount}
					selectCategory={selectCategory[0]}
					increment={addAdult}
					decrement={removeAdult}
				/>
				<PersonCount
					count={childCount}
					selectCategory={selectCategory[1]}
					increment={addChildren}
					decrement={removeChildren}
				/>
			</div>
		</div>
	);
}
export default CountDisplay;

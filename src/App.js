import './App.css';
import CountDisplay from './CountDisplay';
import StayDetails from './StaysDetails';

function App() {
	return (
		<div className="App">
			<h3>Stays in Finland</h3>
			<StayDetails />
			<CountDisplay />
		</div>
	);
}

export default App;

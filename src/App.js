import './App.css';
import Stay from './Stay';
import CountDisplay from './CountDisplay';

function App() {
	const stay1 = [
		{
			rating: 4,
			category: 'Entire appartment',
			title: 'Stylist room in design district',
			img: 'https://picsum.photos/200/150?random=1',
		},
		{
			rating: 4.5,
			category: 'Entire appartment',
			title: 'Stylist appartment in center of city',
			img: 'https://picsum.photos/200/150?random=2',
		},
		{
			rating: 2.5,
			category: 'entire House',
			title: 'house appartment inremote area',
			img: 'https://picsum.photos/200/150?random=3',
		},
		{
			rating: 3.5,
			category: 'entire House',
			title: 'house appartment inremote area',
			img: 'https://picsum.photos/200/150?random=4',
		},
	];
	const stayList = stay1.map((obj) => <Stay key={Math.random()} stay={obj} />);
	return (
		<div className="App">
			<h3>Stays in Finland</h3>
			<div className="cont-class">{stayList}</div>
			<CountDisplay />
		</div>
	);
}

export default App;

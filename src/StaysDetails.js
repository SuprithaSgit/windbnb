import Stay from './Stay';

function StayDetails() {
	const stays = [
		{
			rating: 4,
			category: 'Entire appartment',
			title: 'Stylist room in design district',
			img: 'https://picsum.photos/350/250?random=1',
		},
		{
			rating: 4.5,
			category: 'Entire appartment',
			title: 'Stylist appartment in center of city',
			img: 'https://picsum.photos/350/250?random=2',
		},
		{
			rating: 2.5,
			category: 'entire House',
			title: 'house appartment inremote area',
			img: 'https://picsum.photos/350/250?random=3',
		},
		{
			rating: 3.5,
			category: 'entire House',
			title: 'house appartment inremote area',
			img: 'https://picsum.photos/350/250?random=4',
		},
	];
	const stayList = stays.map((stay, index) => <Stay key={index} stay={stay} />);
	return <div className="main_container">{stayList}</div>;
}
export default StayDetails;

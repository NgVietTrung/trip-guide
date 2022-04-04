import HotelListItem from './HotelListItem';

const HotelList = (props) => {
	return (
		<div className={`${props.className} grid grid-cols-1 gap-[30px]`}>
			<HotelListItem />
			<HotelListItem />
			<HotelListItem />
		</div>
	);
};

export default HotelList;

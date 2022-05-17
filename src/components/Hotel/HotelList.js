import { useState } from 'react';
import Button from '../../layouts/UI/Button';
import HotelListItem from './HotelListItem';

const HotelList = (props) => {
	const [loadMore, setLoadMore] = useState(3);

	const loadMoreHandler = () => {
		setLoadMore((prevState) => prevState + 3);
	};
	return (
		<div className={`${props.className} grid grid-cols-1 gap-[30px]`}>
			{props.hotels.slice(0, loadMore).map((hotel, index) => (
				<HotelListItem
					key={index}
					hotel={hotel}
					checkin={props.checkin}
					checkout={props.checkout}
				/>
			))}
			<Button
				className="font-medium px-10 py-[10px] text-[#141416] border border-[#B1B5C3] max-h-[46px] max-w-[176px] mx-auto rounded-[47px]"
				onClick={loadMoreHandler}
			>
				Show More
			</Button>
		</div>
	);
};

export default HotelList;

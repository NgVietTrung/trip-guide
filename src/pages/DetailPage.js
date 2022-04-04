import { useSelector } from 'react-redux';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import HotelDetail from '../components/Hotel/HotelDetail';
import FlightDetail from '../components/Flight/FlightDetail';
import CarDetail from '../components/Car/CarDetail';

const DetailPage = () => {
	const homeType = useSelector((state) => state.home.type);
	return (
		<div className="pt-[117px] bg-[#FAFAFB] pb-[280px]">
			<div className="md:flex items-center text-[#3B3E44] mb-10 hidden px-5 md:px-[135px]">
				<Link to="/">Home</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<Link to="/search">
					{homeType === 'hotel' ? 'Hotel' : homeType === 'flight' ? 'Flight' : 'Car'} List
				</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<span className="text-[#B1B5C3]">
					{homeType === 'hotel' ? 'Hotel' : homeType === 'flight' ? 'Flight' : 'Car'}{' '}
					Details
				</span>
			</div>
			{homeType === 'hotel' ? (
				<HotelDetail />
			) : homeType === 'flight' ? (
				<FlightDetail />
			) : (
				<CarDetail />
			)}
		</div>
	);
};

export default DetailPage;

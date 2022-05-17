import { useSelector } from 'react-redux';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PaymentSuccess from '../components/Payment/PaymentSuccess';

const CongratulationPage = () => {
	const homeType = useSelector((state) => state.home.type);
	return (
		<div className="pt-[117px] bg-[#FAFAFB] pb-[280px] md:text-sm tablet:text-base">
			<div className="md:flex items-center text-[#3B3E44] mb-10 hidden px-5 md:px-[135px]">
				<Link to="/">Home</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<Link to="/search">
					{homeType === 'hotel' ? 'Hotel' : homeType === 'flight' ? 'Flight' : 'Car'} List
				</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<Link to="/detail">
					{homeType === 'hotel' ? 'Hotel' : homeType === 'flight' ? 'Flight' : 'Car'}{' '}
					Details
				</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<Link to="/payment">Confirm and pay</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<span className="text-[#B1B5C3]">Congratulations</span>
			</div>
			<PaymentSuccess />
		</div>
	);
};

export default CongratulationPage;

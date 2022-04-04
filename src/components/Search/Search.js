import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdHotel, MdFlightTakeoff } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import Button from '../../layouts/UI/Button';
import { type } from '../../store/homeSlice';
import SearchContent from './SearchContent';
import Tab from '../../layouts/UI/Tab';

const Search = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const typeSearch = useSelector((state) => state.home.type);

	const tabStyleActive = 'border-b-4 border-[#3B71FE] text-[#3B3E44]';
	const tabStyleNonActive = 'border-none text-[#84878B]';

	const toggleTabHandler = (tab) => {
		console.log(tab);
		if (tab === 'hotel') {
			dispatch(type('hotel'));
		} else if (tab === 'flight') {
			dispatch(type('flight'));
		} else if (tab === 'car') {
			dispatch(type('car'));
		}
	};

	const searchingHandler = (event) => {
		event.preventDefault();

		navigate('/search');
	};

	return (
		<form
			onSubmit={searchingHandler}
			className={`relative mx-5 md:mx-[135px] mb-10 ${props.className}`}
		>
			<div
				className={`absolute -translate-y-1/2 overflow-hidden text-sm sm:text-base bg-white rounded-2xl divide-y border-[1px] border-solid border-[#e7ecf3] divide-gray-100 shadow-sm w-full p-5 sm:py-[30px] sm:px-[60px] flex flex-col ${
					typeSearch === 'hotel' ? 'lg:flex-row' : 'xl:flex-row'
				}`}
			>
				<div className="w-full">
					<div
						className={`flex justify-between flex-col ${
							typeSearch === 'hotel' ? 'lg:flex-row' : 'xl:flex-row'
						}`}
					>
						<div className="flex items-center justify-between lg:justify-start mb-5 lg:mb-0 ">
							<Tab
								className={
									typeSearch === 'hotel' ? tabStyleActive : tabStyleNonActive
								}
								onToggle={() => toggleTabHandler('hotel')}
							>
								<MdHotel className="text-xl sm:text-2xl mr-2" /> Hotel
							</Tab>
							<Tab
								className={
									typeSearch === 'flight' ? tabStyleActive : tabStyleNonActive
								}
								onToggle={() => toggleTabHandler('flight')}
							>
								<MdFlightTakeoff className="text-xl sm:text-2xl mr-2" /> Flight
							</Tab>
							<Tab
								className={
									typeSearch === 'car' ? tabStyleActive : tabStyleNonActive
								}
								onToggle={() => toggleTabHandler('car')}
							>
								<AiFillCar className="text-xl sm:text-2xl mr-2" /> Car Rental
							</Tab>
						</div>
						<div className="flex items-center text-base sm:text-lg font-medium text-[#3B3E44]">
							Passenger <BsChevronDown className="text-sm ml-[10px]" />
						</div>
					</div>
					<SearchContent />
				</div>
				<Button
					className={`w-full ${
						typeSearch === 'hotel'
							? 'lg:w-[152px] lg:mt-auto lg:h-[76px] lg:ml-5'
							: 'xl:w-[152px] xl:mt-auto xl:h-[76px] xl:ml-5'
					} block p-[11px] text-white text-xl font-bold mt-3 bg-[#3B71FE]`}
				>
					Search
				</Button>
			</div>
		</form>
	);
};

export default Search;

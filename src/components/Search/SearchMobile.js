import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { BiFilterAlt } from 'react-icons/bi';
import ModalForm from '../../layouts/UI/ModalForm';
import HotelFilter from '../Hotel/HotelFilter';
import FlightFilter from '../Flight/FlightFilter';
import CarFilter from '../Car/CarFilter';

const SearchMobile = (props) => {
	const homeType = useSelector((state) => state.home.type);
	const [isFiltered, setIsFiltered] = useState(false);

	const homeFilterMobileHandler = () => {
		setIsFiltered((prevState) => !prevState);
	};
	return (
		<div
			className={`flex items-center justify-between ${props.className} bg-white rounded-[30px] p-[6px] text-[#84878B] mb-[30px]`}
		>
			<Link
				to="/"
				className="p-[14px] rounded-[50%] shadow-[0_2px_3px_0_rgba(15,15,15,0.1)] mr-[10px]"
			>
				<BsChevronLeft className="text-[#84878B]" />
			</Link>
			<h6>Dubai, United arab emirates</h6>
			<p>July 27</p>
			<p>July 30</p>
			<div className="p-[14px] border-l-[1px] border-[#e7ecf3]">
				<BiFilterAlt
					className="text-2xl cursor-pointer"
					onClick={homeFilterMobileHandler}
				/>
			</div>
			{isFiltered && (
				<ModalForm
					onToggle={homeFilterMobileHandler}
					className="px-0 sm:px-0 w-[100%] max-w-full sm:max-w-[500px]"
				>
					{homeType === 'hotel' ? (
						<HotelFilter
							isMobileScreen={isFiltered}
							onCloseFilter={homeFilterMobileHandler}
						/>
					) : homeType === 'flight' ? (
						<FlightFilter
							isMobileScreen={isFiltered}
							onCloseFilter={homeFilterMobileHandler}
						/>
					) : (
						<CarFilter
							isMobileScreen={isFiltered}
							onCloseFilter={homeFilterMobileHandler}
						/>
					)}
				</ModalForm>
			)}
		</div>
	);
};

export default SearchMobile;

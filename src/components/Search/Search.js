import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useMatch } from 'react-router-dom';
import { MdHotel, MdFlightTakeoff } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import Button from '../../layouts/UI/Button';
import { type } from '../../store/homeSlice';
import SearchContent from './SearchContent';
import Tab from '../../layouts/UI/Tab';
import CardDropDown from '../../layouts/UI/CardDropdown';

const SORT_TYPE = ['HDR', 'PRICE', 'STAR', 'PROXIMITY', 'DEALS'];
const tabStyleActive = 'border-b-4 border-[#3B71FE] text-[#3B3E44]';
const tabStyleNonActive = 'border-none text-[#84878B]';

const Search = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const match = useMatch('/');
	const typeSearch = useSelector((state) => state.home.type);
	const [isSortBtnPressed, setIsSortBtnPressed] = useState(false);
	const [searchValue, setSearchValue] = useState({
		idLocation: null,
		dateCheckIn: null,
		dateCheckOut: null,
		sortOrder: 'HDR',
	});

	const searchValueHandler = (value) => {
		setSearchValue(value);
	};

	const toggleTabHandler = (tab) => {
		if (tab === 'hotel') {
			dispatch(type('hotel'));
		} else if (tab === 'flight') {
			dispatch(type('flight'));
		} else if (tab === 'car') {
			dispatch(type('car'));
		}
	};

	const searchSubmitHandler = (event) => {
		event.preventDefault();

		if (searchValue.idLocation && searchValue.dateCheckIn && searchValue.dateCheckOut) {
			navigate(
				`/search/hotel/${searchValue.idLocation}/${searchValue.dateCheckIn}/${searchValue.dateCheckOut}/${searchValue.sortOrder}`
			);
		} else {
			alert('Vui lòng chọn thông tin muốn tìm kiếm!');
		}
	};

	return (
		<form
			onSubmit={searchSubmitHandler}
			className={`relative mx-5 md:mx-[135px] mb-10 ${props.className}`}
		>
			<div
				className={`absolute -translate-y-1/2 text-sm sm:text-base bg-white rounded-2xl divide-y border-[1px] border-solid border-[#e7ecf3] divide-gray-100 shadow-sm w-full p-5 sm:py-[30px] sm:px-[60px] flex flex-col ${
					typeSearch === 'hotel' ? 'lg:flex-row' : 'xl:flex-row'
				}`}
			>
				<div className="w-full">
					<div
						className={`flex justify-between flex-col ${
							typeSearch === 'hotel' ? 'lg:flex-row' : 'xl:flex-row'
						}`}
					>
						{match && (
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
						)}
						<div className="flex items-center text-base sm:text-lg font-medium text-[#3B3E44] relative justify-end">
							Sort Order: {searchValue.sortOrder}
							<BsChevronDown
								className="text-sm ml-[10px] cursor-pointer"
								onClick={() => setIsSortBtnPressed((prevState) => !prevState)}
							/>
							{isSortBtnPressed && (
								<CardDropDown className="w-[150px] font-medium top-9 -right-3">
									{SORT_TYPE.map((item, index) => (
										<li
											key={index}
											className={`cursor-pointer px-5 py-[6px]  text-right ${
												searchValue.sortOrder === item
													? 'bg-[#E8EFFF]'
													: 'hover:bg-[#E8EFFF] hover:transition hover:duration-500'
											}`}
											onClick={() => {
												setSearchValue({ ...searchValue, sortOrder: item });
												setIsSortBtnPressed(false);
											}}
										>
											{item}
										</li>
									))}
								</CardDropDown>
							)}
						</div>
					</div>

					<SearchContent onContent={searchValueHandler} searchValue={searchValue} />
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

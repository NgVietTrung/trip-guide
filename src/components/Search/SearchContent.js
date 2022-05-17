import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { useSelector } from 'react-redux';
import Input from '../../layouts/UI/Input';
import SearchItem from './SearchItem';

const SearchContent = (props) => {
	const [searchTerm, setSearchTerm] = useState({ id: undefined, itemName: undefined });
	const [checkInTerm, setCheckInTerm] = useState('');
	const [checkOutTerm, setCheckOutTerm] = useState('');
	const [isSuggest, setIsSuggest] = useState(true);

	const debouncedSearchTerm = useDebounce(searchTerm.itemName, 500);
	const typeHome = useSelector((state) => state.home.type);

	const searchLocationHandler = (event) => {
		setIsSuggest(true);
		setSearchTerm((prevState) => {
			return {
				...prevState,
				itemName: event.target.value,
			};
		});
	};

	const selectCheckInDateHandler = (e) => {
		let checkInValue = e.target.value;
		if (checkOutTerm === '' || checkInValue <= checkOutTerm) {
			setCheckInTerm(checkInValue);

			props.onContent({
				...props.searchValue,
				dateCheckIn: checkInValue,
			});
		} else {
			alert('Vui lòng chọn thời gian checkin nhỏ hơn checkout');
		}
	};

	const selectCheckOutDateHandler = (e) => {
		let checkOutValue = e.target.value;
		if (checkInTerm === '' || checkInTerm <= checkOutValue) {
			setCheckOutTerm(checkOutValue);

			props.onContent({
				...props.searchValue,
				dateCheckOut: checkOutValue,
			});
		} else {
			alert('Vui lòng chọn thời gian checkout lớn hơn checkin');
		}
	};

	const selectLocationHandler = (value) => {
		setIsSuggest(false);
		setSearchTerm(value);

		props.onContent({
			...props.searchValue,
			idLocation: value.id,
		});
	};

	return (
		<div
			className={`grid grid-cols-10 ${
				typeHome === 'hotel' ? 'grid-rows-2 lg:grid-rows-1' : 'grid-rows-3 xl:grid-rows-1'
			} mt-8 gap-2`}
		>
			<div
				className={`col-span-10 ${
					typeHome === 'hotel' ? 'lg:col-span-4' : 'xl:col-span-3'
				} px-6 py-[10px] bg-[#F4F5F7] rounded-lg cursor-auto relative`}
			>
				<h3 className="text-base sm:text-lg font-medium text-[#3B3E44]">
					{typeHome === 'hotel' ? 'Location' : 'Leaving From'}
				</h3>
				<Input
					type="text"
					value={searchTerm.itemName}
					onChange={searchLocationHandler}
					placeholder="Where are you from?"
					className="border-none p-0 bg-[#F4F5F7] rounded-none text-sm lg:text-base"
				/>
				{searchTerm?.itemName?.length > 3 && isSuggest && (
					<SearchItem
						searchValue={debouncedSearchTerm}
						onSearch={selectLocationHandler}
					/>
				)}
			</div>
			{typeHome !== 'hotel' && (
				<div className="col-span-10 xl:col-span-3 px-6 py-[10px] bg-[#F4F5F7] rounded-lg cursor-auto">
					<h3 className="text-base sm:text-lg font-medium text-[#3B3E44]">Going to</h3>
					<Input
						type="text"
						value={searchTerm}
						onChange={searchLocationHandler}
						placeholder="Where are you from?"
						className="border-none p-0 bg-[#F4F5F7] rounded-none text-sm lg:text-base"
					/>
				</div>
			)}
			<div
				className={`col-span-5 ${
					typeHome === 'hotel' ? 'lg:col-span-3' : 'xl:col-span-2'
				} px-6 py-3 bg-[#F4F5F7] rounded-lg`}
			>
				<h3 className="text-base sm:text-lg font-medium text-[#3B3E44]">Check in</h3>
				<Input
					type="date"
					value={checkInTerm}
					onChange={selectCheckInDateHandler}
					className="border-none p-0 bg-[#F4F5F7] rounded-none text-sm lg:text-base"
				/>
			</div>
			<div
				className={`col-span-5 ${
					typeHome === 'hotel' ? 'lg:col-span-3' : 'xl:col-span-2'
				} px-6 py-3 bg-[#F4F5F7] rounded-lg`}
			>
				<h3 className="text-base sm:text-lg font-medium text-[#3B3E44]">Check out</h3>
				<Input
					type="date"
					value={checkOutTerm}
					onChange={selectCheckOutDateHandler}
					className="border-none p-0 bg-[#F4F5F7] rounded-none text-sm lg:text-base"
				/>
			</div>
		</div>
	);
};

export default SearchContent;

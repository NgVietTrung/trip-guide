import React, { useState } from 'react';
import BookingItemDetail from './BookingItemDetail';

const BookingItem = () => {
	const [isDetail, setIsDetail] = useState(false);

	const showDetailHandler = () => {
		setIsDetail(!isDetail);
	};
	return (
		<>
			<div
				className="rounded-[20px] bg-white p-3 md:p-[23px] flex mb-[30px] cursor-pointer"
				onClick={showDetailHandler}
			>
				<div className="w-[146px] h-[114px] rounded-[5px] overflow-hidden mr-[18px]">
					<img
						className="w-full h-full object-cover"
						alt=""
						srcSet="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
					/>
				</div>
				<div className="flex flex-col-reverse md:flex-row md:items-center text-[#3B3E44] md:justify-between w-full">
					<div className="mb-auto md:mb-0">
						<h3 className="text-base sm:text-2xl font-medium mb-[6px] md:mb-[3px]">
							Baan Wanglang Riverside
						</h3>
						<p className="text-[#84878B] text-[12px] sm:text-xl">
							342 Soi Wat Rakang, Prannok Rd, Siriral, Bankoknoi, Bangkok, Thailand
						</p>
					</div>
					<p className="text-[#84878B] md:text-[#3B3E44] text-sm sm:text-lg font-medium mt-auto md:mt-0 md:text-center">
						Booked on April 8,2020
					</p>
				</div>
			</div>
			{isDetail && <BookingItemDetail />}
		</>
	);
};

export default BookingItem;

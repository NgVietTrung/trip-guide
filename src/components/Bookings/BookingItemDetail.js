import React from 'react';

const BookingItemDetail = () => {
	return (
		<div className="rounded-[20px] bg-white p-[23px] flex justify-between items-center text-base sm:text-xl font-medium text-[#3B3E44] text-center mb-[30px] flex-col md:flex-row">
			<ul className="mb-10 md:mb-0">
				<li className="flex justify-center">
					<h6 className="mb-2 mr-[33px]">B2oking ID:</h6>
					<p>9246940</p>
				</li>
				<li className="flex justify-center text-[#84878B]">
					<h6 className="mb-2 mr-[23px]">Check-in:</h6>
					<p className="font-normal">April 8, 2020</p>
				</li>
				<li className="flex justify-center text-[#84878B]">
					<h6 className="mb-2 mr-[23px]">Check-out:</h6>
					<p className="font-normal">April 9, 2020</p>
				</li>
				<li className="flex justify-center text-[#84878B]">
					<h6 className="mb-2 mr-[23px]">Room type:</h6>
					<p className="font-normal">Superior Double or Twin Room Only</p>
				</li>
				<li className="flex justify-center text-[#84878B]">
					<h6 className="mb-2 mr-[23px]">Number of Rooms:</h6>
					<p className="font-normal">1</p>
				</li>
			</ul>

			<div>
				<h3 className="text-lg sm:text-2xl mb-[5px]">THB 1,950.00</h3>
				<p className="text-[#3B71FECC] font-normal text-sm sm:text-base mb-[18px]">
					Booking Conditions
				</p>
				<div className="px-12 py-[7px] bg-[#F4F5F6] rounded-md font-normal leading-8 cursor-pointer text-[#353945] mb-3">
					Manage booking
				</div>
				<div className="px-12 py-[7px] bg-[#3B71FE] text-white rounded-md font-bold leading-8 cursor-pointer">
					Book Again
				</div>
			</div>
		</div>
	);
};

export default BookingItemDetail;

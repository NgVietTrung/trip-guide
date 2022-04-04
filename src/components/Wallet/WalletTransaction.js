import React from 'react';
import { BsPhone } from 'react-icons/bs';

const WalletTransaction = () => {
	return (
		<div className="lg:col-span-7 rounded-[20px] p-5 bg-white">
			<h2 className="text-[30px] sm:text-[34px] font-bold text-[#252525] mb-6">
				Wallet Transactions
			</h2>
			<div className="flex flex-wrap items-center text-[#84878B] pb-[23px] border-b border-[#E6E8EC] mb-[18px]">
				<div className="mb-[9px] cursor-pointer rounded-[5px] py-[11px] px-[17px] text-[#FEFEFE] bg-[#145CE6] mr-[9px] text-sm sm:text-base">
					ALL
				</div>
				<div className="mb-[9px] cursor-pointer rounded-[5px] py-[11px] px-[17px] border-[1px] border-[#e4e4e4] mr-[9px] flex text-sm sm:text-base items-center">
					<span className="w-6 h-6 rounded-[50%] bg-[#145CE6] mr-[9px] flex items-center justify-center block text-white">
						$
					</span>
					My Cash
				</div>
				<div className="mb-[9px] cursor-pointer rounded-[5px] py-[11px] px-[17px] border-[1px] border-[#e4e4e4] mr-[9px] flex text-sm sm:text-base items-center">
					<span className="w-6 h-6 rounded-[50%] bg-[#FA8F54] mr-[9px] flex items-center justify-center block text-white">
						$
					</span>
					Reward Bonus
				</div>
			</div>
			<div className="flex items-center mb-[26px] flex-wrap">
				<p className="py-2 px-[17px] bg-[#F4F5F6] rounded-[18px] text-[#3B3E44] mr-2 mb-2 text-sm sm:text-base ">
					Promo
				</p>
				<p className="py-2 px-[17px] bg-[#F4F5F6] rounded-[18px] text-[#3B3E44] mr-2 mb-2 text-sm sm:text-base">
					MMI Black
				</p>
				<p className="py-2 px-[17px] bg-[#F4F5F6] rounded-[18px] text-[#3B3E44] mr-2 mb-2 text-sm sm:text-base">
					My Promise
				</p>
				<p className="py-2 px-[17px] bg-[#F4F5F6] rounded-[18px] text-[#3B3E44] mr-2 mb-2 text-sm sm:text-base">
					Refunds
				</p>
				<p className="py-2 px-[17px] bg-[#F4F5F6] rounded-[18px] text-[#3B3E44] mr-2 mb-2 text-sm sm:text-base">
					Others
				</p>
			</div>
			<p className="text-[#84878B] text-sm">22 JAN 2020</p>
			<div className="flex items-center pb-[38px] border-b border-[#E8E8E8] mt-[22px]">
				<div className="w-[64px] h-[50px] sm:w-[80px] sm:h-[66px] bg-[#ebf1ff] rounded-[50%] flex justify-center items-center mr-5">
					<BsPhone className="text-[#145CE6] text-2xl block" />
				</div>
				<div className="flex flex-col w-full">
					<h5 className="text-base sm:text-lg font-medium">Booking</h5>
					<div className="flex text-[#84878b] text-base sm:text-lg justify-between mb-3">
						<div>
							Booking ID <span className="text-[#353945]">NR710746375497578453</span>
						</div>
						<p className="text-base sm:text-lg font-medium text-[#222529]">
							$<span>526</span>
						</p>
					</div>
					<div className="flex text-[#84878B] text-base sm:text-lg">
						<span className="w-6 h-6 rounded-[50%] bg-[#FA8F54] mr-[9px] flex items-center justify-center block text-white">
							$
						</span>
						My Cash Debited
					</div>
				</div>
			</div>
			<div className="flex items-center pb-[18px] mt-[22px]">
				<div className="w-[64px] h-[50px] sm:w-[80px] sm:h-[66px] bg-[#ebf1ff] rounded-[50%] flex justify-center items-center mr-5">
					<BsPhone className="text-[#145CE6] text-2xl block" />
				</div>
				<div className="flex flex-col w-full">
					<h5 className="text-base sm:text-lg font-medium">Booking</h5>
					<div className="flex text-[#84878b] text-base sm:text-lg justify-between mb-3">
						<div>
							Booking ID <span className="text-[#353945]">NR710746375497578453</span>
						</div>
						<p className="text-base sm:text-lg font-medium text-[#222529]">
							$<span>40</span>
						</p>
					</div>
					<div className="flex text-[#84878B] text-base sm:text-lg">
						<span className="w-6 h-6 rounded-[50%] bg-[#FA8F54] mr-[9px] flex items-center justify-center block text-white">
							$
						</span>
						Reward Bonus Debited
					</div>
				</div>
			</div>
		</div>
	);
};

export default WalletTransaction;

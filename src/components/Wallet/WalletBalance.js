import React from 'react';

const WalletBalance = () => {
	return (
		<div className="mb-[30px] md:mb-0 col-start-1 lg:col-span-5">
			<div className="text-white text-center bg-[#3B71FE] rounded-t-[20px] py-[22px]">
				<h1 className="text-[30px] sm:text-[42px] font-medium">$ 6,824</h1>
				<p className="text-[22px] sm:text-2xl">Wallet Balance</p>
			</div>
			<div className="rounded-b-[20px] bg-white p-[30px] text-[#3B3E44]">
				<div className="flex items-center mb-[34px]">
					<div
						className="text-white text-2xl bg-[#FA8F54] rounded-[50%] w-11 h-9 flex items-center justify-center mr-[15px]
            "
					>
						$
					</div>
					<div className="w-full">
						<div className="flex justify-between items-center mb-2">
							<h3 className="text-[22px] sm:text-2xl ">My Cash</h3>
							<p className="text-[17px] sm:text-xl font-bold">1,956</p>
						</div>
						<div className="flex justify-between items-center">
							<div className="text-[#FA8F54] bg-[#fef4eb] rounded-[22px] py-1 px-[13px] text-xs text-center">
								Use Unrestricted
							</div>
							<p className="text-[#145CE6] text-right text-sm sm:text-base">
								How to use?
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-center pb-9 border-b border-[#F4F5F6]">
					<div
						className="text-white text-2xl bg-[#3B71FE] rounded-[50%] w-11 h-9 flex items-center justify-center mr-[15px]
            "
					>
						$
					</div>
					<div className="w-full">
						<div className="flex justify-between items-center mb-2">
							<h3 className="text-[22px] sm:text-2xl">Reward Bonus</h3>
							<p className="text-[17px] sm:text-xl font-bold"> 4,871</p>
						</div>
						<div className="flex justify-between items-center">
							<div className="text-[#FA8F54] bg-[#fef4eb] rounded-[22px] py-1 px-[13px] text-xs text-center">
								Use With Restrictions
							</div>
							<p className="text-[#145CE6] text-right text-sm sm:text-base">
								How to use?
							</p>
						</div>
					</div>
				</div>
				<div className="px-8 py-[13px] rounded-[10px] bg-[#F4F5F6] mt-6">
					<p className="text-center font-medium text-xs sm:text-base">
						$ 60 Reward Bonus will expire on Jan 24, 2020
					</p>
				</div>
			</div>
		</div>
	);
};

export default WalletBalance;

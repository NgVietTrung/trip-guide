import React from 'react';

const RewardItem = () => {
	return (
		<div className="bg-white rounded-[20px] py-8 sm:py-[60px] text-[#3B3E44]">
			<div className="flex justify-between sm:justify-center items-center mb-[30px]">
				<div className="mr-0 ml-[12px] sm:mr-[37px]">
					<h3 className="text-2xl sm:text-[34px] mb-[9px] font-bold">Elite status</h3>
					<p>Points Earned in 2020</p>
				</div>
				<div className="rounded-[10px] bg-white p-5 text-center shadow-[0_32px_70px_0_rgba(241,241,241,1)] ml-0 mr-[12px] sm:ml-[37px]">
					<h6 className="text-[#222529] text-lg font-medium mb-[9px]">18,592</h6>
					<p className="text-[#84878B] text-sm">(worth 37 USD)</p>
				</div>
			</div>
			<p className="text-[#84878B] text-center mb-5 sm:mb-[56px] mx-3">
				25 USD is the minimum rewards claim at a time
			</p>
			<div className="flex justify-around text-center text-white flex-wrap">
				<div className="m-[10px] py-3 bg-[#145CE6] rounded-[10px] px-[27px] w-[192px] h-[100px]">
					<h6>Total Points Pending</h6>
					<h6>0</h6>
				</div>
				<div className="m-[10px] py-3 bg-[#FA8F54] rounded-[10px] px-[27px] w-[192px] h-[100px]">
					<h6>Accumulated and Available Points</h6>
					<h6>10.00</h6>
				</div>
				<div className="m-[10px] py-3 bg-[#58C27D] rounded-[10px] px-[27px] w-[192px] h-[100px]">
					<h6>Expiring Dec 31,2016</h6>
					<h6>0</h6>
				</div>
			</div>
		</div>
	);
};

export default RewardItem;

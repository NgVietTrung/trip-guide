import React from 'react';
import { FaStar } from 'react-icons/fa';
import Button from '../../layouts/UI/Button';

const HomeItemTrending = () => {
	return (
		<div
			className={`border-[#E7ECF3] border-[1px] rounded-[10px] bg-white shadow-md cursor-pointer p-6 flex`}
		>
			<div className="max-w-[160px] h-[160px] mr-[30px]">
				<img
					srcSet="https://images.unsplash.com/photo-1610106109549-5813ab87ae88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
					alt=""
					className="rounded-[10px] object-cover block w-full h-full"
				/>
			</div>
			<div className="flex flex-col justify-between">
				<h6 className="text-2xl font-bold text-left">Manila</h6>
				<div className="flex items-center">
					<FaStar className="text-[#FFD166]" />
					<p className="ml-2">
						4.91 <span className="text-[#84878b]">(147)</span>
					</p>
				</div>
				<h6 className="text-2xl font-bold">
					$250.00<span className="text-base text-[#84878b]">/night</span>
				</h6>
				<Button className="bg-[#316BFF] text-white px-4 py-2 text-sm font-bold">
					Book Now
				</Button>
			</div>
		</div>
	);
};

export default HomeItemTrending;

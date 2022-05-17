import React from 'react';
import { FaStar } from 'react-icons/fa';

const HomeItemAbsolute = (props) => {
	return (
		<div
			className={`${props.className} shadow-md cursor-pointer relative rounded-[18px] overflow-hidden`}
		>
			<img
				srcSet="https://images.unsplash.com/photo-1610106109549-5813ab87ae88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
				alt=""
				className="object-cover mb-[18px] block w-full h-full"
			/>
			<div className="absolute top-[14px] left-[20px] lg:left-[30px] bg-white flex items-center rounded-[20px] px-2 py-1">
				<FaStar className="text-[#FFD166]" />
				<p className="text-[#FF543D] ml-1">4.5</p>
			</div>
			<div className="absolute bottom-[14px] left-[20px] lg:left-[30px] text-white w-full">
				<h6 className="text-2xl lg:text-[40px] font-bold text-left whitespace-nowrap !overflow-hidden text-ellipsis w-4/5 mb-2">
					{props.itemName}
				</h6>
				<p className="text-left">No.{Math.floor(props.rank)} on ranking</p>
			</div>
		</div>
	);
};

export default HomeItemAbsolute;

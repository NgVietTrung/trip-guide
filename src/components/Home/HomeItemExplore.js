import React from 'react';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const HomeItemExplore = (props) => {
	return (
		<div
			className={`${props.className} border-[#E7ECF3] border-[1px] rounded-[20px] bg-white shadow-md cursor-pointer overflow-hidden text-left`}
		>
			<img
				srcSet="https://images.unsplash.com/photo-1610106109549-5813ab87ae88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
				alt=""
				className="rounded-t-[20px] object-cover block"
			/>
			<div className="text-left p-5">
				<h6 className="text-2xl font-medium mb-1">Cancun Flight</h6>
				<p className="text-[#84878B] mb-[10px]">City, House</p>
				<div className="flex items-center text-[#84878B]">
					<FaMapMarkerAlt />
					<p className="ml-[10px]">Turkey, Mamaris</p>
				</div>
				<div className="flex items-center text-[#84878B]">
					<FaBuilding />
					<p className="ml-[10px]">Rooms available: 375</p>
				</div>
			</div>
		</div>
	);
};

export default HomeItemExplore;

import React from 'react';
import { FaStar } from 'react-icons/fa';

const HomeItemPassion = () => {
	return (
		<div className="shadow-md cursor-pointer relative rounded-[18px] overflow-hidden">
			<img
				srcSet="https://images.unsplash.com/photo-1610106109549-5813ab87ae88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
				alt=""
				className="object-cover mb-[18px] block w-full h-full"
			/>

			<div className="absolute bottom-[17px] left-[30px] text-white">
				<h6 className="text-2xl font-bold mb-2">Beach Hobby</h6>
				<div className="flex items-center">
					<FaStar className="text-[#FFD166]" />
					<p className="text-white ml-1 text-sm">4.8 (122 reviews)</p>
				</div>
			</div>
		</div>
	);
};

export default HomeItemPassion;

import React from 'react';

const HomeItem = (props) => {
	return (
		<div
			className={`${props.className} border-[#E7ECF3] border-[1px] rounded-[10px] bg-white shadow-md cursor-pointer pb-6`}
		>
			<img
				srcSet="https://images.unsplash.com/photo-1610106109549-5813ab87ae88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
				alt=""
				className="rounded-t-[10px] object-cover mb-[18px] block"
			/>
			<h6 className="text-xl font-bold mb-3">Batu, East Java</h6>
			<p className="text-[#84878B]">86 Destinations</p>
		</div>
	);
};

export default HomeItem;

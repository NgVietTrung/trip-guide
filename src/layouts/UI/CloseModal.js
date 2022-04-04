import React from 'react';

const CloseModal = (props) => {
	return (
		<div
			className="absolute top-0 right-0 bg-white rounded-[50%] flex items-center justify-center w-9 h-9 -translate-y-1/2 translate-x-1/2 z-40 border-2 border-[#e7ecf3] text-xl cursor-pointer"
			onClick={props.onToggle}
		>
			x
		</div>
	);
};

export default CloseModal;

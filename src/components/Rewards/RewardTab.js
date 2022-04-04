import React from 'react';

const RewardTab = (props) => {
	return (
		<button
			className={`${props.className} mr-[30px] sm:mr-[56px] text-sm sm:text-lg text-[#3B3E44] font-medium pb-[18px] transition-[border] duration-500 `}
			onClick={props.onToggle}
		>
			{props.title}
		</button>
	);
};

export default RewardTab;

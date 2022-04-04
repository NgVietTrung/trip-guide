import React from 'react';

const NotificationDropdownItem = (props) => {
	return (
		<li
			className=" pl-6 py-[10px] first:mt-[26px] pr-[25px] sm:pr-[56px] hover:bg-gray-100 cursor-pointer
			text-base text-[#23262F]-400 flex justify-between hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
		>
			<div className="mr-[10px]">
				<img
					srcSet={props.ava}
					alt=""
					className="w-8 h-7 sm:w-9 sm:h-8 object-cover rounded-[19px]"
				/>
			</div>
			<div className="max-w-[300px] w-full text-sm leading-[18px]">
				<p className="mb-[6px] text-sm text-[#3B3E44]">{props.des}</p>
				<div className="text-[#B1B5C3] text-xs ">{props.time}</div>
			</div>
		</li>
	);
};

export default NotificationDropdownItem;

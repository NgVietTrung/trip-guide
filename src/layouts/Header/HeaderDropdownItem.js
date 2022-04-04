import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDropdownItem = (props) => {
	return (
		<li className=" pl-5 py-3 pr-[62px] hover:bg-gray-100 cursor-pointer">
			<Link
				to={props.link}
				onClick={props.onLogout ? props.onLogout : undefined}
				className="block w-full text-base text-[#23262F]-400 flex min-w-[169px] items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
			>
				<span className="inline-block mr-5 text-[#777E90] text-xl">{props.icon}</span>
				{props.title}
			</Link>
		</li>
	);
};

export default HeaderDropdownItem;

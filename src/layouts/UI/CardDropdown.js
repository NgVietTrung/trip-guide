const CardDropDown = (props) => {
	return (
		<div
			className={`${props.className} absolute overflow-hidden z-10 text-base list-none bg-white rounded-2xl divide-y border-[1px] border-solid border-[#e7ecf3] divide-gray-100 shadow-sm dark:bg-gray-700 dark:divide-gray-600`}
		>
			<ul>{props.children}</ul>
		</div>
	);
};

export default CardDropDown;

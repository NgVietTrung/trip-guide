const Tab = (props) => {
	return (
		<div
			className={`${props.className} lg:mr-8 text-[#3B3E44] font-medium pb-[18px] transition-[border] duration-500 flex items-center cursor-pointer`}
			onClick={props.onToggle}
		>
			{props.children}
		</div>
	);
};

export default Tab;

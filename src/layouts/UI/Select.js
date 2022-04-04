import { BsChevronDown } from 'react-icons/bs';

const Select = (props) => {
	return (
		<div
			className={`${props.className} flex justify-between items-center cursor-pointer bg-[#F4F5F6] rounded-[10px]`}
			onClick={props.onClick}
		>
			{props.children}
			<BsChevronDown className="text-[#353945]" />
		</div>
	);
};

export default Select;

import React from 'react';

const Checkbox = (props) => {
	return (
		<div className={`flex items-center ${props.className}`}>
			<input
				className={`mb-[14px] form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-[7px] bg-white checked:bg-blue-600 focus:outline-none transition duration-100 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer ring-transparent focus:ring-transparent`}
				onChange={props.onChange}
				name={props.name}
				type="checkbox"
				value={props.value}
				id="flexCheckDefault"
			/>
			<label
				className="form-check-label inline-block text-[#3B3E44] text-base pb-3"
				htmlFor="flexCheckDefault"
			>
				{props.label}
			</label>
		</div>
	);
};

export default Checkbox;

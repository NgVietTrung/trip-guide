import { useState } from 'react';
import { Range } from 'react-range';

const RangeInput = (props) => {
	const [values, setValues] = useState([props.value]);
	return (
		<>
			<Range
				step={props.step}
				min={props.min}
				max={props.max}
				values={values}
				onChange={(values) => {
					setValues(values);
					props.onValue(values);
				}}
				renderTrack={({ props, children }) => (
					<div {...props} className="w-full h-[6px] pr-2 my-4 bg-gray-200 rounded-md">
						{children}
					</div>
				)}
				renderThumb={({ props }) => (
					<div
						{...props}
						className="w-[18px] h-[18px] transform translate-x-10 bg-[#316BFF] rounded-full"
					/>
				)}
			/>
			<div className="flex justify-between items-center text-[#3B3E44] font-medium mt-3">
				<p>1</p>
				<div className="px-1 py-[1px] border-[#316BFF] border-2 rounded-[9px]">
					{values}
				</div>
				<p>8</p>
			</div>
		</>
	);
};

export default RangeInput;

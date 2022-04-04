import Checkbox from '../../layouts/UI/Checkbox';
import Input from '../../layouts/UI/Input';
import RangeInput from '../../layouts/UI/RangeInput';
import useInput from '../../hooks/useInput';
import Button from '../../layouts/UI/Button';
import { GrClose } from 'react-icons/gr';

const HotelFilter = (props) => {
	const { value: locationValue, valueChangeHandler: locationChangeHandler } = useInput(
		(value) => value.length >= 0
	);

	return (
		<form
			className={`${props.className} ${
				props.isMobileScreen ? 'overflow-y-scroll h-screen px-[30px]' : ''
			}`}
		>
			{props.isMobileScreen && (
				<div className="flex justify-between items-center border-b-[#e7ecf3] border-b-2 mb-[30px] py-[30px] font-medium text-lg">
					<Button className="text-xl" onClick={props.onCloseFilter}>
						<GrClose />
					</Button>
					<p>Filters</p>
					<Button>Clear</Button>
				</div>
			)}
			<div className="mb-[30px]">
				<h6 className="text-[#141416] font-medium text-lg mb-3">
					Search location or property
				</h6>
				<Input
					placeholder="Search location or property"
					className="border-[#E7ECF3] px-5 py-4"
					onChange={locationChangeHandler}
					value={locationValue}
				/>
			</div>
			<div className="mb-[30px] flex flex-col">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Popular Filters</h6>
				<Checkbox className="mb-[14px]" label="Hotels" />
				<Checkbox className="mb-[14px]" label="Breakfast and Dinner" />
				<Checkbox className="mb-[14px]" label="Free Cancellation" />
				<Checkbox className="mb-[14px]" label="No prepayment" />
			</div>
			<div className="mb-[30px]">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Price Range</h6>
				<RangeInput />
			</div>
			<div className="mb-[30px]">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Property Type</h6>
				<div className="flex justify-between items-center">
					<Checkbox className="mb-[14px]" label="Hotels" />
					<p className="pb-3 text-[#84878B]">108</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox className="mb-[14px]" label="Apartments" />
					<p className="pb-3 text-[#84878B]">141</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox className="mb-[14px]" label="Resort" />
					<p className="pb-3 text-[#84878B]">108</p>
				</div>
			</div>
			<div className="mb-[30px]">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Facilities</h6>
				<div className="flex justify-between items-center">
					<Checkbox className="mb-[14px]" label="Outdoor Sports" />
					<p className="pb-3 text-[#84878B]">108</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox className="mb-[14px]" label="Berbeque" />
					<p className="pb-3 text-[#84878B]">141</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox className="mb-[14px]" label="Living Room" />
					<p className="pb-3 text-[#84878B]">108</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox className="mb-[14px]" label="Room Service" />
					<p className="pb-3 text-[#84878B]">108</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox className="mb-[14px]" label="Swimming Pool" />
					<p className="pb-3 text-[#84878B]">141</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox className="mb-[14px]" label="Spa" />
					<p className="pb-3 text-[#84878B]">108</p>
				</div>
			</div>
		</form>
	);
};

export default HotelFilter;

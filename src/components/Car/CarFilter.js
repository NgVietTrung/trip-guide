import Checkbox from '../../layouts/UI/Checkbox';
import RangeInput from '../../layouts/UI/RangeInput';
import Button from '../../layouts/UI/Button';
import { GrClose } from 'react-icons/gr';

const CarFilter = (props) => {
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
			<div className="mb-[30px] flex flex-col">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Best Brands</h6>
				<Checkbox label="Audi" />
				<Checkbox label="BMW" />
				<Checkbox label="Acura" />
				<Checkbox label="Honda" />
				<Checkbox label="Jeep" />
				<Checkbox label="Mercury" />
				<Checkbox label="Other" />
			</div>
			<div className="mb-[30px] flex flex-col">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Capacity</h6>
				<Checkbox label="2-5 passengers" />
				<Checkbox label="6 or more passengers 12" />
			</div>
			<div className="mb-[30px]">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Price Range</h6>
				<RangeInput />
			</div>
			<div className="mb-[30px] flex flex-col">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Car Specs</h6>
				<Checkbox label="Air Conditioning" />
				<Checkbox label="4+ doors" />
			</div>
			<div className="mb-[30px] flex flex-col">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Mileage/Kilometers</h6>
				<Checkbox label="Limited" />
				<Checkbox label="Unlimited" />
			</div>
		</form>
	);
};

export default CarFilter;

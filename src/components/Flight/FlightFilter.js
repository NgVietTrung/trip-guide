import Checkbox from '../../layouts/UI/Checkbox';
import RangeInput from '../../layouts/UI/RangeInput';
import Button from '../../layouts/UI/Button';
import { GrClose } from 'react-icons/gr';

const FlightFilter = (props) => {
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
				<h6 className="text-[#141416] font-medium text-lg mb-3">Popular Filters</h6>
				<div className="flex justify-between items-center">
					<Checkbox label="Non Stop" />
					<p className="pb-3 text-[#84878B]">$2.632</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox label="IndiGo" />
					<p className="pb-3 text-[#84878B]">$2.245</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox label="Vistara" />
					<p className="pb-3 text-[#84878B]">$2.846</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox label="Late Departures" />
					<p className="pb-3 text-[#84878B]">$2.845</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox label="Go First" />
					<p className="pb-3 text-[#84878B]">$2.567</p>
				</div>
			</div>
			<div className="mb-[30px]">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Price Range</h6>
				<RangeInput />
			</div>
			<div className="mb-[30px]">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Stops</h6>
				<div className="flex justify-between items-center">
					<Checkbox label="Hotels" />
					<p className="pb-3 text-[#84878B]">$2.527</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox label="Apartments" />
					<p className="pb-3 text-[#84878B]">$2.867</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox label="Resort" />
					<p className="pb-3 text-[#84878B]">$2.367</p>
				</div>
			</div>
			<div className="mb-[30px]">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Airlines</h6>
				<div className="flex justify-between items-center">
					<Checkbox label="Air India" />
					<p className="pb-3 text-[#84878B]">$2.381</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox label="Go First" />
					<p className="pb-3 text-[#84878B]">$2.846</p>
				</div>
				<div className="flex justify-between items-center">
					<Checkbox label="IndiGo" />
					<p className="pb-3 text-[#84878B]">$2.247</p>
				</div>
			</div>
		</form>
	);
};

export default FlightFilter;

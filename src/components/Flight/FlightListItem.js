import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { IoAirplaneOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import emirates from '../../assets/images/emirates.svg';
import Button from '../../layouts/UI/Button';

const FlightListItem = () => {
	return (
		<div className="rounded-[20px] border-2 border-[#E7ECF3] bg-white p-[30px] h-fit">
			<div className="mb-5">
				<h3 className="flex text-[#3B3E44] items-center text-lg font-medium mb-7 lg:mb-3">
					Dhaka
					<span>
						<BsArrowRight className="text-[#84878b] text-2xl mx-2" />
					</span>
					Dubai Thu, 19 Aug
				</h3>
				<div className="flex flex-col lg:flex-row justify-between items-center pb-5 border-[#E7ECF3] border-b-2">
					<div className="hidden lg:block">
						<img alt="" srcSet={emirates} className="w-20" />
					</div>
					<div className="flex justify-between items-center text-[#23262F] w-full lg:w-auto">
						<div className="text-center">
							<h2 className="text-2xl font-medium">DAC</h2>
							<p className="text-[#777E90] text-sm">07:45 AM</p>
						</div>
						<div className="text-[#B1B5C3] lg:mx-[44px] flex flex-col items-center">
							<div className="flex items-center flex-col border-[#FFAF4E] border-2 rounded-full p-4 border-b-transparent min-w-[80px]">
								<p className="text-xs">5h 20m</p>
								<IoAirplaneOutline className="text-[#3B71FE] text-2xl" />
							</div>
							<p className="text-sm">nonstop</p>
						</div>
						<div className="text-center">
							<h2 className="text-2xl font-medium">DXB</h2>
							<p className="text-[#777E90] text-sm">12:05 PM</p>
						</div>
					</div>
					<div className="text-center hidden lg:block">
						<h2 className="text-2xl font-medium mb-2">$350</h2>
						<Button className="bg-[#3B71FE] px-[23px] py-[9px] rounded-[25px] text-white text-sm font-bold">
							Book Now
						</Button>
					</div>
					{/* Responsive part */}
					<div className="flex justify-between items-center w-full mt-8 lg:mt-0 lg:w-auto lg:hidden">
						<div>
							<img alt="" srcSet={emirates} className="w-20" />
						</div>
						<div className="text-center">
							<h2 className="text-2xl font-medium mb-2">$350</h2>
							<Button className="bg-[#3B71FE] px-[23px] py-[9px] rounded-[25px] text-white text-sm font-bold">
								Book Now
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h3 className="flex text-[#3B3E44] items-center text-lg font-medium mb-7 lg:mb-3">
					Dubai
					<span>
						<BsArrowLeft className="text-[#84878b] text-2xl mx-2" />
					</span>
					Dhaka Thu, 19 Aug
				</h3>
				<div className="flex flex-col lg:flex-row justify-between items-center">
					<div className="hidden lg:block">
						<img alt="" srcSet={emirates} className="w-20" />
					</div>
					<div className="flex justify-between items-center text-[#23262F] w-full lg:w-auto">
						<div className="text-center">
							<h2 className="text-2xl font-medium">DXB</h2>
							<p className="text-[#777E90] text-sm">08:45 AM</p>
						</div>
						<div className="text-[#B1B5C3] lg:mx-[44px] flex flex-col items-center">
							<div className="flex items-center flex-col border-[#FFAF4E] border-2 rounded-full p-4 border-b-transparent min-w-[80px]">
								<p className="text-xs">5h 20m</p>
								<IoAirplaneOutline className="text-[#3B71FE] text-2xl" />
							</div>
							<p className="text-sm">nonstop</p>
						</div>
						<div className="text-center">
							<h2 className="text-2xl font-medium">DAC</h2>
							<p className="text-[#777E90] text-sm">01:05 PM</p>
						</div>
					</div>
					<div className="text-center hidden lg:block">
						<h2 className="text-2xl font-medium mb-2">$350</h2>
						<Button className="bg-[#3B71FE] px-[23px] py-[9px] rounded-[25px] text-white text-sm font-bold">
							<Link to="/detail">Book Now</Link>
						</Button>
					</div>
					{/* Responsive part */}
					<div className="flex justify-between items-center w-full mt-8 lg:mt-0 lg:w-auto lg:hidden">
						<div>
							<img alt="" srcSet={emirates} className="w-20" />
						</div>
						<div className="text-center">
							<h2 className="text-2xl font-medium mb-2">$350</h2>
							<Button className="bg-[#3B71FE] px-[23px] py-[9px] rounded-[25px] text-white text-sm font-bold">
								<Link to="/detail">Book Now</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlightListItem;

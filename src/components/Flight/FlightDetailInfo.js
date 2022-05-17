import Button from '../../layouts/UI/Button';
import { IoAirplaneOutline } from 'react-icons/io5';
import emirates from '../../assets/images/emirates.svg';
const FlightDetailInfo = () => {
	return (
		<div className="bg-white rounded-[20px] p-5 md:p-10 mb-10">
			<header className="flex justify-between font-medium pb-7 border-b-[#E7ECF3] border-b mb-[30px]">
				<div>
					<h2 className="text-[#222529] text-2xl mb-2">Dhaka To Dubai</h2>
					<p className="text-[#84878B] text-xs md:text-sm max-w-[185px] md:w-auto">
						Non stop | 2 hrs 20 mins | Economy | Thu 27 Jul 2020
					</p>
				</div>
				<Button className="text-[#FA8F54] bg-[#FA8F54] text-xs md:text-base bg-opacity-20 py-1 md:py-[10px] px-2 md:px-6 max-h-11">
					Change Flight
				</Button>
			</header>
			<div className="pb-10 border-b-[#E7ECF3] border-b mb-10">
				<section className="flex items-center justify-between font-medium mb-11">
					<div className="flex items-center">
						<div className="mr-5">
							<img alt="" srcSet={emirates} />
						</div>
						<div className="text-lg">
							<h2 className="text-[#3B3E44] mb-1">IndiGo</h2>
							<p className="text-[#84878B] text-base">GE-965 320</p>
						</div>
					</div>
					<div>
						<h2 className="text-[#3B3E44] text-2xl">08.45</h2>
						<p className="text-[#84878B] text-sm mb-1">Thu, 27 July 2020</p>
						<p className="text-[#84878B] text-sm max-w-[165px]">
							Dhaka zia international airport, Bangladesh
						</p>
					</div>
					<div className="hidden 2xl:block">
						<p className="text-[#84878B]">05 hrs 20 mins</p>
						<IoAirplaneOutline className="text-[#3B71FE] mx-auto" />
					</div>
					<div>
						<h2 className="text-[#3B3E44] text-2xl">01.05</h2>
						<p className="text-[#84878B] text-sm mb-1">Sat, 30 July 2020</p>
						<p className="text-[#84878B] text-sm max-w-[165px]">
							Dubai International Airport, Dubai
						</p>
					</div>
				</section>
				<ul className="flex font-medium">
					<li className="mr-12">
						<h2 className="text-[#3B3E44] mb-1">Baggoge:</h2>
						<p className="text-[#84878B]">Adult</p>
					</li>
					<li className="mr-12">
						<h2 className="text-[#3B3E44] mb-1">Check-In</h2>
						<p className="text-[#84878B]">20Kgs</p>
					</li>
					<li className="mr-12">
						<h2 className="text-[#3B3E44] mb-1">Cabin</h2>
						<p className="text-[#84878B]">GE-965 320</p>
					</li>
					<li>
						<h2 className="text-[#3B3E44] mb-1">Meals</h2>
						<p className="text-[#84878B]">GE-965 320</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FlightDetailInfo;

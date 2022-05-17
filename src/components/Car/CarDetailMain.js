import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import { AiFillCar, AiOutlineUser, AiOutlineRight } from 'react-icons/ai';
import { GiSettingsKnobs } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Input from '../../layouts/UI/Input';
import Button from '../../layouts/UI/Button';

const CarDetailMain = (props) => {
	const [isGuestSelected, setIsGuestSelected] = useState(false);

	const guestSelectingHandler = () => {
		setIsGuestSelected(!isGuestSelected);
	};

	return (
		<main className="grid grid-cols-1 xl:grid-cols-12 gap-[30px] xl:gap-[90px] pb-[70px] border-b-2 border-b-[#E6E8EC] mb-[70px]">
			<div className="col-span-1 xl:col-span-7 mb-[60px] md:mb-0">
				<h2 className="text-[30px] md:text-[34px] font-bold mb-[30px]">Car details</h2>
				<ul className="flex items-center flex-wrap text-[#4F4F4F] md:pb-[62px] md:border-b md:border-b-[#E6E8EC] mb-[30px] md:mb-[38px] text-sm md:text-lg">
					<li className="mb-7 md:mr-[74px] text-[#84878B] flex items-center rounded-2xl bg-[#F4F5F6] py-4 pl-5 w-full md:max-w-[260px]">
						<BsClock className="text-[#222529] mr-4" />
						Put your car feature
					</li>
					<li className="mb-7 md:mr-[74px] text-[#84878B] flex items-center rounded-2xl bg-[#F4F5F6] py-4 pl-5 w-full md:max-w-[260px]">
						<AiFillCar className="text-[#222529] mr-4" />
						Put your car feature
					</li>
					<li className="mb-7 md:mr-[74px] text-[#84878B] flex items-center rounded-2xl bg-[#F4F5F6] py-4 pl-5 w-full md:max-w-[260px]">
						<AiOutlineUser className="text-[#222529] mr-4" />
						UP to 6 people
					</li>
					<li className="md:mr-[74px] text-[#84878B] flex items-center rounded-2xl bg-[#F4F5F6] py-4 pl-5 w-full md:max-w-[260px]">
						<GiSettingsKnobs className="text-[#222529] mr-4" />
						Put your car feature
					</li>
				</ul>
				<h2 className="text-[30px] md:text-[34px] font-bold mb-[30px]">Diver Details</h2>
				<form
					action=""
					className="text-[#353945] grid grid-cols-2 gap-7 md:pb-[60px] md:border-b md:border-b-[#E6E8EC] mb-[30px] md:mb-[38px]"
					onSubmit={(e) => e.preventDefault()}
				>
					<Input
						type="text"
						placeholder="Title"
						className="rounded-[10px] px-6 md:px-7 py-4 bg-[#F4F5F6] block col-span-2"
					/>

					<Input
						type="text"
						placeholder="First name"
						className="rounded-[10px] px-6 md:px-7 py-4 bg-[#F4F5F6] block col-span-2 md:col-span-1"
					/>

					<Input
						type="text"
						placeholder="Last name"
						className="rounded-[10px] px-6 md:px-7 py-4 bg-[#F4F5F6] block col-span-2 md:col-span-1"
					/>

					<Input
						type="text"
						placeholder="Email address"
						className="rounded-[10px] px-6 md:px-7 py-4 bg-[#F4F5F6] block col-span-2 md:col-span-1"
					/>

					<Input
						type="text"
						placeholder="Contact number"
						className="rounded-[10px] px-6 md:px-7 py-4 bg-[#F4F5F6] block col-span-2 md:col-span-1"
					/>
				</form>
				<h2 className="text-[30px] md:text-[34px] font-bold mb-[30px]">Place Details</h2>
				<p className="text-[#84878B] text-sm md:text-lg leading-6">
					The best 16 passenger small group, intimate and unique, miford sournd tour.
					<br />
					<br />
					Travel in unporaffeled style and comforn in a premium meredes van equpped with
					large ponoramic windows, leather recining seats, quirky on board videos, free
					wifi and complimentary bottled water.
					<br />
					<br />
					From your occommadotion enjoy the stunning scenic drive.
				</p>
			</div>
			<div className="col-span-1 xl:col-span-5 bg-white rounded-[20px] px-[18px] md:px-8 py-5 border-2 border-[#EAEAEA] md:min-w-[408px] h-fit">
				<div className="flex items-center justify-between mb-3">
					<h2 className="text-2xl md:text-4xl font-bold">
						$450
						<span className="text-[#B1B5C3] text-lg font-normal ml-2">/day</span>
					</h2>
					<p className="text-[#50A371] text-lg">Car is available</p>
				</div>
				<div className="text-[#3B3E44] flex items-center mb-[30px]">
					<FaStar className="text-[#FFC542] mr-[10px]" />
					<p className="mr-5 text-md">
						4.8
						<span className="text-[#84878B]"> (122 reviews)</span>
					</p>
				</div>
				<ul>
					<li className="flex items-center justify-between text-[#3B3E44] font-medium pb-5 mb-[22px] border-b border-b-[#E6E8EC]">
						<h3>Facilities</h3>
						<AiOutlineRight className="text-lg" />
					</li>
					<li className="flex items-center justify-between text-[#3B3E44] font-medium pb-5 mb-[22px] border-b border-b-[#E6E8EC]">
						<h3>Location</h3>
						<AiOutlineRight className="text-lg" />
					</li>
					<li className="flex items-center justify-between text-[#3B3E44] font-medium pb-5 mb-[22px] border-b border-b-[#E6E8EC]">
						<h3>Date</h3>
						<AiOutlineRight className="text-lg" />
					</li>
				</ul>

				<div className="flex items-center justify-between mb-[38px]">
					<div>
						<h5 className="text-[#353945] text-lg font-medium mb-2">Child seat</h5>
						<p className="text-[#84878B] font-medium text-sm">$50</p>
					</div>
					<div className="text-[#84878B] font-medium py-1 px-8 bg-[#F4F5F6] rounded-lg">
						1 seat
					</div>
				</div>

				<h2 className="text-[#333333] text-xl md:text-2xl font-bold mb-3">Fare Summary</h2>
				<ul className="mb-[30px] font-medium rounded-[10px]">
					<li className="flex justify-between items-center mb-5 ">
						<p className="text-[#84878B]">$119 + 5nights</p>
						<p>$833</p>
					</li>
					<li className="flex justify-between items-center mb-5">
						<p className="text-[#84878B]">Ocupancy text and fee</p>
						<p>-$125</p>
					</li>
					<li className="flex justify-between items-center mb-5">
						<p className="text-[#84878B]">Service free</p>
						<p>$103</p>
					</li>
					<li className="flex justify-between items-center px-3 py-2 bg-[#F4F5F6] rounded-md -mx-3">
						<p>Total</p>
						<p>$833</p>
					</li>
				</ul>
				<p className="text-center text-[#B1B5C3] text-sm font-medium mb-9">
					Free cancellation until 1:00 on may 15, 2021
				</p>
				<Button className="px-[38px] py-[14px] w-full md:w-auto bg-[#3B71FE] text-white font-bold rounded-[10px] md:rounded-[34px] mx-auto">
					<Link to="/">Reserve this car</Link>
				</Button>
			</div>
		</main>
	);
};

export default CarDetailMain;

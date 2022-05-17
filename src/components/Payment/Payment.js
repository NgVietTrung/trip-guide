import { useState } from 'react';
import useInput from '../../hooks/useInput';
import Input from '../../layouts/UI/Input';
import Checkbox from '../../layouts/UI/Checkbox';
import Button from '../../layouts/UI/Button';
import { FaStar } from 'react-icons/fa';
import mastercard from '../../assets/images/mastercard.png';
import paypal from '../../assets/images/paypal.png';
import visa from '../../assets/images/visa.png';
import amexp from '../../assets/images/amexp.png';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import { Link } from 'react-router-dom';

const Payment = () => {
	const [isActive, setIsActive] = useState('paypal');
	const cssActive =
		'before:absolute before:inset-0 before:z-5 before:bg-[#145CE6] before:bg-opacity-10 before:border-2 before:border-[#145CE6] before:rounded-md';
	return (
		<div className="px-5 sm:px-[135px] bg-[#FAFAFB]">
			<h1 className="text-[#141416] text-[34px] md:text-[40px] font-bold mb-6 md:mb-10">
				Confirm your Book
			</h1>
			<main className="grid grid-cols-1 grid-rows-2 xl:grid-cols-12 xl:grid-rows-1  gap-[35px]">
				<div className="col-span-1 row-start-2 row-end-3 xl:row-span-1 xl:col-span-7">
					<h2 className="text-[#141416] text-[28px] md:text-[34px] font-bold mb-5 md:mb-6">
						Credit Cards
					</h2>
					<div className="flex items-center pb-6 mb-6 md:pb-[30px] md:mb-10 border-b-[#F4F5F6] border-b-2">
						<div
							className={`${
								isActive === 'mastercard' ? cssActive : 'border-[#E6E6E6] border-2 '
							} relative w-24 h-12 cursor-pointer rounded-md overflow-hidden flex items-center justify-center mr-3`}
							onClick={() => setIsActive('mastercard')}
						>
							<img srcSet={mastercard} alt="mastercard" className="object-cover" />
						</div>
						<div
							className={`${
								isActive === 'paypal' ? cssActive : 'border-[#E6E6E6] border-2 '
							} relative w-24 h-12 cursor-pointer rounded-md overflow-hidden flex items-center justify-center mr-3`}
							onClick={() => setIsActive('paypal')}
						>
							<img srcSet={paypal} alt="paypal" className="object-cover" />
						</div>
						<div
							className={`${
								isActive === 'visa' ? cssActive : 'border-[#E6E6E6] border-2 '
							} relative w-24 h-12 cursor-pointer rounded-md overflow-hidden flex items-center justify-center mr-3`}
							onClick={() => setIsActive('visa')}
						>
							<img srcSet={visa} alt="visa" className="object-cover" />
						</div>
						<div
							className={`${
								isActive === 'amexp' ? cssActive : 'border-[#E6E6E6] border-2 '
							} relative w-24 h-12 cursor-pointer rounded-md overflow-hidden flex items-center justify-center mr-3`}
							onClick={() => setIsActive('amexp')}
						>
							<img srcSet={amexp} alt="amexp" className="object-cover" />
						</div>
					</div>
					<div className="flex flex-wrap mb-6 md:mb-10">
						<img alt="" srcSet={card1} className="mb-4 mr-4" />
						<img alt="" srcSet={card2} className="mb-4" />
					</div>
					<form
						action=""
						className="text-[#353945] max-w-[471px]"
						onSubmit={(e) => e.preventDefault()}
					>
						<div className="mb-5">
							<label className="mb-3 block">Card Number</label>
							<Input
								type="text"
								placeholder="5884 6241 4444 3333"
								className="border-[#EAEAEA] border-2 rounded-[10px] px-5 py-[13px] focus:border-[#878CFF]"
							/>
						</div>
						<div className="flex justify-between mb-[18px]">
							<div className="w-[48%]">
								<label className="mb-3 block">Expiry Date</label>
								<Input
									type="text"
									placeholder="MM / YY"
									className="border-[#EAEAEA] border-2 rounded-[10px] px-5 py-[13px] focus:border-[#878CFF]"
								/>
							</div>
							<div className="w-[48%]">
								<label className="mb-3 block">CVC/CVV</label>
								<Input
									type="text"
									placeholder="****"
									className="border-[#EAEAEA] border-2 rounded-[10px] px-5 py-[13px] focus:border-[#878CFF]"
								/>
							</div>
						</div>
						<Checkbox
							className="text-[#4F4F4F] font-medium mb-[34px]"
							label="Save Card"
						/>
						<Button className="px-5 py-3 bg-[#3B71FE] text-white text-base md:text-lg font-medium rounded-[10px] md:rounded-[36px] w-full md:w-auto">
							<Link to="/congratulation">Confirm and reserve</Link>
						</Button>
					</form>
				</div>
				<div className="col-span-1 row-start-1 row-end-2 xl:row-span-1 xl:col-span-5 bg-white rounded-[20px] px-5 py-5 md:px-8 md:py-10 border-2 border-[#EAEAEA]">
					<h4 className="text-[#141416] font-medium text-lg leading-6 mb-[14px]">
						Switzerland Hotels and Places to Stay
					</h4>
					<div className="flex items-center flex-wrap text-[#3B3E44] mb-7 md:mb-4 font-bold text-sm md:text-base">
						<FaStar className="text-[#FFC542] mr-[10px]" />
						<p className="mr-5">
							4.8
							<span className="text-[#84878B] font-normal"> (122 reviews)</span>
						</p>
					</div>
					<div className="max-h-[200px] w-full rounded-[10px] overflow-hidden mb-8 md:mb-6">
						<img
							alt=""
							srcSet="https://images.unsplash.com/photo-1602680232697-897c777b3b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
							className="object-cover w-full h-full block"
						/>
					</div>
					<h4 className="text-[#84878B] font-medium pb-4 border-b border-b-[#EEEEEE] mb-5">
						1 bedroom + 1 private room
					</h4>
					<div className="flex mb-5">
						<div className="font-medium w-1/2 ">
							<h6 className="text-[#B1B5C3] text-sm mb-1">Check in</h6>
							<p className="text-[#84878B]">June 27, 2020</p>
						</div>
						<div className="font-medium w-1/2 pl-[14px] border-l-2 border-l-[#F4F5F6]">
							<h6 className="text-[#B1B5C3] text-sm mb-1">Check in</h6>
							<p className="text-[#84878B]">June 27, 2020</p>
						</div>
					</div>
					<div className="font-medium w-1/2 mb-10">
						<h6 className="text-[#B1B5C3] text-sm mb-1">Guest</h6>
						<p className="text-[#84878B]">2 guests</p>
					</div>
					<h2 className="text-[#333333] text-xl md:text-[26px] font-bold mb-[30px] md:mb-10">
						Booked details
					</h2>
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
					<p className="text-center text-[#B1B5C3] text-sm font-medium">
						Report this property
					</p>
				</div>
			</main>
		</div>
	);
};

export default Payment;

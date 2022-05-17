import { FaStar } from 'react-icons/fa';
import Button from '../../layouts/UI/Button';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
	return (
		<div className="px-5 md:px-[135px] bg-[#FAFAFB]">
			<h4 className="text-xl md:text-[25px] text-[#3B3E44] font-bold mb-3 md:mb-5">
				Congratulations!
			</h4>
			<h1 className="text-[#3B3E44] text-[34px] md:text-5xl font-medium pb-[30px] md:pb-6 mb-[30px] md:mb-10 border-b border-b-[#E7ECF3] leading-[44px] md:leading-[60px]">
				Your trip has been booked!
			</h1>
			<h3 className="text-[#23262F] text-xl md:text-[34px] leading-[26px] md:leading-[44px] font-bold  mb-[18px] md:mb-7">
				Switzerland Hotels and Places to Stay
			</h3>
			<div className="flex items-center flex-wrap text-[#3B3E44] font-bold text-sm md:text-base mb-6">
				<div className="flex items-center">
					<FaStar className="text-[#FFC542] mr-[10px]" />
					<p className="mr-5">
						4.8
						<span className="text-[#84878B] font-normal"> (122 reviews)</span>
					</p>
				</div>
				<p className="font-medium">1 bad room + Private room</p>
			</div>
			<main className="grid grid-cols-1 grid-rows-2 xl:grid-cols-12 xl:grid-rows-1 gap-6 2xl:gap-[120px]">
				<div className="col-span-1 row-start-2 row-end-3 xl:row-span-1 xl:col-span-5">
					<div className="flex justify-between items-center font-medium mb-[30px] text-sm md:text-base">
						<div className="px-5 py-2 rounded-xl bg-[#F4F4F6] w-[55%]">
							<h6 className="text-[#353945] mb-1">Dates</h6>
							<p className="text-[#84878B] md:text-lg">May 15 - 22, 2021</p>
						</div>
						<div className="px-5 py-2 rounded-xl bg-[#F4F4F6] w-[40%]">
							<h6 className="text-[#353945] mb-1">Travelers</h6>
							<p className="text-[#84878B] md:text-lg">1 Passenger</p>
						</div>
					</div>
					<div className="px-[25px] py-5 rounded-[10px] bg-[#F4F4F6] mb-[30px]">
						<h2 className="text-[#23262F] text-[28px] font-bold mb-6">
							Reserve details
						</h2>
						<ul>
							<li className="flex justify-between font-medium mb-[22px]">
								<div className="text-[#777E90]">Booking code</div>
								<p className="text-[#353945]">FD_158456</p>
							</li>
							<li className="flex justify-between font-medium mb-[22px]">
								<div className="text-[#777E90]">Date</div>
								<p className="text-[#353945]">30 Apr, 2021</p>
							</li>
							<li className="flex justify-between font-medium mb-[22px]">
								<div className="text-[#777E90]">Total</div>
								<p className="text-[#353945]">$833</p>
							</li>
							<li className="flex justify-between font-medium">
								<div className="text-[#777E90]">Payment method</div>
								<p className="text-[#353945]">Credit card</p>
							</li>
						</ul>
					</div>
					<Button className="px-[38px] py-[14px] w-full md:w-auto bg-[#3B71FE] text-white font-bold rounded-[10px] md:rounded-[34px]">
						<Link to="/">Go To Your Home</Link>
					</Button>
				</div>
				<div className="col-span-1 row-start-1 row-end-2 xl:row-span-1 xl:col-span-7 rounded-[20px] max-h-[403px] overflow-hidden">
					<img
						alt=""
						srcSet="https://images.unsplash.com/photo-1602680232697-897c777b3b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						className="w-full h-full object-cover"
					/>
				</div>
			</main>
		</div>
	);
};

export default PaymentSuccess;

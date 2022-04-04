import { AiOutlineCheck } from 'react-icons/ai';
import Button from '../../layouts/UI/Button';

const HotelDetailSelect = () => {
	return (
		<div className="text-[#23262F] mb-[70px]">
			<h2 className="text-2xl md:text-[40px] font-bold mb-5">Select Room</h2>
			<ul>
				<li className="p-5 md:p-[30px] bg-white rounded-[10px] border-[#E7ECF3] border-[1px] flex justify-between md:items-center flex-col md:flex-row mb-[30px]">
					<div className="mb-3 md:mb-0">
						<h4 className="text-lg md:text-2xl text-[#222529] font-bold md:font-medium mb-[15px]">
							Economy Room, Annex Building
						</h4>
						<p className="text-[#84878B] mb-[15px] text-md">Offer conditions:</p>
						<ul className="text-md">
							<li className="mb-[7px] flex items-center">
								<AiOutlineCheck className="text-[#03A782] mr-2" /> Non-refundable
							</li>
							<li className="mb-[7px] flex items-center">
								<AiOutlineCheck className="text-[#03A782] mr-2" />
								Free Wifi
							</li>
							<li className="flex items-center">
								<AiOutlineCheck className="text-[#03A782] mr-2" />
								Breakfast for 2 people
							</li>
						</ul>
					</div>
					<div className="text-right flex flex-row-reverse justify-between md:flex-col">
						<div>
							<h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
								$102
								<span className="text-[#B1B5C3] text-lg font-normal ml-2">
									/night
								</span>
							</h2>
							<h6 className="text-[#FFAF4E] md:text-lg font-medium mb-[2px]">
								Save $4
							</h6>
							<p className="text-[#84878B] md:mb-[19px] text-md">
								on TripGuide.com $106
							</p>
						</div>
						<Button className="bg-[#316BFF] text-white text-lg font-medium px-4 py-2 md:ml-auto rounded-md max-h-10 mt-auto md:mt-0">
							Select
						</Button>
					</div>
				</li>
				<li className="p-5 md:p-[30px] bg-white rounded-[10px] border-[#E7ECF3] border-[1px] flex justify-between md:items-center flex-col md:flex-row mb-[30px]">
					<div className="mb-3 md:mb-0">
						<h4 className="text-lg md:text-2xl text-[#222529] font-bold md:font-medium mb-[15px]">
							Economy Room, Annex Building
						</h4>
						<p className="text-[#84878B] mb-[15px] text-md">Offer conditions:</p>
						<ul className="text-md">
							<li className="mb-[7px] flex items-center">
								<AiOutlineCheck className="text-[#03A782] mr-2" /> Non-refundable
							</li>
							<li className="mb-[7px] flex items-center">
								<AiOutlineCheck className="text-[#03A782] mr-2" />
								Free Wifi
							</li>
							<li className="flex items-center">
								<AiOutlineCheck className="text-[#03A782] mr-2" />
								Breakfast for 2 people
							</li>
						</ul>
					</div>
					<div className="text-right flex flex-row-reverse justify-between md:flex-col">
						<div>
							<h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
								$102
								<span className="text-[#B1B5C3] text-lg font-normal ml-2">
									/night
								</span>
							</h2>
							<h6 className="text-[#FFAF4E] md:text-lg font-medium mb-[2px]">
								Save $4
							</h6>
							<p className="text-[#84878B] md:mb-[19px] text-md">
								on TripGuide.com $106
							</p>
						</div>
						<Button className="bg-[#316BFF] text-white text-lg font-medium px-4 py-2 md:ml-auto rounded-md max-h-10 mt-auto md:mt-0">
							Select
						</Button>
					</div>
				</li>
				<li className="p-5 md:p-[30px] bg-white rounded-[10px] border-[#E7ECF3] border-[1px] flex justify-between md:items-center flex-col md:flex-row mb-[30px]">
					<div className="mb-3 md:mb-0">
						<h4 className="text-lg md:text-2xl text-[#222529] font-bold md:font-medium mb-[15px]">
							Economy Room, Annex Building
						</h4>
						<p className="text-[#84878B] mb-[15px] text-md">Offer conditions:</p>
						<ul className="text-md">
							<li className="mb-[7px] flex items-center">
								<AiOutlineCheck className="text-[#03A782] mr-2" /> Non-refundable
							</li>
							<li className="mb-[7px] flex items-center">
								<AiOutlineCheck className="text-[#03A782] mr-2" />
								Free Wifi
							</li>
							<li className="flex items-center">
								<AiOutlineCheck className="text-[#03A782] mr-2" />
								Breakfast for 2 people
							</li>
						</ul>
					</div>
					<div className="text-right flex flex-row-reverse justify-between md:flex-col">
						<div>
							<h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
								$102
								<span className="text-[#B1B5C3] text-lg font-normal ml-2">
									/night
								</span>
							</h2>
							<h6 className="text-[#FFAF4E] md:text-lg font-medium mb-[2px]">
								Save $4
							</h6>
							<p className="text-[#84878B] md:mb-[19px] text-md">
								on TripGuide.com $106
							</p>
						</div>
						<Button className="bg-[#316BFF] text-white text-lg font-medium px-4 py-2 md:ml-auto rounded-md max-h-10 mt-auto md:mt-0">
							Select
						</Button>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default HotelDetailSelect;

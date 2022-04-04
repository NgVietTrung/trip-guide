import { useState } from 'react';
import Tab from '../../layouts/UI/Tab';
import { FaUtensilSpoon, FaBed } from 'react-icons/fa';
import { BiBath } from 'react-icons/bi';
import { IoResize } from 'react-icons/io5';
import { FiWifi } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Checkbox from '../../layouts/UI/Checkbox';
import Input from '../../layouts/UI/Input';
import Button from '../../layouts/UI/Button';
import Select from '../../layouts/UI/Select';
import CardDropDown from '../../layouts/UI/CardDropdown';

const HotelDetailMain = (props) => {
	const [tabActive, setTabActive] = useState('des');
	const [isGuestSelected, setIsGuestSelected] = useState(false);
	const tabStyleActive = 'border-b-4 border-[#3B71FE] text-[#3B3E44] text-[#3B71FE]';
	const tabStyleNonActive = 'border-none text-[#84878B]';
	const contentStyleActive = 'h-auto opacity-100 transition-opacity duration-500';
	const contentStyleNonActive = 'overflow-hidden opacity-0 h-0';

	const guestSelectingHandler = () => {
		setIsGuestSelected(!isGuestSelected);
	};

	const toggleTabHandler = (tab) => {
		setTabActive(tab);
	};
	return (
		<main className="grid grid-cols-1 xl:grid-cols-12 gap-[30px] xl:gap-[90px] pb-[70px] border-b-2 border-b-[#E6E8EC] mb-[70px]">
			<div className="col-span-1 xl:col-span-7">
				<h2 className="text-2xl md:text-[40px] font-bold mb-2 leading-10 md:leading-[60px]">
					Exclusive room in house
				</h2>
				<p className="text-[#777E90] text-xl md:text-2xl font-medium pb-4 md:pb-[22px] border-b border-b-[#E6E8EC] mb-6 md:mb-[30px]">
					Zurich, Switzerland
				</p>
				<div className="flex items-center justify-between lg:justify-start mb-5 lg:mb-0 w-full border-b border-b-[#E6E8EC] text-md md:text-base">
					<Tab
						className={tabActive === 'des' ? tabStyleActive : tabStyleNonActive}
						onToggle={() => toggleTabHandler('des')}
					>
						Description
					</Tab>
					<Tab
						className={tabActive === 'fea' ? tabStyleActive : tabStyleNonActive}
						onToggle={() => toggleTabHandler('fea')}
					>
						Features
					</Tab>
					<Tab
						className={tabActive === 'rap' ? tabStyleActive : tabStyleNonActive}
						onToggle={() => toggleTabHandler('rap')}
					>
						Room & Price
					</Tab>
				</div>
				<div className="mt-5 text-[#353945] mb-5 md:mb-10 text-md md:text-base leading-6">
					<div
						className={tabActive === 'des' ? contentStyleActive : contentStyleNonActive}
					>
						<p>
							Arabian Park Hotel is a great choice for travellers looking for a 3 star
							hotel in Dubai. It is located in Bur Dubai. This Hotel stands out as one
							of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2 kms), Dubai Mall
							(5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah Public Beach (15.8
							kms).
						</p>
					</div>

					<div
						className={tabActive === 'fea' ? contentStyleActive : contentStyleNonActive}
					>
						<p>
							Arabian Park Hotel is a great choice for travellers looking for a 3 star
							hotel in Dubai. It is located in Bur Dubai. This Hotel stands out as one
							of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2 kms), Dubai Mall
							(5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah Public Beach (15.8
							kms).
						</p>
					</div>

					<div
						className={tabActive === 'rap' ? contentStyleActive : contentStyleNonActive}
					>
						<p>
							Arabian Park Hotel is a great choice for travellers looking for a 3 star
							hotel in Dubai. It is located in Bur Dubai. This Hotel stands out as one
							of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2 kms), Dubai Mall
							(5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah Public Beach (15.8
							kms).
						</p>
					</div>
					<div
						className={tabActive === 'rev' ? contentStyleActive : contentStyleNonActive}
					>
						<p>
							Arabian Park Hotel is a great choice for travellers looking for a 3 star
							hotel in Dubai. It is located in Bur Dubai. This Hotel stands out as one
							of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2 kms), Dubai Mall
							(5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah Public Beach (15.8
							kms).
						</p>
					</div>
				</div>
				<h3 className="text-lg md:text-2xl font-medium mb-5 md:mb-6">Hotel features</h3>
				<ul className="flex items-center flex-wrap text-[#4F4F4F] pb-[30px] md:pb-[62px] border-b border-b-[#E6E8EC] mb-6 md:mb-[60px]">
					<li className="mr-4 mb-4 md:mr-11 md:mb-0 flex items-center rounded-md bg-opacity-10">
						<FiWifi className="mr-[10px]" />
						Wi-fi
					</li>
					<li className="mr-4 mb-4 md:mr-11 md:mb-0 flex items-center rounded-md bg-opacity-10">
						<BiBath className="mr-[10px]" />
						Bathtup
					</li>
					<li className="mr-4 mb-4 md:mr-11 md:mb-0 flex items-center rounded-md bg-opacity-10">
						<FaUtensilSpoon className="mr-[10px]" />
						Breakfast
					</li>
					<li className="mr-4 mb-4 md:mr-11 md:mb-0 flex items-center rounded-md bg-opacity-10">
						<FaBed className="mr-[10px]" />
						Kins bed
					</li>
					<li className="flex mb-4 md:mb-0 items-center rounded-md bg-opacity-10">
						<IoResize className="mr-[10px]" />
						4m x 6m
					</li>
				</ul>
				<h3 className="ttext-lg md:text-2xl font-medium mb-6">Amenities</h3>
				<ul className="grid grid-cols-2 gap-[30px] text-[#4F4F4F]">
					<li className="mr-11 flex items-center rounded-md bg-opacity-10">
						<FiWifi className="mr-[10px]" />
						Wi-fi
					</li>
					<li className="mr-11 flex items-center rounded-md bg-opacity-10">
						<BiBath className="mr-[10px]" />
						Bathtup
					</li>
					<li className="mr-11 flex items-center rounded-md bg-opacity-10">
						<FaUtensilSpoon className="mr-[10px]" />
						Breakfast
					</li>
					<li className="mr-11 flex items-center rounded-md bg-opacity-10">
						<FaBed className="mr-[10px]" />
						Kins bed
					</li>
					<li className="flex items-center rounded-md bg-opacity-10">
						<IoResize className="mr-[10px]" />
						4m x 6m
					</li>
					<li className="mr-11 flex items-center rounded-md bg-opacity-10">
						<FaUtensilSpoon className="mr-[10px]" />
						Breakfast
					</li>
					<li className="mr-11 flex items-center rounded-md bg-opacity-10">
						<FaBed className="mr-[10px]" />
						Kins bed
					</li>
					<li className="flex items-center rounded-md bg-opacity-10">
						<IoResize className="mr-[10px]" />
						4m x 6m
					</li>
				</ul>
			</div>
			<div className="col-span-1 xl:col-span-5 bg-white rounded-[20px] px-[18px] md:px-8 py-5 border-2 border-[#EAEAEA] md:min-w-[408px]">
				<div className="flex items-center justify-between pb-[18px] border-b-2 border-b-[#E6E8EC] mb-5">
					<h2 className="text-2xl md:text-4xl font-bold">
						$142
						<span className="text-[#B1B5C3] text-lg font-normal ml-2">/night</span>
					</h2>
					<p className="px-[10px] py-[6px] bg-[#145CE6] rounded-[25px] text-white text-md">
						20% OFF
					</p>
				</div>

				<div className="flex items-center justify-between text-[#84878B] font-medium mb-5">
					<div className="w-[48%]">
						<label className="mb-3 block">Check-In</label>
						<Input type="date" className="py-3 px-[14px] bg-[#F4F5F6]" />
					</div>
					<div className="w-[48%]">
						<label className="mb-3 block">Check-Out</label>
						<Input type="date" className="py-3 px-[14px] bg-[#F4F5F6]" />
					</div>
				</div>
				<div className="text-[#84878B] font-medium">
					<label className="mb-3 block">Guest</label>
					<Select className="px-[14px] py-3 mb-5 relative md:text-base">
						<p className="text-[#353945] font-normal" onClick={guestSelectingHandler}>
							2 Adults, 1 Children
						</p>
						{isGuestSelected && (
							<CardDropDown className="p-5 w-full left-0 top-[60px]">
								<li className="flex justify-between items-center pb-3 mb-3 border-b-[1px] border-b-[#E6E8EC]">
									<div>
										<h4 className="text-[#3B3E44] mb-[6px]">Adults</h4>
										<p className="text-[#B1B5C3] font-normal text-md">
											Ages 13 or above
										</p>
									</div>
									<div className="flex items-center text-[#3B3E44]">
										<Button className="px-[10px] border-[#3B3E44] border-2 !rounded-[50%] text-center py-[2px] text-xl">
											-
										</Button>
										<p className="text-[#777E90] font-normal mx-3">1</p>
										<Button className="px-[10px] border-[#3B3E44] border-2 !rounded-[50%] text-center py-[2px] text-xl">
											+
										</Button>
									</div>
								</li>
								<li className="flex justify-between items-center pb-3 mb-3 border-b-[1px] border-b-[#E6E8EC]">
									<div>
										<h4 className="text-[#3B3E44] mb-[6px]">Children</h4>
										<p className="text-[#B1B5C3] font-normal text-md">
											Ages 2-12
										</p>
									</div>
									<div className="flex items-center text-[#3B3E44]">
										<Button className="px-[10px] border-[#3B3E44] border-2 !rounded-[50%] text-center py-[2px] text-xl">
											-
										</Button>
										<p className="text-[#777E90] font-normal mx-3">1</p>
										<Button className="px-[10px] border-[#3B3E44] border-2 !rounded-[50%] text-center py-[2px] text-xl">
											+
										</Button>
									</div>
								</li>
								<li className="flex justify-between items-center">
									<div>
										<h4 className="text-[#3B3E44] mb-[6px]">Infants</h4>
										<p className="text-[#B1B5C3] font-normal text-md">
											Under 2
										</p>
									</div>
									<div className="flex items-center text-[#3B3E44]">
										<Button className="px-[10px] border-[#3B3E44] border-2 !rounded-[50%] text-center py-[2px] text-xl">
											-
										</Button>
										<p className="text-[#777E90] font-normal mx-3">1</p>
										<Button className="px-[10px] border-[#3B3E44] border-2 !rounded-[50%] text-center py-[2px] text-xl">
											+
										</Button>
									</div>
								</li>
							</CardDropDown>
						)}
					</Select>
				</div>
				<div className="mb-5">
					<h6 className="text-[#84878B] font-medium mb-2">Extra Features</h6>
					<div className="flex justify-between items-center">
						<Checkbox className="mb-[14px]" label="Allow to bring pet" />
						<p className="pb-3 text-[#353945] font-medium">$13</p>
					</div>
					<div className="flex justify-between items-center">
						<Checkbox className="mb-[14px]" label="Breakfast a day per person" />
						<p className="pb-3 text-[#353945] font-medium">$10</p>
					</div>
					<div className="flex justify-between items-center">
						<Checkbox className="mb-[14px]" label="Parking a day" />
						<p className="pb-3 text-[#353945] font-medium">$6</p>
					</div>
					<div className="flex justify-between items-center">
						<Checkbox className="mb-[14px]" label="Extra pillow" />
						<p className="pb-3 text-[#353945] font-medium">Free</p>
					</div>
				</div>
				<h6 className="text-[#84878B] font-medium mb-2">Price</h6>
				<ul className="mb-5 text-[#353945] p-5 bg-[#F4F5F6] rounded-[10px]">
					<li className="flex justify-between items-center mb-3 ">
						<p>1 Nights</p>
						<p>$500</p>
					</li>
					<li className="flex justify-between items-center mb-3">
						<p>Discount 20%</p>
						<p>$10</p>
					</li>
					<li className="flex justify-between items-center mb-3">
						<p>Breakfast a day per person</p>
						<p>$6</p>
					</li>
					<li className="flex justify-between items-center">
						<p>Service fee</p>
						<p>Free</p>
					</li>
				</ul>
				<div className="flex justify-between mb-6">
					<h6 className="text-[#84878B] font-medium mb-2">Total payment</h6>
					<h5 className="text-[#353945] font-bold">$300</h5>
				</div>
				<Button className="bg-[#316BFF] w-full py-3 text-xl text-white rounded-xl font-bold mb-3">
					<Link to="/payment">Book Now</Link>
				</Button>
				<p className="text-[#777E90] text-center text-md">You will not get charged yet</p>
			</div>
		</main>
	);
};

export default HotelDetailMain;

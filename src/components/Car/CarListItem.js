import { BsPeople, BsSpeedometer } from 'react-icons/bs';
import { BiGasPump } from 'react-icons/bi';
import bmw from '../../assets/images/bmwi10.png';
import Button from '../../layouts/UI/Button';
import { Link } from 'react-router-dom';

const CarListItem = (props) => {
	return (
		<div className={`${props.className} rounded-[10px] overflow-hidden`}>
			<div className="p-[30px] bg-[#F4F5F6]">
				<img alt="" srcSet={bmw} className="object-cover w-full h-full bg-transparent" />
			</div>
			<div className="p-5 bg-white text-[#222529]">
				<div className="flex justify-between items-center flex-wrap mb-2">
					<h4 className="font-bold text-xl md:mb-2 ipad:mb-0">BMW i10 - 2021</h4>
					<div className="text-[#219653] text-xs px-3 py-1 bg-[#e9f7ef] rounded-[28px]">
						SPECIAL DEAL
					</div>
				</div>
				<p className="text-[#84878B] mb-4 font-medium">Tesla Model S</p>
				<h5 className="font-medium mb-4">Features</h5>
				<ul className="flex flex-wrap mb-[13px]">
					<li className="flex items-center mr-[45px] mb-3">
						<BsPeople className="mr-[10px]" />
						<p className="text-[#84878B] text-sm">5</p>
					</li>
					<li className="flex items-center mr-[45px] mb-3">
						<BiGasPump className="mr-[10px]" />
						<p className="text-[#84878B] text-sm">Electric</p>
					</li>
					<li className="flex items-center mr-[45px] mb-3">
						<BsSpeedometer className="mr-[10px]" />
						<p className="text-[#84878B] text-sm">Unlimited mileage</p>
					</li>
				</ul>
				<div className="flex justify-between items-center flex-wrap">
					<div className="flex flex-col md:mb-3 ipad:mb-0">
						<h3 className="text-2xl font-medium">$124.00</h3>
						<p className="text-[#84878B]">per day</p>
					</div>
					<Button className="bg-[#3B71FE] text-white font-bold py-3 px-6">
						<Link to="/detail">Reserve deal</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CarListItem;

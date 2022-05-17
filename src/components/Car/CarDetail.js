import { FaStar } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import car1 from '../../assets/images/car1.png';
import car2 from '../../assets/images/car2.png';
import car3 from '../../assets/images/car3.png';
import car4 from '../../assets/images/car4.png';
import CarDetailMain from './CarDetailMain';
import CarDetailReview from './CarDetailReview';
import { BsStar, BsPercent, BsShieldCheck } from 'react-icons/bs';

const CarDetail = () => {
	return (
		<div className="px-5 sm:px-[135px] bg-[#FAFAFB]">
			<h1 className="text-[#141416] text-[30px] md:text-5xl font-bold mb-[28px]">
				Best Seller BMW i10 - 2020
			</h1>
			<div className="flex items-center flex-wrap text-[#3B3E44] mb-[44px]">
				<div className="text-[#3B3E44] flex items-center mb-2 md:mb-0">
					<FaStar className="text-[#FFC542] mr-[10px]" />
					<p className="mr-5 text-md">
						4.8
						<span className="text-[#84878B]"> (122 reviews)</span>
					</p>
				</div>
				<div className="text-[#84878B] flex items-center mb-2 md:mb-0">
					<FiMapPin className="mr-[10px]" />
					<p className="text-md">Zurich town, Switzerland</p>
				</div>
			</div>
			<div className="grid grid-cols-5 grid-rows-3 gap-4 rounded-3xl overflow-hidden mb-[30px] md:mb-[60px] max-h-[821px]">
				<div className="col-start-1 col-end-4 row-span-3">
					<img alt="" srcSet={car1} className="object-cover w-full h-full" />
				</div>
				<div className="col-start-4 col-end-6 row-start-1 row-end-2">
					<img alt="" srcSet={car2} className="object-cover w-full h-full" />
				</div>
				<div className="col-start-4 col-end-6 row-start-2 row-end-3">
					<img alt="" srcSet={car3} className="object-cover w-full h-full" />
				</div>
				<div className="col-start-4 col-end-6 row-start-3 row-end-4">
					<img alt="" srcSet={car4} className="object-cover w-full h-full" />
				</div>
			</div>
			<ul className="flex items-center flex-wrap mb-[30px] md:mb-10 text-md text-[#3B3E44] font-medium text-sm md:text-lg">
				<li className="mr-3 mb-3 md:mr-[50px] md:mb-0 flex items-center">
					<div className="p-2 md:p-[13px] rounded-[50%] text-[#FA8F54] bg-opacity-20 bg-[#F18724] mr-2 md:mr-[14px]">
						<BsStar />
					</div>
					Certified Owners
				</li>
				<li className="mr-3 mb-3 md:mr-[50px] md:mb-0 flex items-center">
					<div className="p-2 md:p-[13px] rounded-[50%] text-[#FF543D] bg-opacity-20 bg-[#FF543D] mr-2 md:mr-[14px]">
						<BsPercent />
					</div>
					Best Price Guarantee
				</li>
				<li className="mb-3 md:mb-0 flex items-center">
					<div className="p-2 md:p-[13px] rounded-[50%] text-[#316BFF] bg-opacity-20 bg-[#3B71FE] mr-2 md:mr-[14px]">
						<BsShieldCheck />
					</div>
					100% insured
				</li>
			</ul>
			<CarDetailMain />
			<CarDetailReview />
		</div>
	);
};

export default CarDetail;

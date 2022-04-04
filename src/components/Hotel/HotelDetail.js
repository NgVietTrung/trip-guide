import { FaStar } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import hotel1 from '../../assets/images/hotel1.png';
import hotel2 from '../../assets/images/hotel2.png';
import hotel3 from '../../assets/images/hotel3.png';
import hotel4 from '../../assets/images/hotel4.png';
import HotelDetailMain from './HotelDetailMain';
import HotelDetailReview from './HotelDetailReview';
import HotelDetailSelect from './HotelDetailSelect';

const HotelDetail = () => {
	return (
		<div className="px-5 sm:px-[135px] bg-[#FAFAFB]">
			<h1 className="text-[#141416] text-[30px] md:text-5xl font-bold mb-[28px]">
				Switzerland Hotels and Places to Stay
			</h1>
			<div className="flex items-center flex-wrap text-[#3B3E44] mb-[44px]">
				<div className="text-[#3B3E44] flex items-center mb-2 md:mb-0">
					<FaStar className="text-[#FFC542] mr-[10px]" />
					<p className="mr-5 text-md">
						4.8
						<span className="text-[#84878B]"> (122 reviews)</span>
					</p>
				</div>
				<div className="text-[#84878B] flex items-center mb-2">
					<FiMapPin className="mr-[10px]" />
					<p className="text-md">Zurich Hotel, Switzerland</p>
				</div>
			</div>
			<div className="grid grid-cols-5 grid-rows-3 gap-4 rounded-3xl overflow-hidden mb-10">
				<div className="col-start-1 col-end-4 row-span-3">
					<img alt="" srcSet={hotel1} className="object-cover w-full h-full" />
				</div>
				<div className="col-start-4 col-end-6 row-start-1 row-end-2">
					<img alt="" srcSet={hotel2} className="object-cover w-full h-full" />
				</div>
				<div className="col-start-4 col-end-6 row-start-2 row-end-3">
					<img alt="" srcSet={hotel3} className="object-cover w-full h-full" />
				</div>
				<div className="col-start-4 col-end-6 row-start-3 row-end-4">
					<img alt="" srcSet={hotel4} className="object-cover w-full h-full" />
				</div>
			</div>
			<ul className="flex items-center flex-wrap mb-5 text-md">
				<li className="px-2 py-1 text-[#38B245] mr-3 mb-3 md:mr-4 md:mb-0 rounded-md bg-opacity-10 bg-[#38B245]">
					5.0
				</li>
				<li className="px-2 py-1 text-[#FD9704] mr-3 mb-3 md:mr-4 md:mb-0 rounded-md bg-opacity-10 bg-[#FD9704]">
					Perfect
				</li>
				<li className="px-2 py-1 text-[#0B3BA7] mr-3 mb-3 md:mr-4 md:mb-0 rounded-md bg-opacity-10 bg-[#0B3BA7]">
					Hotels
				</li>
				<li className="px-2 py-1 text-[#E96594] mr-3 mb-3 md:mr-4 md:mb-0 rounded-md bg-opacity-10 bg-[#E96594]">
					Building
				</li>
				<li className="px-2 py-1 text-[#DC6E3D] mb-3 md:mb-0 rounded-md bg-opacity-10 bg-[#DC6E3D]">
					Top value
				</li>
			</ul>
			<HotelDetailMain />
			<HotelDetailSelect />
			<HotelDetailReview />
		</div>
	);
};

export default HotelDetail;

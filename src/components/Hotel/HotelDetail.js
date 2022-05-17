import { useParams } from 'react-router-dom';
import { useSearchHotelDetailQuery } from '../../services/hotel';
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
	const { idHotel } = useParams();
	const { data, error, isLoading } = useSearchHotelDetailQuery(idHotel);

	return (
		<div className="px-5 sm:px-[135px] bg-[#FAFAFB]">
			<h1 className="text-[#141416] text-[30px] md:text-5xl font-bold mb-[28px]">
				{data?.name}
			</h1>
			<div className="flex items-center flex-wrap text-[#3B3E44] mb-[44px]">
				<div className="text-[#3B3E44] flex items-center mb-2 md:mb-0">
					<FaStar className="text-[#FFC542] mr-[10px]" />
					<p className="mr-5 text-md">
						{data?.starRating}
						<span className="text-[#84878B]"> ({data?.totalReviewCount} reviews)</span>
					</p>
				</div>
				<div className="text-[#84878B] flex items-center mb-2 md:mb-0">
					<FiMapPin className="mr-[10px]" />
					<p className="text-md">{data?.location.address.addressLine1}</p>
				</div>
			</div>
			<div className="grid grid-cols-5 grid-rows-3 gap-4 rounded-3xl overflow-hidden mb-10 max-h-[643px]">
				<div className="col-start-1 col-end-4 row-span-3">
					<img
						alt={data?.images[0].description}
						srcSet={data?.images[0].imageUrl}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="col-start-4 col-end-6 row-start-1 row-end-2">
					<img
						alt={data?.images[1].description}
						srcSet={data?.images[1].imageUrl}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="col-start-4 col-end-6 row-start-2 row-end-3">
					<img
						alt={data?.images[2].description}
						srcSet={data?.images[2].imageUrl}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="col-start-4 col-end-6 row-start-3 row-end-4">
					<img
						alt={data?.images[3].description}
						srcSet={data?.images[3].imageUrl}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
			<ul className="flex items-center flex-wrap mb-5 text-md">
				<li className="px-2 py-1 text-[#38B245] mr-3 mb-3 md:mr-4 md:mb-0 rounded-md bg-opacity-10 bg-[#38B245]">
					{data?.starRating}
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
			<HotelDetailMain data={data} />
			<HotelDetailSelect />
			<HotelDetailReview reviews={data.guestReviews} />
		</div>
	);
};

export default HotelDetail;

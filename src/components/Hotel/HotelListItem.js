import { FaStar } from 'react-icons/fa';
import { FiFlag, FiMapPin, FiCalendar, FiWifi, FiDatabase } from 'react-icons/fi';
import { ImAirplane } from 'react-icons/im';
import { RiParkingBoxLine, RiEarthLine } from 'react-icons/ri';
import { BsWallet2 } from 'react-icons/bs';
import Button from '../../layouts/UI/Button';
import { useNavigate } from 'react-router-dom';
const HotelListItem = ({ hotel, checkin, checkout }) => {
	let navigate = useNavigate();

	const hotelDetailHandler = () => {
		navigate('/detail/hotel/' + hotel.hotelId, { replace: true });
	};
	return (
		<div className="rounded-[20px] flex flex-col lg:flex-row overflow-hidden lg:h-full lg:max-h-[465px] xl:max-h-[500px] border-2 border-[#E7ECF3] mb-[50px]">
			<div className="h-full lg:max-w-[390px]">
				<img
					alt=""
					srcSet={hotel?.media?.url}
					className="object-cover w-full h-full block"
				/>
			</div>
			<div className="p-5 sm:p-[30px] flex flex-col justify-between sm:min-w-[450px] xl:min-w-[480px]">
				<h1 className="text-[#23262F] text-[34px] sm:text-[40px] font-bold mb-3">
					{hotel.name}
				</h1>
				<div className="flex items-center text-[#3B3E44] mb-4 lg:mb-0">
					<FaStar className="text-[#FFC542] mr-[10px]" />
					<p className="mr-5 text-sm">
						{hotel.starRating}
						<span className="text-[#84878B]"> ({hotel.totalReviewCount} reviews)</span>
					</p>
					<div className="text-[#84878B] flex items-center">
						<FiFlag className="mr-[10px]" />
						<p className="text-sm">
							{hotel.location.address.cityName}, {hotel.location.address.countryName}
						</p>
					</div>
				</div>
				<div className="flex flex-wrap mb-4 lg:mb-0">
					<div className="flex items-center mb-[15px] mr-[19px]">
						<FiMapPin className="text-[#84878B] text-lg mr-3" />
						<p>
							{hotel.brand}, {hotel.location.address.countryName}
						</p>
					</div>
					<div className="flex items-center mb-[15px] mr-[19px]">
						<FiCalendar className="text-[#84878B] text-lg mr-3" />
						<p>
							{checkin} / {checkout}
						</p>
					</div>
					<div className="flex items-center mb-[15px] mr-[19px]">
						<ImAirplane className="text-[#84878B] text-lg mr-3" />
						<p>Departure from {hotel.location.address.cityName}</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row justify-between">
					<div className="flex flex-col justify-between mb-7 lg:mb-0">
						<div className="flex items-center mb-2">
							<FiWifi className="mr-4 text-[#84878B]" />
							<p>Free Wifi</p>
						</div>
						<div className="flex items-center mb-2">
							<RiParkingBoxLine className="mr-4 text-[#84878B]" />
							<p>Free parking</p>
						</div>
						<div className="flex items-center mb-2">
							<BsWallet2 className="mr-4 text-[#84878B]" />
							<p>Special offer</p>
						</div>
						<div className="flex items-center mb-2">
							<RiEarthLine className="mr-4 text-[#84878B]" />
							<p>Visit hotel website</p>
						</div>
						<div className="flex items-center">
							<FiDatabase className="mr-4 text-[#84878B]" />
							<p>Taking safety measures</p>
						</div>
					</div>
					<div className="mt-auto">
						<p className="text-[#222529] text-[28px] font-bold mb-3 flex items-center justify-start lg:justify-center">
							${hotel.ratesSummary.minPrice}
							<span className="text-[#84878B] text-base font-medium ml-2">
								For Two
							</span>
						</p>
						<Button
							className="bg-[#3B71FE] px-10 py-[10px] rounded-[23px] text-white text-xl font-bold"
							onClick={hotelDetailHandler}
						>
							Book Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelListItem;

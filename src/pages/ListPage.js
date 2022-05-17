import { useSelector } from 'react-redux';
import { useSearchHotelsQuery } from '../services/hotel';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import Search from '../components/Search/Search';
import HotelFilter from '../components/Hotel/HotelFilter';
import HotelList from '../components/Hotel/HotelList';
import SearchMobile from '../components/Search/SearchMobile';
import FlightList from '../components/Flight/FlightList';
import FlightFilter from '../components/Flight/FlightFilter';
import CarFilter from '../components/Car/CarFilter';
import CarList from '../components/Car/CarList';
import Loading from '../layouts/UI/Loading';

const ListPage = () => {
	const { idLocation, dateCheckIn, dateCheckOut, sortOrder, amenities, starRating, roomsNumber } =
		useParams();
	const homeType = useSelector((state) => state.home.type);
	const { data, error, isLoading } = useSearchHotelsQuery({
		idLocation,
		dateCheckIn,
		dateCheckOut,
		sortOrder,
		amenities,
		starRating,
		roomsNumber,
	});

	const listHotels = data?.hotels;
	const filterHotels = data?.tripFilterSummary;

	return (
		<div className="pt-[117px] bg-[#FAFAFB] pb-[280px]">
			<div className="md:flex items-center text-[#3B3E44] mb-10 hidden px-5 md:px-[135px]">
				<Link to="/">Home</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<span className="text-[#B1B5C3]">
					{homeType === 'hotel' ? 'Hotel' : homeType === 'flight' ? 'Flight' : 'Car'} List
				</span>
			</div>
			<SearchMobile className="mx-5 md:mx-[135px] block xl:hidden" />
			<Search className="mt-[250px] sm:mt-[297px] xl:mt-[168px] mb-[354px] hidden xl:block" />
			{error ? (
				<p className="text-center text-2xl">{error.data.detail[0].msg}</p>
			) : isLoading ? (
				<Loading className="w-10 h-10 mx-auto my-10" />
			) : (
				<div className="px-5 md:px-[135px] grid grid-cols-1 xl:grid-cols-12 gap-10">
					{homeType === 'hotel' ? (
						<>
							<HotelFilter
								className="col-span-3 hidden xl:block"
								idLocation={idLocation}
								dateCheckIn={dateCheckIn}
								dateCheckOut={dateCheckOut}
								sortOrder={sortOrder}
								filter={filterHotels}
							/>
							<HotelList
								className="col-span-1 xl:col-span-9"
								hotels={listHotels}
								checkin={dateCheckIn}
								checkout={dateCheckOut}
							/>
						</>
					) : homeType === 'flight' ? (
						<>
							<FlightFilter className="col-span-3 hidden xl:block" />
							<FlightList className="col-span-1 xl:col-span-9" />
						</>
					) : (
						<>
							<CarFilter className="col-span-3 hidden xl:block" />
							<CarList className="col-span-1 xl:col-span-9" />
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default ListPage;

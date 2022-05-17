import HomeItem from '../Home/HomeItem';
import HomeItemTrending from '../Home/HomeItemTrending';
import HomeItemAbsolute from '../Home/HomeItemAbsolute';
import { useGetCitiesQuery } from '../../services/hotel';
import Loading from '../../layouts/UI/Loading';

const Hotel = () => {
	const CITY_LIST = [];
	const DESTINATION_LIST = [];
	const HOTEL_LIST = [];
	// const { data, error, isLoading } = useGetCitiesQuery();

	// if (isLoading) {
	// 	return <Loading className="w-40 h-40 mx-auto my-60 border-8" />;
	// }

	// data.forEach((item) => {
	// 	if (item.type === 'CITY') {
	// 		CITY_LIST.push(item);
	// 	}
	// 	if (item.type === 'POI') {
	// 		DESTINATION_LIST.push(item);
	// 	}
	// 	if (item.type === 'HOTEL') {
	// 		HOTEL_LIST.push(item);
	// 	}
	// });

	return (
		<div className="pt-[220px] lg:pt-[157px] px-5 md:px-[135px] bg-[#FAFAFB] pb-[140px]">
			<div className="text-center">
				<h2 className="text-[30px] sm:text-5xl font-bold leading-snug mb-3 text-[#23262F]">
					Search a best place in the Vietnam
				</h2>
				<p className="text-[#84878B] max-w-[268px] sm:max-w-[593px] mx-auto mb-[65px] text-sm sm:text-base">
					Whether you’re looking for places for a vacation. We are here to Guide you about
					the details you need to check in and ease your trips in advance
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mb-[70px]">
					{CITY_LIST.map((city, index) => {
						if (index > 3) {
							return null;
						}
						return (
							<HomeItem
								cityName={city.cityName}
								key={city.id}
								provinceName={city.provinceName}
							/>
						);
					})}
				</div>
			</div>
			<div className="text-center mb-[92px]">
				<h2 className="text-[30px] sm:text-5xl font-bold leading-snug mb-3 text-[#23262F]">
					Featured Destinations
				</h2>
				<p className="text-[#84878B] sm:max-w-[593px] mx-auto mb-[65px] text-sm sm:text-base">
					Popular destinations open to visitors from Vietnam
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-[30px] mb-[70px] lg:max-h-[629px]">
					<HomeItemAbsolute
						className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2"
						itemName={DESTINATION_LIST[0]?.itemName}
						rank={DESTINATION_LIST[0]?.rank}
					/>
					<HomeItemAbsolute
						className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4"
						itemName={DESTINATION_LIST[6]?.itemName}
						rank={DESTINATION_LIST[6]?.rank}
					/>
					<HomeItemAbsolute
						className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-4"
						itemName={DESTINATION_LIST[5]?.itemName}
						rank={DESTINATION_LIST[5]?.rank}
					/>
					<HomeItemAbsolute
						className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2"
						itemName={DESTINATION_LIST[3]?.itemName}
						rank={DESTINATION_LIST[3]?.rank}
					/>
					<HomeItemAbsolute
						className="md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3"
						itemName={DESTINATION_LIST[4]?.itemName}
						rank={DESTINATION_LIST[4]?.rank}
					/>
					<HomeItemAbsolute
						className="md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4"
						itemName={DESTINATION_LIST[8]?.itemName}
						rank={DESTINATION_LIST[8]?.rank}
					/>
				</div>
			</div>
			<div className="text-center mb-[129px]">
				<h2 className="text-[30px] sm:text-5xl font-bold leading-snug mb-3 text-[#23262F]">
					Trending hotels
				</h2>
				<p className="text-[#84878B] mx-auto mb-[65px] text-sm sm:text-base">
					The most searched for cities on TripGuide
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-[70px]">
					{HOTEL_LIST.map((hotel, index) => {
						if (index > 5) {
							return null;
						}
						return <HomeItemTrending itemName={hotel?.itemName} key={hotel?.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Hotel;

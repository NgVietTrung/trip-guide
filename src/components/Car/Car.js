import HomeItem from '../Home/HomeItem';
import HomeItemTrending from '../Home/HomeItemTrending';
import HomeItemAbsolute from '../Home/HomeItemAbsolute';
import HomeItemExplore from '../Home/HomeItemExplore';
import React from 'react';

const Car = () => {
	return (
		<div className="pt-[220px] lg:pt-[157px] px-5 md:px-[135px] bg-[#FAFAFB] pb-[140px]">
			<div className="text-center">
				<h2 className="text-[30px] sm:text-5xl font-bold leading-snug mb-3 text-[#23262F]">
					Search a best place in the world CAR
				</h2>
				<p className="text-[#84878B] max-w-[268px] sm:max-w-[593px] mx-auto mb-[65px] text-sm sm:text-base">
					Whether you’re looking for places for a vacation. We are here to Guide you about
					the details you need to check in and ease your trips in advance
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mb-[70px]">
					<HomeItem />
					<HomeItem />
					<HomeItem />
					<HomeItem />
				</div>
			</div>
			<div className="text-center mb-[92px]">
				<h2 className="text-[30px] sm:text-5xl font-bold leading-snug mb-3 text-[#23262F]">
					Featured Destinations
				</h2>
				<p className="text-[#84878B] sm:max-w-[593px] mx-auto mb-[65px] text-sm sm:text-base">
					Popular destinations open to visitors from Indonesia
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-[30px] mb-[70px] lg:max-h-[629px]">
					<HomeItemAbsolute className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2" />
					<HomeItemAbsolute className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4" />
					<HomeItemAbsolute className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-4" />
					<HomeItemAbsolute className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2" />
					<HomeItemAbsolute className="md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3" />
					<HomeItemAbsolute className="md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4" />
				</div>
			</div>
			<div className="text-center mb-[129px]">
				<h2 className="text-[30px] sm:text-5xl font-bold leading-snug mb-3 text-[#23262F]">
					Trending cites
				</h2>
				<p className="text-[#84878B] mx-auto mb-[65px] text-sm sm:text-base">
					The most searched for cities on TripGuide
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-[70px]">
					<HomeItemTrending />
					<HomeItemTrending />
					<HomeItemTrending />
					<HomeItemTrending />
					<HomeItemTrending />
					<HomeItemTrending />
				</div>
			</div>
			<div className="text-center mb-[92px]">
				<h2 className="text-[30px] sm:text-5xl font-bold leading-snug mb-3 text-[#23262F]">
					Explore World
				</h2>
				<p className="text-[#84878B] sm:max-w-[593px] mx-auto mb-[65px] text-sm sm:text-base">
					10,788 beautiful places to go
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[70px]">
					<HomeItemExplore />
					<HomeItemExplore />
					<HomeItemExplore />
					<HomeItemExplore />
				</div>
			</div>
		</div>
	);
};
export default Car;

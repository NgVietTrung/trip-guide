import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const hotelApiHeaders = {
	'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com',
	'X-RapidAPI-Key': 'ec24e7ea60msh226aa932096f6fdp164902jsn76db1a3b747f',
};

const createRequest = (url) => ({ url, headers: hotelApiHeaders });

export const hotelApi = createApi({
	reducerPath: 'hotelApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/',
	}),
	endpoints: (builder) => ({
		getCities: builder.query({
			query: () => createRequest('locations?search_type=ALL&name=VIETNAM'),
		}),
		searchCityLocations: builder.query({
			query: (keyword) => createRequest(`locations?search_type=CITY&name=${keyword}`),
		}),
		searchHotels: builder.query({
			query: (object) =>
				createRequest(
					`search?date_checkin=${object.dateCheckIn}&location_id=${
						object.idLocation
					}&date_checkout=${object.dateCheckOut}&sort_order=${object.sortOrder}${
						object.roomsNumber ? '&rooms_number=' + object.roomsNumber : ''
					}${object.amenities ? '&amenities_ids=' + object.amenities : ''}${
						object.starRating ? '&star_rating_ids=' + object.starRating : ''
					}`
				),
		}),
		searchHotelDetail: builder.query({
			query: (idHotel) => createRequest(`details?hotel_id=${idHotel}`),
		}),
	}),
});

export const {
	useGetCitiesQuery,
	useSearchCityLocationsQuery,
	useSearchHotelsQuery,
	useSearchHotelDetailQuery,
} = hotelApi;

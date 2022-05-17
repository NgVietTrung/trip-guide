import CardDropDown from '../../layouts/UI/CardDropdown';
import { useSearchCityLocationsQuery } from '../../services/hotel';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Loading from '../../layouts/UI/Loading';

const SearchItem = (props) => {
	const { data, error, isLoading } = useSearchCityLocationsQuery(props.searchValue);

	return (
		<CardDropDown className="left-0 top-20 w-full last:mb-0 text-[#B1B5C3] font-medium !z-30">
			{error ? (
				<p className="text-center">Oh no, there was an error</p>
			) : isLoading ? (
				<Loading className="w-10 h-10 mx-auto my-10" />
			) : (
				data?.map((item) => (
					<li
						key={item.id}
						className="flex items-center last:mb-0 cursor-pointer hover:bg-[#E8EFFF] px-5 py-[6px] hover:transition hover:duration-500"
						onClick={() => props.onSearch({ id: item.id, itemName: item.itemName })}
					>
						<HiOutlineLocationMarker className="text-3xl mr-[10px]" />
						<div>
							<h3 className="text-[#777E90]">{item.cityName}</h3>
							<h4 className="font-normal">{item.itemName}</h4>
						</div>
					</li>
				))
			)}
		</CardDropDown>
	);
};

export default SearchItem;

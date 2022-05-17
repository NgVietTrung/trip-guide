import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../layouts/UI/Checkbox';
import RangeInput from '../../layouts/UI/RangeInput';
import Button from '../../layouts/UI/Button';
import { GrClose } from 'react-icons/gr';

const AMENITIES = [
	{
		value: 'FINTRNT',
		label: 'Free Internet Access',
	},
	{
		value: 'SPOOL',
		label: 'Swimming Pool',
	},
	{
		value: 'FITSPA',
		label: 'Fitness Center',
	},
	{
		value: 'PETALLOW',
		label: 'Pets Allowed',
	},
	{
		value: 'FBRKFST',
		label: 'Free Breakfast',
	},
	{
		value: 'FPRKING',
		label: 'Free Parking',
	},
	{
		value: 'AIRSHUTTL',
		label: 'Airport Shuttle',
	},
];

const HotelFilter = (props) => {
	let navigate = useNavigate();
	const [roomsNumber, setRoomsNumber] = useState(1);
	const [filterValue, setFilterValue] = useState({
		amenities: [],
		starRatings: [],
	});

	useEffect(() => {
		const api = {
			amenities: filterValue.amenities.join(),
			starRatings: filterValue.starRatings.join(),
			roomsNumber: roomsNumber,
		};
		let amenities = api.amenities !== '' ? '/' + api.amenities : '';
		let starRatings = api.starRatings !== '' ? '/' + api.starRatings : '';
		let url = `hotel/${props.idLocation}/${props.dateCheckIn}/${props.dateCheckOut}/${props.sortOrder}/${api.roomsNumber}${amenities}${starRatings}`;
		navigate(url, { replace: true });
	}, [roomsNumber, filterValue]);

	const roomsNumberHandler = (value) => {
		setRoomsNumber(value);
	};

	const checkboxHandler = (e) => {
		const { name, checked, value } = e.target;
		const { amenities, starRatings } = filterValue;

		if (checked) {
			if (name === 'amenities') {
				setFilterValue({ ...filterValue, amenities: [...amenities, value] });
			} else if (name === 'star') {
				setFilterValue({ ...filterValue, starRatings: [...starRatings, value] });
			}
		} else {
			if (name === 'amenities') {
				setFilterValue({ ...filterValue, amenities: amenities.filter((e) => e !== value) });
			} else if (name === 'star') {
				setFilterValue({
					...filterValue,
					starRatings: starRatings.filter((e) => e !== value),
				});
			}
		}
	};

	return (
		<form
			className={`${props.className} ${
				props.isMobileScreen ? 'overflow-y-scroll h-screen px-[30px]' : ''
			}`}
		>
			{props.isMobileScreen && (
				<div className="flex justify-between items-center border-b-[#e7ecf3] border-b-2 mb-[30px] py-[30px] font-medium text-lg">
					<Button className="text-xl" onClick={props.onCloseFilter}>
						<GrClose />
					</Button>
					<p>Filters</p>
					<Button>Clear</Button>
				</div>
			)}
			<div className="mb-[30px] flex flex-col">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Amenities</h6>
				{AMENITIES.map((amenity) => (
					<Checkbox
						key={amenity.value}
						label={amenity.label}
						value={amenity.value}
						name="amenities"
						onChange={checkboxHandler}
					/>
				))}
			</div>
			<div className="mb-[30px]">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Hotel star ratings</h6>
				{Object.entries(props.filter.starRatingCounts).map(([key, value]) => {
					return (
						<div className="flex justify-between items-center" key={key}>
							<Checkbox
								label={key}
								value={key}
								name="star"
								onChange={checkboxHandler}
							/>
							<p className="pb-3 text-[#84878B]">{value.toString()}</p>
						</div>
					);
				})}
			</div>
			<div className="mb-[30px]">
				<h6 className="text-[#141416] font-medium text-lg mb-3">Rooms number</h6>
				<RangeInput
					step={1}
					min={1}
					max={8}
					value={roomsNumber}
					onValue={roomsNumberHandler}
				/>
			</div>
		</form>
	);
};

export default HotelFilter;

import CarListItem from './CarListItem';
import CarType from './CarType';

const CarList = (props) => {
	return (
		<div className={`${props.className}`}>
			<CarType />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-[23px] gap-y-[30px]">
				<CarListItem />
				<CarListItem />
				<CarListItem />
				<CarListItem />
				<CarListItem />
				<CarListItem />
			</div>
		</div>
	);
};

export default CarList;

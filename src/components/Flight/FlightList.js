import React from 'react';
import FlightListItem from './FlightListItem';

const FlightList = (props) => {
	return (
		<div className={`${props.className} grid grid-cols-1 gap-[54px]`}>
			<FlightListItem />
			<FlightListItem />
			<FlightListItem />
		</div>
	);
};

export default FlightList;

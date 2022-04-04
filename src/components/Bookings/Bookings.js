import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import BookingItem from './BookingItem';
import Tab from '../../layouts/UI/Tab';

const Bookings = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<div className="pt-[117px] px-5 md:px-[135px] bg-[#FAFAFB] pb-[240px]">
			<div className="md:flex items-center text-[#3B3E44] mb-10 hidden">
				<Link to="/">Home</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<span className="text-[#B1B5C3]">Bookings</span>
			</div>
			<h1 className="text-[#141416] text-[30px] sm:text-5xl font-bold leading-[42px] mb-[37px]">
				Bookings
			</h1>
			<div className="mb-[30px] flex items-center">
				<Tab
					className={toggleState === 1 ? 'border-b-4 border-[#3B71FE]' : 'border-none'}
					onToggle={() => toggleTab(1)}
				>
					Total bookings (16)
				</Tab>
				<Tab
					className={toggleState === 2 ? 'border-b-4 border-[#3B71FE]' : 'border-none'}
					onToggle={() => toggleTab(2)}
				>
					Upcoming (0)
				</Tab>

				<Tab
					className={toggleState === 3 ? 'border-b-4 border-[#3B71FE]' : 'border-none'}
					onToggle={() => toggleTab(3)}
				>
					Cancelled (1)
				</Tab>
			</div>

			<div>
				<div
					className={
						toggleState === 1
							? 'h-auto opacity-100 transition-opacity duration-500'
							: 'overflow-hidden opacity-0 h-0'
					}
				>
					<BookingItem />
				</div>

				<div
					className={
						toggleState === 2
							? 'h-auto opacity-100 transition-opacity duration-500'
							: 'overflow-hidden opacity-0 h-0'
					}
				>
					<BookingItem />
					<BookingItem />
				</div>

				<div
					className={
						toggleState === 3
							? 'h-auto opacity-100 transition-opacity duration-500'
							: 'overflow-hidden opacity-0 h-0'
					}
				>
					<BookingItem />
					<BookingItem />
					<BookingItem />
				</div>
			</div>
		</div>
	);
};

export default Bookings;

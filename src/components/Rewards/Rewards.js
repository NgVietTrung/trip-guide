import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import RewardItem from './RewardItem';
import RewardTab from './RewardTab';

const Rewards = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<div className="pt-[117px] px-5 md:px-[135px] bg-[#FAFAFB] pb-[240px]">
			<div className="md:flex items-center text-[#3B3E44] mb-10 hidden">
				<Link to="/">Home</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<span className="text-[#B1B5C3]">My Rewards</span>
			</div>
			<h1 className="text-[#141416] text-[30px] sm:text-5xl font-bold leading-[42px] mb-[37px]">
				My Rewards
			</h1>
			<div className="mb-[30px]">
				<RewardTab
					className={toggleState === 1 ? 'border-b-4 border-[#3B71FE]' : 'border-none'}
					title={'Summary'}
					onToggle={() => toggleTab(1)}
				/>
				<RewardTab
					className={toggleState === 2 ? 'border-b-4 border-[#3B71FE]' : 'border-none'}
					title={'About Trip Guide Rewards'}
					onToggle={() => toggleTab(2)}
				/>
			</div>

			<div className="content-tabs">
				<div
					className={
						toggleState === 1
							? 'h-auto opacity-100 transition-opacity duration-500'
							: 'overflow-hidden opacity-0 h-0'
					}
				>
					<RewardItem />
				</div>

				<div
					className={
						toggleState === 2
							? 'h-auto opacity-100 transition-opacity duration-500'
							: 'overflow-hidden opacity-0 h-0'
					}
				>
					<RewardItem />
				</div>
			</div>
		</div>
	);
};

export default Rewards;

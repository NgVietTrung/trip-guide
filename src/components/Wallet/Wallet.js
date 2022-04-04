import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import WalletBalance from './WalletBalance';
import WalletTransaction from './WalletTransaction';
const Wallet = () => {
	return (
		<div className="pt-[117px] px-5 md:px-[135px] bg-[#FAFAFB] pb-[240px]">
			<div className="md:flex items-center text-[#3B3E44] mb-10 hidden">
				<Link to="/">Home</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<span className="text-[#B1B5C3]">Wallet</span>
			</div>
			<h1 className="text-[#141416] text-[30px] sm:text-5xl font-bold leading-[42px] mb-[26px]">
				Wallet
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
				<WalletBalance />
				<WalletTransaction />
			</div>
		</div>
	);
};

export default Wallet;

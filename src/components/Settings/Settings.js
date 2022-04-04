import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { FiLock } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsShare } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import { MdPayment } from 'react-icons/md';

const Settings = () => {
	return (
		<div className="pt-[117px] px-5 sm:px-[135px] bg-[#FAFAFB] pb-[240px]">
			<div className="sm:flex items-center text-[#3B3E44] mb-10 hidden">
				<Link to="/">Home</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<span className="text-[#B1B5C3]">Setting</span>
			</div>
			<h1 className="text-[#141416] text-[30px] sm:text-5xl font-bold leading-[70px] text-center sm:text-left mb-[10px]">
				Account Setting
			</h1>
			<p className="text-[#3B3E44] mb-[33px] text-center sm:text-left">
				Manage your TripGuide.com experience
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
				<div className="bg-white rounded-[10px] py-[25px] px-[35px] flex flex-col justify-center items-center">
					<div className="rounded-[50%] w-12 h-12 flex items-center bg-[#ebf1ff] mb-[13px]">
						<HiOutlineUserAdd className="mx-auto text-[#3573ea] text-2xl" />
					</div>
					<h4 className="text-[#222529] font-bold text-xl text-center">
						<Link to="/settings/personal">Personal details</Link>
					</h4>
					<p className="text-[#84878B]">Manage Personal details</p>
				</div>
				<div className="bg-white rounded-[10px] py-[25px] px-[35px] flex flex-col justify-center items-center">
					<div className="rounded-[50%] w-12 h-12 flex items-center bg-[#ebf1ff] mb-[13px]">
						<FiLock className="mx-auto text-[#3573ea] text-2xl" />
					</div>
					<h4 className="text-[#222529] font-bold text-xl text-center">
						<Link to="/settings/security">Security</Link>
					</h4>
					<p className="text-[#84878B]">Manage Personal details</p>
				</div>
				<div className="bg-white rounded-[10px] py-[25px] px-[35px] flex flex-col justify-center items-center">
					<div className="rounded-[50%] w-12 h-12 flex items-center bg-[#ebf1ff] mb-[13px]">
						<IoMdNotificationsOutline className="mx-auto text-[#3573ea] text-2xl" />
					</div>
					<h4 className="text-[#222529] font-bold text-xl text-center">
						<Link to="/settings/notifications">Notifications</Link>
					</h4>
					<p className="text-[#84878B]">Manage Personal details</p>
				</div>
				<div className="bg-white rounded-[10px] py-[25px] px-[35px] flex flex-col justify-center items-center">
					<div className="rounded-[50%] w-12 h-12 flex items-center bg-[#ebf1ff] mb-[13px]">
						<MdPayment className="mx-auto text-[#3573ea] text-2xl" />
					</div>
					<h4 className="text-[#222529] font-bold text-xl text-center">
						<Link to="/settings/payment">Payment payout</Link>
					</h4>
					<p className="text-[#84878B]">Manage Personal details</p>
				</div>
				<div className="bg-white rounded-[10px] py-[25px] px-[35px] flex flex-col justify-center items-center xl:col-start-2">
					<div className="rounded-[50%] w-12 h-12 flex items-center bg-[#ebf1ff] mb-[13px]">
						<BsShare className="mx-auto text-[#3573ea] text-2xl" />
					</div>
					<h4 className="text-[#222529] font-bold text-xl text-center">
						<Link to="/settings/privacy">Privacy & sharing</Link>
					</h4>
					<p className="text-[#84878B]">Manage Personal details</p>
				</div>
				<div className="bg-white rounded-[10px] py-[25px] px-[35px] flex flex-col justify-center items-center">
					<div className="rounded-[50%] w-12 h-12 flex items-center bg-[#ebf1ff] mb-[13px]">
						<GiSettingsKnobs className="mx-auto text-[#3573ea] text-2xl" />
					</div>
					<h4 className="text-[#222529] font-bold text-xl text-center">
						<Link to="/settings/preference">Preference</Link>
					</h4>
					<p className="text-[#84878B]">Manage Personal details</p>
				</div>
			</div>
		</div>
	);
};

export default Settings;

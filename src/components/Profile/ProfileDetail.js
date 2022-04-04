import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { MdOutlineCake } from 'react-icons/md';
import { BsGenderMale } from 'react-icons/bs';
import Input from '../../layouts/UI/Input';
const ProfileDetail = () => {
	return (
		<div className="w-full max-w-[800px]">
			<h1 className="text-5xl font-bold pb-8 border-b mb-[51px] hidden lg:block">
				My Profile
			</h1>
			<div className="bg-white rounded-[20px] overflow-hidden pt-[18px] px-5 sm:px-16 pb-6 sm:pb-8 mb-[46px]">
				<div className="flex items-center flex-col xl:flex-row">
					<p className="text-xl sm:text-2xl text-[#23262F] font-medium mr-[25px] w-full max-w-[260px] mb-4 lg:mb-[13px]">
						Complete your Profile
					</p>
					<div className="flex w-full items-center mb-[14px] lg:mb-0">
						<div className="w-full mr-[25px] rounded-[20px] h-[11px] bg-[#e9effd] relative">
							<div className="absolute left-0 bg-[#3b71fe] w-[70%] h-full top-0 rounded-[20px]"></div>
						</div>
						<span className="text-2xl text-[#23262F] font-medium">70%</span>
					</div>
				</div>
				<article className="text-[#3B3E44] mb-[23px]">
					Get the best out of TripGuide by adding the remaining details!
				</article>
				<div className="flex justify-between flex-wrap">
					<div className="flex items-center rounded-[20px] px-[15px] py-[6px] bg-[#E7ECF3] mb-[14px]">
						<div className="bg-[#145CE6] rounded-[50%] text-white p-[2px] mr-[6px] text-sm">
							<AiOutlineCheck />
						</div>
						Verified Email ID
					</div>
					<div className="flex items-center rounded-[20px] px-[15px] py-[6px] bg-[#E7ECF3] mb-[14px]">
						<div className="bg-[#145CE6] rounded-[50%] text-white p-[2px] mr-[6px] text-sm">
							<AiOutlineCheck />
						</div>
						Verified mobile Number
					</div>
					<div className="flex items-center rounded-[20px] px-[15px] py-[6px] bg-[#E7ECF3] mb-[14px]">
						<div className="bg-[#145CE6] rounded-[50%] text-white p-[2px] mr-[6px] text-sm">
							<AiOutlineCheck />
						</div>
						Complete Basic Info
					</div>
				</div>
			</div>
			<h3 className="text-[#222529] text-xl sm:text-2xl font-medium mb-10">
				Hi, I’m Jonathan Due
			</h3>
			<form action="" className="grid grid-cols-1 sm:grid-cols-2 gap-9">
				<div>
					<label htmlFor="" className="text-[#84878B] font-bold block mb-[14px]">
						Live in
					</label>
					<div className="relative ">
						<BiHomeAlt className="absolute top-[50%] left-5 transform -translate-y-1/2 text-[#84878B] text-lg" />
						<Input
							disabled={true}
							value="Zuichi, Switzerland"
							className="text-[#3B3E44] px-[52px] py-[14px]"
							type={'text'}
						/>
					</div>
				</div>
				<div>
					<label htmlFor="" className="text-[#84878B] font-bold block mb-[14px]">
						Street address
					</label>
					<div className="relative ">
						<BiHomeAlt className="absolute top-[50%] left-5 transform -translate-y-1/2 text-[#84878B] text-lg" />
						<Input
							disabled={true}
							value="2445 Crosswind Drive"
							className="text-[#3B3E44] px-[52px] py-[14px]"
							type={'text'}
						/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="" className="text-[#84878B] font-bold block mb-[14px]">
						Email address
					</label>
					<div className="relative  ">
						<FiMail className="absolute top-[50%] left-5 transform -translate-y-1/2 text-[#84878B] text-lg" />
						<Input
							disabled={true}
							value="gmail@gmail.com"
							className="text-[#3B3E44] px-[52px] py-[14px]"
							type={'email'}
						/>
					</div>
				</div>
				<div>
					<label htmlFor="" className="text-[#84878B] font-bold block mb-[14px]">
						Date Of Birth
					</label>
					<div className="relative ">
						<MdOutlineCake className="absolute top-[50%] left-5 transform -translate-y-1/2 text-[#84878B] text-lg" />
						<Input
							disabled={true}
							value="07.12.1997"
							className="text-[#3B3E44] px-[52px] py-[14px]"
							type={'text'}
						/>
					</div>
				</div>
				<div>
					<label htmlFor="" className="text-[#84878B] font-bold block mb-[14px]">
						Gender
					</label>
					<div className="relative ">
						<BsGenderMale className="absolute top-[50%] left-5 transform -translate-y-1/2 text-[#84878B] text-lg" />
						<Input
							disabled={true}
							value="Male"
							className="text-[#3B3E44] px-[52px] py-[14px]"
							type={'text'}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ProfileDetail;

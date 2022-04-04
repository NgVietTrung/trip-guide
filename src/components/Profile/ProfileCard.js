import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai';
import { GrEdit } from 'react-icons/gr';

const ProfileCard = () => {
	return (
		<div className="bg-white rounded-[10px] border-[1px] border-[#f4f5f6] mr-0 lg:mr-[33px] max-h-[562px] mb-[30px] lg:mb-0 sm:min-w-[370px]">
			<div className="relative mt-[30px] mb-5">
				<img
					alt=""
					srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOAfgsxLSFr40R5GJwvJpDV5WYJvGczb62Q&usqp=CAU"
					className="block w-[170px] h-[170px] object-cover rounded-[50%] mx-auto"
				/>
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#F4F5F6] rounded-[50%] p-3 cursor-pointer">
					<GrEdit />
				</div>
			</div>
			<h3 className="font-bold text-[34px] text-center mb-5">Jonathan Due</h3>
			<div className="flex items-center rounded-[32px] bg-[#F4F5F6] px-[27px] py-2 text-[#777E90] mx-auto w-[195px] leading-6 mb-6 text-sm">
				<AiOutlineCheck className="mr-3 text-lg" />
				Indentity verified
			</div>
			<div className="border-t mx-[27px] pt-7 mb-[38px] text-[#3B3E44] font-medium">
				<div className="flex justify-between mb-[17px]">
					<div>From</div>
					<div className="text-[#84878B]">United State</div>
				</div>
				<div className="flex justify-between">
					<div>Member Since</div>
					<div className="text-[#84878B]">05.06.1996</div>
				</div>
			</div>
			<div className="flex items-center justify-center text-white bg-[#878CFF] rounded-[32px] mx-[35px] px-[66px] sm:px-[86px] py-[6px] mb-[38px] cursor-pointer">
				Edit My Data <BiEditAlt className="ml-3 text-lg" />
			</div>
		</div>
	);
};

export default ProfileCard;

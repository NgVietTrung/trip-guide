import React from 'react';
import background from '../../assets/images/bgSub.png';

const Subscription = () => {
	return (
		<div className="relative mx-5 md:mx-[135px] mb-10">
			<div
				className="bg-cover rounded-[19px] flex flex-col justify-center xl:flex-row py-4 px-5 sm:py-[35px] sm:px-[35px] lg:py-[62px] lg:px-[90px] w-full absolute -translate-y-1/2"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="mb-[20px] ml-3 xl:mb-0 sm:mr-auto">
					<h2 className="text-3xl sm:text-[44px] font-bold text-white mb-4 leading-[52px]">
						Get our pro offers
					</h2>
					<p className="text-base text-white max-w-[300px]">
						Create a visual identity for your company, and an overall brand
					</p>
				</div>
				<div className="mt-auto">
					<form
						action=""
						className="bg-[#FCFCFD] rounded-md sm:rounded-[4px] p-2 flex xl:w-[460px]"
					>
						<input
							type="email"
							className="border-none focus:outline-none block w-full border-transparent focus:border-transparent focus:ring-0 placeholder:text-[#B1B5C3]"
							placeholder="Enter email ..."
						/>
						<button className="py-3 px-5 xl:py-[18px] xl:px-[30px] font-medium text-white text- rounded-md sm:rounded-[4px] bg-black ml-2">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Subscription;

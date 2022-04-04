import { useSelector } from 'react-redux';

const IMAGE_HOTEL =
	'https://images.pexels.com/photos/3320516/pexels-photo-3320516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940;';
const IMAGE_FLIGHT =
	'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80';
const IMAGE_CAR =
	'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const Banner = () => {
	const typeBanner = useSelector((state) => state.home.type);

	let imageBanner =
		typeBanner === 'hotel' ? IMAGE_HOTEL : typeBanner === 'flight' ? IMAGE_FLIGHT : IMAGE_CAR;
	let titleBanner =
		typeBanner === 'hotel'
			? 'Book With Us And Enjoy your Journey !'
			: typeBanner === 'flight'
			? 'Amazing Flight To Switzerland'
			: 'Find your best rental car?';
	return (
		<div className="relative px-[135] z-5">
			<img alt="" srcSet={imageBanner} className="block h-screen w-full object-cover" />
			<div
				className={`block absolute top-1/3 sm:top-1/2 left-1/2  sm:left-[15%] ${
					typeBanner !== 'flight' ? 'text-[#3B3E44]' : 'text-white'
				} font-bold -translate-y-1/2 -translate-x-1/2 sm:translate-x-0 tracking-tighter min-w-[272px]`}
			>
				<h1 className="text-[40px] sm:text-[64px] leading-[59px] sm:leading-[80px] max-w-xs sm:max-w-[33rem] mb-[10px] sm:mb-[30px]">
					{titleBanner}
				</h1>
				<p className="text-[22px] sm:text-[34px] max-w-xs sm:max-w-[33rem]">
					Find and book a great experience
				</p>
			</div>
		</div>
	);
};

export default Banner;

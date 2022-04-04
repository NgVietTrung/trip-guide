import { useState } from 'react';
import bmw from '../../assets/images/bmwi10.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const CarType = () => {
	const [isActive, setIsActive] = useState(null);
	let settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 824,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	const cssActive =
		'before:absolute before:inset-0 before:z-20 before:bg-[#145CE6] before:bg-opacity-10 before:border-2 before:border-[#145CE6] before:rounded-[5px]';

	return (
		<div className="mb-[50px] text-[#353945] font-medium">
			<Slider {...settings}>
				<div
					className={`${
						isActive === 1 ? cssActive : ''
					} cursor-pointer rounded-[5px] overflow-hidden max-w-[180px] pr-2 relative`}
				>
					<img
						alt=""
						srcSet={bmw}
						onClick={() => setIsActive(1)}
						className="bg-[#F2F2F2] rounded-t-[5px] p-3 object-cover h-[92px] w-full block"
					/>
					<div className="bg-white text-center py-2">Small</div>
				</div>
				<div
					className={`${
						isActive === 2 ? cssActive : ''
					} cursor-pointer rounded-[5px] overflow-hidden max-w-[180px] px-2 relative`}
				>
					<img
						alt=""
						srcSet={bmw}
						onClick={() => setIsActive(2)}
						className="bg-[#F2F2F2] rounded-t-[5px] p-3 object-cover h-[92px] w-full block"
					/>
					<div className="bg-white text-center py-2">Large</div>
				</div>
				<div
					className={`${
						isActive === 3 ? cssActive : ''
					} cursor-pointer rounded-[5px] overflow-hidden max-w-[180px] px-2 relative`}
				>
					<img
						alt=""
						srcSet={bmw}
						onClick={() => setIsActive(3)}
						className="bg-[#F2F2F2] rounded-t-[5px] p-3 object-cover h-[92px] w-full block"
					/>
					<div className="bg-white text-center py-2">Premium</div>
				</div>
				<div
					className={`${
						isActive === 4 ? cssActive : ''
					} cursor-pointer rounded-[5px] overflow-hidden max-w-[180px] px-2 relative`}
				>
					<img
						alt=""
						srcSet={bmw}
						onClick={() => setIsActive(4)}
						className="bg-[#F2F2F2] rounded-t-[5px] p-3 object-cover h-[92px] w-full block"
					/>
					<div className="bg-white text-center py-2">SUVs</div>
				</div>
				<div
					className={`${
						isActive === 5 ? cssActive : ''
					} cursor-pointer rounded-[5px] overflow-hidden max-w-[180px] pl-2 relative`}
				>
					<img
						alt=""
						srcSet={bmw}
						onClick={() => setIsActive(5)}
						className="bg-[#F2F2F2] rounded-t-[5px] p-3 object-cover h-[92px] w-full block"
					/>
					<div className="bg-white text-center py-2">People carries</div>
				</div>
			</Slider>
		</div>
	);
};

export default CarType;

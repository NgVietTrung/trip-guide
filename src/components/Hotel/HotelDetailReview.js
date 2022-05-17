import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Button from '../../layouts/UI/Button';
const HotelDetailReview = ({ reviews }) => {
	const [loadMore, setLoadMore] = useState(3);

	const loadMoreHandler = () => {
		setLoadMore((prevState) => prevState + 3);
	};

	return (
		<div className="text-[#23262F] mb-[70px]">
			<div className="flex items-center justify-between mb-5">
				<h2 className="text-xl md:text-[40px] font-bold leading-[44px]">
					Attach your Review
				</h2>
				<div className="flex">
					<FaStar className="text-[#FFC542] mr-[10px]" />
					<FaStar className="text-[#FFC542] mr-[10px]" />
					<FaStar className="text-[#FFC542] mr-[10px]" />
					<FaStar className="text-[#FFC542] mr-[10px]" />
					<FaStar className="text-[#FFC542]" />
				</div>
			</div>
			<textarea
				placeholder="Write your detailed review here..."
				rows="3"
				className="w-full bg-[#F4F5F6] border-[#E7ECF3] border-2 rounded-xl px-[30px] py-6 text-base md:text-lg outline-none focus:outline-none focus:border-transparent mb-5"
			></textarea>
			<div className="flex justify-end font-medium mb-[60px]">
				<Button className="bg-[#F4F5F6] text-[#84878B] border-[#E7ECF3] border-[1px] px-6 py-2">
					Cancel
				</Button>
				<Button className="bg-[#316BFF] text-white px-6 py-2 ml-5">Submit</Button>
			</div>
			<h3 className="mb-[30px] md:mb-[35px] text-[#333333] text-xl md:text-2xl font-bold">
				Latest Reviews
			</h3>
			<ul>
				{reviews.slice(0, loadMore).map((review, index) => (
					<li
						key={index}
						className="bg-white rounded-2xl border-[#E7ECF3] border-[1px] px-6 md:px-[30px] py-10 md:py-[35px] flex justify-between md:items-center flex-col md:flex-row mb-[30px]"
					>
						<div className="flex mb-6 md:mb-0">
							<div className="w-[62px] h-[62px] rounded-[50%] overflow-hidden mr-4">
								<img
									srcSet="https://res.cloudinary.com/chriscloud1109/image/upload/v1651629584/media/default_gr1p4q.jpg"
									alt=""
									className="object-cover w-full h-full"
								/>
							</div>
							<div className="flex justify-center flex-col">
								<h4 className="text-[#23262F] mb-[3px] font-bold">
									{review.firstName}
								</h4>
								<p className="text-[#84878B] text-sm">{review.travelerType}</p>
							</div>
						</div>
						<div className="md:w-3/5 text-[#84878B]">
							<div className="flex items-center justify-between md:justify-start mb-4 md:mb-3">
								<h4 className="text-[#23262F] font-bold">
									Score: {review.overallScore}
								</h4>
								<p className="text-sm md:ml-8">{review.creationDate}</p>
							</div>
							<p className="mb-6 md:mb-[22px] text-sm leading-6 md:text-base">
								{review.reviewTextPositive}
							</p>
							{/* <div className="flex items-center justify-between flex-wrap text-[#145CE6] text-sm font-medium">
								<Button className="mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
									Comment
								</Button>
								<Button className="mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
									Like
								</Button>
								<Button className="mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
									Reply
								</Button>
							</div> */}
						</div>
					</li>
				))}
			</ul>
			<Button
				className="font-medium px-10 py-[10px] text-[#141416] border border-[#B1B5C3] max-h-[46px] max-w-[176px] mx-auto rounded-[47px]"
				onClick={loadMoreHandler}
			>
				Show More
			</Button>
		</div>
	);
};

export default HotelDetailReview;

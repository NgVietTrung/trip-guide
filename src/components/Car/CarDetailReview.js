import { FaStar } from 'react-icons/fa';
import Button from '../../layouts/UI/Button';
const CarDetailReview = () => {
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
				<li className="bg-white rounded-2xl border-[#E7ECF3] border-[1px] px-6 md:px-[30px] py-10 md:py-[35px] flex justify-between md:items-center flex-col md:flex-row mb-[30px]">
					<div className="flex mb-6 md:mb-0">
						<div className="w-[62px] h-[62px] rounded-[50%] overflow-hidden mr-4">
							<img
								srcSet="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/151296956_2198779476922608_9064820515933100826_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=b38rcgA5yMMAX81gwA6&tn=5A38x8KotF1PkXQ7&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-w5xsyIwqb3MqCFIRloM873tVGvgtHIS8sESEDYxgh4g&oe=626AEAE2"
								alt=""
								className="object-cover w-full h-full"
							/>
						</div>
						<div>
							<h4 className="text-[#23262F] mb-[3px] font-bold">
								Patricia W. Fenster
							</h4>
							<p className="text-[#84878B] text-sm">Cao Bằng</p>
							<p className="text-[#B1B5C3] text-sm">45 Follower, 68 Reviews </p>
						</div>
					</div>
					<div className="md:w-3/5 text-[#84878B]">
						<div className="flex items-center justify-between md:justify-start mb-4 md:mb-3">
							<div className="flex">
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542]" />
							</div>
							<p className="text-sm md:ml-8">25.5.2020</p>
						</div>
						<p className="mb-6 md:mb-[22px] text-sm leading-6 md:text-base">
							We hod the most spectoculor view. Unfortunately it was very hot in the
							room from 2-8.30 pm due to no air conditioning and no shade.{' '}
						</p>
						<div className="flex items-center justify-between flex-wrap text-[#145CE6] text-sm font-medium">
							<Button className="mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
								Comment
							</Button>
							<Button className="mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
								Like
							</Button>
							<Button className="mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
								Reply
							</Button>
						</div>
					</div>
				</li>
				<li className="bg-white rounded-2xl border-[#E7ECF3] border-[1px] px-6 md:px-[30px] py-10 md:py-[35px] flex justify-between md:items-center flex-col md:flex-row mb-[30px]">
					<div className="flex mb-6 md:mb-0">
						<div className="w-[62px] h-[62px] rounded-[50%] overflow-hidden mr-4">
							<img
								srcSet="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/151296956_2198779476922608_9064820515933100826_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=b38rcgA5yMMAX81gwA6&tn=5A38x8KotF1PkXQ7&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-w5xsyIwqb3MqCFIRloM873tVGvgtHIS8sESEDYxgh4g&oe=626AEAE2"
								alt=""
								className="object-cover w-full h-full"
							/>
						</div>
						<div>
							<h4 className="text-[#23262F] mb-[3px] font-bold">
								Patricia W. Fenster
							</h4>
							<p className="text-[#84878B] text-sm">Cao Bằng</p>
							<p className="text-[#B1B5C3] text-sm">45 Follower, 68 Reviews </p>
						</div>
					</div>
					<div className="md:w-3/5 text-[#84878B]">
						<div className="flex items-center justify-between md:justify-start mb-4 md:mb-3">
							<div className="flex">
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542]" />
							</div>
							<p className="text-sm md:ml-8">25.5.2020</p>
						</div>
						<p className="mb-6 md:mb-[22px] text-sm leading-6 md:text-base">
							We hod the most spectoculor view. Unfortunately it was very hot in the
							room from 2-8.30 pm due to no air conditioning and no shade.{' '}
						</p>
						<div className="flex items-center justify-between flex-wrap text-[#145CE6] text-sm font-medium">
							<Button className="mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
								Comment
							</Button>
							<Button className="mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
								Like
							</Button>
							<Button className="mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
								Reply
							</Button>
						</div>
					</div>
				</li>
				<li className="bg-white rounded-2xl border-[#E7ECF3] border-[1px] px-6 md:px-[30px] py-10 md:py-[35px] flex justify-between md:items-center flex-col md:flex-row">
					<div className="flex mb-6 md:mb-0 h-[62px]">
						<div className="w-[62px] h-full rounded-[50%] overflow-hidden mr-4">
							<img
								srcSet="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/151296956_2198779476922608_9064820515933100826_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=b38rcgA5yMMAX81gwA6&tn=5A38x8KotF1PkXQ7&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-w5xsyIwqb3MqCFIRloM873tVGvgtHIS8sESEDYxgh4g&oe=626AEAE2"
								alt=""
								className="object-cover w-full h-full"
							/>
						</div>
						<div>
							<h4 className="text-[#23262F] mb-[3px] font-bold">
								Patricia W. Fenster
							</h4>
							<p className="text-[#84878B] text-sm">Cao Bằng</p>
							<p className="text-[#B1B5C3] text-sm">45 Follower, 68 Reviews </p>
						</div>
					</div>
					<div className="md:w-3/5 text-[#84878B]">
						<div className="flex items-center justify-between md:justify-start mb-4 md:mb-3">
							<div className="flex">
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542] mr-[10px]" />
								<FaStar className="text-[#FFC542]" />
							</div>
							<p className="text-sm md:ml-8">25.5.2020</p>
						</div>
						<p className="mb-6 md:mb-[22px] text-sm leading-6 md:text-base">
							We hod the most spectoculor view. Unfortunately it was very hot in the
							room from 2-8.30 pm due to no air conditioning and no shade.{' '}
						</p>
						<div className="flex items-center justify-between md:flex-wrap text-[#145CE6] text-sm font-medium">
							<Button className="md:mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
								Comment
							</Button>
							<Button className="md:mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
								Like
							</Button>
							<Button className="md:mb-3 px-5 md:px-[30px] py-[5px] bg-[#e7effc] !rounded-[26px]">
								Reply
							</Button>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default CarDetailReview;

import FlightDetailInfo from './FlightDetailInfo';
import FlightDetailPassenger from './FlightDetailPassenger';

const FlightDetail = () => {
	return (
		<div className="px-5 sm:px-[135px] bg-[#FAFAFB]">
			<main className="grid grid-cols-1 xl:grid-cols-12 gap-[30px]">
				<div className="col-span-1 xl:col-span-8">
					<FlightDetailInfo />
					<FlightDetailPassenger />
				</div>
				<div className="col-span-1 xl:col-span-4 bg-white rounded-[10px] px-[18px] md:px-[30px] py-6 border-2 border-[#EAEAEA] md:min-w-[408px] h-fit">
					<h2 className="text-[#333333] text-xl font-medium mb-5">Price Details</h2>
					<ul className="mb-5 font-medium pb-5 border-b-2 border-b-[#EAEAEA]">
						<li className="flex justify-between items-center mb-5 ">
							<p className="text-[#84878B]">1x Passenger</p>
							<p>$350</p>
						</li>
						<li className="flex justify-between items-center mb-5">
							<p className="text-[#84878B]">Tax and fee</p>
							<p>$8</p>
						</li>
						<li className="flex justify-between items-center mb-5">
							<p className="text-[#84878B]">Service free</p>
							<p>$2</p>
						</li>
						<li className="flex justify-between items-center font-medium text-[#23262F] px-4 py-2 bg-[#d8e3ff] rounded-md -mx-4 leading-6">
							<p>Total</p>
							<p>$360</p>
						</li>
					</ul>
					<div className="mb-5 font-medium pb-5 border-b-2 border-b-[#EAEAEA]">
						<h2 className="text-[#333333] text-xl mb-4">Passengers</h2>
						<p className="text-[#777E90]">1x adult 2 children</p>
					</div>
					<div className="mb-5 font-medium pb-5 border-b-2 border-b-[#EAEAEA]">
						<h2 className="text-[#333333] text-xl mb-5">Check-in baggage</h2>
						<ul className="text-[#84878B] font-medium">
							<li className="flex justify-between items-center mb-[10px]">
								<h3>Departure</h3>
								<h3>3 bags ( 120g total)</h3>
							</li>
							<li className="flex justify-between items-center">
								<h3>Return</h3>
								<h3>3 bags ( 120g total)</h3>
							</li>
						</ul>
					</div>
					<div className="font-medium">
						<h2 className="text-[#333333] text-xl mb-4">Services</h2>
						<p className="text-[#777E90]">No extra services selected</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default FlightDetail;

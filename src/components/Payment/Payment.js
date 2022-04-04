import mastercard from '../../assets/images/mastercard.png';
import paypal from '../../assets/images/paypal.png';
import visa from '../../assets/images/visa.png';
import amexp from '../../assets/images/amexp.png';

const Payment = () => {
	return (
		<div className="px-5 sm:px-[135px] bg-[#FAFAFB]">
			<main className="grid grid-cols-1 xl:grid-cols-12 gap-[35px]">
				<div className="col-span-1 xl:col-span-7">
					<h1 className="text-[#141416] text-[34px] md:text-[40px] font-bold mb-6 md:mb-10">
						Confirm your Book
					</h1>
					<h2 className="text-[#141416] text-[28px] md:text-[34px] font-bold mb-5 md:mb-6">
						Credit Cards
					</h2>
					<div className="flex items-center pb-[30px] mb-10 border-b-[#F4F5F6] border-b-2">
						<div className="w-24 h-12 border-[#E6E6E6] border-2 cursor-pointer rounded-md overflow-hidden flex items-center justify-center mr-3">
							<img srcset={mastercard} alt="mastercard" className="object-cover" />
						</div>
						<div className="w-24 h-12 border-[#E6E6E6] border-2 cursor-pointer rounded-md overflow-hidden flex items-center justify-center mr-3">
							<img srcset={paypal} alt="paypal" className="object-cover" />
						</div>
						<div className="w-24 h-12 border-[#E6E6E6] border-2 cursor-pointer rounded-md overflow-hidden flex items-center justify-center mr-3">
							<img srcset={visa} alt="visa" className="object-cover" />
						</div>
						<div className="w-24 h-12 border-[#E6E6E6] border-2 cursor-pointer rounded-md overflow-hidden flex items-center justify-center mr-3">
							<img srcset={amexp} alt="amexp" className="object-cover" />
						</div>
					</div>
				</div>
				<div className="col-span-1 xl:col-span-5 bg-white rounded-[20px] px-[18px] md:px-8 py-5 border-2 border-[#EAEAEA]"></div>
			</main>
		</div>
	);
};

export default Payment;

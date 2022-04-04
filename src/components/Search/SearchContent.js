import { useSelector } from 'react-redux';
import Input from '../../layouts/UI/Input';
import useInput from '../../hooks/useInput';

const SearchContent = () => {
	const typeHome = useSelector((state) => state.home.type);
	const { value: locationValue, valueChangeHandler: locationChangeHandler } = useInput(
		(value) => value.length > 0
	);
	return (
		<div
			className={`grid grid-cols-10 ${
				typeHome === 'hotel' ? 'grid-rows-2 lg:grid-rows-1' : 'grid-rows-3 xl:grid-rows-1'
			} mt-8 gap-2`}
		>
			<div
				className={`col-span-10 ${
					typeHome === 'hotel' ? 'lg:col-span-4' : 'xl:col-span-3'
				} px-6 py-[10px] bg-[#F4F5F7] rounded-lg cursor-auto`}
			>
				<h3 className="text-base sm:text-lg font-medium text-[#3B3E44]">
					{typeHome === 'hotel' ? 'Location' : 'Leaving From'}
				</h3>
				<Input
					type="text"
					value={locationValue}
					onChange={locationChangeHandler}
					placeholder="Where are you from?"
					className="border-none bg-white p-0 bg-[#F4F5F7] rounded-none text-sm lg:text-base"
				/>
			</div>
			{typeHome !== 'hotel' && (
				<div className="col-span-10 xl:col-span-3 px-6 py-[10px] bg-[#F4F5F7] rounded-lg cursor-auto">
					<h3 className="text-base sm:text-lg font-medium text-[#3B3E44]">Going to</h3>
					<Input
						type="text"
						value={locationValue}
						onChange={locationChangeHandler}
						placeholder="Where are you from?"
						className="border-none bg-white p-0 bg-[#F4F5F7] rounded-none text-sm lg:text-base"
					/>
				</div>
			)}
			<div
				className={`col-span-5 ${
					typeHome === 'hotel' ? 'lg:col-span-3' : 'xl:col-span-2'
				} px-6 py-3 bg-[#F4F5F7] rounded-lg`}
			>
				<h3 className="text-base sm:text-lg font-medium text-[#3B3E44]">Check in</h3>
				<p className="text-sm lg:text-base text-[#B1B5C3]">Add Date</p>
			</div>
			<div
				className={`col-span-5 ${
					typeHome === 'hotel' ? 'lg:col-span-3' : 'xl:col-span-2'
				} px-6 py-3 bg-[#F4F5F7] rounded-lg`}
			>
				<h3 className="text-base sm:text-lg font-medium text-[#3B3E44]">Check out</h3>
				<p className="text-sm lg:text-base text-[#B1B5C3]">Add date</p>
			</div>
		</div>
	);
};

export default SearchContent;

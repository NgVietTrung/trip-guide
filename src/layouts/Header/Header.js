import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.svg';
import flag from '../../assets/images/flag.svg';
import HeaderDropdown from './HeaderDropdown';
import NotificationDropdown from './NotificationDropdown';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';

const Header = (props) => {
	const user = useSelector((state) => state.user.user);
	const [isToggleHeader, setIsToggleHeader] = useState(false);
	const [isToggleNoti, setIsToggleNoti] = useState(false);

	const dropdownToggleHeaderHandler = () => {
		setIsToggleHeader((prevState) => !prevState);
		setIsToggleNoti(false);
	};

	const dropdownToggleNotiHandler = () => {
		setIsToggleNoti((prevState) => !prevState);
		setIsToggleHeader(false);
	};
	return (
		<header className="flex justify-between py-[30px] px-5 md:py-5 md:px-[135px] box items-center bg-white shadow-sm shadow-[#E2E2EA] fixed left-0 right-0 top-0 z-10">
			<div>
				<Link to="/">
					<img srcSet={logo} alt="" className="w-24 h-7 sm:w-full sm:h-full" />
				</Link>
			</div>
			<div className="flex items-center">
				<p className="text-sm font-bold text-[#84878B] mr-[14px]">USD</p>
				<div className="mr-[16px]">
					<img srcSet={flag} alt="" />
				</div>
				<div className="relative pr-3 sm:pr-4 mr-3 sm:mr-5 py-[5px]">
					<AiOutlineBell
						className="text-xl cursor-pointer"
						onClick={dropdownToggleNotiHandler}
					/>
					{user && <NotificationDropdown isToggle={isToggleNoti} />}
					<div className="absolute border-r-[1px] border-solid border-[#E7ECF3] top-0 bottom-0 right-0"></div>
				</div>
				<div className="flex items-center">
					{user && (
						<>
							<img
								className="w-7 h-7 sm:w-8 sm:h-8 object-cover rounded-[19px] block sm:mr-[10px] sm:pointer-events-none pointer-events-auto cursor-pointer sm:cursor-none"
								srcSet={user.photoUrl}
								alt=""
								onClick={dropdownToggleHeaderHandler}
							/>
							<p className="text-[14px] font-medium mr-[17px] hidden sm:block">
								{user.displayName}
							</p>
							<HeaderDropdown
								onToggle={dropdownToggleHeaderHandler}
								isToggle={isToggleHeader}
							/>
						</>
					)}
					{!user && (
						<div
							className="bg-[#E7ECF3] p-[6px] rounded-[50%] cursor-pointer"
							onClick={props.onToggle}
						>
							<AiOutlineUser className="text-xl text-[#B1B5C3]" />
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;

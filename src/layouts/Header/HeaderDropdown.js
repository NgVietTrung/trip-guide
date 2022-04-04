import HeaderDropdownItem from './HeaderDropdownItem';
import { MdArrowDropDown } from 'react-icons/md';
import { BiUserCircle, BiLogOutCircle, BiBriefcaseAlt } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { CgCreditCard } from 'react-icons/cg';
import { BsTag } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase/config';
import { logout } from '../../store/userSlice';
import CardDropDown from '../UI/CardDropdown';
import { Link } from 'react-router-dom';

const HeaderDropdown = (props) => {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		dispatch(logout());
		auth.signOut();
	};
	const listDropdown = [
		{
			icon: <BiUserCircle />,
			title: 'My profile',
			link: '/profile',
		},
		{
			icon: <AiOutlineUser />,
			title: 'Manager account',
			link: '/settings',
		},
		{
			icon: <BiBriefcaseAlt />,
			title: 'Bookings',
			link: '/bookings',
		},
		{
			icon: <CgCreditCard />,
			title: 'My wallate',
			link: '/wallet',
		},
		{
			icon: <BsTag />,
			title: 'My rewards',
			link: '/rewards',
		},
	];

	return (
		<div className="flex items-center absolute sm:relative">
			<MdArrowDropDown
				className="text-2xl sm:text-xl cursor-pointer w-full text-transparent sm:text-black hidden sm:block"
				onClick={props.onToggle}
			/>

			{props.isToggle && (
				<CardDropDown className="top-8 right-[-24px] sm:right-[-8px]">
					{listDropdown.map((item, index) => (
						<HeaderDropdownItem
							icon={item.icon}
							title={item.title}
							key={index}
							link={item.link}
						/>
					))}
					<li className=" pl-5 py-3 pr-[62px] hover:bg-gray-100 cursor-pointer">
						<Link
							to="/"
							onClick={logoutHandler}
							className="block w-full text-base text-[#23262F]-400 flex min-w-[169px] items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
						>
							<span className="inline-block mr-5 text-[#777E90] text-xl">
								<BiLogOutCircle />
							</span>
							Sign out
						</Link>
					</li>
				</CardDropDown>
			)}
		</div>
	);
};

export default HeaderDropdown;

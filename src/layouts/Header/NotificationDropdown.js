import React from 'react';
import CardDropDown from '../UI/CardDropdown';
import NotificationDropdownItem from './NotificationDropdownItem';

const DUMMY_NOTIFICATION = [
	{
		ava: 'https://upanh123.com/wp-content/uploads/2020/10/Anh-gai-xinh-lam-anh-dai-dien-facebook4.jpg',
		description: 'You Booked and earn 8 point for on customer creation Steve Mathew',
		time: '4 weeks ago',
	},
	{
		ava: 'https://1.bp.blogspot.com/-W-9CzXMSpXo/XxF9zR5uqQI/AAAAAAAAqUk/4JakrdrekC0BnNcmBjdiprK3efvCVsNKACLcBGAsYHQ/s1600/anh-dai-dien-gai-dep%2B%25283%2529.jpg',
		description: 'You Booked and earn 8 point for on customer creation Steve Mathew',
		time: '4 weeks ago',
	},
	{
		ava: 'http://media.doisongphapluat.com/695/2021/3/27/hot-girl-so-huu-vong-1-108cm-khang-dinh-ban-sexy-chu-khong-hu-02.jpg',
		description: 'You Booked and earn 8 point for on customer creation Steve Mathew',
		time: '4 weeks ago',
	},
	{
		ava: 'https://nguoinoitieng.tv/images/nnt/101/0/bfoe.jpg',
		description: 'You Booked and earn 8 point for on customer creation Steve Mathew',
		time: '4 weeks ago',
	},
];

const NotificationDropdown = (props) => {
	return (
		<>
			{props.isToggle && (
				<CardDropDown className="top-10 right-[-40px] sm:right-[-175px] w-[335px] sm:w-[418px] z-10">
					{DUMMY_NOTIFICATION.map((item, index) => (
						<NotificationDropdownItem
							ava={item.ava}
							des={item.description}
							time={item.time}
							key={index}
						/>
					))}
					<p className="text-xs leading-5 text-[#84878B] mb-5 cursor-pointer w-fit mx-auto mt-4">
						See all activity
					</p>
				</CardDropDown>
			)}
		</>
	);
};

export default NotificationDropdown;

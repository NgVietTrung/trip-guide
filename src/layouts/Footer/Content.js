import React from 'react';
import logo from '../../assets/images/logo.svg';

const Content = () => {
	const listFooter = [
		{
			title: 'Services',
			item: [
				'Travel Booking',
				'Flight Booking',
				'Car Booking',
				'Fivestar Hotel',
				'Traveling',
			],
		},
		{
			title: 'Support',
			item: ['Account', 'Legal', 'Contact', 'Terms & Condition', 'Privacy Policy'],
		},
		{
			title: 'Business',
			item: ['Success', 'About Location', 'Blog', 'Information', 'Travel Guide'],
		},
	];
	return (
		<div className="grid grid-cols-1 gap-y-9 sm:grid-cols-2 sm:gap-x-9 lg:grid-cols-4 max-w-[1270px] mx-auto text-center px-5 pb-[23px] sm:px-[135px] sm:pb-[150px] pt-[220px]">
			<div className="mx-auto">
				<img alt="" srcSet={logo} className="mb-[25px] block mx-auto" />
				<p className="text-base text-[#84878B] max-w-[254px]">
					This is the team that specializes in making sure in the find it a your interior
					looks cool
				</p>
			</div>
			{listFooter.map((footerItem, index) => (
				<div key={index} className="mx-auto">
					<h4 className="text-2xl font-medium text-[#222529] mb-[18px]">
						{footerItem.title}
					</h4>
					<ul>
						{footerItem.item.map((item) => (
							<li key={item} className="text-base text-[#84878B] font-medium mb-4">
								{item}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Content;

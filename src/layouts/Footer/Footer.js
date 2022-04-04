import React from 'react';
import Content from './Content';
import Subscription from './Subscription';

const Footer = () => {
	return (
		<div className="bg-[#E5E5E5] relative w-full">
			<Subscription />
			<Content />
		</div>
	);
};

export default Footer;

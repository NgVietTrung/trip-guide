import React from 'react';
import ProfileCard from './ProfileCard';
import ProfileDetail from './ProfileDetail';

const ProfileContent = () => {
	return (
		<div className="flex flex-col lg:flex-row">
			<ProfileCard />
			<ProfileDetail />
		</div>
	);
};

export default ProfileContent;

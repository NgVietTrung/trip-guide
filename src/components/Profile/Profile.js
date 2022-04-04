import ProfileContent from './ProfileContent';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Profile = () => {
	return (
		<div className="pt-[117px] px-5 sm:px-[135px] bg-[#FAFAFB] pb-[240px]">
			<div className="lg:flex items-center text-[#3B3E44] mb-[44px] hidden ">
				<Link to="/">Home</Link>
				<MdKeyboardArrowRight className="text-2xl" />
				<span className="text-[#B1B5C3]">Profile</span>
			</div>
			<ProfileContent />
		</div>
	);
};

export default Profile;

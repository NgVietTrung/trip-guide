import { useSelector } from 'react-redux';
import Banner from '../components/Banner/Banner';
import Car from '../components/Car/Car';
import Flight from '../components/Flight/Flight';
import Hotel from '../components/Hotel/Hotel';
import Search from '../components/Search/Search';

const HomePage = () => {
	const homeType = useSelector((state) => state.home.type);
	return (
		<>
			<Banner />
			<Search />
			{homeType === 'hotel' ? <Hotel /> : homeType === 'flight' ? <Flight /> : <Car />}
		</>
	);
};

export default HomePage;

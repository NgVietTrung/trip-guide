import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/userSlice';
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Wallet from './components/Wallet/Wallet';
import Bookings from './components/Bookings/Bookings';
import Rewards from './components/Rewards/Rewards';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import PaymentPage from './pages/PaymentPage';
import CongratulationPage from './pages/CongratulationPage';

function App() {
	const dispatch = useDispatch();
	const [authPage, setAuthPage] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	const authPageHandler = () => {
		setAuthPage((prevState) => !prevState);
	};
	return (
		<div>
			<BrowserRouter>
				<Header onToggle={authPageHandler} />
				{authPage && <AuthPage onToggle={authPageHandler} />}
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="search" element={<ListPage />}>
						<Route
							path="hotel/:idLocation/:dateCheckIn/:dateCheckOut/:sortOrder"
							element={<ListPage />}
						/>
						<Route
							path="hotel/:idLocation/:dateCheckIn/:dateCheckOut/:sortOrder/:roomsNumber"
							element={<ListPage />}
						/>
						<Route
							path="hotel/:idLocation/:dateCheckIn/:dateCheckOut/:sortOrder/:roomsNumber/:amenities"
							element={<ListPage />}
						/>
						<Route
							path="hotel/:idLocation/:dateCheckIn/:dateCheckOut/:sortOrder/:roomsNumber/:starRating"
							element={<ListPage />}
						/>
						<Route
							path="hotel/:idLocation/:dateCheckIn/:dateCheckOut/:sortOrder/:roomsNumber/:amenities/:starRating"
							element={<ListPage />}
						/>
					</Route>
					<Route path="detail/hotel/:idHotel" element={<DetailPage />} />
					<Route path="payment" element={<PaymentPage />} />
					<Route path="congratulation" element={<CongratulationPage />} />
					<Route path="profile" element={<Profile />} />
					<Route path="settings" element={<Settings />}>
						<Route path="personal" element={<Settings />} />
						<Route path="security" element={<Settings />} />
						<Route path="notifications" element={<Settings />} />
						<Route path="payment" element={<Settings />} />
						<Route path="privacy" element={<Settings />} />
						<Route path="preference" element={<Settings />} />
					</Route>
					<Route path="bookings" element={<Bookings />} />
					<Route path="wallet" element={<Wallet />} />
					<Route path="rewards" element={<Rewards />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

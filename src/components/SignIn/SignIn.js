import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase/config';
import { login } from '../../store/userSlice';
import {
	signInWithPopup,
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import useInput from '../../hooks/useInput';
import Button from '../../layouts/UI/Button';
import Input from '../../layouts/UI/Input';
import CloseModal from '../../layouts/UI/CloseModal';
import ErrorInput from '../../layouts/UI/ErrorInput';

const fbProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

const SignIn = (props) => {
	const dispatch = useDispatch();
	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput((value) => value.includes('@'));

	const {
		value: passwordValue,
		isValid: passwordIsValid,
		hasError: passwordHasError,
		valueChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
		reset: passwordReset,
	} = useInput((value) => value.length > 5);

	//LOGIN PROVIDER
	const loginWithProviderHandler = (provider) => {
		signInWithPopup(auth, provider)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						photoUrl: userAuth.user.photoURL,
					})
				);
				props.onToggle();
			})
			.catch((err) => {
				alert(err);
			});
	};

	//normal form login
	let formIsValid = false;
	if (emailIsValid && passwordIsValid) {
		formIsValid = true;
	}

	const signInHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}

		signInWithEmailAndPassword(auth, emailValue, passwordValue)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						photoUrl: userAuth.user.photoURL,
					})
				);
				props.onToggle();
			})
			.catch((err) => {
				alert(err);
			});
	};

	return (
		<>
			<h3 className="text-[30px] sm:text-[40px] text-center font-bold mb-5">Welcome Back!</h3>
			<div className="flex items-center text-white mb-[14px] sm:mb-5 text-sm sm:text-base">
				<Button
					className="h-12 w-full mr-3 font-bold bg-[#316BFF]"
					onClick={() => loginWithProviderHandler(googleProvider)}
				>
					<AiOutlineGoogle className="text-2xl mr-2 sm:mr-[10px]" />
					Sign in with Google
				</Button>
				<Button
					className="h-12 w-[55px] bg-[#3B3E44]"
					onClick={() => loginWithProviderHandler(fbProvider)}
				>
					<FaFacebookF className="text-xl" />
				</Button>
			</div>
			<div className="flex items-center mb-3 sm:mb-5">
				<div className="w-[30%] h-[2px] bg-[#E7ECF3]"></div>
				<p className="w-[40%] text-sm text-center text-[#84878B]">or continue with</p>
				<div className="w-[30%] h-[2px] bg-[#E7ECF3]"></div>
			</div>
			<form action="" onSubmit={signInHandler}>
				<div className="text-[#3B3E44] text-sm mb-3">
					<label htmlFor="" className="block mb-[10px]">
						Email address
					</label>
					<Input
						type="email"
						value={emailValue}
						err={emailHasError}
						onChange={emailChangeHandler}
						onBlur={emailBlurHandler}
						placeholder="Enter your email"
						className="bg-[#E7ECF3] p-[14px] border-none text-sm sm:text-base"
					/>
					{emailHasError && <ErrorInput message="This email is invalid!" />}
				</div>
				<div className="text-[#3B3E44] text-sm mb-3">
					<label htmlFor="" className="block mb-[10px]">
						Password
					</label>
					<Input
						type="password"
						value={passwordValue}
						err={passwordHasError}
						onChange={passwordChangeHandler}
						onBlur={passwordBlurHandler}
						placeholder="Enter your password"
						className="bg-[#E7ECF3] p-[14px] border-none text-sm sm:text-base"
					/>
					{passwordHasError && <ErrorInput message="This password is invalid!" />}
				</div>
				<p
					className="text-sm sm:text-base text-[#316BFF] text-right font-medium mb-5 cursor-pointer"
					onClick={props.onRecovery}
				>
					Forgot your password?
				</p>
				<Button className="py-[11px] w-full text-white text-base sm:text-xl font-bold mb-5 bg-[#316BFF]">
					Sign in
				</Button>
				<div className="text-center text-sm sm:text-base">
					Don’t have an account?{' '}
					<span className="text-[#316BFF] cursor-pointer" onClick={props.onSignUp}>
						Sign up
					</span>
				</div>
			</form>
			<CloseModal onToggle={props.onToggle} />
		</>
	);
};

export default SignIn;

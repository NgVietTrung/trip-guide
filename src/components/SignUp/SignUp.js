import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../layouts/UI/Button';
import Input from '../../layouts/UI/Input';
import CloseModal from '../../layouts/UI/CloseModal';
import ErrorInput from '../../layouts/UI/ErrorInput';
import useInput from '../../hooks/useInput';
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { login } from '../../store/userSlice';
import Checkbox from '../../layouts/UI/Checkbox';

const SignUp = (props) => {
	const dispatch = useDispatch();
	const [isChecked, setIsChecked] = useState(false);
	const {
		value: firstNameValue,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameReset,
	} = useInput((value) => value.length > 0);
	const {
		value: lastNameValue,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useInput((value) => value.length > 0);
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

	const privacyHandler = () => {
		setIsChecked((prevState) => !prevState);
	};

	let formIsValid = false;
	if (emailIsValid && passwordIsValid && firstNameIsValid && lastNameIsValid && isChecked) {
		formIsValid = true;
	}

	const signUpHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}

		createUserWithEmailAndPassword(auth, emailValue, passwordValue)
			.then((userAuth) => {
				updateProfile(userAuth.user, {
					displayName: firstNameValue + ' ' + lastNameValue,
					photoURL:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOAfgsxLSFr40R5GJwvJpDV5WYJvGczb62Q&usqp=CAU',
				})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: firstNameValue + ' ' + lastNameValue,
								photoUrl:
									'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOAfgsxLSFr40R5GJwvJpDV5WYJvGczb62Q&usqp=CAU',
							})
						);
						props.onSignIn();
					})
					.catch((error) => console.log('user not updated'));
			})
			.catch((error) => alert(error));
	};
	return (
		<>
			<h3 className="text-[30px] sm:text-[40px] text-center font-bold mb-5">Let’s go</h3>
			<form action="" onSubmit={signUpHandler}>
				<div className="grid grid-cols-2 gap-[14px]">
					<div className="text-[#3B3E44] text-sm mb-3">
						<label htmlFor="" className="block mb-[10px]">
							First name
						</label>
						<Input
							type="text"
							value={firstNameValue}
							err={firstNameHasError}
							onChange={firstNameChangeHandler}
							onBlur={firstNameBlurHandler}
							placeholder="First name"
							className="bg-[#E7ECF3] p-[14px] border-none text-sm sm:text-base"
						/>
						{firstNameHasError && <ErrorInput message="This field is required!" />}
					</div>
					<div className="text-[#3B3E44] text-sm mb-3">
						<label htmlFor="" className="block mb-[10px]">
							Last name
						</label>
						<Input
							type="text"
							value={lastNameValue}
							err={lastNameHasError}
							onChange={lastNameChangeHandler}
							onBlur={lastNameBlurHandler}
							placeholder="Last name"
							className="bg-[#E7ECF3] p-[14px] border-none text-sm sm:text-base"
						/>

						{lastNameHasError && <ErrorInput message="This field is required!" />}
					</div>
				</div>
				<div className="text-[#3B3E44] text-sm mb-3">
					<label htmlFor="" className="block mb-[10px]">
						Email
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
				<div className="text-[#3B3E44] text-sm mb-3 ">
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
				<div className="flex mb-3 form-check">
					<Checkbox className="!h-4 !w-4 rounded-[2px] mb-5" onChange={privacyHandler} />
					<label className="form-check-label inline-block text-gray-800 text-sm sm:text-base">
						I’ve read and accepted{' '}
						<span className="text-[#316BFF]">Terms of Service</span> and{' '}
						<span className="text-[#316BFF]">Privacy Policy</span>
					</label>
				</div>
				<Button className="py-[11px] w-full text-white text-base sm:text-xl font-bold mb-3 bg-[#316BFF]">
					Sign up
				</Button>
				<div className="text-center text-sm sm:text-base">
					Already have an account?{' '}
					<span className="text-[#316BFF] cursor-pointer" onClick={props.onSignIn}>
						Sign in
					</span>
				</div>
			</form>
			<CloseModal onToggle={props.onToggle} />
		</>
	);
};

export default SignUp;

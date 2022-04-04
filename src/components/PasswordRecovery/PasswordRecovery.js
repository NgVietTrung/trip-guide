import Button from '../../layouts/UI/Button';
import Input from '../../layouts/UI/Input';
import CloseModal from '../../layouts/UI/CloseModal';
import ErrorInput from '../../layouts/UI/ErrorInput';
import useInput from '../../hooks/useInput';
const PasswordRecovery = (props) => {
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

	const {
		value: confirmPasswordValue,
		isValid: confirmPasswordIsValid,
		hasError: confirmPasswordHasError,
		valueChangeHandler: confirmPasswordChangeHandler,
		inputBlurHandler: confirmPasswordBlurHandler,
		reset: confirmPasswordReset,
	} = useInput((value) => value === passwordValue);
	let formIsValid = false;

	if (emailIsValid && passwordIsValid && confirmPasswordIsValid) {
		formIsValid = true;
	}

	const recoveryPasswordHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}

		props.onSignIn();
	};
	return (
		<>
			<h3 className="text-[30px] sm:text-[40px] text-center font-bold">Password Recovery</h3>
			<p className="text-[#84878B] text-center mb-10">
				Enter your email to recover your password
			</p>
			<form action="" onSubmit={recoveryPasswordHandler}>
				<div className="text-[#3B3E44] text-sm mb-3">
					<label htmlFor="" className="block mb-[10px]">
						E-mail
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
				<div className="text-[#3B3E44] text-sm mb-3">
					<label htmlFor="" className="block mb-[10px]">
						Confirm Password
					</label>
					<Input
						type="password"
						value={confirmPasswordValue}
						err={confirmPasswordHasError}
						onChange={confirmPasswordChangeHandler}
						onBlur={confirmPasswordBlurHandler}
						placeholder="Confirm your password"
						className="bg-[#E7ECF3] p-[14px] border-none text-sm sm:text-base"
					/>
					{confirmPasswordHasError && (
						<ErrorInput message="This doesn't match your password" />
					)}
				</div>
				<Button className="py-[11px] w-full text-white text-base sm:text-xl mt-8 font-bold bg-[#316BFF]">
					Submit
				</Button>
			</form>
			<CloseModal onToggle={props.onToggle} />
		</>
	);
};

export default PasswordRecovery;

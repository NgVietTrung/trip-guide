import { useState } from 'react';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import PasswordRecovery from '../components/PasswordRecovery/PasswordRecovery';
import ModalForm from '../layouts/UI/ModalForm';

const AccountPage = (props) => {
	const [authForm, setAuthForm] = useState('sign_in');
	return (
		<ModalForm onToggle={props.onToggle}>
			{authForm === 'sign_in' && (
				<SignIn
					onToggle={props.onToggle}
					onSignUp={() => setAuthForm('sign_up')}
					onRecovery={() => setAuthForm('pass_recovery')}
				/>
			)}
			{authForm === 'sign_up' && (
				<SignUp onToggle={props.onToggle} onSignIn={() => setAuthForm('sign_in')} />
			)}
			{authForm === 'pass_recovery' && (
				<PasswordRecovery
					onToggle={props.onToggle}
					onSignIn={() => setAuthForm('sign_in')}
				/>
			)}
		</ModalForm>
	);
};

export default AccountPage;

import { useState } from 'react';
import ButtonSubmit from '../components/form/ButtonSubmit';
import CustomForm from '../components/form/CustomForm';
import CustomInput from '../components/form/CustomInput';
import Title from '../components/form/Title';
import api from '../api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import FooterForm from '../components/form/FooterForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: 'test1@gmail.com',
		password: '123456',
	});

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		try {
			// const { data } = await api.post('/auth/login', user);
			const res = await signInWithEmailAndPassword(
				auth,
				user.email,
				user.password
			);
			// console.log(res);
			// console.log(res.user.accessToken);
			localStorage.setItem('access_token', res.user.accessToken);
			Swal.fire({
				title: 'Success Login',
				text: 'Welcome!',
				icon: 'success',
			});
			navigate('/');
		} catch (error) {
			toast.error(error.code);
			// toast.error(error.response.data.message);
		}
	};

	const handleOnGoogle = async ({ credential }) => {
		try {
			const { data } = await api.post('/auth/google', null, {
				headers: {
					google_token: credential,
				},
			});

			localStorage.setItem('access_token', data.access_token);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-screen min-h-screen flex flex-row">
			<div className="form-section flex-1 flex justify-center items-center">
				<CustomForm onSubmit={handleOnSubmit}>
					<Title addClassName={'text-5xl font-bold mb-14'}>Login</Title>
					<CustomInput
						type="email"
						id={'email-form'}
						value={user.email}
						placeholder={'jack@gmail.com'}
						onChange={(e) => {
							setUser((prev) => {
								return {
									...prev,
									email: e.target.value,
								};
							});
						}}
					/>
					<CustomInput
						type="password"
						id={'password-form'}
						value={user.password}
						placeholder={'jackSpar'}
						onChange={(e) => {
							setUser((prev) => {
								return {
									...prev,
									password: e.target.value,
								};
							});
						}}
					/>
					<ButtonSubmit value={'Login'} />
					<div className="flex w-full justify-center">or</div>
					<GoogleLogin
						onSuccess={(credentialResponse) => {
							handleOnGoogle(credentialResponse);
						}}
						onError={() => {
							toast.error('Login Failed!');
						}}
					/>
					<FooterForm
						text={`Don't have account?`}
						path={'/register'}
						link={'Create an account'}
					/>
				</CustomForm>
			</div>
			<div className="flex-1 bg-gradient-to-tr from-indigo-400 to-indigo-700"></div>
		</div>
	);
};

export default Login;

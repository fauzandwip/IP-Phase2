import { useState } from 'react';
import ButtonSubmit from '../components/ButtonSubmit';
import CustomForm from '../components/CustomForm';
import CustomInput from '../components/CustomInput';
import Title from '../components/Title';
import api from '../api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await api.post('/auth/login', user);
			console.log(data);

			localStorage.setItem('access_token', data.access_token);
			Swal.fire({
				title: 'Success Login',
				text: 'Welcome!',
				icon: 'success',
			});
			navigate('/');
		} catch (error) {
			toast.error(error.response.data.message);
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
				</CustomForm>
			</div>
			<div className="flex-1 bg-gradient-to-tr from-indigo-400 to-indigo-700"></div>
		</div>
	);
};

export default Login;

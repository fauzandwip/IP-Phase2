import { useState } from 'react';
import ButtonSubmit from '../components/ButtonSubmit';
import CustomForm from '../components/CustomForm';
import CustomInput from '../components/CustomInput';
import Title from '../components/Title';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Register = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		try {
			await api.post('/auth/register', user);
			Swal.fire({
				title: 'Success Register',
				text: 'please login!',
				icon: 'success',
			});
			navigate('/login');
		} catch (error) {
			error.response.data.messages.forEach((message) => {
				toast.error(message);
			});
		}
	};

	return (
		<div className="w-screen min-h-screen flex flex-row">
			<div className="form-section flex-1 flex justify-center items-center">
				<CustomForm onSubmit={handleOnSubmit}>
					<Title addClassName={'text-5xl font-bold mb-14'}>
						Account Register
					</Title>
					<CustomInput
						id={'username-form'}
						value={user.username}
						placeholder={'username'}
						onChange={(e) => {
							setUser((prev) => {
								return {
									...prev,
									username: e.target.value,
								};
							});
						}}
					/>
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
						placeholder={'jaCkSpar'}
						onChange={(e) => {
							setUser((prev) => {
								return {
									...prev,
									password: e.target.value,
								};
							});
						}}
					/>
					<ButtonSubmit value={'REGISTER'} />
				</CustomForm>
			</div>
			<div className="flex-1 bg-gradient-to-tr from-indigo-400 to-indigo-700"></div>
		</div>
	);
};

export default Register;

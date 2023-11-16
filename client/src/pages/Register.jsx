import { useContext, useState } from 'react';
import ButtonSubmit from '../components/form/ButtonSubmit';
import CustomForm from '../components/form/CustomForm';
import CustomInput from '../components/form/CustomInput';
import Title from '../components/form/Title';
import FooterForm from '../components/form/FooterForm';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../../firebase';
// import { setDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(AuthContext);

	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await api.post('/auth/register', user);
			console.log(data);

			// * CLIENT FIREBASE
			// const userCredential = await createUserWithEmailAndPassword(
			// 	auth,
			// 	user.email,
			// 	user.password
			// );

			// await setDoc(doc(db, 'users', userCredential.user.uid), {
			// 	uid: userCredential.user.uid,
			// 	username: user.username,
			// 	email: user.email,
			// });

			// await setDoc(doc(db, 'chatUsers', userCredential.user.uid), {});

			Swal.fire({
				title: 'Success Register',
				text: 'please login!',
				icon: 'success',
			});
			navigate('/login');
		} catch (error) {
			console.log({ error });
			// toast.error(error.response.data.message);
			error.response.data.messages.forEach((message) => {
				toast.error(message);
			});
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
			setCurrentUser((prev) => {
				return { ...prev, ...data.data };
			});

			console.log(currentUser, 'currentUser', data);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-screen min-h-screen flex flex-row">
			<div className="form-section flex-1 flex justify-center items-center">
				<CustomForm onSubmit={handleOnSubmit}>
					<Title addClassName={'text-5xl text-center font-bold mb-14'}>
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
					<div className="flex w-full justify-center">or</div>
					<GoogleLogin
						onSuccess={(credentialResponse) => {
							handleOnGoogle(credentialResponse);
						}}
						onError={() => {
							toast.error('Register Failed!');
						}}
					/>
					<FooterForm
						text={'You have account?'}
						path={'/login'}
						link={'Login Now'}
					/>
				</CustomForm>
			</div>
			<div className="flex-1 bg-gradient-to-tr from-indigo-400 to-indigo-700"></div>
		</div>
	);
};

export default Register;

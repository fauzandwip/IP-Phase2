import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import SideBar from '../components/SideBar';
import MainChat from '../components/chat/MainChat';
import { signOut } from 'firebase/auth';

const Main = () => {
	const navigate = useNavigate();
	return (
		<div className="w-full h-screen p-14 flex flex-row bg-[url('./assets/bg-4.jpg')] bg-cover justify-center items-center">
			<div className="menu-bar w-28 h-full bg-teal-300">
				<button
					className="bg-red-500"
					onClick={() => {
						signOut(auth);
						localStorage.removeItem('access_token');
						navigate('/login');
					}}
				>
					LOGOUT
				</button>
			</div>

			<SideBar />
			<MainChat />
		</div>
	);
};

export default Main;

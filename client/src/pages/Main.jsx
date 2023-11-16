import SideBar from '../components/SideBar';
import MainChat from '../components/chat/MainChat';
import Toolbar from '../components/Toolbar';
import Profile from '../components/Profile';

const Main = () => {
	return (
		<div className="w-full h-screen p-10 flex justify-center items-center bg-[url('./assets/bg-4.jpg')] bg-cover">
			<div className="w-full h-full rounded-[45px] flex flex-row justify-center items-center border-8 border-blue-400/30">
				<Toolbar />
				<Profile />
				{/* <SideBar /> */}
				<MainChat />
			</div>
		</div>
	);
};

export default Main;

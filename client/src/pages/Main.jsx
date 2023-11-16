import SideBar from '../components/SideBar';
import MainChat from '../components/chat/MainChat';
import Toolbar from '../components/Toolbar';

const Main = () => {
	return (
		<div className="w-full h-screen p-10 flex justify-center items-center bg-[url('./assets/bg-4.jpg')] bg-cover">
			<div className="w-full h-full rounded-[45px] flex flex-row justify-center items-center border-8 border-blue-400/30">
				<Toolbar />
				<SideBar />
				<MainChat />
			</div>
		</div>
	);
};

export default Main;

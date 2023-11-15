import SideBar from '../components/SideBar';
import MainChat from '../components/chat/MainChat';

const Main = () => {
	return (
		<div className="w-full h-screen p-14 flex flex-row bg-[url('./assets/bg-4.jpg')] bg-cover justify-center items-center">
			<div className="menu-bar w-28 h-full bg-teal-300"></div>

			<SideBar />
			<MainChat />
		</div>
	);
};

export default Main;

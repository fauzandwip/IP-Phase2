import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<>
			{/* <div>NAVBAR</div> */}
			<Outlet />
		</>
	);
};

export default RootLayout;

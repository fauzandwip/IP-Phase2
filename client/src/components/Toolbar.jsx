// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Toolbar = () => {
	const navigate = useNavigate();

	return (
		<div className="w-28 h-full flex flex-col justify-end items-center px-4 py-12 gap-8 bg-blue-sec rounded-l-[35px]">
			<button
				className="rounded-full p-2 bg-white-primary/50"
				onClick={() => {
					signOut(auth);
					localStorage.removeItem('access_token');
					navigate('/login');
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
					/>
				</svg>
			</button>
			<div className="img w-12 h-12 rounded-full">
				<img
					src="https://imgur.com/4gaSugI.jpg"
					alt="profile"
					className="rounded-full border border-slate-100"
				/>
			</div>
		</div>
	);
};

export default Toolbar;

// Toolbar.propTypes = {
// 	imageUrl: PropTypes.string,
// 	chatName: PropTypes.string,
// 	textMsg: PropTypes.string,
// 	bgColor: PropTypes.string,
// 	color: PropTypes.string,
// };

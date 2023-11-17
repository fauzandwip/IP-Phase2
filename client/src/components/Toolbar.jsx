import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { auth } from '../../firebase';
// import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Toolbar = ({ sideBar, setSideBar }) => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	const onClickProfile = () => {
		sideBar === 'profile' ? setSideBar('sidebar') : setSideBar('profile');
	};

	return (
		<div className="w-28 h-full flex flex-col justify-end items-center px-4 py-12 gap-8 bg-blue-sec rounded-l-[35px]">
			{/* logout */}
			<button
				className="rounded-full p-2 bg-white-primary/50"
				onClick={() => {
					// signOut(auth);
					localStorage.removeItem('access_token');
					toast.success('Success Logout!');
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
			<div
				onClick={onClickProfile}
				className="img w-12 h-12 rounded-full cursor-pointer"
			>
				<img
					src={currentUser.photoUrl}
					alt="profile"
					className="rounded-full w-full h-full border border-slate-100"
				/>
			</div>
		</div>
	);
};

export default Toolbar;

Toolbar.propTypes = {
	sideBar: PropTypes.string,
	setSideBar: PropTypes.func,
	// textMsg: PropTypes.string,
	// bgColor: PropTypes.string,
	// color: PropTypes.string,
};

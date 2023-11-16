// import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../api';
import { toast } from 'react-toastify';

const Profile = () => {
	// const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(AuthContext);

	const [display, setDisplay] = useState('hidden');
	const [profileImg, setProfileImg] = useState('https://imgur.com/4gaSugI.jpg');
	const [image, setImage] = useState({});

	const onUploadFile = (e) => {
		const imageInput = e.target.files[0];

		if (imageInput) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setProfileImg(e.target.result);
				setImage(imageInput);
				// console.log('target file', e.target.result);
				// console.log(imageInput);
			};
			reader.readAsDataURL(imageInput);
		}
	};

	const handleOnSendFile = async () => {
		try {
			// console.log('sendfile');
			// console.log(image);
			const formData = new FormData();
			formData.append('imageUrl', image);
			const { data } = await api.put(`/profile/img-url`, formData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					'Content-Type': 'multipart/form-data',
				},
			});
			setCurrentUser((prev) => {
				return {
					...prev,
					photoUrl: data.data.photoUrl,
				};
			});
			toast.success(data.message);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setProfileImg(currentUser.photoUrl);
	}, []);

	return (
		<div className="side-bar w-1/3 min-h-full flex flex-col p-6 gap-20 bg-blue-sec border-x justify-between items-center">
			<div className="username text-xl font-bold w-full text-left">Profile</div>

			<div className="profile-info flex flex-col justify-center items-center gap-4 -translate-y-10">
				{/* image section */}
				<div
					onMouseOver={() => setDisplay('flex')}
					onMouseLeave={() => setDisplay('hidden')}
					className="img w-20 h-20 rounded-full relative cursor-pointer"
				>
					<img
						src={profileImg}
						alt="profile"
						className="rounded-full border w-full h-full border-slate-100"
					/>
					<label
						htmlFor="input-file"
						className={`bg-slate-700/70 w-full h-full absolute top-0 rounded-full justify-center items-center cursor-pointer ${display}`}
					>
						<input
							type="file"
							id="input-file"
							onChange={onUploadFile}
							className="w-full h-full bg-red-700 hidden z-10"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="white"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
							/>
						</svg>
					</label>
				</div>
				{/* username */}
				<div className="username text-2xl font-black text-center">
					{currentUser.username}
				</div>
			</div>
			<div
				onClick={handleOnSendFile}
				className="w-max px-3 py-1 bg-red-400 text-sm text-slate-100 rounded-xl cursor-pointer"
			>
				Delete Account
			</div>
		</div>
	);
};

export default Profile;

// Toolbar.propTypes = {
// 	imageUrl: PropTypes.string,
// 	chatName: PropTypes.string,
// 	textMsg: PropTypes.string,
// 	bgColor: PropTypes.string,
// 	color: PropTypes.string,
// };

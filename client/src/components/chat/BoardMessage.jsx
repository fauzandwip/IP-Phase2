import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import { getDocs, collection, where, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import { AuthContext } from '../../context/AuthContext';

const BoardMessage = ({ data }) => {
	const [username, setUsername] = useState('');
	const { currentUser } = useContext(AuthContext);

	const ref = useRef();

	useEffect(() => {
		const fetchUser = async () => {
			const q = query(
				collection(db, 'users'),
				where('id', '==', Number(data.senderId))
			);

			try {
				const querySnapshot = await getDocs(q);
				querySnapshot.forEach((doc) => {
					setUsername(doc.data().username);
				});
			} catch (error) {
				console.log(error);
			}
		};
		fetchUser();
	}, []);

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	}, [data]);

	// console.log(username, 'message username');
	// console.log(data, 'message data');

	return (
		// full long
		<div
			className={`flex flex-row w-full ${
				data.senderId == currentUser.id ? 'justify-end' : 'justify-start'
			}`}
		>
			{/* half width */}
			<div
				className={`w-3/5 flex flex-row ${
					data.senderId == currentUser.id ? 'justify-end' : 'justify-start'
				}`}
			>
				{/* inside */}
				<div
					ref={ref}
					className={`message w-fit flex flex-row gap-2 py-2 px-4 text-sm rounded-2xl ${
						data.senderId == currentUser.id ? 'owner-msg' : 'other-msg'
					}`}
				>
					{data.senderId == currentUser.id ? (
						<>
							<div className="text-msg flex flex-col">
								<span>{data.text}</span>
							</div>
						</>
					) : (
						<>
							<img
								src={data.photoUrl}
								alt="Profile"
								className="w-10 h-10 rounded-full"
							/>
							<div className="text-msg flex flex-col">
								<span className=" text-slate-900 font-bold">{username}</span>
								<span>{data.text}</span>
							</div>
						</>
					)}
					{/* <img
						src={data.photoUrl}
						alt="Profile"
						className="w-10 h-10 rounded-full"
					/>
					<div className="text-msg flex flex-col">
						<span className=" text-slate-900 font-bold">{username}</span>
						<span>{data.text}</span>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default BoardMessage;

BoardMessage.propTypes = {
	data: PropTypes.object,
};

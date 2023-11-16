import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import { getDocs, collection, where, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import { AuthContext } from '../../context/AuthContext';

const BoardMessage = ({ data }) => {
	const [username, setUsername] = useState('');
	const { currentUser } = useContext(AuthContext);

	const ref = useRef();
	console.log(data);
	useEffect(() => {
		const fetchUser = async () => {
			const q = query(
				collection(db, 'users'),
				where('uid', '==', data.senderId)
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

	console.log(username, 'message username');

	return (
		<div
			className={`flex flex-row w-full ${
				data.senderId === currentUser.uid ? 'justify-end' : 'justify-start'
			}`}
		>
			<div
				className={`w-2/5 flex flex-row ${
					data.senderId === currentUser.uid ? 'justify-end' : 'justify-start'
				}`}
			>
				<div
					ref={ref}
					className={`message w-fit flex flex-row gap-2 py-2 px-4 rounded-2xl ${
						data.senderId === currentUser.uid ? 'owner-msg' : 'other-msg'
					}`}
				>
					<span>{username}</span>
					<span>{data.text}</span>
				</div>
			</div>
		</div>
	);
};

export default BoardMessage;

BoardMessage.propTypes = {
	data: PropTypes.object,
};
